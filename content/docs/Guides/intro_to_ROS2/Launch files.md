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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJ6M7EA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyhT5YqlrP6CWsq%2BKl7eTzv3Sq1piQXPQsrNklE%2FyPgIhAKkHDEt6pm%2BvnLdTbDSViQYGHF2NAbcJG3oY1gwx6L3HKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJCQ9kVllnHXTc4p4q3ANxY0lf7LI8x3aX6Hdd8qlDQw6blROAIXlzSNUPxYH%2BLsMBVcZec8k6TwD%2F2Q23epj2Ak4D829OiNaOHlnhUjVPjav1c47j%2F7wxMT3k1a5pMHBOxCgXTWtRNSIe0lBLNjmCOqVb8tqwaJGIjIOeUASxURVFFi8SglaSl8YbLun6m%2FqxDaw0oyjRODUpUjw9UBt0A8XWUyH%2FPOVmr5WIIATe52r91v2wNymRLAD532Af7UiEUU9nGzdYvJ3EifNSy7bv12Pg8%2B%2BnD%2BLYYZ4ZCV0j5yEGwsU8ZyO637MBrJdYiQ9yLBJ27RHw%2FepbJ9yFKGpJFxuKuleb%2BO9hHI3YymDDovFcvcN5AQh5EinaPPVqbPu6gHezcjjJJmORL%2BklNF16VquUC621gaYIxlSnbQCJG9XRjOOmxzQAI2u0ZdnxG7ToHl2ghxbkBXdjhU1goiYnbE8Q4YsEzkG12JHpfMEwklQKQvP%2Bi%2B02oDKOsidw2GSuoGRNQdVEDkN5lA5mXdt%2BYOhMIDT9kXFFfuqbfSdBAjR2sSgqUefUx5eM0KVicTrzRu9qGh4tm43SGIcrE%2FlqtiiDmGoLvCp87fGoQ9SFgiUGcKAnlXUl5YYtFPdAUalQw4nT0dMACogySjDt%2B5e%2BBjqkAV1kl6MmhWt1k%2FE0F59MHuywvy4brp9oO7rlajBmkWnl6HETDxZJr96StV5bPKtnJqp1w37TcxYcx3Hx31ARwy%2BkGi8xQrtZWDAqHPyoaCU%2BVfwv91sW2tV8eQl0jxu8cVv5Nv8dyJ9jORU2rsUGWhM6Rt0nPS%2B8%2B9CvD0O%2Fm62h4c9UbTQYZsf6rtwl%2FjuJiXlx84nvbQAYjTGCyuWspZbceH0w&X-Amz-Signature=8094324ac96a66342e861e661cad644590b3ea1e58c4255256a181ec06c4cd88&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJ6M7EA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyhT5YqlrP6CWsq%2BKl7eTzv3Sq1piQXPQsrNklE%2FyPgIhAKkHDEt6pm%2BvnLdTbDSViQYGHF2NAbcJG3oY1gwx6L3HKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJCQ9kVllnHXTc4p4q3ANxY0lf7LI8x3aX6Hdd8qlDQw6blROAIXlzSNUPxYH%2BLsMBVcZec8k6TwD%2F2Q23epj2Ak4D829OiNaOHlnhUjVPjav1c47j%2F7wxMT3k1a5pMHBOxCgXTWtRNSIe0lBLNjmCOqVb8tqwaJGIjIOeUASxURVFFi8SglaSl8YbLun6m%2FqxDaw0oyjRODUpUjw9UBt0A8XWUyH%2FPOVmr5WIIATe52r91v2wNymRLAD532Af7UiEUU9nGzdYvJ3EifNSy7bv12Pg8%2B%2BnD%2BLYYZ4ZCV0j5yEGwsU8ZyO637MBrJdYiQ9yLBJ27RHw%2FepbJ9yFKGpJFxuKuleb%2BO9hHI3YymDDovFcvcN5AQh5EinaPPVqbPu6gHezcjjJJmORL%2BklNF16VquUC621gaYIxlSnbQCJG9XRjOOmxzQAI2u0ZdnxG7ToHl2ghxbkBXdjhU1goiYnbE8Q4YsEzkG12JHpfMEwklQKQvP%2Bi%2B02oDKOsidw2GSuoGRNQdVEDkN5lA5mXdt%2BYOhMIDT9kXFFfuqbfSdBAjR2sSgqUefUx5eM0KVicTrzRu9qGh4tm43SGIcrE%2FlqtiiDmGoLvCp87fGoQ9SFgiUGcKAnlXUl5YYtFPdAUalQw4nT0dMACogySjDt%2B5e%2BBjqkAV1kl6MmhWt1k%2FE0F59MHuywvy4brp9oO7rlajBmkWnl6HETDxZJr96StV5bPKtnJqp1w37TcxYcx3Hx31ARwy%2BkGi8xQrtZWDAqHPyoaCU%2BVfwv91sW2tV8eQl0jxu8cVv5Nv8dyJ9jORU2rsUGWhM6Rt0nPS%2B8%2B9CvD0O%2Fm62h4c9UbTQYZsf6rtwl%2FjuJiXlx84nvbQAYjTGCyuWspZbceH0w&X-Amz-Signature=79c673a1a202f5baa113cc1738e1cac9efd541a31958d992cdc86c45f46addeb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WJ6M7EA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwyhT5YqlrP6CWsq%2BKl7eTzv3Sq1piQXPQsrNklE%2FyPgIhAKkHDEt6pm%2BvnLdTbDSViQYGHF2NAbcJG3oY1gwx6L3HKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJCQ9kVllnHXTc4p4q3ANxY0lf7LI8x3aX6Hdd8qlDQw6blROAIXlzSNUPxYH%2BLsMBVcZec8k6TwD%2F2Q23epj2Ak4D829OiNaOHlnhUjVPjav1c47j%2F7wxMT3k1a5pMHBOxCgXTWtRNSIe0lBLNjmCOqVb8tqwaJGIjIOeUASxURVFFi8SglaSl8YbLun6m%2FqxDaw0oyjRODUpUjw9UBt0A8XWUyH%2FPOVmr5WIIATe52r91v2wNymRLAD532Af7UiEUU9nGzdYvJ3EifNSy7bv12Pg8%2B%2BnD%2BLYYZ4ZCV0j5yEGwsU8ZyO637MBrJdYiQ9yLBJ27RHw%2FepbJ9yFKGpJFxuKuleb%2BO9hHI3YymDDovFcvcN5AQh5EinaPPVqbPu6gHezcjjJJmORL%2BklNF16VquUC621gaYIxlSnbQCJG9XRjOOmxzQAI2u0ZdnxG7ToHl2ghxbkBXdjhU1goiYnbE8Q4YsEzkG12JHpfMEwklQKQvP%2Bi%2B02oDKOsidw2GSuoGRNQdVEDkN5lA5mXdt%2BYOhMIDT9kXFFfuqbfSdBAjR2sSgqUefUx5eM0KVicTrzRu9qGh4tm43SGIcrE%2FlqtiiDmGoLvCp87fGoQ9SFgiUGcKAnlXUl5YYtFPdAUalQw4nT0dMACogySjDt%2B5e%2BBjqkAV1kl6MmhWt1k%2FE0F59MHuywvy4brp9oO7rlajBmkWnl6HETDxZJr96StV5bPKtnJqp1w37TcxYcx3Hx31ARwy%2BkGi8xQrtZWDAqHPyoaCU%2BVfwv91sW2tV8eQl0jxu8cVv5Nv8dyJ9jORU2rsUGWhM6Rt0nPS%2B8%2B9CvD0O%2Fm62h4c9UbTQYZsf6rtwl%2FjuJiXlx84nvbQAYjTGCyuWspZbceH0w&X-Amz-Signature=068fa3a0bf375b3979a0d9ae3ac88fb1d58982f7a95df46cebf791f5383f8b06&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
