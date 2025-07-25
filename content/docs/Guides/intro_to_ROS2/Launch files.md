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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLAER5R%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC94CBy8b%2FwguDHuH9LPYLz%2BWHZmgrp5%2F0cybnKJcvIwAIhAP%2BcgeZWzk33wmgIFY2UFdIm8Cuyz8w5IjT9aVap36BNKv8DCE4QABoMNjM3NDIzMTgzODA1Igym%2FbsXybJbRdIt9HMq3AOORfGqp%2BtEL2diYqIpzMXOgAP9gIl%2FGfoN0prOQi5HP%2FWt7b0dAtdfu1uDlJ2I2rqoyXuqXYDW%2FAE0qs3Mrzox8XEJqhuE4APooTg9NOVaHolpgEiCn8kWSDELiokT0zdBHNBtizvtDLZlVou8pVJhcUjy7CVwVOW7kzvWsPCSg%2Fc6e4IAjfNJpufudTpGzZYW3ky%2FUuhFDe44PkKU7n9E2zxmr3JILJy9cW1zlhTgC6XJy3jn2HkBrSrhgMqp620YuGcauRM%2BK9i2eO%2B1pWQaPwFFVS7%2FHAuSUuH8xUXxRJ%2BbEoqp4aiqx3OfUVvTc%2BWyKzKZPOZ6K07zRYyQOfK1BFsDeLe62ufPcO%2BBI%2BC1UQwJ%2FaJoRcogJHE8oknRU74B5p9WMhNdX%2Bvuu%2BK50r%2FM28vAq52fbBfcoxEOUtRFpoeVn5jpudHe1U%2BhLJXEBDtB8i2Qi7115UojLutRntekUNCWjvo2Ea7K7hkSjO647dl45oRtmOAbmyYrBZvdcxBdkEGfXLkIJG%2FlZv%2F5WK2c2K9cO4eMURI4so4skE2IafNK6nsUPqCaTOO2R5ymUzb8Fh6RyVNwZoqKJ4kdlAiiDzuX44NB9GypVNbhkClMRiq9nx6vTs5b%2FWA1tDCb0Y%2FEBjqkATKHJEvGdPvNO%2BBrwOI18vK8cfUa4fJBPgc3aG9NQWon4UsaKw%2Foa602e5HJ4pRZJwbeY9uz4s5JxZzQu6Nx9c6KcuGmjaXwt%2F%2FSvE0zk%2BUQ1sACz3ISjJVQ1VEjtxqA67qGvwaWrVocx%2FCP2Pa%2BsUl1cBoKylcNB2CGRS3UKfoBz6csP7UjkEPzHaQsfG1ptr8l%2FYavYTsLXw4wdrqsRjd6m6I6&X-Amz-Signature=2419d45a16fb7738da2fdcada7e852efdbe37fd8646ab7dc3d520f53f2744ddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLAER5R%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC94CBy8b%2FwguDHuH9LPYLz%2BWHZmgrp5%2F0cybnKJcvIwAIhAP%2BcgeZWzk33wmgIFY2UFdIm8Cuyz8w5IjT9aVap36BNKv8DCE4QABoMNjM3NDIzMTgzODA1Igym%2FbsXybJbRdIt9HMq3AOORfGqp%2BtEL2diYqIpzMXOgAP9gIl%2FGfoN0prOQi5HP%2FWt7b0dAtdfu1uDlJ2I2rqoyXuqXYDW%2FAE0qs3Mrzox8XEJqhuE4APooTg9NOVaHolpgEiCn8kWSDELiokT0zdBHNBtizvtDLZlVou8pVJhcUjy7CVwVOW7kzvWsPCSg%2Fc6e4IAjfNJpufudTpGzZYW3ky%2FUuhFDe44PkKU7n9E2zxmr3JILJy9cW1zlhTgC6XJy3jn2HkBrSrhgMqp620YuGcauRM%2BK9i2eO%2B1pWQaPwFFVS7%2FHAuSUuH8xUXxRJ%2BbEoqp4aiqx3OfUVvTc%2BWyKzKZPOZ6K07zRYyQOfK1BFsDeLe62ufPcO%2BBI%2BC1UQwJ%2FaJoRcogJHE8oknRU74B5p9WMhNdX%2Bvuu%2BK50r%2FM28vAq52fbBfcoxEOUtRFpoeVn5jpudHe1U%2BhLJXEBDtB8i2Qi7115UojLutRntekUNCWjvo2Ea7K7hkSjO647dl45oRtmOAbmyYrBZvdcxBdkEGfXLkIJG%2FlZv%2F5WK2c2K9cO4eMURI4so4skE2IafNK6nsUPqCaTOO2R5ymUzb8Fh6RyVNwZoqKJ4kdlAiiDzuX44NB9GypVNbhkClMRiq9nx6vTs5b%2FWA1tDCb0Y%2FEBjqkATKHJEvGdPvNO%2BBrwOI18vK8cfUa4fJBPgc3aG9NQWon4UsaKw%2Foa602e5HJ4pRZJwbeY9uz4s5JxZzQu6Nx9c6KcuGmjaXwt%2F%2FSvE0zk%2BUQ1sACz3ISjJVQ1VEjtxqA67qGvwaWrVocx%2FCP2Pa%2BsUl1cBoKylcNB2CGRS3UKfoBz6csP7UjkEPzHaQsfG1ptr8l%2FYavYTsLXw4wdrqsRjd6m6I6&X-Amz-Signature=4bef429bd51066b59c298429c278b94e8c0030e3dc5545f896acfcac9fc12e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BLAER5R%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T220918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC94CBy8b%2FwguDHuH9LPYLz%2BWHZmgrp5%2F0cybnKJcvIwAIhAP%2BcgeZWzk33wmgIFY2UFdIm8Cuyz8w5IjT9aVap36BNKv8DCE4QABoMNjM3NDIzMTgzODA1Igym%2FbsXybJbRdIt9HMq3AOORfGqp%2BtEL2diYqIpzMXOgAP9gIl%2FGfoN0prOQi5HP%2FWt7b0dAtdfu1uDlJ2I2rqoyXuqXYDW%2FAE0qs3Mrzox8XEJqhuE4APooTg9NOVaHolpgEiCn8kWSDELiokT0zdBHNBtizvtDLZlVou8pVJhcUjy7CVwVOW7kzvWsPCSg%2Fc6e4IAjfNJpufudTpGzZYW3ky%2FUuhFDe44PkKU7n9E2zxmr3JILJy9cW1zlhTgC6XJy3jn2HkBrSrhgMqp620YuGcauRM%2BK9i2eO%2B1pWQaPwFFVS7%2FHAuSUuH8xUXxRJ%2BbEoqp4aiqx3OfUVvTc%2BWyKzKZPOZ6K07zRYyQOfK1BFsDeLe62ufPcO%2BBI%2BC1UQwJ%2FaJoRcogJHE8oknRU74B5p9WMhNdX%2Bvuu%2BK50r%2FM28vAq52fbBfcoxEOUtRFpoeVn5jpudHe1U%2BhLJXEBDtB8i2Qi7115UojLutRntekUNCWjvo2Ea7K7hkSjO647dl45oRtmOAbmyYrBZvdcxBdkEGfXLkIJG%2FlZv%2F5WK2c2K9cO4eMURI4so4skE2IafNK6nsUPqCaTOO2R5ymUzb8Fh6RyVNwZoqKJ4kdlAiiDzuX44NB9GypVNbhkClMRiq9nx6vTs5b%2FWA1tDCb0Y%2FEBjqkATKHJEvGdPvNO%2BBrwOI18vK8cfUa4fJBPgc3aG9NQWon4UsaKw%2Foa602e5HJ4pRZJwbeY9uz4s5JxZzQu6Nx9c6KcuGmjaXwt%2F%2FSvE0zk%2BUQ1sACz3ISjJVQ1VEjtxqA67qGvwaWrVocx%2FCP2Pa%2BsUl1cBoKylcNB2CGRS3UKfoBz6csP7UjkEPzHaQsfG1ptr8l%2FYavYTsLXw4wdrqsRjd6m6I6&X-Amz-Signature=7275384ba6ff4a44891f8d8398e9860406268926bc84383e30289f303ea1263a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
