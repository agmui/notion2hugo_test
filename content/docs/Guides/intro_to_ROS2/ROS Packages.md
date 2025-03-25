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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=8fd618731323599e07e486380645949e6498854a251f0b34d86a767ee606ec1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=0cb7b0da83519762be619f4fe5e0f368e0f9d3ba28ecc6cd2f0ca676d1ee872f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=facd6fadd5bc94b1133444c21650fe1189588b27f4411876170bbd8ff0ce6452&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=9133dce664e955434f0338a0eb83eb31fb04ddcb0f24fa61e944c669c3ddcff7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=f26d9f295e89ee5530695b6bfe5c0960f62d75c9b5ecf3129508cb8d50866165&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=a2e4b1e56ed29aa536b79e24105223892fb56de88794f93f1b0ed43c76045bcf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US2YOBHH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T140830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2q%2FOFACBj2LJxkTqPVvO9HRCPznZFgY76oLEnXT6MigIhAPIn2FpyhrQ2EsjfQt7tCLXPxHuszZvaUcm3NNBsoK3OKv8DCBcQABoMNjM3NDIzMTgzODA1Igz6nz1IJ6V9IwR5L0Uq3APK8KxqRENonxApO5tHBqAG2Ub8S7PfdADyCOZ%2BtcxRAoNOxil3LyR588cSC3YhaHIC5zqSDimOL%2FGBfTANrABDV5cLTf3UxG01gXpR4AGZTlRULRU64rtSZd%2F%2BbdqZK5NlJ3XYTrqQDjKx%2FcGMMok6Dr4S3Pq7u3CYU4o1DuO4xEDCnRY09eWw20%2Bqs5vNGzqBIzCaLOoNnpphJMCJQzXDEosVhecT4gCKW6QXB4mNe1N2HiR%2B1f42zP6j%2FKQQdbFdda%2Bdn7GlsXXB9vsV0i9RAo%2BoLBjYupOKHCwE3tu8KKyRKu2SOvfHASQz5riPN9%2BYXRGUHbFsdRxcc%2F97QUfSL5V23DLBUaGEFnr9iIYU2Faj5TfFrAPNjP417T%2F%2F2F90x%2BcAEQJIYBg0MR5sH6qXrh%2Bv%2Bg1GgTzJ2ivyccnmIySi2bx9d0ijd4O1kfkKi6WHpqSMP3NrogeIk3OaWj3kGsk5h92oWF3FtjHnDKWD3%2B5IRuzLbk36WdkgKj3%2FXtmDpZa0G3SEdK7%2FFKLC5Fc3sMh%2B91sfzxyHyCpV84a3rqzy3HqRqFjzhbW9zPCS2KdXaB2kJbKAQ6A26hCkrlmKai7CWDm9pQvmhB1U1uVphG7keGuQ5KGcQTsusjCc5Yq%2FBjqkAcxO8EoQ0knDle78gs5f8rFq3kBfh3LFudGQ0P0QruLuPkZQ0%2B%2BXa%2B7Yj1BWkQTt7tgAmonRVNmKp8DwfrV6oxqFf5GXkbRnN416j0sTeaz5Zc2Oyyinbqt%2F%2BAW18j4x2epr81t0X3J6n7Zv1Lfvo8E1L%2FBfnzRVodrMa%2B1tU6xDZrF%2B2LtqpaR3lZMSm3heMgB7lz5yeTYsTtKYIE%2FdK1Z4d0uq&X-Amz-Signature=5f20111e08a0d17e5d4ee65fb49632e93f95f2903d16231f4792f43e2e591aef&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
