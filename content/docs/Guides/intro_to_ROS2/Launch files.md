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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIOYWWA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpc7M62LOlLZ%2Fcq9fVq5mYB%2FWmz61og%2BRgsAWh6hG10AIgEQME3gb03UguworlGOVrXUHzeDWSFA7qKcjs5qcCEtQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAss1W5iA2lIZ%2ByV7SrcA1%2BQpRWhpS9QMPa59VVO2jcHcdFWgy8JHpfVDnOv6r4%2Bb%2FcEz6xBxSQV1hr%2BVsCog0nLuuL63UFU2VUNaHPQQHQhK7TBIjAhfx8M00lVNxvffGWLFYqELylgXIwZJBwrdMnH2yHqlYXX7Qhr6xEYWd4VYffGappPawEz2tFFHiBPp6s6rQOacR90%2F%2BZCgcFDxE9z6J9Y8tUeAiSV%2BiR21Es7S%2FJO61Ix9EJN9lcTFTsW6UtcjtYClcr0nWToAX5%2FAnuBQY28dLMb0Vw2maL1AMHHiFdoebRwIO4biQGgXEorOph5W9BSa0uIAcTvxCu71VnBGvhIJ9i9MSXj7Wg3qwNeAvnjl4LCcfQpNXgGmjzYb%2B0vdnuuRwliRJM7n%2FauAnjIC%2F0nvj8ILpxtABdL45FgSOEzvuZc7ES0I%2Bg8MNYsLOt055Kc0%2BS6QdZ%2BRjl%2FKlD88VfwvxOaFd20jf5%2BHe6P4SuQnNfOXu73jzJfMLiiponxlRrdfS29VfqzgsRRZ%2B29rdKe5sp1Rsw4jRJOp2zg%2BCnH%2BLStpaA9Be1To9S6gV5WeCbE9778osvoixTd3StWaTbR%2Fcq1bQ8K8nLhuiIMziZ7kfon4jvM%2BZZDgoJ462%2FPrjIdOMrKXu14MIbGvb8GOqUB7kV1jzQZgX8U2aFxDBe3N5urcPo9QWYh7loaSvU2P4dHBxYTiODuHYGQLtGewGK2wqIO%2FfinZ0MmWlV2i5YQTfA3TxRHLRYILm1qGe4%2BRzANW31P2LV9I9VJkgyQxrqGa26SNB7fnxJpVoi74aZyoQ4G9rW92mOFZrIM8cOqtN3wmAN1h%2B695t6PN7PmcT63NtT6AWjTVJvjzbQZ%2FHJynmGqkDFV&X-Amz-Signature=503fe53d15f340a5f5c6f69bc9d1a8cdf7c63a6f617d998894f0ac45c8896d3d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIOYWWA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpc7M62LOlLZ%2Fcq9fVq5mYB%2FWmz61og%2BRgsAWh6hG10AIgEQME3gb03UguworlGOVrXUHzeDWSFA7qKcjs5qcCEtQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAss1W5iA2lIZ%2ByV7SrcA1%2BQpRWhpS9QMPa59VVO2jcHcdFWgy8JHpfVDnOv6r4%2Bb%2FcEz6xBxSQV1hr%2BVsCog0nLuuL63UFU2VUNaHPQQHQhK7TBIjAhfx8M00lVNxvffGWLFYqELylgXIwZJBwrdMnH2yHqlYXX7Qhr6xEYWd4VYffGappPawEz2tFFHiBPp6s6rQOacR90%2F%2BZCgcFDxE9z6J9Y8tUeAiSV%2BiR21Es7S%2FJO61Ix9EJN9lcTFTsW6UtcjtYClcr0nWToAX5%2FAnuBQY28dLMb0Vw2maL1AMHHiFdoebRwIO4biQGgXEorOph5W9BSa0uIAcTvxCu71VnBGvhIJ9i9MSXj7Wg3qwNeAvnjl4LCcfQpNXgGmjzYb%2B0vdnuuRwliRJM7n%2FauAnjIC%2F0nvj8ILpxtABdL45FgSOEzvuZc7ES0I%2Bg8MNYsLOt055Kc0%2BS6QdZ%2BRjl%2FKlD88VfwvxOaFd20jf5%2BHe6P4SuQnNfOXu73jzJfMLiiponxlRrdfS29VfqzgsRRZ%2B29rdKe5sp1Rsw4jRJOp2zg%2BCnH%2BLStpaA9Be1To9S6gV5WeCbE9778osvoixTd3StWaTbR%2Fcq1bQ8K8nLhuiIMziZ7kfon4jvM%2BZZDgoJ462%2FPrjIdOMrKXu14MIbGvb8GOqUB7kV1jzQZgX8U2aFxDBe3N5urcPo9QWYh7loaSvU2P4dHBxYTiODuHYGQLtGewGK2wqIO%2FfinZ0MmWlV2i5YQTfA3TxRHLRYILm1qGe4%2BRzANW31P2LV9I9VJkgyQxrqGa26SNB7fnxJpVoi74aZyoQ4G9rW92mOFZrIM8cOqtN3wmAN1h%2B695t6PN7PmcT63NtT6AWjTVJvjzbQZ%2FHJynmGqkDFV&X-Amz-Signature=8f29c6d71200d355b71018085e26db2c41666d35d206f5d3e53aeeeef305087a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCIOYWWA%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDpc7M62LOlLZ%2Fcq9fVq5mYB%2FWmz61og%2BRgsAWh6hG10AIgEQME3gb03UguworlGOVrXUHzeDWSFA7qKcjs5qcCEtQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAss1W5iA2lIZ%2ByV7SrcA1%2BQpRWhpS9QMPa59VVO2jcHcdFWgy8JHpfVDnOv6r4%2Bb%2FcEz6xBxSQV1hr%2BVsCog0nLuuL63UFU2VUNaHPQQHQhK7TBIjAhfx8M00lVNxvffGWLFYqELylgXIwZJBwrdMnH2yHqlYXX7Qhr6xEYWd4VYffGappPawEz2tFFHiBPp6s6rQOacR90%2F%2BZCgcFDxE9z6J9Y8tUeAiSV%2BiR21Es7S%2FJO61Ix9EJN9lcTFTsW6UtcjtYClcr0nWToAX5%2FAnuBQY28dLMb0Vw2maL1AMHHiFdoebRwIO4biQGgXEorOph5W9BSa0uIAcTvxCu71VnBGvhIJ9i9MSXj7Wg3qwNeAvnjl4LCcfQpNXgGmjzYb%2B0vdnuuRwliRJM7n%2FauAnjIC%2F0nvj8ILpxtABdL45FgSOEzvuZc7ES0I%2Bg8MNYsLOt055Kc0%2BS6QdZ%2BRjl%2FKlD88VfwvxOaFd20jf5%2BHe6P4SuQnNfOXu73jzJfMLiiponxlRrdfS29VfqzgsRRZ%2B29rdKe5sp1Rsw4jRJOp2zg%2BCnH%2BLStpaA9Be1To9S6gV5WeCbE9778osvoixTd3StWaTbR%2Fcq1bQ8K8nLhuiIMziZ7kfon4jvM%2BZZDgoJ462%2FPrjIdOMrKXu14MIbGvb8GOqUB7kV1jzQZgX8U2aFxDBe3N5urcPo9QWYh7loaSvU2P4dHBxYTiODuHYGQLtGewGK2wqIO%2FfinZ0MmWlV2i5YQTfA3TxRHLRYILm1qGe4%2BRzANW31P2LV9I9VJkgyQxrqGa26SNB7fnxJpVoi74aZyoQ4G9rW92mOFZrIM8cOqtN3wmAN1h%2B695t6PN7PmcT63NtT6AWjTVJvjzbQZ%2FHJynmGqkDFV&X-Amz-Signature=c89da04b3686a890ae5b9822c0c4632edd91cc6111d4ab88ebef2d239b989f29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
