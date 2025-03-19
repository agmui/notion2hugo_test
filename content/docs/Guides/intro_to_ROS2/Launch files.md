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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I4RKZC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCmA2OiKzPKxA7H44QChTMnk0DycFj2e%2FHIYgr4Yb6CAgIgecLgHfa7qLZxGVCajpp0WypMFpt3Yx3GIcU%2BnPV1mFkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaiHOIDzut7mH4tzCrcA%2BDGDZuRUgLMhXsvo65NmTLt31HJkTQrvi6u2nFJj7pd3L%2BFL3q%2Ffny5T7s0Z4m4GDdAaVBVDQvHs7pkqRXL1l5%2Bs%2BNriDALfY59Dm7Y9uFDP3CdTFcpC%2FORiUM%2FOoeUZNg9oaQcpmYQZH9hc2jaqxlB2oB118lyB5aEu%2BZODFZlYoqAh4QUA8KIAnPX9NUmCmmDRcvnlvQOenxr9JFc2YW59W5Hs69QyjTb0yBBsDi7xO8n8KEy5c9%2F84Q0okRr%2B0gqbZUgaL0ZdcH%2FOEf7IXLaru3DJM90amNJVt17urYLSRWBO%2FcP0IlJ1a%2FNZ%2F%2FQgye%2FwkH%2BQfAFCf%2FnoeCpe78wPdep%2BcfoLPU2%2BTsM7cJUX4cMiHmU30jcb%2BXYFmVcHzvNzMlz7xne0LjsGu4cU25XawzJVAes7nVpUYKgZBK4L%2BWEgY8HaoJ2NWS6NuKmg%2BNhcy3G8DmoWZ2DposmKpPwNBWUY397a%2BvuPvnJy%2FsW0DmFIndGIAbGWHZ18j1OkhWuxeYKFuGHdHabE8xyvt4S6LfORwVfNjisJryVj4kp7b53GIzJzwNYUdjjcezLfVGXeav%2FMQJqC2nN0RhLH841zqA3ynp5u7OHJ0%2Fjw3M3kIcrHfEvCSkZFlfSMJOy574GOqUBjHTNZVJNtYTOSdvKSdg9SVfuNhy0ovBEwc7MdTefNnBERSbUMAv9kezrZRUpV9K7sv%2BnwXZqRtnECpld3csHTC1dotosq4nxzGJlhsr2W8I587bZG7nDsjsdSMnnvS1pZkxUGWyNJgwLvsuAPfJtO3piKLlIN4jEko77x9t7EvUt%2FNsAmV5hpdB3AwiQXDLX5xke8JNL%2BsXFfKgFmSbBDHSvqf8G&X-Amz-Signature=dd7b53cb01062c86b52db7aeabd9f430f4e8adb60df80e0313e8db7bbcc8c939&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I4RKZC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCmA2OiKzPKxA7H44QChTMnk0DycFj2e%2FHIYgr4Yb6CAgIgecLgHfa7qLZxGVCajpp0WypMFpt3Yx3GIcU%2BnPV1mFkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaiHOIDzut7mH4tzCrcA%2BDGDZuRUgLMhXsvo65NmTLt31HJkTQrvi6u2nFJj7pd3L%2BFL3q%2Ffny5T7s0Z4m4GDdAaVBVDQvHs7pkqRXL1l5%2Bs%2BNriDALfY59Dm7Y9uFDP3CdTFcpC%2FORiUM%2FOoeUZNg9oaQcpmYQZH9hc2jaqxlB2oB118lyB5aEu%2BZODFZlYoqAh4QUA8KIAnPX9NUmCmmDRcvnlvQOenxr9JFc2YW59W5Hs69QyjTb0yBBsDi7xO8n8KEy5c9%2F84Q0okRr%2B0gqbZUgaL0ZdcH%2FOEf7IXLaru3DJM90amNJVt17urYLSRWBO%2FcP0IlJ1a%2FNZ%2F%2FQgye%2FwkH%2BQfAFCf%2FnoeCpe78wPdep%2BcfoLPU2%2BTsM7cJUX4cMiHmU30jcb%2BXYFmVcHzvNzMlz7xne0LjsGu4cU25XawzJVAes7nVpUYKgZBK4L%2BWEgY8HaoJ2NWS6NuKmg%2BNhcy3G8DmoWZ2DposmKpPwNBWUY397a%2BvuPvnJy%2FsW0DmFIndGIAbGWHZ18j1OkhWuxeYKFuGHdHabE8xyvt4S6LfORwVfNjisJryVj4kp7b53GIzJzwNYUdjjcezLfVGXeav%2FMQJqC2nN0RhLH841zqA3ynp5u7OHJ0%2Fjw3M3kIcrHfEvCSkZFlfSMJOy574GOqUBjHTNZVJNtYTOSdvKSdg9SVfuNhy0ovBEwc7MdTefNnBERSbUMAv9kezrZRUpV9K7sv%2BnwXZqRtnECpld3csHTC1dotosq4nxzGJlhsr2W8I587bZG7nDsjsdSMnnvS1pZkxUGWyNJgwLvsuAPfJtO3piKLlIN4jEko77x9t7EvUt%2FNsAmV5hpdB3AwiQXDLX5xke8JNL%2BsXFfKgFmSbBDHSvqf8G&X-Amz-Signature=54553e2ca14ac5f76344e669c227d9581ae437820adfbb23cf671f111a42af80&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663I4RKZC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T003823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCmA2OiKzPKxA7H44QChTMnk0DycFj2e%2FHIYgr4Yb6CAgIgecLgHfa7qLZxGVCajpp0WypMFpt3Yx3GIcU%2BnPV1mFkq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDEaiHOIDzut7mH4tzCrcA%2BDGDZuRUgLMhXsvo65NmTLt31HJkTQrvi6u2nFJj7pd3L%2BFL3q%2Ffny5T7s0Z4m4GDdAaVBVDQvHs7pkqRXL1l5%2Bs%2BNriDALfY59Dm7Y9uFDP3CdTFcpC%2FORiUM%2FOoeUZNg9oaQcpmYQZH9hc2jaqxlB2oB118lyB5aEu%2BZODFZlYoqAh4QUA8KIAnPX9NUmCmmDRcvnlvQOenxr9JFc2YW59W5Hs69QyjTb0yBBsDi7xO8n8KEy5c9%2F84Q0okRr%2B0gqbZUgaL0ZdcH%2FOEf7IXLaru3DJM90amNJVt17urYLSRWBO%2FcP0IlJ1a%2FNZ%2F%2FQgye%2FwkH%2BQfAFCf%2FnoeCpe78wPdep%2BcfoLPU2%2BTsM7cJUX4cMiHmU30jcb%2BXYFmVcHzvNzMlz7xne0LjsGu4cU25XawzJVAes7nVpUYKgZBK4L%2BWEgY8HaoJ2NWS6NuKmg%2BNhcy3G8DmoWZ2DposmKpPwNBWUY397a%2BvuPvnJy%2FsW0DmFIndGIAbGWHZ18j1OkhWuxeYKFuGHdHabE8xyvt4S6LfORwVfNjisJryVj4kp7b53GIzJzwNYUdjjcezLfVGXeav%2FMQJqC2nN0RhLH841zqA3ynp5u7OHJ0%2Fjw3M3kIcrHfEvCSkZFlfSMJOy574GOqUBjHTNZVJNtYTOSdvKSdg9SVfuNhy0ovBEwc7MdTefNnBERSbUMAv9kezrZRUpV9K7sv%2BnwXZqRtnECpld3csHTC1dotosq4nxzGJlhsr2W8I587bZG7nDsjsdSMnnvS1pZkxUGWyNJgwLvsuAPfJtO3piKLlIN4jEko77x9t7EvUt%2FNsAmV5hpdB3AwiQXDLX5xke8JNL%2BsXFfKgFmSbBDHSvqf8G&X-Amz-Signature=9f959a4159b3e50b3560ad4937b2f97b44a628c2df7b801291ef1988bde57f7c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
