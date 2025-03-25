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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTY2HSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHKrRKqrv8Fu2fSX3u6SPWMk9M%2B580u8%2FcteEqLfabVAiEAm508cq9b1akmT42aXnItx%2BAhLzo4sY35DF43WDnvNfoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISKu3qfNOfHB7GmgyrcA%2FD2njyohVrCL%2B0V%2FkEclY07mdkXIvBXBX6Xpe6lRyMChvUDiHiaRFQqYeU%2BQTUkWyWcKSs4HZ18TEWudWKI2rYbPxgrmA1B1MSVd4OXL1XpoWfxkSDnGrwQERZl0TxhhuJuOZbqhBOM0leChJeSDmhRFp4A9rtNKPcw%2FDN5atpQzmmN3YZxcClXK%2FCimk%2FdkWobTQ7KzWbTlnI2dgZCr5TSC5jkR0pumED3sOyNHq%2B%2Fi%2B3Nv2knQ8RISrWX7%2B05tv4MWIVtKjEstfz6%2BWxBfRfug0n5knCmddpVUDeLD8%2F%2BmIKJTync1we6DmqV5uS9LXs0PI3E4UMnbLv1B3NAgy8suGpCHEFrNwoW5uLBK06yA8gSlUdTpmJFx2bnkq6XBSWj8I4x3TD11jSF863VSYrcAmfinP%2BgTglXqyYwLvMsrwjzpmXlBzZaccixT6ORSUDj%2B9kAd9ivCVlWuZqk72Zayyn9WrHjP5QMXtlnbpSN%2Bh8wpJBjBxsjaz%2BAJJKxhe9LvegdWxp0%2FYvTBl1mu%2B7WMC%2BcJC3ugvmYYbzW5H4zkXVRTP42SYTxCPnw%2Bl8z7GzFjzWNcMJrsfB0gPM4%2F8uLWKAQAllxDKK7KYrPXQtyCeWV1SEjVmjB9xGkMLTwh78GOqUBnHQGT%2BQ%2FS0jspVIw%2FaxZKgiOD3LdKaxK8jyNfH00mHJt85GggHZAi2%2BcQkDgukcRM1ssQpmzMhMVRddr2oAbZmTMcjQeeaY%2BC8PJE3HmQ893US7VNVU%2F%2BGvbDwA1Hc%2FzeI4PcBz%2B11%2Bj%2FuE5LpBzI8MTUbEe5IpHxwCN2nx1xFEdWzXgeA0hZTp0g61vzhkAIvh%2FtQpN9O%2BjiWddAKETOrqbPtr0&X-Amz-Signature=587432a3cdba9ae344521052b93cf4388755e4a0a20080dd1bed08e5300bc142&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTY2HSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHKrRKqrv8Fu2fSX3u6SPWMk9M%2B580u8%2FcteEqLfabVAiEAm508cq9b1akmT42aXnItx%2BAhLzo4sY35DF43WDnvNfoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISKu3qfNOfHB7GmgyrcA%2FD2njyohVrCL%2B0V%2FkEclY07mdkXIvBXBX6Xpe6lRyMChvUDiHiaRFQqYeU%2BQTUkWyWcKSs4HZ18TEWudWKI2rYbPxgrmA1B1MSVd4OXL1XpoWfxkSDnGrwQERZl0TxhhuJuOZbqhBOM0leChJeSDmhRFp4A9rtNKPcw%2FDN5atpQzmmN3YZxcClXK%2FCimk%2FdkWobTQ7KzWbTlnI2dgZCr5TSC5jkR0pumED3sOyNHq%2B%2Fi%2B3Nv2knQ8RISrWX7%2B05tv4MWIVtKjEstfz6%2BWxBfRfug0n5knCmddpVUDeLD8%2F%2BmIKJTync1we6DmqV5uS9LXs0PI3E4UMnbLv1B3NAgy8suGpCHEFrNwoW5uLBK06yA8gSlUdTpmJFx2bnkq6XBSWj8I4x3TD11jSF863VSYrcAmfinP%2BgTglXqyYwLvMsrwjzpmXlBzZaccixT6ORSUDj%2B9kAd9ivCVlWuZqk72Zayyn9WrHjP5QMXtlnbpSN%2Bh8wpJBjBxsjaz%2BAJJKxhe9LvegdWxp0%2FYvTBl1mu%2B7WMC%2BcJC3ugvmYYbzW5H4zkXVRTP42SYTxCPnw%2Bl8z7GzFjzWNcMJrsfB0gPM4%2F8uLWKAQAllxDKK7KYrPXQtyCeWV1SEjVmjB9xGkMLTwh78GOqUBnHQGT%2BQ%2FS0jspVIw%2FaxZKgiOD3LdKaxK8jyNfH00mHJt85GggHZAi2%2BcQkDgukcRM1ssQpmzMhMVRddr2oAbZmTMcjQeeaY%2BC8PJE3HmQ893US7VNVU%2F%2BGvbDwA1Hc%2FzeI4PcBz%2B11%2Bj%2FuE5LpBzI8MTUbEe5IpHxwCN2nx1xFEdWzXgeA0hZTp0g61vzhkAIvh%2FtQpN9O%2BjiWddAKETOrqbPtr0&X-Amz-Signature=0a69893ee2d4016690632f978de7a07088a4efe34164757f55ad4e040f08eb2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NTY2HSH%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T003846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHKrRKqrv8Fu2fSX3u6SPWMk9M%2B580u8%2FcteEqLfabVAiEAm508cq9b1akmT42aXnItx%2BAhLzo4sY35DF43WDnvNfoqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDISKu3qfNOfHB7GmgyrcA%2FD2njyohVrCL%2B0V%2FkEclY07mdkXIvBXBX6Xpe6lRyMChvUDiHiaRFQqYeU%2BQTUkWyWcKSs4HZ18TEWudWKI2rYbPxgrmA1B1MSVd4OXL1XpoWfxkSDnGrwQERZl0TxhhuJuOZbqhBOM0leChJeSDmhRFp4A9rtNKPcw%2FDN5atpQzmmN3YZxcClXK%2FCimk%2FdkWobTQ7KzWbTlnI2dgZCr5TSC5jkR0pumED3sOyNHq%2B%2Fi%2B3Nv2knQ8RISrWX7%2B05tv4MWIVtKjEstfz6%2BWxBfRfug0n5knCmddpVUDeLD8%2F%2BmIKJTync1we6DmqV5uS9LXs0PI3E4UMnbLv1B3NAgy8suGpCHEFrNwoW5uLBK06yA8gSlUdTpmJFx2bnkq6XBSWj8I4x3TD11jSF863VSYrcAmfinP%2BgTglXqyYwLvMsrwjzpmXlBzZaccixT6ORSUDj%2B9kAd9ivCVlWuZqk72Zayyn9WrHjP5QMXtlnbpSN%2Bh8wpJBjBxsjaz%2BAJJKxhe9LvegdWxp0%2FYvTBl1mu%2B7WMC%2BcJC3ugvmYYbzW5H4zkXVRTP42SYTxCPnw%2Bl8z7GzFjzWNcMJrsfB0gPM4%2F8uLWKAQAllxDKK7KYrPXQtyCeWV1SEjVmjB9xGkMLTwh78GOqUBnHQGT%2BQ%2FS0jspVIw%2FaxZKgiOD3LdKaxK8jyNfH00mHJt85GggHZAi2%2BcQkDgukcRM1ssQpmzMhMVRddr2oAbZmTMcjQeeaY%2BC8PJE3HmQ893US7VNVU%2F%2BGvbDwA1Hc%2FzeI4PcBz%2B11%2Bj%2FuE5LpBzI8MTUbEe5IpHxwCN2nx1xFEdWzXgeA0hZTp0g61vzhkAIvh%2FtQpN9O%2BjiWddAKETOrqbPtr0&X-Amz-Signature=f4d3bd19db6e9120fcb9bc4cb2260986d97ec1daba17dab021e42bc1a05079d9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
