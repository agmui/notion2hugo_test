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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPE5TX2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFJrBXtDWyo%2F6aYqg%2FVT9WVzjqusYQpvOcrlmG3bGt8AiEA01RTfzSbWKyhSlpsS%2FgNxbywmgErXKz1FnzWOID66PIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJF747r0sYvpW4U%2FOyrcA24lE8v5GMR0RdGqE0uf%2BGn7b%2FS2cCozRwBWBbWuqMAIXwVFkkCuNaJTxL%2FOPPrVRKh%2F2N%2Fg7tshvIw4nks%2BbPGqCTkZ3FUulooNf460yvLG2o5Ms4vZT5mpx0A3EZV%2BKjuMV%2BgJ1G4QTFO4nB9fwZg%2BKTHL42n6AMvym3%2BKXprJnG5w0Zo99NEoqU9RObkq0Z1%2Be3TMf4xiaF69XzNJskWiGCh0RQhvPAghoFJt%2BNUwnOjDlzSJTGrzo21Hk5PFwS8ERGPyI%2B5HiiV%2FxQ6NcP%2FVkvvHgidRBHVqoUeFknUnhMPOzC6DRGuGAQe1d2qYtqYDHzJ4%2BtOC13PZ8A8TQUQyat%2FGSN2DkhNbokTVhh6Ype1yEAVjAqdZFLQsDoXWvmoLEPkLvWEURZlhc5fSGTNd941mPDV2BN5NRrj4mLMvB3CZJi1vc4QYWpp8okScqiFSWIdyUAooPRYDSWiaaEx0m5Kr9oxqA4JSoQxQr29%2FG9wbFRo%2BsLSlzi9dHoMSKe6iDapORJrY2mx1zF6%2FXMm3g%2FX67%2F1hFWNbaQz4UNGgVAE0TrwQCR2nn71iOZ1QLQ0IATK%2BNUxK1AgjqC5JPHQwj1GdL2vqNwmN3B%2FjHfAfXmu4iWTAo6vDIkKuMMCitcAGOqUBY2on1oXZhaxeaJdMtSDmvDqp93IpF4piROexiJcbpKsCjhbrXQ2Uhjc%2BPP5NCMAENPRFQkxqTt36de0A5sQhz4Sqg6twzBKj6pzEuokDV569EM4s3sp4RYJqN4WVr8yYd5oNZp1JAWDfTivOzVO93hfhW9JUbUMgcAaor4LlmKDiZB7xAOaC4gtW1SHT7fvh7m%2FnvFBlYQYXIIArvaUwFTKB0MeK&X-Amz-Signature=7e1ecc1c56db136fd4be7f9c7f6fd82cbab1185d8920eab8e21fc894cf65050e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPE5TX2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFJrBXtDWyo%2F6aYqg%2FVT9WVzjqusYQpvOcrlmG3bGt8AiEA01RTfzSbWKyhSlpsS%2FgNxbywmgErXKz1FnzWOID66PIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJF747r0sYvpW4U%2FOyrcA24lE8v5GMR0RdGqE0uf%2BGn7b%2FS2cCozRwBWBbWuqMAIXwVFkkCuNaJTxL%2FOPPrVRKh%2F2N%2Fg7tshvIw4nks%2BbPGqCTkZ3FUulooNf460yvLG2o5Ms4vZT5mpx0A3EZV%2BKjuMV%2BgJ1G4QTFO4nB9fwZg%2BKTHL42n6AMvym3%2BKXprJnG5w0Zo99NEoqU9RObkq0Z1%2Be3TMf4xiaF69XzNJskWiGCh0RQhvPAghoFJt%2BNUwnOjDlzSJTGrzo21Hk5PFwS8ERGPyI%2B5HiiV%2FxQ6NcP%2FVkvvHgidRBHVqoUeFknUnhMPOzC6DRGuGAQe1d2qYtqYDHzJ4%2BtOC13PZ8A8TQUQyat%2FGSN2DkhNbokTVhh6Ype1yEAVjAqdZFLQsDoXWvmoLEPkLvWEURZlhc5fSGTNd941mPDV2BN5NRrj4mLMvB3CZJi1vc4QYWpp8okScqiFSWIdyUAooPRYDSWiaaEx0m5Kr9oxqA4JSoQxQr29%2FG9wbFRo%2BsLSlzi9dHoMSKe6iDapORJrY2mx1zF6%2FXMm3g%2FX67%2F1hFWNbaQz4UNGgVAE0TrwQCR2nn71iOZ1QLQ0IATK%2BNUxK1AgjqC5JPHQwj1GdL2vqNwmN3B%2FjHfAfXmu4iWTAo6vDIkKuMMCitcAGOqUBY2on1oXZhaxeaJdMtSDmvDqp93IpF4piROexiJcbpKsCjhbrXQ2Uhjc%2BPP5NCMAENPRFQkxqTt36de0A5sQhz4Sqg6twzBKj6pzEuokDV569EM4s3sp4RYJqN4WVr8yYd5oNZp1JAWDfTivOzVO93hfhW9JUbUMgcAaor4LlmKDiZB7xAOaC4gtW1SHT7fvh7m%2FnvFBlYQYXIIArvaUwFTKB0MeK&X-Amz-Signature=055282ca3aac4190cda0f63684c2bde914724269d448711b39654041151ac1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRPE5TX2%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T220704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFFJrBXtDWyo%2F6aYqg%2FVT9WVzjqusYQpvOcrlmG3bGt8AiEA01RTfzSbWKyhSlpsS%2FgNxbywmgErXKz1FnzWOID66PIq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDJF747r0sYvpW4U%2FOyrcA24lE8v5GMR0RdGqE0uf%2BGn7b%2FS2cCozRwBWBbWuqMAIXwVFkkCuNaJTxL%2FOPPrVRKh%2F2N%2Fg7tshvIw4nks%2BbPGqCTkZ3FUulooNf460yvLG2o5Ms4vZT5mpx0A3EZV%2BKjuMV%2BgJ1G4QTFO4nB9fwZg%2BKTHL42n6AMvym3%2BKXprJnG5w0Zo99NEoqU9RObkq0Z1%2Be3TMf4xiaF69XzNJskWiGCh0RQhvPAghoFJt%2BNUwnOjDlzSJTGrzo21Hk5PFwS8ERGPyI%2B5HiiV%2FxQ6NcP%2FVkvvHgidRBHVqoUeFknUnhMPOzC6DRGuGAQe1d2qYtqYDHzJ4%2BtOC13PZ8A8TQUQyat%2FGSN2DkhNbokTVhh6Ype1yEAVjAqdZFLQsDoXWvmoLEPkLvWEURZlhc5fSGTNd941mPDV2BN5NRrj4mLMvB3CZJi1vc4QYWpp8okScqiFSWIdyUAooPRYDSWiaaEx0m5Kr9oxqA4JSoQxQr29%2FG9wbFRo%2BsLSlzi9dHoMSKe6iDapORJrY2mx1zF6%2FXMm3g%2FX67%2F1hFWNbaQz4UNGgVAE0TrwQCR2nn71iOZ1QLQ0IATK%2BNUxK1AgjqC5JPHQwj1GdL2vqNwmN3B%2FjHfAfXmu4iWTAo6vDIkKuMMCitcAGOqUBY2on1oXZhaxeaJdMtSDmvDqp93IpF4piROexiJcbpKsCjhbrXQ2Uhjc%2BPP5NCMAENPRFQkxqTt36de0A5sQhz4Sqg6twzBKj6pzEuokDV569EM4s3sp4RYJqN4WVr8yYd5oNZp1JAWDfTivOzVO93hfhW9JUbUMgcAaor4LlmKDiZB7xAOaC4gtW1SHT7fvh7m%2FnvFBlYQYXIIArvaUwFTKB0MeK&X-Amz-Signature=440758d0f800179cd10a7464b30d48785c6b78e2aa301d7d2ed357b574213923&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
