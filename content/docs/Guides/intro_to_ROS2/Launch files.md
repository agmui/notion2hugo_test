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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZJCPAL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICG6%2BH12vuZq5AmrqMIyPiqzPF6%2B462DWEg8Q8j62u58AiEA0n49Ap4GyhcFl6B9Moj8m6jcgKGBFjt8Uh4x9G0dLdUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGYMCU6XdjEdbF2ytSrcA0qX7sqonFDlNc2KDM63H799ApVEFBRQFafpyF7kI0eir8kguCJJcE7j2JjjPWikgTAVrLGfBlE4U%2BYKBucreQLPhyGxvVH96xVFLkr9VEpJFMP0AIVf0ee5fgJNpoEWAAvaKFEGtXsLZU%2BbHby81gv6k2yiVVZTUZ68Ogql1BHCcWRf%2FN8kFqELoirTJR7bM8scpAltNAQ2aVfHE0%2FY0gPfhvzJzOoFy4dXfuyxr8lBIiqBrgGV4UUFD%2FyZ6mFuMFh7CTSG5H1%2FPs%2BxC%2BaMsZOMO6y1qNsHWa3Dxx%2BusplnEirk%2BTr7pLPL9rmjgwT7PmzY5p5qBo5AKjufsR7TR0dqnVEDOueVloTU%2BlhCkrsf128VZ02EnnrQFNbofE%2BthA%2B3VDNRnggqVFc4Cr9vbJ22%2Fhie%2BY9htKNNgUQedLsYI6EZBkBrMw1a1c7hYicIbNDL9y3Ef7hNUgpPEzqo3GdwFd%2BUAbO6xAUGeRBqXHYbD%2BpobY3yT%2B80L1yR%2FM1TJKXj7qvBZrqXzgpm96zYGrE6cLRAOqky4fBR0X2Kk4vtXqYge2YybWD0kZAWJrCr6CvPi59SoR%2Fni4TUZDsNDZKoqvXAK7z%2BTYr5z4a%2F6606cQ4%2FX2QLiTkE59CWMM%2BfoL8GOqUBZqGvSEhVv2TGM1CDc%2BfVIPuXeiWNkWH%2BE%2BqHY9X79MPRqPbFc014FXBYpG0TnV1FOeAXN9zixCyj%2BuoJG%2FytBpTck1RQG0ZHGXgubxGUkOx5GeOYjVhZPLVrHNYlz4J9SJfqEEJmDgAVmqVvM2dD0UECkPKPTE5Uf9H8ev6HOADwBzE8iUIFXF%2BadK4uvFYZ%2FYm44Ex0wqjj5LvCaL9j%2F%2FOcO0zF&X-Amz-Signature=08d1396120cabd47fac97e56458bb4af039dcf99820fb0e0a2eddd4d97d3a13e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZJCPAL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICG6%2BH12vuZq5AmrqMIyPiqzPF6%2B462DWEg8Q8j62u58AiEA0n49Ap4GyhcFl6B9Moj8m6jcgKGBFjt8Uh4x9G0dLdUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGYMCU6XdjEdbF2ytSrcA0qX7sqonFDlNc2KDM63H799ApVEFBRQFafpyF7kI0eir8kguCJJcE7j2JjjPWikgTAVrLGfBlE4U%2BYKBucreQLPhyGxvVH96xVFLkr9VEpJFMP0AIVf0ee5fgJNpoEWAAvaKFEGtXsLZU%2BbHby81gv6k2yiVVZTUZ68Ogql1BHCcWRf%2FN8kFqELoirTJR7bM8scpAltNAQ2aVfHE0%2FY0gPfhvzJzOoFy4dXfuyxr8lBIiqBrgGV4UUFD%2FyZ6mFuMFh7CTSG5H1%2FPs%2BxC%2BaMsZOMO6y1qNsHWa3Dxx%2BusplnEirk%2BTr7pLPL9rmjgwT7PmzY5p5qBo5AKjufsR7TR0dqnVEDOueVloTU%2BlhCkrsf128VZ02EnnrQFNbofE%2BthA%2B3VDNRnggqVFc4Cr9vbJ22%2Fhie%2BY9htKNNgUQedLsYI6EZBkBrMw1a1c7hYicIbNDL9y3Ef7hNUgpPEzqo3GdwFd%2BUAbO6xAUGeRBqXHYbD%2BpobY3yT%2B80L1yR%2FM1TJKXj7qvBZrqXzgpm96zYGrE6cLRAOqky4fBR0X2Kk4vtXqYge2YybWD0kZAWJrCr6CvPi59SoR%2Fni4TUZDsNDZKoqvXAK7z%2BTYr5z4a%2F6606cQ4%2FX2QLiTkE59CWMM%2BfoL8GOqUBZqGvSEhVv2TGM1CDc%2BfVIPuXeiWNkWH%2BE%2BqHY9X79MPRqPbFc014FXBYpG0TnV1FOeAXN9zixCyj%2BuoJG%2FytBpTck1RQG0ZHGXgubxGUkOx5GeOYjVhZPLVrHNYlz4J9SJfqEEJmDgAVmqVvM2dD0UECkPKPTE5Uf9H8ev6HOADwBzE8iUIFXF%2BadK4uvFYZ%2FYm44Ex0wqjj5LvCaL9j%2F%2FOcO0zF&X-Amz-Signature=5898b9f490c2ff676083f4eaf772a044d5579b1785d1844b8ec06298a7af13c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633ZJCPAL%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCICG6%2BH12vuZq5AmrqMIyPiqzPF6%2B462DWEg8Q8j62u58AiEA0n49Ap4GyhcFl6B9Moj8m6jcgKGBFjt8Uh4x9G0dLdUq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDGYMCU6XdjEdbF2ytSrcA0qX7sqonFDlNc2KDM63H799ApVEFBRQFafpyF7kI0eir8kguCJJcE7j2JjjPWikgTAVrLGfBlE4U%2BYKBucreQLPhyGxvVH96xVFLkr9VEpJFMP0AIVf0ee5fgJNpoEWAAvaKFEGtXsLZU%2BbHby81gv6k2yiVVZTUZ68Ogql1BHCcWRf%2FN8kFqELoirTJR7bM8scpAltNAQ2aVfHE0%2FY0gPfhvzJzOoFy4dXfuyxr8lBIiqBrgGV4UUFD%2FyZ6mFuMFh7CTSG5H1%2FPs%2BxC%2BaMsZOMO6y1qNsHWa3Dxx%2BusplnEirk%2BTr7pLPL9rmjgwT7PmzY5p5qBo5AKjufsR7TR0dqnVEDOueVloTU%2BlhCkrsf128VZ02EnnrQFNbofE%2BthA%2B3VDNRnggqVFc4Cr9vbJ22%2Fhie%2BY9htKNNgUQedLsYI6EZBkBrMw1a1c7hYicIbNDL9y3Ef7hNUgpPEzqo3GdwFd%2BUAbO6xAUGeRBqXHYbD%2BpobY3yT%2B80L1yR%2FM1TJKXj7qvBZrqXzgpm96zYGrE6cLRAOqky4fBR0X2Kk4vtXqYge2YybWD0kZAWJrCr6CvPi59SoR%2Fni4TUZDsNDZKoqvXAK7z%2BTYr5z4a%2F6606cQ4%2FX2QLiTkE59CWMM%2BfoL8GOqUBZqGvSEhVv2TGM1CDc%2BfVIPuXeiWNkWH%2BE%2BqHY9X79MPRqPbFc014FXBYpG0TnV1FOeAXN9zixCyj%2BuoJG%2FytBpTck1RQG0ZHGXgubxGUkOx5GeOYjVhZPLVrHNYlz4J9SJfqEEJmDgAVmqVvM2dD0UECkPKPTE5Uf9H8ev6HOADwBzE8iUIFXF%2BadK4uvFYZ%2FYm44Ex0wqjj5LvCaL9j%2F%2FOcO0zF&X-Amz-Signature=94716b31582c562a4ab39fb9ce51121bfa1ae211428b563c77d841fc8887f769&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
