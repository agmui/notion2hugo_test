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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQJRLYU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe3AU57mvdezsIFUJPZOVhHA4veEe7NFzJ8ZooEJEEwwIgCCsydoGJMWK79HJ6mmZ58%2BDGgDBuJ98phTTUcl1cu6sqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fbeyu9dfUSubmooSrcA9j%2FziMBM3l9m0LRdZW2lOCdyNEhoc1M%2FFqO8LYqS9LphByWhh3MqOuwVU4LyWRjU%2FIy6piM2tldVeP0%2BqhDd2KPEIiRohtdOZFhh7EElF69wmyZwkz6y2W1loPpCsnteerCOq2BtQ6mHauOI1JDOI874fxDWthmoZT%2ByVU%2B%2BWqrClxXvkLjDYUuqd5yhzhz%2B4i9CccTIQBhaggRHunNzvcwdyxKsEAyKAwuknuXLVx3IcRGjXhu0a28Xbnay8uWmUQZpRx1rAihijSCZvbx2J81Vxcq%2BHr4h6kpUZ%2FIdiiT7ugyPRclBGdLii5oBpwIhxbBau5E%2BSLo4qhYteLocy8iwFE2tW9ENPKyH3mVbkae6DNJgQbcxsG65Q1CqCw5FDa81Sxs423lIIRHF6Z2FIw%2FWFx5seBj8U6XojZMG9JIf6SseW5dpCahrVVafTnSs2mI8pI535aS%2Bnkpwpw4Svjk4416kCcZ7Z0O%2FZQjCdDKQwoiXdC1vHYzwDEkIjzyA2w%2FhpjCGSI7HjOUf%2BzlAyx36ffLOpXoh0IQk8BdOcvbGzC79PugniynXeIm9HYl5IIVhibP9Zhwb%2Bk1aVepNNwTcnu6vitmpKe0EAKK%2F0aA7fXs5JBWfhL8CULvMPOTlcMGOqUBuWVggaRKW4vwA6Sin%2BjJn2mlyvr9TcyeiutUmFxldgWF5UoPx7HZUYbHhAIGWh2w6zycN5415V6vdsOGVJdbAKg1ALiO1CxZ5ZJsGZlZZ0DUDIITvmsD%2FBhEGKtGzSMdWTHskFAYHZSgC%2BRtxQx25ICX6sR3mI%2F73oIchn8GnV2kkGiZzjwfzC5oRA1e%2Bx01o64SarplPk4bGmBDWMF2YDZMOJr1&X-Amz-Signature=06bd2ef190377949ca7243ec33c9f01f146cc367c15a5b1cf9d5f90c54783460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQJRLYU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe3AU57mvdezsIFUJPZOVhHA4veEe7NFzJ8ZooEJEEwwIgCCsydoGJMWK79HJ6mmZ58%2BDGgDBuJ98phTTUcl1cu6sqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fbeyu9dfUSubmooSrcA9j%2FziMBM3l9m0LRdZW2lOCdyNEhoc1M%2FFqO8LYqS9LphByWhh3MqOuwVU4LyWRjU%2FIy6piM2tldVeP0%2BqhDd2KPEIiRohtdOZFhh7EElF69wmyZwkz6y2W1loPpCsnteerCOq2BtQ6mHauOI1JDOI874fxDWthmoZT%2ByVU%2B%2BWqrClxXvkLjDYUuqd5yhzhz%2B4i9CccTIQBhaggRHunNzvcwdyxKsEAyKAwuknuXLVx3IcRGjXhu0a28Xbnay8uWmUQZpRx1rAihijSCZvbx2J81Vxcq%2BHr4h6kpUZ%2FIdiiT7ugyPRclBGdLii5oBpwIhxbBau5E%2BSLo4qhYteLocy8iwFE2tW9ENPKyH3mVbkae6DNJgQbcxsG65Q1CqCw5FDa81Sxs423lIIRHF6Z2FIw%2FWFx5seBj8U6XojZMG9JIf6SseW5dpCahrVVafTnSs2mI8pI535aS%2Bnkpwpw4Svjk4416kCcZ7Z0O%2FZQjCdDKQwoiXdC1vHYzwDEkIjzyA2w%2FhpjCGSI7HjOUf%2BzlAyx36ffLOpXoh0IQk8BdOcvbGzC79PugniynXeIm9HYl5IIVhibP9Zhwb%2Bk1aVepNNwTcnu6vitmpKe0EAKK%2F0aA7fXs5JBWfhL8CULvMPOTlcMGOqUBuWVggaRKW4vwA6Sin%2BjJn2mlyvr9TcyeiutUmFxldgWF5UoPx7HZUYbHhAIGWh2w6zycN5415V6vdsOGVJdbAKg1ALiO1CxZ5ZJsGZlZZ0DUDIITvmsD%2FBhEGKtGzSMdWTHskFAYHZSgC%2BRtxQx25ICX6sR3mI%2F73oIchn8GnV2kkGiZzjwfzC5oRA1e%2Bx01o64SarplPk4bGmBDWMF2YDZMOJr1&X-Amz-Signature=23b39d0d78ae9a4a3d0ebc5d4b063c8ed30d43684d28f22c9b92d7dfebdbb845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQJRLYU%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T150927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe3AU57mvdezsIFUJPZOVhHA4veEe7NFzJ8ZooEJEEwwIgCCsydoGJMWK79HJ6mmZ58%2BDGgDBuJ98phTTUcl1cu6sqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO%2Fbeyu9dfUSubmooSrcA9j%2FziMBM3l9m0LRdZW2lOCdyNEhoc1M%2FFqO8LYqS9LphByWhh3MqOuwVU4LyWRjU%2FIy6piM2tldVeP0%2BqhDd2KPEIiRohtdOZFhh7EElF69wmyZwkz6y2W1loPpCsnteerCOq2BtQ6mHauOI1JDOI874fxDWthmoZT%2ByVU%2B%2BWqrClxXvkLjDYUuqd5yhzhz%2B4i9CccTIQBhaggRHunNzvcwdyxKsEAyKAwuknuXLVx3IcRGjXhu0a28Xbnay8uWmUQZpRx1rAihijSCZvbx2J81Vxcq%2BHr4h6kpUZ%2FIdiiT7ugyPRclBGdLii5oBpwIhxbBau5E%2BSLo4qhYteLocy8iwFE2tW9ENPKyH3mVbkae6DNJgQbcxsG65Q1CqCw5FDa81Sxs423lIIRHF6Z2FIw%2FWFx5seBj8U6XojZMG9JIf6SseW5dpCahrVVafTnSs2mI8pI535aS%2Bnkpwpw4Svjk4416kCcZ7Z0O%2FZQjCdDKQwoiXdC1vHYzwDEkIjzyA2w%2FhpjCGSI7HjOUf%2BzlAyx36ffLOpXoh0IQk8BdOcvbGzC79PugniynXeIm9HYl5IIVhibP9Zhwb%2Bk1aVepNNwTcnu6vitmpKe0EAKK%2F0aA7fXs5JBWfhL8CULvMPOTlcMGOqUBuWVggaRKW4vwA6Sin%2BjJn2mlyvr9TcyeiutUmFxldgWF5UoPx7HZUYbHhAIGWh2w6zycN5415V6vdsOGVJdbAKg1ALiO1CxZ5ZJsGZlZZ0DUDIITvmsD%2FBhEGKtGzSMdWTHskFAYHZSgC%2BRtxQx25ICX6sR3mI%2F73oIchn8GnV2kkGiZzjwfzC5oRA1e%2Bx01o64SarplPk4bGmBDWMF2YDZMOJr1&X-Amz-Signature=932f21f543c5f72d5a5970243798a4159dbeb0bacf91e39a212061ebd89c701d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
