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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=f0bccff6e9ff7ac9232f15ccdf929d406dfc946cb54cbd21e1f693b48d6ce135&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=4a1f670d93f980b393879d3a0a93ed1bcff88d9e8b0e43e8e13b1066d9966106&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=96a4f0acc608838670d2868b82121cbde2ed17935e38cf0ddae2a7f6e88380ac&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=fda1c56bdf4cb9687dc351aca02d825e70cd132a041c9527a2db0bd52583ad84&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=94bb172ed86db4851a3aafdb8d3ac2bd82d9aa37767a4c5bf5d04637dedb51c5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=7dbf0a028ed9b5908dd320146fa03f0853a587f349ecc7d1a10cbe4f6f707154&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI3KLKDF%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T020707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIBOm7ks9Y8tzN5%2Bxwe0A4Kknmhzpiet9ZxGQmeUYqqR3AiEAt4cbaGcCbqMFiCPFVeWJJYyaRnCsmC%2BoI2Vxo%2BmA37wq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDO2ZrMCj7qqlvR3u9ircA1wj8ejwrss9Ew%2BUVrkZ1Ttd4AWdE%2F6vVID3QQrtnPpsZTvU3Zj0zDdwYCCvdOHNaCyMfU6sE7u1eUCmFRaNZL5piZchWm7r1Lr38%2FXqS%2B%2BAOtlEVskz1WgCfoU599knb3Oa0ZHACW6RoFtqlLPsvpYnhyBV6IgQBCdRmwMlCfWwzFnEqJqY%2FLP%2Fdabw3HP%2F8Rfw%2BsyWFgzolXct5Wq%2B0sMzrX9Xf55ViJmoJefjo5BrTzlQbOPcHAkuYouMcQcNqh8hHMjqyHLEsfSMoGdrLqD%2Fgyfppzj%2FD1bve%2FIxbIM29VmXaaeiCIJJ%2FaxYgqpwC4HKbppcGZTw5vJ6annNiS9Nft38QJj2uHd2vYP%2FME5xCqeYCL1UrkXMfgYnFPvFi83%2FoUZ%2FvVN5bv5ACacNVCqyoYAEgBRBoDwQ9bJ2SAIROjNyBN%2B5HESBJxCajqGOnX6lCarB%2F4F%2FCUP%2F9U6eJGXo01c8o8hXZI4QOa7haTiSL5Eeh8E2hAKtZYH%2FS%2Fms5EpROTqQC%2BZUJuVHAGFVy0Uetv59p8tS%2BjDJawZqt4NCwI%2FwMmcH0UkJip76lQ2gt%2F0%2FyQF%2Bc%2FU9%2B%2BMv%2BUK6c9NMzXQpYiO%2BnjZgld0dopGW%2BOzRRYyurKwKM2TOMNjqhb0GOqUBF%2BBMXqj3xJFHIAu4xOfGTAFgu%2F8swMi9tlG%2Fo5kdC4zPMo%2FDcLvcUMtWvagBCHUSiFfPUrYbkQJRAf%2BY16cfWycMghtBOKztV1Rc3w6JfOS1zvnJWm%2Fb42dZAPS9RZ8BPBEl38fvrxxJvOJhwoOQUpz4pNBny6dDTY6aBArEyD%2FTJYo8jtYRV1OdEeZKLIHAEGAA4jGtAOEL%2FSPGiFLrRfXZFpGA&X-Amz-Signature=de4ff2d98284f5f3b2e87913b8790231399e07391e8afc47dfa4f8c8d0f75f4a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
