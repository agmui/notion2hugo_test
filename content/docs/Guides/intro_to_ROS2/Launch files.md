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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X323KGWZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC%2F0GEnHD1SYF9FqokUycV2jN5bXr9igzTBTmz%2FZRGh5gIgWKaRyf8vtP2lRKscW8Fnsc6%2BGf5Up%2FtVivTr2KMmKmoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJxkxe2zZbjGNq7eircA2OWDcXHYMCEp0fb72nmbr0K%2BwxoVlx%2F3ZNOhdglimnBSco4J6n8qdeLHbGEwq%2F7om7GBd%2B6Ydsv0DQsO4JeaMA50aBgMnGtWghhUXThxJ8udbbXrMGqs6y9l53g8WbaYaM6KTj%2FfXEKHMJqhPUGigl3W%2Fs50eLH3KiNWxSVPgbgZxkpCkUW4SMzGyZPX2XDZymL6qdA13wgPOrq1%2FBYEICORbEX%2B%2FRnB63q10sZB6oWd2EGUaViP2ugiM%2BaxCNdwudI212wIeLQNPnE9bwCH%2BnGSVE6dAzt313apyuVCtluQH1d3zCN5DKRbDFxXuD%2BmDfIEFNwtEAbkkXkny4ykZGdH99ScnkWVsygKCEzmyQEI3eZMwgs4G7MzX5R4TPC5Bmbfa7dOdUi95yDuaEa%2F59bVixIWeLy1oWXTaWzKl6q8JTpQchglyrvB25bL5iuQt%2BR%2FSBRXs3trfEK%2FbbrBykWE6z9lUJQ8Yi7PlvH2EJBrEvJQXjE29MfIyZFLVU%2B6HAiehVF4PaJKa73nc55V8GGfjZClWt3VErKcaBQ5Nuiq33FhVxevLk5bAGQD1QdEeXw6vAWm7E72Err7XC95tw3omP0nKCtd7kR4YbmMZoS10IBTHSNYwsV2swIMOiN08AGOqUBlZkVflrAHT6UksJZCYm%2BzYMQtgHxgB05arT%2Be081N8qkXqMWVOdwjRkqjTpiCUfETGlXjqMsR0BT5TtoQDcAYK1TVLCTDT3WWJNfybpLtZYkEanFAFwc24LppimRGQKtX4wke%2Bb2xW3ui0PmQCfGH6nYbrh2QWtV2yFKPNUIqPYcpxsd1WlKCc2wjm6CNRj4nwtogKQ7esPmQu9X%2FLPpE1tPs8W9&X-Amz-Signature=6f2fba7c8977c74042da4485d022de8c2e2874eaf7fc7fb260d1727962f09f22&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X323KGWZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC%2F0GEnHD1SYF9FqokUycV2jN5bXr9igzTBTmz%2FZRGh5gIgWKaRyf8vtP2lRKscW8Fnsc6%2BGf5Up%2FtVivTr2KMmKmoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJxkxe2zZbjGNq7eircA2OWDcXHYMCEp0fb72nmbr0K%2BwxoVlx%2F3ZNOhdglimnBSco4J6n8qdeLHbGEwq%2F7om7GBd%2B6Ydsv0DQsO4JeaMA50aBgMnGtWghhUXThxJ8udbbXrMGqs6y9l53g8WbaYaM6KTj%2FfXEKHMJqhPUGigl3W%2Fs50eLH3KiNWxSVPgbgZxkpCkUW4SMzGyZPX2XDZymL6qdA13wgPOrq1%2FBYEICORbEX%2B%2FRnB63q10sZB6oWd2EGUaViP2ugiM%2BaxCNdwudI212wIeLQNPnE9bwCH%2BnGSVE6dAzt313apyuVCtluQH1d3zCN5DKRbDFxXuD%2BmDfIEFNwtEAbkkXkny4ykZGdH99ScnkWVsygKCEzmyQEI3eZMwgs4G7MzX5R4TPC5Bmbfa7dOdUi95yDuaEa%2F59bVixIWeLy1oWXTaWzKl6q8JTpQchglyrvB25bL5iuQt%2BR%2FSBRXs3trfEK%2FbbrBykWE6z9lUJQ8Yi7PlvH2EJBrEvJQXjE29MfIyZFLVU%2B6HAiehVF4PaJKa73nc55V8GGfjZClWt3VErKcaBQ5Nuiq33FhVxevLk5bAGQD1QdEeXw6vAWm7E72Err7XC95tw3omP0nKCtd7kR4YbmMZoS10IBTHSNYwsV2swIMOiN08AGOqUBlZkVflrAHT6UksJZCYm%2BzYMQtgHxgB05arT%2Be081N8qkXqMWVOdwjRkqjTpiCUfETGlXjqMsR0BT5TtoQDcAYK1TVLCTDT3WWJNfybpLtZYkEanFAFwc24LppimRGQKtX4wke%2Bb2xW3ui0PmQCfGH6nYbrh2QWtV2yFKPNUIqPYcpxsd1WlKCc2wjm6CNRj4nwtogKQ7esPmQu9X%2FLPpE1tPs8W9&X-Amz-Signature=85028c768d1b68c2c3e57e680660ca32bf56e315b0501d075be5adfa76a8dbcc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X323KGWZ%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC%2F0GEnHD1SYF9FqokUycV2jN5bXr9igzTBTmz%2FZRGh5gIgWKaRyf8vtP2lRKscW8Fnsc6%2BGf5Up%2FtVivTr2KMmKmoqiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMJxkxe2zZbjGNq7eircA2OWDcXHYMCEp0fb72nmbr0K%2BwxoVlx%2F3ZNOhdglimnBSco4J6n8qdeLHbGEwq%2F7om7GBd%2B6Ydsv0DQsO4JeaMA50aBgMnGtWghhUXThxJ8udbbXrMGqs6y9l53g8WbaYaM6KTj%2FfXEKHMJqhPUGigl3W%2Fs50eLH3KiNWxSVPgbgZxkpCkUW4SMzGyZPX2XDZymL6qdA13wgPOrq1%2FBYEICORbEX%2B%2FRnB63q10sZB6oWd2EGUaViP2ugiM%2BaxCNdwudI212wIeLQNPnE9bwCH%2BnGSVE6dAzt313apyuVCtluQH1d3zCN5DKRbDFxXuD%2BmDfIEFNwtEAbkkXkny4ykZGdH99ScnkWVsygKCEzmyQEI3eZMwgs4G7MzX5R4TPC5Bmbfa7dOdUi95yDuaEa%2F59bVixIWeLy1oWXTaWzKl6q8JTpQchglyrvB25bL5iuQt%2BR%2FSBRXs3trfEK%2FbbrBykWE6z9lUJQ8Yi7PlvH2EJBrEvJQXjE29MfIyZFLVU%2B6HAiehVF4PaJKa73nc55V8GGfjZClWt3VErKcaBQ5Nuiq33FhVxevLk5bAGQD1QdEeXw6vAWm7E72Err7XC95tw3omP0nKCtd7kR4YbmMZoS10IBTHSNYwsV2swIMOiN08AGOqUBlZkVflrAHT6UksJZCYm%2BzYMQtgHxgB05arT%2Be081N8qkXqMWVOdwjRkqjTpiCUfETGlXjqMsR0BT5TtoQDcAYK1TVLCTDT3WWJNfybpLtZYkEanFAFwc24LppimRGQKtX4wke%2Bb2xW3ui0PmQCfGH6nYbrh2QWtV2yFKPNUIqPYcpxsd1WlKCc2wjm6CNRj4nwtogKQ7esPmQu9X%2FLPpE1tPs8W9&X-Amz-Signature=5b639329da9fe6538fb8d5aa34a8fd26ce29bab85afd7f6dcc8c098dc4ad74ac&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
