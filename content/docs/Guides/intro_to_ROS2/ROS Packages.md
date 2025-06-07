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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=d8f37a5caecc338c01ce7ef510eb60c547fbde671ccc729e51b184c838cf2abd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=3e8bf0ea04ad6c7467cb8c056ea7edda12d7d92005abf365f9a069115b1eb666&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=197f04468863f589e053fafd2103b70346346194ac8b46f39823e28e42e95ceb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=c4fc261339affe62d368c02ab78b0a515e45f29ab4dc1afc0393c403b91be184&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=d8d919af7c8159312f7002c08e67e3b39de31f85031cecca2d83f5b3a939033f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=288e5b72ead8de04e60c2b0481f6684ee7ee663a397bb21950fa948ceb96473f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUTSEMJZ%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp7vCpMOtMeGsxcIWwHFHbZ8%2F6kVUkl%2BJxm3wepbqTTAIhAMpZfaJL9YOlsIOiSRXu7lg3ZAQMXShuJ92HEbHtV34ZKv8DCGsQABoMNjM3NDIzMTgzODA1IgyUoybvBv%2FvnEJAtZgq3AM6FrxOURFy3KWFivnLDwXjCOigJllPJd5bfRc8JrNM%2F1jn0q5rX4zYgXmK5HPqoRLQsLZzqcDg2KZs4DyUSlFQHU5MNuQjsOrhfO6U1wgi%2BQjm908Wv0kZM4xN5gTih7rOqQt%2BHCp2FtHXhVKXYuFziEteH8URgM0xK1xg5eWKD9G8KnvQMW%2BJfLPwB2a9LbdxhYLo0r7ko%2FqmI3IQYQJH67CONyWxyLm20vilr%2F8EBk3wikkrWgRjcuLJgirgr1H9jkX67a82FC%2FlrNErBV87lUoMNK7xGopGy4myF71K49CeAo7i%2FxRwTEbgmDXZDCCzjG6NAb3ZAqmsdvf7%2BnvzNrF%2FLKhtp9iiD%2FVzmO%2FcSZCGnyY%2BnMiT0cN4xJd5%2F4yk6hrV5tzUyevyJHGNhyZF%2B42rwsvlT2Ksg1nIzgIyJLwe72vsUsL3tKypWB5w5e%2BWdT898T6pIEedn2tnkNcQYwHltHgmqo%2FGtlLMpFM6c7uQiOUn4bfV%2FFTayVTYDrVcU4%2B5biqu8%2Bo7uTzb375zNtvnzZlVRp8Lxf5WbpDIB6xgBwbjHuzUEo8%2B6K%2BhcGi68bgUobVg%2Fwt7AtEZdybjeNorc5s3PGyoJszpd%2Bxb0M5dkXd1DwlKegWTszDtwI7CBjqkAcLfc6FqzKEx3KhrCC9eeiDKF2Ci3MzGa%2FvL5z1zM3dFiix2wM59l3rUjyf%2BVFqdNvnJzm2UhFF8hiKAjDWHdSMy6fjb1p8vAmlc%2B8uIY8zaIN67oEUCVcz8VrEPIko09x6iPok0D8pdhJzjTTtKc1Vp2DGXzMLGkou3VhDGkbOs7EF%2F%2B7HKTA9dpuSFkF0EivJLGB6PFb7U%2Bk3EmGLWT7YGqSza&X-Amz-Signature=f4264c4cf913f67428642e9251ea5693d7010e085da881a3b373e12b82d3fc75&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
