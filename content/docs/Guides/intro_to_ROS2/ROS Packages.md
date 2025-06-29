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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=47e46b450c1fce12e48e373ba9acb7d9b6b839509166b019581bcbd7dd36667e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=107f45f2e784161405a29f8a7896c71ad1ac89c3bc6cf44d39ac51c632c9f240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=0e5e83bdf1d66a600689f59c848741645d2c0e841d29a33be9d6ef5453d7466b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=b468a1afca97a2eaab13c275f94cdaaa3003caf9121ab2aece47c12d5df1b99e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=3de0d04b0152d39ccd7f4e1cae8eb8fd99cf3d738504599225c5572a9ff919d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=48df237e75590dffa782fcda3a86da89f9ec557fe0df2f9b8c0ccbc30961b8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNAUSJ4D%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5BZalamrfle8gqu48baolpGZUuKiXDV9pIesenauy3wIhAPxjKuqHD%2FXFJsONmbAS%2BVzOWVNeOgHlwjdhKfre6cwPKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwX5ohfwRLvJpFAEEYq3ANTXDfJTl78l5f%2FyusF6PS%2BSfHd7qq7D%2Ff0V1vT8t3hbuqrXYRoL99DUxDUS%2FTLkrS6ae%2Fitq6KVz%2BI92mWr1GH0D9PoaP%2FsbyKmB%2FGxFNJmEJbn68jcEKWXHcofgsCkaxmS56hRL9%2FtnV1sI7%2FON7kiUQkxkjSrjfhsq3oG8D%2FsBZtVFwumvxe7i5As9urfiw%2BAWkn%2BwX4WD56UhFyxHXtaincyomkhJrjJURVA8n8JLG5ocgXQO5jT7F10x0ulJih%2BoTA7oQBmpYILVQhfCjrB2i%2FyuFHzRxMNau0cMCtQJ%2B7c86zVLE8Aet2znZJiJSzoCFfVmsSevBl8xKFrAneT5c3WVia76jZhIQEAOu1kLOB9ZK5DoBwS%2F3Q0GbMxpq%2BWsJ%2FEJMSIxxf8q5jlpG3eZRSs7F8B1IoBqj%2FviM%2F6HcNqBuDkkjA5qEIBmGHfSJH6aB9nH%2Fn29oDyWIHJ9YDdxMU19CWOFUl6N7J1sAJINS9u66ICWWAovoicXrxvHBU5O7%2B7uWcddTp9uzEhUoqt6BZTVAWxLA8o64B0wAdfi9OwerkTrmt5yfTgIIVlUlWhaMKWdSPZNAZFhsf%2BCGjtpL1FirErXIlJqIaQokid5F51NmnyUrFqWxTHjD5%2BoXDBjqkAV0Uy8tifPRIj8p6I6sqxmjHl5a7QC1kO1GewHmXxnm4BT%2B4pLqO6%2Fk03xRb5GEWaRbPCbUXVzDOKWP%2FrmylMrjczcAm2QmpjqwGfxLWWH3tTuMkcP5R%2F9MTrm7c2DxEX3C2yHAuP12HH13tXaqg%2FoFIrRvvijw6YOIB0b2%2BfB5DkJW1YTtTSX64xjzDt4MB8M7bq1Km2TYECYv%2FfqbPCSIxPN0f&X-Amz-Signature=417ba1d4e94d925a2a8c6c2ae886005b67b1c6320c4c8a8b12a27c445c5ccf29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
