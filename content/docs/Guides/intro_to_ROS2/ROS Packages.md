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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=719bfeafa99bb930a9f07d1df1a8180520ee937f1483e525fe1815b9688ec80b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=095992a56f048881fe431bf48d8bc285f6b8ce8008c0d330451fbcf45786231b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=36f785d4b68e6e28fc1aad7a792da6b6c2ba9a00bf92510e4673c781d2a7caae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=a641f962dba41de8d2acc2b4e90fdb6190fb1564c1622e04663d142f5368e418&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=2fad2e94f9290831e9b64805dc38c20819c0a7b5312fca4e44c56966b3357c40&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=a7d3efe7c49884b6e9fb0ce25c1f260b56864e2466c69a3e6192c6b090b7f86b&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3LLZP7W%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDACmkPpsQ7Hzw5ElC%2BygKnQ7NkgO0DqjKkmBuYJatLAgIhAI1uKZsubmmY%2FzEJ859XcN3sPPRwrheoOa3Ul5gRxUlyKv8DCGoQABoMNjM3NDIzMTgzODA1IgwoDzLaF5xZehf0Zygq3ANhA%2BBZgx%2FOvCTxM%2FF4VJdK3IKldoFAmZpYMiFhtLew7oEZgMCa5KMgyqEX%2FdyGaLgXwVUvfYmwPIqv1wEodH7CBbQ8n%2FH2A9slkHzAvOw9eKwgXvb9pBz2a0oSjBDST6vbAyyTnZUrmTXqsmoH3xJHBQzdPnXzsdnNMIVuA2r%2FhLpW9HBQ11%2BDK0oGQNlpr8vZKPVwmBgIYv3qMLNEJNhrb8NNV0eQaJO%2Ftxn%2FHr2IMokHt8WCvySowoks4FRXWmFMHiq3lTirUZ5jw3eXOggWThPpXouycfTB6AayiEhmf8mNiE%2FPTyTvVJzm%2BptfB%2FAOkZ4ISAUvcmkG1oTsACy%2Fibd6jKO%2F4W%2FXdkTPB1w3fuWv3qtLM1qGQIMkekAV2XSE2A9z8%2BWc4nhwbiLCvtpdk1kLPWsl%2BWWkCSOFjITgnmGzOj%2BmKONwHykMlL0oNFzjCyqO8afsaLb2oUl1ZtOLw%2B4VU93CT1OztbGr6uenydY%2BMJD%2BzqPUrJ8LU4QZbBpy0XNKaBXD9CfpWfMB1RUg2ObcgiwMbqqffz8lCOUJHIyxTPnp2MQdhvdKJP5G23qlcf8%2BXXfc0fFWh4C39x55efOtWdJFLtYlZRR0s%2FBMQuT2dUZ4xvWIlv3rgTCZm8q9BjqkASM85lPTUjzk6rlVL%2FioD5XZubUMDYErsl0k0eRnmHeZ7JTnSBYEhy0g%2Fuak2%2FtDSjhMHzdZoRIeTozv9mafjLaiqZcnRXjaj7hPcBLIegSH8Ks368zulJNLjicATJh%2B7Vn%2FZZrsdBNUoYCX6ycTWQy7qEzOQi7r1DS27g4tmXPXZYbeN76xuynPYIZy8T6dVIvqMmkhypn5soYxNob%2Fos6BiNBH&X-Amz-Signature=8aad4354223781eb112f8bd107a15e8e8f6f2162b058783bef95baf246822249&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
