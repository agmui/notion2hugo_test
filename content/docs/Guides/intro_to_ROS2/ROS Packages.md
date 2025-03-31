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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=c670429c3d940720d3514597f16da8cd971025a8d4984b6b0932a9abe3de4b12&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=5db6093ab9f96cf0114ef59d3c9814b8030436975a179f60a90315c825010018&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=f25c224f14d213e10500cc32a423613d0b0ee382c8258f7ecc5fe68b7a51c24a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=a9e717af7b3b8867272ad51936cb502c93b9e6a24884278a05c1d6246e148694&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=1427f4fbda45c824f451cf1ef0844b8c657d303504f58045ee8a0bba75699a20&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=3f22845a4abe5caf4d4cf1c8108185078037834e4ae358777b5c29905d1d67d7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALMWIME%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQDxjnRPLOkAuRYpYX%2FfQX6FB9yJ9f6J%2FnJsg5xqXYoYWgIhAIAMGi%2FDpcU05aBgrvKus0n22UZifJ1FODl3XY0muQklKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP19JB107xvwA32BEq3AN1Qa%2FUSIA7QatNRHoRRpQEkevHntVOIHFWCWi9W1QbZT7Nk2y5MLhKSrW8HIQN%2FrAE2Wy6RegzMyKrn5lMc%2FboZgE4X4b0RHuaCc8ydv2%2FwfqueROvoZdMbH4glDT43rtAB2F4DpdxlSepc%2FirZpYbKS2LpiHcXBjNXAc7HPPu7bp%2F%2FSO90S5HWSgCeaKV3xbNhj1vHfbO6ZTri%2FaJ%2BGxuqJEcoBc6NndymWje5ganndD%2BzpYW%2BFu6GykFPA666gPi%2B5gvn4ZRcjj2mRH1JpfzrPO7C7Jeg2AbnyYaDt5dpx7fGZtUnyWMqPniUJUxLStdPEVoV1BWyIcZxiDWEAhbeH7E44esChqjAFoI7k9lffqeExmSi4Nz59Pgi1AetQrJx%2BTr%2FT%2BLK8yTfGaDxhckPzhxb7nOOy%2F7FA08vNVT1OG5JrTEzD5UjDVkiK3zAwH9W3RSTwZZyNvH3ksr5SOPEnkbaxW9ae13vYidr3FJvPZu5LVk4ugZXdIKO%2FYOFkZB5%2BzLeLxyuhIrhAxj8mnPlC%2B08YKP87InO3Ojj3H0Ojq0ACzOXgAUPwouc1FAX9lmf%2Fx%2FmwibWFC4ECSjNDEW4vkeOirst7Rnjbs%2FoGnflspN34XTotH4ieSUsDDju6e%2FBjqkAfhWjSdeWupMS8pRsvhPaGkTyJiGgwshfGjqJjJSdjz7yXuRG64bFRb3HD%2BdyY5A2baLaurqXpOvil48MTl6YiVDsPBZgJkzc4zJ9%2FwqD59giA7kMNbxChqQKDpoLB4q74JxqdG4S4QLLhqs4fjWIRd2fAoR29Zd18Q1XW0FpEDvSGF4i%2FLoXsYRCL92ln6MFJosNsoWdO6N0bMVNo1mp0tFZIpC&X-Amz-Signature=94131dd2b905308fcda631ea5d76ca788d2ae1cf65e3e992ceed32b2a37d0cc5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
