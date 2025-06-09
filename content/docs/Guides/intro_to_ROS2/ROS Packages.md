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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=6b16e64ead03ea1bb8b7a382a3a393a1263d7e3c62e28b26eb6a8a2585c79614&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=2df4276fc8d4eec0e892da4cefc6cfbdebbdcd1850d8123797d4c37febac9acf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=f4396da12a5a34d2c09421b1fb6d2d7317561d29533a1940a3ee7405817bd5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=869a30ecbfd48df9ccc15bdac02fa45d7a778c9f3abff0ce4be420e373cead72&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=64ed435fc4114f9213fe7e71c579fa9c2136f7f7ca878662443aed1961c03fd5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=67a86c733ef4be7ac1743aa40f148d501ab56eddbd4f64ad6058638159d07e76&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BQWMPUD%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI6Ry6Kl7Kal%2B5Lmjg8E3H9%2FOTRWej4O2ndrW3VHAmWAIgWcvgMLEKqDzuxg86AcIKPQP16254V32sPL3vr4L%2BFrkqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2ENBXPR5sj2yIsLircAzJYRQObBru6iO%2B%2F2K1BBlRyRReLINCSjKPKRiGtUx0XyFs4ps69AgWSXfx2NWgqYnOghGVTGKJ1GVQTrIwlzGG58VrQbV%2BCBRKOmj7VSMoihAY%2BPhUJJjaS7mGtpPKU1MP5IrJh1YITEv3OlbB%2B%2Bh5T6KfaiHirhy1Wp6vKfyydQV0RvMbQ8zAkGQOJh4giW3AypWXgk2fVROVEzrqCATyoZB6TwWq2tFUl%2BR3lhpuSEOG%2FEcKbSr%2BTXtHUkbdr3g66HP7y5VKIbDO3Ncw42wOCw4xi5wv%2BjMxzfkYYh%2FvILBQDcC0P%2B%2FuAdVAHh6SDh%2Fjcly2n0pcPQ5VHuwvhigNWkpmO9%2F%2Fg2T%2BbdCl%2BjFpwTF1NV1LrLOAwc54DFimnadx8AFYI9u5oPR%2BAbj%2BcSwaZytPjpMC0L09uAyWci09p61fWIONR7qcDgVVXelfdzSd0sypkY4oZmtXV2mVPcz%2Bq%2BIurEakDbRI1WZ8Y1v%2Fa5by%2FdJlfSP4KKBdCmQq64V27cMtZEax7S%2FePqg4A2D9aqnNbS%2Bz85P%2BlUhjSNvOZUSC%2B5II5%2B34glUWS5wQpgXy%2BcTcLcjtG66a2WS8VcE8Pa5UIs0BJtklEKa%2F%2F55Zuc2wiMErJO9Qn%2FK2MMOOVnMIGOqUB8RdLWSbbm8tCeWaPbJBkia2R8Qg8hx9ciZj%2FAtncGa9Z5VKOFTdNsNYzuE6UCF7J0k1hKrNf%2B2fcAwwfvZQrvoPT678gQbkmVVBO6QPmmoCe0hZxOpDkMa4X0uKfrVaWGoQbekc7j4%2BgNY3xEWZ5sY0oG6poVz6yaZiv3ZBv1d3zM%2F2m%2BYW5ssc64q%2BSSN%2Bwp54vsxf%2BXgKsFIrtP74HUxO%2F%2FVUp&X-Amz-Signature=6b87dbaf91115ce0416e7547d5b9bc9f4fd8ea3479c57bb97c24ffc650d4924f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
