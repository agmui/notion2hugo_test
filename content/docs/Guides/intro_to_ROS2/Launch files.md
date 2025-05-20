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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAMJRLT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNlXUVHmBmQluP%2Fd95J8vXFC%2B7wXSvQQKJB%2F0QCJ%2BSYAiEA%2FGLOBhCmGpE6fLhnKvdVWG4ppOPKGotzK73DsZhnu6YqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF23D%2FIIT3UEO9ErSrcA%2B9flZLgvU9mwn50FyT4xDoEeQbqAUTF9K0k3eJKpgLkjMjCAM3vnX5K%2BAF9UHZG7%2BRIYRvtGsV2A1q34HXnuO30q%2BsYVSqJBIZQACAGqIE%2BjACaJIS7YHmyvw7uSLidGYnlVbBYUpwjegNRnAi39wOFnnXabg4lOVK9Gp%2FnILkEcKt5Pn7nnOmpZY4ck1EwVH%2Fv0uySuGchDtS%2FOpdXeyrvQInDnHbhTqUEtWB7Ccy0Y3hTBcWEWShz%2ByinkH05PEgOOremF%2Fd8r9e4%2F3G%2BhRbGXSBg%2B1wy0beDHDnWKnnlLbEwUpMdmarjCVFqKDqcRh3kCdRhp%2F0zMIzJQ%2F9WVpbCK3c7VBhb4cFEwKJj%2FZijV8AHizvjVCTg03AORWCIf9G%2FR3BqHCaielcQmJa1iSXxJZ%2FhQTnT4k7XdtN1835YAgl3hHSdlWM6xqAvCJeqk1pJzT9wnTKTGnjZwyynYimzzQJgzvcKKeiHOQD5yK5yfGKhGlIfyl04jDYYSrU%2FmlhZ6RHLSAmXbTr86EIjgvmaqPLF8vDtb%2FmSXD%2FIQR3ATWHBj8hz1FccyGgqGHoEffClmdRH1rqXRKRZnwYWxG2cToGix%2BM%2BeFt0Rxl5yTc1aJV4rR26Jb6WI5DgMKHjssEGOqUBY21WDyw5m1an4CG6fbCzw%2F%2FZlg0UfuElhtgVAWqZJutZeF4LIXLFYl%2FICazwL%2BhsWXJsf%2F%2BuqKRBd%2BGtwZFGePs41IWKvNoRFSKiqcIPwAYGlpFm7l1Cl%2FEdMctJZcSAtdf3cLUmgZssz4j4Lyfk%2B7UKqs8lqRXU%2FOkdTuB6UQiD8UwoArtxAAHsfPhVk%2FgCizQHVLHgpqzRWIBvxV%2FfVqRWh0ft&X-Amz-Signature=67defcdd96a2931c0852282a60b4a9afde023c87991a90328c749a807cc9a06a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAMJRLT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNlXUVHmBmQluP%2Fd95J8vXFC%2B7wXSvQQKJB%2F0QCJ%2BSYAiEA%2FGLOBhCmGpE6fLhnKvdVWG4ppOPKGotzK73DsZhnu6YqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF23D%2FIIT3UEO9ErSrcA%2B9flZLgvU9mwn50FyT4xDoEeQbqAUTF9K0k3eJKpgLkjMjCAM3vnX5K%2BAF9UHZG7%2BRIYRvtGsV2A1q34HXnuO30q%2BsYVSqJBIZQACAGqIE%2BjACaJIS7YHmyvw7uSLidGYnlVbBYUpwjegNRnAi39wOFnnXabg4lOVK9Gp%2FnILkEcKt5Pn7nnOmpZY4ck1EwVH%2Fv0uySuGchDtS%2FOpdXeyrvQInDnHbhTqUEtWB7Ccy0Y3hTBcWEWShz%2ByinkH05PEgOOremF%2Fd8r9e4%2F3G%2BhRbGXSBg%2B1wy0beDHDnWKnnlLbEwUpMdmarjCVFqKDqcRh3kCdRhp%2F0zMIzJQ%2F9WVpbCK3c7VBhb4cFEwKJj%2FZijV8AHizvjVCTg03AORWCIf9G%2FR3BqHCaielcQmJa1iSXxJZ%2FhQTnT4k7XdtN1835YAgl3hHSdlWM6xqAvCJeqk1pJzT9wnTKTGnjZwyynYimzzQJgzvcKKeiHOQD5yK5yfGKhGlIfyl04jDYYSrU%2FmlhZ6RHLSAmXbTr86EIjgvmaqPLF8vDtb%2FmSXD%2FIQR3ATWHBj8hz1FccyGgqGHoEffClmdRH1rqXRKRZnwYWxG2cToGix%2BM%2BeFt0Rxl5yTc1aJV4rR26Jb6WI5DgMKHjssEGOqUBY21WDyw5m1an4CG6fbCzw%2F%2FZlg0UfuElhtgVAWqZJutZeF4LIXLFYl%2FICazwL%2BhsWXJsf%2F%2BuqKRBd%2BGtwZFGePs41IWKvNoRFSKiqcIPwAYGlpFm7l1Cl%2FEdMctJZcSAtdf3cLUmgZssz4j4Lyfk%2B7UKqs8lqRXU%2FOkdTuB6UQiD8UwoArtxAAHsfPhVk%2FgCizQHVLHgpqzRWIBvxV%2FfVqRWh0ft&X-Amz-Signature=0555fe44dbc886529f47d0f9c68101f6d6a3483b72a7762d7b83908a386b3c68&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAMJRLT%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDNlXUVHmBmQluP%2Fd95J8vXFC%2B7wXSvQQKJB%2F0QCJ%2BSYAiEA%2FGLOBhCmGpE6fLhnKvdVWG4ppOPKGotzK73DsZhnu6YqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCF23D%2FIIT3UEO9ErSrcA%2B9flZLgvU9mwn50FyT4xDoEeQbqAUTF9K0k3eJKpgLkjMjCAM3vnX5K%2BAF9UHZG7%2BRIYRvtGsV2A1q34HXnuO30q%2BsYVSqJBIZQACAGqIE%2BjACaJIS7YHmyvw7uSLidGYnlVbBYUpwjegNRnAi39wOFnnXabg4lOVK9Gp%2FnILkEcKt5Pn7nnOmpZY4ck1EwVH%2Fv0uySuGchDtS%2FOpdXeyrvQInDnHbhTqUEtWB7Ccy0Y3hTBcWEWShz%2ByinkH05PEgOOremF%2Fd8r9e4%2F3G%2BhRbGXSBg%2B1wy0beDHDnWKnnlLbEwUpMdmarjCVFqKDqcRh3kCdRhp%2F0zMIzJQ%2F9WVpbCK3c7VBhb4cFEwKJj%2FZijV8AHizvjVCTg03AORWCIf9G%2FR3BqHCaielcQmJa1iSXxJZ%2FhQTnT4k7XdtN1835YAgl3hHSdlWM6xqAvCJeqk1pJzT9wnTKTGnjZwyynYimzzQJgzvcKKeiHOQD5yK5yfGKhGlIfyl04jDYYSrU%2FmlhZ6RHLSAmXbTr86EIjgvmaqPLF8vDtb%2FmSXD%2FIQR3ATWHBj8hz1FccyGgqGHoEffClmdRH1rqXRKRZnwYWxG2cToGix%2BM%2BeFt0Rxl5yTc1aJV4rR26Jb6WI5DgMKHjssEGOqUBY21WDyw5m1an4CG6fbCzw%2F%2FZlg0UfuElhtgVAWqZJutZeF4LIXLFYl%2FICazwL%2BhsWXJsf%2F%2BuqKRBd%2BGtwZFGePs41IWKvNoRFSKiqcIPwAYGlpFm7l1Cl%2FEdMctJZcSAtdf3cLUmgZssz4j4Lyfk%2B7UKqs8lqRXU%2FOkdTuB6UQiD8UwoArtxAAHsfPhVk%2FgCizQHVLHgpqzRWIBvxV%2FfVqRWh0ft&X-Amz-Signature=26ac3262c4c395346e8ce145aab994e3b789a6be048ec930ce49af8773422a24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
