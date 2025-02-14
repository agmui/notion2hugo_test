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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZF7ZIEL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDA%2FeDlYJdbmUm6TD%2FmHpbExhuxPVpD9%2Bm57OXKTVeT3QIhALLtewwC0CZ5eJ1qwQa56OSeJ09Pl6ep3cZV4RG%2FHEYaKv8DCCsQABoMNjM3NDIzMTgzODA1Igwwj%2FZ6yVcf19y7%2BZwq3AOCuspAUsKxpSgE5dc3JHNStT7e8YE1HnWyxqO4ZuuMlgxAZ2DCaOA3UmgzvNHyacSrBSwch6kzwWlyHIWZn3GblNrcJkedBlYX4fBdbrieHEL3sjLnP76yoHuPqSMBG%2BR%2F87170UjaeigRGwKvhP%2FdSatfRZQDFc1m8I79vuAxN4ASZv8qeKNX2QsPIaMUtw2yuQBWzjaMeBeGcgTsh8S3FVavlar%2BQOfsYBaC1rse5YRu8w9SPVpEIT%2BSrkwWQypPABN1ivwkGThSnQWDmmHFqdvLSWp14uLK3b2dkeV7%2F4jshEZsUnURZqMKVbvHaCMM4NG%2Bot0vE6KAA7khBfDLF8oqVNGQIOCIUE6Tms%2FBDFEkFqVgwDe%2BxHuD0GQ1lBB2KQpRaI34IFe2M2p%2B45PfRBqaFda69huMxhYFQ0d%2BaZ1zxaChYdl98QhWiF%2FboqWRa02q70gpkYVTnhXFhKL%2BgLoMTg4asagfKjG9QB2wkg0TEzqiTZkgFTl4RuGXMkcms3GjP4gjNbocfSwJUia1i4P%2FsSIYZv8bBeeUFfi%2B8zCsbMSDLYg2HDqwuyyJ5ZcAIxG%2Bm%2Bc1%2FeFVSUCooKE8W7z8u0LIgJMouOGuGwuDoPN7hpuSKtJ3OTDjaTDEsby9BjqkAYhldvLxTh7aGhG15iJU52NfSAFkU7thxpqePPsu0UloQKsWof7hKd69NTMagVd99XL44b0Hy4wRKJgZ4Eou97ebMGIjRl6k3vBzvBUIpjNKvVHae4KenCobGVcT74ba3WOZcTR8VmF8Bp5jZ6wRCoMgW9HGU6piOFk7lgefDnIKF%2FS7Zz6UXjoxZy9YqS%2BRoDGxmrlS994Ym6XEcB%2BwOpZFTSIx&X-Amz-Signature=3db916701062064e722a8e18d79c595255591dfb8ae810c409106e947a8233b6&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZF7ZIEL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDA%2FeDlYJdbmUm6TD%2FmHpbExhuxPVpD9%2Bm57OXKTVeT3QIhALLtewwC0CZ5eJ1qwQa56OSeJ09Pl6ep3cZV4RG%2FHEYaKv8DCCsQABoMNjM3NDIzMTgzODA1Igwwj%2FZ6yVcf19y7%2BZwq3AOCuspAUsKxpSgE5dc3JHNStT7e8YE1HnWyxqO4ZuuMlgxAZ2DCaOA3UmgzvNHyacSrBSwch6kzwWlyHIWZn3GblNrcJkedBlYX4fBdbrieHEL3sjLnP76yoHuPqSMBG%2BR%2F87170UjaeigRGwKvhP%2FdSatfRZQDFc1m8I79vuAxN4ASZv8qeKNX2QsPIaMUtw2yuQBWzjaMeBeGcgTsh8S3FVavlar%2BQOfsYBaC1rse5YRu8w9SPVpEIT%2BSrkwWQypPABN1ivwkGThSnQWDmmHFqdvLSWp14uLK3b2dkeV7%2F4jshEZsUnURZqMKVbvHaCMM4NG%2Bot0vE6KAA7khBfDLF8oqVNGQIOCIUE6Tms%2FBDFEkFqVgwDe%2BxHuD0GQ1lBB2KQpRaI34IFe2M2p%2B45PfRBqaFda69huMxhYFQ0d%2BaZ1zxaChYdl98QhWiF%2FboqWRa02q70gpkYVTnhXFhKL%2BgLoMTg4asagfKjG9QB2wkg0TEzqiTZkgFTl4RuGXMkcms3GjP4gjNbocfSwJUia1i4P%2FsSIYZv8bBeeUFfi%2B8zCsbMSDLYg2HDqwuyyJ5ZcAIxG%2Bm%2Bc1%2FeFVSUCooKE8W7z8u0LIgJMouOGuGwuDoPN7hpuSKtJ3OTDjaTDEsby9BjqkAYhldvLxTh7aGhG15iJU52NfSAFkU7thxpqePPsu0UloQKsWof7hKd69NTMagVd99XL44b0Hy4wRKJgZ4Eou97ebMGIjRl6k3vBzvBUIpjNKvVHae4KenCobGVcT74ba3WOZcTR8VmF8Bp5jZ6wRCoMgW9HGU6piOFk7lgefDnIKF%2FS7Zz6UXjoxZy9YqS%2BRoDGxmrlS994Ym6XEcB%2BwOpZFTSIx&X-Amz-Signature=a46ad04a59c7ffe5f0144b7bdf058c23bc7461f60bc5794c097a7a2122a35ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZF7ZIEL%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T110122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDA%2FeDlYJdbmUm6TD%2FmHpbExhuxPVpD9%2Bm57OXKTVeT3QIhALLtewwC0CZ5eJ1qwQa56OSeJ09Pl6ep3cZV4RG%2FHEYaKv8DCCsQABoMNjM3NDIzMTgzODA1Igwwj%2FZ6yVcf19y7%2BZwq3AOCuspAUsKxpSgE5dc3JHNStT7e8YE1HnWyxqO4ZuuMlgxAZ2DCaOA3UmgzvNHyacSrBSwch6kzwWlyHIWZn3GblNrcJkedBlYX4fBdbrieHEL3sjLnP76yoHuPqSMBG%2BR%2F87170UjaeigRGwKvhP%2FdSatfRZQDFc1m8I79vuAxN4ASZv8qeKNX2QsPIaMUtw2yuQBWzjaMeBeGcgTsh8S3FVavlar%2BQOfsYBaC1rse5YRu8w9SPVpEIT%2BSrkwWQypPABN1ivwkGThSnQWDmmHFqdvLSWp14uLK3b2dkeV7%2F4jshEZsUnURZqMKVbvHaCMM4NG%2Bot0vE6KAA7khBfDLF8oqVNGQIOCIUE6Tms%2FBDFEkFqVgwDe%2BxHuD0GQ1lBB2KQpRaI34IFe2M2p%2B45PfRBqaFda69huMxhYFQ0d%2BaZ1zxaChYdl98QhWiF%2FboqWRa02q70gpkYVTnhXFhKL%2BgLoMTg4asagfKjG9QB2wkg0TEzqiTZkgFTl4RuGXMkcms3GjP4gjNbocfSwJUia1i4P%2FsSIYZv8bBeeUFfi%2B8zCsbMSDLYg2HDqwuyyJ5ZcAIxG%2Bm%2Bc1%2FeFVSUCooKE8W7z8u0LIgJMouOGuGwuDoPN7hpuSKtJ3OTDjaTDEsby9BjqkAYhldvLxTh7aGhG15iJU52NfSAFkU7thxpqePPsu0UloQKsWof7hKd69NTMagVd99XL44b0Hy4wRKJgZ4Eou97ebMGIjRl6k3vBzvBUIpjNKvVHae4KenCobGVcT74ba3WOZcTR8VmF8Bp5jZ6wRCoMgW9HGU6piOFk7lgefDnIKF%2FS7Zz6UXjoxZy9YqS%2BRoDGxmrlS994Ym6XEcB%2BwOpZFTSIx&X-Amz-Signature=2aea17eb9f248491fa07238b8659f4b60223f9b27e33788a4a829932c937abdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
