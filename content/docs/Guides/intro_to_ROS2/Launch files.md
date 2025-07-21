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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPDUWZY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjHcvAstj0icih4fK%2BmgZ%2F9Aitdb6XvZdcZSKB2t4eQIhANT7Cyh%2BTgyGf2xKKhtMt9ItLpE%2FvqdeMOmKbWfp8R8yKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMsGogfsXbJB8b9UAq3AMzhexIYQKhM%2BbiDpbfLP8js99zm1%2FHjcgThb9XPlJZ4iQUPdB1ZLNYVJ3cDu2K3y9mid8aWiQMuN5AMT0n5AapHQGIoJE8KImzw3Sh64Pe2F%2FVVerM3RZ5dYicCBLJysmCNu1Tk%2BqFxZbGBqM1bRf8rtLkk3v9cIrE8ctOultEk82xlL3mENWi%2BFY%2FeCqH7eL%2FMXvUw3UJdL9bI7bmcoIys1YM8a5IM7fcc6pSUW1rv9b%2BHaCK65IqH1ZVdfCWuOQcsfpinnVHSZEp6KJ3%2FGjJ3QgriuDVfOK5tYuOz%2B%2B7TL8Ibi%2BKtan88fAxNt8X3opLkdtu%2BusLqdWYMB6806mGQE9N1OA6Dk7pY%2FnJs2Kiupq%2FpPvT6gHIzgyiFQPqKwtRFdWwMu%2FT3eL5j%2BB8eY19zfeSxd8yLbQj7sIK0gan%2Bp2GX7zYUGkFG3iNl%2F3mKNkysLmLEuiL3moTozrp6%2BTo62pYdldg7ogAfirv5ZJIeVBNBErne9YXjDtSajn9XWRjhQy858BUboBJG%2FBh%2BNx%2BmaQm%2FrFRYF9Y%2B7vsx4%2FVIWOpg5t6O2FEi3%2B92cCITGEkVEGrBoZIMZH6NfGnmy6cFnaxQ62DtZpnjY9FkEjT7sgfm7EpJZzXqAk0JzCs%2B%2FrDBjqkAWhdnrLLh6oRq57UgfXYNrxlWVq3u7PESC1TQwDfgVz0cx1oKbR2jmem9vXCfOC3KbRKdCVuLJG4fC3iRNZ0aXcvp5W8ewtkK2COV0nY2o1nDa8%2F24yXCCNxsRfCpZr4YUd0LiSP%2BDDEudKgKV2%2BA7Fmha%2F73WBZmxkRyi9JRqSTn5EWy1QxpgzZfMJEGJFotT9sppw0KL5lk8Ou4q4AdudAxqqv&X-Amz-Signature=ec3e516d4c49564fa311128c4b349d60d247063c9e62146a1d180291903685d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPDUWZY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjHcvAstj0icih4fK%2BmgZ%2F9Aitdb6XvZdcZSKB2t4eQIhANT7Cyh%2BTgyGf2xKKhtMt9ItLpE%2FvqdeMOmKbWfp8R8yKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMsGogfsXbJB8b9UAq3AMzhexIYQKhM%2BbiDpbfLP8js99zm1%2FHjcgThb9XPlJZ4iQUPdB1ZLNYVJ3cDu2K3y9mid8aWiQMuN5AMT0n5AapHQGIoJE8KImzw3Sh64Pe2F%2FVVerM3RZ5dYicCBLJysmCNu1Tk%2BqFxZbGBqM1bRf8rtLkk3v9cIrE8ctOultEk82xlL3mENWi%2BFY%2FeCqH7eL%2FMXvUw3UJdL9bI7bmcoIys1YM8a5IM7fcc6pSUW1rv9b%2BHaCK65IqH1ZVdfCWuOQcsfpinnVHSZEp6KJ3%2FGjJ3QgriuDVfOK5tYuOz%2B%2B7TL8Ibi%2BKtan88fAxNt8X3opLkdtu%2BusLqdWYMB6806mGQE9N1OA6Dk7pY%2FnJs2Kiupq%2FpPvT6gHIzgyiFQPqKwtRFdWwMu%2FT3eL5j%2BB8eY19zfeSxd8yLbQj7sIK0gan%2Bp2GX7zYUGkFG3iNl%2F3mKNkysLmLEuiL3moTozrp6%2BTo62pYdldg7ogAfirv5ZJIeVBNBErne9YXjDtSajn9XWRjhQy858BUboBJG%2FBh%2BNx%2BmaQm%2FrFRYF9Y%2B7vsx4%2FVIWOpg5t6O2FEi3%2B92cCITGEkVEGrBoZIMZH6NfGnmy6cFnaxQ62DtZpnjY9FkEjT7sgfm7EpJZzXqAk0JzCs%2B%2FrDBjqkAWhdnrLLh6oRq57UgfXYNrxlWVq3u7PESC1TQwDfgVz0cx1oKbR2jmem9vXCfOC3KbRKdCVuLJG4fC3iRNZ0aXcvp5W8ewtkK2COV0nY2o1nDa8%2F24yXCCNxsRfCpZr4YUd0LiSP%2BDDEudKgKV2%2BA7Fmha%2F73WBZmxkRyi9JRqSTn5EWy1QxpgzZfMJEGJFotT9sppw0KL5lk8Ou4q4AdudAxqqv&X-Amz-Signature=fe3cfb0237e60245c691c69e385422f29129c11d6b03e9b9e66ca174ccd97b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBPDUWZY%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYjHcvAstj0icih4fK%2BmgZ%2F9Aitdb6XvZdcZSKB2t4eQIhANT7Cyh%2BTgyGf2xKKhtMt9ItLpE%2FvqdeMOmKbWfp8R8yKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMsGogfsXbJB8b9UAq3AMzhexIYQKhM%2BbiDpbfLP8js99zm1%2FHjcgThb9XPlJZ4iQUPdB1ZLNYVJ3cDu2K3y9mid8aWiQMuN5AMT0n5AapHQGIoJE8KImzw3Sh64Pe2F%2FVVerM3RZ5dYicCBLJysmCNu1Tk%2BqFxZbGBqM1bRf8rtLkk3v9cIrE8ctOultEk82xlL3mENWi%2BFY%2FeCqH7eL%2FMXvUw3UJdL9bI7bmcoIys1YM8a5IM7fcc6pSUW1rv9b%2BHaCK65IqH1ZVdfCWuOQcsfpinnVHSZEp6KJ3%2FGjJ3QgriuDVfOK5tYuOz%2B%2B7TL8Ibi%2BKtan88fAxNt8X3opLkdtu%2BusLqdWYMB6806mGQE9N1OA6Dk7pY%2FnJs2Kiupq%2FpPvT6gHIzgyiFQPqKwtRFdWwMu%2FT3eL5j%2BB8eY19zfeSxd8yLbQj7sIK0gan%2Bp2GX7zYUGkFG3iNl%2F3mKNkysLmLEuiL3moTozrp6%2BTo62pYdldg7ogAfirv5ZJIeVBNBErne9YXjDtSajn9XWRjhQy858BUboBJG%2FBh%2BNx%2BmaQm%2FrFRYF9Y%2B7vsx4%2FVIWOpg5t6O2FEi3%2B92cCITGEkVEGrBoZIMZH6NfGnmy6cFnaxQ62DtZpnjY9FkEjT7sgfm7EpJZzXqAk0JzCs%2B%2FrDBjqkAWhdnrLLh6oRq57UgfXYNrxlWVq3u7PESC1TQwDfgVz0cx1oKbR2jmem9vXCfOC3KbRKdCVuLJG4fC3iRNZ0aXcvp5W8ewtkK2COV0nY2o1nDa8%2F24yXCCNxsRfCpZr4YUd0LiSP%2BDDEudKgKV2%2BA7Fmha%2F73WBZmxkRyi9JRqSTn5EWy1QxpgzZfMJEGJFotT9sppw0KL5lk8Ou4q4AdudAxqqv&X-Amz-Signature=890bb712d389ed3daf9748833d02c1a73d8c68cc5a7fddbc010c610f230685e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
