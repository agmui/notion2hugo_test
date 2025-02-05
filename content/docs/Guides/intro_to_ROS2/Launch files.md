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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GZR3WC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCoRqdYNuw%2FmFpZP%2FkCG73IWwK7Q9NjJTK1klWAzh9CvAIgST8fk%2Ffmt9TmUIJpbdxeyHJrEA3XuDcURmAmVlOYGEQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGOAzmhi5r58tsjpDCrcA7kmEKS6bVVKpsjRhWIdFKMev6uR5mJdruMoBZQA%2FnZTMajZUoYpC24UUlWzbzSKaJSD7N4DOfrr6sRISq%2BC33g2cDWsgsRtN9QNmyZXXtmzr8ouqt0IoejvWmklb51PIn%2FrRwXTSezpNxRwTj2o3nJzVY5DxQrwLNUfkCOOKAlM9CVU9P2fftDEREt8NieyrcJYhOIrqEJugt3DwXRCDg05wDUFcoTqk937tE2%2BnjRg0OpvYmh6dHeXoQCIBllrltNJgizlprQS6PpjiWaoiMkNnHHJrUtN4GHRgbly7NRKFmyp%2FTdEpTwiHzIPYcyZbyXfF5R%2BvlgXyX1QKyPHTYbptOhnNvmoZEv6DPzIgkZqVSvrXmEAdf%2B17j0ZNHt0K9jleli5c6QC17GtzF2Yk%2FaYfb2zHMJrnE3ZvZ5SXJCpzU1VuibuovsdcMQlJLkGn12BTlvQUsh4d2Ja6jErnX1LEcvlG1nXsxl90%2FGLXYKySIOPyoJCSY8JZFgNlBom4qxjpMHysSXsz6xDkSNneCgu51BE0NfWb6rx7HYDmG6iE132fGwBFOJHe3xLKapWvGuetwyI5ZE7z79zdORfYKMvkJpyCtv5M8ztcrzDot5Z4Jz7kGH34scdIYbeMNe7jr0GOqUBQphBQrJjKgtaxdGStE0sE2O5suZMheFowVXolUOBBgL%2FcSvd3ecYyqlEVdhdUcw%2BBZZrKgHQDt0MThNXiOJyhmCe5ewOPgS%2BO6m97liZqPrlFGzMgoShHQnHSuMSh9z7GIc0mBxwTrs3%2Fm%2FkqVYlniEUfVAGZkoNG3mrWuQcfmi%2FAeS1TyJ77CLTLIOZhdOoFDHVC2Rd5fNqOPXxxd6KEAC8668m&X-Amz-Signature=192caafb7f61e99894566582cc2dc527564847f79a193393deb0cc712e8217bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GZR3WC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCoRqdYNuw%2FmFpZP%2FkCG73IWwK7Q9NjJTK1klWAzh9CvAIgST8fk%2Ffmt9TmUIJpbdxeyHJrEA3XuDcURmAmVlOYGEQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGOAzmhi5r58tsjpDCrcA7kmEKS6bVVKpsjRhWIdFKMev6uR5mJdruMoBZQA%2FnZTMajZUoYpC24UUlWzbzSKaJSD7N4DOfrr6sRISq%2BC33g2cDWsgsRtN9QNmyZXXtmzr8ouqt0IoejvWmklb51PIn%2FrRwXTSezpNxRwTj2o3nJzVY5DxQrwLNUfkCOOKAlM9CVU9P2fftDEREt8NieyrcJYhOIrqEJugt3DwXRCDg05wDUFcoTqk937tE2%2BnjRg0OpvYmh6dHeXoQCIBllrltNJgizlprQS6PpjiWaoiMkNnHHJrUtN4GHRgbly7NRKFmyp%2FTdEpTwiHzIPYcyZbyXfF5R%2BvlgXyX1QKyPHTYbptOhnNvmoZEv6DPzIgkZqVSvrXmEAdf%2B17j0ZNHt0K9jleli5c6QC17GtzF2Yk%2FaYfb2zHMJrnE3ZvZ5SXJCpzU1VuibuovsdcMQlJLkGn12BTlvQUsh4d2Ja6jErnX1LEcvlG1nXsxl90%2FGLXYKySIOPyoJCSY8JZFgNlBom4qxjpMHysSXsz6xDkSNneCgu51BE0NfWb6rx7HYDmG6iE132fGwBFOJHe3xLKapWvGuetwyI5ZE7z79zdORfYKMvkJpyCtv5M8ztcrzDot5Z4Jz7kGH34scdIYbeMNe7jr0GOqUBQphBQrJjKgtaxdGStE0sE2O5suZMheFowVXolUOBBgL%2FcSvd3ecYyqlEVdhdUcw%2BBZZrKgHQDt0MThNXiOJyhmCe5ewOPgS%2BO6m97liZqPrlFGzMgoShHQnHSuMSh9z7GIc0mBxwTrs3%2Fm%2FkqVYlniEUfVAGZkoNG3mrWuQcfmi%2FAeS1TyJ77CLTLIOZhdOoFDHVC2Rd5fNqOPXxxd6KEAC8668m&X-Amz-Signature=fd2aebc433af99d1822648333a593b6d5e5f4943da383b33734668047517285e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GZR3WC%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCoRqdYNuw%2FmFpZP%2FkCG73IWwK7Q9NjJTK1klWAzh9CvAIgST8fk%2Ffmt9TmUIJpbdxeyHJrEA3XuDcURmAmVlOYGEQq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDGOAzmhi5r58tsjpDCrcA7kmEKS6bVVKpsjRhWIdFKMev6uR5mJdruMoBZQA%2FnZTMajZUoYpC24UUlWzbzSKaJSD7N4DOfrr6sRISq%2BC33g2cDWsgsRtN9QNmyZXXtmzr8ouqt0IoejvWmklb51PIn%2FrRwXTSezpNxRwTj2o3nJzVY5DxQrwLNUfkCOOKAlM9CVU9P2fftDEREt8NieyrcJYhOIrqEJugt3DwXRCDg05wDUFcoTqk937tE2%2BnjRg0OpvYmh6dHeXoQCIBllrltNJgizlprQS6PpjiWaoiMkNnHHJrUtN4GHRgbly7NRKFmyp%2FTdEpTwiHzIPYcyZbyXfF5R%2BvlgXyX1QKyPHTYbptOhnNvmoZEv6DPzIgkZqVSvrXmEAdf%2B17j0ZNHt0K9jleli5c6QC17GtzF2Yk%2FaYfb2zHMJrnE3ZvZ5SXJCpzU1VuibuovsdcMQlJLkGn12BTlvQUsh4d2Ja6jErnX1LEcvlG1nXsxl90%2FGLXYKySIOPyoJCSY8JZFgNlBom4qxjpMHysSXsz6xDkSNneCgu51BE0NfWb6rx7HYDmG6iE132fGwBFOJHe3xLKapWvGuetwyI5ZE7z79zdORfYKMvkJpyCtv5M8ztcrzDot5Z4Jz7kGH34scdIYbeMNe7jr0GOqUBQphBQrJjKgtaxdGStE0sE2O5suZMheFowVXolUOBBgL%2FcSvd3ecYyqlEVdhdUcw%2BBZZrKgHQDt0MThNXiOJyhmCe5ewOPgS%2BO6m97liZqPrlFGzMgoShHQnHSuMSh9z7GIc0mBxwTrs3%2Fm%2FkqVYlniEUfVAGZkoNG3mrWuQcfmi%2FAeS1TyJ77CLTLIOZhdOoFDHVC2Rd5fNqOPXxxd6KEAC8668m&X-Amz-Signature=0ce5fe775409f2cd69262db5286b0501bbea2075e97f5e008c1abdaa2bbd0987&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
