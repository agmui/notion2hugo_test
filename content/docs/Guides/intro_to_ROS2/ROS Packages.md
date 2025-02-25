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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=b6545a8828eae4fac4498d2186d1742ad815f353c1de309d61e940abe07c9b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=13751515d2faba1035ff4e476388811404c7ce9eb82b217a18a7e341df236ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=ef213addf0c0cdd4c079e779ddcd56d1f845cc388204cd9658e47a9d162e9e37&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=f7c2db0efd254803fa8691d71c88a90a6247ac7b62d13d48a3c8c0422daa9b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=29b0800069f4b33ac6dd785ef490b5cacfe7027f01a8c40dff69a57fa2ac1269&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=99190c106b248e5f235064168446249f54f12de742d98e7d0dc3ded703fb58ae&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W233FEHZ%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQDds4LY3yLRIUHhQSJ4e%2BuCwl7r4QLdDsOG64KoHeA%2B8wIgDkg5%2FAN%2Fe2LQGOyYa5G%2BpTFRmxdXqsc%2FNalDWZSLVVkq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJsWcQ6kCgu2Wj3JUCrcA1C50kB9kXvru8t43Rh1D%2BKqK6V8uhCwF4F2n6H30muxnetvldtbN%2FiE0Yn6yZBh90T6qDTfLwwjQZByheCP3yvQO3zZm14Td83HPejEZka3FZ6Oe8Pz7%2Bxzs6NIggG9shCyekkxBJl%2FhqMQcqBOsM%2Fn6ezcMLyn4mGvRmlIUF0XVR6e0UryVUhVSxHAvJKx%2B4Zp9JB6IZLe3RcSHykEmpBEY1gF62GVeOVYPdZnbpT4ziNewD4i4YNfporDsYYSzjRTU5NnzSCB2XWJXnAENnfK6c4etr7KcxhS%2FFmcPlVl0Wi89PCeayO7ZDJIL%2BXa6lpbkbDyORUaXQvxeobyySl7%2BcK4OZ0lU5rFVp1Njosijqp1K%2BhdLcMqjro1nVfiFOerSG7fHoXMirMZ3qrUUG7stSrEj7OgWSSzuukqcRcCZTvW7fPXAOQhL46M6DgvLGAjr%2FBPL4oDwyRdZTu%2Bt45IqBxUlRnS%2Fi4EO8zB6%2F8IhKBxAEcjd04HUSBRreENnLNBFi%2FEIZABt5V6p6webovVEDZVI8QuOvOGvKv%2FND4vWh6lvuMuEKdPJbVDur8WWRr90VU3haYc43qS6IGA%2BPZLnUZZTLbojamhfwrTdSkOYxv3Rrbp5zY57n%2BMMPSp%2BL0GOqUBp3lyymQH3Ck87dw4nMD1YhGPsvRkQYVs3iDSKD2EVMtixEhoMnw2M7ICbnHnkMHLvLCy07bBoGZpg2IOvS%2FiqRhbkQXyHoyBEPnKQm5ay2hW6FlTyCqn%2BcjX7rvIsYcaTMCsXECZPn3kg%2BEclpZPgHxZdVUTMnzxeVKAibQUlP9YjGENTLcVBULdsXlJsqBvsGSTNchrLih3Q8%2Bzu8MzJcH5eXLJ&X-Amz-Signature=6cf10f4f594c9389f7f7ab63e00dab6ae2393ad3ccf9a9a8610dbce34a991305&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
