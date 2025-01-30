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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=3586b9d95630980bdaadad4fc187191a0c6e55fb64657fc89695abf542dd35dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=348e5a3d6840f55f1b929247556ee3a2e3d9827f7e2edca26cb1e6fd5b036c05&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=fa5a0644a6b818eb7259b995b3826537b630a0619673caba4a4f61198afd9d05&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=db5a1bc2ede67f0273a3e9cf97cd5f6adcc7f70641e47d7e731df4ffac8108cc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=f0adadbde4772f504026a759674b5dc9b3ad9f7ffdcec94695d973a1a62bb937&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=9c93ddb96184d81c1fc6d251be96e89bfea3b5c6c3810c331f76000c5bed86cc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NZAB6ZH%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T050112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlEl6YsUyUFbNj85tjq5VfHZARBE8Ti0CpOpif2NQIRgIgQMmBETzeU1hmggHsDrxI0ptUpHgbVDRwP6buzzxhbCoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAYaldzNw2b0KH8iCrcAzfWuPMQBw6pzwFvR2dX%2BXcEH4Cin9Z%2BMr0ZfEy0jRpRTcicSLi1LvlY8as46GrzTzrhPR1%2BrTs%2Fi%2ByKgBlPY2He9SFzHYkD%2F0wqX3FBZWijrpkwdkjkHKapuZh00EkYyEH%2B8C9D5h6W2jcDz8bvTCAYyOy5zXqLKX0E%2FGQ7mNF1kibUdT7u%2BI9ErZ5BZJYFPxKPGia7iRQ%2F0e25uzYiD0u1EQSehav%2FLcEKgp9RTo%2Bdp656mPUTuzhAlfkxniX2s6ffREYXvh9KFbQi6XDvXKc%2BycV3YUVfgzc4OFxNo19UPqe7tExmCLAYqENAEkyR9SP8m4k5Jo%2F27JDVC4Aw0IeXz1pLkaPBLcC9cHNCvHBNQg4cFI2AgkMU%2FW%2FIGZIfCWM1S%2BHrbZ5zoU3YwRAUfo%2FGHCqk%2BbwZX0xtNZVc2IsV1qXQbl3%2Fvb69sTIWB4gW4G2jXH9AwD%2Fvx5ONPGC95jKLXBj4mm6kCAWd2y5V4lF%2FmrtnrH%2BG6nxDzZhoXlEHiAiEO5unCGcmkbfHJbLJurxF0pVIw9LzwT39tbIlKSeag%2FdjwUCudyEIqflMis6n%2FZwlMFDDbbYCE7KrhY1J5O6wjBvM5elOXY02KUgMhs5kSosIOsFiuh3UUcjpMI6I7LwGOqUB0yP2YKJVtC1JCdAs6QnV0hLVelC0rgZt6cevOxuxMDCClySnlF5wR4c1jc9%2B5Q2bWm1NKFqvxqxM%2BQViY%2B49X1k3IVOMvPG0VIv8dYATFBq%2Fnrhs7uDMBwqieyWTcMtbCXC4v6R%2F490XQKCibjsxv4288CG7PohfksaD%2Fr4V3nxZpAel1%2FusaBDHHL2eMB7BYuLL%2BJ0YYSEBfwE8gAh5sgGiZu3V&X-Amz-Signature=46546c0f182da0d674d815a8f6cf6242a6fa75c123ad3ec77f4f3db31299653b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
