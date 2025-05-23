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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=6b6ca79eae9008b7758cebd8e1703be62973569239c318640cd690de8da541d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=4f51ae2e83b7376cb6dbe545738b715ae20ab661f1865dabea09eb638a48754b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=be4fcd04ad78283f6f208bef828726bc27e0080a48d48981da6180401995b73c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=91aed57b9f9d133aa24a6be80bd14324133a89a5108bec8dda36a4b0727431b2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=adec6b5772ad4517e5952756426195b309dfcc4c13022d673b8dfd6d9be75e8c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=011a39b34481398f9bce582c709440fee1f7ba5c627a8a6c7ab47ade4a04bc6d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672LYRIES%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQCwT5hlfded7EDvwmAsuNV9BNTC4393lJ3E93%2B6df2%2BYgIhANCT3bkqvrQlWY8xRj771vWsilDpA1X3Ku99aL3V%2BnCSKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTQqSIvwF79zpaUqIq3APZlrcLM%2FRCSDrClFpX%2FQUET2DR0N8YZplx7OS5yR8HOWZirkL7w6Q62Ug5gLbEfyUa%2FOm8enI9Xq5%2FQhoOVPqeak%2FqdPffyrnvdrCJQMwk6m4hS7ymfYjWh8KC7woC2WfvrghB5lSNGJsJlX9cYiMfS8SVUlwdqRLbOncIGwyJki9kbZv1bC2uO7v5BFM3S%2BSZct3mkTkBJirajaFVYNyBIatBKbrqJX4FUGkZxW31Euu%2BH1e2SlRJ9mWEP7rGK0n8tldpOa0voCMbrWOvIU0gp4oNMqI8tEJsw3LaYL9wS53%2BKiI1XblYjtNycIvcBj5VvyJadm4j7zPj%2BGVg0FOGipaQb5IaJafwj0me5nwWwz6SmDbO%2FnvnhAvADy%2FuSXfd%2FfHqe7%2B%2BnrtP4f%2BeGfRTiglkofERPoeHoeEFbh%2FXCi4TAvBWx87VqyiOj6mFGWTftoWGp6BE1OcA0UePtzDUoNYyi%2FEmsNoPUiw7jEf1vK2AaCKTKkvuRa7dnwPjBn2WwkJxAcbWAP%2BDhgbzOnAvzzY9DctJMMin9jz9IiS4GTzwlSW02F5v5wlwbU4s90GsJ3XPrmUvqdscdFETN43n4vqe0TqVGqhuwazVsbJHuJ%2FtfRbmt6N%2Ft2rDojCHqcHBBjqkARRmWS8RP4DVS5Hl2nZQffDwRyiBwQR5rAG1f%2Bu8gDhoDGPx%2FirNwsS9Md7ZbEVMOAqUaHs3QmqFBd19b5ZRnDOr8XpAWxN2BN9SEIA6JjLxOcFFpuyNwAhVjGvJFeb2Rt2LZi71UdFx7iON2eSEtq8pB6bKIDL362vgngy5wTQD4YWyirRwXaC2atEOXZWVdSjj%2F1e9FDkBRYha5UHmO7pFQhjF&X-Amz-Signature=17a9e5e9d9f38db61df1b9b2490b0bcf2a04f243299ef405c50c7d7a525124a0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
