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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=43f31a2d6410a40a834f68a1ba5eda5b1de69fe4c8d36b0c0c4c6b8fff28a22d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=fe4266a88694432b6ef9abe1bcb59f9660240d3d1a6beb387ae23a1dab706585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=f3836f3e788dadfc5e4d3ec4b83444c4cda937bdf20d3cd6e79d1f51b5fc78d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=b02cc372735baa3b990211a8600db69094ba04c01aef6de825de14563d08fd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=0f0a98db84ecc2a40f1b24c84cbbd363b3845a8b1202dcb19e404773648b22d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=54f7bd62e8dc090ae2491ff265271f757073d5f29ceeb122fe6d494595d5879b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGO2RZRX%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T042155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIHIpAVk7%2FP05O089apM%2BXWKoaFdifC%2FSrVOiyZR3MI8WAiEAyW3qD9DS3o3JuCYzKmrziC%2BQ4OOYGGs5e%2FjZQb0nw0wqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKt26MwR3DkmMVZgSrcA%2BMNdoMQws2AUUomov6Fe5QLRAlYW4lHoi3BnKysyOLu%2Bda%2FWuMsQUxkPG7vHOqr6CedUZatb0Z1h2Bb%2FFlvRcKO50cdB5nSnuD6ea06zzhhQzp1oKPASZ21%2FZSphLtsXekiRmYUm0OUTUFruX%2Fw3woZwp6sPMd6gbdQvz17HOZwjhhq%2B53GPXGrIZslpH4VOJUoGKu2nx3rhpVZJI2CkZTJsYyoWeO9R9UQPoDhSudTS%2FFxdFEwfowa%2BKA9IUvXsQMrT3MHdd164Q3ygXKlI8Y4cqTi0HM5y%2F7YlKTlmC1g3HRrwaNXPAFEaAwnV1fjPuY%2FEdMmffHDHVf2KmRdCtwu8aH9ZW7hJz%2F10CN%2FY9W5IZFSlZ8P06XXUkaQwE77xtq1zIjeH9x58AuNhqy9I0FuLqIFYvmZeZgdNSjqOJ%2Bn7JcNgjZXuMpr3kw7ZNjaP7dGhOPUBkiUjUSyBv58U4kzpJqxbhkmX0cawl27ZhBa5Pr3QsfK8OypODYWDt6TxTA%2Fff1oVHn6Jrtxoadz0P2%2BnlL94aYci6NAgywhdbkWBwqR4XGUBUHAMQF9tM1wraFIWqFtcfkQxu3xtCE%2FAsyxYxFgTSlsuuuRrcrdgb5n5Kstm9Jxfj5fucAqMK2ImMMGOqUBbCcWJup3SYqkcf9Fcu0irpUrU8r%2Ff6cgSjCSjjRDg1QMsilTrQ90zdZ9ePshmYZTICAHIM5M5I1ngZEkQpuJlof%2BZmSCYqErD%2Fvx6%2FzbMbThV8pDHurnLpR6swkkaP%2FlLMJ4t4X7naUcLsg2x5P1ZwYDZ5czVeM0Mc6vVKrajW5sBeAwkziNUruETnFctCAtglaS0EUX9vhqQCJMgzn%2Bxo97B1JZ&X-Amz-Signature=c8e7b78b18d33d798c561e49678d1078e4525f8b53d50852cb2062fa28ca8a71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
