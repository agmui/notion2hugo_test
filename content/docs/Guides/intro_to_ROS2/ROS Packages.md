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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=23dc0cb2e111797699be46a25fe6e4a766dcdfb077eec0d44900c72081bb1721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=204f2fdac72b992ffb2dc0f205a5d61ed03081fa7c2b6216d932ffececc53ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=50c585b25a4a4a19c000c4a69abe405325db78b06cc1ad6095408b897f54fded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=d2ba9430217fb398971b3d295f26513eb414ac92029bfd3ed72c5b68274b04b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=76f9f41709949772837bbde001b702471a3b6bbdac27e216719b05d265a770c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=49936d1655cd03d37bb492ef6a7c3c53d5f9aa4e57cd6c0c694f3b1e0dd50018&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NC4GCKY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T071954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIFLIDcHL11%2FDb6hTIeH64lHYXcmI6Kgmdt1zcPgaAV6VAiEA1dQZSbrtThJuJW1gYDDfpwUf03zDnnrr2o7hPs%2Fju%2Fcq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBIec0f74ScMRbYhxircA3Seime4XN%2BlsvagGk1pZx32g3%2F%2FFxnAC56FEp%2FGa7elAUIB2e%2BkLw%2BQv5CtYNDPOSOibLjJ%2BreWHywNPiXgqSgHpbawFerF03W92gjPn2K0C%2FXEYVd4aFLx5Q916iZIUxeWoImOGgEKxvW68w9Qvs8ggT4%2Btzv6jmLRSOu51Iq30LZrdhfzUUiplkdH3fXmkva4OEn2CUTWJe8zNw8TLemhZWrU7HpHC6055ymYhHZtDrO054UTKZqDBlESicS649qJXKdTP6qUEwSBZwzNA7Kxkx3dVv8AZGs5zZemL%2FRfnf%2BH0V%2FaUrtCJ6Z4eUPkWXk0Odm18uLaU3iWTGjo9FC7%2BdyQHxYuSc7puog5J%2F%2BZGdSKzMBGFUwh7auYoOX9EnKEraev0FXolDSG3bi%2FkbUpZC3ZKcC0pO4EN3Xxg5BHpbOSMdHG8LmWxWhXT09Mo2Wx%2BsrhbiPTp7J7KIHFS5CGhRIrYg832QG5WMiPpasO7nHL%2B0U6dhUprqRSo3hlOiCn0McSt6Hp8GPOHBEDDKhCTwcgkXSw4yKox65Z7UBwmfI1vGFCM%2BMIG11uNXj9jPgGCz9MECOPXfIAWQ1%2BkNGAGX2MoHlwnEHFCgA6g5uk7vgLNhaKCNub6gwlML%2B2wcQGOqUBVDx%2BX58bTA3UOSYxVYVnqQw9mFnJJHwn%2FdP2JVelZMb%2FyGbdUn6gPmqYjWAUO8FfxjVtpHT1XHlDlcFmR%2B5KqlMnxa5ypg4Z2%2FRVRR%2BPGOrvOKyy6SMb4g4or4AhMB6Py%2Fx2qfp2f%2FEo9AidrrENsWMN2hzlQYQoO1S68CC3qZDZR9Srwc2q5Hw8qyk94bl8Tnx3Y14FSlXiqMosE8ntgxHo7YTp&X-Amz-Signature=6d888a5fbb0ff10e66a275a5c9fcac60c582c92d9e64cc962055d1667d0ae36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
