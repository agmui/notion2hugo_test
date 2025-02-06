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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=5295441977a5802bf9d6bff969336fae455045e458b77828aaa233cedf1aa488&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=e052d46ebfe10030df55ce221817de5616bf25f1eac736060af00575f3899fde&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=1d2c6eec3f15d7750f9739be9866d70b62d8997671c3651aa92c2aea0b0c7eb1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=81f3cd0700cbf9c5be274f25a192bbd137d96592d548cba888cf41289487f945&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=de7eb274d12bb3832be23705ba9f92ad8c174460a0c230bfdf4a1ce6282b1141&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=301c90711d006a83080ce13665688663eb9031874ebe8c01e1304e9becf347c8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SWEYVRN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T020836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIGX6wm%2FQchH3HxURtr5NYbMRJRAjhJx7g4xb%2FvRGCD1tAiBoIyKjrcgS4q7bq66O50%2FGEoot5bDk4wr2LvlDObu4ACr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMqo%2BR%2FH2fIWIKcCnEKtwD20kvAUxmeEKloZnOuhz0svixdzGyUsHc6VVfToX1XLg0zxcFHWnW5odIYskn7AUOc1ZzVcPfgPahq%2F1IC8Ikb%2FKPMoYa3WbHuSlRjrmrBTyAju8gHWtZAt50mrgX19%2Fa%2FYjWnHpzAiL4GwORxibrLeEEdo4WjIX4eQhhTu%2FFEogHzoQyHuC92viQATnIgqvWB9ubO%2F%2FQwU6cfEqRtbqhhexc7JgG9USmDI6OT6GRSVntcDnANnGtWMTVk2TNKhBTq2dZQgh7OUY9f3W2T%2FUAnTgBYn5fL%2FIT6htKly%2Bum1uR00dh%2Bzpm%2F7IZPoKKET3aHdsU6ak4jWtiHYmwHuFHnIs1%2BG7Q1FkcaZaLmXOTJBcF17OCUQzaL5nGknAacriODpDDOt%2F1mT%2BDV6uQ6zxf%2Fi9Gi615W80HXEkuYFuwQFTlD%2FvNOD%2BbDhge5GO2l%2BoCX0uvWrwttL4J1zI5TSIYzUNMYUDf18hiH5Y9BbuH09cz3nc2%2FStnvhE%2B%2Fu6CamgThU%2FnKMlJxACo%2FA0cY7qGRvPrX8FrAGHJdK%2FrbFliFXP3AW4zsGie%2Btmo8Agv8P0Fl3WUqWgOkcvv17pSeI3tk6g%2B3cM0KnL86TBW%2FbQ1ybmkpEc78G2850IFXXww8OyPvQY6pgH36gTOYD5vLur9P%2BUvUapgv3e7Jhh4npAyjt%2FneiT0re08v3%2BwBY1NRnbT8cXh0MO5IRa2ETvkFAbgqkW7L%2B3zDjd4Yys2VFWwAHXJ%2F47OUajYEWHfnq5XRp7kgt62MY%2BW%2F7ZzNWsvo2VGg0Ba%2FVaTCLvPTuvqHq929n12KybjBL5iw71Hvp33I6VEttodVl2mw5ZvzgmW2Z6%2BXnRbT%2B5c5CE%2BhZWt&X-Amz-Signature=5512585ae5897be0d2b60b5d0c894e4376dd4bf87d612b67f9c92f15052f11b6&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
