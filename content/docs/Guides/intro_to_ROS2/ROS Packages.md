---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=5972c21889e032d212cfb24bc996c3742d73918a433c9d0980481478f3d9f5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=5b78c01ae0c99d3bc65fa25ea1efa7870e1c1bd673e398b6be1159827e0cd48c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=d9b79099e18c7734c1c5ccf4379af9223967bee24c1ab20ad2cd52ce23b16d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=0f39bdb0e97745c3526df52e9008681e9a017a2146d72b50de16ecaa456d3bcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=f0b4e73923dd6f8a5fc313a411d5424d1214ca205d201c6c0c6a3a2abe55ff9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=e95c00613b4dd2e24dc1c3c1114eb9e53b8b287d22a9a235dcfb290643fa816c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WOQMKIN%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T200955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuXhwGXS0UkqahuFq6r2%2BO5p0ZwHFZc6SfhrbSe3MCGAIhANGC%2FkeAB%2FVWucD05blMkyD2mJxpSIf15jfXbAwr8H9cKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHAIThvw3v%2BduYHX8q3AM%2FDcM5zPcudoMoB5%2FblNoJQKSKG%2BFdGCcqU21sFE68a58hDIIf7pnD7j0Ac9JiksaNcmWDa0slHXbSzsO5D8rhsTeXVL8vZhVfQmLVyoibMFpicth5F2S8JjKcPCwRCFsof%2BT%2FnpHaPuGow4RQn2xBoJKMT4OXsxRBerFDrI%2BSQrsIADraCuTiQKG7ZhCWM4OmwX3yaSwoyh05U4Q3%2Buiu1hGW2ZcLcCc8KJ9fvV9s%2BpFT9IzMXg%2FdS6V0nXpTpD6YapWlgLxm0PAkKt8vy6PIVgFqKIRTJ1yIGY7TwDIO3xuHv1WK3eadXQ2TIolp3e7EgrwF%2F35Aa0NtzmcCKR1vAM%2FBs487NvOgzsAmCbbXq0eHz2kRzd3d1vN8X%2FpWFb6LXwNKt4n0xJAqGrKbGYXeNosfx1P2GoY2Evu9mLqhJmeVoD0nENWwRILvzxSEEHjBXcd13qwv2mfpaP%2BkIL5G3oyYCKosDEGqL1%2FXrRxhppEX0ES3DXeDCheQ9D0O4%2BsD1AQTcddJWpBLMygUi3enb7Br8ACnJLNf4DMRdrD6klZ2aRXvCi0hOFbGD61dlx539%2BTigKdFy2M3qyQ8nSFb2Oh3BxT2aRN%2BRWx4ueAvpOJxXjsf8xcAozI9szDQ77rDBjqkAZv0wx9K1BmMydhGPPyAMTFN4suGhXV9J%2BG4zx4KkLkBSpGLSZsm84qZa6f4SFxv3OfobBYwSJwaze2y7R9W1vfcfIrIbx1DUohlwBGkx18kLXAb%2F5tlBcJN2z8xfK9D4O%2F9JuPS1YvPVC5d4edmUBtL5TQjAxU9KgZ2Zy9Czkx6%2FVv3pny%2FnzV7S%2FUKXkwzyVoYhNPYRZgUQHVBbTd1ebr3NU%2BP&X-Amz-Signature=7427e0adbd969fbec01cda84ee4601494a712ad770457ace6ad8f1133e72fc6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
