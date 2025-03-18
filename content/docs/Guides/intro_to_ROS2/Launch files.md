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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DGF2B3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FyEo14LC%2B4Iul2h%2BTe63MZetuL1BuFvsiMJEuLp07gIgRy3i5%2BiSZ7lKvnOBf6M3%2BXKIhPza9g1G26XTBFYhk4Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEfPs1IADOEZ36DftCrcAxc7SPR%2FdCDfBDVMK0SLWTn3EnnkAuS8010kvJzYfaRliiTx5NyQ9Bq8gwDm1bggxiLhWnrY1UzfzKNsqlmwxhCPNh1UDftwDedhYsTBjjdcyjNTZIV6FVS7bnM9xKNeaRBgwgNQIwo5CM%2BJCdS5PihTfY1Ful%2Fa15iJVosExPaSYhDHuE8Sq5i212UTnbfs8EWTbV0xPlSvnlkuiYU5jAETqXvHM%2Fn2yxa4YzxEvlh%2B0EuXC3odOjUUq9JvEioIX6bzEVfYXXbmegYqPG%2B4H0ZaRw9DfM1rMKu9eflcGVkrPHiXyDJAafYnl9oKlE%2BXAMZ2gsftueo5qd6%2BJEUEKjCn340Jnl2FL11j3pxT3GVxuj5yce40YmHDds90I%2B%2F97aL9HmSz44yEXBpXb%2Bv3x4wVGdIFYWZUpFjBmuBalyUCUiPAtczbBnY24fuaYUbMnG6I3%2BbKzFTPkLMLzipYvRMmUrvbGRnHbghsTDCiR%2FqQj1Bp0bSe4odvmM2NrDKjQuNzHlOt5yzaw6BkoCo%2FfTkSjfDR80RZ0KS8Q9V7mwXbopetmeZFNz3bJkRbOUJYZbgKGYXZS7Dhgp1u8ghGbsN%2BJl1YCFzuNUqiHdoiEbNsaBay%2BCeeneUoeruYMP%2Fr4r4GOqUBGO4j06C0Y55PD7jLkp2Qa4BVAU4xwCBazM621xHqf%2B7UK4DMpF3iHlhiLrVkoNvmNcYRTskribd13cL7RXGAMDiY1sDFWu7BvaZNL86psEZvjM%2BDXfwCNSshMtIEQbYHGrru0YtjkwnWDfbNIdC7fg6W9%2FEuwo7ppa2JQbWHzciKkfV872Kp0rewPwfdZljiYvVocPFW9X32Og4KZfHbJC%2BJQH4N&X-Amz-Signature=e1903f617c4aab1311b82f74dc794f0004306ffebe4ea90b7cdf127d51308c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DGF2B3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FyEo14LC%2B4Iul2h%2BTe63MZetuL1BuFvsiMJEuLp07gIgRy3i5%2BiSZ7lKvnOBf6M3%2BXKIhPza9g1G26XTBFYhk4Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEfPs1IADOEZ36DftCrcAxc7SPR%2FdCDfBDVMK0SLWTn3EnnkAuS8010kvJzYfaRliiTx5NyQ9Bq8gwDm1bggxiLhWnrY1UzfzKNsqlmwxhCPNh1UDftwDedhYsTBjjdcyjNTZIV6FVS7bnM9xKNeaRBgwgNQIwo5CM%2BJCdS5PihTfY1Ful%2Fa15iJVosExPaSYhDHuE8Sq5i212UTnbfs8EWTbV0xPlSvnlkuiYU5jAETqXvHM%2Fn2yxa4YzxEvlh%2B0EuXC3odOjUUq9JvEioIX6bzEVfYXXbmegYqPG%2B4H0ZaRw9DfM1rMKu9eflcGVkrPHiXyDJAafYnl9oKlE%2BXAMZ2gsftueo5qd6%2BJEUEKjCn340Jnl2FL11j3pxT3GVxuj5yce40YmHDds90I%2B%2F97aL9HmSz44yEXBpXb%2Bv3x4wVGdIFYWZUpFjBmuBalyUCUiPAtczbBnY24fuaYUbMnG6I3%2BbKzFTPkLMLzipYvRMmUrvbGRnHbghsTDCiR%2FqQj1Bp0bSe4odvmM2NrDKjQuNzHlOt5yzaw6BkoCo%2FfTkSjfDR80RZ0KS8Q9V7mwXbopetmeZFNz3bJkRbOUJYZbgKGYXZS7Dhgp1u8ghGbsN%2BJl1YCFzuNUqiHdoiEbNsaBay%2BCeeneUoeruYMP%2Fr4r4GOqUBGO4j06C0Y55PD7jLkp2Qa4BVAU4xwCBazM621xHqf%2B7UK4DMpF3iHlhiLrVkoNvmNcYRTskribd13cL7RXGAMDiY1sDFWu7BvaZNL86psEZvjM%2BDXfwCNSshMtIEQbYHGrru0YtjkwnWDfbNIdC7fg6W9%2FEuwo7ppa2JQbWHzciKkfV872Kp0rewPwfdZljiYvVocPFW9X32Og4KZfHbJC%2BJQH4N&X-Amz-Signature=2ed4b8f2aee5ec180fee1afee2d3dccd964f58bf5650506ef9d98eecfc20619e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634DGF2B3%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD%2FyEo14LC%2B4Iul2h%2BTe63MZetuL1BuFvsiMJEuLp07gIgRy3i5%2BiSZ7lKvnOBf6M3%2BXKIhPza9g1G26XTBFYhk4Mq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEfPs1IADOEZ36DftCrcAxc7SPR%2FdCDfBDVMK0SLWTn3EnnkAuS8010kvJzYfaRliiTx5NyQ9Bq8gwDm1bggxiLhWnrY1UzfzKNsqlmwxhCPNh1UDftwDedhYsTBjjdcyjNTZIV6FVS7bnM9xKNeaRBgwgNQIwo5CM%2BJCdS5PihTfY1Ful%2Fa15iJVosExPaSYhDHuE8Sq5i212UTnbfs8EWTbV0xPlSvnlkuiYU5jAETqXvHM%2Fn2yxa4YzxEvlh%2B0EuXC3odOjUUq9JvEioIX6bzEVfYXXbmegYqPG%2B4H0ZaRw9DfM1rMKu9eflcGVkrPHiXyDJAafYnl9oKlE%2BXAMZ2gsftueo5qd6%2BJEUEKjCn340Jnl2FL11j3pxT3GVxuj5yce40YmHDds90I%2B%2F97aL9HmSz44yEXBpXb%2Bv3x4wVGdIFYWZUpFjBmuBalyUCUiPAtczbBnY24fuaYUbMnG6I3%2BbKzFTPkLMLzipYvRMmUrvbGRnHbghsTDCiR%2FqQj1Bp0bSe4odvmM2NrDKjQuNzHlOt5yzaw6BkoCo%2FfTkSjfDR80RZ0KS8Q9V7mwXbopetmeZFNz3bJkRbOUJYZbgKGYXZS7Dhgp1u8ghGbsN%2BJl1YCFzuNUqiHdoiEbNsaBay%2BCeeneUoeruYMP%2Fr4r4GOqUBGO4j06C0Y55PD7jLkp2Qa4BVAU4xwCBazM621xHqf%2B7UK4DMpF3iHlhiLrVkoNvmNcYRTskribd13cL7RXGAMDiY1sDFWu7BvaZNL86psEZvjM%2BDXfwCNSshMtIEQbYHGrru0YtjkwnWDfbNIdC7fg6W9%2FEuwo7ppa2JQbWHzciKkfV872Kp0rewPwfdZljiYvVocPFW9X32Og4KZfHbJC%2BJQH4N&X-Amz-Signature=384439fd9c0cd65287ca9fb6883e31410efa7a5a131f50290983e1015297a2ae&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
