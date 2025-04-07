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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T33SML3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPKTYgNdAGY5fRV%2Ft4eiibh5qIJlIZ70GPBddhKMb7gIhAM%2Flv1y3eYT86A3za0C5ij8HpMaVtU7FB0iyeiwu4JqHKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3rmEzGQg53Tn7%2Bwgq3AM1M01TrY9xaSKciLOVCsHcPnRw7KkunxkdZJ4WbgQue0uzWP75ANQ7p1%2FhAt2QVpBOO%2F%2FowgdoMBdXB37vSJZtNjxP%2B7zOnE2GoqBCg%2B9ywV%2FTEN8mDJgDNKLhzDeU%2Fc8sNvr21Wq9%2F9SCRwBGtpt6liWw%2FUywyfWsoexqU4sRV0Z%2FVq0STRdvCahEKzIgZGPtmHaDwQxmmmMSqA%2FAa4kR5SGAh0EUGab8Dm5yqJz%2BIFF%2BmvhkiG4i%2FElDV%2FXG3fLjJD9h1yXP6PESWExBN0te%2FcFKqT9m6G61v8tl%2BfaA7ZN9Ht8%2Fjq95jpwX6aMDFoahhMAI3N2F11t8CUpdf1ycB8Ti5C3LYb77uyHPLhES%2BHOWUBBxOCm90bf98sN5w5cPVSGwF0C13HycPeaznDCl43s1HB94qZT2GGZBLmoOHE9GVRtQz6SSSvQgx%2BT%2B5y6WZNY%2Fi4Au9p6jCFxuIa2LK2dsI9R1Rg0qg3lwHvGjQ%2F6yJmEOSzLhURyDqCz0Pp3LRD4xFXUCBl0lZUYRdZHsBSJzTRcSiUl7WTsv1mooPLHj88knFgnrxU%2FSzWMH9gXzDb4avTa4cn86iVtd1j1pemOviZgN1QM8dtSWUBEz8A00RKzEKKdUPjGAOzCEtsy%2FBjqkAVCparqrRT8cuZkWIs5eUkui2%2BGqJA7dnICG4kFM3TJZz3NBy9LtQRTzgLnpB55HKXNPJcA8Eijp25QKW9Yi4GoQ5QE5vIWysjLs50VDTOjjeS8qCWXDsKclit4iI%2Bf67SDAK%2FvxCow8XZ6%2BBje9tW8SJTqV1lVd8mLKDp2Tj5t7Cmdw%2FkXf4i5GMXA8Iq7Ec0zHDorx137UnBUTPtgwLj6zavqC&X-Amz-Signature=536db407debbe01dc14ef93de43b6e6632f1a970cfe8b9581aeada126afb7cad&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T33SML3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPKTYgNdAGY5fRV%2Ft4eiibh5qIJlIZ70GPBddhKMb7gIhAM%2Flv1y3eYT86A3za0C5ij8HpMaVtU7FB0iyeiwu4JqHKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3rmEzGQg53Tn7%2Bwgq3AM1M01TrY9xaSKciLOVCsHcPnRw7KkunxkdZJ4WbgQue0uzWP75ANQ7p1%2FhAt2QVpBOO%2F%2FowgdoMBdXB37vSJZtNjxP%2B7zOnE2GoqBCg%2B9ywV%2FTEN8mDJgDNKLhzDeU%2Fc8sNvr21Wq9%2F9SCRwBGtpt6liWw%2FUywyfWsoexqU4sRV0Z%2FVq0STRdvCahEKzIgZGPtmHaDwQxmmmMSqA%2FAa4kR5SGAh0EUGab8Dm5yqJz%2BIFF%2BmvhkiG4i%2FElDV%2FXG3fLjJD9h1yXP6PESWExBN0te%2FcFKqT9m6G61v8tl%2BfaA7ZN9Ht8%2Fjq95jpwX6aMDFoahhMAI3N2F11t8CUpdf1ycB8Ti5C3LYb77uyHPLhES%2BHOWUBBxOCm90bf98sN5w5cPVSGwF0C13HycPeaznDCl43s1HB94qZT2GGZBLmoOHE9GVRtQz6SSSvQgx%2BT%2B5y6WZNY%2Fi4Au9p6jCFxuIa2LK2dsI9R1Rg0qg3lwHvGjQ%2F6yJmEOSzLhURyDqCz0Pp3LRD4xFXUCBl0lZUYRdZHsBSJzTRcSiUl7WTsv1mooPLHj88knFgnrxU%2FSzWMH9gXzDb4avTa4cn86iVtd1j1pemOviZgN1QM8dtSWUBEz8A00RKzEKKdUPjGAOzCEtsy%2FBjqkAVCparqrRT8cuZkWIs5eUkui2%2BGqJA7dnICG4kFM3TJZz3NBy9LtQRTzgLnpB55HKXNPJcA8Eijp25QKW9Yi4GoQ5QE5vIWysjLs50VDTOjjeS8qCWXDsKclit4iI%2Bf67SDAK%2FvxCow8XZ6%2BBje9tW8SJTqV1lVd8mLKDp2Tj5t7Cmdw%2FkXf4i5GMXA8Iq7Ec0zHDorx137UnBUTPtgwLj6zavqC&X-Amz-Signature=6cd70ada6f2531cb64235f272e4edfe2473572250ae21a4d2622481a8a52bb53&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T33SML3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFPKTYgNdAGY5fRV%2Ft4eiibh5qIJlIZ70GPBddhKMb7gIhAM%2Flv1y3eYT86A3za0C5ij8HpMaVtU7FB0iyeiwu4JqHKv8DCFEQABoMNjM3NDIzMTgzODA1Igw3rmEzGQg53Tn7%2Bwgq3AM1M01TrY9xaSKciLOVCsHcPnRw7KkunxkdZJ4WbgQue0uzWP75ANQ7p1%2FhAt2QVpBOO%2F%2FowgdoMBdXB37vSJZtNjxP%2B7zOnE2GoqBCg%2B9ywV%2FTEN8mDJgDNKLhzDeU%2Fc8sNvr21Wq9%2F9SCRwBGtpt6liWw%2FUywyfWsoexqU4sRV0Z%2FVq0STRdvCahEKzIgZGPtmHaDwQxmmmMSqA%2FAa4kR5SGAh0EUGab8Dm5yqJz%2BIFF%2BmvhkiG4i%2FElDV%2FXG3fLjJD9h1yXP6PESWExBN0te%2FcFKqT9m6G61v8tl%2BfaA7ZN9Ht8%2Fjq95jpwX6aMDFoahhMAI3N2F11t8CUpdf1ycB8Ti5C3LYb77uyHPLhES%2BHOWUBBxOCm90bf98sN5w5cPVSGwF0C13HycPeaznDCl43s1HB94qZT2GGZBLmoOHE9GVRtQz6SSSvQgx%2BT%2B5y6WZNY%2Fi4Au9p6jCFxuIa2LK2dsI9R1Rg0qg3lwHvGjQ%2F6yJmEOSzLhURyDqCz0Pp3LRD4xFXUCBl0lZUYRdZHsBSJzTRcSiUl7WTsv1mooPLHj88knFgnrxU%2FSzWMH9gXzDb4avTa4cn86iVtd1j1pemOviZgN1QM8dtSWUBEz8A00RKzEKKdUPjGAOzCEtsy%2FBjqkAVCparqrRT8cuZkWIs5eUkui2%2BGqJA7dnICG4kFM3TJZz3NBy9LtQRTzgLnpB55HKXNPJcA8Eijp25QKW9Yi4GoQ5QE5vIWysjLs50VDTOjjeS8qCWXDsKclit4iI%2Bf67SDAK%2FvxCow8XZ6%2BBje9tW8SJTqV1lVd8mLKDp2Tj5t7Cmdw%2FkXf4i5GMXA8Iq7Ec0zHDorx137UnBUTPtgwLj6zavqC&X-Amz-Signature=6b5cd70dedb8bbb7d3f58ab39d4bfe2fea496b53ccf86fbde1ef1d164fcd2db4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
