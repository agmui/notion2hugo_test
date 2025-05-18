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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XH4GZUN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZPy68a%2F0%2FZaPnOFZTVp9D7JRQ1AKB4%2FAL2l7EKY2GJAiBfMf5VY8hgeWNb17GtXJ06%2FjoTaNxzPnL23B4dj9F56ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM9FdheUe3p6d2Y8J6KtwDUHg6W%2B2ABLzqZTYebkcYnlaRbr5KjuGsOPmqZG20rxajV8gNi30SaCLmT5nS5bNXIuM6V9Hvim7nuVMwvhjLdJR2ors7ArvezXnfjtkKE%2ByQswpObVIhrOXYn6xUFwl1G5Q9Lk1WLlaXEna4OzpjtNE%2BsEOT2SPaLqjVMlohIUO3wzqMJew9sLHrjADUrYaApdRxwqzdAQnksTaL8vo%2FVGF%2FR95wErKVmy%2BmDBdi9A%2Froq%2F5FTUiP7GX%2FLMlZOcJHyeZY2WricKKThoXaejrXq2VS4OZ87cuPtYn0F4n2axA657bUgBGu%2BJmgQ6ebuQ2NewTin1um7xaFfstooSAOl34eeXz%2BvNhQXkvHuY9guwv9l3sh41mARYapQqsdMrGi8BdW5OFU%2BiUEZG768JHXnH%2BoSkU5bp7SAXdE4QaW4ab%2BgP%2BoAfmy0TBL%2Fgct6VuOYCi09cc3yXGYOAw9vQe9WdYLd8JUmJMJzIptSmOfbF1wO4J6VGJrCt15s4JBFJNZ0XdOTaFrc6Lxx8wi57HeZIf7MhqOH9WW4dp1FQbmbfeSq3RUpCDoSXrE4c%2F2Y1f71w4g1yxMrAwQSpMVk9XIHP1x%2BtQ6jOkt2PPllersRjc5gxbaah12z1sUzgwjYGlwQY6pgHNRy2rpMSukIGwEZXjoBdAxxWTy1MuDCK6wWHUe%2FTuAscM6EpeLL4T5z9GLbpXcfZVkl17D5t0NUakpM%2Fy%2BiZVCY%2Fb98sGCauFS5G8OgnAm2q9L3nxmRbvNnMaYZfo3%2FYWnVETjMg76gVv%2BERY%2FpxY8Epz3GU0qXAs2%2BHGjasGxDfnEsH9bHoMEolK6A4tTlGTfGADYzPTorUd2PdLGbe2%2FMPGViTb&X-Amz-Signature=7fe2334d0f5ec0b5585d217b52a658caaa6b57a7b443a4e710c091e45d14eabf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XH4GZUN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZPy68a%2F0%2FZaPnOFZTVp9D7JRQ1AKB4%2FAL2l7EKY2GJAiBfMf5VY8hgeWNb17GtXJ06%2FjoTaNxzPnL23B4dj9F56ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM9FdheUe3p6d2Y8J6KtwDUHg6W%2B2ABLzqZTYebkcYnlaRbr5KjuGsOPmqZG20rxajV8gNi30SaCLmT5nS5bNXIuM6V9Hvim7nuVMwvhjLdJR2ors7ArvezXnfjtkKE%2ByQswpObVIhrOXYn6xUFwl1G5Q9Lk1WLlaXEna4OzpjtNE%2BsEOT2SPaLqjVMlohIUO3wzqMJew9sLHrjADUrYaApdRxwqzdAQnksTaL8vo%2FVGF%2FR95wErKVmy%2BmDBdi9A%2Froq%2F5FTUiP7GX%2FLMlZOcJHyeZY2WricKKThoXaejrXq2VS4OZ87cuPtYn0F4n2axA657bUgBGu%2BJmgQ6ebuQ2NewTin1um7xaFfstooSAOl34eeXz%2BvNhQXkvHuY9guwv9l3sh41mARYapQqsdMrGi8BdW5OFU%2BiUEZG768JHXnH%2BoSkU5bp7SAXdE4QaW4ab%2BgP%2BoAfmy0TBL%2Fgct6VuOYCi09cc3yXGYOAw9vQe9WdYLd8JUmJMJzIptSmOfbF1wO4J6VGJrCt15s4JBFJNZ0XdOTaFrc6Lxx8wi57HeZIf7MhqOH9WW4dp1FQbmbfeSq3RUpCDoSXrE4c%2F2Y1f71w4g1yxMrAwQSpMVk9XIHP1x%2BtQ6jOkt2PPllersRjc5gxbaah12z1sUzgwjYGlwQY6pgHNRy2rpMSukIGwEZXjoBdAxxWTy1MuDCK6wWHUe%2FTuAscM6EpeLL4T5z9GLbpXcfZVkl17D5t0NUakpM%2Fy%2BiZVCY%2Fb98sGCauFS5G8OgnAm2q9L3nxmRbvNnMaYZfo3%2FYWnVETjMg76gVv%2BERY%2FpxY8Epz3GU0qXAs2%2BHGjasGxDfnEsH9bHoMEolK6A4tTlGTfGADYzPTorUd2PdLGbe2%2FMPGViTb&X-Amz-Signature=591a098b827a52a7c37ccf585f827e82303803dc7800cfaa93c8ea9ef5016ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XH4GZUN%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFZPy68a%2F0%2FZaPnOFZTVp9D7JRQ1AKB4%2FAL2l7EKY2GJAiBfMf5VY8hgeWNb17GtXJ06%2FjoTaNxzPnL23B4dj9F56ir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIM9FdheUe3p6d2Y8J6KtwDUHg6W%2B2ABLzqZTYebkcYnlaRbr5KjuGsOPmqZG20rxajV8gNi30SaCLmT5nS5bNXIuM6V9Hvim7nuVMwvhjLdJR2ors7ArvezXnfjtkKE%2ByQswpObVIhrOXYn6xUFwl1G5Q9Lk1WLlaXEna4OzpjtNE%2BsEOT2SPaLqjVMlohIUO3wzqMJew9sLHrjADUrYaApdRxwqzdAQnksTaL8vo%2FVGF%2FR95wErKVmy%2BmDBdi9A%2Froq%2F5FTUiP7GX%2FLMlZOcJHyeZY2WricKKThoXaejrXq2VS4OZ87cuPtYn0F4n2axA657bUgBGu%2BJmgQ6ebuQ2NewTin1um7xaFfstooSAOl34eeXz%2BvNhQXkvHuY9guwv9l3sh41mARYapQqsdMrGi8BdW5OFU%2BiUEZG768JHXnH%2BoSkU5bp7SAXdE4QaW4ab%2BgP%2BoAfmy0TBL%2Fgct6VuOYCi09cc3yXGYOAw9vQe9WdYLd8JUmJMJzIptSmOfbF1wO4J6VGJrCt15s4JBFJNZ0XdOTaFrc6Lxx8wi57HeZIf7MhqOH9WW4dp1FQbmbfeSq3RUpCDoSXrE4c%2F2Y1f71w4g1yxMrAwQSpMVk9XIHP1x%2BtQ6jOkt2PPllersRjc5gxbaah12z1sUzgwjYGlwQY6pgHNRy2rpMSukIGwEZXjoBdAxxWTy1MuDCK6wWHUe%2FTuAscM6EpeLL4T5z9GLbpXcfZVkl17D5t0NUakpM%2Fy%2BiZVCY%2Fb98sGCauFS5G8OgnAm2q9L3nxmRbvNnMaYZfo3%2FYWnVETjMg76gVv%2BERY%2FpxY8Epz3GU0qXAs2%2BHGjasGxDfnEsH9bHoMEolK6A4tTlGTfGADYzPTorUd2PdLGbe2%2FMPGViTb&X-Amz-Signature=98fd3ff7bda0dd4102bc9ce88a0a1bfc3863ac98ab67a65dcba6defd4576b2e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
