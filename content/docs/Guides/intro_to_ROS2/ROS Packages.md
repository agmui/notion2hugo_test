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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=2db7f5045519930695b3c5277b9aed5447c94ff17ca0fe1eecf44616ef56d668&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=191ed6b302c7343ac7d810efb8a47bced584eef0c9bd4dc3aa01cc18f5a8259d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=9e156959ded3e85e9da064016757d9f0523a77920375e43db3f00717fa9feea8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=b635deb6f025d9463eea1c0fad34de142512004f39fee3af2358a5e8d3aa525a&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=8e89fd7fc6b36d76b0d8c900933287eebd1dcfbd60af7d3a8cf7fc74fd6dc617&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=b6b958bae2dbff5f2a0dcae7c720b307d3ca927b75b5d37cf3c057563801a81e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2ZX5QRI%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVkkcM1v71mVw5vOwmzJhK%2FG2uie2QNbj4a0AvHO0a2wIgZZtnYiLqbHVDevlD3Xu102%2BYSiO0cCQUwszHDPQgmfoq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDAmWflCKicoUOq4s6yrcAyJGhtaFocAQi3C1pQSqXl8KDwWSpm7R1xI9BjpPSHjn9ZBSm721kTLSXin%2FT6fMXACdtFWBB5yc66G2YTEhaWg8yWsgdEBoJ5jy%2FjnnhCy8QSmaI3hKrY09JTMb97QfiGcNr6uJF%2Fn8rmYdLSdH1LSfgiVeVJQIMuBTX9%2B2Kcx3rMo2pIOaMQObolPtlyKX%2BBkkmYfUP8AbQBa1udU%2BhQsQCygmnNVKmQSXfLG0GY83dmrYK9h%2BMo2hHARTAQkL4CtjLGtjLZOCtunQCQHZIKiNLLgCVHaRSfk%2FKj9X7p35Eo2SCx7BxUkb%2FfYzE2p0MAKVfdAXSR3n%2BlzCBNAeNGogzSqbKA4UxdOfqzLw1iWf59i%2BZIibwP%2FvbS8qny9Lupvj0MVUbtgDba4eiJC8Dgw64zETUxoY7YKKLkZFogK2Ur1nf2%2FIDjVZ6wnsyl5R2fn%2B6LlVhPHsbVjF32CNIeeWShnSMpkGXs%2Bnpc75z%2BefyGe46UoQNccIsB3ey6RC3fyNVcnsQ5gSDxGG%2BhnZIaWtIDeEZZcMIH9sdrn03RHiRJELxuiQpY0GQIv%2Fz6vwrYMJtdSlnf714K1hTKGa4BTYPWUCCahChdTHivhb1ieLcbRWr5zpmjLENRnAMMyKusAGOqUBJLyy4%2B%2FWd6SeQjFEZk56c9WUsnxowd5SjEJPwFx5k6rfMaQVW2iSW1m22WeuxDQcqUeVEqQUIzsOj1vm2GBo3ePae%2Bba6JbauMfEwBiq676%2FCoGOVt2NrezgFAhputpuM2O4JEMEOdRSw9ayTzmQAcE0rVOvCoBXmEfQaGhdQqU3qCNegHHwEu5IWvDH0yP36w3bQ%2FDCvlV5Mkvw4cwMMrCPKx5c&X-Amz-Signature=96745f3c11effd841998ba1486d366f57159117cd9964e414737d4e395f30804&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
