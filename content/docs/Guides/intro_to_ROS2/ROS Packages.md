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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=235770543f108d51077bb8d3009cfe7cd08a56f77be3db2cbb84ada9ad4f46cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=8b41c29479bd3a8951b2b0b3181fa9650c75931576f72f2ab27bcbe5da4c8fd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=24242b3fd5f20ccf5919f88c983229bb4384c67900b9a22237b3d6c319394d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=60a66003b738d5b5e1598cada0c6a0ec4d1819e7b5bbca99e9a7bed523432bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=91c0103adc48c456d86ba70bfe04813fde400628355466e93ff1e8a7379d6608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=c7010c4c224d536e9487ba00bfb25849dcd6a4cddd4cd48a578ae2a183b4e5a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2HQ3TFX%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T171035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUcuExIpvajQ7zjbEyHtDapv3UBW4UNmDklAgNiTBfKAiEAhr9A8ZEJVQ7gslz1j1XHl3RdYRoAj9qP7VmFGLOJCpMqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKkl6Gci4F2EddR4hyrcAxtG1jjO1ugeP%2Bc%2BidZQaFDtpv4GF0pS402tt0LxGU2wGZ2YxtuZvB6V93sVzwzMx73N8XRoF6ECCc2jMbqSW%2BpJfZuNjwAY8cIq2V%2Bo7Ie38ywRhRA0E7hM1hq7xNg7wic08zLgSQMso5dzmD6FSCxYHryEy9X8fbp0A2IUfSK7aXU%2FZae23XvUEKXdKPpjI1V%2Bjk8AZYmj8C%2F%2F1AaSbtlv1dR78yH0NoGVvw5bR2kihV95GrDDW6Z9wqbeyuPoWcaRwt%2BC3edjBNbJsbbe0WGMNTd4chsVQTAU1KtMESMoMUFF6jw8KGxMKEgAzJaL0IvF0xGaIxpMRgUYyMdV3hiygDoVLtzyOYaaBSaw9IkaotMYMxfmO3t5%2BjaTuZLuZ8dJbMrVh62IksScRnUZuK1zobo9v%2BnMV5OzJDDAlb1rzE1lRojmk9PrPlGV3caPf0KPCRRX3eGS8dMQZS1%2BCRLtVb6hcoPOpKsKRSCYbxs0dZm0oW7GsGdEeBBHsxrg4n5hW48yCWufs0AezdyA%2Bgy6U1dfG4x4JEtqZSvQS9X2dvV76ZmWcDpQVbp%2BAe8p6gZ1fP0OCQCfy97dhUPCyh0b1HsfnNqT7U4%2FM9Y5WSazfGm7sEqPdUFnsUCkMMbBlcMGOqUBNDY8KDjjHDQkCHkdaNdJ0PCd48m8PgqLLcV9wzE9t7TCIu2XCDu7SmHQUbQh023BzgPi318Ef4XRWbtaxkMihV4mHTkMAxviq0Bq6sikDkndfQdOMpUbHqODRRfVv6k3lCkvz3ANffGmDS%2F4zojZRiCW25dasTxtiV%2BuUBmW%2BnpCRfVDMMoHMcxrJ2acjRW%2FLTNxkCX5Vl7z2mZ2hyqV%2F84smCq7&X-Amz-Signature=8670f540d246da33df5f50912887a18ef9e9914b49eb29e9e006421cfc93ccfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
