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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=6ad46920ab9ce31ac617431d2814e26b1d50fa0e6f3a6c18521acc073cc72a06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=17b728e04cc905c84e3be73b023edf7815233b77df5dcc03d0f77475b18a3621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=49cf312d94d65b068e3d5a798a2808eddad82394f3d3b55e6e2f0724ab7a0766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=b6262828526b38554e6d8fea6996d5a5e8b6028273aeba387008e4c010750e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=fef8b3be9184fcf6135449b561f32b00174e0183b914549cbf529c71cd2727ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=efe087765fc5da6ecc7a35818816c3bdf00a0874496a4cce47dbd0fe17d8a176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662R5OVGRW%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T051226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBoKT9wgi%2FT3iEAqnsBo2m1zBFzPoslZvk%2F7YyGSfQFBAiB9eiyaFJ8m72sPG0OZyX8AGtew7ed5YTlekjIi4vP7myqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BlkxTdvBZ9OLUtU8KtwDsoOr8pAq5lYVSlLWoC7VIGH0dXCIhGJjzOmGFwqGOX8scJoKLRVT2f3dwfeM7MN4%2FenDGM0L7sxFjtszxSg5sGCvSRGqlQ1BNzuVHX9WZqLh4nBKlj%2FlOML%2FSbifgsTBPPl6CKO%2BKgBvAjgDQmnge8FiUYpXBKGlnQLf8LDN4rTg7wD1%2ByK3OEJa4akXghvwGXQMe3DIaJSXBkKDPYFEP1iHHMqBxUjWPbbRyNxomInJL1TNdW%2F2VSZkFiLEuRk3MTfVyvOCsWPwTS0P8uee%2BtXhHf75t4i6%2FBpu9YrH7bbMgIJ1YBZ83d7NkpLVGVvyDRhC0%2Bcrsx7QC9qICQTQVL7Nsqm23I7RRETM%2FgSjqUPy9Pf8%2FKCPS2Dz3kIe%2FH0nJTMpr1bTKE%2BsKSbINxmYtXmwnAQbSALhW2ys%2B6KrGzZiuRiFbyJ%2F9aYaid7JLdDjKM9BUb2jLud%2BllGeB0xYIHhFJLh3QzikS6HCdABltWeUR0nSYkldcRwPqvWm8rY1CVk6WmnpUD2eAXYr5rqjmoCeVmp64jbnPIpxoZ%2FT%2BHtk6KCRTka5kjdD1bvEQs1WhdhqQ9s7PXoccb5unlfXlss%2FLzLuX%2BKzZGIDAgPk4X98MLK5fG8188ozSPwwpdqSwwY6pgH4hujYZUXukq1wZ8Ezd6%2F0xouEFfc5%2FeOlfHnC7HwnreQvYYUPVm5P0rGPA1vWIKQ29yjAPugk4IcUokBwjVQvksxHLlAobePMIoOVv69zXIAxv5Dg8PwD3WIoPwPNo96w0ABPdm1jU6xtGWDuOh52Vl5DHCKCCcFN3o5Q%2Bj%2B9DJcpwnkBftrxExlz0H8z4BQwbLF5t3h3mahtKXC%2FMKwzTZr8alRD&X-Amz-Signature=4c642ef5f078b6f4ca7b533eeb48f81af82ef90f05e9108487066a406afe4330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
