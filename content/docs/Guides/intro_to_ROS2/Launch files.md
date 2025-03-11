---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2024-09-22T21:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2024-09-22T21:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manual which may get tiring.

This is where `ROS` launch files come in.

`ROS` launch files are files where multiple nodes can be launched from all stored in one place.

First, create a folder called `launch` in the root folder of the package and inside launch create a file called `python_params_launch.py` 

inside we first import the `ROS` libraries

```docker
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node
```

Then we create a function called `generate_launch_description()`

in this function, we first define which nodes we want to run. In our case we want to replicate the command `ros2 run my_package param_test` and setting the parameter of that node to earth

```python
def generate_launch_description():
	  node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
```

 Then, we have to return a `LaunchDescription` object which takes a list of `ROS` nodes we want to run.

```python
def generate_launch_description():
    return LaunchDescription([
			node
    ])
```

**NOTE:** how this is basically the same as `ros2 run my_package param_test`

## Solution

```python
from launch import LaunchDescription
from launch.actions import DeclareLaunchArgument
from launch.substitutions import LaunchConfiguration
from launch_ros.actions import Node

def generate_launch_description():
    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            {'my_parameter': 'earth'}
        ]
    )
    return LaunchDescription(
        [node]
        )
```

# Registering the launch file to the workspace

To register the launch file we have to go into `setup.py` and add in 3 different lines shown below:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGMBYLO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGFmU0iU0xbT%2FWtCzBaqizKBtaF4B6%2BVxB6w6yIGbu2KAiAxgVGcBh9tiguU5lsmpIImumlPJy7c6%2B8UHmNHw0WLsiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHFhO9aujPtYaY7pKtwDTyCr%2BJAA0iju5pCfusD8nyij%2BYlWRTQ3TXUIJxG4v%2BldgcO%2BFKs3X4ybB%2FVaEU%2FyuY4766CyrWvp%2BGhTPGa%2Bdc48woBL3UuB0sNq87aQ6eoTVoKzt%2FvKpbPVprdbqcpcHAyc4SGFtYAyjJEHattjzxUOZDN3gN283iRuq%2BKDDsKKahIIH3NYwMh4q%2Bi%2Fp70T404otruy6VrI3Tl%2FRddoKFxUX2oCRsZT5l9qOd1DQ2MUt7GzxvrKXoDsRTT5xWSbZMVaQvO3tdYG0u8fLiPjdSSpEhBl3RTMiF93MJkOhb%2BGTHklN7EGzV%2BE%2BRwf9InE0r6XOyqulQS7Osj9b%2BHJujJbLic9HwxGek6JrFRX745ciGT4AipWgoiXv%2FCwyVrBAR8QuFbm9b7%2BrxssNWgcUJdftvJrKihh2mrjS0e46mzPE8GdwKar900r1fYeGe982CWuN6bJ4KO0cFlqCi7WL%2FyPuzH3fwpswQV21ziEzQBQnhXHMZH1tr3Evf6xrUouXyIAo4uevV5VCaQ%2FfROdut7dIBu5Lueb66wkGEmXrakqnhgakN2LxDnBi3PlLkN9J%2BTIPni8qG4MPdxGf0uuGwUqtKYzuAMmnVb47aoJDu7S3fU9VlnSiMG3OTkwi%2FPBvgY6pgEv96E2V%2FLAmdnf%2F20AuPtckZdI%2FYQFfFUfv1c2Eq1fnPTBMUOfUEK5HaGN0TbJPf7p2ZX6OY2Xz5kmoSWzqew96gVdiiPZjEb2kpaInzksJGa4BBZyFCp%2FswQ%2F0uNp4ITAXkHcYwz0gj8H5AFvua%2Bn0VFRYO55nVsMn0w%2FIWYawovAbIFmgjjVKCjc6fagW5MewT6ubm1H72hX8Xlzs7mqc2AUcozI&X-Amz-Signature=b888830d55527900eae3b29a4ca38929d533dfdd309d97f4e83ffc93adc32588&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGMBYLO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGFmU0iU0xbT%2FWtCzBaqizKBtaF4B6%2BVxB6w6yIGbu2KAiAxgVGcBh9tiguU5lsmpIImumlPJy7c6%2B8UHmNHw0WLsiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHFhO9aujPtYaY7pKtwDTyCr%2BJAA0iju5pCfusD8nyij%2BYlWRTQ3TXUIJxG4v%2BldgcO%2BFKs3X4ybB%2FVaEU%2FyuY4766CyrWvp%2BGhTPGa%2Bdc48woBL3UuB0sNq87aQ6eoTVoKzt%2FvKpbPVprdbqcpcHAyc4SGFtYAyjJEHattjzxUOZDN3gN283iRuq%2BKDDsKKahIIH3NYwMh4q%2Bi%2Fp70T404otruy6VrI3Tl%2FRddoKFxUX2oCRsZT5l9qOd1DQ2MUt7GzxvrKXoDsRTT5xWSbZMVaQvO3tdYG0u8fLiPjdSSpEhBl3RTMiF93MJkOhb%2BGTHklN7EGzV%2BE%2BRwf9InE0r6XOyqulQS7Osj9b%2BHJujJbLic9HwxGek6JrFRX745ciGT4AipWgoiXv%2FCwyVrBAR8QuFbm9b7%2BrxssNWgcUJdftvJrKihh2mrjS0e46mzPE8GdwKar900r1fYeGe982CWuN6bJ4KO0cFlqCi7WL%2FyPuzH3fwpswQV21ziEzQBQnhXHMZH1tr3Evf6xrUouXyIAo4uevV5VCaQ%2FfROdut7dIBu5Lueb66wkGEmXrakqnhgakN2LxDnBi3PlLkN9J%2BTIPni8qG4MPdxGf0uuGwUqtKYzuAMmnVb47aoJDu7S3fU9VlnSiMG3OTkwi%2FPBvgY6pgEv96E2V%2FLAmdnf%2F20AuPtckZdI%2FYQFfFUfv1c2Eq1fnPTBMUOfUEK5HaGN0TbJPf7p2ZX6OY2Xz5kmoSWzqew96gVdiiPZjEb2kpaInzksJGa4BBZyFCp%2FswQ%2F0uNp4ITAXkHcYwz0gj8H5AFvua%2Bn0VFRYO55nVsMn0w%2FIWYawovAbIFmgjjVKCjc6fagW5MewT6ubm1H72hX8Xlzs7mqc2AUcozI&X-Amz-Signature=073359d0d372223424f98cff89accdad5d1d30c2ff9222bf9d6822c3933476a2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Launch arguments

