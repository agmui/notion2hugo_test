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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=b5b37d318d64ac1b941fe7d951a3d4aa09995257feafbd9af0d8a99fb69f9748&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=9910453e315d40f86cd39edd5e9d85c71ca8415ad7f77ff9f8140683cb2cdd55&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=525f20a0457dcabaebf36712f15470d8f9adff4abfa892869d05ba102026a77e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=39bea55c8e769c546d4447d22c1b9bd01ad75c67d91c5de1d9ccc493b9612f56&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=dfd798580b470a22e25420c76827539f5c75c1130d4420a0a787405c49a0a073&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=b7b789c6772557c8a702fe98be4b06e5adb383a0cabe60e3c8b7542048e39f35&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KSDXA6%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB9siWib1xHPcTYLqA9rnECkrdRMEJusTqe7dCIS8%2FZwIhAJ3TE6U150FzDUUFo3xh06BjxIZ%2BC5jsXCnuXj%2BAwwAGKv8DCFYQABoMNjM3NDIzMTgzODA1IgztPgQvUQIK%2BPn%2BIH0q3ANSSa4h5kqpETMG9FmLgwar%2FrlZDWLgtixC3r03Yi0OL8Kjpps19xRdFtfzJ050YtQSc2HtMlb036lHS7u%2Bx9Xo6Su8lzo6Gb%2FgLZpSJ0XWCLEs%2BKlBJvw2Yagc7aRYT8i%2FZPdH2xPSgj%2FFWGUX%2Bv2SuFvQLOWNyXUwO6EbYNL%2BM%2B9EueFXnpXOUeAOOgWTN2dL5Zk4Uk4EZxWT7cZf%2FCBRtxBnxrG0he83jeISJeKh%2Fk7qshuXTHTt0g5DkSR%2FY3z9Q9njumBcGW6luknZMsMAzixMKy3ghNRyA0xHLCIzG4eKMQ7F41pDY11IfKnrZ4AoIBkZX89SmY2H%2FxRC0XKcxy5Pa4LAQgnL5hvEwGZWL8Mbqb3GPdOwFzlA4EvXQqDnu91UqSrC0N3yKHwxV%2BONieHhwiWIQwWelcSs1ffws77jQEeJKtzKibLIxce%2Bnh8sy2gehqz%2FckVopHEUwjG%2B59FZb5ToVPWtGzhSK%2BG8MBfHpWkg6fuQSdqTc1ycJiaMfHV2cIORxOJNiAWuKLAkhw9z%2FV5zAlzsTQa97mkDYAbsep5fExR93A%2BZfjbqfSYncglEIgkg925iAU47wW9Surrp828SLGvuXEJYba0SQ%2FkPxR1cojMLFXS1sjCE7bbABjqkAQprdYuNDeA10XVNwAppnbFTbpeO3eG6Hj2Rf50083AazNsdBqMdC46U4dCEa7Bjh%2FbURJmYuyHk4Xlv2yDnzppaPcHL0OkeMrGLmPgTpy2QkURVfQ58ylo5YMdehxDaXZsh8tI3Ir2AnNJpz7f6%2FX56eBSDspEWTiA2BXSLa16ZCYeLoFmbB6DKvc53Ef1ON5iM7XHJQFdTt2v2ZGPpkglQi0c0&X-Amz-Signature=e22e40f136a18b3204d7aa40aba92e334d0f5198561639628d66b96a96563126&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
