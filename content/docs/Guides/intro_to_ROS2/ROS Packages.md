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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=fc77ed0c1152ff1dd0b17191cdb107c88f125db12be48978096a3b928b7ff15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=4c2ab273ae4adad2d0f004f644ff1efcc1c6085e87d3e1148e817c45684d75e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=9d41c56e5b26e2f78f20752686192366e3bd06295f32ccd14107e19055914e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=29e8041605da2b794b5820403fcedc9bdd9e415e2671abc6231af29d15e3028e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=132043a1c68881f73ae12f2f2eec643d5d10664c19f1144d584fcf42eede5c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=8c1656d0e14b305edc35267002b7539f18b7b6d2771d6dab1dd768bb7a2f3c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZQSDTX3%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T121524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANQkGZGfUyBXwxY9zVB61ZlNErquedwdZvJbl5hTmrbAiEA8ac4I3m9T7lTH5PwEtatf4tTDYR%2FuQpFjp6nRhmneCIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDLBVju3yV1QTCADP0CrcA0W9K%2BjIJA8hLsK9mBlRnnlk7xt%2Fu2IfV%2BIOASQruZJTSgvCyCg0BF8%2B9eQhfMAXlWhhVvm6gmmhpWjx3WFYyd8OMhDP5JO0P0%2B901xInMZmAnR4iU7UZf3xB6UpmEu7xebtb0IKWGu5KVKRKFme8q4CypePOY4Uwhx7YcSIowlyslnsQmDvJZB6eX3moDJulFwsEcjHMt8eL%2Bf2OZNq%2FP6pwQe5Nb1TDnmrWgfiBzJkppktw8Qv2fjbfHZD7XxQ1sA000WpQjX%2BMOn36x%2FIkdm3ToBnC7ZO1co%2BcSJ1RGN4A9HiwyqAWNtDmpEHJ4WPstP%2BWLdAfUSa%2BIMxKW81URqzSZYOcYYzhD80Y5Dkcpnp%2F6SuunsaVTGi9fDoCocv4DV4jIBdYUx6C%2Bj1F1dSZxVxZMkJ%2B3bhoKuyHnnVhAeHO18CFpls7Q5itik2NDXCyUIG0OyQb4dadVGmcqHyhwsRRtU9nDtZT%2Ff1ACNIk3KOhEDJmV6Gk1P63CIa7L1eP0gnDCgsFc923G69SBro1lfXofV%2B2wVhLrem7ARhiXOUDZr1ljr0tKyPbeGjBcJQqe1wGa%2BS2Hsxe28VXaXGseyoFoRoh4Ndfsmq2WX5X7nFwq%2BFTykn4NoXReOJMPejzcMGOqUBnb5Qg3O4PNxAhbcXp4IWwvqpzFJF8fZIx%2BvTU6VvnPPqguG9N0PHqTel9E3NN7cqsBlhECzJP4KmLy00zvUg7nPukRcbpoOLH%2F15CVmEo1NuKRLwfuxwmpqBKG%2BAHeSF5z3vBY%2B%2B4RZHmANvN%2BvKHyIaUhS8Yb5eQXDPQuAM7xd2c0TrbzurTHbddSo3llX9gsZWZNnsJnP%2Fn5M8IOYtuQ41r1vR&X-Amz-Signature=74c905f5fea1fabfdc2f4c2e2f3a639ee783557567c9c31ac85382099ab29f05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
