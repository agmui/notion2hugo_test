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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSVZU2O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE8OSWP%2FyW7gbjV4A1HuN3QvjblnBsmgv4G4rQs6NoBAiAS6u0g%2FTm%2BT9AovdttAU2VIkgn%2BB43C9HctLWPTiTNUir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrmPFZxQVjanx9LpRKtwDvrdFpIbVsHUHPuf2I9oxqKs5JpCFzno%2BvWhcy42athSjAPnPWbky4WfaNp%2BchnQENfOh0inlm6PwMuQWCErbdYu3sVUr6rR%2FVPJCb3p%2F9WJkElbBhGE3ULGrdO6%2BQ8ZpMTwSeSxgPfiRuR9Q6eYWjDboyxw53Y9xODJhzzHss%2BJZmLBN4e31sOJZ8FhwBZzOcm%2Fj0QIE0cEC284HEIPWj3T3RKrp%2F6HVMCUfR5TrJHTqQv9vUMt9nB56VDVHEbFi9QbGknfLuvunPXnkDSZO4teruZw9gUh9ndZK%2FZ9x3HLrIdXPhtj2ZaTDUhCdMKiNP1z1TtuyjLlQbLuveOK8iw4AWTwFCEgi1cRkjMx6m9Zx4HEsajvGIc3rBQUq62xZp2mNOi%2BNPcnoL55Q%2FUt3P3OP1xTURyDlj%2Fxx7nOzi06FO7vjdLrlUWR5x42omwIictKdEf0EDSogwDIYh2HXOxAFoo3OpjvDE1WejseYxxvbEw6CzehLP8QfXmoUmSzb7h%2FwmCrVgJwcpyI1tOsKXMo4jZyOO6ldnZ7Vjyvi4sA44OoKUHRt2QuP5F%2FQT944o%2BC3ygEA8KRb2%2BRynGZTwFR9b%2FGWN0kL0A6aTjX29NEeF3zvw4uNzSLtsacw1LaiwQY6pgGgDtZ%2Bpjwpz%2BgHncKpPBTxatUZioUHLxKlAmW2o7XSnjnbS60ySNzQschD8Jo1pQeyt6TMY4zuNKeinIp5NILBHDeXscjl%2FQoz8zBpc%2Fz7mkIkWPVRAqCQWjC72KWzDQs1kH5YbzjRj3G87BFPPlG3HmCJegE2EikLfg1uJDqIwUu%2BNHv3Lj%2FRAJ6nr%2FEw9ckI4LA05XWxgJ8ePI5K4252XaWCRRUv&X-Amz-Signature=2076fea7401f0e9120251f8186fb269d8e53b5266108c936cc745a2978779507&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSVZU2O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE8OSWP%2FyW7gbjV4A1HuN3QvjblnBsmgv4G4rQs6NoBAiAS6u0g%2FTm%2BT9AovdttAU2VIkgn%2BB43C9HctLWPTiTNUir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrmPFZxQVjanx9LpRKtwDvrdFpIbVsHUHPuf2I9oxqKs5JpCFzno%2BvWhcy42athSjAPnPWbky4WfaNp%2BchnQENfOh0inlm6PwMuQWCErbdYu3sVUr6rR%2FVPJCb3p%2F9WJkElbBhGE3ULGrdO6%2BQ8ZpMTwSeSxgPfiRuR9Q6eYWjDboyxw53Y9xODJhzzHss%2BJZmLBN4e31sOJZ8FhwBZzOcm%2Fj0QIE0cEC284HEIPWj3T3RKrp%2F6HVMCUfR5TrJHTqQv9vUMt9nB56VDVHEbFi9QbGknfLuvunPXnkDSZO4teruZw9gUh9ndZK%2FZ9x3HLrIdXPhtj2ZaTDUhCdMKiNP1z1TtuyjLlQbLuveOK8iw4AWTwFCEgi1cRkjMx6m9Zx4HEsajvGIc3rBQUq62xZp2mNOi%2BNPcnoL55Q%2FUt3P3OP1xTURyDlj%2Fxx7nOzi06FO7vjdLrlUWR5x42omwIictKdEf0EDSogwDIYh2HXOxAFoo3OpjvDE1WejseYxxvbEw6CzehLP8QfXmoUmSzb7h%2FwmCrVgJwcpyI1tOsKXMo4jZyOO6ldnZ7Vjyvi4sA44OoKUHRt2QuP5F%2FQT944o%2BC3ygEA8KRb2%2BRynGZTwFR9b%2FGWN0kL0A6aTjX29NEeF3zvw4uNzSLtsacw1LaiwQY6pgGgDtZ%2Bpjwpz%2BgHncKpPBTxatUZioUHLxKlAmW2o7XSnjnbS60ySNzQschD8Jo1pQeyt6TMY4zuNKeinIp5NILBHDeXscjl%2FQoz8zBpc%2Fz7mkIkWPVRAqCQWjC72KWzDQs1kH5YbzjRj3G87BFPPlG3HmCJegE2EikLfg1uJDqIwUu%2BNHv3Lj%2FRAJ6nr%2FEw9ckI4LA05XWxgJ8ePI5K4252XaWCRRUv&X-Amz-Signature=63cd2eea0c520f9490fac45aa84b914609c5268fddecff08d3db028b8d148664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PSVZU2O%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T190146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDE8OSWP%2FyW7gbjV4A1HuN3QvjblnBsmgv4G4rQs6NoBAiAS6u0g%2FTm%2BT9AovdttAU2VIkgn%2BB43C9HctLWPTiTNUir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMrmPFZxQVjanx9LpRKtwDvrdFpIbVsHUHPuf2I9oxqKs5JpCFzno%2BvWhcy42athSjAPnPWbky4WfaNp%2BchnQENfOh0inlm6PwMuQWCErbdYu3sVUr6rR%2FVPJCb3p%2F9WJkElbBhGE3ULGrdO6%2BQ8ZpMTwSeSxgPfiRuR9Q6eYWjDboyxw53Y9xODJhzzHss%2BJZmLBN4e31sOJZ8FhwBZzOcm%2Fj0QIE0cEC284HEIPWj3T3RKrp%2F6HVMCUfR5TrJHTqQv9vUMt9nB56VDVHEbFi9QbGknfLuvunPXnkDSZO4teruZw9gUh9ndZK%2FZ9x3HLrIdXPhtj2ZaTDUhCdMKiNP1z1TtuyjLlQbLuveOK8iw4AWTwFCEgi1cRkjMx6m9Zx4HEsajvGIc3rBQUq62xZp2mNOi%2BNPcnoL55Q%2FUt3P3OP1xTURyDlj%2Fxx7nOzi06FO7vjdLrlUWR5x42omwIictKdEf0EDSogwDIYh2HXOxAFoo3OpjvDE1WejseYxxvbEw6CzehLP8QfXmoUmSzb7h%2FwmCrVgJwcpyI1tOsKXMo4jZyOO6ldnZ7Vjyvi4sA44OoKUHRt2QuP5F%2FQT944o%2BC3ygEA8KRb2%2BRynGZTwFR9b%2FGWN0kL0A6aTjX29NEeF3zvw4uNzSLtsacw1LaiwQY6pgGgDtZ%2Bpjwpz%2BgHncKpPBTxatUZioUHLxKlAmW2o7XSnjnbS60ySNzQschD8Jo1pQeyt6TMY4zuNKeinIp5NILBHDeXscjl%2FQoz8zBpc%2Fz7mkIkWPVRAqCQWjC72KWzDQs1kH5YbzjRj3G87BFPPlG3HmCJegE2EikLfg1uJDqIwUu%2BNHv3Lj%2FRAJ6nr%2FEw9ckI4LA05XWxgJ8ePI5K4252XaWCRRUv&X-Amz-Signature=c4df340af8078dbe2c59a079b84a1adf9fb2675116a1f3f7ecd177b0e99b356b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
