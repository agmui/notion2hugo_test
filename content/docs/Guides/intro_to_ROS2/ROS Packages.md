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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=ebb058fcfa5bfe835975bec42a15ec791358bbd192e9bd7311c3fa79d5d5d024&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=fb5bd8e15201b11621b3bc063754672245ec2c611c902579eff469c28ae7f7da&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=09af330a4dea4ff9a7ff8a039be16d13f6d20b414e8995398b8c0cfdafc3a130&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=3a0d5b72b1935c8449def9c8a3404c4090af2d4a6f49a7201ce98359845e604f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=d561822067da052c14c28926373e484a57a7f0461ca4087d68c6ab1684ff2830&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=d961a4aba0ebfb6628adeee368cc36dcf84087a76f462183ed8eae8cec8482da&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAVYU3CV%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCCwKExuhJHdtL53R%2FSfXi%2FQi%2FTYEZ5e34%2B76DOfBj1ZgIhAI4iRNmY1j4eFA%2F3FrzY7cbeKQFf63G%2Ba%2Fl69%2Fc2INihKv8DCHgQABoMNjM3NDIzMTgzODA1IgxDENSs4SOXXbH3yj8q3AND%2FYUtmEHf%2BBr%2FWrxW4pPRo51i3BCfyFqkQE4asjuyM%2FAcYMVTXpKoAUrYjL701%2FHEWUroJN5or1eWNDRVN%2B3LnVUAeQYl%2FJpka98Ayf3qPXX59iRzdm61zDf3umWFGaU8J5ZJxhk3nXQtGDBe1J0OO99mK2WaADg%2BZ8vaAuakhvQpXb4a1K01mUHkQFpOuz7pOM77Xz8JaxObKLgJss%2FSnvKG9hxcke6oA4%2BnGvE2LwVR4uLaveUYLo71kx4Xg3ln%2Bh7ardCyjcTc4VjM3kr0a8%2BbK%2BNmM8d4wlzRjjwGsypIzkdCh2VU47YIovsCUEUFPxjF8ysqcsOK3thZo8Hen7Xy%2BC4Se0%2FnItFgv6Nck%2BEH%2B3%2Br66Haqj28ZDrdPt8cVo%2BLqLIINLOQ4Zq1rEh5CsxWs2td%2BWG9cJOT%2FuoLw0HWdQNKF99KbCZpegkBLmBiwTFwbIST2U2PdVUpyFdCZ6oWXGmz0ZqouOBBJajWQGll0fAmYKLVoozTLnM89NG%2FvH5zNPq1ok%2BqbiGVu0U3cvF6qOW7djBWTjfcBZS2DybOpIDL5OAfhvlu%2FsovZoSexdFRonpLULm50imZ%2FmV8zc5ckIp%2F46%2Fl1ThQpcakGw0Ps79GVRsggXfq9zCTvOu%2BBjqkAcND%2BzTtPrEP6PJRWpLL5bYm%2Bh3UOUDflvSt8FdooqTdCFYuhNg0OPf0%2BJfbC0%2FzMHHtZKIFb3eoBJEWzzTRZSxNjrppR3Eo74cg64V4xs1iDftYTwftXG28tz2Sw6rBjeDmmawxq%2BQttU099%2BR%2FmmG97W8FwoWIdLazCkNAF%2FogQkcX0fQ0LN0uxRsjEUevOgcp5TfJunuYitT2d%2FWFatBVnD4p&X-Amz-Signature=bd0e571126f5e685d648e12ac986d6c2ebe4f7d8ad773008c7cdbc92d022b73e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
