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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=831da78fdb1d9056afe85f26f470ef18596304ba410440c80516276e3b5d189e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=d32b1129802e84d450362a412d2865784712de483d513fba93d6decb9287751e&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=063240f1b9c471dd07b923ad45ab457483879430b6b7a204a9c279f879fa058e&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=5daca856ce2068d745aa05ea16828bbb37034b2d0041242e2e583a3dafbe0571&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=6a84fac735728a495cf4f44a6cdca48e37ac2529d3ffc8bd6280579e0a9251fd&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=61443ed34a0ffad35a724c39e7734b1e9cd01667c6e67812aa01e117a7ef6fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF6ECEEM%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQC7%2FmzCrP%2BlxzMMZ%2FugGSjwxB%2FjX6e%2Blx0PBBcGwVKLCgIhAKQDky18rfmdT%2BkZ3g1OdghKvNM4gTmVqDFr8GNm83i5Kv8DCDEQABoMNjM3NDIzMTgzODA1IgyhjaAOopOS74SQZJkq3AMnqRfwx1BW9joZwkt7wJaw3LNZDuU%2Bmr7er8r9zNzmX7Q78gtq8h89f8M5JocTg9k61Uq6SpZQM5QexhwMBYASpj1AYdguviZwuAAJbKUtgq1fJFKdIjiVgfgZpz2skfQTdi58K9bAiaMIdb7sPDlDQSIQsbYtNBQZrdV7pk7XIgiH5NIhAXtRcFC6ZI7ozhbCBCJSr4zrx0F0wbVUbs13cUbqYftDbLFJeSvF24UYGD3yP%2Fa%2Fz4xmvBoVLctfjuH61bnPLxsQxBJW%2Bxk9fZQ4HpjxyqjJofY3DA7w0T9Gv%2FFTcLrYj8P8Xa7zyjx8Kfbtf2MNdM%2FhIu8c7otuqa3BvMzTmPE8WMCDmQ8BJPCTus0aWOwhgz7BDRLjz4B0xOvxTPEUcMcvBKmtDUn6li9%2Fq78kmY9VJKbR7qMj2BULikhsQDi3%2FUHkCP8qImW2CMnSZMHpkTW1v9ayR5kPnamvflxM%2BQbLvZkvPUTSFdIQPbt%2FLgC4%2BSfWlC76u1vmnA4FTFrxuKOQoe%2FdNtDni1yxtFDWAQG0yU7wBFBluZIBXAKXUPsfNCTrIMzAGUZvkWNtDdYcKF1DhILjl%2FVqQ9Yd8WGoqpHuZCavtXVK27F1junANN6ZXA233bZDODCU%2F8zBBjqkAaN7zPcXE7kXMt8ICDlwjtM3FSCpRQsDZxxlo3Qc%2BKmzlmkl0XOtXb%2BakBBlgt7N9xgY47AtBQRBcCprNrPPEPvSw%2BsdkZPLDnI4jp%2BP5tnKkVd5TFwkxbfQVenLoq1fsur4pbqVSnHZnbME1iwULh6yGBTrii2emREpZ5uQ%2FKOlF3c3p6DV3h8uSx1ocjgBacLt14yuJ02I2L4yX9oeDe4vtvLZ&X-Amz-Signature=91a4a6ce03377f2516a6c4a445752bef0ec9307b6f863a9b3bd4dfe05eef3a27&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
