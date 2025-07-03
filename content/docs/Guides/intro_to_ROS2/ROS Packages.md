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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=fd24c8ef22c900a550bc9939f345c17557b98c99df2498ee1748f4903e4b95e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=92ea3cf89fb5004e56091a8db0eee123ccbd81783482a8fe48b82c5ec60bd134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=1cb8653615b02af7b44ccefb3b7dfb6cf15f54ebaa555b57115327b3797dc922&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=78f85415c460bda3e848a2e8de2499fb41b5587fcc066562a5aae859b52805eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=94bbdf6a619c0aa1bbe6a39b2fe5113ba58ac68fa6b56c21bcdbec05ae1f54f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=9952718d202e030639b1379f0db42d339be48f110bcb43f7c8e51fb8245b4a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NST4UPW%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD6jhN%2FU2yXUMfQPXyhTcN%2Bmc%2BmK2zFWPQE864SMHJ%2B6QIgaTaavBG9OzJi9yLVGcpUH2iiIGhiKuXqBY%2B9jFUD1HQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDMCyjzvUvFrh0OJh3ircA9VxmEX5iIUbwv38mJ08njKtPo3oE8AGidtQ5eqTx6Yxzt2Ag0STO5%2FsSHciti5PlRz5Rwg2qz3bauiFkOvw3XxMu7xSKmvMioSdAdsGBEHFbVrDjSv7FVQYxD2Lex5sExRV32%2BDsgFp%2BAXAmM4rwEmwsbo1LkAHr%2FtgSP5WH7ZNHuI4KERAHJpF5R%2BzdDUZ8GJPRd49WMSZFFSdvjF1VRgNUS5SmGL2cogyofzQ3gyQD34bsjyIG8MTLYlLv6TfS1epDb4xhDTQK%2BxCbriADYpNuD27IF%2F3DHONBFejxFSjOaH2bGyyZMwSc22iGWHM2B6UduvkyifcME3GXc0SBCLst%2BBePQuk4xvFsaZiawxCCgS74hlNVUxSUvU3Y2qSwDWaZjWKbBtDKuzHD67DlSEwrrU%2BRmW%2B8avjThCJYKcWgdOLZ2d8ahyHmzZSO4%2FknMpyeyS0mygM5bY1B2JRG4RXUVKN0QJcntj2hAy0UGALmqkDjzgI7K35JEN%2BcIn4J22Mxq2mK2CJANBhBktiO6oHIZOgm15BgCmKa7xlMD4Erf0zZuQn8R8VAgGtD6lC6gz0PQP9rddmolHF1TnUgMOiwPji0cXjEei3X9zTrpID7CPYrfaHZ9FaYcRRMLSJmcMGOqUBLNXIsQVJr75%2F7GBY4e7KyHa7U0B3VglivXWJR20DFz36bEMtNtZFrRP2KnHc3DNsTQ6WQvEKtjCIgSJfMON%2BD663Wbv5VLyBJ5h%2Bwwwg51SWWljqN%2FozpZNlmGJGpocNjD1l3STYB6LipXmJVUw2OhGdhcyPEHqgTUZtRrNY0t0xIava0Ms21uZEmH4LrUFMygkp4EupWlDi7vanAxqJRhp%2BkqmT&X-Amz-Signature=7917f20fc60e2def59f5452d67b5f3c7f9a9d58d9981908a147c6d2cc619bd9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
