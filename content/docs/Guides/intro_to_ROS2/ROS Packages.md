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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=5db9b1ad92529dc13c2213f879038c75bd9474e5718e14c635258ab1b0265b39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=64bfd3a701c26f2d0286f37fb30555c5d63c12d91164720ce34aaea71c0f3bca&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=f28fd46e3e693ded56989b0f670ecb92cdb27f0c73207a07b617e86a814eb7f4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=d8fa73870851ace4873a07ef9e9d733fb6e978fa0b08b60f33e95de18dfe0905&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=3da43ab631343496dc3ca0c88bbc37d92e433a0287699341957cca678e8bb9fc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=cb52c31be067c952cf074804e0029b41506f92225eb57b7d84d9619633cfff6a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKMH2TXX%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T131551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvTFTV2keUJnkfW5SMeb8c98MTa8YaPv3F78J1wkNCUQIgF267GWJcc4ua2V1UyKBFGvYexcafrX529AjgIpiFDc8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPEpzeRqrXPOJwxIlircAztH6sUIoMGuThDCPHk1jm78vXXDyc6GWtvfk2oU8M078RSlg12Wh14h2XacXHm7fZjrMvZQUiNaO1XBcGP0Qy%2Fxn%2FSq5SJeWh91zKQOdd%2FgT99%2FBuQflTZsK3h9t%2FCppW%2BQBSQeAQOR8M9GkhgDjcjdQva09epOYbL6Xt0PXvPN1boKFvctBablpJrjQ4T7AQ0%2FMNVgphbnNKrXVeC5TBlWBV4Y57n7ux8xzEkxJtQ%2FPlsD1vAUkr%2F5oAVpoKl8exAyrgWWUk21AQ1T6XirFOTbJ55zL55r3QkJG%2FjuultZiDSFGKH1Ip9vOB9pbJgDNq02cArnJSF1ZVHjOFxVcGJYjITItVqm7B6XLSt%2FtR3I8mDLh%2B%2Bfh0H8mrqYJSAYI5qcUmePEp6AShAlxb2VrDP5dWyHROAHPI5ht6Mf0esn%2Bv3%2BPkS4G6rxdt%2FXhqR3k4vZ5A6Z%2BFvx2Cf0VDSjEdiXLUKru6KPvpWbj05h8XAdYuH7X0TYFV2K4sgpjkW1UvQ0sU3Bv0%2FB0rZ%2BPnW5IvOYohf81FjCN1H2vWi6MVbaII0IlqCZf8cqfUZIWJSygcoA1%2BhDQs0tssX8sBoysdb%2BLA%2B0oDbMxqaRTaur49c60gtKgwMsfM0zeeBhMIXl4b0GOqUBFrZM5cHhoqSDo9cLpqjSC8j%2BvbHLZnmVM2yRd%2FCCamN93dbrQ62TJzAlJge27dfRbP%2BMHtpt0kZ%2Fif4b%2FfHuNsNOmbBNxp4cUZSJ2PRpWdRG%2BJf61rMRi9OAsQQSRMYF7K1eltmHknsfSUxyxphfmOjs2culkpGZFSL0464LJjvzUBIqxlUuYDsPKw74osHAdTQul5blEoAafucG3P5Rmec8vvzI&X-Amz-Signature=de8895cca0abcae256aa95f63afe124d7d1114cbb7c5d6467259a77876bcd130&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
