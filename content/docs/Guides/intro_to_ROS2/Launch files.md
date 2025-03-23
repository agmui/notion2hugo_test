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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKTQXMV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHl1zTYTzmt97LuBqk9fnafjvKvdUcCdT0HhgLP%2FhOdIAiEAxTpgGBKUG8pr8K2bhQ0T68b%2F6oqLyMb6LPckDc%2FqJqcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaTiQ9pNYiSkBkRNyrcA15wPqjxfBeiNKmzxOMBZi2N1O%2B8%2FY3LIBj55UehSBBeYLRhh1W%2BPR%2BdoGBvGtXWkPiJ6jMdXuW%2Blm9M5b4dFjyKMvAktMuX3OSmhJRTsLvaczo%2B2zZc3yWnn17%2FY7o1QsVMiZ%2FVCyRg032W2tpMmqWjtgHberhz5RXEKAHQi0WRIMaR8JV7PaT%2FucEhfV%2BQLS2i21pX7C5nxBhtFhMlmD5Qq8%2BiF2GGR8vc2%2B0rAbB%2FxXhmRhhzfyfQ1mxsG7FIOMwL%2BZOmPJ%2FlDhEE9I%2FpqAcx8ZZOHkDfofkT%2BizlJDVaECVpzYkjinHET%2Ft6t%2BpyK6D%2FPEJK7Tbgyox1pnWkfU7t6Zp5kO0R%2Bn58k%2BlbhRkujMpy0a6F3gdwRoTfX9ZlUlnSPjkq09HNHxmU9IGJl47PVCdwgWxx0OCj9mw4iBxXUKzmafCqkT8mHFIfX9BNFjeLxyvG5FvAbNFR5poBUR%2FVSTh1%2FEPxyzEwwJnEo3pcJVyuzmFUyD2K2YKjg51Xg01npMSfUgYucXOnaGS0vqQ8OcrESFbcFQ6P3nvaxWT%2FYwV1yJaPMZGaFL%2BE%2Fmhs3j37KrhTXf8ppZpjvMKpKL6w98%2BbC1hvMOrg1JSVJwSnS1WQ%2FvZWJ6qIHkPjMLrN%2F74GOqUBDTD%2Fk7b4LD%2Bpc2o%2FQVJJBV7rr4boBZbp%2BJM80GqQ%2BjRUG%2FtnWLKf5nRgdxS2xqZq5AzBEP6ulzzYPu5CG1ewi6bswZcCEcn2%2FT7RnLmxt3vkbhwOXnSG5Lk9md3%2Fh6rV1JY9Gy%2F%2FPSVXORzWwqwPwl2%2BG5jlGitxXyeZ%2BvJ4BFnGsaR9LFO%2BlaZvaTN5X8myBGcwVmha0vYkpiyKpHTOOeyKTyfN&X-Amz-Signature=3a34d6ad6281772af438e65e56af22cc93af2395206d8bd5254096a0eab23097&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKTQXMV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHl1zTYTzmt97LuBqk9fnafjvKvdUcCdT0HhgLP%2FhOdIAiEAxTpgGBKUG8pr8K2bhQ0T68b%2F6oqLyMb6LPckDc%2FqJqcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaTiQ9pNYiSkBkRNyrcA15wPqjxfBeiNKmzxOMBZi2N1O%2B8%2FY3LIBj55UehSBBeYLRhh1W%2BPR%2BdoGBvGtXWkPiJ6jMdXuW%2Blm9M5b4dFjyKMvAktMuX3OSmhJRTsLvaczo%2B2zZc3yWnn17%2FY7o1QsVMiZ%2FVCyRg032W2tpMmqWjtgHberhz5RXEKAHQi0WRIMaR8JV7PaT%2FucEhfV%2BQLS2i21pX7C5nxBhtFhMlmD5Qq8%2BiF2GGR8vc2%2B0rAbB%2FxXhmRhhzfyfQ1mxsG7FIOMwL%2BZOmPJ%2FlDhEE9I%2FpqAcx8ZZOHkDfofkT%2BizlJDVaECVpzYkjinHET%2Ft6t%2BpyK6D%2FPEJK7Tbgyox1pnWkfU7t6Zp5kO0R%2Bn58k%2BlbhRkujMpy0a6F3gdwRoTfX9ZlUlnSPjkq09HNHxmU9IGJl47PVCdwgWxx0OCj9mw4iBxXUKzmafCqkT8mHFIfX9BNFjeLxyvG5FvAbNFR5poBUR%2FVSTh1%2FEPxyzEwwJnEo3pcJVyuzmFUyD2K2YKjg51Xg01npMSfUgYucXOnaGS0vqQ8OcrESFbcFQ6P3nvaxWT%2FYwV1yJaPMZGaFL%2BE%2Fmhs3j37KrhTXf8ppZpjvMKpKL6w98%2BbC1hvMOrg1JSVJwSnS1WQ%2FvZWJ6qIHkPjMLrN%2F74GOqUBDTD%2Fk7b4LD%2Bpc2o%2FQVJJBV7rr4boBZbp%2BJM80GqQ%2BjRUG%2FtnWLKf5nRgdxS2xqZq5AzBEP6ulzzYPu5CG1ewi6bswZcCEcn2%2FT7RnLmxt3vkbhwOXnSG5Lk9md3%2Fh6rV1JY9Gy%2F%2FPSVXORzWwqwPwl2%2BG5jlGitxXyeZ%2BvJ4BFnGsaR9LFO%2BlaZvaTN5X8myBGcwVmha0vYkpiyKpHTOOeyKTyfN&X-Amz-Signature=daf032c8b4cc78daeea6f348dff34de86504e294399cf59ad5df2285f2ddc1d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OKTQXMV%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T110119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIHl1zTYTzmt97LuBqk9fnafjvKvdUcCdT0HhgLP%2FhOdIAiEAxTpgGBKUG8pr8K2bhQ0T68b%2F6oqLyMb6LPckDc%2FqJqcqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaTiQ9pNYiSkBkRNyrcA15wPqjxfBeiNKmzxOMBZi2N1O%2B8%2FY3LIBj55UehSBBeYLRhh1W%2BPR%2BdoGBvGtXWkPiJ6jMdXuW%2Blm9M5b4dFjyKMvAktMuX3OSmhJRTsLvaczo%2B2zZc3yWnn17%2FY7o1QsVMiZ%2FVCyRg032W2tpMmqWjtgHberhz5RXEKAHQi0WRIMaR8JV7PaT%2FucEhfV%2BQLS2i21pX7C5nxBhtFhMlmD5Qq8%2BiF2GGR8vc2%2B0rAbB%2FxXhmRhhzfyfQ1mxsG7FIOMwL%2BZOmPJ%2FlDhEE9I%2FpqAcx8ZZOHkDfofkT%2BizlJDVaECVpzYkjinHET%2Ft6t%2BpyK6D%2FPEJK7Tbgyox1pnWkfU7t6Zp5kO0R%2Bn58k%2BlbhRkujMpy0a6F3gdwRoTfX9ZlUlnSPjkq09HNHxmU9IGJl47PVCdwgWxx0OCj9mw4iBxXUKzmafCqkT8mHFIfX9BNFjeLxyvG5FvAbNFR5poBUR%2FVSTh1%2FEPxyzEwwJnEo3pcJVyuzmFUyD2K2YKjg51Xg01npMSfUgYucXOnaGS0vqQ8OcrESFbcFQ6P3nvaxWT%2FYwV1yJaPMZGaFL%2BE%2Fmhs3j37KrhTXf8ppZpjvMKpKL6w98%2BbC1hvMOrg1JSVJwSnS1WQ%2FvZWJ6qIHkPjMLrN%2F74GOqUBDTD%2Fk7b4LD%2Bpc2o%2FQVJJBV7rr4boBZbp%2BJM80GqQ%2BjRUG%2FtnWLKf5nRgdxS2xqZq5AzBEP6ulzzYPu5CG1ewi6bswZcCEcn2%2FT7RnLmxt3vkbhwOXnSG5Lk9md3%2Fh6rV1JY9Gy%2F%2FPSVXORzWwqwPwl2%2BG5jlGitxXyeZ%2BvJ4BFnGsaR9LFO%2BlaZvaTN5X8myBGcwVmha0vYkpiyKpHTOOeyKTyfN&X-Amz-Signature=4a1d18a434b1c88bc2ecc21ae9b3ad2f52984498fa32e4a6398324c23c9efd0a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
