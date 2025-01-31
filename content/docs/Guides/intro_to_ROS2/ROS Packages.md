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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=4c8883da99be80f033e66537aaef336cfdce0f00df2f32f4c7567f5eb277acd4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=8f69216673945bd611e880262e219fe8d0c2ffbf2d52bc215ea46c467e9ef7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=e481eb8ca358a0987bfb6ae6c5d2c0f3538710d8f7aacf5e4b7cb47fa4f4ffbb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=d16eb6ef5e43fbac644e41c8e3146d385d72a4d69789410488d1945d3275b0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=234b4b2a663bb1b38146f7580fce8e395f7ad7077ad3e59f7ef4ae8a960f05da&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=99bc11ceb624b0b601ea8e0c5401be99101e147c40387ea3fd65bb2d41e6d285&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TTMYITU%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T190118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGKBpbVVdFR8ObZFYh5KcJ%2BXGhA34ExM1uSMmsBFSCFIAiB5s7J2qoAt9FE6fybdjElCc%2Be9loRVXzc7gfWovWpalCqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAYuYq%2FEx97I1DET1KtwDksqBL123%2BFjTbc5mw%2FzsNewWLJfezl4%2BEwbIjYYvF%2BAXOdBbUerNJ2ubmmpXGGWiDil5NZjfvbafCRTxSS%2BzLgyxlhGN7Udsr4aDSu%2B7hhsUFX%2F183aRmAHpnKEL8CRNbYUI3DWzadAIwwHeEW6e6puO8c2EO4sZBhzz50PBJddipackDElA3IKx7phCfaRI7191JKCdTNnxf3m1ixD18LZKOepX9Wm8nQmC3O0hpwwAJwjmrSFwyESvwYgxNdRMkPV29%2FXgDGaMU6X7FyMvToP3JVox9onRBqzv%2BRHxp4nJUcy3z0l6vqGgUD7S1W0N8dASn3nnaC5Mwq3L3Eij7AliEZDxhbO1TP6W9fWc8m30Q2ujm7yMlDHMAVygO9wXfiBw3SLZZDqlOon5mRwmLwcowz9ATu4Zouhe2734dVRUhgerGvVdKttdr2T6Y6TdYemEoE7RLmemUdqEzVhba3b5xsCMt4X%2FunqKakPY2RpMLQkxXkXgXoFrq3wb1vUZjkyZbzzbX1NNx7f3or21QJOco19PfctbajrlnY%2FLXEjq2XOvA7FtCFN6GtDbyX%2Ff1QLeyKqslhj02bMj%2Bq1GmHSnAeyQJFkovhPNbMvHoa9Z3s%2BCiWpEY1TTJNowyKX0vAY6pgFpNSktQ75cHbw1%2FRy2BLMLm9VV4d%2FEAVwmbJb9caa4%2FlTsLQNQVS5XpZUQojx2OcBe%2F9%2BRkzl7AXAwWgA3kYFTxaVrf%2B5JINUzxiShv87Er%2BzrZ2aSmQLTNatnA1CYgg5HYXlhCS9R3M%2B2tImne4x3SQqkbuuffnMDj7H6Dzqz4icW%2BRCoMjFn854fzNEr2IrwWuf3CSbkC%2FbjZ58IGPpo6vQgAqWE&X-Amz-Signature=981f4c40b9e945c687da862f3c79e252e81fdff33b455c8f947aa851705850b0&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
