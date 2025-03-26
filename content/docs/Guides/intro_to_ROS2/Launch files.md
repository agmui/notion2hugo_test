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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW32E7TI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHjFyC3UjDnNVRqfny%2FJ4SaVkQmZKPz2lD8Eh8dJI9TAiEAwgz4CARU7bpKda7ZiQdBcRZibu2%2FV0ztYUuJRg3k1oAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNccaSGicmiQSRT3eircA5DehkrthnqBiPQGEy8lRl%2B4HUpsQ3Ss0WQgNOlNn8TMixNwzw1yQva0NHWIgwWrZIv%2FkHF5uDNmbgpSOvBNMPAEd0SDvibQl3QSxwq2ulGXmdwzBHamxET4trg8eQoS1qwiwZc4qxXC23H61lw3YhsZThXOgl2F7ntw6vkJ1aNJjD7RN2z1qJ7OK%2FkvPblhZLF3az94sCvLIn70HtK%2B5gnJysHLdl2HrybMWF%2FVr6DHm2x0i5yn0n9pjTu25Gyk%2BXfKAPY31dNptl%2BBDLO8VNgtV8LVi4GDsOs9pI%2FpmJRvaYn4ntpJu2iCTK25ynNpYHfkRuhmhRCzMnx5VB1rnnKaxaNGgxdFXtCjdOz%2FvgfB5XQIaxt%2BEkOzO6kyed05tIyJocr%2FJMDQyU5r9nv9cFInmGr9eveR7rWXYNXohWN3GG5Cu25hYdnbYm3zH2NgqQP5ioJ0cOImScf9yeIHf0reDoLpdcuPEKTYmbbY9xpUycU39BkNdMMaUEJHrDrZdpPSLttd1OigU%2BwtbI91mVQ3iSu955ODnixVAFwSnU6kZc7Do6NVUtrjZ6QVAcEjZXPxslojbMe2AvDoQ8uGrl3UYi2%2F9Hd%2BfHWHoi7JpVslyEirPsRtkG1gQB1FMLKzkb8GOqUBbEUmr3WDvgJAoMKpsULD0GUM7QucSMmYszqvTPmK%2FfN4zLqiMImHJBVBl%2B6JYDZWJGWwvaDLJhzl348r8PbzEq07HFKxig3xaHTKO9MOFJ6%2B4yD%2BzKzWUJU8OnUp2iYDIqZYNjDqoXI%2BFHW3ssb24pmSOLD5rW5wQ9ghCHluAPg57%2BIVhhrQ6VCuzzvK9uUKOsBzJJsOv6YqQbCl8uVyn4Xojz4i&X-Amz-Signature=f4c59cb43dc19fa530d51cc747af9ae329ee8d98a6de521559bf094f67c63bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW32E7TI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHjFyC3UjDnNVRqfny%2FJ4SaVkQmZKPz2lD8Eh8dJI9TAiEAwgz4CARU7bpKda7ZiQdBcRZibu2%2FV0ztYUuJRg3k1oAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNccaSGicmiQSRT3eircA5DehkrthnqBiPQGEy8lRl%2B4HUpsQ3Ss0WQgNOlNn8TMixNwzw1yQva0NHWIgwWrZIv%2FkHF5uDNmbgpSOvBNMPAEd0SDvibQl3QSxwq2ulGXmdwzBHamxET4trg8eQoS1qwiwZc4qxXC23H61lw3YhsZThXOgl2F7ntw6vkJ1aNJjD7RN2z1qJ7OK%2FkvPblhZLF3az94sCvLIn70HtK%2B5gnJysHLdl2HrybMWF%2FVr6DHm2x0i5yn0n9pjTu25Gyk%2BXfKAPY31dNptl%2BBDLO8VNgtV8LVi4GDsOs9pI%2FpmJRvaYn4ntpJu2iCTK25ynNpYHfkRuhmhRCzMnx5VB1rnnKaxaNGgxdFXtCjdOz%2FvgfB5XQIaxt%2BEkOzO6kyed05tIyJocr%2FJMDQyU5r9nv9cFInmGr9eveR7rWXYNXohWN3GG5Cu25hYdnbYm3zH2NgqQP5ioJ0cOImScf9yeIHf0reDoLpdcuPEKTYmbbY9xpUycU39BkNdMMaUEJHrDrZdpPSLttd1OigU%2BwtbI91mVQ3iSu955ODnixVAFwSnU6kZc7Do6NVUtrjZ6QVAcEjZXPxslojbMe2AvDoQ8uGrl3UYi2%2F9Hd%2BfHWHoi7JpVslyEirPsRtkG1gQB1FMLKzkb8GOqUBbEUmr3WDvgJAoMKpsULD0GUM7QucSMmYszqvTPmK%2FfN4zLqiMImHJBVBl%2B6JYDZWJGWwvaDLJhzl348r8PbzEq07HFKxig3xaHTKO9MOFJ6%2B4yD%2BzKzWUJU8OnUp2iYDIqZYNjDqoXI%2BFHW3ssb24pmSOLD5rW5wQ9ghCHluAPg57%2BIVhhrQ6VCuzzvK9uUKOsBzJJsOv6YqQbCl8uVyn4Xojz4i&X-Amz-Signature=86490d1c26ebdea2e640eecb931729690e49b9f9215531573955f8f67b375399&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW32E7TI%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFHjFyC3UjDnNVRqfny%2FJ4SaVkQmZKPz2lD8Eh8dJI9TAiEAwgz4CARU7bpKda7ZiQdBcRZibu2%2FV0ztYUuJRg3k1oAq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDNccaSGicmiQSRT3eircA5DehkrthnqBiPQGEy8lRl%2B4HUpsQ3Ss0WQgNOlNn8TMixNwzw1yQva0NHWIgwWrZIv%2FkHF5uDNmbgpSOvBNMPAEd0SDvibQl3QSxwq2ulGXmdwzBHamxET4trg8eQoS1qwiwZc4qxXC23H61lw3YhsZThXOgl2F7ntw6vkJ1aNJjD7RN2z1qJ7OK%2FkvPblhZLF3az94sCvLIn70HtK%2B5gnJysHLdl2HrybMWF%2FVr6DHm2x0i5yn0n9pjTu25Gyk%2BXfKAPY31dNptl%2BBDLO8VNgtV8LVi4GDsOs9pI%2FpmJRvaYn4ntpJu2iCTK25ynNpYHfkRuhmhRCzMnx5VB1rnnKaxaNGgxdFXtCjdOz%2FvgfB5XQIaxt%2BEkOzO6kyed05tIyJocr%2FJMDQyU5r9nv9cFInmGr9eveR7rWXYNXohWN3GG5Cu25hYdnbYm3zH2NgqQP5ioJ0cOImScf9yeIHf0reDoLpdcuPEKTYmbbY9xpUycU39BkNdMMaUEJHrDrZdpPSLttd1OigU%2BwtbI91mVQ3iSu955ODnixVAFwSnU6kZc7Do6NVUtrjZ6QVAcEjZXPxslojbMe2AvDoQ8uGrl3UYi2%2F9Hd%2BfHWHoi7JpVslyEirPsRtkG1gQB1FMLKzkb8GOqUBbEUmr3WDvgJAoMKpsULD0GUM7QucSMmYszqvTPmK%2FfN4zLqiMImHJBVBl%2B6JYDZWJGWwvaDLJhzl348r8PbzEq07HFKxig3xaHTKO9MOFJ6%2B4yD%2BzKzWUJU8OnUp2iYDIqZYNjDqoXI%2BFHW3ssb24pmSOLD5rW5wQ9ghCHluAPg57%2BIVhhrQ6VCuzzvK9uUKOsBzJJsOv6YqQbCl8uVyn4Xojz4i&X-Amz-Signature=98d86bcedcfa6ee2369ac89b5d41841b0f26095e41200fac0825b2e8d6929fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
