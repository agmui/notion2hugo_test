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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=8ecd2eeb14e43ec13294e6c2c1211a2f63abbe2d67b9d3068fecd4a9f62d57fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=9aef36c72aca3f1a4a80ec011694cf47a336b9c9626a04b0edf5d8f05daf0320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=d9645e8293ea63d2b86827a51a0745d0aea2fdb83587db88617cd6382a2c19a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=72dc8435e645c9b86af7b7b0139f320b24f89d19b8d48cdf4a378724ed124209&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=fc49ddf2a6af5d97342edaee2c521a05516d37532f97670980197e22ab2b3836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=862a9e4aef6690fa6ed96c82c7d3c776d43cc0fdaa9d69c41a7f7cf1e91962c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NBXCEU5%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T132855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCRu33kFGX42AZz4bWRQNvV3940g3QXofedeYiGq77%2FPAIhAPf08WaGrzm80JjRSXof%2BYHrfIeD3%2BGMURMqwV8tButjKv8DCC4QABoMNjM3NDIzMTgzODA1IgyTL8Ii1FyKMqEJ4QUq3ANwyKX4byPnw5rbyozZdJPyaWBhSd4wivn%2FpIfhjgs5leYITh%2BfIhPcx2sZ%2FWDqTz7weDrOPbfDg2zRhbMzwlCKac9k9bAA7ve9P2knWH7RRP60PHUl1eVcVrV5V4xlcQsjs9unqGiK%2Be5i6rakV%2FV%2BcjpHKw8AWApC2V5q769lujenVT%2F5Vmtj%2BVISlGh53oyYnDdVaWm%2FGnu0BgcnhY4nYSIs1QuZKVhzZZmsz5M4sem2Wvt7aInaAMHLratI8kt372zJlWsvjK4PjnoX2VYGjxDjXCHbz30r5%2B1l16a8GnHDa2OZLvFYJbpfWtj1NJiy%2BrEhifTvhdgndg7lsBSnPk2NOnnkxjxprZy5H1JPl6n9RKlPSoB638icBe8u4yqMblAJA4WtTWcx7IWowqILe600VOQqCKkVNpsMIRij1bFjMPAK5aX8PCV3aMGU0Li34Ma41W2YzowJPpUxHahPByN%2BxCSN0RfEN59e1Kg4cehBrswGgoC3liVPMS6Z%2B3HLS0CebAyQ35oL0lnZTULnnhgtMxfDsccNTyq5vEV35gmrc%2FGU%2F5nVZfm84hLTRrm8MIemcQLh1QtxiJLwq9v7pJNtUYJ%2B3F8zQADSpeWGAAU2BXMflxBvk4yeozCnhdTDBjqkAVSpookx0xf%2FJPmznnPjENClg9CNXfyoDLiNPpTFxEBk6Ej%2F6D5CBDdCLopmBqf9TpO7l8HYP1zKYKD1oVrYi4RS32wCVA1zJMxLmBS5z0n%2Bs9dWendQ3zzP%2FwfsYIzhJqg5utSwQwaWoalHSOHQKH5Hvo%2F3J4%2FwuF3%2BAE%2FyZ6wUIz6MIJih8QojV9Vn13rhdyoZ%2F5w0OKSEogU2%2BnS0vIS2AVfb&X-Amz-Signature=1f82bac787469eeed73e1c4a8eba8d11e19d526536de769f0de9689d1d334251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
