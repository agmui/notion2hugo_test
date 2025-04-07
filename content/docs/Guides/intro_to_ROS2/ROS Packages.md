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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=2421acde50e5f1a72f0cba04ccd37af04a39454d7b1af3dafa95be5dcddac367&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=2a637466d582511f4879cdadd908606111cb87fb552984963f61ceb45d198700&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=c200163e39d5c50009d3454e9f3a382d7b281ac82f355625aea76d302476668a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=9465184f1c0cb1a2a321d454df11d8d2b6ab492a6487c7f715fe7725baaca6f2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=36aeaf861b727db380e188ad57b941ac9c4fca2a1f39c5eac7f96b07b9217c70&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=73beaefc74036db6c5c6242a499955453ba7cd056b1066b7f59ff250524093dc&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUYKZQJG%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T050934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG7%2FtRNj8ARGGtmV91hg8Esg5PeUP7QItyDzCIO%2FSg3QAiEAmj1BLQ7FjCdR%2BpMYYF6zli4IkM5eN%2BLCypF94tgQ%2BH0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAuyhEQsnj9Xena7PyrcAxW25VDoI6ViMnwW8yUnr6Is87k3EP91xgX3tUUVSYQwRic380VOPO2DKDbrTeIhFx24PsUgLQt03%2BaVuf4vZtGybwRtHEBB33cpTCR4ELMIRY3nZYG6uqDNTb5I2It6P%2F88SQLLqaygNYphEzkO%2BxTgSKd1DdiEeaFUqIarAZxhcKacvoxDXGBx2rhfAk58ZQLfJY%2BaPWjnRqHKRH0YIcJwvBzoBrvM0%2FAL81f1DhWgGVINvgVthncq4odQjRK9GhE2vJgyQ%2FWIgOTo%2B%2FK8Mt98JV0Nuq%2FOnnuHCdYw9ibHzEsX7ufgxN5rdwzDhFIvGiWp4ZdC9iefmxcvSfiqk0q3LY9TwYAk48K1hOxZuAkTixtin%2B59503b2hYGilsSiVu7Uknl8PBAYul%2Fg0rxccBq7MyDmm4cgqv9lUWNNwiQgTwDD1SUKuw8inUvf3NNxLZJ%2FG2%2FxmdFdebasRWANpxmOhH%2FLNp0cZem36TvbAaMksJd72W0yMnO2woa8g7ub3Un0%2BiEWr2NFW3GM06zMTjBQ%2BzZLh0sRzeWUPsJxUGf87YeGxLggQdFqBosfzB2IDk6KjgIPa9pvHse9XQuV6IDyP3OH1FOjtP77NmO35xb1tjnvruv0Fgz2EMKML%2B5zb8GOqUBMfs64ArqJrVTEWDLuNdfn%2FJrjJ3bxlEG7C9w8p3g%2Bq%2Fwjs253mr55qt7u9E9fko%2BKTs3DO%2FwqQ2KV2OAfLvC4QEuuBr2Ia%2F1NfISZzPiTDO6JcLFkHH0S9IXljRz5dhdHts3BIL8IzM7f%2FZHDzmUOr4RJm5tf4yAGDqmCrNW3ZMA4ipQz%2F%2BVHYfclvZyG0EO%2BHDKxeWSoukFdivhsVOCGwLdGkNF&X-Amz-Signature=57176bd7f45bbb87ac8552b7e3cf821779cb0a911933661f0c77c05b7ad6671c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
