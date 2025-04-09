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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=aa476e6152e7225aa45391233d7370519ff39d12f92fbb6b52fa7e446c1ea9a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=a24722da5684b8b22355f232504993bc280d2724ee85f95108b823a4b5edb63d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=eade94d9c5bd477202f799984315f768cf04fc3765d05413396d6241b8f58545&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=dad52d6e3341a3933e990ae1118edec472b93d4bf01f2d634ead3fe729584a42&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=df0037582c81ff5b9c638fc1687d68aa944a7e9451520bc538513e51150d9cc9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=f86e6aefe627783a79761576bd44770307cd8e7be56894b75f8517377a290193&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q633KSX6%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T132108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIA5I%2BWdA7%2FErSYCliUzTJI0JZ1DaUStoi4M%2BfmWytdYHAiEAkp1KO0ajQJe86oLkOLDBW9egvojYGsRJWwb07DbwCvQqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCn1moGss4anC7AXWSrcA0%2BmFsyRMMgTHuRJqXxA5Q2sarcXzwCdPvEQi7mhokOQZ2uNzcEXGTH2z4rXflYHUpoQt9mTb1kl9Uuu45GOQqL%2BzjiAXJzqs1udDwCGRs7iHb%2F27mKhYV4Yhwkr2u%2BLZ7PjePqR01WU2TS2YwIRC8YugYxsxEKEvsamQxEuE9ZIuPxmu4%2BCa3gj0VRO6Twyvv6u3HvYzCnIxWrBOtnIbkAmWjzojqOgOpiDbSsZPKXNGm5LX%2F1vcG%2FSKCIATx9XG5TIkK%2Fy6TQgv3Oi3aWDu%2FuiPtMkiWFDY73Hd22njHCZj4TVjD6fo4uqXKrQ4G9snQyx4emmK5PZMuYeyTibtFWDiqXpcv6oTBs%2Fzx2ZcEPMuiyt04TaXUegjYGPb3j%2FT1%2FWtUZWusMiudrnNTb9L55MgwuXeQgypTRKIKw7u7upHJDlpggK1%2F0NzyJ3eL1BdNcmYh%2B4pQNxVEjjQ%2BgH95T9SXhtm%2BpB9qtNmk51Fpl8KEsLvq0OYigMYIW%2B5CU9zHv1qHWOQ%2FgIiRp629v%2BMb6gHRoa%2FylK%2BGa27NbJ7HXXD6UjpK%2FJnKUygKHtmEE92%2BgI0yRU6GzoZcqpNI7y7TbZa6K6THYjMEr%2FRkMZDPlih9uMy8xOVuMi75jzMNzl2b8GOqUBuLYyuDWrLcT5BrLyLsG%2FRtI31qjivVucxS%2BVM6QNlk5fv6kaoU7GQPZVJhshjB4DgooR3bcwTY7qcOwEfxU%2Fju%2BX7WGrwXcJ%2FzqAQo7bE8Kqci3fzm87klaUkbZnj%2BuEDokwsxNVu%2FkArzxQSwb%2FgRogxQh4jr2kDvsPy4nEMTZbh4O7n7s4w3m6y%2FJPWpWQ71NEFjgVBU%2FRKzwWwqX5gWS0JH%2F%2B&X-Amz-Signature=f0c4c2fbcc6a779bad4599d8aa0790c54c6879dd61b17dc54fb430eeca6229e4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
