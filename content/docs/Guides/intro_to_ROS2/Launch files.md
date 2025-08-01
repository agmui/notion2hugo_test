---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-24T09:49:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-07-24T09:49:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VUPH5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs7Oow%2FgHxRnhDchVJ7qUS7HG1Qm4nHOf%2BMLEeP4iO1AiBqlnOcxe8Gyyj6PrrNvSP5BOdH19O4WDZxdVlg7fPtBiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYM1IPeb9dNtnRJ%2FUKtwDx2r1JcDeP2Vx0oIJbAY4HkPJWVrLomlIpMTE5e2y4RXbSWZDrB%2BavvDOa1GmFf3m6wnv6zRamhGTI4lpAEG%2FF1XjzBBVjPh1dG%2BXLeZwM6q0PDPRXhjoKG2LGgzBDQu7jo7EmEALmNcob3s1jqiI6n6d78nrzLurc0v34xJiF4AVqNH4lks4vDOJnFQCwQGLEX86L4MyJonlOlFF1r6xpzaIC88qgv0o655A1y52oroFKYfoAYhaHRfeZ5Qrct181cScWpund1DdKDWD5F6pK30KWW7R2Keu2wkoOmbKUc3XIdsevS6twsL3JBXZT5%2BXQGF8b49vYxLVpNUkpTkNXethWAR6d5oYLDQzwGrVuVSvo9H%2BMoMN41UYAY0Z%2FBg94yWZTg5ebXmHXZ2WmIYq2n6%2FjtrkU3yj7VYzdo%2BVuakoekoJPvo02P4r%2F3Ahwl0rqT%2BN6BR0pnhg9IwBNyZ6bluWVni5SBc5BpVXmncwKEQ2CBFGnupOZ7n1lrvGTMeR3mCpACs6XPV0VMKga4795BykcXAtA3gXL2rVCPV%2BTT%2FGJhaxHhpVj4Gsc4qZKRCB%2FPDisSIQrS6t4hjWcX05%2BGToxWnDoNbiIF%2BGf%2BfukXqqx6tYubdsCiBobfkw58a0xAY6pgGjoihFGpbEIJhzdbPzneku6LefV4POoEYV2ajRP9lLduOOvlP6K8C1PtQcGCvG95SKjhrbYAbZnpjOdGxo16qhO54PzMFB4azXV97aw3n7l9iFRWdsswCaSS%2FGDyZOPKqmteAQkjuMzKPjYu8jgUsYNFDVOrfs1AfsQ7ilX9yZb05JyFvZHrOO6l2WmVMqW%2BjGXjYRo3tPTk4mIcQbsSyXnNZ1x2eA&X-Amz-Signature=d2963bfb4c1e48cd691c7bb07161b0fb0d85196aadeb4eefafc9390ee3053b4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VUPH5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs7Oow%2FgHxRnhDchVJ7qUS7HG1Qm4nHOf%2BMLEeP4iO1AiBqlnOcxe8Gyyj6PrrNvSP5BOdH19O4WDZxdVlg7fPtBiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYM1IPeb9dNtnRJ%2FUKtwDx2r1JcDeP2Vx0oIJbAY4HkPJWVrLomlIpMTE5e2y4RXbSWZDrB%2BavvDOa1GmFf3m6wnv6zRamhGTI4lpAEG%2FF1XjzBBVjPh1dG%2BXLeZwM6q0PDPRXhjoKG2LGgzBDQu7jo7EmEALmNcob3s1jqiI6n6d78nrzLurc0v34xJiF4AVqNH4lks4vDOJnFQCwQGLEX86L4MyJonlOlFF1r6xpzaIC88qgv0o655A1y52oroFKYfoAYhaHRfeZ5Qrct181cScWpund1DdKDWD5F6pK30KWW7R2Keu2wkoOmbKUc3XIdsevS6twsL3JBXZT5%2BXQGF8b49vYxLVpNUkpTkNXethWAR6d5oYLDQzwGrVuVSvo9H%2BMoMN41UYAY0Z%2FBg94yWZTg5ebXmHXZ2WmIYq2n6%2FjtrkU3yj7VYzdo%2BVuakoekoJPvo02P4r%2F3Ahwl0rqT%2BN6BR0pnhg9IwBNyZ6bluWVni5SBc5BpVXmncwKEQ2CBFGnupOZ7n1lrvGTMeR3mCpACs6XPV0VMKga4795BykcXAtA3gXL2rVCPV%2BTT%2FGJhaxHhpVj4Gsc4qZKRCB%2FPDisSIQrS6t4hjWcX05%2BGToxWnDoNbiIF%2BGf%2BfukXqqx6tYubdsCiBobfkw58a0xAY6pgGjoihFGpbEIJhzdbPzneku6LefV4POoEYV2ajRP9lLduOOvlP6K8C1PtQcGCvG95SKjhrbYAbZnpjOdGxo16qhO54PzMFB4azXV97aw3n7l9iFRWdsswCaSS%2FGDyZOPKqmteAQkjuMzKPjYu8jgUsYNFDVOrfs1AfsQ7ilX9yZb05JyFvZHrOO6l2WmVMqW%2BjGXjYRo3tPTk4mIcQbsSyXnNZ1x2eA&X-Amz-Signature=5f421bb64295f8af23f0685830e7db198738ac13a51b066c06dae3da268de540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6VUPH5J%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs7Oow%2FgHxRnhDchVJ7qUS7HG1Qm4nHOf%2BMLEeP4iO1AiBqlnOcxe8Gyyj6PrrNvSP5BOdH19O4WDZxdVlg7fPtBiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYM1IPeb9dNtnRJ%2FUKtwDx2r1JcDeP2Vx0oIJbAY4HkPJWVrLomlIpMTE5e2y4RXbSWZDrB%2BavvDOa1GmFf3m6wnv6zRamhGTI4lpAEG%2FF1XjzBBVjPh1dG%2BXLeZwM6q0PDPRXhjoKG2LGgzBDQu7jo7EmEALmNcob3s1jqiI6n6d78nrzLurc0v34xJiF4AVqNH4lks4vDOJnFQCwQGLEX86L4MyJonlOlFF1r6xpzaIC88qgv0o655A1y52oroFKYfoAYhaHRfeZ5Qrct181cScWpund1DdKDWD5F6pK30KWW7R2Keu2wkoOmbKUc3XIdsevS6twsL3JBXZT5%2BXQGF8b49vYxLVpNUkpTkNXethWAR6d5oYLDQzwGrVuVSvo9H%2BMoMN41UYAY0Z%2FBg94yWZTg5ebXmHXZ2WmIYq2n6%2FjtrkU3yj7VYzdo%2BVuakoekoJPvo02P4r%2F3Ahwl0rqT%2BN6BR0pnhg9IwBNyZ6bluWVni5SBc5BpVXmncwKEQ2CBFGnupOZ7n1lrvGTMeR3mCpACs6XPV0VMKga4795BykcXAtA3gXL2rVCPV%2BTT%2FGJhaxHhpVj4Gsc4qZKRCB%2FPDisSIQrS6t4hjWcX05%2BGToxWnDoNbiIF%2BGf%2BfukXqqx6tYubdsCiBobfkw58a0xAY6pgGjoihFGpbEIJhzdbPzneku6LefV4POoEYV2ajRP9lLduOOvlP6K8C1PtQcGCvG95SKjhrbYAbZnpjOdGxo16qhO54PzMFB4azXV97aw3n7l9iFRWdsswCaSS%2FGDyZOPKqmteAQkjuMzKPjYu8jgUsYNFDVOrfs1AfsQ7ilX9yZb05JyFvZHrOO6l2WmVMqW%2BjGXjYRo3tPTk4mIcQbsSyXnNZ1x2eA&X-Amz-Signature=5a5b9a31b65f790b182bd8d8f02bd7285871fb242b665f19a382aba134b437f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
