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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=dce8a0909f19a878982559672e9cdc6508fe9d12f78b04de237ce10680756f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=c35c543e6e08ab146ef5ce0d91c88be282286556afc6e4222d2d744d55d96f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=c40d91706da505df92372f954add0b7913aaa7689f59fd468e7db2f0d2ae978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=80309d3e59a84200bd740f5caa1891a009bc8ba54d4996ed2a72f9276146ad6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=72db04eb3e3460301061f22c380fa6ae8f72ed9c015cdb609bf7b24dbe9d11d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=e711c3b4dcae2e47329ff0802fdd4c76a6834628984f86e32b15371eebe80a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VKDIJQA%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T141130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQDfsYPqHyAw2fGz%2B2RmckcUhZs1UlmRZz2rsCTD%2FPXb5gIhAKoaJT3HQtDaCi%2B8Hvdn6xLeUPiL2HdLNRofs3sv%2F2yAKv8DCEcQABoMNjM3NDIzMTgzODA1Igycrj9Pl9HxP%2FT5f4Yq3AMKBEKdAR5NYpFpKNDxIlVJ4DCgaY%2Bxg8iwdq0Y7LSrUXKHxX4%2F5IRAxs9FuSFlEEeaZG1d%2F9mUXdupjZNHF9lhouhMzHAC3YwlJtBSSLfJoGnECBISz6W01pu2MqbX9x2dDq2DgXyWavlfMEXuQBsRtI68wCjLYhB2uNdiAGJNMMHhR4c2IqqGB1JevMVYCyz3wFMk0hXHUEdHSEbcTu%2BZFGLlovWLMhR08h8Dyju3AyQVOaNkafLlOmAYS1b53rgw9XFRHOPmePZkNb1Miyi%2B22%2BXeQkC10R5t7aqHoAOGKGuigVD9eyGIB0S9WPLFVJobQDzy07aMvdT%2FJtmx%2B4YbwagWDc%2FWKayypw0X2euA3X%2BYD1kpaNCUjDRmCWew%2BCGydeKYujTupJ6atseZkgxvJBqBrc7YVplif6%2F1l1%2FMUR0F05YLP9JVJHciuKvAkibv2KYz8cGOyR7R5kQqX5GBa3AACgQqrDFFAjdy0acFNIEghtqIaWdU7QCcz7CkBXRX9aEbh%2F3b%2B0eOWP0i7eSTDq8j6q29QwN6Y8zs%2FeZ8ub9c76yBCLC0tPuTchGQl9flOQJ86GzIoPFGUPTWmk5siA2Xz7POoQb6Cm6s0NHDW2O6N9Uf1zJoO%2Fa%2FDDHrtnDBjqkAbGi2pW6WiCZOmyhzmERhx4ZY%2FpwDh2FmaL%2FBCkE6Hk7Bz%2BU3weEVRfnNmsB4Ryrxzon8gFz4NF0o1VSYQ5WRsNPtWe1CJ2Wc7ExwW9xZN5PdQBm%2Ft3arh4KaWThkcVU8VRY8InE%2F7L%2B6sAjLyL70NDEtRUUDfdSF75crTk8agGQnmrdovGcYxsGSojrz5GygXCs%2Ft3jZzxEmVNZXEyN4D6EDD3u&X-Amz-Signature=42d55b8b4ce445beb901bfbad35e9e8b2871db10b4b6deb9b2c73bdf205ef99b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
