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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=fe43d23d55126ad4b1b69275c09ce3c21814d61b3ac46affd6e223b248f0d9e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=3d35d4a0d96f0bc35709cfcf7253a03d2f5ed391260675184ae2c1c51b9a944b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=bdf948f19ac46e54e2aa5998a133fdf2063204b5d651f15e35dd873b55143c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=48f460a4e6c150061549fc8232e9e298d606ca024c01f677cb5ca7cf8e574619&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=a9342411bb295d59d24ab2e82b54d684ff650f7a964de028f1f7052cae025644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=4b60a573d7d00378242e88d2455978ba6dd3b7e12cf5ec142644b0022a411bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDDFMKY6%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkfK%2BjQcyfRMAbBFOzAhPDEg268woTt3fAZhC774OeqAiEAoX0hzI2sf2ykQtdXIjsXCdJkj6vJHe3xCk8swvzVqCsqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEBD%2FuWe3Qw%2BQNB4ECrcA%2FW5x9lsAssxubc7tUZ74h8iOoDvfaVfiz7SOhOv7ZrzDcb1G5lQu0%2FXqKLYVXN%2FCYFGzgcz5xI%2FZ3BK4kNl8NfgP6RnXVT%2FyxAKI077hGsO3OzBwA%2Bp06ORFPBjZlrMsycTybKPwG2TqnvmfX3IeM9C7GVxFA4dmoGLMftOThU9VyAw%2FT1%2FZm02BvpSh5zowGx2Ie9sVMye39cvnHY7cLbXy%2BBTk%2FFQCbpfDIRZwVjsodDbLlO9RE3zd%2BI8LEUa9v%2BDErek3a9pb752J0jiD5nw3pq2HyRWiDV9nQlkT7wlC44zSeY%2F2V%2FF57YIRMw5Qh%2Fej3ZjvUt4gB%2B6MzqQlHmo%2Btlfp1q0DcPVL4B01n3ZqwAO8lT8StnlOPdwkLs%2BeuxFV31HPaKlkHH6uQZk2t3IpLH6U3rUXWVzjVbpmuCTRF2lXtdL9g%2FV%2F4%2FUlGd3HsIUtLFOyNGRsS8fK9SsYWVBDK3fCM89P4Ah9a9cG8l4B9QoJIWbdwV7gL2zAtoKKSD4XI9gM%2Fk0xZBU3QxVCMSOn%2FaBvns4GyRNP6H70K2%2F%2FIiBzco6fzJMc5bJW0Vf0AwzSnuZoRD%2B8eA0brQJzHsc%2FpEzPpShkk4yVRomdT80%2Fby20GA2iRCB47SfMO%2Fd88MGOqUBuiZJ5v4R9al07U%2Bs8ZWe9yMSl%2FRmTEsopt9J7oJF11AjXXfPjej800HCSKYIic0AzTYPFDUA2xWHyJscUALDanhXTaqYYMc5ZtmwCkChgIW2FIPegDi3A%2B4rf1UcTnNlesa6mLp3Yvu%2FEM87gEIr1kvjIo%2Fb9r9DrITELBBAgkzwL0UZcjJUhHXorabQMUPt%2BJ7C2R2haVrBMCCMBYceF6yR6ioQ&X-Amz-Signature=1ce8ae1abcef4a3df68048130472323300125bda23fd099a26b4e9414f8c5fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
