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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=9432aa0c9941e972143025d34cb460661d409cfd36b35167805bab6fa58ca9c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=059a237d03e8c2712dcd711db020969c2554cb5bfb3e2ea62864ad405a32f1dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=c169101ad77cbd1c945835f0a0c055b9e0c5d89efd13587c66eaaf22530bbd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=e0b72644434174272c00bc327f005c0c863a0c57ac9694fa52396c27b68c3bf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=eda1521dcc959e39b684632aab7e972abeaf42e9011c5763ae2ef7f8cbe64f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=9f74fdbb1f2d4d469280a9856ba3dfa3d84c6fa6ead96bd0bce34cab7e51062c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YE4KHO3W%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICNQcSNdzdlDl57jsS5vmFYKRxBp%2BaE7oRG1lQ0EkTH5AiBBzILUZjzwQ6Pg3WeBvPjQ7Vl4bj7iXN6zAgSncs2S6Sr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMqLDeWlCsncQgen1EKtwDsvyH6GQ6wImpgJldHNl4c7lOL3WGsm6N7sbWekyWF7bqzh77cGaOHcYu%2Bip0%2BDv45jYijLs2HKzODq8zaD6xYZX5Y%2BMXdMtPqXAT5gNpZk9z11%2Bb95xV%2FcTk1w82OxBNuitHNN3u72FDOgCy08v50QqAxzslCbITKvKABaTisLSyFWZZBsjBx2DQPISMy58YY3%2BKBI1DSYs7a%2B%2BYM%2Fpzney%2BbsCgo7v7PMcoHBb9iFh5Ce4LO8Mc%2B8heZu8A2dXCN%2B3herm3D0NydYiBNsp2E7P1j9UnGwwFybo3GVngSgDFuuLkwWdLnTkg1aUDYTIXqeIX9rk5fRo%2F6VIQt1bLKpOfRQwVEYwIBsYXGsQRwQkbwRVsh4qm0nRkbhs6TRHvaw4wk%2B1VO5H9xWghSVd5Vc6FFQ9TNXkr%2BIIodpCq1fDS%2FRmxq32GMY2Ryj72EXzjlJbyA90ClIdSeFuEr10EGWv2IHouTC3KiiXLd%2FYLlFizRC465LqOLKozDJ7qeDTh%2BFDYYDAEF6q9QTnnWZG5t%2BpVN2GurrB%2Fk7TF6xG1Y8zqZ%2FBsb8fNLwDzyUV%2BemahJQ1WPF31jVamwwsgv0LVYZm34AN4fxAYnmB1DPZsRE2drURaFnIy5J6A%2FNkwhcLDwgY6pgEDQkRE60I%2Bxbejv4KNkfuLgN7%2FxkqohmFK7qJ5ouKsgdfwf5BZg6pLGHsO6l%2FunmS4RlF66faxEyGixUgSID5Bd3QbI2ndxWh5Do%2BmA5REKz47CQgnErMkVwU2YZ3Qipwub217NAbGl73zH331giaqlcQp6M3nxof4T3PDg%2BGjyspDxkmcXrXBpBOiI8ykAMhO1fu1ReEukdsSqeT%2BlSBQifgAGVjs&X-Amz-Signature=61600fab0ccc9905c8f732d5380da4c09616344de7f8dbd12f31e855037105f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
