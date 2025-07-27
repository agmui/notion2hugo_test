---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4UFQP5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHMAH9eA5%2F5pKlVeJbzAqqsyqJ872hMiu7JDsyRVAoDeAiEA3ic79WTgx8x229sUqViqYNEGFi%2FxtercnshjYcBSZqQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHL3U2LygZnqXSpXoyrcA2RFUJj305n87W14CuisS%2F1hPGP7xlak3alBJgsQ%2FoXhWMJjeb9neTg1jXw%2BbBa%2BKG82woVXAYV%2F6Zolo%2FdKopS7thspgopU%2BxjV4qnxZbuTFh1SMGEPaJoUO2O%2BGhbuC9JthbUKAI2dl%2BCg7KB83GAXku9pmASaDKWwVyl8jq%2BSlZKzuVeWjjxKnLfZsLhJUeUH1VeIoH7CMbsSNpMdIVZG2BdTiEyndBNZrwsGgSYsrzPa16Efwc2AM8LtxVq0FGAa2efla0NBRZO536BtSY5dCAM1mGmK0xFnppeNi94NFn7fEYYd6RMg0sSSWcyk4DHUFOh9zjgxQjfiQpoQMIQBKsYt1ir3RaPBDEZvoY1Z%2B%2FuJiOVd394UGCOL3lEpgpEKU7v9IEa6hgFTNfMXuB5U9Mw7c8o8PZW7vyeYewA2oEIdkFYb5k0EidSMZn17ZW9RvfmzorWodrTZaEZqYUDqjvRD48yusdVdyg8D4%2Ftw31449Agrb04OfQEr6ok2KvWrQ8N9duyq7EDjfu%2Br%2FCpUhzzmhEyXjcIl7mIINz0HlDmbBuvc2ZgSjAAznnGK9rdHHWl0f96r4dm%2F4rAbBhYWFDarrCIijO5FAuqgj0l3Cj1yYtcJ%2B%2BgvBqYJMPHfl8QGOqUB9epeh0MmYpbn2Ffo69AZqmOXPSdYwZC%2F5lb9xmwM4DVDfX6z%2BhTtHmMUo4cJNZ3Ok5n4e%2FeE4yBY%2FZcYEVVMc5Uem0iwpS96Aaxrm5OybOoo07864SiXPl7Qcobx%2FGvRU2sUzD5Nt%2Fh%2Fb4YOFfhauRe2mjQ0Uq1vIsq%2Bz9Yo807UFre%2F8Yt4iWWf7CjGuUrfo0quQ5ecSbdvyU%2FqkVAKf3TF4TuP&X-Amz-Signature=903caaf5c0b769fe5cb75501180892903bd5e526490229d66e0750eaf1909d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4UFQP5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHMAH9eA5%2F5pKlVeJbzAqqsyqJ872hMiu7JDsyRVAoDeAiEA3ic79WTgx8x229sUqViqYNEGFi%2FxtercnshjYcBSZqQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHL3U2LygZnqXSpXoyrcA2RFUJj305n87W14CuisS%2F1hPGP7xlak3alBJgsQ%2FoXhWMJjeb9neTg1jXw%2BbBa%2BKG82woVXAYV%2F6Zolo%2FdKopS7thspgopU%2BxjV4qnxZbuTFh1SMGEPaJoUO2O%2BGhbuC9JthbUKAI2dl%2BCg7KB83GAXku9pmASaDKWwVyl8jq%2BSlZKzuVeWjjxKnLfZsLhJUeUH1VeIoH7CMbsSNpMdIVZG2BdTiEyndBNZrwsGgSYsrzPa16Efwc2AM8LtxVq0FGAa2efla0NBRZO536BtSY5dCAM1mGmK0xFnppeNi94NFn7fEYYd6RMg0sSSWcyk4DHUFOh9zjgxQjfiQpoQMIQBKsYt1ir3RaPBDEZvoY1Z%2B%2FuJiOVd394UGCOL3lEpgpEKU7v9IEa6hgFTNfMXuB5U9Mw7c8o8PZW7vyeYewA2oEIdkFYb5k0EidSMZn17ZW9RvfmzorWodrTZaEZqYUDqjvRD48yusdVdyg8D4%2Ftw31449Agrb04OfQEr6ok2KvWrQ8N9duyq7EDjfu%2Br%2FCpUhzzmhEyXjcIl7mIINz0HlDmbBuvc2ZgSjAAznnGK9rdHHWl0f96r4dm%2F4rAbBhYWFDarrCIijO5FAuqgj0l3Cj1yYtcJ%2B%2BgvBqYJMPHfl8QGOqUB9epeh0MmYpbn2Ffo69AZqmOXPSdYwZC%2F5lb9xmwM4DVDfX6z%2BhTtHmMUo4cJNZ3Ok5n4e%2FeE4yBY%2FZcYEVVMc5Uem0iwpS96Aaxrm5OybOoo07864SiXPl7Qcobx%2FGvRU2sUzD5Nt%2Fh%2Fb4YOFfhauRe2mjQ0Uq1vIsq%2Bz9Yo807UFre%2F8Yt4iWWf7CjGuUrfo0quQ5ecSbdvyU%2FqkVAKf3TF4TuP&X-Amz-Signature=00d2c3e6f6941c438b0fd51dc565a65d1a38e3b1335d333c8bcac9af6fc95c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W4UFQP5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIHMAH9eA5%2F5pKlVeJbzAqqsyqJ872hMiu7JDsyRVAoDeAiEA3ic79WTgx8x229sUqViqYNEGFi%2FxtercnshjYcBSZqQq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHL3U2LygZnqXSpXoyrcA2RFUJj305n87W14CuisS%2F1hPGP7xlak3alBJgsQ%2FoXhWMJjeb9neTg1jXw%2BbBa%2BKG82woVXAYV%2F6Zolo%2FdKopS7thspgopU%2BxjV4qnxZbuTFh1SMGEPaJoUO2O%2BGhbuC9JthbUKAI2dl%2BCg7KB83GAXku9pmASaDKWwVyl8jq%2BSlZKzuVeWjjxKnLfZsLhJUeUH1VeIoH7CMbsSNpMdIVZG2BdTiEyndBNZrwsGgSYsrzPa16Efwc2AM8LtxVq0FGAa2efla0NBRZO536BtSY5dCAM1mGmK0xFnppeNi94NFn7fEYYd6RMg0sSSWcyk4DHUFOh9zjgxQjfiQpoQMIQBKsYt1ir3RaPBDEZvoY1Z%2B%2FuJiOVd394UGCOL3lEpgpEKU7v9IEa6hgFTNfMXuB5U9Mw7c8o8PZW7vyeYewA2oEIdkFYb5k0EidSMZn17ZW9RvfmzorWodrTZaEZqYUDqjvRD48yusdVdyg8D4%2Ftw31449Agrb04OfQEr6ok2KvWrQ8N9duyq7EDjfu%2Br%2FCpUhzzmhEyXjcIl7mIINz0HlDmbBuvc2ZgSjAAznnGK9rdHHWl0f96r4dm%2F4rAbBhYWFDarrCIijO5FAuqgj0l3Cj1yYtcJ%2B%2BgvBqYJMPHfl8QGOqUB9epeh0MmYpbn2Ffo69AZqmOXPSdYwZC%2F5lb9xmwM4DVDfX6z%2BhTtHmMUo4cJNZ3Ok5n4e%2FeE4yBY%2FZcYEVVMc5Uem0iwpS96Aaxrm5OybOoo07864SiXPl7Qcobx%2FGvRU2sUzD5Nt%2Fh%2Fb4YOFfhauRe2mjQ0Uq1vIsq%2Bz9Yo807UFre%2F8Yt4iWWf7CjGuUrfo0quQ5ecSbdvyU%2FqkVAKf3TF4TuP&X-Amz-Signature=519f1cbd45addda21df794a570f592f11da8d97650fce5691cbf2cad954f878f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
