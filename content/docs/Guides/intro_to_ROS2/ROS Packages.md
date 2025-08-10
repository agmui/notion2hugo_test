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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=2f7fac60ea9d5c768ebdddafb7f76ac3e1281754c2ca59c88f9cc439e19b0b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=848a3a8921add2bfb8d2a28544121d06ff93720283171170edf346fd749fc2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=962bbd241f0f2c5bb600a45341eef249b6e4fefbec920053c511e343984c11ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=fe106567aff9c864159fc64295b7c910b7f1ee9a67cf2aa854dc34cf6cf77cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=97701532c08acb6accf43377061ba6cc6dbdad4e8dfb142af086fddae1f08c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=d3e0372c6f345cf6b960e9ea082289f8c68ad1fa3662f41da68b95a9f8bc5724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HNLULRT%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T132226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYzdrAmTX1L1i1KdqSktFOOhQge5jds%2F2rWWSFRYQkyAiAhriOGDCHWz0Yxi7tmqJMT4Rneort%2F1ZYtI0IuXCYZliqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Bww%2FLnWbJwsHNl1eKtwDR4yXzOmRbgQlqEmFEEFNqL5g17OlA%2Bje%2FcyjqHM1vGPQwRga4NwZx%2Foln1UnSUl%2FSQbANEKMbDvrLgIbn3LnqxBTINkL%2BW6O9j9DQ4bO4hKgUYOjyyFL%2Fzf3B8QbloKE8sMVqbkk4wxuQL1%2FzI%2Fslrl8IhbwOVbGkcva%2Fk3yy5WxS5NUXlvFGqVICqonW1fvG%2FO%2BjN4fD28IvvZgW0Sk8U2bLcl%2BEO2BTHg0TYzEcWPzEL8AEkJRKq5yYr9J9AeMafkkny1CjXYZfdnDrEi8WvyVX%2BOhC8iZZ8ZP0tb4mibXJgOXTsQdX0tW3Xjb7DWcAWIpHfQwCB%2FJAZO2wAzAol6OVYEX7f2yG8lgGzuBdgfbTZDANYcu7u9G9P0Z6Tq6sRPyL2WkW%2FfeQF2vDT%2FLgMMAAADphRDhw85R95M6P3L2U0uMVFxO1xlhm4wiC4MYYt4N7sLFvgtQDnwp1kt9AZqynAe1zQIMfkTN6o99bbFmSsQB3Vj5hX3dD5Pp%2BM2R2jA03aMKdC2tzu4sz%2FO3aP4Py9HbamyO6bV%2FOsS1y5rb5foby38PXZrWwFfmTEMHQ96rhkQDKd2Pc5ntw4A7j7ef2c47%2Fzik05KEcoSqKJ%2FGLWxmqKrVlFCRlUQwrZnixAY6pgEFF%2FW5%2BoOQ1wKOpbth927dFyk4Pe5YY%2BDmryc%2BjBa4eRTk8gKXD7WDH7QiV4%2BSd1jxpZt3Fz5VxohXxTQuSr6D3zI%2BlRZADgqOi32395xAAqYjLnhoh6h%2BL7izfyuwpcD%2B8bVlVE3kN%2FnNIiZ2HzSMziI8harwgOZhdI5z6Ad7W3fz3J79Epg5YA9eQPsxvopKF40vdgdywy%2B01nbGZHUOUtIatKe2&X-Amz-Signature=d494afd6a07a7c10fd1fee7a2d83eeb00c0336db197c34e247a9f75c020aeb18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
