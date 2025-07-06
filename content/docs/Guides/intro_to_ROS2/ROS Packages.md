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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=ba8a7e2413b178d8e0dd7839a46aa7f7ffd40565a655b374779c2c4af2154b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=20f10e19e29ca5ef8927f85973a285b6af8561668be961af57c1bbe0911b7f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=b9f836ceeb8ce56e203b63bd534f2584768989c65829598926c6cf3a4ed014e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=a8277011c392a0b26fd8ebe14efa3e819e0ba6181c951fa04080cf29d2e3733a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=8b54db70732a793d0bd194b4c70f3e1cbbf7c10466fe54dbc8007b9afbd6e00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=4fc03668abe3da37a13c33b9db3ced1c4b680b07ec4d52fce5c14b7925927228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHMF2BK%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIGmDUPl8ktyU9OaNvGoN1DCGBQ%2FgnOjmJvjrNcDGcaFdAiEA0Z%2BPjxEGO3REH2Qf1JYky83YzP4eAsh4dv9aCpxGqXMq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDJSxxQOP%2BLkOD8RqHCrcA11VSnNOXFORjxEbAEmzWecAivPErsU2JILhXMjIHRdAzaUEXb473bZuFxqyYmZrzn4dEYESkVzHqHVH%2F5GKPo5%2B8ECIw2fH%2FQXv4YJF2h6xh1XlOQeUoePR%2F0WR%2FUYNAjQK8d49%2BAz0%2BvPZ00cg3p1D2%2FYO3LvJ6PZXGd2PofngnPoUWbeY%2BCbi38SX%2B2ZaV8cQhJpcRi4kl%2F6gBhFgTEQ%2FiTOLbv8UlYVY9ZRYS4TZBChkZ8cysHtFFHNTEZsasZbHDMwW4diJ2qBYhEo0zgYe%2BDks5W1HG6r1e6uO%2Bt3oPe8gjTlMNM3PO8G804us%2Bkm9Jdcw6A7bK017aCnuAOJDKJh3Isc4p7M5r4Y9y0OGD8qK4wrjf6gZSteC4n8uNYR7deZrBp7%2FKzHlKuY7PurEKHzLPSX7wd5LKQkxm6iCIDjjpL3K0NveWleZiPED65%2BEw5vocMxEZyD%2FzmA6BbfK0FyLmGYdvcIe7ohkDQEtXh1QeZaBlm4eOCTz1i2HdBkuo5wLfm7S3YdXWTLkbLKf5MPBdp%2FZWICt%2FNQd4717Mwvzw4XUMjIYqCPitmGFLqe%2B3XTAxa7mCwlR0zpN1hQcCCTVmifAqW%2FFOPVFfUJxg3EooQY2%2FsSZ1WgeMIPpqsMGOqUB8LcbQiNkQl3ryZqbOGu6%2FuC4vzk0JH0gD%2BDinrAwrmzUYCfcnRXuIWk%2BT5bLNG2%2F4QkQ6AKFLMOfFLkrj%2FDQ4SQoPXAgveTpwKUmUcYtinInAMNGntJs3AMNNDESKhH5apl1V60aIcj%2F0B10RBNpxnRqL%2BCV4GURJ7OtAqvWQXtE2cE223mLhgiKXwECQs2RWPxtxJhaEDSxAOuiqi2yeXEMu%2BWg&X-Amz-Signature=7f552b91761dd6ee9153aa47a27f5d32071c73d386a873ee07133977995134a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
