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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=95eb4005d5a61cf60f915381ac9ac148df938b4da2232cc57499c4e349c235a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=ca813290dafaf681f5f183c6ef9b64d8bcf0b0747712dd45dbcdff851e9e0779&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=6df9a93f19c4eab983027eae6baf94b5862a1ebda263e5a73cff48c5989018a3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=eba54b15561d271ce38d72ecb942aada130d23e7f245de5d792e9c7d17c4dae8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=4950fd49321878b0a4cbc9df9b475280dce983786bdf8ceeeb124a0aa097e53d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=9a01639f499c441167f1a5e621e89c5c7105ff4555163835c9a124854cc1daf5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NWONYB%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T070812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGR7oQxMwc9I4skuUcaPI7whtj%2FYY1l7dspE1qjrOJk1AiEAlMtPIAaPcHEp3czCPCbrbqz%2BFYlx8gobqv2yZ%2FfzrBkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0PMXkN0AUcRP8%2BdCrcA2j6DL1Eck5M4D%2FNSOD2nXA%2FH1oBnGoQBu2z3NK13g38uxVm17aK0EN9lsOxhEhjdOkSaJSwKmNNzcU6S2fudbdhu9YZ1jwjMhfrodh50iKRqshrZfO88FjeqXtldmi%2B8Y%2Fp4b2imj5cqIblB6JR7j%2BdtSd1EyPIv4V2Jil1y%2B81HR%2BLb8isYSS4e8u7JL1Mq0nNRvihSFFJbPSPesxqQvLuP3ZhHPf5wcHrpPGCbtBY3v9EIY7sxP9pBLvZ9SEEaWRuvXT31kmHv29kZDlvaUSq%2FbPtpPOLCNX3O%2FfzWpmY%2BAqaSCE5TAm006UxTAYPgbIkjz8SLXSyuVDrDYSSDnisNQUEfrE84xk3BWiJe%2Bn6i9IO4az0WmrXQYqgvj4EW96vUQcVXr6cVVixwpMo%2F0VLeMLD7MPSmjcIQQxAz22ysaaHLxBQQ6pMpqWhkEUj1O8H3IYOgekWXpimcaStGZN4AphSUa%2FJtln4zCCcrL8XRS%2FmlFLJDyvo8KxVSH8bGQW04qKfg60sB5KaG4DkuQPAt6U0bOgeM%2FNACHt%2BV8ow7%2F4XcRCdmPGl6QLpt6OAw0f93mDMkkeA0hanjfCbC1RVnr85DKjy%2FHmY1L5szVZ1PJ%2F9A3kksCqn351pMIWe270GOqUBPsOXtbuxNP3tGBE4XWv3R8Be2mKsTwsIyXAJDkUp1YJaRN1E9aOIjRvNI7dg5TSAhk92kVV79bkeNLnu5UbgX6cwlIqG4uCdAeEBt0DQKrpQYcA%2Bnp81zAj1Qu8VQNQt50R2C5EHUNqs9Pru40kVBEf7zWmtnUoT3OMji%2By8ybOmV%2FUnrwhYRn1NEmj7Ha74rJI4QPFu7fk9wFYjPKJJCNRSAYod&X-Amz-Signature=0352cf25dc4284a1f5e98787771529df2c0798ee893dbf959e45a4a5d686b7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
