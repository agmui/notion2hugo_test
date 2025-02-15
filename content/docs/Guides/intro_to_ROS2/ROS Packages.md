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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=ba51ce2709b0eaee9f4f83c1f2f5fce045a9efc274d387287d2930ff9367702d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=452b7c731ba96ad892e352db7cfbf4a4e4570634632c351da0ddf9f85dd7f0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=25dc6d7ae8a69cc2bcfaf7f875bf6dec9586deb12b98e38c391f3763adf6593a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=3dbe0e2cf27863ebf9be232109340105d7fe661d897b68f6e3b319b7ef3df65c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=f9509791970b93d9379fd317dd99a6c60525a2512adf5af0725e233cbc9b2c00&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=2c30dec2a447356179e6ec83675aeb1a85b08353e9cb89432b91abcea741f1f0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MWUEMQV%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T040858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQCJW5UOy26BCr6y5vLTLL21MlICsIhYzXWboE5AFaYSPAIgJvz6JlxxL8q24pr7b1GtxxN5QQM4DpecWiBUvkSRiawq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJ7fqz9idby7e%2FiCaSrcA7QWlAjholpjoryGHhgYFgpNm4WSFsjmyvXz374bQCYGJ9CutbtIhQM5ke7am6AQx8%2B7dPn8rBa6SrkGJOBN9H1djuxDxXJkvvLkHefQKjTGXVPLemeWPiKJUGxZCl4lc4ARZAUIQmxwe%2BpYHcBobISZMo9m%2F%2FEiW4pV1Zwc3DMEogSlMmIx6iHIgU%2FX3bmO44rm%2F3%2Bd7KtTz%2BBi0p5c3Eh5JpxOfsjk29Dr0m16ufJfmjnExPmoHweMDp3mMNiiXKFfbLLDvwwrKAvJD65MMxqsPhlXCHDWoTTxsIvGGw7gbhzhWnkWjosEv5AkLiFM8b6SVAL0V383G5hujdi7V%2F9j2EJybv6qbknv11PytiJO%2B6uJ86%2FdQsbe4yg4sxfY7vwb5%2F6H8ZM%2FP1sfVmwJQjHLdcSB1aWDVn6t7ecIsDKH94Mju8da2G69ytIxXvyzXzRYtKdE8e3IpTxwh2XAeMuG5D%2FVwqpL2L6lvCBIB%2B%2BViT5GiooFiPAjmHZnl5KMfNkDIxsq1IE4Zw9codiub3TxfCDmt8PG9zoZqdsAT5JTmBUPNy8BQfrc3TJNl24%2FwjxxibxRJyUKQOgVloHqWYhhDNLW5AKbkTHOndDlTvp3nYL8ncZdAayvujmTMJq0v70GOqUB8%2FDarzeOi7GAiwYxYPezxwOrpPf14bQVrnsbIej%2FwjImw%2BUa%2BE%2BGnsG2dKsTCLRd1TS%2FvDYSzhX2K6xfKZs4Rvt8jec9aHznqhGWC%2BOg8M4bX5U14K1vZrS46a5oZLwldObU0OPjPLhyp%2Fnhq43Jla90cCkDCiqa4%2Bj1jc1QjUFYOhDIZBL9fkfjdwCn5g6PmL2d5sM8DXtPEM1Zx7vMfBNKA1Mt&X-Amz-Signature=4f4a5570eb62457334cdd174a5fa3c83a4a074e5da1cffb998c922c1dbcc30d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
