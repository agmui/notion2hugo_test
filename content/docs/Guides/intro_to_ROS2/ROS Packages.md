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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=45bbd4c6f3188e1ec258bf0d60fec99fe0d86821c4674fc59d4a7acf1549315d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=a68a7372d64713cc16c77d2206d3fafcccd8ee385acc4ba3d318b9e2104f7ebb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=4a657213312e36be5fe6c4c97b2d427afccb5ec708aa4f02233e7d522d5aa588&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=2cb33a2e58ef6fa06e6534414eff423bd40e3701ea0539c39f4f939559ff9e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=c41ec98454c07629066d3e7f28581f4c967b826a186ea95d458779d0f659b040&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=605fc1d82f22f52fa94e54513bc4a77bd29fb41df77ed7c7edc24e5cbf37661c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZAFS4EV%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T090912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZ7Z9FVOFO4%2F2bgypPaPAB51YT5FgbWHOdUljNZTbWoAiEA5X2wCbiy7oNj3s0kTTv%2FppuPdYBtvDBeP%2B%2FcD%2FjVdhwq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDDfJ8v1oZkPYdZHOLSrcA2EUmPscOP9M%2BWxWzQSulB2zL2qcoq0sfoYlimSdUnAXYbNHweQztR%2B79KJ%2Bx7PLgWB%2Fa8pPr3JbSumhudcZ85FHqcDApZt2mEeE3wa3FsNaIgExaR7DItl3xRLVFc%2BrEg4wUkWkkPjjELbaAxYeJIbESgVv07nzNhIW8oJzWjGzl3nyFnOUOcNTlmrJ7msHv7qUSUYPl62TLN5K7nUyJctgYra3ZPbZS6f1DLeY2nql2fMJVZuXKJ%2F%2F2Stg3bO2LwKeEW%2F9qVGUJ0pfUqgTM6Xh3VgRiack50x%2BLhQHM1T%2FjHQx2AMHIyBRBiB75LrWZEb09l4eRQB8yDsh6L4CXUN%2F7BWGpktVpWjuBungDv%2B4Q%2FVqUWZYO9zAoCRd6NmR%2BjRm%2BcfXFTQd3R0CKOwRUzHbr01%2FiyaRiAnZ5PNh%2B%2BZlJwQxiLSkYnQeoPAXqOiArWOBhUuscAH3ASVoWqRkYY02erjHDBogR8H%2B3QMmN9%2BqPZ0g3oMlK5VPoQY4WoUJJxoVTCxtSWV%2FTe8jbcMPoqxJ9jvgjSqPHfaqTMplZF0Yw3CYMgiEGak%2FXhDwP5kMyh161orlIH42zE8rdRSwdqqrHC83bpIOZFIzmjhkKLjJZyJdnmY5Pr7ZUzxlMPzAmb8GOqUBvIEdXcimdrZ5V1KzbDRaCpO3A%2BjF199AaPxIX84vWMfWPxuqoYjwz68L0PCdLzGxmB7kHGoGNWxiTNvvuMOr0n3l2O76ye3Cbtyh8L5sWdsh9L46ABdYlh8qZHee7%2FicPGMpFk%2B60OYBqkcWTn1Kcvb0JSpLsScGQzdIreMLfBgi3lpjAF4m0sq%2Fj%2FQUIrIiR59QCmf0T6vkPV5KoNGZ%2Byjxqo%2Bp&X-Amz-Signature=257e43141fa8e7aac1973908af74150c535760f23d7b69cd72d4b509344fa4fa&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
