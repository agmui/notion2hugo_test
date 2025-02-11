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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=74378446c8cf7b5ccd4808dfcdf533db5326b5f4538c86e5ec063724d2bf5e31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=22ca921c68ce47ec9e0cf1dee21132685b2adc8f0e3c07151e1f7ae74442239e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=1ef6fe058f095a681c385e29e1242df072b50362a3d87944b65d8983b047d037&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=0f1b712cc365c1c7b79cbef852c97ec51fd8458b0ee4a5dfec6b269a698dc0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=4a6dc1c8e0a73c9b38b0302848cddf9017b0b866fea6aa5324bf85fa1fe4ea58&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=b998e20eff6245f99c0b8b9fc5450ef5ea6b62b45fbadde27a52eced1e0f5ff7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4LQUTLQ%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T040949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpca7a262ZXZmCSAAs89uhWPB2uD16BoZESEdJxYTq6AiEAj9V6w0yhvB95zH4cOHFSa5jHb5wclyKZWQFkNRxApmEqiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEJL%2BqmYRDMbthhaFCrcAwnTgyr8sfBo3RovQVhOkKL9xqsIM9%2F%2FXvputxFsB%2BpdSTV7oHuw5x%2Fdxuju6ooTiayDYP9N%2BYc46uNdxTLrRMEWZTWI0PyZKoouqQzBtyN8sV3m27tE%2BCSQ1%2FxVs%2FdjoQk27lt5ARnbcNIraa2lwvW5BoH%2B0XnPTG8Dz6qa1iaxCkrBcMzxgc%2BSIvGk%2FAZJcGXPMnZTwSlqQoX4yf%2FeNP4q9fQw3Uj82mihL4uadfqPRSZsqAiK75PjnT3rBR5BN4M0V5bjTKPGzR57O0TqBKRsXUAVveqAMgZnBEBui%2BpoM3%2BG%2F3hkM%2FZJOlefRm5WCIqg%2BgWW1%2B%2B2fpNUMArXm8YDP5O6QRrsOUJifw%2FFqB2BIE2uGtkHhTIHFZfoHUgA9QPAxutr3iHrzDrLN4%2FwcXiedEEQaZcWJ0meDVkqwgxQew%2B%2BexK%2F%2FRXs9ySJ6tvkLempHadqlapppHGnYK9W1WvAxve1LkcbG5N1LOdR9avZ7yIOJxj4R%2FVkBpXvqPR27Z5M4QDlYYu9jL7drYXHBfX0OPfDBrCTqj0IjTKPDuA47aCptun882%2FbMDAia0Yoirm8%2F7On0mIdYtqBQxBCX7Wg%2BKlU5soYKB%2Bo%2BOZdvkkkrPkTmVmYtkfj%2FwVnMMSSq70GOqUBGlFT7AlsbZ%2Fm5%2Be9E5YwbzG3U6wIM0PsKbRRqZLt2zPd8MjxkBwVyIIQnTY%2BZVqHk3wTn%2FbBAMv0or8aajyXbo%2FK%2B%2FuWiJLY%2FR4NdnuiBZZAsoaJY%2FZOP3HveTxwOgMzy6KLGUhNHPQREy3ZnfWJSBPCrQpEE3Tq5ZyVzAnWQ8qxV1%2FVLg0FYOXqLXtwGQ%2FFnbfQcVF9cFB9qvhEVpF34WHmXGOu&X-Amz-Signature=b0f1e98f03b25539b9abc44743a6484874b0d7338f797834808d30571995a2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
