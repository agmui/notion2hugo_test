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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOG7HPE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEqPlIedXsWrRjeJkYhYodgXH2VzOSi5nntHpESu1%2FRxAiANOzAJNfuXuyr61DXpmKtQ5EBmjExGxZkSVa4uE%2BrKqCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdhQ%2BE1uJiv4yTT2KtwDtNuTQKnJ%2B4SNwCUZX%2FXuvXxK9KmdnMcvgsCVagavIPwTcSptqoPVWLxLuP%2FF35XjJCZ9z%2B1%2FumrWOfLGZcECAwxwaprVpS4oRqyhjlF56MfqrSdTXxllk2Bc7rOvrAglz9AjuYQ6NBWRgoFoYmW9cDhl1A%2FtT%2Fncze6FTixxdNF61ZEgGOnpStWkT0DcJjf4UIIWipoedYplnt9%2B9N183KCK6%2Fiq4a8IAGVgGeUMeP32RU%2FY99ZULlWYaQo051Rn17pEMIDeTWYeoVXoKfuuld7DxW7M6NorSClVEgclqjoc7ikh%2FeJqeW5A3jt2mNTm1DsXwRhURWSiln31vNLALvoNS9QQdgMve8YFna3BSADOXck8xlkTNTeVtld0LhsEZy5YyGNPyNOrZdjNtnJg80s30JopPOoJWpN4vJPp3Tk8pqVMkXCKIaJVqKxoJjGgIbcxSIK3m2r53pBew6qqALOT007XRmfs4pPrh9xr%2FsF57PEWlz5Z%2BasPGxLnGi%2Fkp8CJhAAWY8wZ%2Bo7ycQ45filqZlhvnjtFud47xBlFlEyOd2xndiEipDk9Zvsmt9BQ0qRHf4WkUmz72hFeU0jvlPp0c5BILDv8BbHCrZ86FcUFHc9fShEna3VshlcwiYLxvwY6pgEEpV5dhnY3U%2Bc%2FEhSYEXUESfi3hyLzTB9nAEbfB85%2BF68JQZNHtBwlMdqIfC1MYQ5OtWlYGf02o7h%2BDtCfNiBt5LxHC72qDVyjCJ4olnWUnGxAVNFu%2F7cjsB8wNaT8Xvd0AN%2B9vLwLW29LBKowrHMStcDZJFnvZsTiQ%2BFxVqu9RDf83PyR4hT7fiN4VE9DX7ANJfrI1yd3Wk2B6rRGBIm0Idk6685G&X-Amz-Signature=2dabe9c24aa9c1e340fea1c3b50fecaec6358fd217210e32259acd0ca58a84c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOG7HPE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEqPlIedXsWrRjeJkYhYodgXH2VzOSi5nntHpESu1%2FRxAiANOzAJNfuXuyr61DXpmKtQ5EBmjExGxZkSVa4uE%2BrKqCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdhQ%2BE1uJiv4yTT2KtwDtNuTQKnJ%2B4SNwCUZX%2FXuvXxK9KmdnMcvgsCVagavIPwTcSptqoPVWLxLuP%2FF35XjJCZ9z%2B1%2FumrWOfLGZcECAwxwaprVpS4oRqyhjlF56MfqrSdTXxllk2Bc7rOvrAglz9AjuYQ6NBWRgoFoYmW9cDhl1A%2FtT%2Fncze6FTixxdNF61ZEgGOnpStWkT0DcJjf4UIIWipoedYplnt9%2B9N183KCK6%2Fiq4a8IAGVgGeUMeP32RU%2FY99ZULlWYaQo051Rn17pEMIDeTWYeoVXoKfuuld7DxW7M6NorSClVEgclqjoc7ikh%2FeJqeW5A3jt2mNTm1DsXwRhURWSiln31vNLALvoNS9QQdgMve8YFna3BSADOXck8xlkTNTeVtld0LhsEZy5YyGNPyNOrZdjNtnJg80s30JopPOoJWpN4vJPp3Tk8pqVMkXCKIaJVqKxoJjGgIbcxSIK3m2r53pBew6qqALOT007XRmfs4pPrh9xr%2FsF57PEWlz5Z%2BasPGxLnGi%2Fkp8CJhAAWY8wZ%2Bo7ycQ45filqZlhvnjtFud47xBlFlEyOd2xndiEipDk9Zvsmt9BQ0qRHf4WkUmz72hFeU0jvlPp0c5BILDv8BbHCrZ86FcUFHc9fShEna3VshlcwiYLxvwY6pgEEpV5dhnY3U%2Bc%2FEhSYEXUESfi3hyLzTB9nAEbfB85%2BF68JQZNHtBwlMdqIfC1MYQ5OtWlYGf02o7h%2BDtCfNiBt5LxHC72qDVyjCJ4olnWUnGxAVNFu%2F7cjsB8wNaT8Xvd0AN%2B9vLwLW29LBKowrHMStcDZJFnvZsTiQ%2BFxVqu9RDf83PyR4hT7fiN4VE9DX7ANJfrI1yd3Wk2B6rRGBIm0Idk6685G&X-Amz-Signature=a7ede8ac6ec55553d360ad96ebbcfc80c29cf2f626c49e75601c389f13c419e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663EOG7HPE%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T004241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIEqPlIedXsWrRjeJkYhYodgXH2VzOSi5nntHpESu1%2FRxAiANOzAJNfuXuyr61DXpmKtQ5EBmjExGxZkSVa4uE%2BrKqCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPdhQ%2BE1uJiv4yTT2KtwDtNuTQKnJ%2B4SNwCUZX%2FXuvXxK9KmdnMcvgsCVagavIPwTcSptqoPVWLxLuP%2FF35XjJCZ9z%2B1%2FumrWOfLGZcECAwxwaprVpS4oRqyhjlF56MfqrSdTXxllk2Bc7rOvrAglz9AjuYQ6NBWRgoFoYmW9cDhl1A%2FtT%2Fncze6FTixxdNF61ZEgGOnpStWkT0DcJjf4UIIWipoedYplnt9%2B9N183KCK6%2Fiq4a8IAGVgGeUMeP32RU%2FY99ZULlWYaQo051Rn17pEMIDeTWYeoVXoKfuuld7DxW7M6NorSClVEgclqjoc7ikh%2FeJqeW5A3jt2mNTm1DsXwRhURWSiln31vNLALvoNS9QQdgMve8YFna3BSADOXck8xlkTNTeVtld0LhsEZy5YyGNPyNOrZdjNtnJg80s30JopPOoJWpN4vJPp3Tk8pqVMkXCKIaJVqKxoJjGgIbcxSIK3m2r53pBew6qqALOT007XRmfs4pPrh9xr%2FsF57PEWlz5Z%2BasPGxLnGi%2Fkp8CJhAAWY8wZ%2Bo7ycQ45filqZlhvnjtFud47xBlFlEyOd2xndiEipDk9Zvsmt9BQ0qRHf4WkUmz72hFeU0jvlPp0c5BILDv8BbHCrZ86FcUFHc9fShEna3VshlcwiYLxvwY6pgEEpV5dhnY3U%2Bc%2FEhSYEXUESfi3hyLzTB9nAEbfB85%2BF68JQZNHtBwlMdqIfC1MYQ5OtWlYGf02o7h%2BDtCfNiBt5LxHC72qDVyjCJ4olnWUnGxAVNFu%2F7cjsB8wNaT8Xvd0AN%2B9vLwLW29LBKowrHMStcDZJFnvZsTiQ%2BFxVqu9RDf83PyR4hT7fiN4VE9DX7ANJfrI1yd3Wk2B6rRGBIm0Idk6685G&X-Amz-Signature=d7e1459b115074db88c6ba40c801467fe7cd37c93f38c3e016a9ef634a178763&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
