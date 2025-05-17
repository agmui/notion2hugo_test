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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=856acbed44097e9d17e3739dc40be98fb15aa53a185f74b58f79779f46cd1d67&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=6a9c91d5600f8431b21c15ede64f824d168bb52c2e5b188d26d802f657e77f9a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=739852a7f6f22c122487fc998a715dbc65ad74014d7b149f1acc000ee3ee1af1&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=677a5b4a9c97fbcf9aa700245d1db65aca47205e7e058f0dc96086678e3ea038&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=af98246c89a05741cfd922bbaa3d4b6348641d31557a23b90585d68392d1e09e&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=cd1e9d9f8ff0e582aecd8967adfa7c218d047e1f79f92d85ffd1c1e0779cce0d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBISOFKP%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC22ynjXngazjlvDP%2Bpa%2B1X8%2Fr9Wrev%2B%2BRqLQ%2BHyy3wjwIgZsUXWsolNH8Kd0pL%2FYZDo0aXoeDer%2BOVG4VO6wb4gE8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDMl28QVKZmWus1FuOyrcA4jwCJDjKCGdMX56S8j3Ai81g47iMxL%2B27g5WbTe63HgsBhMaZVnSJ9vsYvPvqCZ7KcLXIgxSTzNmME6SUxmH0K1gWCMJz7pV9S9ysITgcM%2FY%2FifCUipqwcQ8P2TLyikRuv6N6YsQiDd3AlsTirG77ZDKPfuByD9kEx5CjzRUXediyCprdiCSQOFgCbwcGRPN57oBYijJMC6%2Ff94uQs8XPGJOv0E5fRaWEcDto5%2B2rrvQmHXMuWeyRHtITl9FFOA90Jmj6ZJe0UzuPKwvyetOd0FlaQE%2BAhWvYhOa45gnzOjmVLg4IhfBX52RT1B6qJ8or9fC82GdgILA88IlmQve9z6DBuwpy6WI7r0cSH88vkpFNepPBXDajWYxkSd4DkSEJV669QqF6cIbnpVtO84pTnnpadP9%2FEFl6PLv4dnehFGKdPPWqWspADFk5dVHW%2FELcdyFvJ5fT50mPlFPRhq2My77WY7zAOoV5VMTDJh0d7z8mfjF%2BPskItNh5gQLnNSAEJeBRkjhh02epvGRwwVAFt1%2FihCqrJ9wRr7KN8okLvvS4kiBpuTxmt9i9xF%2BGHadaDFb3I8LskpG8EGz9EawvWPKfIdF5gU0RHPmgtGfSXOs5vN3T1qawI2Wx06MPGPoMEGOqUBaxcXmhqoUliDbuJfATbref%2FfUcosTsWUiqkovBqXroLTLxFODmIyudJ%2FMEXIUig7wS0OHVb%2Fiu5YiEi9nxXpJ9QHENY3sb7UYGc5%2FKA42MLcD%2FTUyOBnQLnXjdkjaA%2ByOomTAeTRFwZyvkwQsxB%2FrZDJREeNmBHiDlpx9rjZ8eXmNDmbud1jqcj%2FH3hPyM3OnCPXaL1qxVUjGcYvRsMJT3iVJiG1&X-Amz-Signature=f7ed6f0608b5ba43ae3c7679fd665d89d1294e217bfc8a019be6695ba1821061&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
