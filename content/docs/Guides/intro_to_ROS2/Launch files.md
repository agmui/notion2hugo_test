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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK57V7X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCtMCraouVFA3wd5xsRKO3sR1moCwf55hZkxtYEovNEYQIgeAZpiRF04qXjYudVLIBfSJY4cghFgzJuqL6EI8MDXdUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpBdG598VgW8Mw0SrcA1EiFdcWhLQwnzQgDUTm1mtTb9xQ3SI3VBeMpUyAb2tRgpoFSWORUKLjsqWpSCnk0CqZmwmVWK4BxfYegR3F0FA4ExNNkcTruNvbnmB8ckj8RfAAKzpzQfhDblsbTpyyxMw4nb2kKc8GD5%2FcH3A7cPPJCEf%2BFiTVEQ8GOfgfXr3PicFw74tsm0UwlKX%2Bkd4mJOTDjC%2BdsUqEok6e8aqppf2HAD6OT8P0Y1Q4AbzWVZHehdrNfCcGp9NIh2dcivNTckG7EujXfDyznOBOGpVgnF91d5d8G6TLi%2Ft4FqSMS%2B2t96M81F4Z1ehAM4j1JZeuUOxnDFIZEwIdAKuAkp9yOQydCMotIDvQzI%2FDjlLe6aS33uLB4RS5LKlIkN%2F79PEps4js57A7RonltPOlusMVNLdxk8i6QgpV79Ro8OECO9YCAHBV%2FufNm%2BuCcLsOVD75n3NA9P8mXBKspmNrXaomrpx73ZkotV5XfvZW1WpO1AdTnYl6qG1kHMimKB8DuGWCBhWgTfbOdDFFrRDRisQ3e9GGkDuUw%2Bm2VcDf7rZzYKTmYQ2sLMEjWkHo6K4BtQQwlV9m6DN7%2BQ9ox9384sV%2FLeBYqUJ6%2FD0GAwmk3IO48ZCI7KxsXEz8IJYBkH%2FSMIOhzsAGOqUB%2BRXyAAUjiQPetRpL0qcgfQZorMogfTnS7y5BemTGLE%2BTdGvnrQZdu8be4T8iJgdqJUaSI317FCNdEh9DWo1xwmNpeLNqZTuvBNDxuYYRIMBC6KLYZV8c4XMEzJ%2Be7jDN06pn3lZRbr6C6DpVo8IRYBuCLAVSAVQrxv%2BY1ofJqAtbPVM7Pga3FIpweAaMSJqkm2fNxyINkref7ifs0rgERxslJV%2FR&X-Amz-Signature=e7a7aacb8a0bc7470e913db8266a5ceed2663146c152e4369f258df39b983e1e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK57V7X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCtMCraouVFA3wd5xsRKO3sR1moCwf55hZkxtYEovNEYQIgeAZpiRF04qXjYudVLIBfSJY4cghFgzJuqL6EI8MDXdUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpBdG598VgW8Mw0SrcA1EiFdcWhLQwnzQgDUTm1mtTb9xQ3SI3VBeMpUyAb2tRgpoFSWORUKLjsqWpSCnk0CqZmwmVWK4BxfYegR3F0FA4ExNNkcTruNvbnmB8ckj8RfAAKzpzQfhDblsbTpyyxMw4nb2kKc8GD5%2FcH3A7cPPJCEf%2BFiTVEQ8GOfgfXr3PicFw74tsm0UwlKX%2Bkd4mJOTDjC%2BdsUqEok6e8aqppf2HAD6OT8P0Y1Q4AbzWVZHehdrNfCcGp9NIh2dcivNTckG7EujXfDyznOBOGpVgnF91d5d8G6TLi%2Ft4FqSMS%2B2t96M81F4Z1ehAM4j1JZeuUOxnDFIZEwIdAKuAkp9yOQydCMotIDvQzI%2FDjlLe6aS33uLB4RS5LKlIkN%2F79PEps4js57A7RonltPOlusMVNLdxk8i6QgpV79Ro8OECO9YCAHBV%2FufNm%2BuCcLsOVD75n3NA9P8mXBKspmNrXaomrpx73ZkotV5XfvZW1WpO1AdTnYl6qG1kHMimKB8DuGWCBhWgTfbOdDFFrRDRisQ3e9GGkDuUw%2Bm2VcDf7rZzYKTmYQ2sLMEjWkHo6K4BtQQwlV9m6DN7%2BQ9ox9384sV%2FLeBYqUJ6%2FD0GAwmk3IO48ZCI7KxsXEz8IJYBkH%2FSMIOhzsAGOqUB%2BRXyAAUjiQPetRpL0qcgfQZorMogfTnS7y5BemTGLE%2BTdGvnrQZdu8be4T8iJgdqJUaSI317FCNdEh9DWo1xwmNpeLNqZTuvBNDxuYYRIMBC6KLYZV8c4XMEzJ%2Be7jDN06pn3lZRbr6C6DpVo8IRYBuCLAVSAVQrxv%2BY1ofJqAtbPVM7Pga3FIpweAaMSJqkm2fNxyINkref7ifs0rgERxslJV%2FR&X-Amz-Signature=55a51b8a42c782f329f6be9af48c84f737c01e8221e58f3373eed870bca3adc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLK57V7X%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T170754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCtMCraouVFA3wd5xsRKO3sR1moCwf55hZkxtYEovNEYQIgeAZpiRF04qXjYudVLIBfSJY4cghFgzJuqL6EI8MDXdUqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPpBdG598VgW8Mw0SrcA1EiFdcWhLQwnzQgDUTm1mtTb9xQ3SI3VBeMpUyAb2tRgpoFSWORUKLjsqWpSCnk0CqZmwmVWK4BxfYegR3F0FA4ExNNkcTruNvbnmB8ckj8RfAAKzpzQfhDblsbTpyyxMw4nb2kKc8GD5%2FcH3A7cPPJCEf%2BFiTVEQ8GOfgfXr3PicFw74tsm0UwlKX%2Bkd4mJOTDjC%2BdsUqEok6e8aqppf2HAD6OT8P0Y1Q4AbzWVZHehdrNfCcGp9NIh2dcivNTckG7EujXfDyznOBOGpVgnF91d5d8G6TLi%2Ft4FqSMS%2B2t96M81F4Z1ehAM4j1JZeuUOxnDFIZEwIdAKuAkp9yOQydCMotIDvQzI%2FDjlLe6aS33uLB4RS5LKlIkN%2F79PEps4js57A7RonltPOlusMVNLdxk8i6QgpV79Ro8OECO9YCAHBV%2FufNm%2BuCcLsOVD75n3NA9P8mXBKspmNrXaomrpx73ZkotV5XfvZW1WpO1AdTnYl6qG1kHMimKB8DuGWCBhWgTfbOdDFFrRDRisQ3e9GGkDuUw%2Bm2VcDf7rZzYKTmYQ2sLMEjWkHo6K4BtQQwlV9m6DN7%2BQ9ox9384sV%2FLeBYqUJ6%2FD0GAwmk3IO48ZCI7KxsXEz8IJYBkH%2FSMIOhzsAGOqUB%2BRXyAAUjiQPetRpL0qcgfQZorMogfTnS7y5BemTGLE%2BTdGvnrQZdu8be4T8iJgdqJUaSI317FCNdEh9DWo1xwmNpeLNqZTuvBNDxuYYRIMBC6KLYZV8c4XMEzJ%2Be7jDN06pn3lZRbr6C6DpVo8IRYBuCLAVSAVQrxv%2BY1ofJqAtbPVM7Pga3FIpweAaMSJqkm2fNxyINkref7ifs0rgERxslJV%2FR&X-Amz-Signature=52eb658f1a024444704e715d39f41032f3abeb370067e439829c68287692ffe9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
