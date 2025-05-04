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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=5d8515d5965c74a42362ef5f56a62482a1ccf07f4036dd5593bd59b295aa3566&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=44b15a26610cc5ad869c47ffd6fb54bc05baa0e64048e219bade4d4f68153672&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=fc2c674d8927b806989ac0cd9adc51b9a81591f7a1bcbd312845634d98799070&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=70734ee8c7cd0ff3c012b2d7fdf898d5cbb90001c28e21c77c76dcfd92b2734c&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=6bc382afcc46682b768964de3b2fced5828d7415357b3da26d985544a8a2b2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=5c7c5878749d38641dbff4a6dffff6337bbb303caa9dcb9cc7466af8d0561e94&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q2N3TYY%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T041302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDiLahWo19KYJ46noiaTXzlYU7jULC2LgcpFetEkYVeOQIgYVYANfvKMskZMJfsqJkyQss4kv8vvu4IWaUu%2BJmJMQ0qiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgPrDb33OwCy67MmircA9gWp%2BCKD%2BuXdXRUpFhv4615jCqoUn2zoOjx%2BaiVK%2BBZaSGshlkFQtprqIqIrg4fBOgx2sgh9505nYcTBO2wnTiZrYWhq9h0D47kPmZRf31hEKD0umcPjVg0oEbK0tisxiFsl9GjN10Z0sSpL%2F3EquOTH6vyroBlxxAEFOLQFJBR1bqM6ieQ%2FM4KM0iIjGYdY9i0pySTRqTZcHTVr4kakH7UD0wqpDzMtaYkfKejprMOH52rndBCnLjsKZcBXNAQuuaStwfo47HBT5kfi2MvKvofjkXCB8vqCkcwf66iiNDIrbpORUFARDn7Ek7OCfe2s8tDtQaVJcjm3JSFctf99RSkBKFGFeTvvFuFD5dOS6XPUzXxzU5n7DABqrfKyftJYzQjiy0MCX%2F1QNxHw4GqDx%2B8R7splnASByXAKIUE9gzHiq%2FoZE1G%2BjiRhrXDjvYVO0cd6PQxckwQLH2SqJXXMNsl2XTJVxhcTdmEPsmRghtIDDBiGC5Re72wdLBFF8uhqSeWJXEHfWjUVLyordWa6OZYms3T%2F9Upip1U9%2F%2ByP3wBVVuQaORXxMLKa%2BBKLWVQQ9zdmudCWiKRgne1LyXwxMXp%2F%2FU7azVMIGt5VX92WWnD%2Fe7LV3%2B1J5mhVGm9MJHx2sAGOqUB%2B4Jk0a%2FZ2qKCvmnCBCq%2BbDkxE9qDPmxKh3qD7Yu6UiiB5R1eaPHFFM%2BpbaI2%2FouJPKZD4y4O2GjM0dG%2BhNvlio0qsyBu%2Bvum9yOSFkRIUJuvvotZRR7e2EYG7wyfy30kgsf1TbshCaEjIZ%2B1Qw0nuwYZoZqADOCGvf6%2Be%2Firu1YjhbkT3n%2Bi6rwOtzyElVdEOaQA2LjMYs4mNtrYEVFmFdXyS%2Bxh&X-Amz-Signature=8d78e37dddb07b30b4f265e9382c77c41b8e5fd6065a4a3ec65cbdd042737ea6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
