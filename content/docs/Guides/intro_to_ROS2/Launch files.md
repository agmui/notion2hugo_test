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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5UDEE2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnLyWBgRMKfE7N7jmSpeL5Ym9xsQ%2BInzbd38xjv9TWOAiByXiEcbl9fscbreKULXbayk0MT7KydpJnRXx3hf%2Bk56iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuncsk0ZAWGKeBMGKtwDmx5OU8he%2FjGsWA6o48SeZPxGigMh0LiYS26WGYbz%2BgPPcH8Q1Lr1mWQj5BOc1miAjlzbJHyfNBNG8E4AEhN6dRwCS2Ni2I9wWWtEo%2BWeybnsc3zRjladLt0it%2Fb4doBvu4t%2BTINtZBRH%2FSsZUZkvkPiBjtaXwfVqO4tO%2FPk8ufP1EP3FTaEv%2BiptDbiAmzCOYFlMy74dTDXmg2YVASdOSENOT3TmPAbq21FoLgZbzz8nUQQOtltuwwJxpaPM9EMF9NVflIw1YROz1%2Frdz0c8niev0XYFGsbpxJo4Q7wNBTTUUWIBS%2FZGHINE7CyuD177Ot72npynxyKaSpTi8CiF4UNc7IdLJ%2FDgL%2BiNV9UrGaBHS%2FqKFvTzRWkdvv7mx7CfkxeNP69xxnr33xiA9qoLE1ok4TOPOORMP1SYjEASKxHtE%2Fd9sXr1Xdmb2MyKEw%2FFvADsSJM8kpkyMeFtUUekeVI6RhtTI5ZUBYeY3YydX9IT08t7CSb8JakpsHXioW5ptfgDA5vYNcHjmwFW2x6TzjyazoC%2FHB0I4RxS59TgbgZZeu6boHchsUEWV3U%2Bc6gTQ%2F2qUIGF7lZP%2BtmKr2crFkVIE90Nv%2FBMrqcAt%2Bx65%2BMSiOnFxCHfKP5ktTMwpb%2BgwgY6pgEmIDINUqy6CZGYGBEg3LyA37SogMEh73gXXTXko67RvzpjOIwlsSSk7LmNmulq3fnmSlc1at9hbY6D0rMk7PdcYR0AqsuQej7pVw%2B9ERmG8iQ4QlfMhamOh87MIe93Gwb4W6ptnMPhpGCWouCozvDoU4mszhR4QqblLO5xX6OZgFaSFQzzlOzVAegJKmSuIHgLjAwhJNKgp%2FQS3brIMzwhVRIDID9j&X-Amz-Signature=dc86ae0417ca65c0522f9c94c0da1af6a8cab238008824fbbabb1cc911d6a372&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5UDEE2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnLyWBgRMKfE7N7jmSpeL5Ym9xsQ%2BInzbd38xjv9TWOAiByXiEcbl9fscbreKULXbayk0MT7KydpJnRXx3hf%2Bk56iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuncsk0ZAWGKeBMGKtwDmx5OU8he%2FjGsWA6o48SeZPxGigMh0LiYS26WGYbz%2BgPPcH8Q1Lr1mWQj5BOc1miAjlzbJHyfNBNG8E4AEhN6dRwCS2Ni2I9wWWtEo%2BWeybnsc3zRjladLt0it%2Fb4doBvu4t%2BTINtZBRH%2FSsZUZkvkPiBjtaXwfVqO4tO%2FPk8ufP1EP3FTaEv%2BiptDbiAmzCOYFlMy74dTDXmg2YVASdOSENOT3TmPAbq21FoLgZbzz8nUQQOtltuwwJxpaPM9EMF9NVflIw1YROz1%2Frdz0c8niev0XYFGsbpxJo4Q7wNBTTUUWIBS%2FZGHINE7CyuD177Ot72npynxyKaSpTi8CiF4UNc7IdLJ%2FDgL%2BiNV9UrGaBHS%2FqKFvTzRWkdvv7mx7CfkxeNP69xxnr33xiA9qoLE1ok4TOPOORMP1SYjEASKxHtE%2Fd9sXr1Xdmb2MyKEw%2FFvADsSJM8kpkyMeFtUUekeVI6RhtTI5ZUBYeY3YydX9IT08t7CSb8JakpsHXioW5ptfgDA5vYNcHjmwFW2x6TzjyazoC%2FHB0I4RxS59TgbgZZeu6boHchsUEWV3U%2Bc6gTQ%2F2qUIGF7lZP%2BtmKr2crFkVIE90Nv%2FBMrqcAt%2Bx65%2BMSiOnFxCHfKP5ktTMwpb%2BgwgY6pgEmIDINUqy6CZGYGBEg3LyA37SogMEh73gXXTXko67RvzpjOIwlsSSk7LmNmulq3fnmSlc1at9hbY6D0rMk7PdcYR0AqsuQej7pVw%2B9ERmG8iQ4QlfMhamOh87MIe93Gwb4W6ptnMPhpGCWouCozvDoU4mszhR4QqblLO5xX6OZgFaSFQzzlOzVAegJKmSuIHgLjAwhJNKgp%2FQS3brIMzwhVRIDID9j&X-Amz-Signature=576788fef18dd7180c91b5b7bea0b7c72019fcfa5aa9788c968a99efdac15f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F5UDEE2%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGnLyWBgRMKfE7N7jmSpeL5Ym9xsQ%2BInzbd38xjv9TWOAiByXiEcbl9fscbreKULXbayk0MT7KydpJnRXx3hf%2Bk56iqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmuncsk0ZAWGKeBMGKtwDmx5OU8he%2FjGsWA6o48SeZPxGigMh0LiYS26WGYbz%2BgPPcH8Q1Lr1mWQj5BOc1miAjlzbJHyfNBNG8E4AEhN6dRwCS2Ni2I9wWWtEo%2BWeybnsc3zRjladLt0it%2Fb4doBvu4t%2BTINtZBRH%2FSsZUZkvkPiBjtaXwfVqO4tO%2FPk8ufP1EP3FTaEv%2BiptDbiAmzCOYFlMy74dTDXmg2YVASdOSENOT3TmPAbq21FoLgZbzz8nUQQOtltuwwJxpaPM9EMF9NVflIw1YROz1%2Frdz0c8niev0XYFGsbpxJo4Q7wNBTTUUWIBS%2FZGHINE7CyuD177Ot72npynxyKaSpTi8CiF4UNc7IdLJ%2FDgL%2BiNV9UrGaBHS%2FqKFvTzRWkdvv7mx7CfkxeNP69xxnr33xiA9qoLE1ok4TOPOORMP1SYjEASKxHtE%2Fd9sXr1Xdmb2MyKEw%2FFvADsSJM8kpkyMeFtUUekeVI6RhtTI5ZUBYeY3YydX9IT08t7CSb8JakpsHXioW5ptfgDA5vYNcHjmwFW2x6TzjyazoC%2FHB0I4RxS59TgbgZZeu6boHchsUEWV3U%2Bc6gTQ%2F2qUIGF7lZP%2BtmKr2crFkVIE90Nv%2FBMrqcAt%2Bx65%2BMSiOnFxCHfKP5ktTMwpb%2BgwgY6pgEmIDINUqy6CZGYGBEg3LyA37SogMEh73gXXTXko67RvzpjOIwlsSSk7LmNmulq3fnmSlc1at9hbY6D0rMk7PdcYR0AqsuQej7pVw%2B9ERmG8iQ4QlfMhamOh87MIe93Gwb4W6ptnMPhpGCWouCozvDoU4mszhR4QqblLO5xX6OZgFaSFQzzlOzVAegJKmSuIHgLjAwhJNKgp%2FQS3brIMzwhVRIDID9j&X-Amz-Signature=9f676034cb93eabf130a70ead4fad46be6faa4a755ca48be97eaa89268386d27&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
