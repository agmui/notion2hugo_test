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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDM4J74%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FtSodIgs6kXWF7zCY5ZBMpY48GbS1%2FKHacFY3OIu0AIgV2eDYTRWGoDKZBB22NrH0CfzKpxu4%2BykbTOYi8tQMlQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDczbDt6ZjCvoertVCrcAys4yEyZlofLrQLNkNdp1E6FYviclig%2FZr7D1lGzte%2BsOOT275I2%2FB9YZ1RcUeEuq5K51nLbfHuB%2F2urbf4QvUqS9JpCVtZx2yrg%2FyM78mmB0nkOCidBroXM7yRUjkUZCn5LsOQVz1sALIgUkI4esFdo4CWJ4jlePmFLLnx%2FHRpmD9jMmLqzyeVj2zaKV0q9pIMIvBxydy3bDzvL425bO5MY%2FPMog6IkL9VUdq%2F2UyZYFDmqDJ65h17rTbdH8KgIoQiQn%2B9mIQzAPq7t6YslpIuc6OjrVJpckBQ3va0omsKF1pfXClQYLtjqy21k0sZCuN9ob6IRSQu5ksvZj3JDajQxIgm2aVXWQtIkx5EITIGH3jK1%2B5rA%2B3ivoBZl%2FmbsraCwSXXaBWI3N4gBqVmcpZChll7D8CXk7Xy%2B1nAh1Mga547MzzMSCuw34DQlwUwGSZMw8vmWDlV9uaKgq6ORPoluF9IfR0C%2Bxyc9ikxgLd5FlPVP8p3ao%2BLy6%2FVltqKJrY4HIC4n0bxZUzgYUwEBFlnOTPper0futSvL3PsFf1B3cHd8G0E6jr9Lq7KSuZb8TSyBSjJKdVZcQvnh5x3I60bOA6vCYMW%2F4ujCabyLwte0Id5bY9ou8BTpdOFYML7p4L4GOqUBY6Q6UTAdCaFL4aqhCaBO7uZB1MzIZiC5ZLRMRC2c4u54ocDGC3Oc%2BJe3ik8k1U6YswlmKoXVV0mThu15e8OU%2BZdIEc%2FcsIymdc59HfAYSJ%2FkzxuvhPtFiOh859SOXk4CXnkdlqEbbdqKfNulRlp5%2FU0%2FnHcnC3nzt5ZHAWYFehAUa%2FkIv2hTlnWmkeQQ1lqoy5xX4dOLfsEppRqArdA9NTTrruR%2B&X-Amz-Signature=df58d9b47f0500d633184e32e58271b4e2573bab194207055f10e3b147890083&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDM4J74%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FtSodIgs6kXWF7zCY5ZBMpY48GbS1%2FKHacFY3OIu0AIgV2eDYTRWGoDKZBB22NrH0CfzKpxu4%2BykbTOYi8tQMlQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDczbDt6ZjCvoertVCrcAys4yEyZlofLrQLNkNdp1E6FYviclig%2FZr7D1lGzte%2BsOOT275I2%2FB9YZ1RcUeEuq5K51nLbfHuB%2F2urbf4QvUqS9JpCVtZx2yrg%2FyM78mmB0nkOCidBroXM7yRUjkUZCn5LsOQVz1sALIgUkI4esFdo4CWJ4jlePmFLLnx%2FHRpmD9jMmLqzyeVj2zaKV0q9pIMIvBxydy3bDzvL425bO5MY%2FPMog6IkL9VUdq%2F2UyZYFDmqDJ65h17rTbdH8KgIoQiQn%2B9mIQzAPq7t6YslpIuc6OjrVJpckBQ3va0omsKF1pfXClQYLtjqy21k0sZCuN9ob6IRSQu5ksvZj3JDajQxIgm2aVXWQtIkx5EITIGH3jK1%2B5rA%2B3ivoBZl%2FmbsraCwSXXaBWI3N4gBqVmcpZChll7D8CXk7Xy%2B1nAh1Mga547MzzMSCuw34DQlwUwGSZMw8vmWDlV9uaKgq6ORPoluF9IfR0C%2Bxyc9ikxgLd5FlPVP8p3ao%2BLy6%2FVltqKJrY4HIC4n0bxZUzgYUwEBFlnOTPper0futSvL3PsFf1B3cHd8G0E6jr9Lq7KSuZb8TSyBSjJKdVZcQvnh5x3I60bOA6vCYMW%2F4ujCabyLwte0Id5bY9ou8BTpdOFYML7p4L4GOqUBY6Q6UTAdCaFL4aqhCaBO7uZB1MzIZiC5ZLRMRC2c4u54ocDGC3Oc%2BJe3ik8k1U6YswlmKoXVV0mThu15e8OU%2BZdIEc%2FcsIymdc59HfAYSJ%2FkzxuvhPtFiOh859SOXk4CXnkdlqEbbdqKfNulRlp5%2FU0%2FnHcnC3nzt5ZHAWYFehAUa%2FkIv2hTlnWmkeQQ1lqoy5xX4dOLfsEppRqArdA9NTTrruR%2B&X-Amz-Signature=65f56ca795aa79614f15b51b636277215818db1823cf7dc144c16fde7fce26da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLDM4J74%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQ%2FtSodIgs6kXWF7zCY5ZBMpY48GbS1%2FKHacFY3OIu0AIgV2eDYTRWGoDKZBB22NrH0CfzKpxu4%2BykbTOYi8tQMlQq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDDczbDt6ZjCvoertVCrcAys4yEyZlofLrQLNkNdp1E6FYviclig%2FZr7D1lGzte%2BsOOT275I2%2FB9YZ1RcUeEuq5K51nLbfHuB%2F2urbf4QvUqS9JpCVtZx2yrg%2FyM78mmB0nkOCidBroXM7yRUjkUZCn5LsOQVz1sALIgUkI4esFdo4CWJ4jlePmFLLnx%2FHRpmD9jMmLqzyeVj2zaKV0q9pIMIvBxydy3bDzvL425bO5MY%2FPMog6IkL9VUdq%2F2UyZYFDmqDJ65h17rTbdH8KgIoQiQn%2B9mIQzAPq7t6YslpIuc6OjrVJpckBQ3va0omsKF1pfXClQYLtjqy21k0sZCuN9ob6IRSQu5ksvZj3JDajQxIgm2aVXWQtIkx5EITIGH3jK1%2B5rA%2B3ivoBZl%2FmbsraCwSXXaBWI3N4gBqVmcpZChll7D8CXk7Xy%2B1nAh1Mga547MzzMSCuw34DQlwUwGSZMw8vmWDlV9uaKgq6ORPoluF9IfR0C%2Bxyc9ikxgLd5FlPVP8p3ao%2BLy6%2FVltqKJrY4HIC4n0bxZUzgYUwEBFlnOTPper0futSvL3PsFf1B3cHd8G0E6jr9Lq7KSuZb8TSyBSjJKdVZcQvnh5x3I60bOA6vCYMW%2F4ujCabyLwte0Id5bY9ou8BTpdOFYML7p4L4GOqUBY6Q6UTAdCaFL4aqhCaBO7uZB1MzIZiC5ZLRMRC2c4u54ocDGC3Oc%2BJe3ik8k1U6YswlmKoXVV0mThu15e8OU%2BZdIEc%2FcsIymdc59HfAYSJ%2FkzxuvhPtFiOh859SOXk4CXnkdlqEbbdqKfNulRlp5%2FU0%2FnHcnC3nzt5ZHAWYFehAUa%2FkIv2hTlnWmkeQQ1lqoy5xX4dOLfsEppRqArdA9NTTrruR%2B&X-Amz-Signature=68f78cac7c7a15eb7b98a4302b4838967ecdb88794a642e4f6a0c5a4b6a2bd5e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
