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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=b744404402161f5e10aca534e79e395f2f21ba2868e7275d5adaf183e8f823a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=3f05599539275c26f99cf17b3e77b849155ce9c7471eebae3eeceff7ee3e9941&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=9519a4d676fed8b0ddee7ff0f6d1818ec60c288ed15133311b558acc479812bd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=f0a47482ba598a49798745cf284fa17240d6325b0e725c52ab512abf9ea2a76a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=d098440d9ad07a52d42fbd383ab1eb31cba450d0d42d079167c899552354402b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=6257698b6499651a6e435583646dae7cb7c48b4bef8e701315d8d1ef56889b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCIZ6KY6%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T180951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCTjQPjBnhpZAhDtGtyyE1UtTB0O2x4soP3g0kt3oy2FAIhANUwEeVWilUrRISdjDIoeC77QUakJUgSsaIm0ZJOszMmKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxYtKkHXcr9zNzT34wq3APO00zSnAHBC1FIkvi5iwiVqZgHe4EZBYtvCAsyocYyuJIIazexFII4S2yXKebfzOhfP9C2iX0SDLkNXrpfSHV4POP5zAwwTdGlwYvAxqR4FnxNv2vXVFviNqp%2B0G%2B0Spbj%2F5ziv2HAfJ51SR5VWD56PuVVM3zxPuTJaghlRb4uyWsuKNgsZ%2Bq7vaGaFhFviTN7YIRS%2FhB7R9uKrhb41evoiBteZi%2F9IA8Bq4hEobQKUxJ0rAFYhu7uboIUVgszD85x2OzEcDcVSCUh4oBdIvlXM4rrtXfVKNiymOD5ppg0mf5ElAFf1PtXyMtnxbgAtfiwSPWgKAZ0eSE2cGRH%2BUjB6qpzblZE1e7BxBcu8uDe8zimXuAkqbmorIJesDChBL8ZAIunn1eFV12Cx%2FLKAhEsow%2Flvja4yiL1V7pmHomL4cyi8OA%2FA74ZiQvUD%2Frg4jZSRM0IqTGNBeoKsAyE2%2ByUDL6PXFtTX%2BkN1weSfQEeOBM%2FCYN7QJr%2FW68plTUW6uLlQr0l2fH%2B1YBS8uJTOfw8Vbu3GpnsycZMAIC9QrjDFaDATggW7tlGzAR07j5pT2z9wRbiK0yUebbkz71%2FRGlC8YOCkmMllzzWo8s%2FogrDGVZIU7mroYDY%2F16TijCzoP7ABjqkASKjS%2Bot0RJvhZSIuEHp8bDpVDak5gMr9%2FyfqtaF1DwPI6nt7fUDfkLAfsfspeXASEV06Ug5UdgMf5hKXZzpOkI%2FGnzLbRqXeHL8YC8rovwCwHSgpB2iBc6gq0xTsZIMitChYeEry3mGG9DTqUsD1utB2r4mDiXSyqBb%2FxTBbR2hVUw4fFk0Dza9F%2Ba85zRk%2F3I7Fn8SLUf3AfjOQx0G7nF1dFod&X-Amz-Signature=f3cc4d01b19f0c89ed2e9d7e6d0af40f3540e1fc5c859d8d754d5e6ca6378e5f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