We can also specify arguments to go into launch files for convenience

For example, we don’t want to reopen the launch file to change what `param_test` prints out every time.

First, at the top of `generate_launch_description()` we would declare a `LaunchConfiguration` and `DeclareLaunchArgument` object. 

`LaunchConfiguration` takes the parameter's name and `DeclareLaunchArgument` takes the name of the same parameter and its default value.

```python
 def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test') 
```

we then can pass the `LaunchConfiguration` object into the Node object and put the `DeclarationLaunchArgument` object into the return array.

```python
def generate_launch_description():
    some_arg = LaunchConfiguration('some_arg')
    launch_arg = DeclareLaunchArgument( 'some_arg', default_value='test')

    node = Node(
        package='my_package',
        executable='param_test',
        parameters=[
            # {'my_parameter': 'earth'}
            {'my_parameter': some_arg}
        ]
    )
    return LaunchDescription(
        [launch_arg, node]
        )
```

now we can simply change the parameter in `python_params_launch.py` by running 

```bash
ros2 launch my_package python_params_launch.py some_arg:=hi
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTGMBYLO%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T181112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGFmU0iU0xbT%2FWtCzBaqizKBtaF4B6%2BVxB6w6yIGbu2KAiAxgVGcBh9tiguU5lsmpIImumlPJy7c6%2B8UHmNHw0WLsiqIBAir%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvHFhO9aujPtYaY7pKtwDTyCr%2BJAA0iju5pCfusD8nyij%2BYlWRTQ3TXUIJxG4v%2BldgcO%2BFKs3X4ybB%2FVaEU%2FyuY4766CyrWvp%2BGhTPGa%2Bdc48woBL3UuB0sNq87aQ6eoTVoKzt%2FvKpbPVprdbqcpcHAyc4SGFtYAyjJEHattjzxUOZDN3gN283iRuq%2BKDDsKKahIIH3NYwMh4q%2Bi%2Fp70T404otruy6VrI3Tl%2FRddoKFxUX2oCRsZT5l9qOd1DQ2MUt7GzxvrKXoDsRTT5xWSbZMVaQvO3tdYG0u8fLiPjdSSpEhBl3RTMiF93MJkOhb%2BGTHklN7EGzV%2BE%2BRwf9InE0r6XOyqulQS7Osj9b%2BHJujJbLic9HwxGek6JrFRX745ciGT4AipWgoiXv%2FCwyVrBAR8QuFbm9b7%2BrxssNWgcUJdftvJrKihh2mrjS0e46mzPE8GdwKar900r1fYeGe982CWuN6bJ4KO0cFlqCi7WL%2FyPuzH3fwpswQV21ziEzQBQnhXHMZH1tr3Evf6xrUouXyIAo4uevV5VCaQ%2FfROdut7dIBu5Lueb66wkGEmXrakqnhgakN2LxDnBi3PlLkN9J%2BTIPni8qG4MPdxGf0uuGwUqtKYzuAMmnVb47aoJDu7S3fU9VlnSiMG3OTkwi%2FPBvgY6pgEv96E2V%2FLAmdnf%2F20AuPtckZdI%2FYQFfFUfv1c2Eq1fnPTBMUOfUEK5HaGN0TbJPf7p2ZX6OY2Xz5kmoSWzqew96gVdiiPZjEb2kpaInzksJGa4BBZyFCp%2FswQ%2F0uNp4ITAXkHcYwz0gj8H5AFvua%2Bn0VFRYO55nVsMn0w%2FIWYawovAbIFmgjjVKCjc6fagW5MewT6ubm1H72hX8Xlzs7mqc2AUcozI&X-Amz-Signature=36fa2e246d5a70e1ffe50887809e33e02e2b91f8b93ee8de3caf118f7217494a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
