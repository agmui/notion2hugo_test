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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VS7PYD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA88d1VlEcULj9%2BUnz2yD8Y0LQ7MQBDb%2FaU4H6ua2wFAiEAm0YlpIl1ZXxGILB76bSbZc79bF2ByB8OC4MjnXevFZcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPjHzFILNjeCF2vvFircA286lMYgeKkVsiVE0shogmnVoyvYD7UqVUy5jKtpuyVwRRshS%2BgsGWYzNrz%2FtYnoA4vaf71%2FgvwPQ1RHMo4Chd%2BBhCVAL7%2Fs4ovltfk3OvpUWpLfKXg8y8v3DcdQ7D5ms1XgEOUQVLCqci98cVTWbwTiNz3gI4KXtuGqAse%2Fhk6uuPcgDUEP5Xwp9%2Bo7b3QS7i3pVwoeyzv9J7wgmZpVvYLTtjZDj%2BqomT%2F0KQwMeag2Sph5DPrIixCNp7LSoI4SbfCCuocn031tPvuWCEuknNtA7i5HYcJbt1Z929RBPNZxRfILYccnNs0SwNQeREkK6k0%2BQL2Lrm%2BD0LZXxB%2Fc6eVP4Y2FkaKYFLusaj32hf0UDMxSg%2BzmG6pQd3SIkZhsBQabuW8efIe7BKH5WeH2KR7qDEM10P2j6RIYs9kqUyeR0HM4iP5alH3oun5vnMQ6o0V95xajcs3Wf4FntUtavsrpBbms2qlCSSimqDLaNz9FniaRw47D9BLTeUprxFGxhXdICIQJlO2DraLl66jva2bX8fKp%2FBtYWUykLrF8sL1CppXo39HvfiKit0pXA1QfnHhNeCUpVu7s013rpfcHHd9k9WstTYvaQoRjhMzH%2BhxRUeVwyvWwmljhotdvMOmtjr8GOqUBVSwN1RPdwHkBdXCu16Wka%2FgYZ0MMXkE4F4Ed%2B3qNUbA7ec4wAqm3eTPMtuRGTXldJIudC3QRqRFwv8NNlS5T23C2Sf9JJs%2BYgwloZhpRbpVilrHHGhnAObnIT69m%2Bi2VEhJ3gBWvS5yJKcPFO8ptMlu7KkPagfXsW%2BOO3oPBP3pnBhYRtqUztDnz7y2AxyAW7EkQAzQTViC7kCgHonmsryL9UbXe&X-Amz-Signature=a359dfbcaf27df2731abc6fac362121fdd342754d1c57690e031a02d58a78581&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VS7PYD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA88d1VlEcULj9%2BUnz2yD8Y0LQ7MQBDb%2FaU4H6ua2wFAiEAm0YlpIl1ZXxGILB76bSbZc79bF2ByB8OC4MjnXevFZcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPjHzFILNjeCF2vvFircA286lMYgeKkVsiVE0shogmnVoyvYD7UqVUy5jKtpuyVwRRshS%2BgsGWYzNrz%2FtYnoA4vaf71%2FgvwPQ1RHMo4Chd%2BBhCVAL7%2Fs4ovltfk3OvpUWpLfKXg8y8v3DcdQ7D5ms1XgEOUQVLCqci98cVTWbwTiNz3gI4KXtuGqAse%2Fhk6uuPcgDUEP5Xwp9%2Bo7b3QS7i3pVwoeyzv9J7wgmZpVvYLTtjZDj%2BqomT%2F0KQwMeag2Sph5DPrIixCNp7LSoI4SbfCCuocn031tPvuWCEuknNtA7i5HYcJbt1Z929RBPNZxRfILYccnNs0SwNQeREkK6k0%2BQL2Lrm%2BD0LZXxB%2Fc6eVP4Y2FkaKYFLusaj32hf0UDMxSg%2BzmG6pQd3SIkZhsBQabuW8efIe7BKH5WeH2KR7qDEM10P2j6RIYs9kqUyeR0HM4iP5alH3oun5vnMQ6o0V95xajcs3Wf4FntUtavsrpBbms2qlCSSimqDLaNz9FniaRw47D9BLTeUprxFGxhXdICIQJlO2DraLl66jva2bX8fKp%2FBtYWUykLrF8sL1CppXo39HvfiKit0pXA1QfnHhNeCUpVu7s013rpfcHHd9k9WstTYvaQoRjhMzH%2BhxRUeVwyvWwmljhotdvMOmtjr8GOqUBVSwN1RPdwHkBdXCu16Wka%2FgYZ0MMXkE4F4Ed%2B3qNUbA7ec4wAqm3eTPMtuRGTXldJIudC3QRqRFwv8NNlS5T23C2Sf9JJs%2BYgwloZhpRbpVilrHHGhnAObnIT69m%2Bi2VEhJ3gBWvS5yJKcPFO8ptMlu7KkPagfXsW%2BOO3oPBP3pnBhYRtqUztDnz7y2AxyAW7EkQAzQTViC7kCgHonmsryL9UbXe&X-Amz-Signature=87d8db4c64b82f3e26090c60911f8de869c4bbea9fc0436f37b59130fc848fc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2VS7PYD%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGA88d1VlEcULj9%2BUnz2yD8Y0LQ7MQBDb%2FaU4H6ua2wFAiEAm0YlpIl1ZXxGILB76bSbZc79bF2ByB8OC4MjnXevFZcq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDPjHzFILNjeCF2vvFircA286lMYgeKkVsiVE0shogmnVoyvYD7UqVUy5jKtpuyVwRRshS%2BgsGWYzNrz%2FtYnoA4vaf71%2FgvwPQ1RHMo4Chd%2BBhCVAL7%2Fs4ovltfk3OvpUWpLfKXg8y8v3DcdQ7D5ms1XgEOUQVLCqci98cVTWbwTiNz3gI4KXtuGqAse%2Fhk6uuPcgDUEP5Xwp9%2Bo7b3QS7i3pVwoeyzv9J7wgmZpVvYLTtjZDj%2BqomT%2F0KQwMeag2Sph5DPrIixCNp7LSoI4SbfCCuocn031tPvuWCEuknNtA7i5HYcJbt1Z929RBPNZxRfILYccnNs0SwNQeREkK6k0%2BQL2Lrm%2BD0LZXxB%2Fc6eVP4Y2FkaKYFLusaj32hf0UDMxSg%2BzmG6pQd3SIkZhsBQabuW8efIe7BKH5WeH2KR7qDEM10P2j6RIYs9kqUyeR0HM4iP5alH3oun5vnMQ6o0V95xajcs3Wf4FntUtavsrpBbms2qlCSSimqDLaNz9FniaRw47D9BLTeUprxFGxhXdICIQJlO2DraLl66jva2bX8fKp%2FBtYWUykLrF8sL1CppXo39HvfiKit0pXA1QfnHhNeCUpVu7s013rpfcHHd9k9WstTYvaQoRjhMzH%2BhxRUeVwyvWwmljhotdvMOmtjr8GOqUBVSwN1RPdwHkBdXCu16Wka%2FgYZ0MMXkE4F4Ed%2B3qNUbA7ec4wAqm3eTPMtuRGTXldJIudC3QRqRFwv8NNlS5T23C2Sf9JJs%2BYgwloZhpRbpVilrHHGhnAObnIT69m%2Bi2VEhJ3gBWvS5yJKcPFO8ptMlu7KkPagfXsW%2BOO3oPBP3pnBhYRtqUztDnz7y2AxyAW7EkQAzQTViC7kCgHonmsryL9UbXe&X-Amz-Signature=9f1555a27c564d3d9cac1cab7bfbce1e3bc62660a3419041f9b98f14dbee5f60&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
