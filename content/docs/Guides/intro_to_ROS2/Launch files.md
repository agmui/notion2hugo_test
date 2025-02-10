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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVJNOSN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPh92JhBq48dyu2o19p%2FnD5jc5X13P2kiELtb%2FEnO6AIgPP44b3fwPlypM8KpjX6IipoMfwV7imqknQ2zu1k7LhoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBC6BrAQP0JhBWRayrcAzqO9YKQnBoqaYpyDou0O75fZO2gx2TWMtNoYPbPj%2BtFRpQI0ML6p3p%2FRbjUlVdbfqAsrw240VwE%2F0JP%2F68PpugM3xGW4LaKq7nYF5QYcFS3yJ2xpZp6ZLUynrvgdx3etJH2wGtGzJabWob%2BjsTiO499%2BcSFs5S%2FLVgsThbBRwL0VOsOfyT2U9GbKkGF5NrJXJEklqnxGg8DK3Zb4WkSNUXg8pX7x6CUqt68NJ11%2B9RQ8dl2cn65weS9vd6u%2FtTsvWIb%2Fq%2FHgz22qpeGj2Ili2zjWAJEvBk3qLQT82ZlSW6yVX3ydg6oUoxQwRg8x1tZexfXAH2MxmgZ771YVZhH86Nt3h8byflmJumc1AIetWDntFFvAXmyToAd0LmmUxJPpslm17Ft7YV6pXaBnwdIAwFb5Kom1aeBBAx10rSxBxEpBMsOQ22HaikbSlDlkRc3sQ%2BCyVCeYXKPaxLvs3zrGFLEU0zOXQeN5xX%2F9wTLE5ddgW86fLhVG0Ay0HxN0qd47DAWMpt7EVCooNrBaUh4MUQRZ0PAI1CKME3J5SFirJ3tsQtFuNm5h5Cr7B3gZPS2pjZHwcMcraBfYPk%2Fxqk0rBQ4Ll1DeDGc36JnuCF4nKVphMn5yGYKab3NTZCxMIGup70GOqUBvsjWXZN667ZyuTDk%2FC5VJB13KO5Lxw9AjmM2cBeGWqYpt2Owt1UcMyakgm8xHIT31oKZ128OTwlRA2L8df6aDSGmkrxjTWHGOOkns5bAX3gltYZgimVnM7ToSlWfAsvHbDad0on13mjdtaBQL9sMpYvzwVibUUQsQ7tCTiuyOeM1T6SSRSjIhJy%2F%2BrWg%2F0qcRNo2U8o0l4OWPqlMnp1hUlUJpY5V&X-Amz-Signature=f48ee3fd994e112d35af17ba1c7e3dbc8f2be99572aba3c0fb9c56fb68bbc62a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVJNOSN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPh92JhBq48dyu2o19p%2FnD5jc5X13P2kiELtb%2FEnO6AIgPP44b3fwPlypM8KpjX6IipoMfwV7imqknQ2zu1k7LhoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBC6BrAQP0JhBWRayrcAzqO9YKQnBoqaYpyDou0O75fZO2gx2TWMtNoYPbPj%2BtFRpQI0ML6p3p%2FRbjUlVdbfqAsrw240VwE%2F0JP%2F68PpugM3xGW4LaKq7nYF5QYcFS3yJ2xpZp6ZLUynrvgdx3etJH2wGtGzJabWob%2BjsTiO499%2BcSFs5S%2FLVgsThbBRwL0VOsOfyT2U9GbKkGF5NrJXJEklqnxGg8DK3Zb4WkSNUXg8pX7x6CUqt68NJ11%2B9RQ8dl2cn65weS9vd6u%2FtTsvWIb%2Fq%2FHgz22qpeGj2Ili2zjWAJEvBk3qLQT82ZlSW6yVX3ydg6oUoxQwRg8x1tZexfXAH2MxmgZ771YVZhH86Nt3h8byflmJumc1AIetWDntFFvAXmyToAd0LmmUxJPpslm17Ft7YV6pXaBnwdIAwFb5Kom1aeBBAx10rSxBxEpBMsOQ22HaikbSlDlkRc3sQ%2BCyVCeYXKPaxLvs3zrGFLEU0zOXQeN5xX%2F9wTLE5ddgW86fLhVG0Ay0HxN0qd47DAWMpt7EVCooNrBaUh4MUQRZ0PAI1CKME3J5SFirJ3tsQtFuNm5h5Cr7B3gZPS2pjZHwcMcraBfYPk%2Fxqk0rBQ4Ll1DeDGc36JnuCF4nKVphMn5yGYKab3NTZCxMIGup70GOqUBvsjWXZN667ZyuTDk%2FC5VJB13KO5Lxw9AjmM2cBeGWqYpt2Owt1UcMyakgm8xHIT31oKZ128OTwlRA2L8df6aDSGmkrxjTWHGOOkns5bAX3gltYZgimVnM7ToSlWfAsvHbDad0on13mjdtaBQL9sMpYvzwVibUUQsQ7tCTiuyOeM1T6SSRSjIhJy%2F%2BrWg%2F0qcRNo2U8o0l4OWPqlMnp1hUlUJpY5V&X-Amz-Signature=63f9d7c63f8f934ebdfda9c329bae2dd7a9e6177146d991ffb924f96c8d27578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKVJNOSN%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T121358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuPh92JhBq48dyu2o19p%2FnD5jc5X13P2kiELtb%2FEnO6AIgPP44b3fwPlypM8KpjX6IipoMfwV7imqknQ2zu1k7LhoqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFBC6BrAQP0JhBWRayrcAzqO9YKQnBoqaYpyDou0O75fZO2gx2TWMtNoYPbPj%2BtFRpQI0ML6p3p%2FRbjUlVdbfqAsrw240VwE%2F0JP%2F68PpugM3xGW4LaKq7nYF5QYcFS3yJ2xpZp6ZLUynrvgdx3etJH2wGtGzJabWob%2BjsTiO499%2BcSFs5S%2FLVgsThbBRwL0VOsOfyT2U9GbKkGF5NrJXJEklqnxGg8DK3Zb4WkSNUXg8pX7x6CUqt68NJ11%2B9RQ8dl2cn65weS9vd6u%2FtTsvWIb%2Fq%2FHgz22qpeGj2Ili2zjWAJEvBk3qLQT82ZlSW6yVX3ydg6oUoxQwRg8x1tZexfXAH2MxmgZ771YVZhH86Nt3h8byflmJumc1AIetWDntFFvAXmyToAd0LmmUxJPpslm17Ft7YV6pXaBnwdIAwFb5Kom1aeBBAx10rSxBxEpBMsOQ22HaikbSlDlkRc3sQ%2BCyVCeYXKPaxLvs3zrGFLEU0zOXQeN5xX%2F9wTLE5ddgW86fLhVG0Ay0HxN0qd47DAWMpt7EVCooNrBaUh4MUQRZ0PAI1CKME3J5SFirJ3tsQtFuNm5h5Cr7B3gZPS2pjZHwcMcraBfYPk%2Fxqk0rBQ4Ll1DeDGc36JnuCF4nKVphMn5yGYKab3NTZCxMIGup70GOqUBvsjWXZN667ZyuTDk%2FC5VJB13KO5Lxw9AjmM2cBeGWqYpt2Owt1UcMyakgm8xHIT31oKZ128OTwlRA2L8df6aDSGmkrxjTWHGOOkns5bAX3gltYZgimVnM7ToSlWfAsvHbDad0on13mjdtaBQL9sMpYvzwVibUUQsQ7tCTiuyOeM1T6SSRSjIhJy%2F%2BrWg%2F0qcRNo2U8o0l4OWPqlMnp1hUlUJpY5V&X-Amz-Signature=9369ce6fff745e6725705835f1c89d427d592d319763298272e6a0f8f3378f58&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
