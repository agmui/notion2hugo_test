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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UFR5UA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdso%2BeAsiM7ZZnn4OMie08eqTGH2wMFHTc5nqHBtL6JgIgJg1zQ%2FMpVScnb%2FDsmYtlAej2ykWcWTzpue3GsJeiH4Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA9nM8yfp48UH2Mg5yrcA09mm79ieRSY4b1AeuXvd8OavqMJZvYhW0uwix%2FgHiTt623hgpADg1L%2FrH6iUjhc3tiGNf9ZVMF1LoDcmRqy%2BubC8xUYS%2BaUHWu7v5jEnOJDSRgKSYmjj17jZtGjQZ%2BZB7et42ucJV3Q7uArI37sP5U97BXVviY5yGCDzfdvF1LYEF%2BXVhYlKnQtW8mh2DWvPZrmAtQUCKFTBaKJMzO%2FjeqSCSk3AqgvRRIaamPfX%2B%2FAsOLLqCWej1izrCGdsarH73k0XHR4%2F1s%2BZE%2FfMeiTLvBgfMOKs3SFR2bifMpsSW5BYUowvnQk6Si%2BOS4V5%2FGfcWrod1W4ThMgMASrXmNEjbmdX4xpA0m%2F1t4%2B9HnFxg%2FpipSprZZ4yGxGt%2FBN%2F7qE8EcEKuhJCKP3KDCD4BdH33GVRke2EyhFyxIegw8v4NIn9iiU5pOiKmmyZfqttiEUwbkB%2BCV%2B3Dug60fGRNimoC3g96rJEekPKXhafKrVLhGPl%2B7VZouZuV3cUJEbRB%2FS1FLAB8Fo%2FzLKgmT6RRht5cGoAdKoSoytEt7mdIEUnHetoLa1JYhKmuF5MYCRdtlF8YkVm%2BhrJUFajEFLTSGB4fj2eF9PNChlqr4U1hnsMsJwyArcU24ZcSJSkLBpMLPB4r4GOqUBPZj7tBPdBkc0uXhgdNrkauIvdyIuFXnKi9qXAgwHZId%2FLmNQ%2B%2BViTeX4soGk5mRNusqXi6tp8sGb2Zc9T3be4uWrF0zXL4IABkE7GuiWliVW12PKsHi%2BAHvGu%2Fl71pydMiCF9zO3675Ve57e2CpQDSyn7Fdntn%2BUJGzZpP%2FhehPRKLnZ8thuwplKsl%2B2cwCshu8FDjwKLT%2Fb0pOnR%2BpxlXKCSWx5&X-Amz-Signature=dae5a9130547aeeeaa0dad0c162fdbc5454ee1d9a4344cfbe5b35fd13793bcc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UFR5UA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdso%2BeAsiM7ZZnn4OMie08eqTGH2wMFHTc5nqHBtL6JgIgJg1zQ%2FMpVScnb%2FDsmYtlAej2ykWcWTzpue3GsJeiH4Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA9nM8yfp48UH2Mg5yrcA09mm79ieRSY4b1AeuXvd8OavqMJZvYhW0uwix%2FgHiTt623hgpADg1L%2FrH6iUjhc3tiGNf9ZVMF1LoDcmRqy%2BubC8xUYS%2BaUHWu7v5jEnOJDSRgKSYmjj17jZtGjQZ%2BZB7et42ucJV3Q7uArI37sP5U97BXVviY5yGCDzfdvF1LYEF%2BXVhYlKnQtW8mh2DWvPZrmAtQUCKFTBaKJMzO%2FjeqSCSk3AqgvRRIaamPfX%2B%2FAsOLLqCWej1izrCGdsarH73k0XHR4%2F1s%2BZE%2FfMeiTLvBgfMOKs3SFR2bifMpsSW5BYUowvnQk6Si%2BOS4V5%2FGfcWrod1W4ThMgMASrXmNEjbmdX4xpA0m%2F1t4%2B9HnFxg%2FpipSprZZ4yGxGt%2FBN%2F7qE8EcEKuhJCKP3KDCD4BdH33GVRke2EyhFyxIegw8v4NIn9iiU5pOiKmmyZfqttiEUwbkB%2BCV%2B3Dug60fGRNimoC3g96rJEekPKXhafKrVLhGPl%2B7VZouZuV3cUJEbRB%2FS1FLAB8Fo%2FzLKgmT6RRht5cGoAdKoSoytEt7mdIEUnHetoLa1JYhKmuF5MYCRdtlF8YkVm%2BhrJUFajEFLTSGB4fj2eF9PNChlqr4U1hnsMsJwyArcU24ZcSJSkLBpMLPB4r4GOqUBPZj7tBPdBkc0uXhgdNrkauIvdyIuFXnKi9qXAgwHZId%2FLmNQ%2B%2BViTeX4soGk5mRNusqXi6tp8sGb2Zc9T3be4uWrF0zXL4IABkE7GuiWliVW12PKsHi%2BAHvGu%2Fl71pydMiCF9zO3675Ve57e2CpQDSyn7Fdntn%2BUJGzZpP%2FhehPRKLnZ8thuwplKsl%2B2cwCshu8FDjwKLT%2Fb0pOnR%2BpxlXKCSWx5&X-Amz-Signature=017eac1e49c72b689e10862a5328b6a016d22b7f2d26db785cd9178be46ecc40&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664UFR5UA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T230749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdso%2BeAsiM7ZZnn4OMie08eqTGH2wMFHTc5nqHBtL6JgIgJg1zQ%2FMpVScnb%2FDsmYtlAej2ykWcWTzpue3GsJeiH4Yq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDA9nM8yfp48UH2Mg5yrcA09mm79ieRSY4b1AeuXvd8OavqMJZvYhW0uwix%2FgHiTt623hgpADg1L%2FrH6iUjhc3tiGNf9ZVMF1LoDcmRqy%2BubC8xUYS%2BaUHWu7v5jEnOJDSRgKSYmjj17jZtGjQZ%2BZB7et42ucJV3Q7uArI37sP5U97BXVviY5yGCDzfdvF1LYEF%2BXVhYlKnQtW8mh2DWvPZrmAtQUCKFTBaKJMzO%2FjeqSCSk3AqgvRRIaamPfX%2B%2FAsOLLqCWej1izrCGdsarH73k0XHR4%2F1s%2BZE%2FfMeiTLvBgfMOKs3SFR2bifMpsSW5BYUowvnQk6Si%2BOS4V5%2FGfcWrod1W4ThMgMASrXmNEjbmdX4xpA0m%2F1t4%2B9HnFxg%2FpipSprZZ4yGxGt%2FBN%2F7qE8EcEKuhJCKP3KDCD4BdH33GVRke2EyhFyxIegw8v4NIn9iiU5pOiKmmyZfqttiEUwbkB%2BCV%2B3Dug60fGRNimoC3g96rJEekPKXhafKrVLhGPl%2B7VZouZuV3cUJEbRB%2FS1FLAB8Fo%2FzLKgmT6RRht5cGoAdKoSoytEt7mdIEUnHetoLa1JYhKmuF5MYCRdtlF8YkVm%2BhrJUFajEFLTSGB4fj2eF9PNChlqr4U1hnsMsJwyArcU24ZcSJSkLBpMLPB4r4GOqUBPZj7tBPdBkc0uXhgdNrkauIvdyIuFXnKi9qXAgwHZId%2FLmNQ%2B%2BViTeX4soGk5mRNusqXi6tp8sGb2Zc9T3be4uWrF0zXL4IABkE7GuiWliVW12PKsHi%2BAHvGu%2Fl71pydMiCF9zO3675Ve57e2CpQDSyn7Fdntn%2BUJGzZpP%2FhehPRKLnZ8thuwplKsl%2B2cwCshu8FDjwKLT%2Fb0pOnR%2BpxlXKCSWx5&X-Amz-Signature=93ffbfee2ee1c0bcab1267834cf4bb0ff3016296747d5b468e2e77098dc6b95b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
