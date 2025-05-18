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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ND3ULVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2UYOga2hxzXQCYu8WSMzrZxgxL%2F%2F5VKzo7HotJQ8AQIhAKCVgkREvWK98gdYXlN4OB2PMJ3jvs3h0MCI7hdpHM9KKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYRCjgjVCfpO%2B3h0oq3ANWbCBIBjVaGLFm%2B5GPZYsHBHyk3qVBX2xbDd5wudTeNXbgQuDmyQos4CgS%2FuyarteJLriClO1B6NFvkqo2J07hVe%2BbZGRzAVk0K%2Bmfj12BulFNo9m1H3IidbPhN%2FKlO4L0laoQayjuSW6iXjaZXXz1UEK5a0fogw3dWGApZObpS%2B5C46M9jxgpGYVXONrMD%2BURnjvE%2Bl8Kwe262cmDr0aGTA%2BXb9%2BrBbBwM%2BckV7JRM%2BEtCcyPg2yU5WC8g6WXIf0BkDXmShWaoOpS9G5cemzAmvf64dIlMvjvvxBRRHXj4jTRPoIhkSRYEAzQXHgB8u2BjPvIY3FbRHoz%2BDg7nFKvlpKjnm2yMMxBnNxxJGtwMFxn6CzFm4OPa6ojmYelNCza00e%2BzDqMWKHwS8ZrmZzk9%2Bgxb8y8d4qcLtmHa3jLPA83EgzwPn2%2B5stM7eRNimrqJGRc50K%2BScT4GUIptJ80MGg1QLDldVTannvjNu%2B2z4zGVyKUtD%2BcaIPWkwwzHv8sESP7gUTCrtGPN8tq%2BdflBSYBC%2FvOTTaC5NaOhkvDEFgrMi0FMK0vocdlrTlH1mUrwKhbTHdACAvEAq2pi0CAg%2BnPthURiZtfaRFtV9nZMhZcLVqCcSjla9r1ozDDnafBBjqkAQxCovbskiS9gyKMBCyQ8IX0rNWvlkwSE7Dqs49XZ1NSj6qsPiO9ZGqhlWoqXFSFkA8hjI6u2LUMauozitZM4PNtMi37ZguzqBE1xjsBAGYbnncGlrzTirWeBGFPWAZ8eDI0JmBGgm5MrpgaBPTZFU10JxjbGYfwZR4YDm9I93q3QaO1XxWteSR4tzm6B5MwjuvKfxf%2ByLxKjx7Z3X3b7tRcId9r&X-Amz-Signature=be0161f3fedcb8d0bb8a13e8f078f3ddf1e0770ffaab6372dc69228911f3258e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ND3ULVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2UYOga2hxzXQCYu8WSMzrZxgxL%2F%2F5VKzo7HotJQ8AQIhAKCVgkREvWK98gdYXlN4OB2PMJ3jvs3h0MCI7hdpHM9KKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYRCjgjVCfpO%2B3h0oq3ANWbCBIBjVaGLFm%2B5GPZYsHBHyk3qVBX2xbDd5wudTeNXbgQuDmyQos4CgS%2FuyarteJLriClO1B6NFvkqo2J07hVe%2BbZGRzAVk0K%2Bmfj12BulFNo9m1H3IidbPhN%2FKlO4L0laoQayjuSW6iXjaZXXz1UEK5a0fogw3dWGApZObpS%2B5C46M9jxgpGYVXONrMD%2BURnjvE%2Bl8Kwe262cmDr0aGTA%2BXb9%2BrBbBwM%2BckV7JRM%2BEtCcyPg2yU5WC8g6WXIf0BkDXmShWaoOpS9G5cemzAmvf64dIlMvjvvxBRRHXj4jTRPoIhkSRYEAzQXHgB8u2BjPvIY3FbRHoz%2BDg7nFKvlpKjnm2yMMxBnNxxJGtwMFxn6CzFm4OPa6ojmYelNCza00e%2BzDqMWKHwS8ZrmZzk9%2Bgxb8y8d4qcLtmHa3jLPA83EgzwPn2%2B5stM7eRNimrqJGRc50K%2BScT4GUIptJ80MGg1QLDldVTannvjNu%2B2z4zGVyKUtD%2BcaIPWkwwzHv8sESP7gUTCrtGPN8tq%2BdflBSYBC%2FvOTTaC5NaOhkvDEFgrMi0FMK0vocdlrTlH1mUrwKhbTHdACAvEAq2pi0CAg%2BnPthURiZtfaRFtV9nZMhZcLVqCcSjla9r1ozDDnafBBjqkAQxCovbskiS9gyKMBCyQ8IX0rNWvlkwSE7Dqs49XZ1NSj6qsPiO9ZGqhlWoqXFSFkA8hjI6u2LUMauozitZM4PNtMi37ZguzqBE1xjsBAGYbnncGlrzTirWeBGFPWAZ8eDI0JmBGgm5MrpgaBPTZFU10JxjbGYfwZR4YDm9I93q3QaO1XxWteSR4tzm6B5MwjuvKfxf%2ByLxKjx7Z3X3b7tRcId9r&X-Amz-Signature=b06f05b75a20c77f3455796b176a15e1c65ee9df4365e8dc7caf4720fc0e554d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ND3ULVI%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T131736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCj2UYOga2hxzXQCYu8WSMzrZxgxL%2F%2F5VKzo7HotJQ8AQIhAKCVgkREvWK98gdYXlN4OB2PMJ3jvs3h0MCI7hdpHM9KKv8DCHUQABoMNjM3NDIzMTgzODA1IgxYRCjgjVCfpO%2B3h0oq3ANWbCBIBjVaGLFm%2B5GPZYsHBHyk3qVBX2xbDd5wudTeNXbgQuDmyQos4CgS%2FuyarteJLriClO1B6NFvkqo2J07hVe%2BbZGRzAVk0K%2Bmfj12BulFNo9m1H3IidbPhN%2FKlO4L0laoQayjuSW6iXjaZXXz1UEK5a0fogw3dWGApZObpS%2B5C46M9jxgpGYVXONrMD%2BURnjvE%2Bl8Kwe262cmDr0aGTA%2BXb9%2BrBbBwM%2BckV7JRM%2BEtCcyPg2yU5WC8g6WXIf0BkDXmShWaoOpS9G5cemzAmvf64dIlMvjvvxBRRHXj4jTRPoIhkSRYEAzQXHgB8u2BjPvIY3FbRHoz%2BDg7nFKvlpKjnm2yMMxBnNxxJGtwMFxn6CzFm4OPa6ojmYelNCza00e%2BzDqMWKHwS8ZrmZzk9%2Bgxb8y8d4qcLtmHa3jLPA83EgzwPn2%2B5stM7eRNimrqJGRc50K%2BScT4GUIptJ80MGg1QLDldVTannvjNu%2B2z4zGVyKUtD%2BcaIPWkwwzHv8sESP7gUTCrtGPN8tq%2BdflBSYBC%2FvOTTaC5NaOhkvDEFgrMi0FMK0vocdlrTlH1mUrwKhbTHdACAvEAq2pi0CAg%2BnPthURiZtfaRFtV9nZMhZcLVqCcSjla9r1ozDDnafBBjqkAQxCovbskiS9gyKMBCyQ8IX0rNWvlkwSE7Dqs49XZ1NSj6qsPiO9ZGqhlWoqXFSFkA8hjI6u2LUMauozitZM4PNtMi37ZguzqBE1xjsBAGYbnncGlrzTirWeBGFPWAZ8eDI0JmBGgm5MrpgaBPTZFU10JxjbGYfwZR4YDm9I93q3QaO1XxWteSR4tzm6B5MwjuvKfxf%2ByLxKjx7Z3X3b7tRcId9r&X-Amz-Signature=94d4f97f326b503a5701d3abbc7de7f7674ce9eff493afee21303fc311b0d622&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
