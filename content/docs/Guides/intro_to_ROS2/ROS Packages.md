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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=5321e9b236912cdafb5e0d621e98f9ba3f0ebfdc9fced45fd58eb6d89234e160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=ba4141f61c53e5c642b1210c061ecb394780d8bc2f1fbe09850a890b7cd2e636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=b35e75e8555e7ff294a37287f2daa63b9bd165736a09fca3fbbf22d09e08f035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=dd42799339d6ec077ac225a7a4ede5a33e8fcd3a737d383dc02f5370669cb04e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=8c54879d07948d5df960d5b31c95d100b6f242aaa5f908c816fdde11af6e717c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=27d9c720ab51f27c28540ee25269a0cbaa6e45330d9dd03e6aa791d952b18ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJ7BN3F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCgY1b3P5%2B3CyY6qL14Kff3ZkiJVud6VXncLvLYwwIBRwIhANIF0XkFMDAsrk9XBKg%2BS3rdY0KmOXosnqI9olewLnMXKv8DCEAQABoMNjM3NDIzMTgzODA1IgwOIGBZLIb0C%2BXSFQYq3APuvlC%2BFsRKbV5RcqjyGVf67TC%2FR4dtCHZK%2FYgArScHiXy1XsXWmplrgBgAn%2Fkxgc9zdz7yfyIVLIkOsl3ecYd39m2ulUWxJ6sk8%2BsLLEq09F8mnpgiVXVg0%2F%2BsNoQu71aa68Xb8wGJb6OQtclTgnIfW2b%2BXHNjJoGPro%2FKxB98GFx7PgW8CTyTJQkDJ99SCREbHjBAgnlKC9raO%2B8BqcdUk4urE8Z4%2FP1gymD2Prph2%2BF74RLNy3ylOcPqwZOTaj1Hlh4GrzhEzasAJ7rttQ26koI19Bhkv20biqMVnLVYz3Me937L7RU9XiSTwV0Olc9C1afZrQPF0ZHOosPt%2BZlZ0UU8IihDLFFX6PK8WpcUcLR8bLEjQRRyP8D%2F4a0vBSP0dd9qMWfV6HWMqDI20kUIVuScMkoJgRWezeMfqCNoTQRCdz4SUGgvOW0f159MdVguoTmZo55bc39FBb75p16pK7IyQbsW1X9IeNt4%2Byn3wXrSri%2FFYaizce7y87xyCBMRHm9dmSrignV29k67AKrgALd898xQq5GtNXErvB%2BLqFE316qlPLN47Ud4SGc%2Fu6IniMr3HBlenTgIi%2BAn0JsYIbVlhxmkSdBMIuVUsEMnWLdi7EPFCFBeS%2BHnQzCNgtjDBjqkAeVgH6MUstr7FAX15NXhqBgj4OM4CD%2BVyBoI%2B9t70emWCLZMY34PA8k5r5i0WPjrkL005d5IkrXM7Ycva5GtBdT4qMdoaASEOGMyR8%2Bqg%2BTgR4poDv7RUb6U7Ry8sWOa6eXwQ2ucICDN8BtduZmhK1P4fMyRU%2FFCSO2lsLD2Tvy8YvdZU%2F75ywSteWF857yrk5PJm2mIP948mA2NHyy154982WyK&X-Amz-Signature=c8bf9928e4f1f642e846cb5fc3bbe66d61a183de00d30896c14c4d3cade0549b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
