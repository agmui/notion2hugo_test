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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=a6d88342b2f185100c457bb0db604795b81f31fdae898d8e7ab8c5760d59950d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=aa61afe7ba3f3ae13621691dfd8b6dfb27dcb59a1bc2552836b90925a2c42a37&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=75ade2f57fb72e35521f8fb25985420f51e74f505d5e3d872b0b54cca58c79c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=925a6457e3923a3a3e228e2d4c5d097c8a9189e2a20f871cc14c7abf1925c23e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=5736268ef27feb4c108eccbd23e1f17e3327a110d83dd09bf5ee175d8835d0c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=2891da45e152161c71b62ed37fbc94a2984c3c9337ed98b6d524a007e17f19bf&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P4OIFFF%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T210753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICo2rhZXrhkbq614joOvqx%2Fpdl0m2s6Qgw0ZeKP9s9DBAiBzmK8%2BCUe9jG7bjpeVy5DKfq9YWl7WrvDJj%2Fk3v8cNmyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM7yS8Ta7yNicxXJK3KtwDLWhTFNvn5ipVkPeSdSPha0Pxf%2FQNSEgDsJJ%2FSyHAA%2BNSm%2Fa2QqUIvDLao3TTgi7r9A4%2BSzDZwBrAPhLhoqOkZP0VWRrsUkUfZrjWV9R9NBgtgKhC7pbXtrEGWSlcV%2BKy42hIVkzsr%2BKUKYB%2BMvm2%2FPhMp6gfwPL9lg0gkxJCYEIlPjK79dF9MKzyDYQRQ8wfL8kojGYEAnDRS%2B12lf6m83r2qmic4WYgAzO99lNJ4fMPUKEZDZ43CtL3Rqr3LlOisxOQGQB0aBAmX5pBIQvq7R0jgH8laXnrQzI6b1KdQCtryFMCVPcG4meW8J%2B9j4mKSUuzjR6fP4%2BbcJlajMMjWABVvaAcQBVk3AtxzjnJWpm5PrmxYhpbkihZzXeJavROCG8VEzohBQEe4DUHvGUFzms0klcpeJt%2BNtLNl4DbFgPdtaR%2B71UhskgaXEBozac8bqWMNBJKoJ10bXVAQ1yFuD2J0LJwnWJwA%2Fg9NGp8StmOQhjPW2yObfIdgGW6wEPqzumW0VUdszMznqHYErEprI%2F6hPSzsp3ffd3f37buMhXXlOBtDxlK%2FVTQhDZlFR5AxujhZAij%2Brxrm7sL1qVko9I%2BgNJjOYW0zdD6nA4IOvD6ccX3pGtp0S3D%2B6AwzrTpwAY6pgFLDiZD9UeSvvZugw9G2Z8i7iF2doWQI4aOeqRYq4IG64keiKhsGP4ux3eisGx02daqegArfySyF2bqrzSP%2FquxTA6w8qoMqdPPSeZZz9xxBX4%2FjmrJ55y75OjWbGxUrlq9GRMdHNUwqDEc02mTC0%2FJZxBn6eGI9bzF0oKbHrhrVy1d12rj2IQtFbzdzZPoDdtUYaRNA1w0sWlD4DdyaQNe%2Ba0wx7dO&X-Amz-Signature=77fe2c5af0b4f9720aa4615785d4dcd23cb377fff50019b606adcc593e5deea2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
