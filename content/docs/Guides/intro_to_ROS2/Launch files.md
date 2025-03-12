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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NEEPDD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDEzxE%2FkZv4%2Fp1%2F3ixwLGS2bduzYmwugPtJ01mL0JvGtgIgImbOSC1L%2BWg6wAZvpmdajiR8UdfXL4jyyxU%2BEVs4QhkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPEXozeoQ8njVj7FyrcA0EqUlp7FsJbgICcC7l4ls1cyiIPak4EIMuW%2F5ckoRjL37vRDDxRDe2Me3bzMEV5yBMPlmps7gdoSNdi%2Fes63Su%2Fo0e5cdEfN8mGTXBEky%2FNff6AzQnu3%2FQ%2F9%2BQctuNXMCLHqCpYGdTsNGtZ6U9TbmwXXD1D7WAOk0Tby1vqacZZgF8ISEU2piSELIIcqWBAph%2BXm%2FsGsXnSH5ys2OOcGkvBwnyuolvD8%2BK5IVTpZA9Gq1yrqIz%2BF8T%2BE0S%2FKt1pOYUduMlbwimddgwtZ%2FatRSHxavMLvr8ZQHhXv%2BB5lEumcR6T%2BObdkYxgfcKSNzAxMmiLcAy2adMVBk3OSWruAunmzJkhjRYyM1L4YyUIa%2FCZKiMs8TbMUCxYpxzI4CZVhtUS5g%2F%2BvW4K677coM7WAmT0KQLCVKXezHGpcneeBiH7oZQzTzz7VcHvPhVPW%2FNrqs%2BnRzDWoHQ0Uftsu%2BvYIBfJ8FJRCtHoi6R3JtoQLdugQg6GCEnZe%2F0Jnne2r%2Fr6UEoqH5KqLCbCh1K4vt7xmSC8CY3izVFb%2FFWafvtEcLNUVsjith3viaRMfdEHV796AHF4YAIj%2BE%2FcyYemrhHDoi9wxK4C7O5hC9pEkK1PODdSRFajObERhy4MS37uMKPkx74GOqUBfp9G%2BKd7MpgPaDlgxLpCeAa3iC2cW0kEcO7eJGzX5Wu%2BiF%2BK%2BtcMUw7uf6vvz4Q3k7pHIHxOnoCfjqGoecKHibmqQejJm46GImXn%2Fh9mDCGBcVVzF7bBLqrliG4%2Bi9d2lMrBOvhr4QS0AnwTJN6jOR%2BGwxjEJ5oDsnm%2BSNdAe3SaTSks9kkKpVqeNQUGixP2IMTvmtXZMtHh0XLHZ9uuh1Rv7saw&X-Amz-Signature=e1becdf4925bb600e41326037c963876c0a387fc6ea0f8a8af2fe312e5c2cd81&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NEEPDD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDEzxE%2FkZv4%2Fp1%2F3ixwLGS2bduzYmwugPtJ01mL0JvGtgIgImbOSC1L%2BWg6wAZvpmdajiR8UdfXL4jyyxU%2BEVs4QhkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPEXozeoQ8njVj7FyrcA0EqUlp7FsJbgICcC7l4ls1cyiIPak4EIMuW%2F5ckoRjL37vRDDxRDe2Me3bzMEV5yBMPlmps7gdoSNdi%2Fes63Su%2Fo0e5cdEfN8mGTXBEky%2FNff6AzQnu3%2FQ%2F9%2BQctuNXMCLHqCpYGdTsNGtZ6U9TbmwXXD1D7WAOk0Tby1vqacZZgF8ISEU2piSELIIcqWBAph%2BXm%2FsGsXnSH5ys2OOcGkvBwnyuolvD8%2BK5IVTpZA9Gq1yrqIz%2BF8T%2BE0S%2FKt1pOYUduMlbwimddgwtZ%2FatRSHxavMLvr8ZQHhXv%2BB5lEumcR6T%2BObdkYxgfcKSNzAxMmiLcAy2adMVBk3OSWruAunmzJkhjRYyM1L4YyUIa%2FCZKiMs8TbMUCxYpxzI4CZVhtUS5g%2F%2BvW4K677coM7WAmT0KQLCVKXezHGpcneeBiH7oZQzTzz7VcHvPhVPW%2FNrqs%2BnRzDWoHQ0Uftsu%2BvYIBfJ8FJRCtHoi6R3JtoQLdugQg6GCEnZe%2F0Jnne2r%2Fr6UEoqH5KqLCbCh1K4vt7xmSC8CY3izVFb%2FFWafvtEcLNUVsjith3viaRMfdEHV796AHF4YAIj%2BE%2FcyYemrhHDoi9wxK4C7O5hC9pEkK1PODdSRFajObERhy4MS37uMKPkx74GOqUBfp9G%2BKd7MpgPaDlgxLpCeAa3iC2cW0kEcO7eJGzX5Wu%2BiF%2BK%2BtcMUw7uf6vvz4Q3k7pHIHxOnoCfjqGoecKHibmqQejJm46GImXn%2Fh9mDCGBcVVzF7bBLqrliG4%2Bi9d2lMrBOvhr4QS0AnwTJN6jOR%2BGwxjEJ5oDsnm%2BSNdAe3SaTSks9kkKpVqeNQUGixP2IMTvmtXZMtHh0XLHZ9uuh1Rv7saw&X-Amz-Signature=65a5e03f7cdc0bbcb04a10868274caa9fd054fe64e3c9a047db6fef1721347a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674NEEPDD%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDEzxE%2FkZv4%2Fp1%2F3ixwLGS2bduzYmwugPtJ01mL0JvGtgIgImbOSC1L%2BWg6wAZvpmdajiR8UdfXL4jyyxU%2BEVs4QhkqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEPEXozeoQ8njVj7FyrcA0EqUlp7FsJbgICcC7l4ls1cyiIPak4EIMuW%2F5ckoRjL37vRDDxRDe2Me3bzMEV5yBMPlmps7gdoSNdi%2Fes63Su%2Fo0e5cdEfN8mGTXBEky%2FNff6AzQnu3%2FQ%2F9%2BQctuNXMCLHqCpYGdTsNGtZ6U9TbmwXXD1D7WAOk0Tby1vqacZZgF8ISEU2piSELIIcqWBAph%2BXm%2FsGsXnSH5ys2OOcGkvBwnyuolvD8%2BK5IVTpZA9Gq1yrqIz%2BF8T%2BE0S%2FKt1pOYUduMlbwimddgwtZ%2FatRSHxavMLvr8ZQHhXv%2BB5lEumcR6T%2BObdkYxgfcKSNzAxMmiLcAy2adMVBk3OSWruAunmzJkhjRYyM1L4YyUIa%2FCZKiMs8TbMUCxYpxzI4CZVhtUS5g%2F%2BvW4K677coM7WAmT0KQLCVKXezHGpcneeBiH7oZQzTzz7VcHvPhVPW%2FNrqs%2BnRzDWoHQ0Uftsu%2BvYIBfJ8FJRCtHoi6R3JtoQLdugQg6GCEnZe%2F0Jnne2r%2Fr6UEoqH5KqLCbCh1K4vt7xmSC8CY3izVFb%2FFWafvtEcLNUVsjith3viaRMfdEHV796AHF4YAIj%2BE%2FcyYemrhHDoi9wxK4C7O5hC9pEkK1PODdSRFajObERhy4MS37uMKPkx74GOqUBfp9G%2BKd7MpgPaDlgxLpCeAa3iC2cW0kEcO7eJGzX5Wu%2BiF%2BK%2BtcMUw7uf6vvz4Q3k7pHIHxOnoCfjqGoecKHibmqQejJm46GImXn%2Fh9mDCGBcVVzF7bBLqrliG4%2Bi9d2lMrBOvhr4QS0AnwTJN6jOR%2BGwxjEJ5oDsnm%2BSNdAe3SaTSks9kkKpVqeNQUGixP2IMTvmtXZMtHh0XLHZ9uuh1Rv7saw&X-Amz-Signature=01d58981a211d9cca2ef2747c6d0de2d221116446f2b95bb9d03ced81b76a1cc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
