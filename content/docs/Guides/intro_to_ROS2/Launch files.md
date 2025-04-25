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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3HVUX2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArp8VLSSHh2c03wbYSkfylKRtXQINLfCrxYq0HdIwWLAiBr%2B1s2yzRMjattzKwCavxT%2BomJlk%2FaG6G5EHXj7xh1Dir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRv43roKAl%2BxNKSxoKtwDhEaBJysN5HUQJDAkcp3fDoo5cA%2FA8Gds5vaC8biQITRphUgXVxgXWZqPQy5FxWCGkQ4f6xSV%2FOe1oUJSjtSCFxkNruCGTlbIt4URkziduEZZBUr20sNIJpwSX%2BBs6rRIJHFb60JP6cfG7CAOYl1SqgjNWs4jbPIuHC%2BbHn%2Ba0eBZmFHjyNRow1Ds941UDa1iVysaCQGC3YBd3MqkGOnpFhHAbSsp1fQllRJ4rUS5NemVAekF62y%2FFsggXomdJATgzZbZe077nXJ%2Bgm6jly2oPHiPtvNI4Nr%2Bwc4nPMS6rnGOadHTrNFRRfnAL9ZeecZOaYJW9fw4SIWZ%2FOmp8n2UNrBjUhT3twxsb4X2RovSxz1GovamSt%2Bozlzfk%2F9%2FB7C3t1UJbAfgI4TIeApaSR9E9UQnuYRATkzXIMJNeKNG8J2yIqc1CPzup4rUOawb%2BG%2BiUEvkx%2BbAWY1%2FatwZnaGOvFA4D3UteskYPaXZ6ZXKKuHxVmjKPrZx%2F0Hlf8fyDluDNb%2BOmwQTIydi6g1vC787i1mgKaTy%2FAWWiohkE05jFnbg7bYZmmKvt9HqTc%2B94mmVoxnSwmgFqguX20vKH2O4kaFFvmGKarOmv1ysAPAtYK4XCEkxRa%2B7yA69Xegw5piuwAY6pgFj0gbYI%2F%2Fi3lKE%2F6KljuFA5v8Cq5hGuBdYz1n0MwdPEr6UQg%2F1uXGXhlpoZJC%2B8O3rukcb7coJMRLa5ouWv9lUxhvyTNMInhY%2FBUe9QUU8OvAapdC3zE4TdSNu55e1WnWp3tE5TXTVCcV3JEQVGf%2BOJBfRU1j%2FAcLPnMyekMaV5rUe2ANAXJ9MDhAAmVkZNes2UtRLYRRev8LJJo%2BrOaqkoLEOHhE8&X-Amz-Signature=e38e20104c4e592f5f880c90e39a0ff25514c2560ed4b1642edbabd93a381dff&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3HVUX2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArp8VLSSHh2c03wbYSkfylKRtXQINLfCrxYq0HdIwWLAiBr%2B1s2yzRMjattzKwCavxT%2BomJlk%2FaG6G5EHXj7xh1Dir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRv43roKAl%2BxNKSxoKtwDhEaBJysN5HUQJDAkcp3fDoo5cA%2FA8Gds5vaC8biQITRphUgXVxgXWZqPQy5FxWCGkQ4f6xSV%2FOe1oUJSjtSCFxkNruCGTlbIt4URkziduEZZBUr20sNIJpwSX%2BBs6rRIJHFb60JP6cfG7CAOYl1SqgjNWs4jbPIuHC%2BbHn%2Ba0eBZmFHjyNRow1Ds941UDa1iVysaCQGC3YBd3MqkGOnpFhHAbSsp1fQllRJ4rUS5NemVAekF62y%2FFsggXomdJATgzZbZe077nXJ%2Bgm6jly2oPHiPtvNI4Nr%2Bwc4nPMS6rnGOadHTrNFRRfnAL9ZeecZOaYJW9fw4SIWZ%2FOmp8n2UNrBjUhT3twxsb4X2RovSxz1GovamSt%2Bozlzfk%2F9%2FB7C3t1UJbAfgI4TIeApaSR9E9UQnuYRATkzXIMJNeKNG8J2yIqc1CPzup4rUOawb%2BG%2BiUEvkx%2BbAWY1%2FatwZnaGOvFA4D3UteskYPaXZ6ZXKKuHxVmjKPrZx%2F0Hlf8fyDluDNb%2BOmwQTIydi6g1vC787i1mgKaTy%2FAWWiohkE05jFnbg7bYZmmKvt9HqTc%2B94mmVoxnSwmgFqguX20vKH2O4kaFFvmGKarOmv1ysAPAtYK4XCEkxRa%2B7yA69Xegw5piuwAY6pgFj0gbYI%2F%2Fi3lKE%2F6KljuFA5v8Cq5hGuBdYz1n0MwdPEr6UQg%2F1uXGXhlpoZJC%2B8O3rukcb7coJMRLa5ouWv9lUxhvyTNMInhY%2FBUe9QUU8OvAapdC3zE4TdSNu55e1WnWp3tE5TXTVCcV3JEQVGf%2BOJBfRU1j%2FAcLPnMyekMaV5rUe2ANAXJ9MDhAAmVkZNes2UtRLYRRev8LJJo%2BrOaqkoLEOHhE8&X-Amz-Signature=88d15f332c9b853def08437d08bed2b8ee4f0783c42aa7356c163cc7077fa839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX3HVUX2%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArp8VLSSHh2c03wbYSkfylKRtXQINLfCrxYq0HdIwWLAiBr%2B1s2yzRMjattzKwCavxT%2BomJlk%2FaG6G5EHXj7xh1Dir%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMRv43roKAl%2BxNKSxoKtwDhEaBJysN5HUQJDAkcp3fDoo5cA%2FA8Gds5vaC8biQITRphUgXVxgXWZqPQy5FxWCGkQ4f6xSV%2FOe1oUJSjtSCFxkNruCGTlbIt4URkziduEZZBUr20sNIJpwSX%2BBs6rRIJHFb60JP6cfG7CAOYl1SqgjNWs4jbPIuHC%2BbHn%2Ba0eBZmFHjyNRow1Ds941UDa1iVysaCQGC3YBd3MqkGOnpFhHAbSsp1fQllRJ4rUS5NemVAekF62y%2FFsggXomdJATgzZbZe077nXJ%2Bgm6jly2oPHiPtvNI4Nr%2Bwc4nPMS6rnGOadHTrNFRRfnAL9ZeecZOaYJW9fw4SIWZ%2FOmp8n2UNrBjUhT3twxsb4X2RovSxz1GovamSt%2Bozlzfk%2F9%2FB7C3t1UJbAfgI4TIeApaSR9E9UQnuYRATkzXIMJNeKNG8J2yIqc1CPzup4rUOawb%2BG%2BiUEvkx%2BbAWY1%2FatwZnaGOvFA4D3UteskYPaXZ6ZXKKuHxVmjKPrZx%2F0Hlf8fyDluDNb%2BOmwQTIydi6g1vC787i1mgKaTy%2FAWWiohkE05jFnbg7bYZmmKvt9HqTc%2B94mmVoxnSwmgFqguX20vKH2O4kaFFvmGKarOmv1ysAPAtYK4XCEkxRa%2B7yA69Xegw5piuwAY6pgFj0gbYI%2F%2Fi3lKE%2F6KljuFA5v8Cq5hGuBdYz1n0MwdPEr6UQg%2F1uXGXhlpoZJC%2B8O3rukcb7coJMRLa5ouWv9lUxhvyTNMInhY%2FBUe9QUU8OvAapdC3zE4TdSNu55e1WnWp3tE5TXTVCcV3JEQVGf%2BOJBfRU1j%2FAcLPnMyekMaV5rUe2ANAXJ9MDhAAmVkZNes2UtRLYRRev8LJJo%2BrOaqkoLEOHhE8&X-Amz-Signature=9b514db2b202e7798bb322acd683cdf304e7f9f77f5e0f7160dc1e8df8a416ce&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
