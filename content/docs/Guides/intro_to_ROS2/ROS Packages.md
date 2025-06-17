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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=585261e0a59001bbd153c5ac7f4e3f8de9f0d19a4bf040a4436da36683f97990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=bb08c2ec6bc8a19f382886e8e9da1c62d0c05c6555f88677698e4d1ccd500d66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=093f910ae27f27c2c068101de57041b315a38c23ad66c75d6895c18568e0ad47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=66414173fef69a4ec1c49698a720bd88aafab856372dffd53d837908f4ab261c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=15a86647150e217a4cafbe42df5b91674896429f521dfeb006571003e70fa21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=fdd914e339048d27a85839edf6d726751877a2a1d8d49250c9c2dc3f2aae6f14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVPIKCX%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVDF7ndl6%2BIo20x7eOhB2oeMfAG2kz%2FhKRpGEvBTsOjgIgMYBtwWogEF7ews0jVRlTOdMiaBqVWuXgDi7ARW6IBAAq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLoIrNiRRBwnYcHorCrcA8jhUHbgWuti5cHAD7aXAy3DTz6pSGkPQEKig4SWebMllpIWdOes0%2FMB7EKwCBC3q2T3Mk5m6CsiQNOSErRdY6fRfsBMTh7m7g6bjy2INcnYvz2nt4Uu9drj6ULXC7WpbN1xGNMwzzVka%2F5czDAji1pzTyPr5mkmlQe72m5wnXwYLcGuZcRpC5xkaPkqPSKA0uWnQL4u2BEZEVsgve2HjmI9ynjqdYdCTAEpZeeulEIz6n4YpsNlubDQIvEMfMAf%2FUPJ3FHedRHXVI4LRHORtudKuyH8OzPraWyLJWUeG9W35M8%2FzvqyTcq81tNZ7CsIVwCUCCHUh3MRmtokTDTMyN%2FiBEU3ACQ1DnINUGNV9Stsm3G0%2BV2GPkJhhWujJEDFQHPxDUB1Y8pEgzIFMG%2BY8sxq7Qupz6AWGt17BoXUmbfUv6CPJ%2Bhm4%2FKm%2Fz6JM6bsRZxLpkyvz5UCmxXFJkoxnK%2FnJzsZYZwvPes76O%2FnZZG1VT5PKrWW17CMy5uHZM7Prhoe61OjlGRzc%2BjwR7K09x1UD8zTRtFpEoZ6RYdbVaKNjsOkIshXZBt87D41fnNc%2FVDXJ4kBJoi6V2tTDHm96A7HEa2v0E6rZ0afcsHggrmgM5q4QCLVc04lytQJMKzuxMIGOqUBlso06DBGmAODaONYXVEIccqwcnG9XF4Ob0tv14vXdVEi8D3H0hR%2BIdNUZ%2FhbJPR9LUEXHXV5HcsZll8yJ6BSfWxinPnN5fVfJh0AxFwAgUCpKFtXItfwdam3BW%2BU1mcTwzq90KN%2Fn%2F5WIpUTepptKjGWWCwdG%2BQ3G1dNT0m%2BXPIFllajphIjhRoMaYDl%2FnIaAQZfleuiDEoAmN%2BFz%2F%2BPP30U1bvR&X-Amz-Signature=80998d31f1e5b35bd9ca80eb76bbd2003f2f11c4a6ee525906bf7782d93d3f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
