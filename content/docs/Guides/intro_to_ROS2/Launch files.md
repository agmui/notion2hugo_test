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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHTZUP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGmUjWdtvLtb84uRHJ57b8cUItSYsfapfotQobY5zmCuAiBWj3llZ5%2FtMI5VHbSZIn5l7Ft8xKNaw4bY%2BPNmX7fY9Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMjIiWjRIIOPuN9ks5KtwDWCBF7E%2FJDa9C5iivWRzwTyQD8k%2FDCm2cNBRMDSo20Xio0iqcKmrq0ldScjL0s1b35mZYOq5gZ%2Frlp6NelQ68U4uUtJDLn8eskkLohU6AaruqPO73e0lkg3jP62lqOloe%2BeMltw6PrabfrEnNcwh9euGFwZ00U3KN5ekuZDmK6BnuawKTHzF4ju8%2FspXL%2B1tMHAUU9wL1DzLnR3QuZfN%2B9JhqyfCDzr2%2FxafddbDCDnzF8SFoMy0KaBjKscyzsqE0E%2BgLZzk%2By%2BFsojAGrBYZqFDu1oHe%2BfR7JClXynLjN8BIlJurPc5djW2fcHbPBeXjm7DVJqvFjw3yVDRjT1SXhg5h0yegiRLxXu2YWc1ql1%2BiXgv0r5qHFpPpE5cieOLeyU7IoHhbvEtyjqtV%2BOD568T20cQi2flixJZ00zXp9rYoMTGUsCfjumfb%2BMPIF%2Fu5AsAZvO56L2o9Te09KMcxpvcv53EF%2BtpmB47ILRtLsEjoMkURd%2FdH8jhwe1Pp%2BQhtwlJ2GnygirkgLcY1ALgdhGGObo2IXuWVI%2BFXOZGxtLdUdTkv4eRwRMneNhNrj4A7Z%2FQod%2FM28DXmsV36McG8Lg7DSHWljxmh2yeY5qxos1Siry1iLQ6GUVyr268w7v35wgY6pgFomGwSWN%2FGBU4KXI%2FdfEkCPrknK9gexC9yinUibZ95scxCmxje9a%2FrXSqIPSn5B4GMnxoQy9BurdF%2Fpo092WyztZ8i4nfYbK5sRRNXBghyBYm7cFfnEg0YYTl4zNbU7d9%2B4xaBgQtJN3WSq6Y80FopkcAHeA4g95dxIhukdJQ2%2BY21S54rPqb4cG7gM6VSzVwVXD5aMe%2FubRl7h6mq9tvJdrTdXhPB&X-Amz-Signature=15d10a48589dd2c6e1269f857b722b7b855ca8f9532038b48154f7f9a564491b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHTZUP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGmUjWdtvLtb84uRHJ57b8cUItSYsfapfotQobY5zmCuAiBWj3llZ5%2FtMI5VHbSZIn5l7Ft8xKNaw4bY%2BPNmX7fY9Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMjIiWjRIIOPuN9ks5KtwDWCBF7E%2FJDa9C5iivWRzwTyQD8k%2FDCm2cNBRMDSo20Xio0iqcKmrq0ldScjL0s1b35mZYOq5gZ%2Frlp6NelQ68U4uUtJDLn8eskkLohU6AaruqPO73e0lkg3jP62lqOloe%2BeMltw6PrabfrEnNcwh9euGFwZ00U3KN5ekuZDmK6BnuawKTHzF4ju8%2FspXL%2B1tMHAUU9wL1DzLnR3QuZfN%2B9JhqyfCDzr2%2FxafddbDCDnzF8SFoMy0KaBjKscyzsqE0E%2BgLZzk%2By%2BFsojAGrBYZqFDu1oHe%2BfR7JClXynLjN8BIlJurPc5djW2fcHbPBeXjm7DVJqvFjw3yVDRjT1SXhg5h0yegiRLxXu2YWc1ql1%2BiXgv0r5qHFpPpE5cieOLeyU7IoHhbvEtyjqtV%2BOD568T20cQi2flixJZ00zXp9rYoMTGUsCfjumfb%2BMPIF%2Fu5AsAZvO56L2o9Te09KMcxpvcv53EF%2BtpmB47ILRtLsEjoMkURd%2FdH8jhwe1Pp%2BQhtwlJ2GnygirkgLcY1ALgdhGGObo2IXuWVI%2BFXOZGxtLdUdTkv4eRwRMneNhNrj4A7Z%2FQod%2FM28DXmsV36McG8Lg7DSHWljxmh2yeY5qxos1Siry1iLQ6GUVyr268w7v35wgY6pgFomGwSWN%2FGBU4KXI%2FdfEkCPrknK9gexC9yinUibZ95scxCmxje9a%2FrXSqIPSn5B4GMnxoQy9BurdF%2Fpo092WyztZ8i4nfYbK5sRRNXBghyBYm7cFfnEg0YYTl4zNbU7d9%2B4xaBgQtJN3WSq6Y80FopkcAHeA4g95dxIhukdJQ2%2BY21S54rPqb4cG7gM6VSzVwVXD5aMe%2FubRl7h6mq9tvJdrTdXhPB&X-Amz-Signature=cfe3b8d084919eaf8950fc55bf40562f0a726a10cd9b5037a534b76893ac2dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJMHTZUP%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIGmUjWdtvLtb84uRHJ57b8cUItSYsfapfotQobY5zmCuAiBWj3llZ5%2FtMI5VHbSZIn5l7Ft8xKNaw4bY%2BPNmX7fY9Cr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMjIiWjRIIOPuN9ks5KtwDWCBF7E%2FJDa9C5iivWRzwTyQD8k%2FDCm2cNBRMDSo20Xio0iqcKmrq0ldScjL0s1b35mZYOq5gZ%2Frlp6NelQ68U4uUtJDLn8eskkLohU6AaruqPO73e0lkg3jP62lqOloe%2BeMltw6PrabfrEnNcwh9euGFwZ00U3KN5ekuZDmK6BnuawKTHzF4ju8%2FspXL%2B1tMHAUU9wL1DzLnR3QuZfN%2B9JhqyfCDzr2%2FxafddbDCDnzF8SFoMy0KaBjKscyzsqE0E%2BgLZzk%2By%2BFsojAGrBYZqFDu1oHe%2BfR7JClXynLjN8BIlJurPc5djW2fcHbPBeXjm7DVJqvFjw3yVDRjT1SXhg5h0yegiRLxXu2YWc1ql1%2BiXgv0r5qHFpPpE5cieOLeyU7IoHhbvEtyjqtV%2BOD568T20cQi2flixJZ00zXp9rYoMTGUsCfjumfb%2BMPIF%2Fu5AsAZvO56L2o9Te09KMcxpvcv53EF%2BtpmB47ILRtLsEjoMkURd%2FdH8jhwe1Pp%2BQhtwlJ2GnygirkgLcY1ALgdhGGObo2IXuWVI%2BFXOZGxtLdUdTkv4eRwRMneNhNrj4A7Z%2FQod%2FM28DXmsV36McG8Lg7DSHWljxmh2yeY5qxos1Siry1iLQ6GUVyr268w7v35wgY6pgFomGwSWN%2FGBU4KXI%2FdfEkCPrknK9gexC9yinUibZ95scxCmxje9a%2FrXSqIPSn5B4GMnxoQy9BurdF%2Fpo092WyztZ8i4nfYbK5sRRNXBghyBYm7cFfnEg0YYTl4zNbU7d9%2B4xaBgQtJN3WSq6Y80FopkcAHeA4g95dxIhukdJQ2%2BY21S54rPqb4cG7gM6VSzVwVXD5aMe%2FubRl7h6mq9tvJdrTdXhPB&X-Amz-Signature=a6282a92db121269318389365286b763820d16534accd31509a03549a6a19c06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
