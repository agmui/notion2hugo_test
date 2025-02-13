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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=b973d1b328d00b34d09444a220bdabd5f4580b9ae073d5049fb694216f42c86e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=b5780c06a5a11db4a704279b1a0b738cac97cd1ab796cd71d969f66d633dba8f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=40e357dafd53ae9521af4265c8a3b5b8a4576bfdce34630a7a9a99b33e76cd9b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=70886a4c497e2d91a21b84535bfb03fed0081b45050f2123138eef4de8e46522&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=ab99735a17386b7e6183f13100cf173093165206d5f37a4d7d9fb63710d81a63&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=f0ebe261661c852a27fb84c9622cb84530cd845b6a9803c22b5fabc9913e5584&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HRXQJB7%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHx05EF%2B9XD2%2ByD2C8pG2memEjJCdZO5672d3Hk8BU3tAiANLbTykiMcIhJrcjb%2FO0mHzgjr80PqTn1glEItks87tir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMKt5qynDvSfFZLBYRKtwD%2B9SgdSX0ZrqIwyEh9mTuIExnlPdJAIjx6RRDg94dARVsBwOazXz7OZod%2FIxtgY1BSKZFaRp9FGaIKNFreuMcQSUu0YpEngji8j9%2F4W9PrGCaoWVaclyECKrXUnzP9KTN9vwDqxzX9CurChpN6hghzjMvaJO%2BC04mW4RKxIUR9GGWUow3F6sgDtdThr6pyCQppzOq2Mu%2BcgyLgvoZfyFR2uzON7YLbb0CGvvcRxTRPXSvqbeTVvuf3zAUaJPp3cwBCT2CNvfdkAACINI5jbWIwDuWOil6uOSKVKDA86FCxEL5XL%2FF%2BVg5Za%2B%2B4FueA7QPEO441ip10jTf7f0aEWrrSwfikIzFHZ7SvC9lRJo6xSrBk9o%2F0jKeP%2BI%2Fcp%2FLKUdJfHsl1z%2BgXKK0gjx5Q%2F0mqRu0WUehLLSDMwG2Y5mY4DDMYaNnGEyxRB4%2BQQGtLqduq0jXe9VXO%2FsV0AcTPypRb14dfSFxa0Hobmvqpxl58uoyqWe5SjXdrTGGCmS6CCkIrIdPgPtFvYzhP4uYEJfPAQWDOUXGu%2BOJJOGqBLE7WmkfQfpOuNgmgqyk6OlmJm%2B%2BtVFP8YTJ3VRTFGiUOL%2BQqUBSMwaULUZ0J2NjDpqrm2%2BH0aE7O3T8uFFtZdww%2Bau5vQY6pgEVyOJDIpJrwEfJa%2BERn%2BHXRmeDPtNeNL18cvDJ5tB1SFm%2FU5ksRr2%2FD2Pxu%2Bhpohh0vTYdJj100E7rkSykbaXAbwJlvJpOSmcrBK5rJ0X3bnhRr9G9bh181U6HAB7HBUO3m7E8w%2F9Eq69k2nGt6pLGxwmBxuGD3hDhWKmLeozkyX5bzkw1elL2cLb1rNtAXRVTdBDHi4FCr4gBgF%2B4Nqm6m0C5etim&X-Amz-Signature=4ca933e5a1616c4e99624b317cc00a289eaf3d34b79f606863edf671eb183c86&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
