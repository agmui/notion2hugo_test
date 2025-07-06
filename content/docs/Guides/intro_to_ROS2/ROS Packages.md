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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=005587c6d49ae786afb934725f6c5ff71584b32ef439e58d79170ce82f8af651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=b387ef3055fb89e0cf3dac277ceb7b05791d8129f876cca1ee236740aa1448a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=b964ce28116a9418a83dc2f50288555d40e4f51466b9f8ba068c6cd24c69e775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=68c41f1da6fddc37982be15f95a887fe5492df5c02c8ec000e5a21bf51ed2150&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=a620d3e8a1d119b9d91e9dca7eed63f0131fcefd776f1355c49982e2238bb486&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=cae1ae8c4771ab8bcbb90a7c46255746e4d97b48c7b17ed9e9fc382f69fd7186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVB6EPA6%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T132001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCID01vJuw8%2BTffJxtz23T%2B3iN0em%2FTwk%2BcTa7DfAEp4ClAiEAqG%2F3BQTt0YybYGPQpDGGMp8LlNyTgFvmiNx4zRDiwxcq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDJ6C5vU7mT1UiHd6bircA2ZGdjCasqiJEOFxv%2FjlNSz4suPA05jEFTWKCB%2BOATsvUo9ALVEHWesbrtIWFPR4mWcinWIP502Nef1rkvwSXHThJ4zHIG%2BQc3lWN%2FpQyaiXZHbNVzHhOjgyjB0%2Bd9V9iMZaZtpDx4QhdTdAViBJvNhHmbKm5Zz6lIfMGrpZTWgkW7zI3q5blvsI432jnIP%2BKSWsR88K9Nk40IUw3B%2BK4O7DQckZcjDoVl9MU6CMTTcPTzTpZqpzMMpZQhovciuJKrNhxDPYAwXx%2FTvk7Dnl8iXB6JH4YnVNJiuDRmoepBl6Qa3v%2BiGEvKPJPBDuMz76tcMxui1cckv3EKc2YPfEb1Rlk5U1TZpwky5MjsQEokg5pbHdmCkSgd2YJgurkdfJsZLYn468DG7VHDog%2BgykyVUKO1ZT0zcZ6yIHlzVmRSLuBa1f6C7shgycT%2FOmcdZpOi4tQuzFL8Xiz4YteImVGVWGcD7DxwruBbtJDLkd4Xnb7%2BGvqZ4IdBZj0jzuYknCIufB8O%2FaSca8n%2FDZYf0QbgE%2F5EXgb453h%2FhUvYnObgUGY%2B2dnJGS%2FhlccQtkglYL%2Fv4AVW6ZB6xqpa347MBbU8uUQVfwRNYBsqnTOVNCpih1RWYk40%2FPhHxTdXjHMPTCqcMGOqUBjwZOpPsEeG7f%2BjjX88KN017hFpuLmoF5hkQr1XX7jWpAvzRgasKRnduBvJRJL9KV6I2IxO7WfFHsZxPK%2FGbiHkc5QAsKCztJ32WHjkuCmDT06jdHlKqjBJfZapTKyw57U9DhvH1hMfDzBtaYpW726yTnFlxFvmKrsz%2BK%2B16IQQ6%2BABeQX%2BISMJfgXX2ygS3VxlUwikTDzzCQsPElDd9TnjSZIoby&X-Amz-Signature=4ec45166db4eb55accff47b4087a7f0e6155734d8da58050d08d36654676d9f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
