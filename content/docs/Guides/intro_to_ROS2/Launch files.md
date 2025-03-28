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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4FSMCT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPT7njK7r6hU9Etip%2FMnBohaE%2F7N1ID5t3saDpSI7%2B%2FAiEAiL6GbuI9POg7PXXUn49FUzrHp3m3OOgvA7hUL9nHE5Aq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNR%2F5E%2B4pDxTfxrwLyrcAzGtpP%2FknUm9C93vQ9kq1zVGI7BRe4YsdvWRtaJxyzFqaFlZLnCzrB%2BxWam24H51ijFurL3UmU2BGfVJRCr2B9QIJSqL5EIlTFhBxCH8ONqZiDJeXysGMMt9WjsTwI0fA1G4vJO5Hj0LFkiprRZuVS%2BmcXlD2pvgb3xQWudEGk1QiPugNAx7l1XjI0ef8%2FEpc3XXmvf9xnS%2BaVkMDu9Cd4AocrvW%2FwwKX4RRBmuQeHX8ufg97dHAWXCg%2FnI9HAzF%2FmJThu44nR8t5RlFsIosjMVX1Q5Gp8NqIvn%2BV15n6fWymxjKGtPdy5HRjdZ%2BS7njYHxLMGcYIjBwYy9SOawrBJuKto01RxHNzWO0I9uNge5rHpQRMDHx3PA9pTdaiF1eV4roKagO0s06fymi5OP90aHjwJ5gd68IFunWhv7MTIxH03TMkneaTC60pPujKawYoze8LspaSiASzzZwhM4d%2BKQ7oJBDCJoLQ976YLKHYq7qMh32nEXaxzuXxh4MLgOIZHpecNlJTPxu1SCvjVbQ%2BWoKKQgMIZLXO6D%2FWexiPoeAL3nwu1kuB%2FlNYehAe5LAzRNH%2BsT%2BnEEc3N8h1Oh7d1qEa0uK27v9JxLszpIjaKqH%2B6KwSFvFQ2%2BrorGiMMmlm78GOqUBZ23ixiA75BiI7ORR0TzJVpog%2Fe3uMhfeQolVJigtfC%2FyaR3EM%2BAoFU7sBkHr6TfnfrwTXS0Y6AgDVkzQ4uIDmv75r2GoQap4xWrXTYoUc%2FCWwq1LZYk9nPEhOJwtm05iEjM0SMYQjkZhBoHWUn48gYqhBtlhCEcv1b0DxSdLmtDus3nlJawVKzRnNl%2BxJaDTn26GlcHwqHVcH6LWlBIZo9JiQJ0j&X-Amz-Signature=087646828cc74240cd3f1c95b768ef74dc1dca6f71419541ee68777a0f88df0a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4FSMCT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPT7njK7r6hU9Etip%2FMnBohaE%2F7N1ID5t3saDpSI7%2B%2FAiEAiL6GbuI9POg7PXXUn49FUzrHp3m3OOgvA7hUL9nHE5Aq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNR%2F5E%2B4pDxTfxrwLyrcAzGtpP%2FknUm9C93vQ9kq1zVGI7BRe4YsdvWRtaJxyzFqaFlZLnCzrB%2BxWam24H51ijFurL3UmU2BGfVJRCr2B9QIJSqL5EIlTFhBxCH8ONqZiDJeXysGMMt9WjsTwI0fA1G4vJO5Hj0LFkiprRZuVS%2BmcXlD2pvgb3xQWudEGk1QiPugNAx7l1XjI0ef8%2FEpc3XXmvf9xnS%2BaVkMDu9Cd4AocrvW%2FwwKX4RRBmuQeHX8ufg97dHAWXCg%2FnI9HAzF%2FmJThu44nR8t5RlFsIosjMVX1Q5Gp8NqIvn%2BV15n6fWymxjKGtPdy5HRjdZ%2BS7njYHxLMGcYIjBwYy9SOawrBJuKto01RxHNzWO0I9uNge5rHpQRMDHx3PA9pTdaiF1eV4roKagO0s06fymi5OP90aHjwJ5gd68IFunWhv7MTIxH03TMkneaTC60pPujKawYoze8LspaSiASzzZwhM4d%2BKQ7oJBDCJoLQ976YLKHYq7qMh32nEXaxzuXxh4MLgOIZHpecNlJTPxu1SCvjVbQ%2BWoKKQgMIZLXO6D%2FWexiPoeAL3nwu1kuB%2FlNYehAe5LAzRNH%2BsT%2BnEEc3N8h1Oh7d1qEa0uK27v9JxLszpIjaKqH%2B6KwSFvFQ2%2BrorGiMMmlm78GOqUBZ23ixiA75BiI7ORR0TzJVpog%2Fe3uMhfeQolVJigtfC%2FyaR3EM%2BAoFU7sBkHr6TfnfrwTXS0Y6AgDVkzQ4uIDmv75r2GoQap4xWrXTYoUc%2FCWwq1LZYk9nPEhOJwtm05iEjM0SMYQjkZhBoHWUn48gYqhBtlhCEcv1b0DxSdLmtDus3nlJawVKzRnNl%2BxJaDTn26GlcHwqHVcH6LWlBIZo9JiQJ0j&X-Amz-Signature=70569063f0e7096eb424b768413a14aec71d3a991493d25d810bd47eb455124b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RD4FSMCT%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPT7njK7r6hU9Etip%2FMnBohaE%2F7N1ID5t3saDpSI7%2B%2FAiEAiL6GbuI9POg7PXXUn49FUzrHp3m3OOgvA7hUL9nHE5Aq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDNR%2F5E%2B4pDxTfxrwLyrcAzGtpP%2FknUm9C93vQ9kq1zVGI7BRe4YsdvWRtaJxyzFqaFlZLnCzrB%2BxWam24H51ijFurL3UmU2BGfVJRCr2B9QIJSqL5EIlTFhBxCH8ONqZiDJeXysGMMt9WjsTwI0fA1G4vJO5Hj0LFkiprRZuVS%2BmcXlD2pvgb3xQWudEGk1QiPugNAx7l1XjI0ef8%2FEpc3XXmvf9xnS%2BaVkMDu9Cd4AocrvW%2FwwKX4RRBmuQeHX8ufg97dHAWXCg%2FnI9HAzF%2FmJThu44nR8t5RlFsIosjMVX1Q5Gp8NqIvn%2BV15n6fWymxjKGtPdy5HRjdZ%2BS7njYHxLMGcYIjBwYy9SOawrBJuKto01RxHNzWO0I9uNge5rHpQRMDHx3PA9pTdaiF1eV4roKagO0s06fymi5OP90aHjwJ5gd68IFunWhv7MTIxH03TMkneaTC60pPujKawYoze8LspaSiASzzZwhM4d%2BKQ7oJBDCJoLQ976YLKHYq7qMh32nEXaxzuXxh4MLgOIZHpecNlJTPxu1SCvjVbQ%2BWoKKQgMIZLXO6D%2FWexiPoeAL3nwu1kuB%2FlNYehAe5LAzRNH%2BsT%2BnEEc3N8h1Oh7d1qEa0uK27v9JxLszpIjaKqH%2B6KwSFvFQ2%2BrorGiMMmlm78GOqUBZ23ixiA75BiI7ORR0TzJVpog%2Fe3uMhfeQolVJigtfC%2FyaR3EM%2BAoFU7sBkHr6TfnfrwTXS0Y6AgDVkzQ4uIDmv75r2GoQap4xWrXTYoUc%2FCWwq1LZYk9nPEhOJwtm05iEjM0SMYQjkZhBoHWUn48gYqhBtlhCEcv1b0DxSdLmtDus3nlJawVKzRnNl%2BxJaDTn26GlcHwqHVcH6LWlBIZo9JiQJ0j&X-Amz-Signature=d49a1069d6d101265a8dd22f1d1b6dccdaf2bc45ff4ac5b6340cbb7156e6c087&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
