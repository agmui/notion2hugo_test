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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=25ea1d7d54bea437f8111e5a15d02230399ea95054937cf91c07384f01f7bf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=1a1e9be78c5ed2404b071626c08b6a9c29acd5a6906dc7c7265ebedd9716ae57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=14057e3884ccb1ac35861b4d10debec6b55e5b0a435fa94f9d10be3dd2d6d247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=9e1c47f0971b4c29d7f38bd78617f34e4a02f43cbce8ae03085b116143db1ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=e5fecf0c0333c9adb389083e118ec6aa37c6cf1d3999dfed3edb6d2db26d8715&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=45ca3413d432d348e8cc4e4fc9b6eb918cb7af4cf2b35cd169a70915109c5014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4F3DZN3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T133421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpYJFLjLuAKDea2l7F1SU3hivP0fgTBVwZbyRQ4byDxwIhAM%2FGij9OYB9Kwms7D9Wk7wN08Ms%2FCLf9hYVl25UoiZkqKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd8eSMM%2FI58WI7vqEq3APXoT2RwBER60fDINy2hjlQdlNqUSDl8JnSmuyXj%2Ft3guM%2Bz2SXB93fLJbJNhlRl7%2Bhz6kTDHphgpM%2F6Cw8fYwYZsazRdDVaShhP2yf3hHYCBbtfvgU6V25s%2BXfHLOLeYKbo%2FpK%2BJJX%2F2dLixXeImkDKuR7bYHP%2BvUVm%2BUXTqVkcufzOLBPbGe%2F3a86RSGLL1rfX8We5p%2Bv1HP%2BnzCSWlrksJGQP27xuzbqyUvq0nnwnH9cWjg7hlHN1A9DvT9oTFmiHGOz0Fipc57Sos7BSOxloiU%2BupzoBS1nwl5Q8vqFdFYhPldUe9O1SPPFEDKM9G2ATcuE4y5zKFQuTs8%2F0Zrqzcfe9eIVeMcclnGJNxZfFrt4CtpTvk9AHoOAAazmCsE6MqHFyPTK1S9COqdNwt%2FNVdrd7ph24fNGYiJlsij3K1GMHwTmfGiOEjmtt76dXVMuBXhDHzAn8AjR1Gy1Y2FHqjVrub%2By%2FmEgXm2DklmAxK7fwS0AP1lWDm%2FoD8I%2FRsPdJsYad5%2Bcfacn52XFr1ABDeNJY47fLm6pTtxG1C50nF1pPsGpdtPOU7qpARCqNq8WMi9PRWwFLQNKowpGYNiThKibajKZ3aweeb3XKCiqLBPlbX%2BPGLauO1DF0DD0oqjEBjqkAQCbBdGYwJgdjTxBm3wjHmU8vQVKcQk1DB9XWY2O6a4ugk%2BtYbwyGTYxO6eOa3UyFIC2nxYwT5wm4CncOjJelc2x5ebp%2BS6j0RbEwQLIwlaG5yy6S9kWrWhjioZyRGUGPMgQoEmnkH7N2t20AEmCIbXJ5BNCX6g8wlU2F9dTwP4JUKOhvo7G9bo0jBtVUvi0NLNy2ESDXPeo1JCHlhnCou%2F%2BVQpH&X-Amz-Signature=d58b5dec1abb9161b7fb90cd5198517d77d2a344277fa94fc49233893f777b66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
