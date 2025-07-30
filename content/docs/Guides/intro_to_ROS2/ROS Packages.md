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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=7edeee7e638cda932d006320ff1125c130953440e122b5e03b1adf7dfde38015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=ae0c23199c47e2fe6efc2dfe5d9b88e822e44297fea26b6e812a7a71f36774ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=a498ddf7d975d7a1c342f9a5f1f9de6f2435caffea69711fe22bac75d6a10916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=0e4e0ab7895f40e8e3217010c14dbcdad9982e3a89b8ddbf36ddc44c88b7a875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=8d929b9a5bacd33f517137114b5c0997d583f897d72b647eb08525173c70fae1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=35289edd534feb499c287570a2902917107807ab3c595682e92ed2331c0dbf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHLQDPJX%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBKz4zhX7au88FpltWFjYjOggXXwcPcIzLHz%2BeL7A%2BNlAiB1KKYBx9lp5tBqHSOA7N1qA2eAQaPhWuq9XTi32BRihyqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMs9zvmL3pBiTJW8t4KtwDhnu6vmLdKRn%2Fuuz3IIxn%2BE7LOW6jZNBL%2B%2BNRObFk8I220gG0NL0ti0dzz8oI5gRzBUQhk2c%2FY%2FeqjArfy0pHrMoV5jaqzGCh06u7EJ9670Kq14tBcc2iUjvFBqp%2BDxsNOOqVtGMyHIPbiRfo4yTgC%2B9kq4FIGix77QirVZUMV5wEiFqrzJVlV6ERsriHOMLrueyLpZmxHxtzH6i%2FUzeUZpyVSeqIa0XMoVQT%2BcPXpUrfYj8xexn8cSFYBBAeiEzGTsCFrIWVq49Q8jbl%2F5Wc7uYRYMEk2YLHVaJqYAOtch6vCWd1i6W6qZ5%2FJj%2FWz80xyxQWlqkVgLCZt9KkyDVJ5uCpHXcSiPoEMULQQ2nV%2F1H%2FhXF%2BygERcFifD9UIZQ3dZTCn5V%2FHNvJgF51Ka06XQR7Y0cDsHR2dRHXPjhxdJ4TitVh%2FiJz0%2BiDIK5RCEPtbzVNaaq3XDGtytLv90pBk0hqVqQcgGOu2Z2MWlmbj%2F2aZVAYl5HH%2BpnLe5drOtT83KH0gfXvzDN9mzWkwYDnjPvCJQKVhl98XcBzBFXivu8PYZVLmG8WJTN1ZpN3KW5DsGrFZFWPk%2FLj%2BKwp98ANJsFr8oP2mtUShamy72d48WggRM1DEV3fspmPloCww04ynxAY6pgFwu5UyrIYXdU2B%2FJRG55paPoyytNzOWr5Jsh8XzXCmz73ZpsFuQ%2FN3AimcDJtToDeuKSSPlGN8RV6Djckq%2BCgtwccSGwA3ptYtj7hl3oT83oCmk%2BIbD5r0uOSpnd6U9Z5eP9%2F%2FRZdDxYY%2BE3b1HzQkrNrLGbrkYHuzuOiycVuPVcpZEVOO7YM3GrkqF8dK81LRF6m0ksF4vgNJAUx0RjScIwB7BoF2&X-Amz-Signature=8e7f5bc835c5cc1b02b16ae8235c2e27092a19721f59e5e059be2c61a3ee4003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
