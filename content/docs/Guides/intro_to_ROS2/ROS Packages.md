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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=fd575a0adae1b65395355abe23ad5f425273868db62b0d7b87099696a9b0715c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=a192e71044304f486bb0c2a59f038be99d67c2b062d1667d28be83fb83e7980f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=bbd0ecbad946b1ff091c5b7c7a04e4ca6bed421d2c8c2b116c5bf7c7563be164&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=99adabefb967ed57f2d2b7c42a6a8b39de335eb0a8701116d22afd9fadd3aae3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=66e965568c30e6aef2259ac4e7c1642e7ab762f2ecf1155c052beafe8b243950&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=217ab73ba85faecb7c122f84a77a303515b2a7df96f02a63b4965435d73384ec&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOXCKY7J%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T150751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRa49jjyFkn4Pxcn6JDreJfWlrGYXHdBM6FfGLm%2B0e1AIhAOm9rdAl5jHcj1pEa%2F%2BPOB%2BMAITA%2FFqsAPiyuUdYb%2FmyKv8DCBcQABoMNjM3NDIzMTgzODA1IgwN5zaCmEv7IcjcO9kq3APVpPPRLEa4CJ%2FweIweQdIWzllQFeUgi%2FImHRW%2F6xXecQjCNJlRUMoETzAuBxObLTr8au25uMp%2FfnemxS2Lt4cVAAR5561v%2FfJfNtzB4TW8aDxPjFMd4d5oF6FCFqx9v1rX%2BD3FjJX61DA3UoyOG%2FQHNczRCKjujoa3%2BGhYmv0%2Fwk0e6nWCeg3sybz%2FimseHZ92QcNB8%2BzWtQaqLIG3TZJzClT2IOEBeRHM3DAVd1GMVqyHGlhrMvmq5ahjZU39m8%2BwIy3h35D4lUABHsSJT5X8kYcswq8T3%2Bc%2FoP4sjAvUGGSzs%2BvnlqfBpUBNNY2Qko6fTR2jcd2UKzx95tHJIfuSpopJuhRt9slpg4FFBYPSCmZFjtRWD6NDxF%2FSF%2BAlr3cSeAV3F1s4OKK7uL%2B0qNEfq66Tu4%2Bfgl5%2FY%2BwCDivUyHMxTIXfbqaKIDETP%2B9ERRZlrM%2FlJvA8g5FM%2Bpxm5i6%2FQ%2BX15X3qa2p%2BqYsTxRZnYfwYShZlb0dAkvwBvZWLRlX9ozZutNA4PHhG4qS6sI91T6O5fhJWib9mPk2SzOfvMMS%2F%2FBy%2BrBBB%2Fx8IRWVwjOI1EmhvwwOzGqNRe761RSRAh6TJiW4QQVqz91M3EqRbVg%2BZmvJ3aaB%2Bs7%2FlfDCWj4O9BjqkAXvaemHsWmf8POM5FEP0rC018g7ruOoxJp3x%2Br4Z4l0d37tC7w0yfnpgZCEwtvo9J4rp%2F2%2Bv5AcYKVJq8N9DKZsCEN91u5M6pKrcq4p6%2F65N32HB0Hv%2BcSmxgbtBCoMOm1N3EOY5Yrxl7ZA56UHCS%2FwoxPm%2FF3vKySgMaOprCExTCVzWXd53xYq%2BXROw%2Bs3tcbquA%2FJbspJ8FyZQX36CQKrgEwm3&X-Amz-Signature=38c4375b9bd3be5bc9a53b2f34dbf74202147ae3bdbc11351945e9735d7d41a6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
