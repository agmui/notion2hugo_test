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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636435RO7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjE1msnRxHcY61VysJbSt0hTdnFUajAluXYPmlsjyWYQIgM2d0pBxnHK8ML39ZGA4ZmluG%2BlYlgqQR%2BIJ7W%2FtWb%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDENNbqoqgCNHl1jQuircA67F9rEwaAnHjrNiB7fL9wxMGQONmCF5UtXVuhSKy5JZwViCnPMCCSQpaRyUAOc2g3k9YA0G4Ul2dwfTEm2nAnUt7YenSLS1tMyNGpRfW0%2BpRc1KcA%2BVZr%2F%2BztoqGRHIjWub%2F%2FVs9OO9CgjJISexerV%2FRMXRAWRLIrPY%2FKOB7427fIytESk0cKxDPH3wOag635jywvDh5OJgHYrDJBz1KESALFrgwJ8IhTSVOIv1ueZvmfbKoznc9eW3A0JrPRfX%2FUjduWVvqtfk8ckI30Yy92zl6NW%2FDMXjV941dDB2sXLLJgzDBaYErk2O3nJAE6FElK3aZj%2Fepfb9TFVktsv2cRFR5uHiXCMQgXJ46UMtgKdvrRpFQIj9CbBETnu4ol9ltEAn2c6oEJZMb0OXemUEJh7WXzEQXPaosg6qczbJZD8zLn4i6hBnkUUnzE%2B%2Fm2oYjA0WNPMfIFU7mU5zhedEjnq7nFNDM7ps4vF%2FNVdn1TskhKK6vInDM4xs5hwQutFimyusSJwKJD2o3ym%2FGWFc51983Zy19L%2F6zHZeAXHiiljG4iMUTjVe1MvsTV5GBJzz7k3Jq2vFuY1W%2Bc6T7zou9QxZKIIjLtZehQQZ3Kug%2BXBsEqniEvQ7vd1gytVNMNffq74GOqUBQjftjup4eDyWYOJOqbbMqa8DIIeoRB8dMtFZCS8yvPoCRsE%2BdxKFoNgvtw8Qnso9r90oUCoCTV%2Fl1VGiQCnrFzknrwqv7NTVUif5peIXBLDZ%2BNTQzkjcp9BMvKF65eL4N%2Fk7G0DX%2B2RedRJw8y7LTff6YhvE8p2jUzuyMEIGUZ51x8uOfS8452AsEIGblA4o4VpA0UfjwD4YjiS0uH%2FH6nwSPNN1&X-Amz-Signature=f6847052a299aa429b818d99a554a95576f63ac6ff06ee1585ece37cee9f2fb7&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636435RO7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjE1msnRxHcY61VysJbSt0hTdnFUajAluXYPmlsjyWYQIgM2d0pBxnHK8ML39ZGA4ZmluG%2BlYlgqQR%2BIJ7W%2FtWb%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDENNbqoqgCNHl1jQuircA67F9rEwaAnHjrNiB7fL9wxMGQONmCF5UtXVuhSKy5JZwViCnPMCCSQpaRyUAOc2g3k9YA0G4Ul2dwfTEm2nAnUt7YenSLS1tMyNGpRfW0%2BpRc1KcA%2BVZr%2F%2BztoqGRHIjWub%2F%2FVs9OO9CgjJISexerV%2FRMXRAWRLIrPY%2FKOB7427fIytESk0cKxDPH3wOag635jywvDh5OJgHYrDJBz1KESALFrgwJ8IhTSVOIv1ueZvmfbKoznc9eW3A0JrPRfX%2FUjduWVvqtfk8ckI30Yy92zl6NW%2FDMXjV941dDB2sXLLJgzDBaYErk2O3nJAE6FElK3aZj%2Fepfb9TFVktsv2cRFR5uHiXCMQgXJ46UMtgKdvrRpFQIj9CbBETnu4ol9ltEAn2c6oEJZMb0OXemUEJh7WXzEQXPaosg6qczbJZD8zLn4i6hBnkUUnzE%2B%2Fm2oYjA0WNPMfIFU7mU5zhedEjnq7nFNDM7ps4vF%2FNVdn1TskhKK6vInDM4xs5hwQutFimyusSJwKJD2o3ym%2FGWFc51983Zy19L%2F6zHZeAXHiiljG4iMUTjVe1MvsTV5GBJzz7k3Jq2vFuY1W%2Bc6T7zou9QxZKIIjLtZehQQZ3Kug%2BXBsEqniEvQ7vd1gytVNMNffq74GOqUBQjftjup4eDyWYOJOqbbMqa8DIIeoRB8dMtFZCS8yvPoCRsE%2BdxKFoNgvtw8Qnso9r90oUCoCTV%2Fl1VGiQCnrFzknrwqv7NTVUif5peIXBLDZ%2BNTQzkjcp9BMvKF65eL4N%2Fk7G0DX%2B2RedRJw8y7LTff6YhvE8p2jUzuyMEIGUZ51x8uOfS8452AsEIGblA4o4VpA0UfjwD4YjiS0uH%2FH6nwSPNN1&X-Amz-Signature=cce093a02b6c2199b6f711f9079f42b7b966cfa0412b4b23a4a2419fac9fddc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636435RO7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T131642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjE1msnRxHcY61VysJbSt0hTdnFUajAluXYPmlsjyWYQIgM2d0pBxnHK8ML39ZGA4ZmluG%2BlYlgqQR%2BIJ7W%2FtWb%2FAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDENNbqoqgCNHl1jQuircA67F9rEwaAnHjrNiB7fL9wxMGQONmCF5UtXVuhSKy5JZwViCnPMCCSQpaRyUAOc2g3k9YA0G4Ul2dwfTEm2nAnUt7YenSLS1tMyNGpRfW0%2BpRc1KcA%2BVZr%2F%2BztoqGRHIjWub%2F%2FVs9OO9CgjJISexerV%2FRMXRAWRLIrPY%2FKOB7427fIytESk0cKxDPH3wOag635jywvDh5OJgHYrDJBz1KESALFrgwJ8IhTSVOIv1ueZvmfbKoznc9eW3A0JrPRfX%2FUjduWVvqtfk8ckI30Yy92zl6NW%2FDMXjV941dDB2sXLLJgzDBaYErk2O3nJAE6FElK3aZj%2Fepfb9TFVktsv2cRFR5uHiXCMQgXJ46UMtgKdvrRpFQIj9CbBETnu4ol9ltEAn2c6oEJZMb0OXemUEJh7WXzEQXPaosg6qczbJZD8zLn4i6hBnkUUnzE%2B%2Fm2oYjA0WNPMfIFU7mU5zhedEjnq7nFNDM7ps4vF%2FNVdn1TskhKK6vInDM4xs5hwQutFimyusSJwKJD2o3ym%2FGWFc51983Zy19L%2F6zHZeAXHiiljG4iMUTjVe1MvsTV5GBJzz7k3Jq2vFuY1W%2Bc6T7zou9QxZKIIjLtZehQQZ3Kug%2BXBsEqniEvQ7vd1gytVNMNffq74GOqUBQjftjup4eDyWYOJOqbbMqa8DIIeoRB8dMtFZCS8yvPoCRsE%2BdxKFoNgvtw8Qnso9r90oUCoCTV%2Fl1VGiQCnrFzknrwqv7NTVUif5peIXBLDZ%2BNTQzkjcp9BMvKF65eL4N%2Fk7G0DX%2B2RedRJw8y7LTff6YhvE8p2jUzuyMEIGUZ51x8uOfS8452AsEIGblA4o4VpA0UfjwD4YjiS0uH%2FH6nwSPNN1&X-Amz-Signature=1a958be3280e438aeef94db09c7ef2c0f229beb837732c2ef784c6491f10c21b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
