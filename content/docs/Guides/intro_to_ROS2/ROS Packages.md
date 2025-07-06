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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=d46d7128d9f56fd4ca17cbb258ecf87617e8a8f572d3db32b6078aaefc6f096d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=9eb6869049c19ac8fc1c2f9d9d616fbe6e06f671de1cb3818f8859321998a55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=a21890e2324832ef38d8322975e3b72fc0fd3aebf3268a2fbd42e64ad3131e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=4d714db153b3a49014716efba144c0d9a0b7a85259ce4e28d3e0d226da1270c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=320ef300dda75f8ce8006e0d21f284101769f5dd5f509e9c52c80fc7ec475823&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=e93e95d003881bafe7f0d8da74000486050db081012c84a3bb3ffa07123ca20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXSKVGI%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQCXhPV%2Bao8qYhtNKdL38dRY78LhJntu%2FCO8MkTMNm4ZngIhALa1%2B9fbm6EBrUBx2DPoNSsHyBTTkfP%2BSD8mWbpHv9MZKv8DCGEQABoMNjM3NDIzMTgzODA1IgxmrNwqG8P%2Fh36Zr5oq3APVEhSK9kxCtKxP%2FYi0BJIkEPWej%2BIDehqYSZ4SI3I7CttQORntRlIq%2FRPlvYJz4gjGmoW3qjzD0%2B5JrXhBs57p%2B1akJ1VkjjI6q1RRUpm0cgxSxrStJv3CBrqlWVBuILm6wbYheQZQh2CKizD4aEbJdGywU6wLTiErYy2DS9y6z4RoDfJgQpt%2B5XVWNanjP4B%2FwGcIH2C0bNcYRMnHYbO3fQ5fUQHsb5Rua0vGAiCY0alhoV1JukRHcs4D5%2BGCZvC2KSIgCMIiNTrff4mI8RNg%2FVPAyBNShob0fQLOy%2Fe0bhiWh9apNUdpmCYUFfUZV4r2d3m57dFVVheypMKLckjJua44xGpuRYm3VEXxa0jP5srksamQddL%2FXhycRoQm6m1UZRp7fkynqed4ddNAQEJGA9%2BwGc%2F%2BaRuYh8XPpktb7JCFxTDvC3w0Pz7IwNw03EcZv5mYdRePn7LdPnNFkxVHVP6RsEKTpGh1A9uDY4mxFZ4VLPRKkAwX7jUnHXJN%2BZWqueQc6v6RJHE81dARXW6P1%2BDEWz92m4cJ2GWXlY9oPY6V2NazXAQMY91LjNk0z6o2XYj%2FmyvOeiBKv2Leilcqy2D34pc2xJODh0MR8YTtsURIxsxqjEL2wCNgDzCosKrDBjqkATgqLMLGw%2Bk0N%2B9TlO1L%2BQ%2FsmzF2CXzElp%2F6yo3NZ6Kk6M3sG8I%2BHKRPd8UizM%2FDKBVlNCt5AVeBWV4IWAR4SqWbdgj%2BRATkrk6votcelNPXOJ0Oie0XrGTbevAE8B5KmIK54i9pwrdsCApt5CO43VNJE5KQu6Xwb1zhgGWnRRLrKbUzOiCitb6L8jReUbLllJ7EBTzDXfcYHeeBJuMs55MGgUCc&X-Amz-Signature=4ebd131348c4bc452f574ce029e564332ca09cc528f734e6039a1d7694008164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
