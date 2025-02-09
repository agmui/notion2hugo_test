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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=0d7a50ee2fcbc80da1f10dbc0e870d1a19b10cebf5bdd1c28cfefe759d43ad16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=7ff9333589f616f1f9ca985d038a7287095480cb6c43bc2f59fe712313b14b21&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=b847158bf5750f4016879bfbbc2b94f576c209692d37b99c1e171defa01ee98d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=dcfa5263c2a88fe25cebc9c227923019cc36e9c9d4b4ae7b8ef088e2e93d1582&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=b7d30b63554ccb81af2d05d6832f686cd2b61bbb4ab498de85b9d960ce1a2062&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=bf5ff3aafa6d3f36cd1470ee42c617d840ed8a92a9a3e3fd8c1211a69ec9eaee&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4ZTALHS%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T090506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BYW%2B1Ck10vQVBR4qmf2O%2FR3v7Ebn1UfbV3ytJXOvfwwIhAOk6HhO1y9nX6jppTmbwsa%2F9I8H6yTNUMaCvXHNAs29AKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJHwAODoYnpUnLSioq3APnAiM6ZQEZZXVdFBoW6gbzdhGEpBSGm7vjoe%2B56kM27GdXWshWRGMmRnHfMMHjXTW8oaGR1lFk1qBedct9QvnhyViJHbciWUO3y0Kq3evG0SPpjYVEsvWvNW3BKjkRC%2FxH123mKru4631iEdrvheXq0evaXlQg%2B4g7queKqH4l0NpKbECZtR41A6SwrEKJq3DeR%2Bto1GIKEO81893el3%2F%2BdWRhVKmtdLjoOYVhHe1i9MG1y1hv%2Bs%2Fj9mfs08pGtbVhK%2FHNRR6zwQFpqP0iwngNbyHVERJSPEdx5AXjHJm%2FUkvbm4mHLfwKG8h%2Bi5eBfKiIwTLOcfF8ycIIpzXPxvSaK5N9AHl0CfSPgncUxXzOEvBlDkfmLYO57GD2dfgKhDPIQAso9anawIdfG%2FVlIIO%2FPMRiFungKbNmFmEynqtXzzsp94IRetTwPUKf0zTpEqUnWDMic2yxL2zbL2hd71jYCRKYkGGnCgLtoQ6U9UKqyu0PkXg6ROMis6ke4mGY%2BZ9QDv8CKhu8Ytun%2F3fzII9%2FUe7pRkNTWW0Rc3Fpc6IMzJZH1kCYNEgb8mTeUxl8cv62M0AYXz5X61ILCcRMA9LKqC4TBb%2FtgqILygwPzERFC3%2BV1DpSg3GwbonpwjDVvqC9BjqkAR5vpfBZ4DWOM4B7m%2FEGxh0oatp%2FdKLP36VSseQ10Vd4e3XQNzirq2RhugJTYAnZZ2JOCHfO6L%2BovXvv07z0UqYcQLph9vzwNm8nTTPI5hbAQrdIqbbviMPBt1qB%2B4GGbC7c26RdNV7Qk2iSE%2FsE60oFqOyOJj9O9yWdAhsMsFU8gdOBxwrOUzw%2FnEMqb9E394eBpcWx54yPRpv9b2cK1ggfUS6l&X-Amz-Signature=76bfce398cc38f15d9398e7ad60067390d54fbcfb31fd154d8557b56eff0b236&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
