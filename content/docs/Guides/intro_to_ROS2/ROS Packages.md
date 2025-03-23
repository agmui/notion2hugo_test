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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=1cbd37b0655be8c6bfa0311df0253bedda66b3986636a69e4275183b84c72a89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=b4248d5a71ac19ab6a2ecf037002df28b9b410dd52f4befdbbc3fc27e63db395&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=4addbc99838a0c44ad9e93a8644dd1f4c7c66ff78d39a7046360553931341886&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=5e29646de5fd78f30263b77dc7d1b94d55567f0b68c32fecb1b7a5658c6f32f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=07a20935ba09ca8bd0c8c882b4142750f40ac1652da6fca1d632c93d67b09f26&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=f611ed998f67c75959d80db5271c1b52c73c630aa4d239cdbfacd07ad3395691&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6BTNEYB%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCN%2BKWpqoxp%2B45k40pzEYB08Q97a%2FXrQMYXkIzrixrHQAIgErRYsZXw3fB%2FFOWyHcl7hFhhkYtlFYszeJqDaCkMCo8qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPvKlU09gJyg9DcsMSrcA7zm8wZk1QLJ%2FuNGr97d%2FCe5sVAXZmb2UzfnjvFiWNMUcAo%2FPjH%2Bio1nMH1Yel3GJ6NGqbEKo01%2FHqRN5W8PqXd3hLG2YwH6AtkIdUE8hBrnrrTyEIQEVGhryCxuhk5yUHLBpWXx0iwZyaC%2FahfZhxyPfvSi32N8cilni4IBOaK5V8XmWVgdt%2BBl5lSO8cXwddQKfnaonYWhBYZWeDOinmeYtaQ%2BtoaMO8%2F4XTI%2BP2haT9WaT3YVcLRyuu8qKDsmCvI8kL0QFviZkhknkNkSu6y2Z7qqGUkHJ%2FDa%2Bw8AsLnwRfhkdTGHbEOA1T9f6RfG7YtP7EHnB607Rui%2BZAM4X05Q%2BTswAovTKEH1etIuJk9CVdpyuKOab4hgYTGuq2WBpCarUnJc3AkBtrwZwIGjrGxu3ZKzdcYRcID54dLrrQHGIic3fubskeYG8%2BY15d5JSfuO3Z37WrKBnwHWpRK2QmYOzxKeoLaix9s9QtAWEDxXJ6HQtjNHxAxoP5D3fgdxiZ2uZVboh3XZFiupb%2Bi8a0fpCGCzOwLSzE5hPJFbO6uQBnePaO64T4YcEf7oFXLaqjCeRdti3vlil3r5Nop2d8tYPxOlHhcyQk8nY9qQ1lOQp53DwWBl0kDwciyhMILM%2F74GOqUBcSpID%2F6mi1z7wuW8KkMun2FnUrdzZII6XFDrYwT6v2SefDhB2rhHptu8vlpDCaSE5Qlam4a1t2xBsQBfs9ewApPZ29G08olgKPE7frV07%2BAcOTZwbEkidgXUrAkjC6wlUDENAuc0P0iqsnPEatAGVMBGBeA%2FAmUu9eeTs3iQjMS2fX2XoNTm1Vpl7YpTxBrehMQ1ChcG4EXkBbkcMTWHK7sTfuWh&X-Amz-Signature=8510b548b5801a8179eb16a162a8297af6119a65766ccc586d681472bdb116e0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
