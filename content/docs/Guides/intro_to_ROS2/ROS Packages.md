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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=4f9f826dfe4d4ea973e1249c8f6699e329d32bc06637d7775dbea538012e8e96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=46ac36b53c74fc5659dafc3bb48eff320af16c424a2af7872515d46b585e2d20&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=7cfc16ad78d6c302647822e9485c9e738c787ba610372a09dfd5d52dad25c911&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=c7b010324ee63e8548f310a82607b7c280d3155efca3437099a5993b0b2735f8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=e46c584de51c6d178ecd0619146cc72035f4f81094dbd9fde50ad2fd924aec9d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=d89a0635089df28ff3d4b8f69c5f7d12fdf496b6b592ba0779572209892a013e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647X2NGIZ%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDy0d%2FQeSb4pnv12wZIA%2FmemM8IYFOqEG77BocwrAjmaAiEA0bnuImnS7rdyvhbYfTrUFWEiTs7Vcyq5kFuNIEYOSQAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDHBwAEP%2BY0zBH2kKkircAx6m%2FnF%2Fe7z6eq%2FuoZK7zLHqhCDo5HDA2LbyPIE%2FEBfRCoyuANg26avWH49XaegCpVDpVm6Ru%2Fi0Sg0g%2BW7snaSWNOfXIeWVuG4NbF3qYPKvNVOrJd%2BTgMll3zalXUxzRM8NcwwMcC6uqZNjeTw%2FnoWtQXyByKMd2YunKH4C0U37XTh9JfjIU59%2B42T%2BLbWYeHUwGWSwg8%2B%2FHW3IqRiOkJvFb7o8UknI0eOv2uWkW1VqT9Ki%2BHxX9b8RAWGFEzkj6rI5zgU9gCerq4en4OgwBoMAEJNCGimXGeUqsxXsZttW9m0uKKWkY9TyyOHXhKSjZrSZxukmYOrcLM9ZYyVT9ehkK1UEzbmTvqCXhiy%2FW0DUV%2B0p4zzKmjIh0r3ojOAIvV7o9fdoEapJpUupbeoqabRT%2BAbSThhC0vdEsx6IiLigSJZ%2BSWtsyy8NWhSIJ7cJKOeOau0kTXLnKTOGWuMxGQwFODlDXwI5V33fUPV8EoUxQ0DbaD545PUaWN6FujQ%2B9WEkYryFOJu0vimfl5tryEaZ7ZECyQyc9GBcb%2B%2FuW6sSxy1AQDjA64%2BklmlNnxFJX4mGh957XV4Vau%2FPypx%2FLhZuzhulYnq20rPIyBt49eIdNaZD4kAZ53cBDfTeMNKX6MAGOqUBmJ1xLylsJmPlG2CDfFynr2MagPpLJrBVXrKo1Hzh%2BpEhKFnMGyWNnGUp2cJfCVkqtjpTIlUAhduZMegarRx8eCHsGayIONKBhhpD8dLqd1se3wGt52aKjccBT47CFunW4Fow1p6gyoyW2YLJyfSx6RzVBJ1nxNxUbhoxd9q0zWTMLdJ70wmbKl4VVXdW%2FeD0sMAQ0tEcdxUako2L4dNGWNMydppg&X-Amz-Signature=2772f84c991b3d913108bb3c3f29ef2f76012555037175e5d9c789f22c9cf103&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
