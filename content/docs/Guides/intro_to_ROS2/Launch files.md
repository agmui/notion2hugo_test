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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMDZRCP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPdhOtzgEu%2Fhueq78ZbdNwZQdnLCvfGzJTJzqBZK2swIgB9z0oht5YxZDfBItvXTR3qM5QNWZQYg%2B1IX9q8KisCQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCyscFzNQE0n5V784CrcA1y8hJ%2Fz5d4YmqZ99BtIX2rszcLMd8m9wbMMVVDqRwjtdzaKR1sL6jW3e5vh08XoI3BXenOIOn7xWdBpstgnXRBDmHAUC%2BkfoO6m17XyNjg5s7ycwQcoi7aOWyXlYhnRfsRsODk%2BmlPG4Za5Qes8ziXakcoglExMfriBEyQ%2BwCGMPcEdG5MfdVp%2BJU1Zk4dN5%2BQT6nOYdSCqN6f0zInpuxTxF%2BR1HR4hKxZ1IM5rm4DkP4gQtZ%2FxY%2B8EYkzUb0qJS1pqLDS%2FTfKF%2BYfq1E4q%2FtGIhxwYvXxcCkYy8l0Xf85CTZpyBJmRD2XpnaZRboLwnF7Y2IRN8HTlEFev9U92K3l%2BOL%2BE3LFoRM8WAHLjv1AxoX8UzRHtIq2%2BBUJKPxeYzU1UVD8%2BhlF5P1dbwicPtloz%2BNSc%2F5PibSvjDvMtGlmqASuB%2Bc1QlpFR%2FVv9SRfFyIBsZi8k%2F7Tg8xoGytVaBQG%2Bl0WmMsEdae4lrDY87Lo%2BuU0B6Jg7v21SLAdnUqItd7I%2B%2B%2FTr8yn8beocuvFh2eYLjebNeVE664UIWmmYONqMa6te%2FDQJElEKuCLioKsKyUT955sY0MKRh03XqvT9mEZ%2FFIN8FaZgsMjOPu3AsI%2F7G4DAeqnEBH67vF1yMIyJ670GOqUBp3gZ%2BKQHvPuGwta%2FXQ2ImnV4mn48%2FFbHJYKK0vXJM9ipiydM7Wlz%2FIx7q1dbNAjJS1YCFD4xSEjTy0UhbS5fU2bjLF7a%2F2RgTVP%2Fn1%2FNXpQSw%2BZwGz%2BbOyinAsVQhyJQAOLDPhIQuYQ25Suvr97YBFPOtJ9ke0JcThQBejvwJNP3DfioFrx8ViKRsWpiVCdNLiN9srbR8Q95IYZF9ryavM%2BvttH6&X-Amz-Signature=891d57612bc4d775ba1921985603e0eda3b7d7a968eb087bf6f8420d0a499695&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMDZRCP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPdhOtzgEu%2Fhueq78ZbdNwZQdnLCvfGzJTJzqBZK2swIgB9z0oht5YxZDfBItvXTR3qM5QNWZQYg%2B1IX9q8KisCQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCyscFzNQE0n5V784CrcA1y8hJ%2Fz5d4YmqZ99BtIX2rszcLMd8m9wbMMVVDqRwjtdzaKR1sL6jW3e5vh08XoI3BXenOIOn7xWdBpstgnXRBDmHAUC%2BkfoO6m17XyNjg5s7ycwQcoi7aOWyXlYhnRfsRsODk%2BmlPG4Za5Qes8ziXakcoglExMfriBEyQ%2BwCGMPcEdG5MfdVp%2BJU1Zk4dN5%2BQT6nOYdSCqN6f0zInpuxTxF%2BR1HR4hKxZ1IM5rm4DkP4gQtZ%2FxY%2B8EYkzUb0qJS1pqLDS%2FTfKF%2BYfq1E4q%2FtGIhxwYvXxcCkYy8l0Xf85CTZpyBJmRD2XpnaZRboLwnF7Y2IRN8HTlEFev9U92K3l%2BOL%2BE3LFoRM8WAHLjv1AxoX8UzRHtIq2%2BBUJKPxeYzU1UVD8%2BhlF5P1dbwicPtloz%2BNSc%2F5PibSvjDvMtGlmqASuB%2Bc1QlpFR%2FVv9SRfFyIBsZi8k%2F7Tg8xoGytVaBQG%2Bl0WmMsEdae4lrDY87Lo%2BuU0B6Jg7v21SLAdnUqItd7I%2B%2B%2FTr8yn8beocuvFh2eYLjebNeVE664UIWmmYONqMa6te%2FDQJElEKuCLioKsKyUT955sY0MKRh03XqvT9mEZ%2FFIN8FaZgsMjOPu3AsI%2F7G4DAeqnEBH67vF1yMIyJ670GOqUBp3gZ%2BKQHvPuGwta%2FXQ2ImnV4mn48%2FFbHJYKK0vXJM9ipiydM7Wlz%2FIx7q1dbNAjJS1YCFD4xSEjTy0UhbS5fU2bjLF7a%2F2RgTVP%2Fn1%2FNXpQSw%2BZwGz%2BbOyinAsVQhyJQAOLDPhIQuYQ25Suvr97YBFPOtJ9ke0JcThQBejvwJNP3DfioFrx8ViKRsWpiVCdNLiN9srbR8Q95IYZF9ryavM%2BvttH6&X-Amz-Signature=fb7dd843931acc4c4109a7dc4ed826b66966400f275020b1f16faeddf949571b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VMDZRCP%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T080944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXPdhOtzgEu%2Fhueq78ZbdNwZQdnLCvfGzJTJzqBZK2swIgB9z0oht5YxZDfBItvXTR3qM5QNWZQYg%2B1IX9q8KisCQq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDCyscFzNQE0n5V784CrcA1y8hJ%2Fz5d4YmqZ99BtIX2rszcLMd8m9wbMMVVDqRwjtdzaKR1sL6jW3e5vh08XoI3BXenOIOn7xWdBpstgnXRBDmHAUC%2BkfoO6m17XyNjg5s7ycwQcoi7aOWyXlYhnRfsRsODk%2BmlPG4Za5Qes8ziXakcoglExMfriBEyQ%2BwCGMPcEdG5MfdVp%2BJU1Zk4dN5%2BQT6nOYdSCqN6f0zInpuxTxF%2BR1HR4hKxZ1IM5rm4DkP4gQtZ%2FxY%2B8EYkzUb0qJS1pqLDS%2FTfKF%2BYfq1E4q%2FtGIhxwYvXxcCkYy8l0Xf85CTZpyBJmRD2XpnaZRboLwnF7Y2IRN8HTlEFev9U92K3l%2BOL%2BE3LFoRM8WAHLjv1AxoX8UzRHtIq2%2BBUJKPxeYzU1UVD8%2BhlF5P1dbwicPtloz%2BNSc%2F5PibSvjDvMtGlmqASuB%2Bc1QlpFR%2FVv9SRfFyIBsZi8k%2F7Tg8xoGytVaBQG%2Bl0WmMsEdae4lrDY87Lo%2BuU0B6Jg7v21SLAdnUqItd7I%2B%2B%2FTr8yn8beocuvFh2eYLjebNeVE664UIWmmYONqMa6te%2FDQJElEKuCLioKsKyUT955sY0MKRh03XqvT9mEZ%2FFIN8FaZgsMjOPu3AsI%2F7G4DAeqnEBH67vF1yMIyJ670GOqUBp3gZ%2BKQHvPuGwta%2FXQ2ImnV4mn48%2FFbHJYKK0vXJM9ipiydM7Wlz%2FIx7q1dbNAjJS1YCFD4xSEjTy0UhbS5fU2bjLF7a%2F2RgTVP%2Fn1%2FNXpQSw%2BZwGz%2BbOyinAsVQhyJQAOLDPhIQuYQ25Suvr97YBFPOtJ9ke0JcThQBejvwJNP3DfioFrx8ViKRsWpiVCdNLiN9srbR8Q95IYZF9ryavM%2BvttH6&X-Amz-Signature=3cf28d1d1615f1603e068d57a61ab1509b0d2cfabd946895f5f6831212531af9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
