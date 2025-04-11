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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGPG7A5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAPvw7huQoe7TGPkfiJ1SoWYsZeW2xZb%2BhEC%2B5HBPkAIAiBe8PY417rWMQVywEwjnhzuwZfjrFyxrkowtzif4Bc1QCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3AR6LXLdVKlB9pvJKtwDcc5qopKico1S0VDQ5gP7hd23k5HCdhGvSQbQq1P8WizsVlszO34ssEhV9p6KuW7weVguREm5lJ5Za9B4nq2YT7FcLoffCvrZ8Mo2f6DtyhAAa7MNxYaNnNlkFYMjLqz39zf8%2B8Cllu5gV0%2F5Cp%2F6KTMHQ2eNHEbydCCfxqaWYyOwD2lihVOKxi4W9K5OdMOQmjI%2BnkTTCqiTmpuvsrPM%2FMIaMP6b7VOzrL0qXFN6DUr4mYkgLC7LeV0rRqam%2BUGlEoArmxcC8q6iJHr1mZopwUmn8ujNcuha%2F4fT4eSFHub8WNMlY95LGAq4vJDD9RNZ1P0rHtssMYqWrwDywQhZ9z6P3MR7BmC%2BiHLHapK%2Bo8b051vxxz8lHi0TirQdPUGpRxNBT7ya3G67gwSrgFHJ6SIMIBvMeuEvtLsmIIY88uo7F%2BEG94B78QCH5wElr7npNWQCJD3FRakrfKm2%2ByhbewY%2Fhaop20JnHUR8mymlitjpHYq6uTV6jxCVNbD8b3LX0XA25wqsNy6q8adz%2BhI02CtLAfpc6AFwbCr7RSdoGjA8%2BauP%2BwxHYTbbYj2mLPmSyPzFN%2BHUHhxrh5HlMML%2FfEuBav6goCb21QuQeZgn6tHG3ygcevdJYbIi89kw1qrivwY6pgHlpW0r2a16dIUPlvyySHP%2BupQEIHjvkBXHh%2Bzbnig0vLU6%2BVWdwj6QZu7MAw46LAk%2BAM3ML8YuGcqk6be1EH7813Ek%2BOaZpho36PQJtTpRqL4bWxti3ROdvVPDaPwWFpnR1Ii6aSC50wI5yChx4dc%2B%2B5bfodsK7pq4nCnQyj%2FUrAWFgJSBWkT0iUEdI2vhn1h45oe35erCBH0M2KXYEUsDWniwQMIJ&X-Amz-Signature=7834229026e9c1882e6e9f589ba9efb759b457e4d85b98e128d26f799c57c366&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGPG7A5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAPvw7huQoe7TGPkfiJ1SoWYsZeW2xZb%2BhEC%2B5HBPkAIAiBe8PY417rWMQVywEwjnhzuwZfjrFyxrkowtzif4Bc1QCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3AR6LXLdVKlB9pvJKtwDcc5qopKico1S0VDQ5gP7hd23k5HCdhGvSQbQq1P8WizsVlszO34ssEhV9p6KuW7weVguREm5lJ5Za9B4nq2YT7FcLoffCvrZ8Mo2f6DtyhAAa7MNxYaNnNlkFYMjLqz39zf8%2B8Cllu5gV0%2F5Cp%2F6KTMHQ2eNHEbydCCfxqaWYyOwD2lihVOKxi4W9K5OdMOQmjI%2BnkTTCqiTmpuvsrPM%2FMIaMP6b7VOzrL0qXFN6DUr4mYkgLC7LeV0rRqam%2BUGlEoArmxcC8q6iJHr1mZopwUmn8ujNcuha%2F4fT4eSFHub8WNMlY95LGAq4vJDD9RNZ1P0rHtssMYqWrwDywQhZ9z6P3MR7BmC%2BiHLHapK%2Bo8b051vxxz8lHi0TirQdPUGpRxNBT7ya3G67gwSrgFHJ6SIMIBvMeuEvtLsmIIY88uo7F%2BEG94B78QCH5wElr7npNWQCJD3FRakrfKm2%2ByhbewY%2Fhaop20JnHUR8mymlitjpHYq6uTV6jxCVNbD8b3LX0XA25wqsNy6q8adz%2BhI02CtLAfpc6AFwbCr7RSdoGjA8%2BauP%2BwxHYTbbYj2mLPmSyPzFN%2BHUHhxrh5HlMML%2FfEuBav6goCb21QuQeZgn6tHG3ygcevdJYbIi89kw1qrivwY6pgHlpW0r2a16dIUPlvyySHP%2BupQEIHjvkBXHh%2Bzbnig0vLU6%2BVWdwj6QZu7MAw46LAk%2BAM3ML8YuGcqk6be1EH7813Ek%2BOaZpho36PQJtTpRqL4bWxti3ROdvVPDaPwWFpnR1Ii6aSC50wI5yChx4dc%2B%2B5bfodsK7pq4nCnQyj%2FUrAWFgJSBWkT0iUEdI2vhn1h45oe35erCBH0M2KXYEUsDWniwQMIJ&X-Amz-Signature=6f24d01b9917e854ef858f87a04c1652a156461447b27b3cd633972d769344ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYGPG7A5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T041052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJGMEQCIAPvw7huQoe7TGPkfiJ1SoWYsZeW2xZb%2BhEC%2B5HBPkAIAiBe8PY417rWMQVywEwjnhzuwZfjrFyxrkowtzif4Bc1QCqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3AR6LXLdVKlB9pvJKtwDcc5qopKico1S0VDQ5gP7hd23k5HCdhGvSQbQq1P8WizsVlszO34ssEhV9p6KuW7weVguREm5lJ5Za9B4nq2YT7FcLoffCvrZ8Mo2f6DtyhAAa7MNxYaNnNlkFYMjLqz39zf8%2B8Cllu5gV0%2F5Cp%2F6KTMHQ2eNHEbydCCfxqaWYyOwD2lihVOKxi4W9K5OdMOQmjI%2BnkTTCqiTmpuvsrPM%2FMIaMP6b7VOzrL0qXFN6DUr4mYkgLC7LeV0rRqam%2BUGlEoArmxcC8q6iJHr1mZopwUmn8ujNcuha%2F4fT4eSFHub8WNMlY95LGAq4vJDD9RNZ1P0rHtssMYqWrwDywQhZ9z6P3MR7BmC%2BiHLHapK%2Bo8b051vxxz8lHi0TirQdPUGpRxNBT7ya3G67gwSrgFHJ6SIMIBvMeuEvtLsmIIY88uo7F%2BEG94B78QCH5wElr7npNWQCJD3FRakrfKm2%2ByhbewY%2Fhaop20JnHUR8mymlitjpHYq6uTV6jxCVNbD8b3LX0XA25wqsNy6q8adz%2BhI02CtLAfpc6AFwbCr7RSdoGjA8%2BauP%2BwxHYTbbYj2mLPmSyPzFN%2BHUHhxrh5HlMML%2FfEuBav6goCb21QuQeZgn6tHG3ygcevdJYbIi89kw1qrivwY6pgHlpW0r2a16dIUPlvyySHP%2BupQEIHjvkBXHh%2Bzbnig0vLU6%2BVWdwj6QZu7MAw46LAk%2BAM3ML8YuGcqk6be1EH7813Ek%2BOaZpho36PQJtTpRqL4bWxti3ROdvVPDaPwWFpnR1Ii6aSC50wI5yChx4dc%2B%2B5bfodsK7pq4nCnQyj%2FUrAWFgJSBWkT0iUEdI2vhn1h45oe35erCBH0M2KXYEUsDWniwQMIJ&X-Amz-Signature=d799176faf08bfeb07b8263f541f2a0738a470ee8bb713a9635f4f3b552cdfa7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
