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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=0e8f7fc303e97baa9b680f89833fde1886e96845221ba3b0b2b4e2de33c30956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=63368eab84f022f2f4eb8d91b3507cafa2cd679933c065e64050defa2ff815c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=33b3caedebcfae785357da2a196636db93c528c8e6f5f7092af3aefb55460a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=58385863856577009d92681fe845b5fd2c40e7ce55950e7a34fa3f7bd4b6a9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=7c4e5507396419c11fefe45e0cd374ea19f395be48038f4656d0558df6144de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=269c5e54aff3c5830fab32161ec4a266beaa1b1724f4ad366202377628bc7a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OKBPK4R%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIElvoxHdKZUrmytQH1EX0VBsjUY0IQMRwTMdyVdca%2B0zAiEAjwK81wSkgh4nuDZARFsS9bXW7J9JCpbD6g148r5oCnYqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNmYXvGHtjGKLf%2BQSrcAzuJIaIaztD4AR%2FeK3JKe6p3P0PDAojSN9uo8Y8ZSWmBz1lSdo7SElPxZYys3WT%2FnHr7qODouX909665UyaGxxK%2F3xVUKdQMExcJ%2FGsc6ysvN95CuB%2BKtXLn0MhXdZyeSQRR4nt22LKw5OmOcM73zt2OhvQW5%2Fa7hyUndErQLci%2B0j9XXZ0C7Sb%2FA2k0mQkY3GeHnnmuPLDw%2BpcK85JT5%2F1P1H45XHB5uTv5tm4Fg%2BWoZpk6Ob%2BOz%2Bu7krlFuDhP7kgPb3poBoN9rXkBHWJV2b0XVkRPpjSj9AOJhKWhEc6RY1WFcxnkiEPt0putLystzY1ogwQ%2B9XMq%2BxXXVYPpzfFr1KRFow2NfuM2q30GCqTPAXmvS2D3lbKJeq8Af52ILlQuZpFEY6SlqP3TfMx4zihWmfOsNLja1fu2hs3nf2rC7OCKJrpGeO%2FoOdwER3XC7ySK8XtVkGiqd0Ng%2BAevQ6iG1kVHLHsedlCqiHjCtX2%2BgeZ%2B7xTNvefqxO4%2Fx8ouZZUGoa4qgi0bkc4fnrMoVY9H%2BxKPDvlD97rIde5mYWhM0WKP%2FjI36KFWrY5X7mPjMAvwYk9YwfxmnnqaxtfWCOPkNhWA6dp9m6ill3e%2BeuRPBjsOsKLysj5r%2FohGMIP9yMMGOqUBxjQHj7%2B0KLYiMTGrvFSywHuNEScAHsliXAgHKb%2FP2nmRflzNDbToH22qJ2cq2T9Elf%2BPuUjcomiyX7KN3vPzbYYvwPIm8vlmgcZtPQWMQKsOOuX3ZMCQqRMyJ1K1zMPPPoLF8kPKKhG4osUp5vQU8XtretRVYzLZXYs8iGzOxoDKqNQehuNIUjPJVEiUfO%2FRIotRMDq6dh3n%2BCLlfBpCSgO0c8%2FG&X-Amz-Signature=0b91f5dde66771d68d0f61f743b16a2ad18c3c4517e927e44ad30ed93ea546b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
