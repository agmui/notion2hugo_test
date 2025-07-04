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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDDHJ5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCBAtgq1JWS%2BerKVBitMHuMf3SU%2B3W5hrJI6ZoyPpc5NgIhALfE%2FOs18UkK2JGKXZ3ey8vckhfFJ4n6pfMEONeO%2BRkaKv8DCC4QABoMNjM3NDIzMTgzODA1IgwQgUTBKRFcXv8cLyoq3AOMWI%2Br6frV2LtRUlnOpESMFLjJHJrR%2Byq46XAFIXxbcA9Z6pPYh3az1m27j5LQ6hwK7%2BZkHV08Esk8p%2F2VaSnwy6YqL1SQA6O6TSQV%2F0zMr5mk1ogX%2FebhCkEx5FD1GcaZLwuZKuC3ITYKuXPhSTk%2F8bL1KRL%2B93o8iEjZUxMm1sRvRc3E7ZIjnX0Ds6UgEIpX6uO%2FYDXykgdvmBud42arihzhdqbvQFXsklP9xqWMTO0Hk2zBjhEme1VGMHMhj%2BvYCt0VrskspA7dl2sluGRgMfyA63utpcVq%2Bf75%2FCwSCxWpWQdq%2BaGEj4wNjHQi89HhhAAN%2FlXrIb4ruA9ES4dmEIfSV%2F9gpp4gVnuDYZlex2EUnM5Ve6094CAZf0HhEYF%2F98qQQB9oN6fFnR61hYUS4IRvE3rYn3IkYCCRoiqGZgxf9O8LgT72jAJgeksg8m9SGyOqONtZRdtkEzfKxOI%2B5EoRzyXknNIxJMLG%2FL6OJUWDzmb7DyKYvQwtt5TqSRlyO4S53PWrGfMsYpoa5ZmMAwfPL1EiHUw%2BEu47jvmjUsPeaFw8Mqv%2F%2Fj8swotlbhYE773lK%2BCjfP21QzTHdypXAsg%2BoIH%2FDy0BcXyRmLEr0eWIuKa8tFFXhQBQQzCxm5%2FDBjqkAVQwDT8d%2BxLuKvp8MLmtZIIafvX3yS90XRtgoQBZU0aLUgYeuQCzuiJA9Ay%2FqDkrGkydORLwYNr9EV%2FxaklzLQaEsmo6sgFFZXNcXIV46U46PqKA5%2Fec9or5nrMGZDceoLnvQNG%2F%2BmD1fNDYQQ3ewU6cOyDAlZXuj904LF%2FkezcL9rQD7QicX8el%2BAdrnP70%2BdOJJbYoCUT0lpEJgk%2BO8zr6umkA&X-Amz-Signature=3759d030568522abab955b441ab4bce99e4aa21aa5b20e17dec8e4e9592e60a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDDHJ5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCBAtgq1JWS%2BerKVBitMHuMf3SU%2B3W5hrJI6ZoyPpc5NgIhALfE%2FOs18UkK2JGKXZ3ey8vckhfFJ4n6pfMEONeO%2BRkaKv8DCC4QABoMNjM3NDIzMTgzODA1IgwQgUTBKRFcXv8cLyoq3AOMWI%2Br6frV2LtRUlnOpESMFLjJHJrR%2Byq46XAFIXxbcA9Z6pPYh3az1m27j5LQ6hwK7%2BZkHV08Esk8p%2F2VaSnwy6YqL1SQA6O6TSQV%2F0zMr5mk1ogX%2FebhCkEx5FD1GcaZLwuZKuC3ITYKuXPhSTk%2F8bL1KRL%2B93o8iEjZUxMm1sRvRc3E7ZIjnX0Ds6UgEIpX6uO%2FYDXykgdvmBud42arihzhdqbvQFXsklP9xqWMTO0Hk2zBjhEme1VGMHMhj%2BvYCt0VrskspA7dl2sluGRgMfyA63utpcVq%2Bf75%2FCwSCxWpWQdq%2BaGEj4wNjHQi89HhhAAN%2FlXrIb4ruA9ES4dmEIfSV%2F9gpp4gVnuDYZlex2EUnM5Ve6094CAZf0HhEYF%2F98qQQB9oN6fFnR61hYUS4IRvE3rYn3IkYCCRoiqGZgxf9O8LgT72jAJgeksg8m9SGyOqONtZRdtkEzfKxOI%2B5EoRzyXknNIxJMLG%2FL6OJUWDzmb7DyKYvQwtt5TqSRlyO4S53PWrGfMsYpoa5ZmMAwfPL1EiHUw%2BEu47jvmjUsPeaFw8Mqv%2F%2Fj8swotlbhYE773lK%2BCjfP21QzTHdypXAsg%2BoIH%2FDy0BcXyRmLEr0eWIuKa8tFFXhQBQQzCxm5%2FDBjqkAVQwDT8d%2BxLuKvp8MLmtZIIafvX3yS90XRtgoQBZU0aLUgYeuQCzuiJA9Ay%2FqDkrGkydORLwYNr9EV%2FxaklzLQaEsmo6sgFFZXNcXIV46U46PqKA5%2Fec9or5nrMGZDceoLnvQNG%2F%2BmD1fNDYQQ3ewU6cOyDAlZXuj904LF%2FkezcL9rQD7QicX8el%2BAdrnP70%2BdOJJbYoCUT0lpEJgk%2BO8zr6umkA&X-Amz-Signature=ba19771c8b082b5c3479cb951d6fe924da27db67a6e5b89575508005d7b5966e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIDDHJ5A%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCBAtgq1JWS%2BerKVBitMHuMf3SU%2B3W5hrJI6ZoyPpc5NgIhALfE%2FOs18UkK2JGKXZ3ey8vckhfFJ4n6pfMEONeO%2BRkaKv8DCC4QABoMNjM3NDIzMTgzODA1IgwQgUTBKRFcXv8cLyoq3AOMWI%2Br6frV2LtRUlnOpESMFLjJHJrR%2Byq46XAFIXxbcA9Z6pPYh3az1m27j5LQ6hwK7%2BZkHV08Esk8p%2F2VaSnwy6YqL1SQA6O6TSQV%2F0zMr5mk1ogX%2FebhCkEx5FD1GcaZLwuZKuC3ITYKuXPhSTk%2F8bL1KRL%2B93o8iEjZUxMm1sRvRc3E7ZIjnX0Ds6UgEIpX6uO%2FYDXykgdvmBud42arihzhdqbvQFXsklP9xqWMTO0Hk2zBjhEme1VGMHMhj%2BvYCt0VrskspA7dl2sluGRgMfyA63utpcVq%2Bf75%2FCwSCxWpWQdq%2BaGEj4wNjHQi89HhhAAN%2FlXrIb4ruA9ES4dmEIfSV%2F9gpp4gVnuDYZlex2EUnM5Ve6094CAZf0HhEYF%2F98qQQB9oN6fFnR61hYUS4IRvE3rYn3IkYCCRoiqGZgxf9O8LgT72jAJgeksg8m9SGyOqONtZRdtkEzfKxOI%2B5EoRzyXknNIxJMLG%2FL6OJUWDzmb7DyKYvQwtt5TqSRlyO4S53PWrGfMsYpoa5ZmMAwfPL1EiHUw%2BEu47jvmjUsPeaFw8Mqv%2F%2Fj8swotlbhYE773lK%2BCjfP21QzTHdypXAsg%2BoIH%2FDy0BcXyRmLEr0eWIuKa8tFFXhQBQQzCxm5%2FDBjqkAVQwDT8d%2BxLuKvp8MLmtZIIafvX3yS90XRtgoQBZU0aLUgYeuQCzuiJA9Ay%2FqDkrGkydORLwYNr9EV%2FxaklzLQaEsmo6sgFFZXNcXIV46U46PqKA5%2Fec9or5nrMGZDceoLnvQNG%2F%2BmD1fNDYQQ3ewU6cOyDAlZXuj904LF%2FkezcL9rQD7QicX8el%2BAdrnP70%2BdOJJbYoCUT0lpEJgk%2BO8zr6umkA&X-Amz-Signature=a215cd2fb475394ad486d2b7fb8fdac3f24915bc421bc48bff803f323c35ef64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
