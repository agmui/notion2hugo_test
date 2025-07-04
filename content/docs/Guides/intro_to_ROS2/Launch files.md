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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C3SHT3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHEZOcuZDGlNIwCncN2IXWmJax31ODv7peKRF%2FjMoFSUAiEA6l7ySMK3uw8W99Ec%2BD%2FBrfS6bBVgmfJoCd7IcZFQRuEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF%2BEbRZ3CLCSBxAhkircA10kvDENiF4ehTXZkNTJ2G9YHpbq5TQpgYuibCxBO3O1NDXotJUoCoZv5l3PiJjwa63j4DA8nAQ6KKQyVqRSXnV6rUxXFy8O4VhB1MYxYelelgK1ICu1pOfCsU68s6AmeXMRkDPo1BgB1KJXvqLl6v6893OYusYflQTZWxzdl0wEr58r7XYSQ%2BLwe0b8TOvyyGeA6b763NOybuoq%2FDKe2S5OdGt1f1%2F9W9Ge7%2B%2FkJUFMaAriNIWe21N3Z3MyJ%2FEGrbgIAbPd6TfL5CmjABglx6a8mRCa9bQw7l1Zpl%2F%2BW8GNnBs2dI5hstpGtBNK8TEso%2B2sijy9R8Du1Uk5cg7aM7%2BR7wAJ19AqRIuzhwR8f0PagabfIbXDaqz4n1WAe%2B0Ofy5dQo7t9znAwnd%2F%2FRtcJ%2BSg2tCv2oJjcNO83FKwn6TOb2mKdWfsKFckI6VmQPEDNsRqvKF3%2BMt9VIYnf66Q%2BrFN56G8EDs%2B2RveMLsKj8e7us0oh7qg9e2CynObxPZ2pLJigAoZCeoXaMWDq7KLBF0BGIDRbz%2Bxc%2FzkCtxOEk1QGepRKqe3NgVfhbKVbEl28R9hyrsPRqhyAY%2BFHC9rOeh%2FxwDjgfsbwG7fRRnEAqg%2BAFjJcS9OBfE8ZMqHMIzEn8MGOqUBUS%2FxtahkxyLHA0%2B22Y5YSxXR%2BBOpHP7PHYcuqDTv6Rt253cu%2Bo2DmzCoRw%2F85TjxvVqsVCD4MQ%2FYq9vAxiuGsNcDnkkPpU6NOtABQLNkWFjB2adz1%2FbURtjPMdhDPzshWAjiks4JHlvGiHe5lPMpK0tYh0t1Hcz9bKph5O1M0H5o7fnyJ1975xpJPsSrMC4QBPM7DDMupaRB6BSNa3y9SHYVRB3I&X-Amz-Signature=aa842433c6fdda7edfc0aa925a97dd9591c6245505cd270074424709376167a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C3SHT3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHEZOcuZDGlNIwCncN2IXWmJax31ODv7peKRF%2FjMoFSUAiEA6l7ySMK3uw8W99Ec%2BD%2FBrfS6bBVgmfJoCd7IcZFQRuEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF%2BEbRZ3CLCSBxAhkircA10kvDENiF4ehTXZkNTJ2G9YHpbq5TQpgYuibCxBO3O1NDXotJUoCoZv5l3PiJjwa63j4DA8nAQ6KKQyVqRSXnV6rUxXFy8O4VhB1MYxYelelgK1ICu1pOfCsU68s6AmeXMRkDPo1BgB1KJXvqLl6v6893OYusYflQTZWxzdl0wEr58r7XYSQ%2BLwe0b8TOvyyGeA6b763NOybuoq%2FDKe2S5OdGt1f1%2F9W9Ge7%2B%2FkJUFMaAriNIWe21N3Z3MyJ%2FEGrbgIAbPd6TfL5CmjABglx6a8mRCa9bQw7l1Zpl%2F%2BW8GNnBs2dI5hstpGtBNK8TEso%2B2sijy9R8Du1Uk5cg7aM7%2BR7wAJ19AqRIuzhwR8f0PagabfIbXDaqz4n1WAe%2B0Ofy5dQo7t9znAwnd%2F%2FRtcJ%2BSg2tCv2oJjcNO83FKwn6TOb2mKdWfsKFckI6VmQPEDNsRqvKF3%2BMt9VIYnf66Q%2BrFN56G8EDs%2B2RveMLsKj8e7us0oh7qg9e2CynObxPZ2pLJigAoZCeoXaMWDq7KLBF0BGIDRbz%2Bxc%2FzkCtxOEk1QGepRKqe3NgVfhbKVbEl28R9hyrsPRqhyAY%2BFHC9rOeh%2FxwDjgfsbwG7fRRnEAqg%2BAFjJcS9OBfE8ZMqHMIzEn8MGOqUBUS%2FxtahkxyLHA0%2B22Y5YSxXR%2BBOpHP7PHYcuqDTv6Rt253cu%2Bo2DmzCoRw%2F85TjxvVqsVCD4MQ%2FYq9vAxiuGsNcDnkkPpU6NOtABQLNkWFjB2adz1%2FbURtjPMdhDPzshWAjiks4JHlvGiHe5lPMpK0tYh0t1Hcz9bKph5O1M0H5o7fnyJ1975xpJPsSrMC4QBPM7DDMupaRB6BSNa3y9SHYVRB3I&X-Amz-Signature=c37bec1f644bbb922d9eecb1d824e619ba7715c8f10b6a90aa1589c18e1301cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C3SHT3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T150902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIHEZOcuZDGlNIwCncN2IXWmJax31ODv7peKRF%2FjMoFSUAiEA6l7ySMK3uw8W99Ec%2BD%2FBrfS6bBVgmfJoCd7IcZFQRuEq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDF%2BEbRZ3CLCSBxAhkircA10kvDENiF4ehTXZkNTJ2G9YHpbq5TQpgYuibCxBO3O1NDXotJUoCoZv5l3PiJjwa63j4DA8nAQ6KKQyVqRSXnV6rUxXFy8O4VhB1MYxYelelgK1ICu1pOfCsU68s6AmeXMRkDPo1BgB1KJXvqLl6v6893OYusYflQTZWxzdl0wEr58r7XYSQ%2BLwe0b8TOvyyGeA6b763NOybuoq%2FDKe2S5OdGt1f1%2F9W9Ge7%2B%2FkJUFMaAriNIWe21N3Z3MyJ%2FEGrbgIAbPd6TfL5CmjABglx6a8mRCa9bQw7l1Zpl%2F%2BW8GNnBs2dI5hstpGtBNK8TEso%2B2sijy9R8Du1Uk5cg7aM7%2BR7wAJ19AqRIuzhwR8f0PagabfIbXDaqz4n1WAe%2B0Ofy5dQo7t9znAwnd%2F%2FRtcJ%2BSg2tCv2oJjcNO83FKwn6TOb2mKdWfsKFckI6VmQPEDNsRqvKF3%2BMt9VIYnf66Q%2BrFN56G8EDs%2B2RveMLsKj8e7us0oh7qg9e2CynObxPZ2pLJigAoZCeoXaMWDq7KLBF0BGIDRbz%2Bxc%2FzkCtxOEk1QGepRKqe3NgVfhbKVbEl28R9hyrsPRqhyAY%2BFHC9rOeh%2FxwDjgfsbwG7fRRnEAqg%2BAFjJcS9OBfE8ZMqHMIzEn8MGOqUBUS%2FxtahkxyLHA0%2B22Y5YSxXR%2BBOpHP7PHYcuqDTv6Rt253cu%2Bo2DmzCoRw%2F85TjxvVqsVCD4MQ%2FYq9vAxiuGsNcDnkkPpU6NOtABQLNkWFjB2adz1%2FbURtjPMdhDPzshWAjiks4JHlvGiHe5lPMpK0tYh0t1Hcz9bKph5O1M0H5o7fnyJ1975xpJPsSrMC4QBPM7DDMupaRB6BSNa3y9SHYVRB3I&X-Amz-Signature=c512d69f2f016a2acf5241c295b2c316dfba933aac93c062552732e12ea08c5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
