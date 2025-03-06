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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=98ee2634cb048f47b9c1a133c2ba55f1f6a784111c0ca405a7d6d6606492cab2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=e92efd4d4e74d8fb1ffc6caffa7d3eb0719247c5cec598d822a187bd53141e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=64c3513fbe88bc808b53bc84e79668cfc7b297edae083c94432a5ede8f8c7a10&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=2547056a2182c2e0af126ed98c6fe42036c9308bf6ddc57b82544299c86858df&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=980cb8ee0b87fbfa8d81d328c04c65bc4e0846d265cfdf332463922aea79e0e3&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=8d2d846f7ee04b69e933423d9c34ac33bafb920bfc5a074f79ffc528b6510e5b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JT4XPJM%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtCkxXaK6bSKWTF2oH%2FhSqEwHQoThiTs%2Fuy0rFsuRQLwIhAIwhZ%2FlFXjwYSi0cm4UxeGTyddVqQoa15CQ9UvqW%2BzEjKv8DCCoQABoMNjM3NDIzMTgzODA1Igxp7Uikgn06KjKGnwMq3AOBTPkfNHXk6ef0VaDM0yF9Iq9Bvl7NYiEFCONS5GPLpK%2Bjf2BSS97l3H3xpV3x4h%2F0vPWMe%2BTe1dqua%2FHyJOwc%2BpUPWQtLAkLkbHYws3HwSOFTTmKQQbJUvbhFNSl6SfbRE4kp825lSxfgV47eNjBW%2FqLl%2F%2B2h6tDD9fDiuXvPZAzDbR3k1n8pOVAKLctEyB5%2B7AX7CFohKXlwQowxJS65WfeuhH1sUktmEnJihXgegYoClaKfNJLctb5WEURd2TYRwJ4RfqkxqPxUiAqFSB0NQ2keRp%2B8e1mIyoE9hi2POTX%2BHU%2BMoosK84AwX2Viwsb4oU%2BUfOSz%2BbCZXaHEv9F6dgVXmia2nV2RNRr03I8KV%2F3GIw5fb47hzKu0AX7fMn2m3tRHIaVgc9hAW6yzaVTPM9L3STAIdg5HGgLeyM8oeFDVtiwiU4px%2Bf7G8JGsOszUqjR%2BkCSE1TvVLvz5fH9mEZtZf9w9oi7coWw9r9Vw%2FAaOzb26kG14uqmzv0EiWvuVmVPzwe4kkBPa%2FH5Jo4iIAfDeHuN0OHZLhZb0hKw5vz%2Fe7Y8bU8lOaS3Q%2F8T%2BfZj3%2FNY7pjNpADCH374yD7T%2BhI2HyuwnEifLM62Eik72IlmuM5H21B%2B9c%2FNjFDCb06W%2BBjqkAVqfTI%2FCHrnKOnwR1YdXdh7jbNNkTfzssNnL9UumlpHM%2Byf%2FxvqBdonJedeFVg7kAvh3TQxZ0YzpXi8KgcEsn%2Brk3THma9aF0XfY7fPk%2FFDQDK1Cgqccsl0dS5F1sz9JzW3vmZp2WdqvOAAVn8P25kVWgiG8fYIoGYt4uqy4YSZSwKraSk7IoUSZUbdRqXL0GUuE54UXkN7l39xf9RaZwx6RCPBw&X-Amz-Signature=96c400065a4f9a85143361dde6e1955f66db4fc91279dcae2d89ea98539d68e7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
