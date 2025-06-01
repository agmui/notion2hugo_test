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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=9dcd31831fe60609f447afcdecbb84fd114892c15e91361fa9b4ee4e992600b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=3f8da7f4da2d15a05dd1710c70e8a0a6aa25364376647158120712bab7d24129&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=1995b9f6fd364584630e0bc6f9f321e8f001ae359f30985ccf5d04e45f22bada&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=673539aa4c7afb90bd54f2fd9d343cac1547ddd571554c56b16e277d732fa674&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=3e4f0cf2639e9fe297a08cf906af6eaa7bda77c83a4dfbf324b470518728e5f2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=4c23ed1e12cc77fa94d563d293d4e58f28848ef2673ec03d698f4360e74451f6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYO4ZGE6%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDvRLY5Icqvi2BvROt8gTHumWPN5rOHJlSrwtXIXpPcHwIgPAVzyj8lU0Rm0B7Z%2FGUNsOO%2BFRwDUhALidCe3HxH29YqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmmU5zrClFdL0kzqSrcA4QTyjKjWitBaev6jjQ5vA5o8%2B51JphhdK9qNFWQTWd7w9PVRy%2Fao5ETzt1JdvcPZmucpTyxZTbGofaBolZBx9X3%2BtOp9ymt3Gk%2FfzUwQF7SvOdDQblMZeEFSuNl4k9cSXkxTwtI2NqnHXVge5cBRWpPus85Q5T0a0NxLPXDrxFZzmcz0xKBCaIupDtnBuwoVV7SjG4x1B8s7DMqRLiyLbOwqBm4r0fYjO1LAJ59djRiQJHC2dqMQJTa%2BLI9UddclBFOClsnfM5rRk%2Bt6MD%2BHQ2uGYA%2FrZghI9ltK2pRjqOxbVZIcfs1bMVh5KP1TC62pGy87%2FYpLItD1Td8hXV9KzoThHspiCJrl5248cH%2FHr2Ma76QlUfyhertnmfk06RUP26yjb9CWcCC8HGQPOHzpgDnw4dWcGB0j6fSf2afWZAZ%2FP7%2F0420Oa7OokMDXs6phjWninOXkkVcjkno4cB26hHP7mQhRu%2F4bmvamTKZLZBNvEEcc6hbkkHMZmPWBJn8ZlJSF5CRUZhtEGwByQqArmf4cfIKjCJHC%2Feh6dtpF%2B8NxXIsl8LFj0%2FbuIvYA1f9FwE51dU2z95ppoGLQE4NpL72GWKbboTIDoF7Skf%2FFqDlCciaQJbdENHP84C5MNXf8MEGOqUBf4X5lMR7vE9Ma4IEgIs0wOlw9zqlBhMI8ODpO4XKvR1kBheo9iRDoAdX66j27SBHI2IhsNneD%2Bc67wvMY2mHj1JOKpsqcqLFfcnAoToWFNcvtrkQtU3wBTkiWk7GJEztOvQVPkwxS5KC7bLjDRuYeiT5xJ%2Fm4BjMxspgkPnKV%2FdJ%2FM%2F0LCbYQZHjksiG%2BZvxB1H%2F16csC2NPSwvxTYy%2B65Hkrn3P&X-Amz-Signature=cfb4c72a88c1566cca10c745ec05db15757e54eaba5bf85cd39998bfd7b133d3&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
