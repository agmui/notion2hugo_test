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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=bcf650f63f420fd0c40c4116b0ad15401656363fa0f209c94c084a1b5e99b082&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=ecede025979634d8f9a8973468c358f6b5af009c0e1a44983bc8f49118f1570a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=67d4b87ec8f180b75609e0b53ee3598962343eed536be513d9f67584a00d2871&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=bb651aa93914c80f428f9dc34e2699c526070f6a820ffdfd7b53ea85af5547ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=42fcdc7b983dec8e74cf8eed4c34c26fd5432d37b6c154e55c359ed23ca51950&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=c8274f5005d7d8c29d15e314e56f42bb561d4faccda60721a4cf94c99fe52a47&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQJU4R2Y%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T150848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbntUutLG%2FlWNH4EzRkYpBrLD2jxaQSUUTbTbc8q80iAIhAPjo3hn%2Bz3tFzhG5E8Pq1DM1CPZBUTkc055Jz7DWCmv5KogECPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx2A8fcm1LF1UR6jTQq3AOwOSfg%2FARzxQ2ws0SM7wmPGufPnYPbVITC%2BqcGyD7aUSv%2FiuUApKZRI%2Be7v%2FSVq%2FTC3BUecHTU6ODZopZRs5RtbfQ0z9HIyeDrjZjNmxOab28wOCDcOz0c73REDoESJOnDLXLF2Rkk7qz9FHevwS%2FdNRf7Msjx%2BwPE0x5YjUceLeqYtkp8VKv6IfEXBhzMhQE8bIr4YnY0Y4d8sB%2FLH0iKJ420iSRSNyglkkyBSa2aZnllTHvvQsIv%2BGwPzTuizuPse65EIKajR%2BN%2F7e4jmCsJZNKUiVqfyDYn5ClsgvKYa5tQNlbh14J5iBqGN%2FersPOfO5l4e%2BfHxFGOArbGsM2MvgguEDWiUHMIAXb4xYu8EmN7%2FXAhYotVqOFi%2BcG3PA6V%2Fl2rc92P50ltGnW5AaWRNebJZmOLVJQ77LbAGaYKzM1eSCu1wf4PJ94jRlkZmIrk0E0cEi4fgrrs0ASXWH6gChX%2FVPrl4vq%2ByLE9VZi1YDspzGtBG1sZTyaTr4FZPG%2Fq3TBAM3wnbaE%2FuMyKvoPsEGJp2LrWGYT0gZxxBaVB99jOAVBhXxkeKyJbs0ejc4i9jnFXWee%2FqZHov53g5y1peoJTTrpyYEeRgxaIFUTHogR8rdxWQYnoAZmyYjCr3oW%2FBjqkAe0Em489d3IiuknFkgeu2lvT9AjDy%2BwOQN%2B6bOmZT0GuRmQ7tYT13WnYT50oOj1wglIdJ858ilxU2xt9cZ0tv4O1Kenaj4viPb7LZYxgta3ED7xwIbAWjify9WgR5O3y%2FOpRZYUrq3KirwqPHrCMuovyP4HZr7EAMDFJipYn8Eb01nYKD9wisoXglwtj6cbfUN2opygM0QGoVfDBd5pficmfmzsQ&X-Amz-Signature=31925d0bb4e432ec701d0cb6a45b857455cee0a5a1730e05b3bced972df79f77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
