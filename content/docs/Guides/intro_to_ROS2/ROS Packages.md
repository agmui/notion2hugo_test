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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=87b424271aca5d8ecde652020ffff7855e62ff16213e4da4ebe8fe64865fb88c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=f8c4596891ecde945eefe1c772fb82a1913805992a6c89006a9b8c5f0d3b96f1&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=b563ce5e90279417f2eada6ab810efbd2d3ccb5dd67154648212eaa362e54623&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=f69d5f418ab568cfe4b7ad0178da9aaf2b45e62858f323b5e6ea726209d985a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=5f813f780b3f7f197dd8e146b25fd0aef9ce86215091459c2ea6673396a05790&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=b8b3779d73f5261ea2acb643565b3bec587fb1dc04f93db8c8678615d2adb526&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AQVGJY2%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJGMEQCIC4LPt8TQRqLp%2Bmns5ehMnwB0iAA9D%2BCUU4moEv8cGfIAiBOQ41gJgF0jZZHqNAcLOOsK7I7fVoEg%2BAPm%2BXm40dh8ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMU1K38uMQ64wfiwF1KtwDtHuvrnMo8zEwn1V0EqUWwJ2laYCe2T84Yi0XT0qYbRJCmAaqo46dJX8%2BQwcOoDvQdAX2drJf29HUn5I7DIDL%2BRWdXiKOE01wshGcdFl36LfgNvPM42huouRV9N6fJveTgdn%2Fcb7xN%2Fd8BuCD9xolFV9qo1uBzBVeOt%2FJLj7IhppGvxQ2hNpVrzkK6KRhoAG3z343CnuDr6uIk94FNMX6rr8S3dJPzjAEKjstLuhg4QgSBKs4jpSzZ0YwaAZ8EfCxYotQSbDKQTx%2FLy4Bhwe5S5%2BdXhR9aHnMiGB7KGE4h1XF7CyfKrgEHUXFy4Xn2NBeD3jRS1LNpfCutcKkzEFxz9pn7cIRdLYdKMj6D6flcX%2Bv9ap6YXpPVv0qohWOQMQGwJholl0J%2FNnHXNbAlB4JE5xL2%2FqSkvhTvkd6NyAWt3XyMbon1Km8vWLhMeghnjPWRsz350uuAJQemLluEB1SIm5t900AbGNGmujdOfRkAxMJBB1iVNiVA5fQbcqLtjpvPr5B28VeXznFwF4%2Fl0r3XxkSmxzFm1ComUvkkTCNDmLhxDoqtdPJpr%2FveRciIfWphVS3KQklbDKUziEjAHPa5blzGMVuXEdAgYyhhrexY8y5FXntI%2BZeITPxMvwwksyHvQY6pgFYu7%2Fo9reu1jQK0K4%2BZIKWPX3%2FP7t3V6ZPY5UNlQghXVf8Hzsld1Zqs4jZzxia0qXGNERZ2KFdmG%2FpdTI%2FST9ox5nTw3id6u9DsvGDKIS2M0gI4esKLB3brCNTcfGcULfZA9saeUFhcrnFrAcbW17ovYWI2wYEf8C5iOXvPVFVC3eA%2BzK5UpXr5tAKaKC1FZwt%2BdeSVCgFUECoiGgmakAxGvhFkKST&X-Amz-Signature=67de87e32e64dfbf3ca9868f2c74db81a71d026d062d9aee2ea009850383e4f9&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
