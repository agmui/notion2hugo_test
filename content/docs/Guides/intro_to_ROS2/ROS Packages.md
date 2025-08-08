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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=a69269c5558192a9a5be67e956a5b7c318ea2f81c1f7b5e6dac096afa80f9bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=e2107a76171f61aaa2acc023c854ab0bcf9f6f970cbbbbaca2ff8b022761cf1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=b7f187f29c28b6aae4cd4e031cd10a64958d1be98a7b106c76c62cfbad396cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=02d216706e708d2f33993fc36ed03c35567079939d95d577e27ac5493c613eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=2fde08b3d637e987486f167e7fe8ed0ec156098b8816ba97a2519d7f931cb4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=5872bfc7403505e81bceefd5007cf18bee22f1b5c6d6d545bdc45320fb3540e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VNIJJMO%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDI3HJZ1xC6h79JTA1T%2FyKZUdkWuOuHU4I66%2F8V9V7O0AIhAKEA48cP5eK1Vma7ZKzEEuQAcMTDm140IAORKJ4AkG7nKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0utCxHKLT85dC9AEq3AMRRUDeiF4YmTEBCbqn3xDTuxF1nNUUCbeVCAGrF9pawHYi%2BxExfUKpKacpi%2Bhtuqndfucs3eER9iZpsGw4hVPGL2V2uyS7OP1nBUuiDUHo90HPnCBCLYiLQpQ5oQ62DHs5WwS1Z6defhVEGZFwXi50ySpcmp7Od4J3y1Ic66uBN%2B8S%2BNkSkfFadwGNkb77v5vAsts05ai%2FX8wAm%2BOnIG91Cz227ed%2BzdlWC1%2FgkCrqp4Jo5B6Ft1GEIkHCycAZTEXI0%2BKoPsN3FEjRXN8tzedYT73GkWkLWR56Y8GoOOpSeWTheku%2FsJ4mwJzo%2BEY6DtqwOcL%2BxXvW%2B%2FUN0pMs3%2F52LjB27O%2Bgs0XuHLTJug3fJswTqixGCr2VlcJ3OMdOFK2pVI475qd7QdfQfAmamXYTfXCiGmRdGwaeSYEXAfgFSGLGBP9qXiju%2F4Gz6I9LnzFugev%2FH85NSzmVXWnmk%2B9Vg%2B%2F9VvCL5pSSeZziwVN7HC9BagLjnN4SLQYXZV0vHY0YIgryBWrVgmGnlUI0WsMZSaiEv14MwXcGSnCUc0iTBZ6YGWUkD1FdaV9JrnGQTEq%2F4wAggsLYGBylD2AEnrWTy67xufqpp9dg8NpkY0FMRRnxMP21cuJbCKphQzDqktnEBjqkARBNPwcc%2FKOR9jHea8ubfuq3JvSE%2F6VnNPxAuawlqVJQak0aWlHJ7XFNbWJ%2BsY7AHkDxgv4PN1uOQBVyne%2FCVYD1he%2Fmz%2FZTrbVeNVsOgn%2FINRpigVPr%2Bmc6IYwnkLqWsiWLbm67wAXJ7%2F%2F4REda%2BIKSIrC%2FPEo4SSszd3EZuCLGdJF1kLbG%2BZNKYxAHtnSRoh9wg9TQdm%2FF%2BrsKdIhAI%2BKhfilL&X-Amz-Signature=da0e8c23d3193d67bf3f1163c1344d1b1d3b3505fe5557b1fd12e9e4f511eb48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
