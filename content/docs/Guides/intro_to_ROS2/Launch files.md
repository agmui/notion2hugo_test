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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAVCBUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb0dx%2FvAkOdg7TSK%2Bubg3NIaUWyJiyckE%2B0cWdLpzafAiEAkv%2FifTLd1jv0SUM8%2FXP2XCx20aApa9Wj%2B49IkaRRe3kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAblUifcHQVF2XRxWCrcAw7JP%2BzFTJwM9%2BEYlZcdPRNt8apiBT7JNo3nxQScKIh2R5S3jJeiFdiLeP2WWK7%2FgVreSQNGBGRofCHxYYwnxdNPr7%2B7WAHjCF7zKb5Eyz0AEP1VlypvZ8KAcO4lQL1mQlHmckTqDVGm8MZRZTvhUF%2FbD3FsaTHnErEzS6sw5vIylmzzzznKm38TT0pMkCZxHJDhvUEit6%2BeXgtu1lF84HLQb2rqPO6hXTAxlzveqmqae6YcoqdhC8%2BgyN3uSbYBoHTskHsAYHHWpAGR5j3aSJUWvr%2BgqYjLdlp2ivU8p1K8utwXn9EAm4znMiMr%2FVTCgdJtanrEzQJlkdxyS%2FTmnxAb%2BPbrFZUB83K%2FQEvfOpMUhsRA4a78rzMMpleXDw9GmKDJZiEI%2B6IZi3yeMbk7BkCneRuuFaK%2BJ8SB49WBqDev2TDbAfVgN3scM5Tk8cob%2FQLvR%2FTl%2BVEe98AYis1mBvWukvuC4TLwnKOfoJrqN8ScXYiFR4cjbeMv4pz3HxWa5kv8wHq9AnY%2FTdolSOFETwKGBqPAC23goaZhdqlLe9TINYfPX0hy8h4D0TmWcYs1uid2VLd67t5n8iwDFFgDMC7AZgpbaOmG9a1%2BA4%2BrMaKsUMiDvx4EQOuKOcw%2BMI7rucMGOqUBcSRNsaBWRoxobuxlzOSGgAP20eEBTPhvs%2F7k9282Q51SIKyT1HUyBQabuDufkKxM%2BlG221VxoqL4G6ITlNvFgOq3bK95sRwNfJy4TO%2B9dfvSKLkSSaHg%2F%2Fbakhj%2BYq4%2F5v1%2B2onjbnwrS89B%2Br1QFz13H1dh70z82dWqS259JeIwiDr6bTdC5RUSFe%2B5fzwtF%2B6bO5a24xUpf51p85yknH3v3e%2BY&X-Amz-Signature=7531f4469275ca77e92f3ce47493330225af683b8c4e70af8778d6780e94ef76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAVCBUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb0dx%2FvAkOdg7TSK%2Bubg3NIaUWyJiyckE%2B0cWdLpzafAiEAkv%2FifTLd1jv0SUM8%2FXP2XCx20aApa9Wj%2B49IkaRRe3kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAblUifcHQVF2XRxWCrcAw7JP%2BzFTJwM9%2BEYlZcdPRNt8apiBT7JNo3nxQScKIh2R5S3jJeiFdiLeP2WWK7%2FgVreSQNGBGRofCHxYYwnxdNPr7%2B7WAHjCF7zKb5Eyz0AEP1VlypvZ8KAcO4lQL1mQlHmckTqDVGm8MZRZTvhUF%2FbD3FsaTHnErEzS6sw5vIylmzzzznKm38TT0pMkCZxHJDhvUEit6%2BeXgtu1lF84HLQb2rqPO6hXTAxlzveqmqae6YcoqdhC8%2BgyN3uSbYBoHTskHsAYHHWpAGR5j3aSJUWvr%2BgqYjLdlp2ivU8p1K8utwXn9EAm4znMiMr%2FVTCgdJtanrEzQJlkdxyS%2FTmnxAb%2BPbrFZUB83K%2FQEvfOpMUhsRA4a78rzMMpleXDw9GmKDJZiEI%2B6IZi3yeMbk7BkCneRuuFaK%2BJ8SB49WBqDev2TDbAfVgN3scM5Tk8cob%2FQLvR%2FTl%2BVEe98AYis1mBvWukvuC4TLwnKOfoJrqN8ScXYiFR4cjbeMv4pz3HxWa5kv8wHq9AnY%2FTdolSOFETwKGBqPAC23goaZhdqlLe9TINYfPX0hy8h4D0TmWcYs1uid2VLd67t5n8iwDFFgDMC7AZgpbaOmG9a1%2BA4%2BrMaKsUMiDvx4EQOuKOcw%2BMI7rucMGOqUBcSRNsaBWRoxobuxlzOSGgAP20eEBTPhvs%2F7k9282Q51SIKyT1HUyBQabuDufkKxM%2BlG221VxoqL4G6ITlNvFgOq3bK95sRwNfJy4TO%2B9dfvSKLkSSaHg%2F%2Fbakhj%2BYq4%2F5v1%2B2onjbnwrS89B%2Br1QFz13H1dh70z82dWqS259JeIwiDr6bTdC5RUSFe%2B5fzwtF%2B6bO5a24xUpf51p85yknH3v3e%2BY&X-Amz-Signature=3784e0757671fd9acbb7ad7122b8c3087d41054ce24cd1fd577de31a4a08358f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WAVCBUP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBb0dx%2FvAkOdg7TSK%2Bubg3NIaUWyJiyckE%2B0cWdLpzafAiEAkv%2FifTLd1jv0SUM8%2FXP2XCx20aApa9Wj%2B49IkaRRe3kqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAblUifcHQVF2XRxWCrcAw7JP%2BzFTJwM9%2BEYlZcdPRNt8apiBT7JNo3nxQScKIh2R5S3jJeiFdiLeP2WWK7%2FgVreSQNGBGRofCHxYYwnxdNPr7%2B7WAHjCF7zKb5Eyz0AEP1VlypvZ8KAcO4lQL1mQlHmckTqDVGm8MZRZTvhUF%2FbD3FsaTHnErEzS6sw5vIylmzzzznKm38TT0pMkCZxHJDhvUEit6%2BeXgtu1lF84HLQb2rqPO6hXTAxlzveqmqae6YcoqdhC8%2BgyN3uSbYBoHTskHsAYHHWpAGR5j3aSJUWvr%2BgqYjLdlp2ivU8p1K8utwXn9EAm4znMiMr%2FVTCgdJtanrEzQJlkdxyS%2FTmnxAb%2BPbrFZUB83K%2FQEvfOpMUhsRA4a78rzMMpleXDw9GmKDJZiEI%2B6IZi3yeMbk7BkCneRuuFaK%2BJ8SB49WBqDev2TDbAfVgN3scM5Tk8cob%2FQLvR%2FTl%2BVEe98AYis1mBvWukvuC4TLwnKOfoJrqN8ScXYiFR4cjbeMv4pz3HxWa5kv8wHq9AnY%2FTdolSOFETwKGBqPAC23goaZhdqlLe9TINYfPX0hy8h4D0TmWcYs1uid2VLd67t5n8iwDFFgDMC7AZgpbaOmG9a1%2BA4%2BrMaKsUMiDvx4EQOuKOcw%2BMI7rucMGOqUBcSRNsaBWRoxobuxlzOSGgAP20eEBTPhvs%2F7k9282Q51SIKyT1HUyBQabuDufkKxM%2BlG221VxoqL4G6ITlNvFgOq3bK95sRwNfJy4TO%2B9dfvSKLkSSaHg%2F%2Fbakhj%2BYq4%2F5v1%2B2onjbnwrS89B%2Br1QFz13H1dh70z82dWqS259JeIwiDr6bTdC5RUSFe%2B5fzwtF%2B6bO5a24xUpf51p85yknH3v3e%2BY&X-Amz-Signature=559dc80fc96724ad08ae527e63a1c7a45f852c89e87661cdb3530e9132dc2375&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
