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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=febddc5bca3693c17e808e3d3f9be2d872d969b3742e7d4b4b5cde0ce2d8957e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=42144ad7bf380230ac8aecbc85a610a3c8eccb27401aab9f29db598bf9b8c532&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=31083d34c8d4890f622e0c65e260e4d88f95f00af80342ba03448ebf86b3cde4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=2b3785e243f178977a10bf1252ebdadedd371543020cb5a487f462571aac2ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=2d3f7c4b78fb4499c9df7b95de11587cbc976d27d4762261c5db59bd1475bca4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=a687dd9c14816f2d5308793c10dda1d5963ebc036d42ca224fd622c64a7b6bd4&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ELJSEMM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T022641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDJGappxCxE4OfB0IC1hoo8UzcsLM4JJlwLtW6jiY%2BX2gIhAOhrXzbXQJ%2F7iBGJ%2FDU1JEOH2RrmL3kArpOY7Gk98ip2Kv8DCGsQABoMNjM3NDIzMTgzODA1IgysjRN998qljTz4FFkq3APC6vsBLyvIPaCvli5eu4r8F9d3bXa%2F62xNuKaxdDhF38lhAVSOPMrY4AyQbzANS4wuUX525J0X8e1lZyj3jjJUiQlY6tWJG0agXh9Kt9Qch3KSaTFqtqtdbjKdx3rUP8P6EshNOxQykNIwsgdQcsVCxgYfjGXoKhzkrhhTcScYuHiWVEM9XSAf9GudNeZ%2F2cvb5lSx%2Blb48HLbo7TA57wXoRBlxdLZuaYhqByi0WZkfQ86zL6Y1vv7%2BwX94060KpO%2FlYMzEQ0GY08Ob20qBAi3%2BuWh%2FqNMDyAd%2FKr0V3t318mjctNubPF3nEcPM2HtJteTC93IejR1Z8fs6o7z9xfSVoyD0FY8Pai0Xmr1IHnwJvMrI%2FDogZD5L1Slwo7TUIK%2FCXQuSqnx%2FtvI8%2FWpgTcoI%2ByT05EPDel6Q6U%2BvPZF8oBnpN089bY2CyqVCQNNe4K4r3BrqO9Re%2FhDQjNPRBdyhAAsFmzTergWD%2BVc1cuMA3BUC%2BqnY38Cv0N3ihwG7CP%2FjI%2BfK7%2F4UU9ZfWGP%2BXhwmq1OrC%2F5Nw7eNahWLUW98rWK%2FcuOohwgc3KcnCvuCp6lEfhH7JOb8sDmCkyt6yPH%2BdWUUFCbTR069Sbdhmvd4oLWPdbh5PcEbSS%2BCDCq6bO%2BBjqkAXfPZrKAmqJ4x721rHCFYk8%2BDD9PioC2J4eWVnMdSECBkTKcaVdKEvOxFZX4pztWiCk1dlnsAdesJPE564Sz9fFg4yHx0maM2a0temTmoWiBBz7KvkQirpnB6gfW1lt%2B8enOWHgx8U46tbFEjpOtyEtEeln8CNvrXBw0Y9LWudcWQeu3VkznwwwDcmgWDg7mYTNLpMQ905cJKD9ee5iL4BlAeBEW&X-Amz-Signature=b608210076cf065398d36419903d0395f98a5dd46b8c3811b141d1dc923b5720&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
