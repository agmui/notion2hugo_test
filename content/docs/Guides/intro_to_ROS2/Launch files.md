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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ2V7SG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA%2Brn%2BhXoOJrl0PrVgP17%2FVVhozHH1Zi1XXVEmhil2heAiEAzBig8x0mZrHI66wzCUlMEVu8NMgTQyM5pUqB63ag8okq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAPw656J2zmNyPtQWyrcA6xDxAsASBkqN%2Fc6uj8xcnTf%2FXe8shZMiFqAaFM71vMIsnKxLBRnlfRGIv%2FfTBA3M%2FkZhKfABxJtYla38Z%2F%2FDB0SzuGGwOkzHpkvdS%2BOy9cHfxx2%2FcbxjEzSsPPFNEPutV4jlicRTxZslfFJm%2FTqrDB67Cf3bO3QNn9iSSib0XiNC7HRyNXMn1yxvqew4NaTQwEQO%2BSyxE4F%2FoTCD6i3puvtpnTc8d0lzlhugy9cKd87qJ%2BZDIgL33hmpepyAfQ9zqxl5L%2BZ%2F1mEo5WPH%2FauJTCtrLjBE%2B%2FORMlS9CK0xDlfvosGXo4hhsBBLKKhTpfRFTm4jGvUbnpjpltZuTE9%2FFURCiRWM6qcdIyCMbALZgqHwF6A8CGa4xSZ1aIiiElibCCBY%2FXCF4IyXoIB07m%2FaEhK%2FFMaSZ1IlL6qoFKNSCksTK8%2Bf%2Bnf9X5xwi%2FQz4HDuthb3rf%2F%2BSLFTrudHOZ5tP%2BQvk0YywJv5LICh%2FE2m%2Fo9e5XCl9pA6QuA4L7ndA3%2FrXT47F6AfPSjdJ38sqPECvaH%2FRm3R7J3e2NYo4xrCiooNfH2bZUCeFSmybNVpITT4TQZONBURi6JER0RdrOgB7s%2BnNmONVF7SFscqh7qPTXax0BTIAXgFochBQ7cMPiEusIGOqUBegpsWslzbfHZ6uIYdFWAWkh7OMwpxbaKbWL8Utta1eGRJJmlco0YtJYQ%2FLJh7V8FUkpq5iFRXvPZQUjWdLGVNgHEoNj18q8nBCjpaGtV2b8abz4Axs1kk2qn%2Bs7VvZw9TeRyPNzOwWsM9glhNPqqTyBByZiQ8%2BP5aUs9sDE8kb6PLzybVl5Xe%2BQcFXTaEixYUwzau0O%2F4MAFzt4WF0Pi4DWoh0jS&X-Amz-Signature=485f15150d6936e2e9886ce6563fd28783b188b485bd7f1a99ee95476985de86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ2V7SG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA%2Brn%2BhXoOJrl0PrVgP17%2FVVhozHH1Zi1XXVEmhil2heAiEAzBig8x0mZrHI66wzCUlMEVu8NMgTQyM5pUqB63ag8okq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAPw656J2zmNyPtQWyrcA6xDxAsASBkqN%2Fc6uj8xcnTf%2FXe8shZMiFqAaFM71vMIsnKxLBRnlfRGIv%2FfTBA3M%2FkZhKfABxJtYla38Z%2F%2FDB0SzuGGwOkzHpkvdS%2BOy9cHfxx2%2FcbxjEzSsPPFNEPutV4jlicRTxZslfFJm%2FTqrDB67Cf3bO3QNn9iSSib0XiNC7HRyNXMn1yxvqew4NaTQwEQO%2BSyxE4F%2FoTCD6i3puvtpnTc8d0lzlhugy9cKd87qJ%2BZDIgL33hmpepyAfQ9zqxl5L%2BZ%2F1mEo5WPH%2FauJTCtrLjBE%2B%2FORMlS9CK0xDlfvosGXo4hhsBBLKKhTpfRFTm4jGvUbnpjpltZuTE9%2FFURCiRWM6qcdIyCMbALZgqHwF6A8CGa4xSZ1aIiiElibCCBY%2FXCF4IyXoIB07m%2FaEhK%2FFMaSZ1IlL6qoFKNSCksTK8%2Bf%2Bnf9X5xwi%2FQz4HDuthb3rf%2F%2BSLFTrudHOZ5tP%2BQvk0YywJv5LICh%2FE2m%2Fo9e5XCl9pA6QuA4L7ndA3%2FrXT47F6AfPSjdJ38sqPECvaH%2FRm3R7J3e2NYo4xrCiooNfH2bZUCeFSmybNVpITT4TQZONBURi6JER0RdrOgB7s%2BnNmONVF7SFscqh7qPTXax0BTIAXgFochBQ7cMPiEusIGOqUBegpsWslzbfHZ6uIYdFWAWkh7OMwpxbaKbWL8Utta1eGRJJmlco0YtJYQ%2FLJh7V8FUkpq5iFRXvPZQUjWdLGVNgHEoNj18q8nBCjpaGtV2b8abz4Axs1kk2qn%2Bs7VvZw9TeRyPNzOwWsM9glhNPqqTyBByZiQ8%2BP5aUs9sDE8kb6PLzybVl5Xe%2BQcFXTaEixYUwzau0O%2F4MAFzt4WF0Pi4DWoh0jS&X-Amz-Signature=9c9eca819294a209fcb308d16226c93c5a18e6e82c5632e0c283e0655340fd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHZ2V7SG%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIA%2Brn%2BhXoOJrl0PrVgP17%2FVVhozHH1Zi1XXVEmhil2heAiEAzBig8x0mZrHI66wzCUlMEVu8NMgTQyM5pUqB63ag8okq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAPw656J2zmNyPtQWyrcA6xDxAsASBkqN%2Fc6uj8xcnTf%2FXe8shZMiFqAaFM71vMIsnKxLBRnlfRGIv%2FfTBA3M%2FkZhKfABxJtYla38Z%2F%2FDB0SzuGGwOkzHpkvdS%2BOy9cHfxx2%2FcbxjEzSsPPFNEPutV4jlicRTxZslfFJm%2FTqrDB67Cf3bO3QNn9iSSib0XiNC7HRyNXMn1yxvqew4NaTQwEQO%2BSyxE4F%2FoTCD6i3puvtpnTc8d0lzlhugy9cKd87qJ%2BZDIgL33hmpepyAfQ9zqxl5L%2BZ%2F1mEo5WPH%2FauJTCtrLjBE%2B%2FORMlS9CK0xDlfvosGXo4hhsBBLKKhTpfRFTm4jGvUbnpjpltZuTE9%2FFURCiRWM6qcdIyCMbALZgqHwF6A8CGa4xSZ1aIiiElibCCBY%2FXCF4IyXoIB07m%2FaEhK%2FFMaSZ1IlL6qoFKNSCksTK8%2Bf%2Bnf9X5xwi%2FQz4HDuthb3rf%2F%2BSLFTrudHOZ5tP%2BQvk0YywJv5LICh%2FE2m%2Fo9e5XCl9pA6QuA4L7ndA3%2FrXT47F6AfPSjdJ38sqPECvaH%2FRm3R7J3e2NYo4xrCiooNfH2bZUCeFSmybNVpITT4TQZONBURi6JER0RdrOgB7s%2BnNmONVF7SFscqh7qPTXax0BTIAXgFochBQ7cMPiEusIGOqUBegpsWslzbfHZ6uIYdFWAWkh7OMwpxbaKbWL8Utta1eGRJJmlco0YtJYQ%2FLJh7V8FUkpq5iFRXvPZQUjWdLGVNgHEoNj18q8nBCjpaGtV2b8abz4Axs1kk2qn%2Bs7VvZw9TeRyPNzOwWsM9glhNPqqTyBByZiQ8%2BP5aUs9sDE8kb6PLzybVl5Xe%2BQcFXTaEixYUwzau0O%2F4MAFzt4WF0Pi4DWoh0jS&X-Amz-Signature=ef57d61e07245e82fa0d43b2c723fe86b9299c62804d4650d33c7203ddcb9bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
