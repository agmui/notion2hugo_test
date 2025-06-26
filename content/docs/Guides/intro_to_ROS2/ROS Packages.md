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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=bf379a5ea940c23036d8fe1f5ae0c0d9e2958ea505d12e058778eae593488f53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=40a9ab719c11b6ad8b14ce9c26e353a29cf14cfbcdfe8a0cf46d5807c689794d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=26dffeee4bc358843ffa56b48fe46fa2fbd99f241cce19acc752f84fc046f0c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=d6c82fb5c412bc879ed43b8d51ccd94090f38bf5fa219c46c79457ff7a4b469a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=05e0d1afe2b43b4a90ecffa048360146c1fcd1854ea372ad7b3b73cf329e48dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=88ecd2bdf742454a81dafee4e0b528cf7701ebd9c4d1035a4e67a112c4a439d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FKI4KJN%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T161102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIC6HAk1c2hhNSOie4ZO88bT%2B%2Bhg8vi2nBLqTDIXidE26AiEAqzq8FvBbEUb6gHw774gbNnfG%2BonEhmiv6v0kM4MYJ%2Fgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDGZuVIYd5hMa2AYDdircAzYqrar7WEHQNY3tXUikTCRGdqfLcXOd1mr4K20ljf52l8Ug7JD74vx6HZEfAN7ftcaEVjx7zQ2vycsspIQXL4v8XVCBM0r%2FkusGaBF4jDgQBh2G9FXgX9PKkTtCzjl3yz7M8qddYXD23Q2gURt9ttlxZ3uLi2UsEP1hswRJ%2Fyulvgav%2FmHOro%2BzGZExdFI6Rxjkvcjkjmw9OD%2FC0APmhQQmHE2akeHsfWN6z%2B%2BXT0Q9aCvqQIxt1M5bfQZQNNZzlezO5T688EfPNJ6JX%2BfQfpwIjB7GQiaf3H71JgPOyJXoPYOPtqSYsxDZjBOIy01tGYnuJIshcYwPDl%2B18Vb9E9DNtK%2BMITlWn1JGc2TRiTfG2rWYYNAHFtlcs56zpHeNkvqbWNNCVvkyb52s%2F3xqiQN2jgfY9n1xME9PRdYCXwAvictmTcNoXg5QTkcF9ggXBr9rBl06SMDLvC4%2B6MLUxKTpx9WlznOoJQNn19sAGPUlq2CWcxMT8F8m9BhMnyYP6y%2BJ4qZndpnLSag39B4qbbOX62WtG5qs9895XHskWbJSq9V6OoAakvPovkpPu0N2zQPdynBm%2FRWgCOx2KHvsNpz5JHJr%2BBfkIpRGu%2F0xGGcYY6O8HPvMfN9TP%2BUWMJDC9cIGOqUBuL%2FycHIAjFufdC%2FZ257MfDHSX%2FzMmTgm3B7q6GG%2BxOtDVZWNcbNo0v5%2FRcBFKXPGqkPoIag%2FDgPgkKGX8QvCp3q3cidUft9lAlEt0A3w4%2F%2FXFXV1WmyNolF09LC5d%2FEnCQvA69e6Kc2%2B7DVZ1XOHyoj358%2Fh0j11PdLeoru%2FZBt6h86a1b0ip3NWMB4luSsxNEHPcTdFz3HUTvzyoRa5UlHX8tyA&X-Amz-Signature=e9b834845616eaac5a5f059771afb16bab57a35777e95bb45ff6962708a22c37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
