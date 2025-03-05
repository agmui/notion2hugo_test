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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=ed00fd979a997d777aa7c5014f3e44a1f99ef99755354bc1511cf9d62d0b80e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=9109719caa75ce8c4bb2d5736b5accebc3cedd5d5bb1dc645651e29c600ab7ef&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=457b99a611b151ac5393b9819c07faf9df827af10037f89ae6dd4cc4277c5ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=3b2974e4d9c4483139bbbf7b6b142df47f7c20bd239311aff7440f056b023fff&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=12be7237ccf9b67e09518dad15879f1df9d7d8725282c1f2c607e0c64c9c1c24&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=4f1492cc4ec276ea259d5c3e992c0e3f28ed0b96d1b94bb0c5da00ef1e72822d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUWOCOOG%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQColcyB2rOXZBXJdfQjMhRzoAzohlAjOd%2FdfmRnp0ryLwIhAOt3OLlFwD82hTpYDvXFSlxKj0Vel3MeBANIKqr%2FMeAlKv8DCBAQABoMNjM3NDIzMTgzODA1IgxP5fx5ETt%2BAECQ6T8q3AMInyONWSm6GiiLF0CUB6u7nuBzSJ1voI6vYtEfg1bwvA6rHc8gaSCgDCAfB2ns%2FZiJbhrnwFT5919%2F7%2BGk0n4MjulEohaTntj56uYUwVvkM8MUts9HDumdRuGPEYz2xakNkh8TkrZeCVl%2BRWcHWocCPM7KEEqPpnde2VXcy94qq0GAaRJsJd2YDWxuhaslnbFa9XdYWun3thx%2BS21wxjE%2ByiCC341VvLORmmMlygmmfRqxvldobmRR35rZcHWvFrSEsnAj%2B8e30aO%2FwNXwevUcSz0dS5Uvfqge4YAcb0qubzpdhyAVra%2Fc4xQ%2B8ELG4R5C3VI%2BSpX1Tx10NuazX6TTR6ZiNPRrF15Uth4iAaONaxvIr%2FAuMssBtbvJKVNuTLC9xDsi84x4ZyUD7MEi1IUShM3nS7loLGxDqZVRY%2FxxJqTs6%2BG2A%2Fc0DVKIcrF1SGTAfd2Sk%2Bz5uY83knRTflnCpM0Vuq8JXLIWPsivoP9ve8P8E7iq7KVE5pWCTl0ld7ZSXTMytHeNMnseYcQxhvmCpBenL9wl%2FSap3%2BmYUScrkxV79YdcBMLtG6uB1BlUVVrM3Ettr4807qIyN0yPRy6gy%2FDoxFRwS6cuaun3EKc77wTyXurFek2gmmkdoTCM6p%2B%2BBjqkAbC%2FmS4wMYzBJucWq%2Bq9DU4WLK1xaHZ7ZIg6z3BdnRlsYuwAUrN8mnFhElNZnE0Ie7VlNdkKPpaM2H%2FfHrP70OcmPrQPN%2Byudpgqa6J7DxjVgehRXGx%2B4z6Xfj7DiUgn4thP4r0DEKCx9mq8ENzimeEaniAG4Gfn6MP%2FVpgZE%2FIS2KWgTo8eLQYm7Pcsgrp%2BUiQy9u5jKl0DgBnODRMU32O4%2BEQG&X-Amz-Signature=406c6057054a8e895cfc9ce0304b8dc5c46a766122a43ee82bb9a99ae14cc89d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
