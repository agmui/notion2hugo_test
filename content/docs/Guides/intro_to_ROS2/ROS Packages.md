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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=217e4f465a65aa602c32780e16dfbc31ed5bb5eaf557a3755c273620108de973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=5d6f3595c5fc15f78f9a0e50150513b6f8c363b6da47eccd396eacdf3ebd4ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=5a27755643e500f0af67594168b18969bf15c4f05bf8b4a8f18376c2aefe553f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=e8b0dbd0c97bd1c043474290d801c9da0199a3fb94bfab765492a203d0ca6071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=77c5df2e514ed9e15056093c2f4dae5178dec3c3e27032fb5ab2c1edf12cfd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=d6193ec3efe966c3942d9c5d1199ac1d627b91fad92b875834ab7c1836236d3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIX2OT4U%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T034858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIEjwdHatNEc3wAlqdSb%2B4GESk8o12VJ3QhQHyp1S0KiQAiACiKeE9IWqS21BCMlCvU1B1BLp7GpjOGsqTlIUhnu%2FxSqIBAj5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI3kNBooOz7vYnF8iKtwDNwR0OUgFN2PnsdA2YOUygGdPaRw5ZAAFVHmyfR2BMB7FmscYRvXzAGVN%2FRvd9dFBzabw8k8gSgXyFMtfHNLlMg4A%2Bz4H4fuBYDco%2FuCT5T2ALmTQ3OLB9BJcxyjMb1LkOyUmfAUXaxxdm73myIpRfp045WVi%2BYLVo9DHS1VdW79W5FrL7zwLEqrauAystX5SO4HlWUj1gEZ60vSPjU8F85WddqR4Qc3XgvPllJYzVs507cMqFroiaVn0P8AN32fMfhi8gp%2Fxm1MrlEE1Il%2FDyCkS%2FlYcjyjJHFOqB1HwABnb85%2FPg9BRZaUsEKBu6bwt0F5bUdP6itMMn0bdyUWw31wYbEn%2FFJG3%2BHVZQ%2Fg1dSHgIjOw3Xxu9sm5cLRulNz4oFte4%2FO0Z%2B7LZyNM1aTFK%2B6lFpfKzezQP2uQes7%2FVb%2FnIuDpMX4OHY49u1zs%2Bnkg%2BFIouW8nIvQcZmpHP5tUlaLEUtKxF1ToEZMOdoJ5yf1qej4y7aOLFoxlCcrU8rDOOyueFqP7tczyHqVZbYeYDPm9voBre69CbMpoH5zjk2FPFoUBiDxXARpZ4F3bGuaClfBGAciGsJ6hHCEABBXWYe6XSuqUTTe%2Bpxq0hdeUUR7QqAn4N%2FT8HOFoxR8wkqjiwgY6pgHj7qpzrbtmrstkJwsde0ryZn48iuPJDF3t0G7x%2Bg%2F7pPaSjgakMBbmx4s9PRldjVnOtjKRn3%2FkWXX%2BaPzqR8sXzHDH6mQNTPjPuEtMnfONKr0HvxBRP0yCH286O8EIiSzMSh56q4tHDzrHcijJKLZddtAUbEGc9FweFCPDS2mBKgBEpPGI2jSME%2BOyEeApruTxnE%2Fj2IdqsunDdktdFQUh5EgOvZs%2B&X-Amz-Signature=d1ff409da165fd8d32889c49506b3e280aa59b90e78f8a7fe4d4c6dd6aa27a62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
