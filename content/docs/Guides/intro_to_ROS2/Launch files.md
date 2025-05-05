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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSZIPYA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbOXp08AgpBsgdSTKVDtgzw7ynkbXEImkVWbW5%2BSvrQIhANMoWFfazWuF4EPCaJdkeqW5k28rK6vkCFNgOrmzn6%2F5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyWTTRQtloYtcMNqpgq3AMjHLWDZFdP99HbPK51dKaT3Vr6bz3O68L2IjCu0lVS6eNt5Pe3GN3AelFFq2ATOHiLPBYDfhqipjelV%2FgSLPXhmrTZivg61v5PR9NkUpUsfAS2mT51aIv0nI3Usil0zHwANJ1NYbtHlKbqy3ZL5h%2Bdf31mqDYJLcy4UgvcgU06bhaHGKN0fF2bqEVbsbU6syz91OeUC8wx9Y9w%2FVAutNfVfuJdIBVItksQ%2BZAcTm54VT7fb5FE7zY1%2BiEtXBkRJv8nPCwjnaTsH1wyWIsnIpwWpoGbcQqX6o0AA%2Fqo%2BKJrFqAodatQUPrwjdQvQtz0G459ue18N7Q5fdrosUIXlnzGxqRUc3PTc5%2B1HeL4P3XXwNX%2B%2F2%2BBloOW1qoTiB1YKFiUDq1%2B54rPA5i4pbtYUNaWgDw9SslFYP18hJg2G1tTHRsnMQaCZHthFi%2BGJGIK7pb9hKVYXMFpQSmtrkiU0CPfWTcE9mQuFRuF1G8A1QBO9tIgVg6VbmTUCUofGzywd3SI6lcBp0dTVY2uqhAWE8rSulyLrlpxQhqckEtAEZQHFSSRtIFsj%2BexKRFAVkljRg1Sijv%2Bpt%2B612%2B4Foc90i91JdDVYIdHi480eWH5FyhDIF%2Bvtn6%2FFdytb3HVXjCIluTABjqkAddc2mShAbfLJW%2FxKYd7ncVU6rsMiF6zK0XQo93%2FgN%2B5UUzMG8itamXZxpCGgVN90BM1rmX60cwKPTaY1RqXZTWK4E6YEKg0aEweL2B4MXbqT66OBTypSQbdoOV3On0Rn3%2FWfQVZw2uaMFqL%2BDTDwqQ%2BgnoxGAEIvmlvE2bMe74WEr4qR8FVtcAQjrQjGPioDFAlhy%2FfT5hIE6S9XK7maiAdFPZe&X-Amz-Signature=67e37e633236645299dc05d9839dc71e5adf5b001b611e4f1b860bc1b4d469b8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSZIPYA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbOXp08AgpBsgdSTKVDtgzw7ynkbXEImkVWbW5%2BSvrQIhANMoWFfazWuF4EPCaJdkeqW5k28rK6vkCFNgOrmzn6%2F5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyWTTRQtloYtcMNqpgq3AMjHLWDZFdP99HbPK51dKaT3Vr6bz3O68L2IjCu0lVS6eNt5Pe3GN3AelFFq2ATOHiLPBYDfhqipjelV%2FgSLPXhmrTZivg61v5PR9NkUpUsfAS2mT51aIv0nI3Usil0zHwANJ1NYbtHlKbqy3ZL5h%2Bdf31mqDYJLcy4UgvcgU06bhaHGKN0fF2bqEVbsbU6syz91OeUC8wx9Y9w%2FVAutNfVfuJdIBVItksQ%2BZAcTm54VT7fb5FE7zY1%2BiEtXBkRJv8nPCwjnaTsH1wyWIsnIpwWpoGbcQqX6o0AA%2Fqo%2BKJrFqAodatQUPrwjdQvQtz0G459ue18N7Q5fdrosUIXlnzGxqRUc3PTc5%2B1HeL4P3XXwNX%2B%2F2%2BBloOW1qoTiB1YKFiUDq1%2B54rPA5i4pbtYUNaWgDw9SslFYP18hJg2G1tTHRsnMQaCZHthFi%2BGJGIK7pb9hKVYXMFpQSmtrkiU0CPfWTcE9mQuFRuF1G8A1QBO9tIgVg6VbmTUCUofGzywd3SI6lcBp0dTVY2uqhAWE8rSulyLrlpxQhqckEtAEZQHFSSRtIFsj%2BexKRFAVkljRg1Sijv%2Bpt%2B612%2B4Foc90i91JdDVYIdHi480eWH5FyhDIF%2Bvtn6%2FFdytb3HVXjCIluTABjqkAddc2mShAbfLJW%2FxKYd7ncVU6rsMiF6zK0XQo93%2FgN%2B5UUzMG8itamXZxpCGgVN90BM1rmX60cwKPTaY1RqXZTWK4E6YEKg0aEweL2B4MXbqT66OBTypSQbdoOV3On0Rn3%2FWfQVZw2uaMFqL%2BDTDwqQ%2BgnoxGAEIvmlvE2bMe74WEr4qR8FVtcAQjrQjGPioDFAlhy%2FfT5hIE6S9XK7maiAdFPZe&X-Amz-Signature=cbb91eb7a64aec33e59f7076ce7175c5189948727426e299cd086440d4b73f49&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPSZIPYA%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T190556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnbOXp08AgpBsgdSTKVDtgzw7ynkbXEImkVWbW5%2BSvrQIhANMoWFfazWuF4EPCaJdkeqW5k28rK6vkCFNgOrmzn6%2F5Kv8DCDQQABoMNjM3NDIzMTgzODA1IgyWTTRQtloYtcMNqpgq3AMjHLWDZFdP99HbPK51dKaT3Vr6bz3O68L2IjCu0lVS6eNt5Pe3GN3AelFFq2ATOHiLPBYDfhqipjelV%2FgSLPXhmrTZivg61v5PR9NkUpUsfAS2mT51aIv0nI3Usil0zHwANJ1NYbtHlKbqy3ZL5h%2Bdf31mqDYJLcy4UgvcgU06bhaHGKN0fF2bqEVbsbU6syz91OeUC8wx9Y9w%2FVAutNfVfuJdIBVItksQ%2BZAcTm54VT7fb5FE7zY1%2BiEtXBkRJv8nPCwjnaTsH1wyWIsnIpwWpoGbcQqX6o0AA%2Fqo%2BKJrFqAodatQUPrwjdQvQtz0G459ue18N7Q5fdrosUIXlnzGxqRUc3PTc5%2B1HeL4P3XXwNX%2B%2F2%2BBloOW1qoTiB1YKFiUDq1%2B54rPA5i4pbtYUNaWgDw9SslFYP18hJg2G1tTHRsnMQaCZHthFi%2BGJGIK7pb9hKVYXMFpQSmtrkiU0CPfWTcE9mQuFRuF1G8A1QBO9tIgVg6VbmTUCUofGzywd3SI6lcBp0dTVY2uqhAWE8rSulyLrlpxQhqckEtAEZQHFSSRtIFsj%2BexKRFAVkljRg1Sijv%2Bpt%2B612%2B4Foc90i91JdDVYIdHi480eWH5FyhDIF%2Bvtn6%2FFdytb3HVXjCIluTABjqkAddc2mShAbfLJW%2FxKYd7ncVU6rsMiF6zK0XQo93%2FgN%2B5UUzMG8itamXZxpCGgVN90BM1rmX60cwKPTaY1RqXZTWK4E6YEKg0aEweL2B4MXbqT66OBTypSQbdoOV3On0Rn3%2FWfQVZw2uaMFqL%2BDTDwqQ%2BgnoxGAEIvmlvE2bMe74WEr4qR8FVtcAQjrQjGPioDFAlhy%2FfT5hIE6S9XK7maiAdFPZe&X-Amz-Signature=db6773082c65ff26b6bd8e4a0c738f00f71c811df6e38da490de5f8891da21dc&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
