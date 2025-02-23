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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMI5KLI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27sDyhJJiWcHtX3210emP15N8hozpkY6P9oyQH1DzzQIgHapBE3nZzCgEuRDcnbO1NIlNACkjDY4va53aBJVHi%2B0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDGgD51vb0LWHh7rwyrcA4HfAreH%2F8yEkYCnuIGyAmA0G7yBocvKWGT91c12e54qbZtjHo1v1blFP4gic3Jb1vc3qUS5SwomW6UTSkoiYDLtg1ErtUjoFXqZX0uTiN%2BGg8MZ%2BLg1LYuacQF%2BKEeiaTuqov2d%2BiCBYOyTjLeY3Csfq3s6286E8tIUh1FToz4wbDZLQn91FxJReq3uTutl8zkKwP%2FtvdOj4UepAPQvsTF%2Fcw3w8Ife9VhlxZUXN1mleQmdnw8%2FWuaNIihmnFuUr52jHSPyfBuPprErEScmuv3p4JW6bwemamW9lOtqsBPmxqUbrt7TkfWlBIL5F9aumWTehopY4H4WRR0h3hMfA5G9FHXLBjepdMSotWQNg49gdu%2Bgmj3xyFi1bPncPbrf6yNJWnY8cbGlCajgZhcgl1lOTF2HA2pMYD5e2nuVjCsaZTBGc3dS%2B%2BhZvmB%2BB5vIu46ZWg%2FreHpzYyVuzL%2BN2jJ06aXUAOZK%2F61ZL1mJLdtIDj8DwEo7gn%2BO9WJFrrz7hztjYz9%2FGevQglkWNQDDFNxvbg9z3GzBm8ByAUs02PTcKwLXwWSK%2B79NIaffV5CPxhBY64Wa2VHPSf9atAnRSa%2FwHkd0v8Iy9PtGqqWAgDNs2TJyNUCeOADZq2CqMNqA7b0GOqUBvjCEu0xlAxUAtNd0WC3P1sSMgMni2hzAhYGk6uwF43roBCzdyZCasIOyk34MTuSBClt0zzohvcbXZeLHeheE8FduV5S%2BWWP0gt4dCF0rKDvdbLfMHPLE0M8Cx6wldcunGF4HxqQzz%2BjTNRNHPkdS9pz0VOPCrrw3zDKqRiBCNRU3kkQWkkisKAAw2I8muHuV3nrBEdn8tfxdi0HbUMnd7v6h1qR0&X-Amz-Signature=6deafa0e16183575381cb0f1b2e87d600d26fbe000481680e372d42920e584bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMI5KLI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27sDyhJJiWcHtX3210emP15N8hozpkY6P9oyQH1DzzQIgHapBE3nZzCgEuRDcnbO1NIlNACkjDY4va53aBJVHi%2B0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDGgD51vb0LWHh7rwyrcA4HfAreH%2F8yEkYCnuIGyAmA0G7yBocvKWGT91c12e54qbZtjHo1v1blFP4gic3Jb1vc3qUS5SwomW6UTSkoiYDLtg1ErtUjoFXqZX0uTiN%2BGg8MZ%2BLg1LYuacQF%2BKEeiaTuqov2d%2BiCBYOyTjLeY3Csfq3s6286E8tIUh1FToz4wbDZLQn91FxJReq3uTutl8zkKwP%2FtvdOj4UepAPQvsTF%2Fcw3w8Ife9VhlxZUXN1mleQmdnw8%2FWuaNIihmnFuUr52jHSPyfBuPprErEScmuv3p4JW6bwemamW9lOtqsBPmxqUbrt7TkfWlBIL5F9aumWTehopY4H4WRR0h3hMfA5G9FHXLBjepdMSotWQNg49gdu%2Bgmj3xyFi1bPncPbrf6yNJWnY8cbGlCajgZhcgl1lOTF2HA2pMYD5e2nuVjCsaZTBGc3dS%2B%2BhZvmB%2BB5vIu46ZWg%2FreHpzYyVuzL%2BN2jJ06aXUAOZK%2F61ZL1mJLdtIDj8DwEo7gn%2BO9WJFrrz7hztjYz9%2FGevQglkWNQDDFNxvbg9z3GzBm8ByAUs02PTcKwLXwWSK%2B79NIaffV5CPxhBY64Wa2VHPSf9atAnRSa%2FwHkd0v8Iy9PtGqqWAgDNs2TJyNUCeOADZq2CqMNqA7b0GOqUBvjCEu0xlAxUAtNd0WC3P1sSMgMni2hzAhYGk6uwF43roBCzdyZCasIOyk34MTuSBClt0zzohvcbXZeLHeheE8FduV5S%2BWWP0gt4dCF0rKDvdbLfMHPLE0M8Cx6wldcunGF4HxqQzz%2BjTNRNHPkdS9pz0VOPCrrw3zDKqRiBCNRU3kkQWkkisKAAw2I8muHuV3nrBEdn8tfxdi0HbUMnd7v6h1qR0&X-Amz-Signature=4638f837d45b826791b310ea096229b319cac2bccccb2fd7bf1a5b194829105d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVMI5KLI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC27sDyhJJiWcHtX3210emP15N8hozpkY6P9oyQH1DzzQIgHapBE3nZzCgEuRDcnbO1NIlNACkjDY4va53aBJVHi%2B0q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDDGgD51vb0LWHh7rwyrcA4HfAreH%2F8yEkYCnuIGyAmA0G7yBocvKWGT91c12e54qbZtjHo1v1blFP4gic3Jb1vc3qUS5SwomW6UTSkoiYDLtg1ErtUjoFXqZX0uTiN%2BGg8MZ%2BLg1LYuacQF%2BKEeiaTuqov2d%2BiCBYOyTjLeY3Csfq3s6286E8tIUh1FToz4wbDZLQn91FxJReq3uTutl8zkKwP%2FtvdOj4UepAPQvsTF%2Fcw3w8Ife9VhlxZUXN1mleQmdnw8%2FWuaNIihmnFuUr52jHSPyfBuPprErEScmuv3p4JW6bwemamW9lOtqsBPmxqUbrt7TkfWlBIL5F9aumWTehopY4H4WRR0h3hMfA5G9FHXLBjepdMSotWQNg49gdu%2Bgmj3xyFi1bPncPbrf6yNJWnY8cbGlCajgZhcgl1lOTF2HA2pMYD5e2nuVjCsaZTBGc3dS%2B%2BhZvmB%2BB5vIu46ZWg%2FreHpzYyVuzL%2BN2jJ06aXUAOZK%2F61ZL1mJLdtIDj8DwEo7gn%2BO9WJFrrz7hztjYz9%2FGevQglkWNQDDFNxvbg9z3GzBm8ByAUs02PTcKwLXwWSK%2B79NIaffV5CPxhBY64Wa2VHPSf9atAnRSa%2FwHkd0v8Iy9PtGqqWAgDNs2TJyNUCeOADZq2CqMNqA7b0GOqUBvjCEu0xlAxUAtNd0WC3P1sSMgMni2hzAhYGk6uwF43roBCzdyZCasIOyk34MTuSBClt0zzohvcbXZeLHeheE8FduV5S%2BWWP0gt4dCF0rKDvdbLfMHPLE0M8Cx6wldcunGF4HxqQzz%2BjTNRNHPkdS9pz0VOPCrrw3zDKqRiBCNRU3kkQWkkisKAAw2I8muHuV3nrBEdn8tfxdi0HbUMnd7v6h1qR0&X-Amz-Signature=bd035fb29095b2788710e2597c6a75b8baaff314e2f527dfd314012b8fffa76c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
