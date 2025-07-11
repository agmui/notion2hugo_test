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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPWWWJN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwxujG15b4K1WU9kXGWdCYoeOUeA6Ybamyf1FadYJCTAiBqs7e63zrzf3XCDurqCHWfbfj0dzREM4cdK19toS204yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJfxveN05mEFje18KtwDg2EB4h8IEY0nfjOFggJaVhtpZjnuJBPwFs6pYqlnK5xF411Cs1S8yrjFou56NkLrxqS9DsUjeiGA5OpvVrgZr4AxqdQqNGm9KdnSAKJfqdrfAHc0Ogb6jyNCZE1Jc6z5Cz1ZjYZHT%2BVcjJB9FjS%2FJQ7J2%2BAVl0n%2BOoB4UHCp5%2B%2FX7VU9poHYNAI40M%2FdIUvNGOxf%2BwSugKXK%2FcQJJCXaxCB%2FjNN%2FzU0aOQxWs1MW35WHO3dinUZqgO8OGXa5i3Yh005j9itnms5jA%2BJ0SoEgc7zk09jmvfVwUy0RxE9%2FELAn55TJHtrCpTfxoG6zIezSa8yJMHjA24jBnnMmsp44JY6BqCOtZlcXsj7R4J1GpNdD0p3JmImaGuXrJLGFEiNCSIkjLj9kXMnqGdJAy0RwnCTqZt6a%2B3n%2Bdx%2B%2BwuPu2Fvvb7z8Gjc24v9ET65idyS6tfq47cdVQ9vNci6d1rwZBLvLOR%2BX%2FG19BxliWRrjG5HwtmGSV2hQN%2B9XY%2BTrJXZVIttfDy6lQgrTfPwi2TZyZn2zRm6M0Knl77vevkHZvhXBSzUOHc%2BHyH3cM0O8ZSH4z%2B3rQXUn03ehGIihVe14AVyHUmoNLp0U1h7bkpXF3rS1vuhdnHzo7MzZQrgwv%2B3BwwY6pgG4CloujEpTZ%2Fd%2FJmf0NlBtgLrwx31e4Osl%2FEpuDtghZ9XSd5jGrRVJ5zgUUxXfeho%2BpjrLb7JEO25%2FtTJ5Zd8IsRKBPdtRrYE%2BtgFv90%2BJZ3I31miWc2IvtUFoGgrvb%2B5HeXjHauO6FqZB64suGIDOGME4y0JJ3zz1J6MpZ%2Fh0ZeF%2FmR0ODgRPIJ1QktUz0BqscQraMGNH052dLea9uiIebKWKefeE&X-Amz-Signature=f48930c69560ee19feb59e3dfb3b2d256481dedce70fadcb987cad08779bd0d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPWWWJN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwxujG15b4K1WU9kXGWdCYoeOUeA6Ybamyf1FadYJCTAiBqs7e63zrzf3XCDurqCHWfbfj0dzREM4cdK19toS204yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJfxveN05mEFje18KtwDg2EB4h8IEY0nfjOFggJaVhtpZjnuJBPwFs6pYqlnK5xF411Cs1S8yrjFou56NkLrxqS9DsUjeiGA5OpvVrgZr4AxqdQqNGm9KdnSAKJfqdrfAHc0Ogb6jyNCZE1Jc6z5Cz1ZjYZHT%2BVcjJB9FjS%2FJQ7J2%2BAVl0n%2BOoB4UHCp5%2B%2FX7VU9poHYNAI40M%2FdIUvNGOxf%2BwSugKXK%2FcQJJCXaxCB%2FjNN%2FzU0aOQxWs1MW35WHO3dinUZqgO8OGXa5i3Yh005j9itnms5jA%2BJ0SoEgc7zk09jmvfVwUy0RxE9%2FELAn55TJHtrCpTfxoG6zIezSa8yJMHjA24jBnnMmsp44JY6BqCOtZlcXsj7R4J1GpNdD0p3JmImaGuXrJLGFEiNCSIkjLj9kXMnqGdJAy0RwnCTqZt6a%2B3n%2Bdx%2B%2BwuPu2Fvvb7z8Gjc24v9ET65idyS6tfq47cdVQ9vNci6d1rwZBLvLOR%2BX%2FG19BxliWRrjG5HwtmGSV2hQN%2B9XY%2BTrJXZVIttfDy6lQgrTfPwi2TZyZn2zRm6M0Knl77vevkHZvhXBSzUOHc%2BHyH3cM0O8ZSH4z%2B3rQXUn03ehGIihVe14AVyHUmoNLp0U1h7bkpXF3rS1vuhdnHzo7MzZQrgwv%2B3BwwY6pgG4CloujEpTZ%2Fd%2FJmf0NlBtgLrwx31e4Osl%2FEpuDtghZ9XSd5jGrRVJ5zgUUxXfeho%2BpjrLb7JEO25%2FtTJ5Zd8IsRKBPdtRrYE%2BtgFv90%2BJZ3I31miWc2IvtUFoGgrvb%2B5HeXjHauO6FqZB64suGIDOGME4y0JJ3zz1J6MpZ%2Fh0ZeF%2FmR0ODgRPIJ1QktUz0BqscQraMGNH052dLea9uiIebKWKefeE&X-Amz-Signature=41eac39e3c03da181b0de43bec79a5b0ba501162ac093c932d606a7b283654d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEPWWWJN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T024744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBwxujG15b4K1WU9kXGWdCYoeOUeA6Ybamyf1FadYJCTAiBqs7e63zrzf3XCDurqCHWfbfj0dzREM4cdK19toS204yqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjJfxveN05mEFje18KtwDg2EB4h8IEY0nfjOFggJaVhtpZjnuJBPwFs6pYqlnK5xF411Cs1S8yrjFou56NkLrxqS9DsUjeiGA5OpvVrgZr4AxqdQqNGm9KdnSAKJfqdrfAHc0Ogb6jyNCZE1Jc6z5Cz1ZjYZHT%2BVcjJB9FjS%2FJQ7J2%2BAVl0n%2BOoB4UHCp5%2B%2FX7VU9poHYNAI40M%2FdIUvNGOxf%2BwSugKXK%2FcQJJCXaxCB%2FjNN%2FzU0aOQxWs1MW35WHO3dinUZqgO8OGXa5i3Yh005j9itnms5jA%2BJ0SoEgc7zk09jmvfVwUy0RxE9%2FELAn55TJHtrCpTfxoG6zIezSa8yJMHjA24jBnnMmsp44JY6BqCOtZlcXsj7R4J1GpNdD0p3JmImaGuXrJLGFEiNCSIkjLj9kXMnqGdJAy0RwnCTqZt6a%2B3n%2Bdx%2B%2BwuPu2Fvvb7z8Gjc24v9ET65idyS6tfq47cdVQ9vNci6d1rwZBLvLOR%2BX%2FG19BxliWRrjG5HwtmGSV2hQN%2B9XY%2BTrJXZVIttfDy6lQgrTfPwi2TZyZn2zRm6M0Knl77vevkHZvhXBSzUOHc%2BHyH3cM0O8ZSH4z%2B3rQXUn03ehGIihVe14AVyHUmoNLp0U1h7bkpXF3rS1vuhdnHzo7MzZQrgwv%2B3BwwY6pgG4CloujEpTZ%2Fd%2FJmf0NlBtgLrwx31e4Osl%2FEpuDtghZ9XSd5jGrRVJ5zgUUxXfeho%2BpjrLb7JEO25%2FtTJ5Zd8IsRKBPdtRrYE%2BtgFv90%2BJZ3I31miWc2IvtUFoGgrvb%2B5HeXjHauO6FqZB64suGIDOGME4y0JJ3zz1J6MpZ%2Fh0ZeF%2FmR0ODgRPIJ1QktUz0BqscQraMGNH052dLea9uiIebKWKefeE&X-Amz-Signature=39d1a124f8981a65cb4da33ad490c7777515d7e4d34c9152ae4acda667c79c5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
