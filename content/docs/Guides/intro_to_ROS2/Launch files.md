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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBMOK7H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fimuMPeBAcZ27Zcqf8kg%2BZIAHTC%2BYnUuTrGN3Jby%2FAiBm60xyTZbf4CNd2zB4YKTrgWmb%2FrRBlGVF0SLu3NF1pSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0NEBnzct%2FSwkL7i6KtwDmeySRZLrGfPIuSpvGGcemT5ern%2F7IrAsKHiufTcUXR8%2BEiI1t3R6XzLkvyfykYfvakPBn8jCCEYyP4sy3CUGD%2B7Ln%2FWyjwiRjzqUOfMO67bMbS5QVQCfjYwDj9jVwrkqk%2BvkSHUDzlfkav7h0MFrSz%2F%2FZ9DLYU5ZhcggvKB%2FulkbZA8MDn1p6lS7EhpQ6TeYYU14MTCRUoNZqjQQRKV0ewvCVzuL2DMt6%2FwjrJGASTyab%2FDUokG1Ry3cHo60tqitmjnWseMG%2BDV2L4h9trzUcvN2h0tSimfLhW%2BFaJTLzUXDHLZG6%2FP9wxrAWAl0czYVzOca4OiE9SzXkfY3hf6Pf%2B%2B7GmjouK16vfDrspr9aDYy%2BH6xS3JrH040%2B8VilxG0Gt9pRR7JoQ0J7ppEP8y86g0PQiuHP5gppT56b9VKIP6lXWjcLWgHbastxvnU32WN%2F4bfzaNJrVcwyhmcHoP4hnynLoS5EoZRsio0ArZdYSL9zL6JQKen6WzGatTBLOGohIGX%2BLj0cvS3uslJ0EV0Z%2B8pSJPU%2BgneO65BbRtvJZdqnwUKzaaAy3lCJ0SXPbIUW4x46vGvlL2ypBih%2Fa%2BhC59IBxXXlkSCm0Ua2Ng0kvdeGmll9uU63VM%2F%2FnIw7LyWwwY6pgFigi5uCZLdFnL8xcTuiM%2FecbQInYo1Ez8YzzaDA3%2Bk8Rz7IPkVQOp%2B6%2BLTyyOjbkVw9qwrIp%2FM57Bu89uZ33J4wtqrgc1TXIHYRQpdajMX7Nn%2FGzI%2BsickeMaD0wwWFOqdpasorUUlQ9nVLgaZBiFARBvRRtE4h01JpXhn3CGwLu79zs8X9FAJA8S%2FAoc%2B1An2H%2Bahz8sBg%2FFS32wxQWj3niih%2Fknx&X-Amz-Signature=9d7cf6032faed39d844ed5e576def7f2153172cc5b9d213fa58bf9c9fd2a7efb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBMOK7H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fimuMPeBAcZ27Zcqf8kg%2BZIAHTC%2BYnUuTrGN3Jby%2FAiBm60xyTZbf4CNd2zB4YKTrgWmb%2FrRBlGVF0SLu3NF1pSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0NEBnzct%2FSwkL7i6KtwDmeySRZLrGfPIuSpvGGcemT5ern%2F7IrAsKHiufTcUXR8%2BEiI1t3R6XzLkvyfykYfvakPBn8jCCEYyP4sy3CUGD%2B7Ln%2FWyjwiRjzqUOfMO67bMbS5QVQCfjYwDj9jVwrkqk%2BvkSHUDzlfkav7h0MFrSz%2F%2FZ9DLYU5ZhcggvKB%2FulkbZA8MDn1p6lS7EhpQ6TeYYU14MTCRUoNZqjQQRKV0ewvCVzuL2DMt6%2FwjrJGASTyab%2FDUokG1Ry3cHo60tqitmjnWseMG%2BDV2L4h9trzUcvN2h0tSimfLhW%2BFaJTLzUXDHLZG6%2FP9wxrAWAl0czYVzOca4OiE9SzXkfY3hf6Pf%2B%2B7GmjouK16vfDrspr9aDYy%2BH6xS3JrH040%2B8VilxG0Gt9pRR7JoQ0J7ppEP8y86g0PQiuHP5gppT56b9VKIP6lXWjcLWgHbastxvnU32WN%2F4bfzaNJrVcwyhmcHoP4hnynLoS5EoZRsio0ArZdYSL9zL6JQKen6WzGatTBLOGohIGX%2BLj0cvS3uslJ0EV0Z%2B8pSJPU%2BgneO65BbRtvJZdqnwUKzaaAy3lCJ0SXPbIUW4x46vGvlL2ypBih%2Fa%2BhC59IBxXXlkSCm0Ua2Ng0kvdeGmll9uU63VM%2F%2FnIw7LyWwwY6pgFigi5uCZLdFnL8xcTuiM%2FecbQInYo1Ez8YzzaDA3%2Bk8Rz7IPkVQOp%2B6%2BLTyyOjbkVw9qwrIp%2FM57Bu89uZ33J4wtqrgc1TXIHYRQpdajMX7Nn%2FGzI%2BsickeMaD0wwWFOqdpasorUUlQ9nVLgaZBiFARBvRRtE4h01JpXhn3CGwLu79zs8X9FAJA8S%2FAoc%2B1An2H%2Bahz8sBg%2FFS32wxQWj3niih%2Fknx&X-Amz-Signature=7b86931ecc38cfacc795ebfdf2dc7f2c608bb1489f689d2d18f4bbdf00e51c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFBMOK7H%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T004313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8fimuMPeBAcZ27Zcqf8kg%2BZIAHTC%2BYnUuTrGN3Jby%2FAiBm60xyTZbf4CNd2zB4YKTrgWmb%2FrRBlGVF0SLu3NF1pSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0NEBnzct%2FSwkL7i6KtwDmeySRZLrGfPIuSpvGGcemT5ern%2F7IrAsKHiufTcUXR8%2BEiI1t3R6XzLkvyfykYfvakPBn8jCCEYyP4sy3CUGD%2B7Ln%2FWyjwiRjzqUOfMO67bMbS5QVQCfjYwDj9jVwrkqk%2BvkSHUDzlfkav7h0MFrSz%2F%2FZ9DLYU5ZhcggvKB%2FulkbZA8MDn1p6lS7EhpQ6TeYYU14MTCRUoNZqjQQRKV0ewvCVzuL2DMt6%2FwjrJGASTyab%2FDUokG1Ry3cHo60tqitmjnWseMG%2BDV2L4h9trzUcvN2h0tSimfLhW%2BFaJTLzUXDHLZG6%2FP9wxrAWAl0czYVzOca4OiE9SzXkfY3hf6Pf%2B%2B7GmjouK16vfDrspr9aDYy%2BH6xS3JrH040%2B8VilxG0Gt9pRR7JoQ0J7ppEP8y86g0PQiuHP5gppT56b9VKIP6lXWjcLWgHbastxvnU32WN%2F4bfzaNJrVcwyhmcHoP4hnynLoS5EoZRsio0ArZdYSL9zL6JQKen6WzGatTBLOGohIGX%2BLj0cvS3uslJ0EV0Z%2B8pSJPU%2BgneO65BbRtvJZdqnwUKzaaAy3lCJ0SXPbIUW4x46vGvlL2ypBih%2Fa%2BhC59IBxXXlkSCm0Ua2Ng0kvdeGmll9uU63VM%2F%2FnIw7LyWwwY6pgFigi5uCZLdFnL8xcTuiM%2FecbQInYo1Ez8YzzaDA3%2Bk8Rz7IPkVQOp%2B6%2BLTyyOjbkVw9qwrIp%2FM57Bu89uZ33J4wtqrgc1TXIHYRQpdajMX7Nn%2FGzI%2BsickeMaD0wwWFOqdpasorUUlQ9nVLgaZBiFARBvRRtE4h01JpXhn3CGwLu79zs8X9FAJA8S%2FAoc%2B1An2H%2Bahz8sBg%2FFS32wxQWj3niih%2Fknx&X-Amz-Signature=1e3a08eec06e4deeadf858019de489b9f4cd73b0e04b2ef8ce65506395438064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
