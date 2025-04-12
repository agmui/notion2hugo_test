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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=0c0d0c897501d1f096fad467184c39cc858ad5d21eec764b18b9de016b2f473c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=646eccc82d3deba7fc6f99fbed2cb79d996b8c66bd531ab66807c7875bf205af&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=bd9693984c87cc65aa1425d68c5f2fc84a4417a76f8079c5234db3ba4afb3383&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=a339772506e122a161fae177b6f9ad4781f3022f2afa7a735e8ceb28c0e93c61&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=37e7e8178bb11f1734fd6f85cd5b41e263f64f318377074b6c5235e7d54295b0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=f9550d1b86138a0ed87fc80e378eeceacdc256b35c2d27d00e664ff8e781f36f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDRD2X54%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T021658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIErEahgq2pbnGXcPJHXCR64GjHTmRF21ShPhB47FSTYwAiEA2hhp6MAqm%2BJvOMPh8pMHRWUturtpOlJmFbw6f7AFjH0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFRkyE6hoiJqwOKV%2FCrcA0qf7EtWoiQ9WqIT3%2FsynmXDpa0GXsVi%2F1FGJthbrKbB2LTVHnKs7vqf3u%2BH%2B1pncYcUhBmYQoUWIyECW%2FyBegZCHOBP8IeOvlMZook74wRXbQ0iVAl09vFoI1vpxQPllujN9Lonw5Ciwv6KP2d6hyXlyzol0ikJLnCiiyCvZR8ziCafJwFP0HumkngWBZd5cmFwI8b781wR5m5JE0NK169ZxAzrh2tWM8%2Bj5I6ongp6jWYrygULDUQ%2BUvmzHLkhFJ2c5Q2t80sMU4Zy%2BIforlzqLhhDfQUOEFHsvPAT92prHNso20ggD%2FEuf8o%2BMrL%2BN5ZM0zxn6VENAWiRB6uarbV5FHxtyNFpL3VvPRR7Nu%2BPuR0GPsQYh0YQFRdvD7aMYBtctior5S1XuTGNnPgUu%2F9NGleG4HMx4UhjpW04vC8RJgMH5Zm3vK19B49iYMZhoSOBvHLVb%2FtlwiMDTG1Oi0WKXaws8ZOftSiLXhqiBdyGRQB9D21U%2F5Szi3PxbOdleMXq6RQW68NpUYM9h%2FsuXMuIihm0TCVqXS3mXNaTyKi3aQOKhJBey4oeekvsfsKfGnT4vZlk2hQARg4yYT0C7AVRBC%2Fj3rwDHJT9uDMwJ3REKcXCDBDAOe3ENok4MMiF578GOqUBx%2BJ0OHY7zeElFbDZGpsbSTgVQfjNMffNCvu389LJt3BNiHAhVI5nawZGFxK1vHCc7i15Xs7lKA5D11q1dFRusKhsnPgiRpMbyaLTg8CCCWSOk0H4hr3EUZ%2Bv5NkxYjrMR7j94MootcH5UxHleuKklmqYddf9eDl8dtBxg2IPcD6KkN%2BtF2WA2l4E0WG60vg9liXGJlZIatn1v07o4gW817k4x7UM&X-Amz-Signature=0840bab9b16cd950ddbf5d6d857ce45ec3e42ef69dce9ddbc7b70ed36224ff17&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
