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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FOU3HQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCeotb233H0lDiV3vSG0naWpm7GvIIXSxqXvW8%2FZXmnXwIhAPC9gtPTAd6OCvqkxR6zyrqZiF40V4RTB5BYRb7XQnv9KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw05JtSZf2p2yld92Iq3AOGBlZSoE2uPZJLy2fZe3bTQEeMXS7JKzQjDC3GChkX5XVIFOwNduf6cOsDxpdBV5zyMS2eIMyWQsfXgQ5cD3eNITIONzUhQXyHY9Jq06p7hWOzNV8IKNNfcH8Y81VlIRC2Ph5WOwcos7d4Lqz%2B6D9VjJLxR%2F52zWo1Uyrudg4Yh0keXM1Yis5wZdefu6khz5RRGYD9avbsucekEiy2ossVxtKRr7EzaAmzYLgUzZh%2FuE8dfYgBjpC11NfXi8hAH0umFxBSjGm%2B8yjqczSaTV8vGSfYedwvHptR1cXOhwFCDTjDYo7eJGpcu2b2c%2FeWSx7v73oHMwh0do8ga0o1OdBxzRN2p%2B1D3mBpVlZ92dEf85cPwO5c3fYqJfcGNceJBi5pZfTUcHtwQrqfkD039Ll7AVdk0Zq1FuJ8bJZjVIMdINQLR15HsI6%2FhigNRtR8pbQin%2BQX5H2M7Q7FZfoT%2FhnZpxTMnvE4yuhBaJRjIZod6Jt3hZkYx15RTIGutg7sYeKQF%2FfGsq6Kg5lriT16%2BtPuGo3TxmZGLG6v6LOykgnqw31zhC990I57O4Ng5aqlL64CmBs%2Fw%2BzvA16bXOoiAQoof7mm5R%2FxvJ1M7zDQiedtz4FaIki7PJVI8BR3szCN6qK%2FBjqkAYgs3%2FeqXE61hUYYkEfoTjKewbEhJXbpmWZ9bL1kLUnZWDdUNVUqEik9bVSLV2avq3UvWkMZSgsbz48RLokZv1Hjghwo7dr%2BIUXD9y6oMGBA0fThP8tTg5l5%2FYZLjr3W0scvyLbKNJfV2v%2FR2SMn%2BbG%2BygdrsyD3ZlSgTv%2FSgm51jevwHY2Q7QJMSYiKEs5dlg9FYf8WflJBU8JrlQY8uEGKozsl&X-Amz-Signature=4c45ce152a1d261e1a640fd9c4f948b650c164f065433aca9b64b3f026c16654&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FOU3HQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCeotb233H0lDiV3vSG0naWpm7GvIIXSxqXvW8%2FZXmnXwIhAPC9gtPTAd6OCvqkxR6zyrqZiF40V4RTB5BYRb7XQnv9KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw05JtSZf2p2yld92Iq3AOGBlZSoE2uPZJLy2fZe3bTQEeMXS7JKzQjDC3GChkX5XVIFOwNduf6cOsDxpdBV5zyMS2eIMyWQsfXgQ5cD3eNITIONzUhQXyHY9Jq06p7hWOzNV8IKNNfcH8Y81VlIRC2Ph5WOwcos7d4Lqz%2B6D9VjJLxR%2F52zWo1Uyrudg4Yh0keXM1Yis5wZdefu6khz5RRGYD9avbsucekEiy2ossVxtKRr7EzaAmzYLgUzZh%2FuE8dfYgBjpC11NfXi8hAH0umFxBSjGm%2B8yjqczSaTV8vGSfYedwvHptR1cXOhwFCDTjDYo7eJGpcu2b2c%2FeWSx7v73oHMwh0do8ga0o1OdBxzRN2p%2B1D3mBpVlZ92dEf85cPwO5c3fYqJfcGNceJBi5pZfTUcHtwQrqfkD039Ll7AVdk0Zq1FuJ8bJZjVIMdINQLR15HsI6%2FhigNRtR8pbQin%2BQX5H2M7Q7FZfoT%2FhnZpxTMnvE4yuhBaJRjIZod6Jt3hZkYx15RTIGutg7sYeKQF%2FfGsq6Kg5lriT16%2BtPuGo3TxmZGLG6v6LOykgnqw31zhC990I57O4Ng5aqlL64CmBs%2Fw%2BzvA16bXOoiAQoof7mm5R%2FxvJ1M7zDQiedtz4FaIki7PJVI8BR3szCN6qK%2FBjqkAYgs3%2FeqXE61hUYYkEfoTjKewbEhJXbpmWZ9bL1kLUnZWDdUNVUqEik9bVSLV2avq3UvWkMZSgsbz48RLokZv1Hjghwo7dr%2BIUXD9y6oMGBA0fThP8tTg5l5%2FYZLjr3W0scvyLbKNJfV2v%2FR2SMn%2BbG%2BygdrsyD3ZlSgTv%2FSgm51jevwHY2Q7QJMSYiKEs5dlg9FYf8WflJBU8JrlQY8uEGKozsl&X-Amz-Signature=59ce95b03e09fc22a645ba091db11c08d6ec56bf37c2431dfb09b6a496fa3f17&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673FOU3HQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T040946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCeotb233H0lDiV3vSG0naWpm7GvIIXSxqXvW8%2FZXmnXwIhAPC9gtPTAd6OCvqkxR6zyrqZiF40V4RTB5BYRb7XQnv9KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw05JtSZf2p2yld92Iq3AOGBlZSoE2uPZJLy2fZe3bTQEeMXS7JKzQjDC3GChkX5XVIFOwNduf6cOsDxpdBV5zyMS2eIMyWQsfXgQ5cD3eNITIONzUhQXyHY9Jq06p7hWOzNV8IKNNfcH8Y81VlIRC2Ph5WOwcos7d4Lqz%2B6D9VjJLxR%2F52zWo1Uyrudg4Yh0keXM1Yis5wZdefu6khz5RRGYD9avbsucekEiy2ossVxtKRr7EzaAmzYLgUzZh%2FuE8dfYgBjpC11NfXi8hAH0umFxBSjGm%2B8yjqczSaTV8vGSfYedwvHptR1cXOhwFCDTjDYo7eJGpcu2b2c%2FeWSx7v73oHMwh0do8ga0o1OdBxzRN2p%2B1D3mBpVlZ92dEf85cPwO5c3fYqJfcGNceJBi5pZfTUcHtwQrqfkD039Ll7AVdk0Zq1FuJ8bJZjVIMdINQLR15HsI6%2FhigNRtR8pbQin%2BQX5H2M7Q7FZfoT%2FhnZpxTMnvE4yuhBaJRjIZod6Jt3hZkYx15RTIGutg7sYeKQF%2FfGsq6Kg5lriT16%2BtPuGo3TxmZGLG6v6LOykgnqw31zhC990I57O4Ng5aqlL64CmBs%2Fw%2BzvA16bXOoiAQoof7mm5R%2FxvJ1M7zDQiedtz4FaIki7PJVI8BR3szCN6qK%2FBjqkAYgs3%2FeqXE61hUYYkEfoTjKewbEhJXbpmWZ9bL1kLUnZWDdUNVUqEik9bVSLV2avq3UvWkMZSgsbz48RLokZv1Hjghwo7dr%2BIUXD9y6oMGBA0fThP8tTg5l5%2FYZLjr3W0scvyLbKNJfV2v%2FR2SMn%2BbG%2BygdrsyD3ZlSgTv%2FSgm51jevwHY2Q7QJMSYiKEs5dlg9FYf8WflJBU8JrlQY8uEGKozsl&X-Amz-Signature=5c06533bba5b383d4fc6346ed3e9927ace4c3bed007f864f12b02176da44a4b2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
