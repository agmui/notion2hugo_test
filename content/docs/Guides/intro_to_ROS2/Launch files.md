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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4TVQY6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDbYbVS%2F29qLpYaLvc1YzysghjvQE8wIq9gUfGG5OMHTgIgGegdUZ3cjjNFnrgbJbfG9YP%2FBVppLT%2B8IRbfTRSZcJgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPV2dcK%2BDLukxkieISrcA3FN6fDRH3Tmveog3w7J%2Bqjcx4wHS9pk7%2Bbar4r0e5Fv8TaI%2Fi8nmUUHZo6eKy40mfarN4R6XL0tryoMU6B1uWNse7jQ0gukkreygyHH5sRcTE3o90KfscwbFUIkfSu3tn6Wk6LfEgZPCw1SZsKgg4Ej4O4pcLUETcunWTykrAKdKvgBK14DcLZs50TgSZyF4rpUX7V3TdGWBh7kGalzYO68QOFOfNa7h8mvWQzQqHiKuPbvNorW11ECiO%2BKnA4vvkTodRltxnKCdH8MENsQfiJDukEtqfxW1G7wNYyell7Pxg19ZpVacfIDA8A5wVfVQFL1OuBj444t3479LeaXegaJj9QrTF9sJQgvwFemunBaEs2JPw8zf9Ku9EeyKAtRn%2Fd8I4XMIcSa5z5FMCQn4i77bzVhM2%2FBm22FJEF%2FVTdZ6m7lHsXc3YODseq2wZEr%2BgDSYxVbC%2BVLjFklJV%2F9dkpBhVlfL89SaMtVvjKYdh075T6fxw7i3yehAz2B3ZlNuIikbG1U0c8Nx5dFiS%2FyHlF6w%2F2eQCUF4G%2ByL2Mh%2F7QIGqoNtiF99JdojKFCyrzXDz43WrrSJwjJnuulAl850WKL24Uh5JRVpLd8cEJtim70n7u%2Bd4tiPs7wxbB5MNTg8MIGOqUBTtEItvN9FHNuXN9lNae6CklyqRyy5mUUBmaiat6zKiGt0tLGv0EwgsgEiU6vXgyZWrrmluVZw%2BX7hUi3BQ22ZClXYkgVjMh9a1NTzNuw9j2UvNjYp%2Bgm3hVhz5BSxx3Bd4BL1TG0%2BAvS4jncyJ5RzKX1krs3qexMlXn5H0IC9akcjbL4D%2F6QZEDNQoQeZ171In1SkmJPkgfNK8d%2FiKXeM9yAt%2FI0&X-Amz-Signature=13539188fd5b1a7f02826784a9c3368dc52d39b2175acb28712d3cda2163c7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4TVQY6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDbYbVS%2F29qLpYaLvc1YzysghjvQE8wIq9gUfGG5OMHTgIgGegdUZ3cjjNFnrgbJbfG9YP%2FBVppLT%2B8IRbfTRSZcJgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPV2dcK%2BDLukxkieISrcA3FN6fDRH3Tmveog3w7J%2Bqjcx4wHS9pk7%2Bbar4r0e5Fv8TaI%2Fi8nmUUHZo6eKy40mfarN4R6XL0tryoMU6B1uWNse7jQ0gukkreygyHH5sRcTE3o90KfscwbFUIkfSu3tn6Wk6LfEgZPCw1SZsKgg4Ej4O4pcLUETcunWTykrAKdKvgBK14DcLZs50TgSZyF4rpUX7V3TdGWBh7kGalzYO68QOFOfNa7h8mvWQzQqHiKuPbvNorW11ECiO%2BKnA4vvkTodRltxnKCdH8MENsQfiJDukEtqfxW1G7wNYyell7Pxg19ZpVacfIDA8A5wVfVQFL1OuBj444t3479LeaXegaJj9QrTF9sJQgvwFemunBaEs2JPw8zf9Ku9EeyKAtRn%2Fd8I4XMIcSa5z5FMCQn4i77bzVhM2%2FBm22FJEF%2FVTdZ6m7lHsXc3YODseq2wZEr%2BgDSYxVbC%2BVLjFklJV%2F9dkpBhVlfL89SaMtVvjKYdh075T6fxw7i3yehAz2B3ZlNuIikbG1U0c8Nx5dFiS%2FyHlF6w%2F2eQCUF4G%2ByL2Mh%2F7QIGqoNtiF99JdojKFCyrzXDz43WrrSJwjJnuulAl850WKL24Uh5JRVpLd8cEJtim70n7u%2Bd4tiPs7wxbB5MNTg8MIGOqUBTtEItvN9FHNuXN9lNae6CklyqRyy5mUUBmaiat6zKiGt0tLGv0EwgsgEiU6vXgyZWrrmluVZw%2BX7hUi3BQ22ZClXYkgVjMh9a1NTzNuw9j2UvNjYp%2Bgm3hVhz5BSxx3Bd4BL1TG0%2BAvS4jncyJ5RzKX1krs3qexMlXn5H0IC9akcjbL4D%2F6QZEDNQoQeZ171In1SkmJPkgfNK8d%2FiKXeM9yAt%2FI0&X-Amz-Signature=20037a6032f0f3fe6c8788769fc6a845f75e6cc088e06d8da887e6c9be285738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4TVQY6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T181233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQDbYbVS%2F29qLpYaLvc1YzysghjvQE8wIq9gUfGG5OMHTgIgGegdUZ3cjjNFnrgbJbfG9YP%2FBVppLT%2B8IRbfTRSZcJgq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDPV2dcK%2BDLukxkieISrcA3FN6fDRH3Tmveog3w7J%2Bqjcx4wHS9pk7%2Bbar4r0e5Fv8TaI%2Fi8nmUUHZo6eKy40mfarN4R6XL0tryoMU6B1uWNse7jQ0gukkreygyHH5sRcTE3o90KfscwbFUIkfSu3tn6Wk6LfEgZPCw1SZsKgg4Ej4O4pcLUETcunWTykrAKdKvgBK14DcLZs50TgSZyF4rpUX7V3TdGWBh7kGalzYO68QOFOfNa7h8mvWQzQqHiKuPbvNorW11ECiO%2BKnA4vvkTodRltxnKCdH8MENsQfiJDukEtqfxW1G7wNYyell7Pxg19ZpVacfIDA8A5wVfVQFL1OuBj444t3479LeaXegaJj9QrTF9sJQgvwFemunBaEs2JPw8zf9Ku9EeyKAtRn%2Fd8I4XMIcSa5z5FMCQn4i77bzVhM2%2FBm22FJEF%2FVTdZ6m7lHsXc3YODseq2wZEr%2BgDSYxVbC%2BVLjFklJV%2F9dkpBhVlfL89SaMtVvjKYdh075T6fxw7i3yehAz2B3ZlNuIikbG1U0c8Nx5dFiS%2FyHlF6w%2F2eQCUF4G%2ByL2Mh%2F7QIGqoNtiF99JdojKFCyrzXDz43WrrSJwjJnuulAl850WKL24Uh5JRVpLd8cEJtim70n7u%2Bd4tiPs7wxbB5MNTg8MIGOqUBTtEItvN9FHNuXN9lNae6CklyqRyy5mUUBmaiat6zKiGt0tLGv0EwgsgEiU6vXgyZWrrmluVZw%2BX7hUi3BQ22ZClXYkgVjMh9a1NTzNuw9j2UvNjYp%2Bgm3hVhz5BSxx3Bd4BL1TG0%2BAvS4jncyJ5RzKX1krs3qexMlXn5H0IC9akcjbL4D%2F6QZEDNQoQeZ171In1SkmJPkgfNK8d%2FiKXeM9yAt%2FI0&X-Amz-Signature=e6e26eee40f6266f5baa0ff3447923a31c9de49c8209b0a5a16d15a14d53b179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
