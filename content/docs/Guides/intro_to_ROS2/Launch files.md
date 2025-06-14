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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2BYLA5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGMlzA4UF69gwT5qj6gaHDxBwsu7ilJ4ZtOfrh42bhuGAiAaB%2BHxGzgCyZdg3QT%2BLG30l3lp%2FVJ9XhkqAprJfrxvKCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXtfAuHj6%2BDRFbZ6FKtwD4VSRfo38mQUH1xLjg2iZev2ddhR9rj2qzEsaX3yz%2FblF%2BNIZnz3aSCPh7oMQjAngYMXmjEtiIzSOqGtbtorVLr3gYEgBkkR9Fbchqx8aj0lkO4FmximPxrUBuU1JNdO3HSaKQu4TI4aDP5mPNkYH4837t77aZkhDeW5OrOnbDCIY%2FaVf9Sa1KMOUZp81xhBD9n1y1yt2PnFmX0aNyr6sNGjujZGLt3noL2d9WQpbpIWIpbBMecAieJuFPYR%2BNdhVo00LL%2BKiTG7%2FM5MTX9QRAWbzzF%2FBDSm8q%2FgtFr1Zp7ssu6QlQV5%2B9pOEPV909%2B2XE9TO5dpaVPeKxgdxlkSsOyNC94BU8UiyNOW%2Fw4kVBE2Ka%2Fyvx7uqn4%2FEV9jQZSZlLFT9YsnVy8wJj%2Fu6mGujuBqXSsgTigQeoYCp%2FaEdrESDpkJWN3Eil5xlSz0%2Bc8VW4lXH60aVnUBkYMAz0V1Yv5Z6BOJxvhpxVEjz%2F221dPpKuhDIMXi4Mt9sKM5TRu4Zq8jfLzQJI6ZmKdxGwRUpaazZpGtLAUTsECLOqwF2lS6mZLdp0qPnK8gboQosBHM9vydIdeYydFQ6cB4lOyyZJKwuzDnSqxysF3gb%2Fcj5KuefqqctSF9n8BDU7qsw8rq2wgY6pgH89zpRt%2F%2FOr0oDXgozCn3qgXtW%2BrzrOm%2BZ2Z4LbMBWvykB4RtwRDGWxrhZQLrSL1%2FdLErFXn3v9VyCkBqMfSkOvn1s3%2FLzZMdn0qOijE55rQOPV0Rt5dSl3H3TH106D6bazWRaBGn7QvyiXWwQ%2Fncn1QQiYCEbse7oXhp4dM2CQLNyvN0FZa6TyMjAIhSqBGrgKEXRMswQ8wv%2BYr%2Fxn16nkZy52202&X-Amz-Signature=3c18cc5d95274c33eb4fcefe9b0e49a195501beefe179b3c01be74c766e91f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2BYLA5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGMlzA4UF69gwT5qj6gaHDxBwsu7ilJ4ZtOfrh42bhuGAiAaB%2BHxGzgCyZdg3QT%2BLG30l3lp%2FVJ9XhkqAprJfrxvKCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXtfAuHj6%2BDRFbZ6FKtwD4VSRfo38mQUH1xLjg2iZev2ddhR9rj2qzEsaX3yz%2FblF%2BNIZnz3aSCPh7oMQjAngYMXmjEtiIzSOqGtbtorVLr3gYEgBkkR9Fbchqx8aj0lkO4FmximPxrUBuU1JNdO3HSaKQu4TI4aDP5mPNkYH4837t77aZkhDeW5OrOnbDCIY%2FaVf9Sa1KMOUZp81xhBD9n1y1yt2PnFmX0aNyr6sNGjujZGLt3noL2d9WQpbpIWIpbBMecAieJuFPYR%2BNdhVo00LL%2BKiTG7%2FM5MTX9QRAWbzzF%2FBDSm8q%2FgtFr1Zp7ssu6QlQV5%2B9pOEPV909%2B2XE9TO5dpaVPeKxgdxlkSsOyNC94BU8UiyNOW%2Fw4kVBE2Ka%2Fyvx7uqn4%2FEV9jQZSZlLFT9YsnVy8wJj%2Fu6mGujuBqXSsgTigQeoYCp%2FaEdrESDpkJWN3Eil5xlSz0%2Bc8VW4lXH60aVnUBkYMAz0V1Yv5Z6BOJxvhpxVEjz%2F221dPpKuhDIMXi4Mt9sKM5TRu4Zq8jfLzQJI6ZmKdxGwRUpaazZpGtLAUTsECLOqwF2lS6mZLdp0qPnK8gboQosBHM9vydIdeYydFQ6cB4lOyyZJKwuzDnSqxysF3gb%2Fcj5KuefqqctSF9n8BDU7qsw8rq2wgY6pgH89zpRt%2F%2FOr0oDXgozCn3qgXtW%2BrzrOm%2BZ2Z4LbMBWvykB4RtwRDGWxrhZQLrSL1%2FdLErFXn3v9VyCkBqMfSkOvn1s3%2FLzZMdn0qOijE55rQOPV0Rt5dSl3H3TH106D6bazWRaBGn7QvyiXWwQ%2Fncn1QQiYCEbse7oXhp4dM2CQLNyvN0FZa6TyMjAIhSqBGrgKEXRMswQ8wv%2BYr%2Fxn16nkZy52202&X-Amz-Signature=d6878b0c338ee4bd7489b928ef9a7d089a127ec6cb4c92b35bfb8ec7ca1b978e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO2BYLA5%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIGMlzA4UF69gwT5qj6gaHDxBwsu7ilJ4ZtOfrh42bhuGAiAaB%2BHxGzgCyZdg3QT%2BLG30l3lp%2FVJ9XhkqAprJfrxvKCr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMXtfAuHj6%2BDRFbZ6FKtwD4VSRfo38mQUH1xLjg2iZev2ddhR9rj2qzEsaX3yz%2FblF%2BNIZnz3aSCPh7oMQjAngYMXmjEtiIzSOqGtbtorVLr3gYEgBkkR9Fbchqx8aj0lkO4FmximPxrUBuU1JNdO3HSaKQu4TI4aDP5mPNkYH4837t77aZkhDeW5OrOnbDCIY%2FaVf9Sa1KMOUZp81xhBD9n1y1yt2PnFmX0aNyr6sNGjujZGLt3noL2d9WQpbpIWIpbBMecAieJuFPYR%2BNdhVo00LL%2BKiTG7%2FM5MTX9QRAWbzzF%2FBDSm8q%2FgtFr1Zp7ssu6QlQV5%2B9pOEPV909%2B2XE9TO5dpaVPeKxgdxlkSsOyNC94BU8UiyNOW%2Fw4kVBE2Ka%2Fyvx7uqn4%2FEV9jQZSZlLFT9YsnVy8wJj%2Fu6mGujuBqXSsgTigQeoYCp%2FaEdrESDpkJWN3Eil5xlSz0%2Bc8VW4lXH60aVnUBkYMAz0V1Yv5Z6BOJxvhpxVEjz%2F221dPpKuhDIMXi4Mt9sKM5TRu4Zq8jfLzQJI6ZmKdxGwRUpaazZpGtLAUTsECLOqwF2lS6mZLdp0qPnK8gboQosBHM9vydIdeYydFQ6cB4lOyyZJKwuzDnSqxysF3gb%2Fcj5KuefqqctSF9n8BDU7qsw8rq2wgY6pgH89zpRt%2F%2FOr0oDXgozCn3qgXtW%2BrzrOm%2BZ2Z4LbMBWvykB4RtwRDGWxrhZQLrSL1%2FdLErFXn3v9VyCkBqMfSkOvn1s3%2FLzZMdn0qOijE55rQOPV0Rt5dSl3H3TH106D6bazWRaBGn7QvyiXWwQ%2Fncn1QQiYCEbse7oXhp4dM2CQLNyvN0FZa6TyMjAIhSqBGrgKEXRMswQ8wv%2BYr%2Fxn16nkZy52202&X-Amz-Signature=ce4047dbf6f5349e090bb48f8145ca579142e6c255a5b787d929811eb06c40eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
