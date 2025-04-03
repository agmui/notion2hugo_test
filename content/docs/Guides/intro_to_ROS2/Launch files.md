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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXSWBL5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZCvaTMyz2ySsIfbfLXUX2gCvqdZ858IGTANj%2FYX0XAiEA%2Bhoa9p8%2FVGdKPBHhKxCpKTVWw1EX9bUE7RIfSl01Xv0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk%2F%2BvyvuWzF%2BsowbSrcA9BF%2F8lKoQkL2akM%2F5HRfy0X%2FD5ySpaj4R6gdEFkOsxZit3cO2HEN3FlJTBbRtZBP4pBhqkZvS%2FBb8wuNx8GIDWT9ng31WhKVBuwFL7OClhTPd4XlXeCECDwwuYLhgY6DWCuDyo5oFIpPBmjaine%2FfcqAUp0rKNsz5gXxNPJHj%2Bu9XZ9W5pO3KK528KCXa9RdVHpvNRaB0t7ydPjRhXzaCvKOfoWugwKwPpYMRA5Wo7yOs3I8rZhpgLrFX%2B1xMX46QwyeA8JzpbrlUeYU%2BVqb%2FszjDKzqZNfA%2F6VWzAl11wz8%2BCkNqoxk42r95M9yd9XyhTW10YpXdzbz7d50aRSYweJLGIs4ufSCTm6tURK4Y8QQ7sOT%2FfxqU3P8uzGJTtErIQM8ZmM2zoyIMJzejE8U%2Fptkx9RS8oQ5W9MuM0ggpXXluUr97WvTPOZm6xSLRUC7C9eaE9PnqiLBl348XcpOlMTRAcqcGyXifRbc9PUWTXuwudza7l7nSrWwICmzPZnct4lD%2BVJN5Kdg5vz%2BpH7Pp2lUah4YRUvfIQ9U%2BRtuWCucE%2FUsbcxT9hN%2BDM0cxm7xAgUJk1BZ1coE71i4jzQAXJ9uMRBG1bBEHsZP%2BIA0nvjYvrq3X%2BJ%2BVWAs%2FbfMNj7uL8GOqUBKz5aU%2B9A9ox5VibSlSE67qQS16%2ByF5BYboVGKM6%2FjwzaBrXq4dfx%2Bcn3srErP5j0t7Z8vduuyVMCEvB2Spf3yrUGrJMlFvfdUHIBTlxSY3nin2wUsTXlg6DeDuNHp4TjANchsznlySaUHhfPjaEzNGlvuTKPhenWxUQ1WryyOhLef2RhLWkFM8gAU%2FcSfSu0QF7R7cSSaulUdJTX9KNRNUrkFDpU&X-Amz-Signature=f455d3591a56135bbc357b6413c1f4797b372018886a2d006a68a0f948a2ec41&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXSWBL5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZCvaTMyz2ySsIfbfLXUX2gCvqdZ858IGTANj%2FYX0XAiEA%2Bhoa9p8%2FVGdKPBHhKxCpKTVWw1EX9bUE7RIfSl01Xv0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk%2F%2BvyvuWzF%2BsowbSrcA9BF%2F8lKoQkL2akM%2F5HRfy0X%2FD5ySpaj4R6gdEFkOsxZit3cO2HEN3FlJTBbRtZBP4pBhqkZvS%2FBb8wuNx8GIDWT9ng31WhKVBuwFL7OClhTPd4XlXeCECDwwuYLhgY6DWCuDyo5oFIpPBmjaine%2FfcqAUp0rKNsz5gXxNPJHj%2Bu9XZ9W5pO3KK528KCXa9RdVHpvNRaB0t7ydPjRhXzaCvKOfoWugwKwPpYMRA5Wo7yOs3I8rZhpgLrFX%2B1xMX46QwyeA8JzpbrlUeYU%2BVqb%2FszjDKzqZNfA%2F6VWzAl11wz8%2BCkNqoxk42r95M9yd9XyhTW10YpXdzbz7d50aRSYweJLGIs4ufSCTm6tURK4Y8QQ7sOT%2FfxqU3P8uzGJTtErIQM8ZmM2zoyIMJzejE8U%2Fptkx9RS8oQ5W9MuM0ggpXXluUr97WvTPOZm6xSLRUC7C9eaE9PnqiLBl348XcpOlMTRAcqcGyXifRbc9PUWTXuwudza7l7nSrWwICmzPZnct4lD%2BVJN5Kdg5vz%2BpH7Pp2lUah4YRUvfIQ9U%2BRtuWCucE%2FUsbcxT9hN%2BDM0cxm7xAgUJk1BZ1coE71i4jzQAXJ9uMRBG1bBEHsZP%2BIA0nvjYvrq3X%2BJ%2BVWAs%2FbfMNj7uL8GOqUBKz5aU%2B9A9ox5VibSlSE67qQS16%2ByF5BYboVGKM6%2FjwzaBrXq4dfx%2Bcn3srErP5j0t7Z8vduuyVMCEvB2Spf3yrUGrJMlFvfdUHIBTlxSY3nin2wUsTXlg6DeDuNHp4TjANchsznlySaUHhfPjaEzNGlvuTKPhenWxUQ1WryyOhLef2RhLWkFM8gAU%2FcSfSu0QF7R7cSSaulUdJTX9KNRNUrkFDpU&X-Amz-Signature=1d1245a79fd3ac1db6fcc84d590c087b9504240339e9127543a82c5fd806d201&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYXSWBL5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T081153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBZCvaTMyz2ySsIfbfLXUX2gCvqdZ858IGTANj%2FYX0XAiEA%2Bhoa9p8%2FVGdKPBHhKxCpKTVWw1EX9bUE7RIfSl01Xv0qiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNk%2F%2BvyvuWzF%2BsowbSrcA9BF%2F8lKoQkL2akM%2F5HRfy0X%2FD5ySpaj4R6gdEFkOsxZit3cO2HEN3FlJTBbRtZBP4pBhqkZvS%2FBb8wuNx8GIDWT9ng31WhKVBuwFL7OClhTPd4XlXeCECDwwuYLhgY6DWCuDyo5oFIpPBmjaine%2FfcqAUp0rKNsz5gXxNPJHj%2Bu9XZ9W5pO3KK528KCXa9RdVHpvNRaB0t7ydPjRhXzaCvKOfoWugwKwPpYMRA5Wo7yOs3I8rZhpgLrFX%2B1xMX46QwyeA8JzpbrlUeYU%2BVqb%2FszjDKzqZNfA%2F6VWzAl11wz8%2BCkNqoxk42r95M9yd9XyhTW10YpXdzbz7d50aRSYweJLGIs4ufSCTm6tURK4Y8QQ7sOT%2FfxqU3P8uzGJTtErIQM8ZmM2zoyIMJzejE8U%2Fptkx9RS8oQ5W9MuM0ggpXXluUr97WvTPOZm6xSLRUC7C9eaE9PnqiLBl348XcpOlMTRAcqcGyXifRbc9PUWTXuwudza7l7nSrWwICmzPZnct4lD%2BVJN5Kdg5vz%2BpH7Pp2lUah4YRUvfIQ9U%2BRtuWCucE%2FUsbcxT9hN%2BDM0cxm7xAgUJk1BZ1coE71i4jzQAXJ9uMRBG1bBEHsZP%2BIA0nvjYvrq3X%2BJ%2BVWAs%2FbfMNj7uL8GOqUBKz5aU%2B9A9ox5VibSlSE67qQS16%2ByF5BYboVGKM6%2FjwzaBrXq4dfx%2Bcn3srErP5j0t7Z8vduuyVMCEvB2Spf3yrUGrJMlFvfdUHIBTlxSY3nin2wUsTXlg6DeDuNHp4TjANchsznlySaUHhfPjaEzNGlvuTKPhenWxUQ1WryyOhLef2RhLWkFM8gAU%2FcSfSu0QF7R7cSSaulUdJTX9KNRNUrkFDpU&X-Amz-Signature=d8c46c01680d7b095a8d8724f172b65d813530467c75ff8e1ad0a54ceec0d611&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
