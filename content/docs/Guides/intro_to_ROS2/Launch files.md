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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDHREXQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSawKGP2QS3pusEKBRJG1n5ECnbSmCKyQ9x6RYR5A6iAiEA5Ofd%2FMRIWzdJumCEGKe5Utrj19v2PY74tGe5p1DFY5wqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGv0cwPNAZvAkFJWircA7EgutfXOfqS1ILbJNLhgNAfVIuPc9gIdc%2Bzn5jj0Wh2q%2FOWvKZTwsqjQuOc%2Bu2e5chcUSJl9sgsteZ1dzJ06UWB52blaiwQroLk%2Bh2XHjOysiA4LIQBwpK%2ByIoyujnjU2GA1%2FVd2v8gTKOtUH2FwWis%2FCEYMaFzkZgFJlwhA3JAkA1Rk7hMEBYF%2B5LtDcr8Qa2Z0IRTkJBgfXR7lWhjtNCdc5bw9jIUYE1A1nygWHnNPhhlnWuYc%2Fb24veOdl5xpy%2BYV03y8iwlLsCaauabD3Aob9xXJJwxN0%2F3qoFFWWaLS7aYyl1r21zMQgnh%2BCLLCYXbHiK2ATGeF506DMsL1vLEnVEMH3IjcWzaIhCfekqk5LJmPIsh2OhRWjeCoFfwBe0Vs%2BrfMAi7Za2sQ0mw8Vz7lLHcWX%2F5WextQ0D5VHOb7euLxHLiZT3ywEPM8nTkJTCyE3t18MUZq5df30yf9JUzfS8VQd9zzfuYpX1YOHU6w5ZHx9J4r1GCgThjSfPC2JnN%2Bceg1mIza13qUSIeeKUzGQevlT1FOShHSR6CbwndI8V2lCVGViEOEWGPke5ahKOs7aNKPduiaD2I8EHsHAeAW9Czsim18FP2Q7fEbbOEtlgAOV0KXFYFnWmCMOSusr0GOqUBJgSzCdzFfMf9qq0oxj9V1q4nA6YbrbI6RTaCOTnzfawEbPdTcxOmmBABpOtIuIAxc4QcvE6hrZBn7DOur%2BiIinZUTi19eiomkWc%2BvvriKqW%2FHYx0SZMLq9OuAUG4jEbhww%2BHLnHQrhNoTrgV%2Bx1Nma3BftWWStuHjjbgjWO0m%2FrPLFLuzv7MAo0xgSflZgzST4D9uLQMqohfKC6EBMIWqCVoq3hr&X-Amz-Signature=af417fe1c82a6abeae5d3b03951b1e998c2794c945a2cc4f5046fed28cbd99a8&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDHREXQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSawKGP2QS3pusEKBRJG1n5ECnbSmCKyQ9x6RYR5A6iAiEA5Ofd%2FMRIWzdJumCEGKe5Utrj19v2PY74tGe5p1DFY5wqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGv0cwPNAZvAkFJWircA7EgutfXOfqS1ILbJNLhgNAfVIuPc9gIdc%2Bzn5jj0Wh2q%2FOWvKZTwsqjQuOc%2Bu2e5chcUSJl9sgsteZ1dzJ06UWB52blaiwQroLk%2Bh2XHjOysiA4LIQBwpK%2ByIoyujnjU2GA1%2FVd2v8gTKOtUH2FwWis%2FCEYMaFzkZgFJlwhA3JAkA1Rk7hMEBYF%2B5LtDcr8Qa2Z0IRTkJBgfXR7lWhjtNCdc5bw9jIUYE1A1nygWHnNPhhlnWuYc%2Fb24veOdl5xpy%2BYV03y8iwlLsCaauabD3Aob9xXJJwxN0%2F3qoFFWWaLS7aYyl1r21zMQgnh%2BCLLCYXbHiK2ATGeF506DMsL1vLEnVEMH3IjcWzaIhCfekqk5LJmPIsh2OhRWjeCoFfwBe0Vs%2BrfMAi7Za2sQ0mw8Vz7lLHcWX%2F5WextQ0D5VHOb7euLxHLiZT3ywEPM8nTkJTCyE3t18MUZq5df30yf9JUzfS8VQd9zzfuYpX1YOHU6w5ZHx9J4r1GCgThjSfPC2JnN%2Bceg1mIza13qUSIeeKUzGQevlT1FOShHSR6CbwndI8V2lCVGViEOEWGPke5ahKOs7aNKPduiaD2I8EHsHAeAW9Czsim18FP2Q7fEbbOEtlgAOV0KXFYFnWmCMOSusr0GOqUBJgSzCdzFfMf9qq0oxj9V1q4nA6YbrbI6RTaCOTnzfawEbPdTcxOmmBABpOtIuIAxc4QcvE6hrZBn7DOur%2BiIinZUTi19eiomkWc%2BvvriKqW%2FHYx0SZMLq9OuAUG4jEbhww%2BHLnHQrhNoTrgV%2Bx1Nma3BftWWStuHjjbgjWO0m%2FrPLFLuzv7MAo0xgSflZgzST4D9uLQMqohfKC6EBMIWqCVoq3hr&X-Amz-Signature=3dbe26b16eebc648b4abb90062e5509d1e5a6f24e06722be8c072187e17b9940&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RDHREXQ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDSawKGP2QS3pusEKBRJG1n5ECnbSmCKyQ9x6RYR5A6iAiEA5Ofd%2FMRIWzdJumCEGKe5Utrj19v2PY74tGe5p1DFY5wqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEGv0cwPNAZvAkFJWircA7EgutfXOfqS1ILbJNLhgNAfVIuPc9gIdc%2Bzn5jj0Wh2q%2FOWvKZTwsqjQuOc%2Bu2e5chcUSJl9sgsteZ1dzJ06UWB52blaiwQroLk%2Bh2XHjOysiA4LIQBwpK%2ByIoyujnjU2GA1%2FVd2v8gTKOtUH2FwWis%2FCEYMaFzkZgFJlwhA3JAkA1Rk7hMEBYF%2B5LtDcr8Qa2Z0IRTkJBgfXR7lWhjtNCdc5bw9jIUYE1A1nygWHnNPhhlnWuYc%2Fb24veOdl5xpy%2BYV03y8iwlLsCaauabD3Aob9xXJJwxN0%2F3qoFFWWaLS7aYyl1r21zMQgnh%2BCLLCYXbHiK2ATGeF506DMsL1vLEnVEMH3IjcWzaIhCfekqk5LJmPIsh2OhRWjeCoFfwBe0Vs%2BrfMAi7Za2sQ0mw8Vz7lLHcWX%2F5WextQ0D5VHOb7euLxHLiZT3ywEPM8nTkJTCyE3t18MUZq5df30yf9JUzfS8VQd9zzfuYpX1YOHU6w5ZHx9J4r1GCgThjSfPC2JnN%2Bceg1mIza13qUSIeeKUzGQevlT1FOShHSR6CbwndI8V2lCVGViEOEWGPke5ahKOs7aNKPduiaD2I8EHsHAeAW9Czsim18FP2Q7fEbbOEtlgAOV0KXFYFnWmCMOSusr0GOqUBJgSzCdzFfMf9qq0oxj9V1q4nA6YbrbI6RTaCOTnzfawEbPdTcxOmmBABpOtIuIAxc4QcvE6hrZBn7DOur%2BiIinZUTi19eiomkWc%2BvvriKqW%2FHYx0SZMLq9OuAUG4jEbhww%2BHLnHQrhNoTrgV%2Bx1Nma3BftWWStuHjjbgjWO0m%2FrPLFLuzv7MAo0xgSflZgzST4D9uLQMqohfKC6EBMIWqCVoq3hr&X-Amz-Signature=bb3666e04906480234a3701f587f734b12dd640a32d840408880b5b935c5ba21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
