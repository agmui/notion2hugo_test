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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKLKDMH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCmfvk9aSSOtMyNT2pVQnk4EL7qn3a%2F7Hv9cSClPmMd9wIgMVmUW7e%2BmJz7rsvQmhOBRSYHdZAPPbuM9qk6dBjrpIwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJgNMrwRhQLr2fOLtSrcAzCxRmr5FvhNpxvxcHahtwrDteR8IQxWzGF%2BpUByAWeLCIQBT01H06JLxiR56aa6ETfHcWYnOWLjBORDBQKWMYUyjyCEdvPbs9f0JO38%2BzNg3zL5ccCruxZsYG%2BYUv%2BbChP19VCk1Syra%2FrhbZeWOHgzDHhxe6m7QK0NCJz8%2F7I2PQS0EpW9DHAtGwtXFP1qPKLxHTCsmvP135xwBxkLLOJ70wKZKSiI8ZHSqhHt%2F8Q%2Fz5lJVvZwqhP%2FMNL%2BgEQUrF7SVq4vLuC55f%2F%2BtGkWjxw63LceOKpla2z7oj95pTnfIgj0%2Bn%2BiDf1L5hT%2FeIWKMrRJnXKQ6HYhWTFrQ4iki3jo95GlyN%2FcvYEP9uh6mKd6ImlYvLPcKjVEAW3QvZTU7k7AG0ihjP1Vq%2Fj%2B%2FgR3CvT0bk%2F9TiUfMouqgma04jPzqx1VMhFXICYo1iG7SRcTdtHYInIVU67JydeJU3vWAnHFIdzuP65qOWKMRBmVexfRIUwnRM5vtIIO3rnL8AjEvSTUC1m2FS4JuPuK6v5fFgn8M34v5ENTTYGi27dvlT9JEK7pnME2ZyoYs%2FUVXm6WGqrcWjoqP7As2ChbXOOGmmiP3r2ONYn3YZg%2FGJ2vZU6uZq2h3JKoVC6XHcVyMPXrtL4GOqUBt0C95Dz29v05QJ7EefzRpajdxX0DIhdTp6X%2FgoxoMrdEDz7PD8dYTGWrhNx8v8GkKmqiP1%2FweLrlCXFHSpiuHcSYfT1Ly7U3X8rUYk31bJFoaZkforAoV%2B0YtDj%2F5utvKAJtOWqo6A22%2Bxg0ib2BaNX%2BdlDp1RlVLPlooFlUezZ5G8x%2BCBaQzdyt7BXI07Hx7qSO3eDSByVgfaGS9heFMlAJlmhC&X-Amz-Signature=bd1cf7b7e936272c039162eafd9a2d7f5b2b88c57e9f691e36f64bb171e4eff0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKLKDMH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCmfvk9aSSOtMyNT2pVQnk4EL7qn3a%2F7Hv9cSClPmMd9wIgMVmUW7e%2BmJz7rsvQmhOBRSYHdZAPPbuM9qk6dBjrpIwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJgNMrwRhQLr2fOLtSrcAzCxRmr5FvhNpxvxcHahtwrDteR8IQxWzGF%2BpUByAWeLCIQBT01H06JLxiR56aa6ETfHcWYnOWLjBORDBQKWMYUyjyCEdvPbs9f0JO38%2BzNg3zL5ccCruxZsYG%2BYUv%2BbChP19VCk1Syra%2FrhbZeWOHgzDHhxe6m7QK0NCJz8%2F7I2PQS0EpW9DHAtGwtXFP1qPKLxHTCsmvP135xwBxkLLOJ70wKZKSiI8ZHSqhHt%2F8Q%2Fz5lJVvZwqhP%2FMNL%2BgEQUrF7SVq4vLuC55f%2F%2BtGkWjxw63LceOKpla2z7oj95pTnfIgj0%2Bn%2BiDf1L5hT%2FeIWKMrRJnXKQ6HYhWTFrQ4iki3jo95GlyN%2FcvYEP9uh6mKd6ImlYvLPcKjVEAW3QvZTU7k7AG0ihjP1Vq%2Fj%2B%2FgR3CvT0bk%2F9TiUfMouqgma04jPzqx1VMhFXICYo1iG7SRcTdtHYInIVU67JydeJU3vWAnHFIdzuP65qOWKMRBmVexfRIUwnRM5vtIIO3rnL8AjEvSTUC1m2FS4JuPuK6v5fFgn8M34v5ENTTYGi27dvlT9JEK7pnME2ZyoYs%2FUVXm6WGqrcWjoqP7As2ChbXOOGmmiP3r2ONYn3YZg%2FGJ2vZU6uZq2h3JKoVC6XHcVyMPXrtL4GOqUBt0C95Dz29v05QJ7EefzRpajdxX0DIhdTp6X%2FgoxoMrdEDz7PD8dYTGWrhNx8v8GkKmqiP1%2FweLrlCXFHSpiuHcSYfT1Ly7U3X8rUYk31bJFoaZkforAoV%2B0YtDj%2F5utvKAJtOWqo6A22%2Bxg0ib2BaNX%2BdlDp1RlVLPlooFlUezZ5G8x%2BCBaQzdyt7BXI07Hx7qSO3eDSByVgfaGS9heFMlAJlmhC&X-Amz-Signature=e3012dcf9db75145bed2f99ffd82c3d6add9ba02dcad1ee95f4ead604edc1ad7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKLKDMH%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T080919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIQCmfvk9aSSOtMyNT2pVQnk4EL7qn3a%2F7Hv9cSClPmMd9wIgMVmUW7e%2BmJz7rsvQmhOBRSYHdZAPPbuM9qk6dBjrpIwq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDJgNMrwRhQLr2fOLtSrcAzCxRmr5FvhNpxvxcHahtwrDteR8IQxWzGF%2BpUByAWeLCIQBT01H06JLxiR56aa6ETfHcWYnOWLjBORDBQKWMYUyjyCEdvPbs9f0JO38%2BzNg3zL5ccCruxZsYG%2BYUv%2BbChP19VCk1Syra%2FrhbZeWOHgzDHhxe6m7QK0NCJz8%2F7I2PQS0EpW9DHAtGwtXFP1qPKLxHTCsmvP135xwBxkLLOJ70wKZKSiI8ZHSqhHt%2F8Q%2Fz5lJVvZwqhP%2FMNL%2BgEQUrF7SVq4vLuC55f%2F%2BtGkWjxw63LceOKpla2z7oj95pTnfIgj0%2Bn%2BiDf1L5hT%2FeIWKMrRJnXKQ6HYhWTFrQ4iki3jo95GlyN%2FcvYEP9uh6mKd6ImlYvLPcKjVEAW3QvZTU7k7AG0ihjP1Vq%2Fj%2B%2FgR3CvT0bk%2F9TiUfMouqgma04jPzqx1VMhFXICYo1iG7SRcTdtHYInIVU67JydeJU3vWAnHFIdzuP65qOWKMRBmVexfRIUwnRM5vtIIO3rnL8AjEvSTUC1m2FS4JuPuK6v5fFgn8M34v5ENTTYGi27dvlT9JEK7pnME2ZyoYs%2FUVXm6WGqrcWjoqP7As2ChbXOOGmmiP3r2ONYn3YZg%2FGJ2vZU6uZq2h3JKoVC6XHcVyMPXrtL4GOqUBt0C95Dz29v05QJ7EefzRpajdxX0DIhdTp6X%2FgoxoMrdEDz7PD8dYTGWrhNx8v8GkKmqiP1%2FweLrlCXFHSpiuHcSYfT1Ly7U3X8rUYk31bJFoaZkforAoV%2B0YtDj%2F5utvKAJtOWqo6A22%2Bxg0ib2BaNX%2BdlDp1RlVLPlooFlUezZ5G8x%2BCBaQzdyt7BXI07Hx7qSO3eDSByVgfaGS9heFMlAJlmhC&X-Amz-Signature=ac37abe297c5db590c86ec791bdf01e457b91fc3f98b6f2e4d626b63efb1b00c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
