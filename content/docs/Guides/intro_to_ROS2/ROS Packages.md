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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=0bd2aeca48bb7ae5742a2f4341003366dc156a208fcdb66d7cd6f05d2543eee6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=d1d78ceb37a5c89a2a81c11a2fe65b7197d83f5f7c08669f185a31e60a614b3f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=bfd2cb129dd65e15fa606a1f87966f9827a9c5883b28eee1f264587603f0fc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=8a712239375babc6ed480a3114f718e49fa2179d0f0c262e7bf8d57170adba41&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=b5d8b2064a6c15e1800e0101a0b9502af134c2af915780ed36623411338dae41&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=d53f403d41524bf2bed669cf157e7d045fe8af0a06df900a4c384dd20917886c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634TCASDP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJGMEQCIGfa%2FZj0x%2Fki%2F6uheMHeekwpkqFjfTUM0VfxbtKFRxeUAiAZ1JIYTdFF34S1qTDJBdDc%2FEL23r1AH%2FjRk67w7KD8tCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC%2BM1rXz7wFHXhplYKtwDTV1cGKYle8AV%2FtmT5RgY02nz7DMRCfCqJpc2OKlhDO3kMg4G%2BIvUU%2FVGlcQ4ZaZPs5A%2BPd1bKfVu4PtJebVQXYc2tDhmDiMXT8toD66TjSC6tP7EFGTuVyO3yM5%2BwHYUBRApezpA0PGG84Kmg%2BvhgPSHdBNbhCog4U8%2B6Gafd6gWcWs2TZ9YN%2FqSbxYn7ygcmxQixQMX%2Bq8GaECjJ86sxD739xO0euXKbVAAIfzGsxYERh0pVUAPXzgN8TEU0HFemU68jFSKHs2IRy%2B5xCdxxjDX2kG9K%2FM7lYu2aVCbVE%2FSun4F2gBkLpuIRlOHez8KqszGvB0H43pnwA8RFSmd3PDn8BlZ5zbzXt9GUncopLbdw68e49yGdu6kiMbCi14T9W5ool6KE6b0jYGzQZWQYgpm%2FeL9NeNvGgeQuG6E1oFIRkAbm4YqtIL6CDHoIe0zpbK5LNKKLOgFOD2xtuZydG23HZXv9tr1cxd718Tx6y9Rjas%2FA5EFCXMMmYHf1oa5QjJpMzM7SPbsk7OXrp8lstWkGHaYHpSKvNEMscymJZZkS05MWxVNb3J60sZuPZWPR8eVXyic4KxodhproqA1BWkIjhrLGe1ipGd%2Bfe0sROwplOTnxjy6LVVHCR0wytf0vgY6pgEI%2Fy%2BIqG4484hJWSlzMYzXOJvA39LToCwsdwXgwvkQvPJBLFevlrTdAQmFrcG82gs%2F8HfvaAL2eFWUMRnQPmkyKP4NuXyGnq3lWdSWpXM%2Fbd1v%2Bzd%2FLYOgcvt2VG2Tbbj%2B1IoPKH%2BWbXOfl74URBo2Bo%2BOX3VSOn94vRnnJX2FeONs4XUZ1I3JaXlxDmN4HmtFANU2vOvE7j0FC4IYSKAbGic23e68&X-Amz-Signature=a5f5c98c34b0316b0bd22d9ddf2341647c80b6712b8a1e85d659e4917291cc23&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
