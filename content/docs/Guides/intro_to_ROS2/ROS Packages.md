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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=eb9b01875ea67f70ed79f5656052f460f9aeef6987c4a97f6c21d04c831edaf0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=21a2b43aaa77a5d49f77e9330f539d3e2daa38790c45d428cee16556436d235a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=d56b12b193ddb21295c91970fc1dfa378dff151b2fea88e6de7d6932875f64c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=b1c122fe5b837bc6c4d80cf9f6835b3d5d3dda857fb06fd471aa2b787c8ae1a1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=db128646e10939ce5142dedd8b400ab65c2cf4f542a349c324addc4c2b153043&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=e5acad146aad4de6f6b4bcd25acd42f6db1599451a84fa26e1ad75056b6d003b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONXXE46%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQClqBDdPtKFYHE7M9c2JNG5V1TZFR57Ajtg5yNBiwZwDgIgExQn5UxLgh8fNWYLi34GHDCAvmsJbaBe%2FOx%2By47pKSwqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCHMO8hiWf1eNDNtHSrcA0B%2FUvbLjkcVvCb50GhHEMINBsEWVN4%2B5BTGcT%2Fs1gCvv5zUe6Rn3ynMG9kVIfdFq6EQcH0XITLl%2F%2BbqFmO6JpkZDTWguMqbffdAg1Bv1v4uC2rvo93BU4TMDXsl9nIqd1v3QFJEzO36E9aX8nXoLpQRTRfvgjiO0x1SOBlZrLObVUj%2BK%2Fr2dPA%2BGjRBkih0mrNs9M8cHGEP%2BGWPd9nA3Ru0xENBkdENcVifufrUX5VN%2Br%2BrbKMuhLTr%2BH%2FMNh8JUAyEpChzeDn24J8kukCEhtodNmTTyeVa%2BWkOIB4Bnw8WLXTJ2%2Fy7TNVyC7ylLyAg7R2G3FZNbdtPRyBpI0wJ8vROKCTINSQcDxTCy15eb72AEWhjND%2BZB6W5cU2ofqz6wZSk0GqRCnoScxKyLjZgPFyRB007htJSdH0MO3Q9%2BMdcohrIF3eNtq3%2BlNpzGCintIQO73q%2BYZQqCjstvQ6OHeR0gvMPudJpKJE4NKFklj583SsNwiY1pm0jMqhDYNuz0Vf2zvIOdflPXSn%2FcZ7wRWHBJdXYwiYywJfa7qfvhdQ%2FnAvvEhD3uoAAuI62o%2BNhYBK8XJzQICyuFnCaFQyxTE%2BDllFlm3TZ6triMAXlnDHUiayeb6MtX9pWI8HGMPq7ucEGOqUBsddkAuT2TD%2FXKcDQ6PYAuIJLbd29%2BXzftycFocGEuJg8pjNoYIhFIJOVfRXEAIE%2Ba49O2G6Hzk1Wzr1q0K4VeXH7zDrEYbMQnP6Buy3Afw7xOS79vL7vaeJU59%2BNd5awXDrUa9%2B2VAsTbKh2VXbF8FFf%2B6Zl%2Bxk4Oaulo5C8Dn%2BSephXMnSpzHu1YyhuQvVbCyUkMNBeX6%2FsSRiQQYpWJ6CSVpXr&X-Amz-Signature=44ad3498bcaf52e10072a1dd4bda3134256326fd8f899ed146e7e18b4d5d1ff1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
