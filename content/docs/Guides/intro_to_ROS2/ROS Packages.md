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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=3735ed38882ecc5c19cffed4baa59b32774e98f94681d3cebee504311fcb3d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=013ff5dd3b2c87aab288b7ebb42d02269d44ef22e87c2b5706f8cb09d05c8b72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=7521ceae16ed81fba45126a8ac541c2c2d3478bc02f10a73fecdf67199356c65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=701ea868ac9edeec9f9bf18b4d652a0c51e488f88e82f2660f104d3df1fe78f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=e870b3956526e58ce8b4c7d5dd2917ad0dac473d6c0a01c9326dd4eb3c90644e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=1a67921fca1c3d3f5d764c38a568b2f858d572dc7f1ab0b8546e190a68eb9608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6SKWZ5P%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T121725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQD3Di5aklQL6i%2FZ6IJCV%2FQ1%2BOn1pT8lUpsYLtMPWthTLwIgIdrOga2XCW3bJiuGje8xoGyZV9jiHisFuvZ0OH4n3gIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDOewChOFw3gt0hD9dSrcAzBAmtBmbf%2BwC0%2BHNNNC7JFhqUiguJ8yMOGNCrMN7L3v9t0kRfWcuZtdPdSCF4H3JYVCh4Ofu9X6TRcKjfJFCyjpoqpVq3wFttuL9xPcrJX7q%2B%2B9zCKO5FL3pXa7d0iKfUJAwXD1Xf6euB81JwVYeo3SEm5JCHxHqMp0bu0rn3IwzN%2FpFekBynlq0%2F1Pw2zoP57VWHMAKwfpGsYQXf4MTDftALkkw2acmu0cZKvvqMrgeAQ7pxoZNTtWa%2BcmgNt7AKU1w77l3jbklt3j8X1bgk6b7Fj%2Fzz16Oc3ac5mDTUqzN2Fi%2FF%2BxVEWOGAEuqO2%2FJjmKrXTkKYtDLXoRXqYo0JCN3tP0GfNscgq7bWcNQv0UTw6lSTN0%2Bfunl9CrdHec8TtnT3PndHYvuNNirRCrA129AwK1nbk0zvIYEMj%2FGSjszF0qJ5zd1Z%2FTd3WFsAUdAzryLNoYlq%2BnR0Lx5XGtKgX1%2FA7aKtjX%2BFPwHdoTYMBa%2BuopyZlf3WoMMRDrcQgqW8EFspqEPm3lT2rHc9hN%2FoCvcv3xs6s2ik37KMkHZ3qnwccG8Z8T1K3MYZ7RfxkUPA8cK7HolBgwTy98lHSwGXH0jUblkrtf5w1jLg%2FrblNdPv187hzhgkVkwsZuMNvc08MGOqUBGw0QZZeiAihPU1UYhEvHcaZQUd6i6KtdrS2vz%2FM4b2Uk5ZfoVbZg3gPBq25F2QhuZ0nXwQgebQgQ2vtPJ6uFfiEwn0hNY9Maic48InlSNUldoBpvP7mdQ57U5Jblyg2fuYVbSOcwCkYMR7Q9gjh4JxiclW9rPS5zfPOn02rIgblfVycYsJae5yPEMy9XsOogZFdIb8BIBXYYz4tFW2OUJQngOrbV&X-Amz-Signature=c6a92da2b0300927216c22b9b4621e95cdbec039cd7cc9824d1a78d51ae54d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
