---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=33f9896d264229a5c36e8eaed63122b8258e1549d8d42bc4315119bea5497784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=786f518ebff9f72b6e6aaca4a449475e64f8356e1b012b63a8971f44a7faf277&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=5cddbac69d2f7970d4e6b503beaea800709f7def2c55c238e1b89bd0fe42c408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=f4d900ed712df57514748c70d656fc3e1fce5e14321a3cd718a5ee5d7394018d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=820cccb476d7ef18f8fbe59cb62ae95f80f1f369448ec8bfbe7198239df82fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=77b8f5debf53ecad86c3e61e225f968e73813025fa2ad093b8e6517c18b42efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJGTE3TV%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQCHnT6aTrr%2FWCsR%2Fpf9ijGH5iMS8y0x6k9fc27vYzKwiwIhAIZIlnACXH7EvXrNgWO4mLjbF5q5uPt6I0f4ZwVih8XnKv8DCBEQABoMNjM3NDIzMTgzODA1IgxXgY4vAbWtVXmDPCcq3AP3YSJD50ldwAgqi7HQFStIKfKi8sH4exJdnAHH23FtphsAoZ%2F1O1fB6Rqpw5SjCppvTGdJPN27OczYACOcHcqQ%2BLBMMLJk1zgWqoHaBfVH%2BZZYpq4rDEkL%2FOBAE6UFRjlH9oKowurwp5WD%2B8ahXUNG26%2FN2IP%2BK6f%2B0JCXf4TFtD8Rs8bP%2F7R1eX66E8rhFUIT%2B7GLQm74LhB1K5sX5LDlj6ySwax12F0E2JqdOZJDDDshvgMSfVLWwc%2BbOdjsPSWHAZTSCl%2Bk3txgPtJLK%2FAArKQlcf7j6M4pKttDWDK6AITkw4bq1IY3JtjAxnTJ6%2B2e8sWFqo%2Fp549Kzg7GAMftYsWCPbDCKYUeC82P992Iym%2BAJ236GILdtMqZWsXQiEvQ1lDnol2uekbEqXGaB5TePa89wUB55i1uZ%2FY9p9rAArc81cUoU2bC%2B9wZqbk0bU8qEXtrQ7quPR8%2BF3g3u30%2FDH%2FgIuec%2Fn53s7SKEGaTxdkRy5cPaGUIsQqpiIixSyXlO1t398R6rN%2F0ISqSiFSq1qD5c1V00oGxctfRJwlvJFd12N1nUEZ605IrzhZWI%2B7mv%2BLKgpqEaec4ZaZpv2fwwzagDeuSEvE2RhAOhkJ%2BM4Zc5WLAehcg83NmODCMjeTCBjqkAehQAnLFL11jb4fm5nBtqEyZ2Z6QY76dOZ1LDg4T%2B1gxXWYRq%2Fp9Kcw6a%2BZSA61LoorJ2vED32McbYSA8z30sT8JLArtFBhbOUdgC28v8dUPR6VG4J%2Fly0BagntvdxCA%2FqTOTsQ8OKa2Hz4TQ7w3SjClrutouR8DktaF%2BaI101zhKTLsp9R4%2FCZnz1rm25fckWK6vnt57iBn4BqG9jPWrurXcQmg&X-Amz-Signature=b846b8d8bc54a26ebd93608204faaf7e6a3879b0032cffb5f254419b4102a4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
