

const localFileUpload = (req, resp) => {
    try {
        const file = req.files.file
        // console.log("File AA Gayi JEE=> ", file)

        let path = __dirname + "/files/" + Date.now() + `.${file.name.split(".")[1]}`

        console.log("PATH-> ", path)
        file.mv(path)
        resp.json({
            success: true,
            message: 'Local File Uploaded Successfully',
        })

    } catch (error) {
        console.log("Not able to upload file Locally !")
        console.log(error)
    }
}

module.exports = localFileUpload