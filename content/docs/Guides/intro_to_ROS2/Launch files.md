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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRMYFJAO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB5LtBidn7LRjvtKUx5sz7WeCtEMrStOs9BhxqWXqn%2FAiEAsdxIZazbnh4dnuoHeCazv%2FGl6kyRMGIYvn%2F27PZjnMAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP0IUrxWiObY%2Fo6ayrcA4Gba%2Bf3wmIyQv%2FbjQMtrEfPuWhah0D4z%2B2pW1voJv9Vu5XPzLAn1lak8memPNsRTMUGdzHrMZBimF3o%2BtMNUSNOS9VcOcuGWGTT%2FGstyrlmurT8Wfv04xJOK62aNMy8OlsP1B8deShfoTRf150aWYVIp7XmEA30msO5Lz%2FSBy1JAvQfsO%2BGcDnNq3MsdBsIAkwnXJ6ZkeFfu9%2FlgOpiAYyCUyYHqrOj0CqB4WVePhzyx9TDG8ilZ8Sa1OD2wk71shRh7%2Fc9QYEZ8K5MW%2BNj6APIavky8J%2BZS76pwpNv9KCIr3atYJ%2F2CwxowALcbKGBb6AIqk48xixW2nHDqEDFIChrC8C652j7oAkpB6mtueedvWahqn32pQqdNdc%2FrV6XpoiLlKe2y2%2F2tbJGa8hAm660dUa11p%2BZvCgcLzqHeZeU%2BI2eRuJssQ1AvspTM5ZbN2aIHPcIP8%2Fiat8MiMz7GxKfbrPn00x4hP3MmdqhncA4gE%2B114uwWTgLTMnBXpTHLQup618FE7POY7HcO4fiQda7yDxN4BlcxsegccHogyGOasCWWCvF62sFCejQR1YbDBvOblHOCBGVol8JxcJ2S0zuTVpGYetwf7bkC3GdQahbU4L8dgkMQAqx43vXMLPQ0r4GOqUBzAXFG6x9ZkNlmN1FOLo8qIphr5M6dnGDUoa6U4VSlK%2BATfqSWwQ8MV5zGhH1wSnha4SezQrzb9Vk9de08ZB2itxEwBIC1AS67Bs%2BJK8dwd9DHl4B0FBBNB5cuelBKi3s5iVGBuVsmHDRaMtA3ybbdYJGeSOIPfWRwYa%2Fzi%2FyoBEJI7HdRwx8Mo67SEJDcwwUa20WeSBw%2F%2BQiKQAYLRqAiTBQ8s%2FC&X-Amz-Signature=135421d89459ece8b990cd9d732bf120c38b15bc780fa675d1a20e253655d6df&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRMYFJAO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB5LtBidn7LRjvtKUx5sz7WeCtEMrStOs9BhxqWXqn%2FAiEAsdxIZazbnh4dnuoHeCazv%2FGl6kyRMGIYvn%2F27PZjnMAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP0IUrxWiObY%2Fo6ayrcA4Gba%2Bf3wmIyQv%2FbjQMtrEfPuWhah0D4z%2B2pW1voJv9Vu5XPzLAn1lak8memPNsRTMUGdzHrMZBimF3o%2BtMNUSNOS9VcOcuGWGTT%2FGstyrlmurT8Wfv04xJOK62aNMy8OlsP1B8deShfoTRf150aWYVIp7XmEA30msO5Lz%2FSBy1JAvQfsO%2BGcDnNq3MsdBsIAkwnXJ6ZkeFfu9%2FlgOpiAYyCUyYHqrOj0CqB4WVePhzyx9TDG8ilZ8Sa1OD2wk71shRh7%2Fc9QYEZ8K5MW%2BNj6APIavky8J%2BZS76pwpNv9KCIr3atYJ%2F2CwxowALcbKGBb6AIqk48xixW2nHDqEDFIChrC8C652j7oAkpB6mtueedvWahqn32pQqdNdc%2FrV6XpoiLlKe2y2%2F2tbJGa8hAm660dUa11p%2BZvCgcLzqHeZeU%2BI2eRuJssQ1AvspTM5ZbN2aIHPcIP8%2Fiat8MiMz7GxKfbrPn00x4hP3MmdqhncA4gE%2B114uwWTgLTMnBXpTHLQup618FE7POY7HcO4fiQda7yDxN4BlcxsegccHogyGOasCWWCvF62sFCejQR1YbDBvOblHOCBGVol8JxcJ2S0zuTVpGYetwf7bkC3GdQahbU4L8dgkMQAqx43vXMLPQ0r4GOqUBzAXFG6x9ZkNlmN1FOLo8qIphr5M6dnGDUoa6U4VSlK%2BATfqSWwQ8MV5zGhH1wSnha4SezQrzb9Vk9de08ZB2itxEwBIC1AS67Bs%2BJK8dwd9DHl4B0FBBNB5cuelBKi3s5iVGBuVsmHDRaMtA3ybbdYJGeSOIPfWRwYa%2Fzi%2FyoBEJI7HdRwx8Mo67SEJDcwwUa20WeSBw%2F%2BQiKQAYLRqAiTBQ8s%2FC&X-Amz-Signature=975cd31b66b599d3ccf1d68a31b7cd92f576c3f36e58b131df364a289a59a280&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRMYFJAO%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDB5LtBidn7LRjvtKUx5sz7WeCtEMrStOs9BhxqWXqn%2FAiEAsdxIZazbnh4dnuoHeCazv%2FGl6kyRMGIYvn%2F27PZjnMAqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMP0IUrxWiObY%2Fo6ayrcA4Gba%2Bf3wmIyQv%2FbjQMtrEfPuWhah0D4z%2B2pW1voJv9Vu5XPzLAn1lak8memPNsRTMUGdzHrMZBimF3o%2BtMNUSNOS9VcOcuGWGTT%2FGstyrlmurT8Wfv04xJOK62aNMy8OlsP1B8deShfoTRf150aWYVIp7XmEA30msO5Lz%2FSBy1JAvQfsO%2BGcDnNq3MsdBsIAkwnXJ6ZkeFfu9%2FlgOpiAYyCUyYHqrOj0CqB4WVePhzyx9TDG8ilZ8Sa1OD2wk71shRh7%2Fc9QYEZ8K5MW%2BNj6APIavky8J%2BZS76pwpNv9KCIr3atYJ%2F2CwxowALcbKGBb6AIqk48xixW2nHDqEDFIChrC8C652j7oAkpB6mtueedvWahqn32pQqdNdc%2FrV6XpoiLlKe2y2%2F2tbJGa8hAm660dUa11p%2BZvCgcLzqHeZeU%2BI2eRuJssQ1AvspTM5ZbN2aIHPcIP8%2Fiat8MiMz7GxKfbrPn00x4hP3MmdqhncA4gE%2B114uwWTgLTMnBXpTHLQup618FE7POY7HcO4fiQda7yDxN4BlcxsegccHogyGOasCWWCvF62sFCejQR1YbDBvOblHOCBGVol8JxcJ2S0zuTVpGYetwf7bkC3GdQahbU4L8dgkMQAqx43vXMLPQ0r4GOqUBzAXFG6x9ZkNlmN1FOLo8qIphr5M6dnGDUoa6U4VSlK%2BATfqSWwQ8MV5zGhH1wSnha4SezQrzb9Vk9de08ZB2itxEwBIC1AS67Bs%2BJK8dwd9DHl4B0FBBNB5cuelBKi3s5iVGBuVsmHDRaMtA3ybbdYJGeSOIPfWRwYa%2Fzi%2FyoBEJI7HdRwx8Mo67SEJDcwwUa20WeSBw%2F%2BQiKQAYLRqAiTBQ8s%2FC&X-Amz-Signature=05ab240c6b6f5e7c8cdeba741b8b8679d76119a72d19f02a4316c0861bd1a236&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
