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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=bf18b94b68d5a4fb93249d6933652639b17bb6dcca2a770207304e01853074df&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=13a365671a6c2e8acbb1f831eed7b08a998176c23bc91830c3db7a6863ad5195&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=3b9be342ab880b13bf375443ea9b8e614dc49588c107c0ff20f438e236f8c82b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=48db32a1073416b88889e1f536948988f418a5b0d6822ff4972fcec75aadda7a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=709a2ae82f78f195c7fb1bf3f4df2a8d943394e2a0af85d8b13a167b69c603ca&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=f1aa9dbf32f5353b2d0f7974d091470e79b3427284bcaeeadc444c547a9606f5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667HSVZL5%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIFum%2BK8IHC1GmQl3v5VRo7zIRht80E68BQg1hiwPQw0tAiEAoNnBLDZOlJ88l6WAW7PkxzNTlCrUUO1T%2FarYKxVe%2FPgqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgsH2pGaUv%2FOpOFsyrcA3Mki4eTkoriynLIvn5VJ%2F6LlKPQybFRQ2sgsnTM5g3wlUHtk5jYmO8JlH98jjDRl58CjGYYc0T%2BHqsi3EmhSbvhLrNLC%2BpZACd9RNkSjyTzAxVPnqDM9T4DJYH%2BMGz89sPAC9qeb4f%2FPmdGVYzOkqrQZk8c%2F2sHMpV2fTZI99IrxJ9LTmNzQNMMrLQA3VhWGSfcUJAr1QJhnmB62pwrJdppd2sGldFWgpVWtr1beCw5RfbjQ5EJg%2FII%2BfLD8r36zWnzcMzJdeg8pP0gtYg8t8s580rzCbWd5f6vM7lpgkpy4rO7qIeJiA0NU7xhkzpB1qBcQjBvMLWlNmnZmpWHTW3Rl7DmGhqA57RDQruKzuHAjVqyjbQNBBMYUNqpyhJ4%2BfEwhytwCALeEBFP0n04OXbQkAqIgUHqJFmeIVD11JjiezSuW5gx9ktHnxYbpo6CqYfW5lHnyatyb6fV%2BGs1YPYpwTwIjdmMwqu1PqDer5WHriaK8Yxvv%2F9tO474a6TDcPiV2y%2BTzT7eQ74PJammJH1bNJ%2F%2FevaCYy24EZCxrT4wjzkv5KRa8V3tZNJ8V1lbISdiyM23I4DWMDXg24SNxo8IFNWueL34CjEcteX0UuJAd7RORTCaiiaGvLnMMM6UqL8GOqUBEmzlZQK76rK7ONAGkWapU1Zx0kNGW45Q%2BvjNzvPGhgAGrbP%2FMpIa8SUyDb4eGY0RfrnngqurCxPjNbTlNQ6iuiq%2F41YJdIc7wObz6f8ui4vYTG4P3jeuG4MdDdDP0dZiEEL2S4voAtL%2BEOug1csjsXltMiZGne3C8YugtG7uU4zVVDbfnUoplI3k3YlZKDOqnNPVOlvvCg8z%2Fu5wSSLFVwm8AbXg&X-Amz-Signature=0f0b033e9db06a53119794de0e597ccd1c59c0c333f216161b18f46e3d294ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
