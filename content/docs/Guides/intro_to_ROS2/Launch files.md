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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK3BPJ5%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF90BAEEF9bW1vc7dMIQRSbkYsyOpwOVkWfF66ykm4aGAiBGG8h7Z02%2F64%2BmLIasEubnTAe%2FPv%2BAlLut1Mkqclhu%2BSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhShoLsoHJFZkptNKtwDH%2BHio39NSdwXWiUvfD56mvf1R7MW4X9Bi3gosCuBj8uFyHXyF9kX3FKuFm2US8fvlpjBnHu895665GPtc8zCUcJpOhNUjyY1%2FcxZuiu%2B1s8gEWGFFBRZ38ZaRvQ0mvATd1ezfc2INuTp7XgR0no7ZIdN77w2OmGjJd2Rpyq8q6AEWwkZKMFR6%2BxJreEUr7sjV5Q%2FK3cLwOyRV0bcqQAnmC9g43By92X41FqVYYX98rS7bhdP4hb6hda47iQ0FJkE65pdXdZGaI%2FtKD0gHnjlNijxcKp4IuRsV0fI6RCQJzMaK4U4ajBpsmTqHET9P%2BWnpMWIfr6h6HCFX5ywmKnY%2By3XKQYVWLuyqmjWEqYWlsIiN1gcgbHQzy9uanwscQLfRrrzTOQmcvQhaUONcg%2Bz1U8d%2BVPWkqmLOntqhmtHacTPRTg%2B%2FOmqWfzxFIhOVZM97Uqq9hKMexz9F7kf5ooDBl7FzmgBo%2Fz73fB2hyVq%2BB%2BHy0bHedurJSWM7DJ9%2BGCavsj%2FUcS7mekUXQghvf612VuBL64X2UQ7kCcIXf2E%2B3kEfhW4jHAopuwhqkrSWOYH%2FzRczGNl%2FwtBHvDa2t5rhjFtVCiCsq5zIPwwIbUutjERyERYNI5Sy3pkGwIw6vuMwAY6pgGHRDX%2BhApgNbOotDmN88GCu8KoNLumKgwdK6wlSrx6D%2B%2B24uyIUk4PbEoxKWmqz6pPkGOR9MgITGhV7WghaZI2TPtqBJjoxeHmLg7k4pwGWqT1QCcc8MASXZLNDSGgMIX7RsAT3V2RpFjzfX0PqSs8UUP0N27TPwnYpUOjpcEKufuSGP3uzoHQt9rieTIUr1IqV99vW2e0t%2BB1R4gxq8kEsTPVr8al&X-Amz-Signature=69718b075964ec1df458888e71a3f54b1c6cffd1512ea790e7122804725852aa&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK3BPJ5%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF90BAEEF9bW1vc7dMIQRSbkYsyOpwOVkWfF66ykm4aGAiBGG8h7Z02%2F64%2BmLIasEubnTAe%2FPv%2BAlLut1Mkqclhu%2BSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhShoLsoHJFZkptNKtwDH%2BHio39NSdwXWiUvfD56mvf1R7MW4X9Bi3gosCuBj8uFyHXyF9kX3FKuFm2US8fvlpjBnHu895665GPtc8zCUcJpOhNUjyY1%2FcxZuiu%2B1s8gEWGFFBRZ38ZaRvQ0mvATd1ezfc2INuTp7XgR0no7ZIdN77w2OmGjJd2Rpyq8q6AEWwkZKMFR6%2BxJreEUr7sjV5Q%2FK3cLwOyRV0bcqQAnmC9g43By92X41FqVYYX98rS7bhdP4hb6hda47iQ0FJkE65pdXdZGaI%2FtKD0gHnjlNijxcKp4IuRsV0fI6RCQJzMaK4U4ajBpsmTqHET9P%2BWnpMWIfr6h6HCFX5ywmKnY%2By3XKQYVWLuyqmjWEqYWlsIiN1gcgbHQzy9uanwscQLfRrrzTOQmcvQhaUONcg%2Bz1U8d%2BVPWkqmLOntqhmtHacTPRTg%2B%2FOmqWfzxFIhOVZM97Uqq9hKMexz9F7kf5ooDBl7FzmgBo%2Fz73fB2hyVq%2BB%2BHy0bHedurJSWM7DJ9%2BGCavsj%2FUcS7mekUXQghvf612VuBL64X2UQ7kCcIXf2E%2B3kEfhW4jHAopuwhqkrSWOYH%2FzRczGNl%2FwtBHvDa2t5rhjFtVCiCsq5zIPwwIbUutjERyERYNI5Sy3pkGwIw6vuMwAY6pgGHRDX%2BhApgNbOotDmN88GCu8KoNLumKgwdK6wlSrx6D%2B%2B24uyIUk4PbEoxKWmqz6pPkGOR9MgITGhV7WghaZI2TPtqBJjoxeHmLg7k4pwGWqT1QCcc8MASXZLNDSGgMIX7RsAT3V2RpFjzfX0PqSs8UUP0N27TPwnYpUOjpcEKufuSGP3uzoHQt9rieTIUr1IqV99vW2e0t%2BB1R4gxq8kEsTPVr8al&X-Amz-Signature=96d07d101f1188d9676aadf5473b82cef924f94ac82f82e04e0948133755d6dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAK3BPJ5%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF90BAEEF9bW1vc7dMIQRSbkYsyOpwOVkWfF66ykm4aGAiBGG8h7Z02%2F64%2BmLIasEubnTAe%2FPv%2BAlLut1Mkqclhu%2BSqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfhShoLsoHJFZkptNKtwDH%2BHio39NSdwXWiUvfD56mvf1R7MW4X9Bi3gosCuBj8uFyHXyF9kX3FKuFm2US8fvlpjBnHu895665GPtc8zCUcJpOhNUjyY1%2FcxZuiu%2B1s8gEWGFFBRZ38ZaRvQ0mvATd1ezfc2INuTp7XgR0no7ZIdN77w2OmGjJd2Rpyq8q6AEWwkZKMFR6%2BxJreEUr7sjV5Q%2FK3cLwOyRV0bcqQAnmC9g43By92X41FqVYYX98rS7bhdP4hb6hda47iQ0FJkE65pdXdZGaI%2FtKD0gHnjlNijxcKp4IuRsV0fI6RCQJzMaK4U4ajBpsmTqHET9P%2BWnpMWIfr6h6HCFX5ywmKnY%2By3XKQYVWLuyqmjWEqYWlsIiN1gcgbHQzy9uanwscQLfRrrzTOQmcvQhaUONcg%2Bz1U8d%2BVPWkqmLOntqhmtHacTPRTg%2B%2FOmqWfzxFIhOVZM97Uqq9hKMexz9F7kf5ooDBl7FzmgBo%2Fz73fB2hyVq%2BB%2BHy0bHedurJSWM7DJ9%2BGCavsj%2FUcS7mekUXQghvf612VuBL64X2UQ7kCcIXf2E%2B3kEfhW4jHAopuwhqkrSWOYH%2FzRczGNl%2FwtBHvDa2t5rhjFtVCiCsq5zIPwwIbUutjERyERYNI5Sy3pkGwIw6vuMwAY6pgGHRDX%2BhApgNbOotDmN88GCu8KoNLumKgwdK6wlSrx6D%2B%2B24uyIUk4PbEoxKWmqz6pPkGOR9MgITGhV7WghaZI2TPtqBJjoxeHmLg7k4pwGWqT1QCcc8MASXZLNDSGgMIX7RsAT3V2RpFjzfX0PqSs8UUP0N27TPwnYpUOjpcEKufuSGP3uzoHQt9rieTIUr1IqV99vW2e0t%2BB1R4gxq8kEsTPVr8al&X-Amz-Signature=99af713dc8685fcbadfdc353d586f5d665b8dd0a19881634d4db515bf4c5b2d3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
