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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=1f525e0478abda014cda35f184b7c6e251f81187e79498f262d59da493338b98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=3a330db9d3bf62ac361ab5cddb1302cb1b7d58bfc74e1e47bcfbc0942a517268&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=f0022e16b472ded22b3a812d17a6be47c6f8b2c17c9a17593a64fc2e9cb5e86e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=981ca316233e33fe30c47302bc3a89a61dfea08eae4e010aa7e73f0b65d1e70b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=564a3646545f3caab57646924e84c360180ccd900d9d03c3334f77c3cf406dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=6a752d51b41ceeef615c8d8dace2a9d69365c23ab64d9fbc062d9069619830ed&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SUXZS5YB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T091034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQClyC%2FRC92abkXDNZQSVKjN4RddH11jDlEjiCQGSqsW%2BAIhAKIAPJhzsuJ2mvOQh9Ov9bD0%2FlefvGrq%2BdXZQK9n%2BwDsKv8DCBAQABoMNjM3NDIzMTgzODA1IgxryFsFJSZ2TWMZC4sq3APCdXxKFmb1wUjVaQu4z%2Fwhq6uZ9nKzWBV7vOFYwe7jnBT5yif%2F0JQOQZ0MHJvLfgrMXQiA5xhgxmc8CzOG9u2dL6hSDiR63w4sdxC4Q%2BPl3kh%2BpjW%2FOVKyamFzOIF7Fxls7pSLApW4yBYJDf8XFcDbGTVZbceV1RudRhvIv21D4yxyBLGQ6amee%2FB7v1wxQknkp8gp%2FJJ2%2BnxHRj1l7RB%2B0gQ%2FlsIotnwjZZY%2BZITBMSvDjqqvpd8clcM4cP4ctq349wJDFZWwU9tx3v1%2Fs3CTV2wOVdf61GiAJ6vt9Jm67sSfaze7%2FwLFWJ5%2BYj4b05bbdG%2B9UZAvpsE0CELW5QcaAFpeHFSStPobUp4D%2BHfbnBqHkDV3K1iQFpPTLWh62dhwMEwhUihcNQblxo1XiWjAqxBjodwxUrUC9gCNXGpiyYZ1QGSJLFoEWQmx%2B2zCsraFAp4frYxTyHqJBHrdLp%2BL%2F0J1%2B3NjvWXY2cVo%2BOmORhAFkpPPbxPSLF5efeTpyN%2Fgy0Ed7LH62bKInpIj3bcazELCKCYx6qVXR2lei4BvNI3WeeqGm%2F5ktcg4Bph6tzTbL6k0K0tZforkTvKMC9ifxJYZoTGqNXIqq7KTc%2FtHiOw6s73UONGQ415n3zD%2FxPrBBjqkAU7h7XnCoy%2BGJrI1byyMrCd6xvQZk4snvGuWqTqy6KfaNOpUyCOCktnAqSl4EgLGBa15dRUaoAPkvKr3MFqMPe3hAXJlKFCkHVDCESc9QbwTPDmFtJf54iTLUsc%2FWSwJLArccPaBO%2FhOfCxpF1RInkr9JoiMVS35nksrXcVyxBe79KRYQc08cR7i50Xa9c7szzA5RS19xo09BdXTr2HGFq09UQFy&X-Amz-Signature=389adffe50b63ec3322d4fe92b60d9cb87cbf2ede6f37c69ae855182dacc4133&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
