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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=502c5d0181d5aacaf5a4b6981c5c69767b5b49895907d656f3629c9e4360b880&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=905f4317f0c0711989923e187cef7fc84e3173330e2dead4e6f05708ab25d37c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=4a040fcc40ba2339ec1fa3245ff20bca21f1854700464d842f4b6c283d4ad3bc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=0ea2d91f75242cd4d6653d4c1d5f3433a4f7f10745f46a855cb6504c6e0b8715&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=29d1c3b946460ed8da9c16c9eb3533da5a3c7fb41d1d03b45f376e34483c7259&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=fa1b3d523db35a80cbc01eb5c41000169657bc7b966bd61089394dbb6bcb11c1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XHS4PXK%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgtXfT47YlAxw%2BQA5X9E9h1nFWi4oLfkD%2BvBvhf2AaTAIhAKfhoq3TwU5k79c83J75vnMWUBeQt2F%2FY9FQpOZp0g3SKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf0uQgJPqPgXtPu4Qq3APVqVEQT%2FQCvFlmRkQA7Sb6Z4%2F%2FgeDmtPQioyxqNt0GK813Wh4QjPBBNw76ZBSa5nYSbHqwRzURFOOQAmcb8t17htWEmMlX3%2F4rwGZCUbkuB44yT3VVdWNLZhxjDCRa8ARmIm0TFOZMosJAum3zTF1QSzqhDaWiIewIVkE7suDX8ZA983DqsTI3H2b%2Bh6UlPMg%2Bp0fXbcSj0owlsKUWCZOMfUB8z2z9e4xORO2vczD2Xw%2BN02lZ6hHYTVQ%2BzsIgIiMhY4UtQfy0eXfjpgvUZjwYSMCn50w8yhW57JNQBrDDSKd6au%2FGHrr71sNPnnMsKtX0ZT3%2F%2FNy7EyyOgOcF9%2B5jmHydWhREQMzoO0Vh8L3Iy%2BV2sunTIONxO5sOUIs2k0j2uA5u2tdpzpCg78XzK3moRrBPCfMFeDQTSDhlmu%2FKOO4aqj96NvaX2gnqWA0ubDHFvF5F1PfbpIakSwvY43dC7A%2BRga9HsJudp1EINXLAQlNiyfI%2BYYnwZFjvrgbKMOK15wr5yE5VwKSAOa8N1KkAqpPwykAQhcswWEtD2uwbGTbx%2Fl2xiGhU1Z3ZSg5ObIc0dgQD2DPKuLFbZwxJD7ZKOYCtzii%2Bm9tWvx5LrJ7uAUCBH7uVZyw3srIimzCk8ejBBjqkAemWma4ncBBxYO4uampFI9XOhNotTZlLpMGrapIXJZfid%2BDBNtbAuGqumQMqYoexc4q3d%2ByF%2BTpD6D4f7PblYOIgnFxixzCvZHdWaPZfj4maViCvvR9ZzwEfOo3HGs35PaEsB%2F2SxoLD49qrK2ZdQyViX%2FIh6hXR9Rc%2BGNMh9aF3uLnRewjSyHueAIvYvAJ%2B1GNpE%2FGKKbsYZuvBcpw1BheW8ts%2B&X-Amz-Signature=cb9ab6f858d0ae105eebb76fd003cb918010c5abd749b304da24c66992c61cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
