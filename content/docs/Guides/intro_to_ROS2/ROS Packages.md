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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=b6d8ac71d00441a69cc5acaae72bcd049317bb43f1079da33ced4063de713858&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=58ac0f62498fc8446308e54cba721a88a3f9ebedccfa5bc6a0e5adf78d0b2ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=a6e360123b668d08011c758035837a8f86e5bb9d945e274b9daf38d169fa6345&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=f72be7cb296b2e6d0f66a42f2cfe3897ea6b179ec62aef60ddfd34579ae5e101&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=6e36b40392defea96909a01a1cdde24587ed59230e2fa1e177362eab9c30e551&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=de9b83d593379c5c9fa61c20265696ea02ec7e5d3aa69bfd1c487257eef99a7f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JMTZPLK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUaP36CoeXY6e0xZjb9TgFsr8lnxCDVjXxeDo%2FwV9yDwIgPTU9gbnnUs7r2gulVEt6MBz5tVxWWXLwDJgVbnMEIRAq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOm4U5Xz%2B%2FQRCrjTYircA6FDWFR4LTuajBuSaHd2KqvVwmzsR%2FcxrxVTKFeo6xocsBjuH3ogFiQklKZJo1nQ%2FZkLJwLbSS%2BVzBYDSGnVUKAmUszLaf9wYJmWQQkC7Uiz39sNwvMa8u5Sv4j%2B4D%2FhW68zkBdOjDaEGKYBQkJ01M5ReFsRS5HzOHMwoMp2N%2B%2BW7yvf%2FtFuPfbX%2Fz67nHWDFOb3uy0uzv1q%2BEOGw3iPJ5NCfAU5sHSUwjkiO33gCTyUyPd3wTdUQ%2B7i6Ts9UVmvOXhFXPaZQhpfe7YIdZN%2Fz4tTZ2YebRLdpM4I7UCn%2BBGiNet7FRF%2BfRDltUm50ZmJB9oGobQTv%2ByeFA%2BIYVMJI%2BI0ljzGYZT%2BXC%2FQg%2Buiu5iPXfcwDLXXyI5%2BXPs2FvsSpo0kauY3HXp%2F0uakM%2FVBA8HpPlZ9k3%2B62KFtkxu%2FxPVpKKWB2msMjr1ZiTX1X3iIxKWdTnybTG6Qxyu%2FxhCJT33KhfYXp8Mi8cl4eiLDq9%2FbzLd5K6uKAlyR1efk9GK8NNowiQvG6SfO9CT2ialIgn02s25%2Bv6Y2%2FxE4TRDPdG%2F1CwDX%2BYU21hQTbXI8OSsIXesU7KkSbwfG5C5mqX1%2FCBrZJcjHbkqKlxKMDl7m0A6py%2BYTtSMR3TVTp%2BwuMOWL%2Bb8GOqUBFSu6ErA6Jt760D9ydSSFoxGrqteniz0QfWYdLJx3Y8ELUdpOYJ7FVjt9bqS5Bg498siFraFWMYmuurfwa1N%2FJPaUkSlPd7G080Q8nCSqqx79f5V1jIHahIISe0D6yYYsy2bs%2FVGiaKP7mGJTPjBZGerhnlE5UWoLNCh8JcicaYgfPdgfW34ut2JVsJf82mw6ix0e2zcxdPCTghfaO8JefA5HQkkK&X-Amz-Signature=f483dc8cd9775c5f90f2c894049201190f56b11d638155f5ee732c51894144ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
