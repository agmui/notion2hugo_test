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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZUXWGT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxA191gux3gWrxbYnv6KF97p73EThRHoIkYdllwaixWwIhANXZKBY9w5GzAshC7O9NCKh41S%2BY%2B16nHotVbazZHuLYKv8DCGgQABoMNjM3NDIzMTgzODA1IgyGva7En3Rlss1GMEEq3APsnpA%2Ffnv29REad5JGogS4fgJvZHZlBBjVyxpHtjWRNCayrwKNuzpiCXVWUFusNDbQmhY2pZE3jO5BtGW1gOi1duPkJ0zq8EFoG8HBoVVS431f6T6%2Bff5E1C%2BwJ6B%2FSpW0kknqZD8QnP%2FgabsvH9u2urOd6Y5BIq4AEWNGOpZf2%2B7E3vwzuJKr%2BjZdiqE%2BCh04b9HD%2FZFGNcX%2BT7sbp7Jd3SifjA40F1Tqyy%2FnEOIT1qZgissMa9pzBlxk6ZC0kZvm75aukTltCq7gF8ymckcJ6LeIJXWdJiS3dQpCt0Xemo9XC5PCeNr61l5IjPJ8xg2bC9JfVtUNQeRK%2FXElym545uefh70HktZ%2BvQoT8DB88GNLzdugQjVgl2qc%2Fllau7KySjpKFkhIajcJIXSMmwre8juucOXETK%2F4mVLgfHTvpmZ06vPssS1He%2FolAsU%2FUeRRzRV1snxOymBG20Rtc9pESWgaRYkMFtfIT7rEXBjCZ4V7vNVguQxMtXcbYJRc66d2iC8zkSVq03RooAqJpkpZ7TAwqhtUjKUm4fW4M4wMPk0gK9C3j5849kJeAXMVshFudr%2FTc3qJVK5Kc19pNPDytvlbXy3yPZGsNAtsWrObTC1ZXTHeCppOAS8viDCruMLCBjqkATpQsBR9MUo431BDQwQKgHbhb1G14rkA%2Bpo7YzUlawmVVbigbBYkeQy5GYBijGncavMSccltsSoZYj9KC6cSlNGP6zr6zX3ZVOpa5E3eaRIL3sCQDPzXq%2BU2MTLdghdTGjbP9%2F5WWtESqpV84XNv9AqvUgBk%2B8qf%2BF8Tz3vh3qfqQsCHMowOgSg%2BdoNCcpVZTaV7hTHyQmyfhmomi8ixUuBBYy5F&X-Amz-Signature=8bc7fa187dc48dc03f12c61534f1ce627fb717667aad902a86d63036d6f25e29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZUXWGT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxA191gux3gWrxbYnv6KF97p73EThRHoIkYdllwaixWwIhANXZKBY9w5GzAshC7O9NCKh41S%2BY%2B16nHotVbazZHuLYKv8DCGgQABoMNjM3NDIzMTgzODA1IgyGva7En3Rlss1GMEEq3APsnpA%2Ffnv29REad5JGogS4fgJvZHZlBBjVyxpHtjWRNCayrwKNuzpiCXVWUFusNDbQmhY2pZE3jO5BtGW1gOi1duPkJ0zq8EFoG8HBoVVS431f6T6%2Bff5E1C%2BwJ6B%2FSpW0kknqZD8QnP%2FgabsvH9u2urOd6Y5BIq4AEWNGOpZf2%2B7E3vwzuJKr%2BjZdiqE%2BCh04b9HD%2FZFGNcX%2BT7sbp7Jd3SifjA40F1Tqyy%2FnEOIT1qZgissMa9pzBlxk6ZC0kZvm75aukTltCq7gF8ymckcJ6LeIJXWdJiS3dQpCt0Xemo9XC5PCeNr61l5IjPJ8xg2bC9JfVtUNQeRK%2FXElym545uefh70HktZ%2BvQoT8DB88GNLzdugQjVgl2qc%2Fllau7KySjpKFkhIajcJIXSMmwre8juucOXETK%2F4mVLgfHTvpmZ06vPssS1He%2FolAsU%2FUeRRzRV1snxOymBG20Rtc9pESWgaRYkMFtfIT7rEXBjCZ4V7vNVguQxMtXcbYJRc66d2iC8zkSVq03RooAqJpkpZ7TAwqhtUjKUm4fW4M4wMPk0gK9C3j5849kJeAXMVshFudr%2FTc3qJVK5Kc19pNPDytvlbXy3yPZGsNAtsWrObTC1ZXTHeCppOAS8viDCruMLCBjqkATpQsBR9MUo431BDQwQKgHbhb1G14rkA%2Bpo7YzUlawmVVbigbBYkeQy5GYBijGncavMSccltsSoZYj9KC6cSlNGP6zr6zX3ZVOpa5E3eaRIL3sCQDPzXq%2BU2MTLdghdTGjbP9%2F5WWtESqpV84XNv9AqvUgBk%2B8qf%2BF8Tz3vh3qfqQsCHMowOgSg%2BdoNCcpVZTaV7hTHyQmyfhmomi8ixUuBBYy5F&X-Amz-Signature=ad5db1fbb86ad3ac30f560311862506ea888e471a6e2e94120506415675e5c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663ZUXWGT%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCxA191gux3gWrxbYnv6KF97p73EThRHoIkYdllwaixWwIhANXZKBY9w5GzAshC7O9NCKh41S%2BY%2B16nHotVbazZHuLYKv8DCGgQABoMNjM3NDIzMTgzODA1IgyGva7En3Rlss1GMEEq3APsnpA%2Ffnv29REad5JGogS4fgJvZHZlBBjVyxpHtjWRNCayrwKNuzpiCXVWUFusNDbQmhY2pZE3jO5BtGW1gOi1duPkJ0zq8EFoG8HBoVVS431f6T6%2Bff5E1C%2BwJ6B%2FSpW0kknqZD8QnP%2FgabsvH9u2urOd6Y5BIq4AEWNGOpZf2%2B7E3vwzuJKr%2BjZdiqE%2BCh04b9HD%2FZFGNcX%2BT7sbp7Jd3SifjA40F1Tqyy%2FnEOIT1qZgissMa9pzBlxk6ZC0kZvm75aukTltCq7gF8ymckcJ6LeIJXWdJiS3dQpCt0Xemo9XC5PCeNr61l5IjPJ8xg2bC9JfVtUNQeRK%2FXElym545uefh70HktZ%2BvQoT8DB88GNLzdugQjVgl2qc%2Fllau7KySjpKFkhIajcJIXSMmwre8juucOXETK%2F4mVLgfHTvpmZ06vPssS1He%2FolAsU%2FUeRRzRV1snxOymBG20Rtc9pESWgaRYkMFtfIT7rEXBjCZ4V7vNVguQxMtXcbYJRc66d2iC8zkSVq03RooAqJpkpZ7TAwqhtUjKUm4fW4M4wMPk0gK9C3j5849kJeAXMVshFudr%2FTc3qJVK5Kc19pNPDytvlbXy3yPZGsNAtsWrObTC1ZXTHeCppOAS8viDCruMLCBjqkATpQsBR9MUo431BDQwQKgHbhb1G14rkA%2Bpo7YzUlawmVVbigbBYkeQy5GYBijGncavMSccltsSoZYj9KC6cSlNGP6zr6zX3ZVOpa5E3eaRIL3sCQDPzXq%2BU2MTLdghdTGjbP9%2F5WWtESqpV84XNv9AqvUgBk%2B8qf%2BF8Tz3vh3qfqQsCHMowOgSg%2BdoNCcpVZTaV7hTHyQmyfhmomi8ixUuBBYy5F&X-Amz-Signature=b071ca7f8c4908eb52da5e7fe7d0f712d8535fbc495cf2cd71aa39a6076a7c9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
