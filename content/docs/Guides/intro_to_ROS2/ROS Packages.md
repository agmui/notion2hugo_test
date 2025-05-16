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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=a62895ab8bb2502cd316ac941d3b183ae95755999b48f750b1e88ade2662f43a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=1cfa479cd004552d523aed8c82ad881c68d73d01f2e6fb7cc4db844dd44faa63&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=5a418bc041d7e9005a9aac0f034bdcca6977284123ef8296eac6ab5276836c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=8f1accbd0072754441b264f03da4ba3b31c6cd54bf6f15f12ea2a467c0a9833b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=07bcfc2fe7bb05ea920a7173fb427f7f0065dec107ddc121e27a973be5746cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=588f83d893442706033caf9ce8995071ed0c1f37094d3d7106a2573a8de8505b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4TQTMY3%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEzPc0%2B1JdphfkHCOGwbcpT6o7SpU6Pe7GtkNiHoqBl6AiB3DTred48QS18OBG7n6Xm%2ByMl8WBEGT6fqYUuFbF8iACr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMp%2FOmyhz6fdQe6B2CKtwDwdALqdQliSf8w5fqjodSrxaD7%2FNbTFYqAxd%2F%2B720WmzX7DDnzw4AIDHXTuuZYuwziYJF23WOPnPXEzVFWL9KD1LYuiB85YnlfjUzRC5YVVGl3JMZSqOA5LPVk9zlYO8ppnGkOD9sEA2EQPsS0mYUpNIsJ5Skfa6%2BWWRXhk1uyU%2F1YAcALiUrTwrYCYW4l4God2qxC0MHjRUC%2FGc8EM5Ht%2FS%2BGIwkdjKb0aFR29JvO4I6RV%2BBaoxozciLHM5pVNT3zIFeZPjOVJPCxAdYLNpV%2F7sNF0Jq8hUslTY3RbkVbd4u9Y%2BZjSdzy7Sfy2LysUpvVmUNp%2B7rB3L77VCRYr9cnoO6pwihvNP0y2w5qq4JLzZvqfRsKyMZ%2FqPQBEBf6hSFhgoD5QFu8yp2Hw2WusxbadFKaaZhutK1oXIYfzWrySnG7hYOnu0M71BcFksWaXudmAkKfKLKgYYIye%2FIgMlZgU%2F0EdPkOZ47orDEp3CTat%2F48kkKDJ7DmFXlB%2BrEg2dMSylYClqg4R8akQjrqCH3SuVBBB1W%2F5iMOs0sK2Pq8PnRARrgsvNN4%2FJpRa7MAiwq9omkc7QjzTa8vak9u6bKlSwBmoT4DyRT04caMOLtcbxOj26vmAYE6x88OVMwtu2bwQY6pgFFv5vglLidEzYXwELuOrj3IE2krhXI8%2FmWLWpe22Qd4y0ecalKOPil51okFioa68U1eyp8QuO6kf2WtAoh2zOeYhxdoVESHe3e%2BjEXC5Fjx4swkebAxHzoCEo6S2ml9BjqhynAvQxL7OmYalriC6f7CjKQnvL1eQmZgH9k0auHKZ981FJaEuQ10H0tNwLfreP47UyRFw%2BdvEVZfL7X%2FC%2BUR82wihAH&X-Amz-Signature=afbbac1e03801d1f07c3d1bc1debcbc2367b7134324657be273cf493fc644a12&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
