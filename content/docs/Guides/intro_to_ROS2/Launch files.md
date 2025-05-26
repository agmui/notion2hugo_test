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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFP2S6Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCpCb1Ilo3FagN%2B3yhCRZpHcDiCGBkZKHNCTm1rCa1kWAIhAJoSAbvKcvH74YQ%2By5UWZsp1OVfrBQ6X7LCCB3afiL3QKv8DCEcQABoMNjM3NDIzMTgzODA1IgwYq8xm4hmtOzyEiSkq3AOBgQzkqgGldavYRtSknb5%2FiPm%2F9aovvuQ73ENMCaoqiCqOdIaDhswfvVxJE6nmxoBlmuftM7cpKx8FzUuQGR4gUtSdw02hGaHHN4RzXczpopfrE1VO6bXtffGhPmGfOXXbadl3hrOchL3wYFrPO2ov3upKtQCo5b%2FR%2FNNy6EhzQMWbvR8wzrOIcPrrt2Z22cGsDqAFTC%2FsiGN3LIK8c%2FkU8GPcQYLqn3IIDk0bu23uh509STjuW%2F07KN5ICF1xQRWEESBIWw4SUPjsrH%2B%2FvO3rLOwoBPgl87N3re8fl4JJjAl6ozocTOD1jY%2FWQ4%2BWi8VOZfsTWqI5Reu%2BhMzyiCHp7SWST8tNXH8X%2FhfHMuUbOEcCr1YV2T2Eongx5JBicu4SgfNAu4Iyh3aYSBA%2FU3XU2vS0H%2Bs%2BrIxIhartcY1f9rt7kF75CwyLwwytyjyukxWkzhCFGcNQdLS3YtAgmLa2XRerIyZuhIJYZKH6q6OAm8x%2F8kfPywj%2B5wcJXnPOshr7bEzWsgqd%2F00bjoi%2BIG0%2B40qW1bagkoVa4o2V2%2BC28b%2FhTj4GNaFIcGUukE1lqXvRnJODCbQldFsg40TzlkmQxhDBPxdA%2FhUC%2FF%2BRtv4aQxIXCzUp1c2TdFWJRTCK5tHBBjqkASn1Gzk7GJzW%2BgVGxUPzlOvLw5Af1O%2FQcTFEENZG6cShUI%2FaYsHtoddZPnePJ%2Fwe7tXWAqmyW7edZ93EgwBKQandO6j80l9sy0YsgEgCdRhbfhn1z10%2F8WkttEzEjyCpgXzTdJhZjc5KoMamzlCrylHAXuaw0K7ut%2BuyPr5KayuEwKmlK4dMaEkObOMJx3T9WqBU4ZjuXQ9NaAN97BQj7bqff9iq&X-Amz-Signature=b39b133be551a512cf58ef3e37c6da2136fc3411a327d44dd70619426301a260&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFP2S6Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCpCb1Ilo3FagN%2B3yhCRZpHcDiCGBkZKHNCTm1rCa1kWAIhAJoSAbvKcvH74YQ%2By5UWZsp1OVfrBQ6X7LCCB3afiL3QKv8DCEcQABoMNjM3NDIzMTgzODA1IgwYq8xm4hmtOzyEiSkq3AOBgQzkqgGldavYRtSknb5%2FiPm%2F9aovvuQ73ENMCaoqiCqOdIaDhswfvVxJE6nmxoBlmuftM7cpKx8FzUuQGR4gUtSdw02hGaHHN4RzXczpopfrE1VO6bXtffGhPmGfOXXbadl3hrOchL3wYFrPO2ov3upKtQCo5b%2FR%2FNNy6EhzQMWbvR8wzrOIcPrrt2Z22cGsDqAFTC%2FsiGN3LIK8c%2FkU8GPcQYLqn3IIDk0bu23uh509STjuW%2F07KN5ICF1xQRWEESBIWw4SUPjsrH%2B%2FvO3rLOwoBPgl87N3re8fl4JJjAl6ozocTOD1jY%2FWQ4%2BWi8VOZfsTWqI5Reu%2BhMzyiCHp7SWST8tNXH8X%2FhfHMuUbOEcCr1YV2T2Eongx5JBicu4SgfNAu4Iyh3aYSBA%2FU3XU2vS0H%2Bs%2BrIxIhartcY1f9rt7kF75CwyLwwytyjyukxWkzhCFGcNQdLS3YtAgmLa2XRerIyZuhIJYZKH6q6OAm8x%2F8kfPywj%2B5wcJXnPOshr7bEzWsgqd%2F00bjoi%2BIG0%2B40qW1bagkoVa4o2V2%2BC28b%2FhTj4GNaFIcGUukE1lqXvRnJODCbQldFsg40TzlkmQxhDBPxdA%2FhUC%2FF%2BRtv4aQxIXCzUp1c2TdFWJRTCK5tHBBjqkASn1Gzk7GJzW%2BgVGxUPzlOvLw5Af1O%2FQcTFEENZG6cShUI%2FaYsHtoddZPnePJ%2Fwe7tXWAqmyW7edZ93EgwBKQandO6j80l9sy0YsgEgCdRhbfhn1z10%2F8WkttEzEjyCpgXzTdJhZjc5KoMamzlCrylHAXuaw0K7ut%2BuyPr5KayuEwKmlK4dMaEkObOMJx3T9WqBU4ZjuXQ9NaAN97BQj7bqff9iq&X-Amz-Signature=c6875e71cb236f7dcab60a5a3abb230ad8dbb20827a44131d727a709e193090c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFP2S6Q%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T140911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCpCb1Ilo3FagN%2B3yhCRZpHcDiCGBkZKHNCTm1rCa1kWAIhAJoSAbvKcvH74YQ%2By5UWZsp1OVfrBQ6X7LCCB3afiL3QKv8DCEcQABoMNjM3NDIzMTgzODA1IgwYq8xm4hmtOzyEiSkq3AOBgQzkqgGldavYRtSknb5%2FiPm%2F9aovvuQ73ENMCaoqiCqOdIaDhswfvVxJE6nmxoBlmuftM7cpKx8FzUuQGR4gUtSdw02hGaHHN4RzXczpopfrE1VO6bXtffGhPmGfOXXbadl3hrOchL3wYFrPO2ov3upKtQCo5b%2FR%2FNNy6EhzQMWbvR8wzrOIcPrrt2Z22cGsDqAFTC%2FsiGN3LIK8c%2FkU8GPcQYLqn3IIDk0bu23uh509STjuW%2F07KN5ICF1xQRWEESBIWw4SUPjsrH%2B%2FvO3rLOwoBPgl87N3re8fl4JJjAl6ozocTOD1jY%2FWQ4%2BWi8VOZfsTWqI5Reu%2BhMzyiCHp7SWST8tNXH8X%2FhfHMuUbOEcCr1YV2T2Eongx5JBicu4SgfNAu4Iyh3aYSBA%2FU3XU2vS0H%2Bs%2BrIxIhartcY1f9rt7kF75CwyLwwytyjyukxWkzhCFGcNQdLS3YtAgmLa2XRerIyZuhIJYZKH6q6OAm8x%2F8kfPywj%2B5wcJXnPOshr7bEzWsgqd%2F00bjoi%2BIG0%2B40qW1bagkoVa4o2V2%2BC28b%2FhTj4GNaFIcGUukE1lqXvRnJODCbQldFsg40TzlkmQxhDBPxdA%2FhUC%2FF%2BRtv4aQxIXCzUp1c2TdFWJRTCK5tHBBjqkASn1Gzk7GJzW%2BgVGxUPzlOvLw5Af1O%2FQcTFEENZG6cShUI%2FaYsHtoddZPnePJ%2Fwe7tXWAqmyW7edZ93EgwBKQandO6j80l9sy0YsgEgCdRhbfhn1z10%2F8WkttEzEjyCpgXzTdJhZjc5KoMamzlCrylHAXuaw0K7ut%2BuyPr5KayuEwKmlK4dMaEkObOMJx3T9WqBU4ZjuXQ9NaAN97BQj7bqff9iq&X-Amz-Signature=207362f0f62eef27b33e73942e6114dc57afffae0786fa3bcfabea53b2f71bad&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
