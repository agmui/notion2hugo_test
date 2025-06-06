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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=a13af3151c2e744637db64015e2d5bc7b037f9b0e47a83723984d4ea9ddeb484&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=b995f1cd354a3729245c648935f39bf910390302c51b1a30cf5bc21b3b4065d7&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=a799b9895de222cbdb558fa908ef8965f4b617a2b5b1efae5ac71023d12f6b9e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=f55df53e70510ace027f05a8174b775a824d23422f03e64e15d5f81e40457500&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=7e98945b5a77b2c3db9199eb83423e67107691ae929cca302a8d51225287b58b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=36ed38a48aba34995937aebe0db640e1e26784fda80b46138f46a119511841b5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LITXVUA%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc9lzPRkE4esz7bhQwZzcBtVzWyVWsdazc5BKAh5WOSQIgGwcIhwPMSAxkRL5sFswThWEdOZ8u8ss2PVPf0wXiPeEq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDBXSnxjBvgZWwrr4wircA8YAtfTbEbKo1Lohq9jtueh5XAXNk8FlUUDvJAyel3LuG0W0DYAx5u9cddcLnDod28FIai1HWmkUOzfQ3bCN28%2FOI0M9TygQ%2B85HiQmvsGT5uCvTwaMuAbBIpeHDh3LLFWsvav3dvK9Bp46VKfGz8Ttl5K5dEHXYGp6K0Om08L8GEtHz5JFvmLfpA6mviNEnbruGjtLOCX9dl%2FwDt%2Bc2%2FED1syY8rCCFuU4s9BqI%2FEiwZlUvVMVxGN2O%2BNmtvufZAXmXCdbtphRkTduc%2FA6O8mwJjaF2937pZw8OQ1yet53OpNPUfHY3tW8sF6QI0aNdXIt5M%2B5eB4%2FvVKQ3f1oWA0069CZ%2FJRrATaKbqQQOzRZlzeyRnaTIoOOoQYBTTHsbmRnCKP7LFJHK%2BuZ2mwK%2BFqYKJnUrwd%2FOEbRI8z50J%2FCOUXKzK3UGYtVjA96ci%2Bv%2B%2FP2YEwhfj%2FtZP9sM0xgMqx%2FvbtqtIxIrN0dboJZbywJfUim4MFZwKwqH%2FH0Sj32Dk1InX02DiTy%2BsCBqOitIgY2pQOtuOYLsZ69TL2xYwGSA34hg64TPOZUTBvvqPvS9PlGFnuD%2B%2FqyJaK%2BVgzsL0eGQAmZiAuaoKI5ZFKSsH7gWV2TtG2hVfwGDVBTHMLLxi8IGOqUBr6OR9zZH3BW%2BkpU%2F3%2Bk5yL0WPOTXjMTjh%2B8esi4yASwFBG1MGp16Ra9Kq%2BofZEVojyT0iFdKyCTOXPwQQuCbWRLM65gJhERfCr5MyJq%2FEw66ASuvM8icS7kuu2Zpm8MNtvvITV9CM4P57gyjYteAoh%2FPr83mnYgClkN5sX0kCtY%2F93AF8sVSfQLeGduGX5s6gHOtJeec4LOHfLrWuhBfLVdWbRoG&X-Amz-Signature=09d51d35251beab8712855229a81918bf9c917b67e073f8eb4ad7efbdd3baa7e&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
