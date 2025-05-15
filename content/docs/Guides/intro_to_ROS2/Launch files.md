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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCYZJAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGflUyLT7UapUT9NPsrfqGhbS6iJBNLPfJfwzpvlG0yvAiEA%2BU1kzoO89fCpvm77kXlH2cg32%2FVxdWJMzjZCHncIEPQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJry8qPYbLHpDfw7HircAyec0SNami5CYM1O8iYSANvISM3BeaK5XaD4GZ3nHSGRbvfIrtdpNETI3yh5yl8y%2BwJQnOQ6%2B4B%2FkGOyZUWAHEv0ncWMxu%2FsUT4YxaPJthpogublPe1JAspqEWuuaJ7efpLRgo6lR0Ios2Ug03ZrjZwKK0eQiEqoGid6KpqlyxD0MItCwgMqtJ%2BDxBHXTL37D0%2BEvjDspJDqnycT8GVw6Lpy6VifmPy7Ytn9pdIFDFeInp5Hgg%2B6YvZ40zlt%2B6QJkIpqDUMoNbuVahNy2HvzNtrVrPUUZxCM7LnlWi7k1lmkpKMZNL5yX1x6cd%2Fk0ppfrGsR4ELh%2FsLV5%2BhGxJI%2FbeYY240yUSgOVTIbTOP5r9b8ckUzG%2Fu7m3KeuH6vFHCjWBSvMCNXoEMKMT%2BaukKiL48e24Y6MFHmpXDTo3n4Tk%2BI6Ca%2B0pRNvRhLwqXatu6O8kjpkxOwhdCYBp%2FO2nMYIE1DuSiI0gnHNfJxGoAjPVCmraKAhXEKsmKYKcGpXkivD8pdeVsafTso2fnDq66ntMw8QFoQDIsL7UbdOtv01Kx2UwnC%2Bw9a3hwffHapZ%2BSh0EAMT5F%2F9iiZB6SIqmmwlxIf603QiU0m47oMzOfMPh4hxWPKjZDu3%2BMG7SvOMOTimcEGOqUBz2sNpwmJwUAaXNKg4ZB%2Bk78uDOXCo3vlaEMhBBrqKZB2L0T34LtNQzJ%2BCC8r94MdzdirNnxWN5JpvuvBSe8zaCKt2%2B3j44jJRfHCqCp9jByImoj%2FD%2FDFq5rj8gvBGzekmiDIn%2BFoSbqW6FC94R7j4o%2FHq%2BmXpyAf1JrW50iIhcj8HDamJUDeU731Ixj5QE3lw8M7oLDRo%2B6MkXHPNnC66%2BYBcbE9&X-Amz-Signature=8fcd1b4a1dc28dd9bb0909c4da4911ce7f04e4bdfddffaa37b1fd69649ee5f85&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCYZJAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGflUyLT7UapUT9NPsrfqGhbS6iJBNLPfJfwzpvlG0yvAiEA%2BU1kzoO89fCpvm77kXlH2cg32%2FVxdWJMzjZCHncIEPQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJry8qPYbLHpDfw7HircAyec0SNami5CYM1O8iYSANvISM3BeaK5XaD4GZ3nHSGRbvfIrtdpNETI3yh5yl8y%2BwJQnOQ6%2B4B%2FkGOyZUWAHEv0ncWMxu%2FsUT4YxaPJthpogublPe1JAspqEWuuaJ7efpLRgo6lR0Ios2Ug03ZrjZwKK0eQiEqoGid6KpqlyxD0MItCwgMqtJ%2BDxBHXTL37D0%2BEvjDspJDqnycT8GVw6Lpy6VifmPy7Ytn9pdIFDFeInp5Hgg%2B6YvZ40zlt%2B6QJkIpqDUMoNbuVahNy2HvzNtrVrPUUZxCM7LnlWi7k1lmkpKMZNL5yX1x6cd%2Fk0ppfrGsR4ELh%2FsLV5%2BhGxJI%2FbeYY240yUSgOVTIbTOP5r9b8ckUzG%2Fu7m3KeuH6vFHCjWBSvMCNXoEMKMT%2BaukKiL48e24Y6MFHmpXDTo3n4Tk%2BI6Ca%2B0pRNvRhLwqXatu6O8kjpkxOwhdCYBp%2FO2nMYIE1DuSiI0gnHNfJxGoAjPVCmraKAhXEKsmKYKcGpXkivD8pdeVsafTso2fnDq66ntMw8QFoQDIsL7UbdOtv01Kx2UwnC%2Bw9a3hwffHapZ%2BSh0EAMT5F%2F9iiZB6SIqmmwlxIf603QiU0m47oMzOfMPh4hxWPKjZDu3%2BMG7SvOMOTimcEGOqUBz2sNpwmJwUAaXNKg4ZB%2Bk78uDOXCo3vlaEMhBBrqKZB2L0T34LtNQzJ%2BCC8r94MdzdirNnxWN5JpvuvBSe8zaCKt2%2B3j44jJRfHCqCp9jByImoj%2FD%2FDFq5rj8gvBGzekmiDIn%2BFoSbqW6FC94R7j4o%2FHq%2BmXpyAf1JrW50iIhcj8HDamJUDeU731Ixj5QE3lw8M7oLDRo%2B6MkXHPNnC66%2BYBcbE9&X-Amz-Signature=9881e89298e7fca7ce96ccdf893a2552124020bd50f82881f42c8939195b5b75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JCYZJAH%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIGflUyLT7UapUT9NPsrfqGhbS6iJBNLPfJfwzpvlG0yvAiEA%2BU1kzoO89fCpvm77kXlH2cg32%2FVxdWJMzjZCHncIEPQq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDJry8qPYbLHpDfw7HircAyec0SNami5CYM1O8iYSANvISM3BeaK5XaD4GZ3nHSGRbvfIrtdpNETI3yh5yl8y%2BwJQnOQ6%2B4B%2FkGOyZUWAHEv0ncWMxu%2FsUT4YxaPJthpogublPe1JAspqEWuuaJ7efpLRgo6lR0Ios2Ug03ZrjZwKK0eQiEqoGid6KpqlyxD0MItCwgMqtJ%2BDxBHXTL37D0%2BEvjDspJDqnycT8GVw6Lpy6VifmPy7Ytn9pdIFDFeInp5Hgg%2B6YvZ40zlt%2B6QJkIpqDUMoNbuVahNy2HvzNtrVrPUUZxCM7LnlWi7k1lmkpKMZNL5yX1x6cd%2Fk0ppfrGsR4ELh%2FsLV5%2BhGxJI%2FbeYY240yUSgOVTIbTOP5r9b8ckUzG%2Fu7m3KeuH6vFHCjWBSvMCNXoEMKMT%2BaukKiL48e24Y6MFHmpXDTo3n4Tk%2BI6Ca%2B0pRNvRhLwqXatu6O8kjpkxOwhdCYBp%2FO2nMYIE1DuSiI0gnHNfJxGoAjPVCmraKAhXEKsmKYKcGpXkivD8pdeVsafTso2fnDq66ntMw8QFoQDIsL7UbdOtv01Kx2UwnC%2Bw9a3hwffHapZ%2BSh0EAMT5F%2F9iiZB6SIqmmwlxIf603QiU0m47oMzOfMPh4hxWPKjZDu3%2BMG7SvOMOTimcEGOqUBz2sNpwmJwUAaXNKg4ZB%2Bk78uDOXCo3vlaEMhBBrqKZB2L0T34LtNQzJ%2BCC8r94MdzdirNnxWN5JpvuvBSe8zaCKt2%2B3j44jJRfHCqCp9jByImoj%2FD%2FDFq5rj8gvBGzekmiDIn%2BFoSbqW6FC94R7j4o%2FHq%2BmXpyAf1JrW50iIhcj8HDamJUDeU731Ixj5QE3lw8M7oLDRo%2B6MkXHPNnC66%2BYBcbE9&X-Amz-Signature=4101ff9e70990691337122324f968c886a7027c3f9fd5f68c7866202da9d70c0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
