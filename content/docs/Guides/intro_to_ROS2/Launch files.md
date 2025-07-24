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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFK2JBQ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCpCea3DtPPcPHv3z4puBswqhBx4RAzZ1TPmo4%2BVq1NKwIgWj2N6Y9Bq2%2F0Bk35E6zamNrJUCbelnL8VlQ3rBTAEnMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF42oUVI3KgSmE6DmyrcAwnNL6XoWZxTCQTX1RQNn0rdq7n02t53lqmFzXWMspxN%2B7%2BraeSceTxW7XoGqsZKLol6cFheEu%2B0kuPwFw8P2NyWq5gDiedRKoJb4EOgLPDSDt%2B4%2BKcaj7ZOMWcRoLrLbS6SRSpIN%2F%2BrJy84nRZTXTFSXxqfn4D9MhaaC1WvVjjPpda2lOEj5xLF6a2Mxrcirh%2BuYz61JX%2Ba4Cu8CPOkxDYEhVDpDYiRcEBvL%2F5f84%2BOCnUZuTMVEUPT7jbWYM%2BL34vy1wrHjbi5Gj%2F0lj51DiBT8WcL2Ab8drydny8LzuKdaGsRpbkneQo8Bu7LLSxgZax0qGeCdCqigk5%2BBLhDVhPOfy1qku%2FGmjDyvQaaIzOP%2FNwBjj24rf7RMHVDIKo6AickP7CRSc3szzj1OU6QhypFwDki2m%2BgsmQ5W5nGU19sVEngcJpEbCqHALLrYW7FsrYiPO6s2kiaAZQ2S6PRTt6Ht9A1R2HBL4ceoy4810%2FRG6lXEhyYrMip2eRoNLMr03O%2Bi3MODhbZ5kkPpFwl73Wg9ovntKXGd6pzUbIoNSckmXMlfavt1lnFAOR5VXffZxSVDNVPO%2BFx%2FtjK1JfZa7vVeg%2Bybjdfc97UEqZFNHsuzyLBlISsi9K46QGWMPHZiMQGOqUBgbxr5kdqKCMa0f5P0tXCtdzNSzXcSHAh2I36x0iKTj00SVlbX5%2Bv4NB2aDM3Azv4v1pyRPNkjS7dEBhcoJled%2BfA8JwxpCn1j47yqF8SAWacSlNCHN0MDik4gmOxvRpwLrJFA1clQyQzvszQCDiw144WPCmAaYeMBnZBckRMcsS7tFptJ%2B1gmDm84V3dX6sMrqjC8M9S3RfhWmERsjK6PP9VtLa1&X-Amz-Signature=7fd0e4f374a782f15cc6366246ec2e98e5202b44d1affaee1036ed23968d20fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFK2JBQ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCpCea3DtPPcPHv3z4puBswqhBx4RAzZ1TPmo4%2BVq1NKwIgWj2N6Y9Bq2%2F0Bk35E6zamNrJUCbelnL8VlQ3rBTAEnMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF42oUVI3KgSmE6DmyrcAwnNL6XoWZxTCQTX1RQNn0rdq7n02t53lqmFzXWMspxN%2B7%2BraeSceTxW7XoGqsZKLol6cFheEu%2B0kuPwFw8P2NyWq5gDiedRKoJb4EOgLPDSDt%2B4%2BKcaj7ZOMWcRoLrLbS6SRSpIN%2F%2BrJy84nRZTXTFSXxqfn4D9MhaaC1WvVjjPpda2lOEj5xLF6a2Mxrcirh%2BuYz61JX%2Ba4Cu8CPOkxDYEhVDpDYiRcEBvL%2F5f84%2BOCnUZuTMVEUPT7jbWYM%2BL34vy1wrHjbi5Gj%2F0lj51DiBT8WcL2Ab8drydny8LzuKdaGsRpbkneQo8Bu7LLSxgZax0qGeCdCqigk5%2BBLhDVhPOfy1qku%2FGmjDyvQaaIzOP%2FNwBjj24rf7RMHVDIKo6AickP7CRSc3szzj1OU6QhypFwDki2m%2BgsmQ5W5nGU19sVEngcJpEbCqHALLrYW7FsrYiPO6s2kiaAZQ2S6PRTt6Ht9A1R2HBL4ceoy4810%2FRG6lXEhyYrMip2eRoNLMr03O%2Bi3MODhbZ5kkPpFwl73Wg9ovntKXGd6pzUbIoNSckmXMlfavt1lnFAOR5VXffZxSVDNVPO%2BFx%2FtjK1JfZa7vVeg%2Bybjdfc97UEqZFNHsuzyLBlISsi9K46QGWMPHZiMQGOqUBgbxr5kdqKCMa0f5P0tXCtdzNSzXcSHAh2I36x0iKTj00SVlbX5%2Bv4NB2aDM3Azv4v1pyRPNkjS7dEBhcoJled%2BfA8JwxpCn1j47yqF8SAWacSlNCHN0MDik4gmOxvRpwLrJFA1clQyQzvszQCDiw144WPCmAaYeMBnZBckRMcsS7tFptJ%2B1gmDm84V3dX6sMrqjC8M9S3RfhWmERsjK6PP9VtLa1&X-Amz-Signature=ed953ac21941b367bcccf915d77e074a93f051ab860ec43dd0970cf8db50d621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFK2JBQ5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T141201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCpCea3DtPPcPHv3z4puBswqhBx4RAzZ1TPmo4%2BVq1NKwIgWj2N6Y9Bq2%2F0Bk35E6zamNrJUCbelnL8VlQ3rBTAEnMq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDF42oUVI3KgSmE6DmyrcAwnNL6XoWZxTCQTX1RQNn0rdq7n02t53lqmFzXWMspxN%2B7%2BraeSceTxW7XoGqsZKLol6cFheEu%2B0kuPwFw8P2NyWq5gDiedRKoJb4EOgLPDSDt%2B4%2BKcaj7ZOMWcRoLrLbS6SRSpIN%2F%2BrJy84nRZTXTFSXxqfn4D9MhaaC1WvVjjPpda2lOEj5xLF6a2Mxrcirh%2BuYz61JX%2Ba4Cu8CPOkxDYEhVDpDYiRcEBvL%2F5f84%2BOCnUZuTMVEUPT7jbWYM%2BL34vy1wrHjbi5Gj%2F0lj51DiBT8WcL2Ab8drydny8LzuKdaGsRpbkneQo8Bu7LLSxgZax0qGeCdCqigk5%2BBLhDVhPOfy1qku%2FGmjDyvQaaIzOP%2FNwBjj24rf7RMHVDIKo6AickP7CRSc3szzj1OU6QhypFwDki2m%2BgsmQ5W5nGU19sVEngcJpEbCqHALLrYW7FsrYiPO6s2kiaAZQ2S6PRTt6Ht9A1R2HBL4ceoy4810%2FRG6lXEhyYrMip2eRoNLMr03O%2Bi3MODhbZ5kkPpFwl73Wg9ovntKXGd6pzUbIoNSckmXMlfavt1lnFAOR5VXffZxSVDNVPO%2BFx%2FtjK1JfZa7vVeg%2Bybjdfc97UEqZFNHsuzyLBlISsi9K46QGWMPHZiMQGOqUBgbxr5kdqKCMa0f5P0tXCtdzNSzXcSHAh2I36x0iKTj00SVlbX5%2Bv4NB2aDM3Azv4v1pyRPNkjS7dEBhcoJled%2BfA8JwxpCn1j47yqF8SAWacSlNCHN0MDik4gmOxvRpwLrJFA1clQyQzvszQCDiw144WPCmAaYeMBnZBckRMcsS7tFptJ%2B1gmDm84V3dX6sMrqjC8M9S3RfhWmERsjK6PP9VtLa1&X-Amz-Signature=6fc4c21ca0062798d1c18fbe68d9f90bb19a5810af78f92eeea1b6d38af82ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
