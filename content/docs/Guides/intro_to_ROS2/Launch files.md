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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCGK2L2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPDK6yHO7H2HzhO32bFJAAExVU7zy7Eo1rwuBP7fJUSAIhANaTyqZyqDYQt%2BarRFi4LPlfni5MmjSUqPLe3yr%2FvIWvKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpP5JIleYLcnNHoioq3ANuwjgkGzZ637uPkRm9zGIp1CiH03w%2BegXaDQEFWiNEu%2FR%2Fg42qMZaWpLQvfXEP5Hkr1srRMRkizDCvhQcrlyjzETXU%2BhznWSV0t9b88BP1X0Z%2FxTcAXqLKxDYgWaPHOY8otb4N144XoqQ0ePqLPoDb9TfgeQpoZkiDsnWT20BGyslCmXMf2l4CcmTQMIfCOzxugDBDfKWSDOu3sEffaH610rR2vrsvtGZD7UcNtbWHAdK8bcuzpfT%2FBxZkJaJqGrEv3nnpuGQ776674KQd5%2BsR9O6TZdK9q3moDTkWF9e5angLHt0iSPdMJz83hl1%2FajQTVgdXRLWe9JkCYjzBZAIVOgP%2FjFxp2F0I0KII2o8T6gaPm0Bfmn0yCVvcrTtD0jwxv7JAokU59H%2FfdxJ5E27s%2FmaI2sHU1Lal8AHejrwRQWij40X0364CBRdO9gDZJczP6ZssBevgEV%2FZ16TrdAj%2F4EUAFRC1hQVeJBLhM1TaUlYuXS0DEE2DepqauYB34EKmN0nB%2FVsbA8H%2FObJWOmCU8a1nRU8aNh%2F1rMDG6WMjjCmZETR9mlGjIsGzRM2yd8TAIKG6vVaD7Qvxdm6TrWQMlEncxGHTHuYK31TppCqf6JK%2BWC644RfYdkFc4TDKwMi%2BBjqkAen7MogdOVyMze6d%2BuWZ0mAS8kBb4kc425gR2NY%2B7SHqyaDjBEtNLs7aa0qt8P3Jw%2FuEJB%2FuDlvukOrAdWPgO2ZXpGjkXTzGbO%2Blz3KJ3AaMa1mllGQyqX5ufBISSU6uVV3XBoaT66q4j6sHohXiskWEq5SJAlmP4JzDG3mAY1vlJKy8A0hZ7TMdNNtqKimZlxM5Tr1gDbDkmb%2FrSf%2BTE7sudpMT&X-Amz-Signature=17f8e5d682dd3f6535b40c5acbb4bc620e30bdc282056f22cedaf6da3988a3d9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCGK2L2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPDK6yHO7H2HzhO32bFJAAExVU7zy7Eo1rwuBP7fJUSAIhANaTyqZyqDYQt%2BarRFi4LPlfni5MmjSUqPLe3yr%2FvIWvKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpP5JIleYLcnNHoioq3ANuwjgkGzZ637uPkRm9zGIp1CiH03w%2BegXaDQEFWiNEu%2FR%2Fg42qMZaWpLQvfXEP5Hkr1srRMRkizDCvhQcrlyjzETXU%2BhznWSV0t9b88BP1X0Z%2FxTcAXqLKxDYgWaPHOY8otb4N144XoqQ0ePqLPoDb9TfgeQpoZkiDsnWT20BGyslCmXMf2l4CcmTQMIfCOzxugDBDfKWSDOu3sEffaH610rR2vrsvtGZD7UcNtbWHAdK8bcuzpfT%2FBxZkJaJqGrEv3nnpuGQ776674KQd5%2BsR9O6TZdK9q3moDTkWF9e5angLHt0iSPdMJz83hl1%2FajQTVgdXRLWe9JkCYjzBZAIVOgP%2FjFxp2F0I0KII2o8T6gaPm0Bfmn0yCVvcrTtD0jwxv7JAokU59H%2FfdxJ5E27s%2FmaI2sHU1Lal8AHejrwRQWij40X0364CBRdO9gDZJczP6ZssBevgEV%2FZ16TrdAj%2F4EUAFRC1hQVeJBLhM1TaUlYuXS0DEE2DepqauYB34EKmN0nB%2FVsbA8H%2FObJWOmCU8a1nRU8aNh%2F1rMDG6WMjjCmZETR9mlGjIsGzRM2yd8TAIKG6vVaD7Qvxdm6TrWQMlEncxGHTHuYK31TppCqf6JK%2BWC644RfYdkFc4TDKwMi%2BBjqkAen7MogdOVyMze6d%2BuWZ0mAS8kBb4kc425gR2NY%2B7SHqyaDjBEtNLs7aa0qt8P3Jw%2FuEJB%2FuDlvukOrAdWPgO2ZXpGjkXTzGbO%2Blz3KJ3AaMa1mllGQyqX5ufBISSU6uVV3XBoaT66q4j6sHohXiskWEq5SJAlmP4JzDG3mAY1vlJKy8A0hZ7TMdNNtqKimZlxM5Tr1gDbDkmb%2FrSf%2BTE7sudpMT&X-Amz-Signature=a79028d195b244bd627f04ded40030568b33390c584c750f2ab2f2e4cd23c67f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCGK2L2%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPDK6yHO7H2HzhO32bFJAAExVU7zy7Eo1rwuBP7fJUSAIhANaTyqZyqDYQt%2BarRFi4LPlfni5MmjSUqPLe3yr%2FvIWvKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpP5JIleYLcnNHoioq3ANuwjgkGzZ637uPkRm9zGIp1CiH03w%2BegXaDQEFWiNEu%2FR%2Fg42qMZaWpLQvfXEP5Hkr1srRMRkizDCvhQcrlyjzETXU%2BhznWSV0t9b88BP1X0Z%2FxTcAXqLKxDYgWaPHOY8otb4N144XoqQ0ePqLPoDb9TfgeQpoZkiDsnWT20BGyslCmXMf2l4CcmTQMIfCOzxugDBDfKWSDOu3sEffaH610rR2vrsvtGZD7UcNtbWHAdK8bcuzpfT%2FBxZkJaJqGrEv3nnpuGQ776674KQd5%2BsR9O6TZdK9q3moDTkWF9e5angLHt0iSPdMJz83hl1%2FajQTVgdXRLWe9JkCYjzBZAIVOgP%2FjFxp2F0I0KII2o8T6gaPm0Bfmn0yCVvcrTtD0jwxv7JAokU59H%2FfdxJ5E27s%2FmaI2sHU1Lal8AHejrwRQWij40X0364CBRdO9gDZJczP6ZssBevgEV%2FZ16TrdAj%2F4EUAFRC1hQVeJBLhM1TaUlYuXS0DEE2DepqauYB34EKmN0nB%2FVsbA8H%2FObJWOmCU8a1nRU8aNh%2F1rMDG6WMjjCmZETR9mlGjIsGzRM2yd8TAIKG6vVaD7Qvxdm6TrWQMlEncxGHTHuYK31TppCqf6JK%2BWC644RfYdkFc4TDKwMi%2BBjqkAen7MogdOVyMze6d%2BuWZ0mAS8kBb4kc425gR2NY%2B7SHqyaDjBEtNLs7aa0qt8P3Jw%2FuEJB%2FuDlvukOrAdWPgO2ZXpGjkXTzGbO%2Blz3KJ3AaMa1mllGQyqX5ufBISSU6uVV3XBoaT66q4j6sHohXiskWEq5SJAlmP4JzDG3mAY1vlJKy8A0hZ7TMdNNtqKimZlxM5Tr1gDbDkmb%2FrSf%2BTE7sudpMT&X-Amz-Signature=b2159c3c534c8a84941ac2f2985cb31fca7b71a2ffd42dd3b65fa6dfd9b323d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
