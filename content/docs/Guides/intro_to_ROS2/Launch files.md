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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUIW42U%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B9zxIFElrgl7fLmakHJYlrlGHOwr1%2FKmfLlCNuY4ZYAiEAr9aXjo8mxB1%2BZNmdgZp9310dA7SmczfKajvGOW9gRwoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvtm%2FNkmH4NIbCzQircAzvwk21PmU0jaIkyNVb7OR1XCRsAWESARcfiPDXG4ENRkzwH1uMniNr2jJHsZihAmjqxa%2B4CjhvRJWq6EtH8QGeX3SXilv%2FqxJ1hltshfy1348jyMpPRttoYYJXBjfqbE6ZDKWKO6416NBIXJLkfEhXp4JPAuwI5jKFtiO%2BsFFPUxzoDI70jxaE9x5fsQXg65GEkUuW97aGARF%2ButHflef4q%2FP%2BQgdpeqiIl2oAsUMAzslTDj9e8wxzgePTGG8brFbS1jyfi6TPciDQEa%2FyOi%2FwXKz7Mm1asKt2IKTuBf49lDIqLyb1ubPY2IP9Dq7rgwHdRIN3pVJiF71JD3A4Fg%2FPHxpRQIg4I1gpMUIzVwUqD%2BIx1cMekGbVylcJ%2FBf6I51MGdFgWogtV1aK7VOfy9%2BhPDTHV0btItS2btlxHzdADLq8L7SOocql8iJhdh%2B6t23C9kjTazHG%2FF68mUm%2FONJwAEp%2FJ9iavZUJKDcf6iQ5rpksUmWkNoNr%2Bx6H5ZZPPA7HPrPT4j007nYLwTXBZSiRfojv8tXQ%2BvoWyJYTZxf9Aw3vvPCpS1h34AxF7KCf%2BLNRcfw7ddRBOg1uVrf0xnM0IU5UFBoPCHkLoqA8J0FDJMtX7odZxGfIgDXBhMPfm%2F7wGOqUBUrbnKyPUlbGyHtq7nuBLUk6y%2BbcGuMA3E%2BUi2c%2BXD%2BbyoO2zrwYxj%2FWBo7Cue8LU%2BDbxq%2BcEarjnQBPHYGdrtbliVPUD9oFVJoRV5pDtdjF4nw%2BIoTaY0y1UVcBKemDH5Y9eGAGk%2Fpl3g5EJy40ubLsvwXB%2BByhOBV7bU%2F2v3lOrQGsi69Zz%2Bx4mOWo9F0Eu2M5D136b1BTZamfbBK4IoJTxIOGI&X-Amz-Signature=dbffcdd7a3d1e4f63923390fabe732cfb12884079ced9b2e372cc77b5dea4007&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUIW42U%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B9zxIFElrgl7fLmakHJYlrlGHOwr1%2FKmfLlCNuY4ZYAiEAr9aXjo8mxB1%2BZNmdgZp9310dA7SmczfKajvGOW9gRwoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvtm%2FNkmH4NIbCzQircAzvwk21PmU0jaIkyNVb7OR1XCRsAWESARcfiPDXG4ENRkzwH1uMniNr2jJHsZihAmjqxa%2B4CjhvRJWq6EtH8QGeX3SXilv%2FqxJ1hltshfy1348jyMpPRttoYYJXBjfqbE6ZDKWKO6416NBIXJLkfEhXp4JPAuwI5jKFtiO%2BsFFPUxzoDI70jxaE9x5fsQXg65GEkUuW97aGARF%2ButHflef4q%2FP%2BQgdpeqiIl2oAsUMAzslTDj9e8wxzgePTGG8brFbS1jyfi6TPciDQEa%2FyOi%2FwXKz7Mm1asKt2IKTuBf49lDIqLyb1ubPY2IP9Dq7rgwHdRIN3pVJiF71JD3A4Fg%2FPHxpRQIg4I1gpMUIzVwUqD%2BIx1cMekGbVylcJ%2FBf6I51MGdFgWogtV1aK7VOfy9%2BhPDTHV0btItS2btlxHzdADLq8L7SOocql8iJhdh%2B6t23C9kjTazHG%2FF68mUm%2FONJwAEp%2FJ9iavZUJKDcf6iQ5rpksUmWkNoNr%2Bx6H5ZZPPA7HPrPT4j007nYLwTXBZSiRfojv8tXQ%2BvoWyJYTZxf9Aw3vvPCpS1h34AxF7KCf%2BLNRcfw7ddRBOg1uVrf0xnM0IU5UFBoPCHkLoqA8J0FDJMtX7odZxGfIgDXBhMPfm%2F7wGOqUBUrbnKyPUlbGyHtq7nuBLUk6y%2BbcGuMA3E%2BUi2c%2BXD%2BbyoO2zrwYxj%2FWBo7Cue8LU%2BDbxq%2BcEarjnQBPHYGdrtbliVPUD9oFVJoRV5pDtdjF4nw%2BIoTaY0y1UVcBKemDH5Y9eGAGk%2Fpl3g5EJy40ubLsvwXB%2BByhOBV7bU%2F2v3lOrQGsi69Zz%2Bx4mOWo9F0Eu2M5D136b1BTZamfbBK4IoJTxIOGI&X-Amz-Signature=60252dfb7b329ce14021abc83e30aefa2f84ca4d3311055e44f7b9f60cfa5d18&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YUIW42U%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T230112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2B9zxIFElrgl7fLmakHJYlrlGHOwr1%2FKmfLlCNuY4ZYAiEAr9aXjo8mxB1%2BZNmdgZp9310dA7SmczfKajvGOW9gRwoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvtm%2FNkmH4NIbCzQircAzvwk21PmU0jaIkyNVb7OR1XCRsAWESARcfiPDXG4ENRkzwH1uMniNr2jJHsZihAmjqxa%2B4CjhvRJWq6EtH8QGeX3SXilv%2FqxJ1hltshfy1348jyMpPRttoYYJXBjfqbE6ZDKWKO6416NBIXJLkfEhXp4JPAuwI5jKFtiO%2BsFFPUxzoDI70jxaE9x5fsQXg65GEkUuW97aGARF%2ButHflef4q%2FP%2BQgdpeqiIl2oAsUMAzslTDj9e8wxzgePTGG8brFbS1jyfi6TPciDQEa%2FyOi%2FwXKz7Mm1asKt2IKTuBf49lDIqLyb1ubPY2IP9Dq7rgwHdRIN3pVJiF71JD3A4Fg%2FPHxpRQIg4I1gpMUIzVwUqD%2BIx1cMekGbVylcJ%2FBf6I51MGdFgWogtV1aK7VOfy9%2BhPDTHV0btItS2btlxHzdADLq8L7SOocql8iJhdh%2B6t23C9kjTazHG%2FF68mUm%2FONJwAEp%2FJ9iavZUJKDcf6iQ5rpksUmWkNoNr%2Bx6H5ZZPPA7HPrPT4j007nYLwTXBZSiRfojv8tXQ%2BvoWyJYTZxf9Aw3vvPCpS1h34AxF7KCf%2BLNRcfw7ddRBOg1uVrf0xnM0IU5UFBoPCHkLoqA8J0FDJMtX7odZxGfIgDXBhMPfm%2F7wGOqUBUrbnKyPUlbGyHtq7nuBLUk6y%2BbcGuMA3E%2BUi2c%2BXD%2BbyoO2zrwYxj%2FWBo7Cue8LU%2BDbxq%2BcEarjnQBPHYGdrtbliVPUD9oFVJoRV5pDtdjF4nw%2BIoTaY0y1UVcBKemDH5Y9eGAGk%2Fpl3g5EJy40ubLsvwXB%2BByhOBV7bU%2F2v3lOrQGsi69Zz%2Bx4mOWo9F0Eu2M5D136b1BTZamfbBK4IoJTxIOGI&X-Amz-Signature=39a9dce7701948ab9deea96667fff39e4defac8ff1e53dca0012a416d37c2ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
