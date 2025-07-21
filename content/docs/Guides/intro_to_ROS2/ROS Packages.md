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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=c411bcbd20066a57400bdb50828ab204ab8fc865dd95b69dfe7c06b0728e1906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=253c9e93ff2a1aefedfdae0081f5cbc33ef18d6582f166abebbfc730ffe27aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=bdce1b36f5eb49d5eb05c72d3addb925309d9e40e42218ced56270602ba15060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=e2127d63e1ea70c2e2e1b9d1302e21771c041f02fbff4bb8df122fa921dbd49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=0b546d8bb30e4df1d7e92e8866ce6316ccc20e14adf072b94b2cbd2a3359108b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=66e828e7d5b8eee143243d6692f35d17937c06ea40bbf68197d49c0a3be97d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYELZO4D%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHG369Jp5Elt881EjmQ6X4Q%2BfJmRvNhvEwFH6oucq2L8AiEAyT056P5QeLBfJ1oDj8tfA%2BEYvy%2FPm9vuO1pjXw4cnBAqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BMJIEjdK3rMAJEXCrcA9Zup1ITXWa7e27yZFNA1SvuYJFP6ose55D7njFbyXSsC9BwzRSyZPjFbShnTiitZkpN7lCZoPkIG386Q5I%2FERqysW7Cd4HOx9PAD3kxkGEbtBNSC%2BgzLX8zY%2BGtEkObgYl7nT%2FNsRAzExQ0XayUYEz85TpKcCxn5ewIL3jMcERvK1aMlPGIKVI9zRoDUQaa6uchGbfTBzXSroHWlK0EKdEN2m6hUqt%2FI4eauOUEs%2B32m%2B4dFnPmIdiY7IcwkSh7wCj6G3xf2vYb13wL4%2FfPwt%2B962UcN1qexJiyKY9HbYwCIxNaUcrqCtHUiebqwcFIYOFhi%2F%2FJE9tNFGaTN0FdxTpZ1WavwQLvQKMXkVZqL2FhogIWM0wiaBVSI92SasN%2BwxnPH0SSkCp6g6aqQ0ikoXZ6%2FwSw0iSDZXVUnnJ218B%2Ffj2k7fu9FkZN4s4BRqhe6GHuq5HyNwpQZze2tCRfvutGtaiRnWh009PALC1xS4v1c11HzLPirZ%2BdjYQFRV7iTvqDGbrIexo9rmLjS9YqIza9IsRLqG7%2BGLBzttIXu9MMYkpwCdqnc09%2BTUwY%2FV8HnzYHZcxKDt5GoTTvT0Cl3%2B0rHsPUkVC7w%2B0VKJehTHYg2MpyFi1C3bEn5KjkMJ%2FU%2BMMGOqUBDy1S5zYvSxeQDzkMzYq%2FuFL4tNwdD4PO9b8wTOGwR54s%2BnkSXVhLZrSF4EfKw9j9zQACiy9%2FrLiRspQCZw0mdnaqqv1RYJX3k1pVPdrFX%2FvpeMCVI%2FVmQqdWk216UIqHSdenGWB5nqw7Qrqvjle3lg%2FgoI0dRwhifvTujrozjEUCNtP2CdA8l6WXBHe%2FPyxAB1OtJtqA5WRR5FuiCyQt6gi5jhlU&X-Amz-Signature=62391eeba7f8d53db41ab5ff677f5abda0db68bde2cf953afe75e7f165245ef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
