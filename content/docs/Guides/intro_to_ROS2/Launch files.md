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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJFAFF4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoY%2BA%2BF%2BROemLErjVKrhffxrGIf6LuWDzBQAEumNKpCAiBtztRRJy1yJluXlONBbnIpGyXfqT%2FXQ7G0EaJGrCdrjSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbGb%2FsOBh52%2B3FmcHKtwDVvHs2gDNxKVYJ7fndc3BOxpsj7Mt9gz9%2BoBhuXryvF5DWDfy%2B4wYdI27MbKqdGjGsn4LNZw8FR190JkKinXd4av%2BJaCO0eaXSy%2BFnG3iaja8UTZclFdDAck969EGjDh1sOVM6FxHpG1P2t%2Fh%2FmMVPFBfSTrYSW%2FO64yLzUqX4oMogkgq2kUSA3zmbHItFAiAmKAppi6M4E57dp%2FJ1FS1wfJaUrg2ZfmhADGXQC49uHA%2FmPLMu%2BsMVt8RxSzui47ae4vNVruxIZX7vk13sDZqLOTbtutvNKGxK20xjvs%2FWP%2BBWfGBg0dgCKIhbfwwOn1dVFSwowJ%2B4HVGA%2FExr93bwu4lD1F2zZYEg4z4yG9WUwtnxieLYlAvSbWz46gsswlCd4EVQ%2Bjq9hupR7jKvTSG27tRxd6jhYrp0UTf6Q35QtFU22jyaauaSv7L2SmUCsV7wMMHvfN8rzrXGXz2Z22oykc1DEaIqIEhvj%2F%2BT%2BjxPWS5dKP8UxaYX%2BF1G7dAyCE5gt1SvqkFYGJdCYE4dmgbFREHixdGAd2wA7essc1N%2F5JISq2na8yV%2FhN2l1nXc4nksO1O0x5oGFffltzSwl3mFc%2FxTPpV9kF2NwvfIxOWdXmh5RIRC3TKhQ%2FQHVow1Lz8vwY6pgHM5im%2FIO5nHLWSndxloLiyuyyV1eOPHRDsygkiB1PGV%2FyfOf7hXO7k0f70%2FLaDVRLky00nJDvIxd9s1M5EBIRqAzOip8IYwojTFjNwlbK068tjqV7ka4nQSlzepyiuFpP%2BuOc42fkobFYY8gMzUm0EFk%2BXX2SBvR8LFz12%2Fb4%2FREEuA6rq7d2cYgClVc%2BQ5lgoLORl8118uDKRQvysCzussIw5vU7I&X-Amz-Signature=d896a0b021846141c6e2fb6e38b88494781dc0dbf5a1c3fa41a013e9aef015e6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJFAFF4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoY%2BA%2BF%2BROemLErjVKrhffxrGIf6LuWDzBQAEumNKpCAiBtztRRJy1yJluXlONBbnIpGyXfqT%2FXQ7G0EaJGrCdrjSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbGb%2FsOBh52%2B3FmcHKtwDVvHs2gDNxKVYJ7fndc3BOxpsj7Mt9gz9%2BoBhuXryvF5DWDfy%2B4wYdI27MbKqdGjGsn4LNZw8FR190JkKinXd4av%2BJaCO0eaXSy%2BFnG3iaja8UTZclFdDAck969EGjDh1sOVM6FxHpG1P2t%2Fh%2FmMVPFBfSTrYSW%2FO64yLzUqX4oMogkgq2kUSA3zmbHItFAiAmKAppi6M4E57dp%2FJ1FS1wfJaUrg2ZfmhADGXQC49uHA%2FmPLMu%2BsMVt8RxSzui47ae4vNVruxIZX7vk13sDZqLOTbtutvNKGxK20xjvs%2FWP%2BBWfGBg0dgCKIhbfwwOn1dVFSwowJ%2B4HVGA%2FExr93bwu4lD1F2zZYEg4z4yG9WUwtnxieLYlAvSbWz46gsswlCd4EVQ%2Bjq9hupR7jKvTSG27tRxd6jhYrp0UTf6Q35QtFU22jyaauaSv7L2SmUCsV7wMMHvfN8rzrXGXz2Z22oykc1DEaIqIEhvj%2F%2BT%2BjxPWS5dKP8UxaYX%2BF1G7dAyCE5gt1SvqkFYGJdCYE4dmgbFREHixdGAd2wA7essc1N%2F5JISq2na8yV%2FhN2l1nXc4nksO1O0x5oGFffltzSwl3mFc%2FxTPpV9kF2NwvfIxOWdXmh5RIRC3TKhQ%2FQHVow1Lz8vwY6pgHM5im%2FIO5nHLWSndxloLiyuyyV1eOPHRDsygkiB1PGV%2FyfOf7hXO7k0f70%2FLaDVRLky00nJDvIxd9s1M5EBIRqAzOip8IYwojTFjNwlbK068tjqV7ka4nQSlzepyiuFpP%2BuOc42fkobFYY8gMzUm0EFk%2BXX2SBvR8LFz12%2Fb4%2FREEuA6rq7d2cYgClVc%2BQ5lgoLORl8118uDKRQvysCzussIw5vU7I&X-Amz-Signature=be68dbb335cb2a4a046eac478435ac189eac825550b7746d39e7e4e69201f671&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQJFAFF4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoY%2BA%2BF%2BROemLErjVKrhffxrGIf6LuWDzBQAEumNKpCAiBtztRRJy1yJluXlONBbnIpGyXfqT%2FXQ7G0EaJGrCdrjSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMbGb%2FsOBh52%2B3FmcHKtwDVvHs2gDNxKVYJ7fndc3BOxpsj7Mt9gz9%2BoBhuXryvF5DWDfy%2B4wYdI27MbKqdGjGsn4LNZw8FR190JkKinXd4av%2BJaCO0eaXSy%2BFnG3iaja8UTZclFdDAck969EGjDh1sOVM6FxHpG1P2t%2Fh%2FmMVPFBfSTrYSW%2FO64yLzUqX4oMogkgq2kUSA3zmbHItFAiAmKAppi6M4E57dp%2FJ1FS1wfJaUrg2ZfmhADGXQC49uHA%2FmPLMu%2BsMVt8RxSzui47ae4vNVruxIZX7vk13sDZqLOTbtutvNKGxK20xjvs%2FWP%2BBWfGBg0dgCKIhbfwwOn1dVFSwowJ%2B4HVGA%2FExr93bwu4lD1F2zZYEg4z4yG9WUwtnxieLYlAvSbWz46gsswlCd4EVQ%2Bjq9hupR7jKvTSG27tRxd6jhYrp0UTf6Q35QtFU22jyaauaSv7L2SmUCsV7wMMHvfN8rzrXGXz2Z22oykc1DEaIqIEhvj%2F%2BT%2BjxPWS5dKP8UxaYX%2BF1G7dAyCE5gt1SvqkFYGJdCYE4dmgbFREHixdGAd2wA7essc1N%2F5JISq2na8yV%2FhN2l1nXc4nksO1O0x5oGFffltzSwl3mFc%2FxTPpV9kF2NwvfIxOWdXmh5RIRC3TKhQ%2FQHVow1Lz8vwY6pgHM5im%2FIO5nHLWSndxloLiyuyyV1eOPHRDsygkiB1PGV%2FyfOf7hXO7k0f70%2FLaDVRLky00nJDvIxd9s1M5EBIRqAzOip8IYwojTFjNwlbK068tjqV7ka4nQSlzepyiuFpP%2BuOc42fkobFYY8gMzUm0EFk%2BXX2SBvR8LFz12%2Fb4%2FREEuA6rq7d2cYgClVc%2BQ5lgoLORl8118uDKRQvysCzussIw5vU7I&X-Amz-Signature=4cde0ab17c24ca24782dee55cf68bd532f6e45c56e4ddc1bc2ac60a778d31718&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
