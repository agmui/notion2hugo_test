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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQYS4O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXomUGKYSCQlWSqw56kApQopFADd2RxFAAhpX6zgiEkAiAwQcsKkfXaqRcT4YvoMvf2R%2F1WkrymfTrl4amyrj70SCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNQ%2FBoqs5buFo7dCKtwD5EzUbDBW762c%2BvPnNDAWNcNhIjztPDPApqLAfUgDimuFbUDSelSyw5P9CogkT6q1EDzZtiWS4hyV9YHUuoAmlxv%2FG4EMYmpqNs3SFCh0Q4wNzTkcEB2v7Hf9m%2B%2Bc5hSklOY9oisxZLTgzwEI4AiIw%2BzXyLjOwnxmYiIExkdlYl7f5SUnMK3Ux7Ak746tLCWF0oShhASkVhxtR4%2FHnzk4TxDY0ANP9JrOvaeJsYscSMhFGYUAWpfdCpkS%2Bse3E1JUbSJmNS4sS0U4pbCfl86Z44acLJrhSM3ZiGlDNd15GihYHhIxmDAL%2FtKSLa5rp4pcV3mqqNe1l14gZR4zHHKOrHwqJZa7%2F%2FaXIoXwWJYXzUZz841LigIyHmfnyiLCKic6TC6tZjMj8%2FEBifBxKu%2FP1FeMoZKfpGU36GYrR%2FxnMjO4rYPlWuiZPpMo5CxFv2wdcdium5pZ7GnoIBastyHm1Ezz9yZC%2BzkTjPmEWA5GHdU9DdGzWklC9aRhUvphpM3aOJ1ebKO4YwzFp%2F08GGzmC8h2EyygELZu%2BoGnDxnk5eGTsiC8b%2Bxz%2F%2FL6QNeO0sxZmSuPFfb7Jy31rTYN3G7msjXfKXefm%2FLicU04OdOy54m5LUd2GPKsD2LdJ30w3%2BmVwwY6pgGq%2FboTMyzyGNmXL4i5zaPjZndoMw8NfCi%2BAQ7k7XRT1h2RrJu2cvVEmkJ%2B45alZv5hYpCVe3ibNhOHn9pPfkkysV7uHFgyeDSwx2i5JMLdItj%2BEAVpQ7jlc6NLgT9kLvuIVvdoNoPAzW5IUKVHJqYZgP81SyTCMWv%2B%2Fua7NIn6ZHimibRADdlNM0YaVDd5ECKxXF1Xl7e%2BgSZpz7ONvDkP9WngWMFX&X-Amz-Signature=a524f2574e96e51f0f26a2b0f211d93b2b2d30b95a3eda9fc94a3462d65e43b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQYS4O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXomUGKYSCQlWSqw56kApQopFADd2RxFAAhpX6zgiEkAiAwQcsKkfXaqRcT4YvoMvf2R%2F1WkrymfTrl4amyrj70SCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNQ%2FBoqs5buFo7dCKtwD5EzUbDBW762c%2BvPnNDAWNcNhIjztPDPApqLAfUgDimuFbUDSelSyw5P9CogkT6q1EDzZtiWS4hyV9YHUuoAmlxv%2FG4EMYmpqNs3SFCh0Q4wNzTkcEB2v7Hf9m%2B%2Bc5hSklOY9oisxZLTgzwEI4AiIw%2BzXyLjOwnxmYiIExkdlYl7f5SUnMK3Ux7Ak746tLCWF0oShhASkVhxtR4%2FHnzk4TxDY0ANP9JrOvaeJsYscSMhFGYUAWpfdCpkS%2Bse3E1JUbSJmNS4sS0U4pbCfl86Z44acLJrhSM3ZiGlDNd15GihYHhIxmDAL%2FtKSLa5rp4pcV3mqqNe1l14gZR4zHHKOrHwqJZa7%2F%2FaXIoXwWJYXzUZz841LigIyHmfnyiLCKic6TC6tZjMj8%2FEBifBxKu%2FP1FeMoZKfpGU36GYrR%2FxnMjO4rYPlWuiZPpMo5CxFv2wdcdium5pZ7GnoIBastyHm1Ezz9yZC%2BzkTjPmEWA5GHdU9DdGzWklC9aRhUvphpM3aOJ1ebKO4YwzFp%2F08GGzmC8h2EyygELZu%2BoGnDxnk5eGTsiC8b%2Bxz%2F%2FL6QNeO0sxZmSuPFfb7Jy31rTYN3G7msjXfKXefm%2FLicU04OdOy54m5LUd2GPKsD2LdJ30w3%2BmVwwY6pgGq%2FboTMyzyGNmXL4i5zaPjZndoMw8NfCi%2BAQ7k7XRT1h2RrJu2cvVEmkJ%2B45alZv5hYpCVe3ibNhOHn9pPfkkysV7uHFgyeDSwx2i5JMLdItj%2BEAVpQ7jlc6NLgT9kLvuIVvdoNoPAzW5IUKVHJqYZgP81SyTCMWv%2B%2Fua7NIn6ZHimibRADdlNM0YaVDd5ECKxXF1Xl7e%2BgSZpz7ONvDkP9WngWMFX&X-Amz-Signature=120a587a9c97de79135b878b78a046360740afe6568520311bad15c8c5246098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIXQYS4O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXomUGKYSCQlWSqw56kApQopFADd2RxFAAhpX6zgiEkAiAwQcsKkfXaqRcT4YvoMvf2R%2F1WkrymfTrl4amyrj70SCqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYNQ%2FBoqs5buFo7dCKtwD5EzUbDBW762c%2BvPnNDAWNcNhIjztPDPApqLAfUgDimuFbUDSelSyw5P9CogkT6q1EDzZtiWS4hyV9YHUuoAmlxv%2FG4EMYmpqNs3SFCh0Q4wNzTkcEB2v7Hf9m%2B%2Bc5hSklOY9oisxZLTgzwEI4AiIw%2BzXyLjOwnxmYiIExkdlYl7f5SUnMK3Ux7Ak746tLCWF0oShhASkVhxtR4%2FHnzk4TxDY0ANP9JrOvaeJsYscSMhFGYUAWpfdCpkS%2Bse3E1JUbSJmNS4sS0U4pbCfl86Z44acLJrhSM3ZiGlDNd15GihYHhIxmDAL%2FtKSLa5rp4pcV3mqqNe1l14gZR4zHHKOrHwqJZa7%2F%2FaXIoXwWJYXzUZz841LigIyHmfnyiLCKic6TC6tZjMj8%2FEBifBxKu%2FP1FeMoZKfpGU36GYrR%2FxnMjO4rYPlWuiZPpMo5CxFv2wdcdium5pZ7GnoIBastyHm1Ezz9yZC%2BzkTjPmEWA5GHdU9DdGzWklC9aRhUvphpM3aOJ1ebKO4YwzFp%2F08GGzmC8h2EyygELZu%2BoGnDxnk5eGTsiC8b%2Bxz%2F%2FL6QNeO0sxZmSuPFfb7Jy31rTYN3G7msjXfKXefm%2FLicU04OdOy54m5LUd2GPKsD2LdJ30w3%2BmVwwY6pgGq%2FboTMyzyGNmXL4i5zaPjZndoMw8NfCi%2BAQ7k7XRT1h2RrJu2cvVEmkJ%2B45alZv5hYpCVe3ibNhOHn9pPfkkysV7uHFgyeDSwx2i5JMLdItj%2BEAVpQ7jlc6NLgT9kLvuIVvdoNoPAzW5IUKVHJqYZgP81SyTCMWv%2B%2Fua7NIn6ZHimibRADdlNM0YaVDd5ECKxXF1Xl7e%2BgSZpz7ONvDkP9WngWMFX&X-Amz-Signature=67688f38958f17b9f81e3216899107be81b18f305203b618221caab23780a55e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
