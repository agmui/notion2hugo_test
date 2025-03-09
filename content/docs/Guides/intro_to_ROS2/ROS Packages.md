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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=e74d791b793411b0d5e6c104e514ef811f2ed1c70ecee61ce90b28a196facd05&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=20d920b68938650b7b885beb6552737df01024e7659ff6f100e63f1f61a238b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=f438065e4364ec68929e3383422273525c14d1eecdc868971b190b76c10f02c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=9c86b8a6b568e06764e402b860ffe84267021c0c42b73771796541ba5b2e4c00&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=27875990924756316a003acd92e20ad40ef1770dc289095cac16773929f95662&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=7307b93f3848fd6868da816877b6ebb0e8740b6710a8a95b5ce3c30f2824df11&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7J7Q7NT%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T110142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQC%2BcTv8iUV5jIXGRSBCJN40lBini8uMOFfFexjj3Y8oAgIhAMZWgBzBLfIErrfBVSmtXV89L3JQs40VrwY5xyS1jg8nKv8DCHQQABoMNjM3NDIzMTgzODA1Igx0djYc80E6hDRZfrUq3ANejJq8cq3NO5isnLmurW5bzxEgC29MoAIwM4Dm8WTmU4xubEzGNH1k0a2ePQeNG3jSJ0P6DcaPT3VI4ZpnC2OYq1F8DdjqXj8jvlwqj%2B2snDT1x9QJrpBg%2FT88HaVMQhgqXDUxtpEgDoQ9uUWP2f7vKoE0EM9369PQJKIia9BYnoS7hQr%2BeWeu77N8H9%2FpuxsEXgyxxQofeZjta0eEtu830BwH1h8xATD0E%2FtvX9DTPSl0b8zfa9LukorPCj9r3RweZVfldET%2FJg%2BoWCCBvzzicGgKbcLslfCiYKqjZcoeS%2FStlGXkwpwq1HgEHn%2BcpQRDnE5Yex6e%2BpmNdZsWqZOeQpWVqv8xk24xf3ncjTof5SObIER14LMjdDCiGBTahSUoAN8JNf7hPyiC4%2BNdXE7S1zC2XGD3S4Q6zvdLlB2p%2BM3lTonZGWNl7fcS51rO2V9opxCRBh0V2INH2WyHUi%2FfLftPhib49zfNRWEoFDKq32YaI2m3i4xKRqmsPRnFuBFYf2chbKR3El7inZr5dAv%2FHEqWerzMMdnbJkDBdToi70%2F8MfaH75w0UFmgfDDVGwSH%2FF9syH%2BUuaOiucnI1nONcuF7jV4QMLvq2em53APPI4encNsbGpazsF5OEjDQ37W%2BBjqkAc3xOAePbsNdNjqXR1097xUJ0FJ2OlPo50eLqcWvKhcxN6weQng7e3HAtX560bS3CasismjFHwpyw8OeDFZIY8IpOemnccfsxQcw3wahp5C%2BLaFDYxGnNMgnN4uIjyDTW%2BjZZ%2FSp7JqqONiMr4H0PsxkIQkDxsZfNwS4%2FlgwbcVODkguLv76PTPi2wBSTQ4wg006vMaZyql3AcNNwzvObTA9bYQM&X-Amz-Signature=fa83d1061677e2cebb77da997e1b35df3e3670075375e502a193ccc552f0b03c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
