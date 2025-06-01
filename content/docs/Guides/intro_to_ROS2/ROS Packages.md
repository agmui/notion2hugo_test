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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=f7b101edd9991d416de99d68fb6c29f1b487e92f2ff75fb48a5ea8ccc5aaeb17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=1e242cf94b7aa295fd9a65c1fea9f5dc045939145d5244d32828828864bf0a34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=e373c183e81721e47fe5bf563df4b09ed4acb38341dff3bccfd05c955a4cc84e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=5c0a7a5cc0785e404fb7a140e4fc3084858b30914ee37829aa8f4cb0b894acdf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=ca80e623dd3b47433927321bcf058e61bf9a4ea6c81954517a4ac53bc7172d70&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=76925014bbd395855717b362876185d2521bc7a5752967e23131b092289a4f93&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFYAVPD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQD2l6eJ0F%2BuR1w49EVz4PPHoHJeO92uBpnfMYSg6KdshQIhAOEZKDkt98olKbSkmaMrZxHyfVJsRFyMrAzfQmZA%2B2qkKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw7HJr1ecvF1BCemIAq3ANqYoZCL7T0KyvzRPMEhqlpAiztkzSZcmMeN9v3z85H6OcoDAZMf1GtnVgSG2w9dYvbswSnkGPoVibDfgfln2W%2FcIvcVNYP2xDDKV%2F2yfbtrDsYdkaBVdeRDI0TDp0IF%2FG6HKfQl9Fr3vBW2vbDu9s98%2BIZQVYNCk6kwDQGR%2FNTUFufn61VZ3YNr56eY7ofVGxQfTNElYSAjx6bPd2fwqmkmwyQroT8UGp7iKI3sbBjp5t2z7mrwn1Lxjc8r6vbnLiMBl6b9vDoCE3L2uNB8sE3GBagC25xwlu%2F1oKhf1N3S2gjWM1ROVmxEjG5DXG4BuRbe6NJ%2Fi%2Fj8jpnO2VXgET2OuwqVKIuHA1C2CF%2Bm9DnnaZ75J9TBbPZMoKH8WDc8StRmwqSx21lcncOavo%2FT%2Blt%2Bqo0G5BQcZPT9FKC9qEMXPnHELdJwPRg5Cy8svfDs0Yl65kII2eG4wObVW03B6jiHjrTthmAhDXbno3YgBwbcQH3YvwXPW5xMx2lXOlRUxJvSlNBi0KVslGCcgrNQASXF8lpz84nbXy6MJ850zorSuGskgqLHnxXysxlU4%2Bm1Mg5gUg5BUO9EUW6GmGdBReRNzGLqK%2BYX%2FpjwklpE87%2FXq1ErH0roLFS4WhApTCHp%2FPBBjqkATTaaJ9J5dif%2FhpSDKAr0fjZS4udmxX0iFeDxEj57QB1XFnI%2FVcJ2vkM682zV79co3aiPKtxhFjsHmX9X3u9GEnJ%2Fbghsw7xLZdgEuksyXH6qjeIuJfZ1OiTrikuco1DwGe%2FaC5VpaQY5cLB2qkEigsPWVSUH7Zs24DgQoupizAgp5JZwYg3GfZY5rb2%2FdNIzZ86L4Vkl2NCpyTStMf7NAERnLEu&X-Amz-Signature=131d9a254098c46a77a2a11e8228cf80384459646767baf9b6a83cd3d4d42eec&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
