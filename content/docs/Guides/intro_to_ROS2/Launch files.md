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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW6EYX4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDmZf56CLhF545dF1ATvVv1H5ybYJ4UrZckGg7Xwn4kAiEAghA2hamjo3Bexr1Gt4BQytLxJ87jVlpus28IFpN4ZQIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5tnVqZk2dpa%2BnfQircA5Yw2LS9K%2Fx%2FeEJ7ukqVueufvPvzbFCKQyXFXW93VJFdAwa9FR4GJzq%2FO2MdXzUiFgkMTBJfTx3qDAmdyCz%2BggwG0M4TWh1kGLwATc2zcluSQ9MfG%2F3cz08gy9%2BHGeOGS2Ch1sWVBBqOC3yEejT2vTxOwA19CNC4HnXNxG4AlM0yJg2CjYYUe0MXFY1oMrpVZPDuJd2wUKWaiTOg%2Bkqj%2BB3PugTAFP8MDAH7WBCYu3neb1yPhK%2FJJrf1VgejaHM%2BwVk9mjCDGD86KpU2vLMFFjLnXgzcNr9OTozZ4ZdumXHKxwUqhX3kJVi%2F5hlaty9sq%2F67U2rlrtSbCYFsdDdBDTcR5NL0I043tXXg6Oj%2BsTjSODDziFHdt1wR2ryKBmb1Gwh4IyWLqXyHO4tEuHpETeNSgu%2FtZNkGivEy%2BfEspxo2TM5vJZ7i2D6JnguAECQ7sJZpYnUAti%2FdC2HPR4Li12aoxNIRz4FAT7h88VbLXgoZ7s9hiIlJ0qhRhtisepKSBoEf5Qq0ykiFVOkEaqYHmdyFq%2B74VTuEf1HPIf2cN%2BO4KBvlCoOzm7MWpom%2B8mgTzXUtz9y%2BiDXEuYUQpPdYUdtW%2FX3hTfFOI7NjUvv1r1ss40M1lf3g3kT7wg1eMLCCrMEGOqUBHLwbh3Uc6MylC3KhJLuZV9fZjVpDO7r5PK0nuxvL7FYhKw49bkh2C1DRVi6F7%2FV9Zqn0mlYcn3GLjcnrdFyoQORk75jVmh6%2B0T8UN6%2F99Wyf42q2S4g7doAX4FxRogbW47Bm43xVu1ivu5Vohyo9%2BaAsd3b6J7czCYWhubBokbm8uka7tVOdbSxYy720IPS4tls6dt589wQFCV4rYTRKUjPldJff&X-Amz-Signature=d039447d905972599cce60b53918983d90097956946ea9a842364f06d1586d07&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW6EYX4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDmZf56CLhF545dF1ATvVv1H5ybYJ4UrZckGg7Xwn4kAiEAghA2hamjo3Bexr1Gt4BQytLxJ87jVlpus28IFpN4ZQIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5tnVqZk2dpa%2BnfQircA5Yw2LS9K%2Fx%2FeEJ7ukqVueufvPvzbFCKQyXFXW93VJFdAwa9FR4GJzq%2FO2MdXzUiFgkMTBJfTx3qDAmdyCz%2BggwG0M4TWh1kGLwATc2zcluSQ9MfG%2F3cz08gy9%2BHGeOGS2Ch1sWVBBqOC3yEejT2vTxOwA19CNC4HnXNxG4AlM0yJg2CjYYUe0MXFY1oMrpVZPDuJd2wUKWaiTOg%2Bkqj%2BB3PugTAFP8MDAH7WBCYu3neb1yPhK%2FJJrf1VgejaHM%2BwVk9mjCDGD86KpU2vLMFFjLnXgzcNr9OTozZ4ZdumXHKxwUqhX3kJVi%2F5hlaty9sq%2F67U2rlrtSbCYFsdDdBDTcR5NL0I043tXXg6Oj%2BsTjSODDziFHdt1wR2ryKBmb1Gwh4IyWLqXyHO4tEuHpETeNSgu%2FtZNkGivEy%2BfEspxo2TM5vJZ7i2D6JnguAECQ7sJZpYnUAti%2FdC2HPR4Li12aoxNIRz4FAT7h88VbLXgoZ7s9hiIlJ0qhRhtisepKSBoEf5Qq0ykiFVOkEaqYHmdyFq%2B74VTuEf1HPIf2cN%2BO4KBvlCoOzm7MWpom%2B8mgTzXUtz9y%2BiDXEuYUQpPdYUdtW%2FX3hTfFOI7NjUvv1r1ss40M1lf3g3kT7wg1eMLCCrMEGOqUBHLwbh3Uc6MylC3KhJLuZV9fZjVpDO7r5PK0nuxvL7FYhKw49bkh2C1DRVi6F7%2FV9Zqn0mlYcn3GLjcnrdFyoQORk75jVmh6%2B0T8UN6%2F99Wyf42q2S4g7doAX4FxRogbW47Bm43xVu1ivu5Vohyo9%2BaAsd3b6J7czCYWhubBokbm8uka7tVOdbSxYy720IPS4tls6dt589wQFCV4rYTRKUjPldJff&X-Amz-Signature=c2f3b3d13ed3767a69356ea24e7541eab58a08ab8f89bff4a609c5514e183afa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HW6EYX4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEDmZf56CLhF545dF1ATvVv1H5ybYJ4UrZckGg7Xwn4kAiEAghA2hamjo3Bexr1Gt4BQytLxJ87jVlpus28IFpN4ZQIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5tnVqZk2dpa%2BnfQircA5Yw2LS9K%2Fx%2FeEJ7ukqVueufvPvzbFCKQyXFXW93VJFdAwa9FR4GJzq%2FO2MdXzUiFgkMTBJfTx3qDAmdyCz%2BggwG0M4TWh1kGLwATc2zcluSQ9MfG%2F3cz08gy9%2BHGeOGS2Ch1sWVBBqOC3yEejT2vTxOwA19CNC4HnXNxG4AlM0yJg2CjYYUe0MXFY1oMrpVZPDuJd2wUKWaiTOg%2Bkqj%2BB3PugTAFP8MDAH7WBCYu3neb1yPhK%2FJJrf1VgejaHM%2BwVk9mjCDGD86KpU2vLMFFjLnXgzcNr9OTozZ4ZdumXHKxwUqhX3kJVi%2F5hlaty9sq%2F67U2rlrtSbCYFsdDdBDTcR5NL0I043tXXg6Oj%2BsTjSODDziFHdt1wR2ryKBmb1Gwh4IyWLqXyHO4tEuHpETeNSgu%2FtZNkGivEy%2BfEspxo2TM5vJZ7i2D6JnguAECQ7sJZpYnUAti%2FdC2HPR4Li12aoxNIRz4FAT7h88VbLXgoZ7s9hiIlJ0qhRhtisepKSBoEf5Qq0ykiFVOkEaqYHmdyFq%2B74VTuEf1HPIf2cN%2BO4KBvlCoOzm7MWpom%2B8mgTzXUtz9y%2BiDXEuYUQpPdYUdtW%2FX3hTfFOI7NjUvv1r1ss40M1lf3g3kT7wg1eMLCCrMEGOqUBHLwbh3Uc6MylC3KhJLuZV9fZjVpDO7r5PK0nuxvL7FYhKw49bkh2C1DRVi6F7%2FV9Zqn0mlYcn3GLjcnrdFyoQORk75jVmh6%2B0T8UN6%2F99Wyf42q2S4g7doAX4FxRogbW47Bm43xVu1ivu5Vohyo9%2BaAsd3b6J7czCYWhubBokbm8uka7tVOdbSxYy720IPS4tls6dt589wQFCV4rYTRKUjPldJff&X-Amz-Signature=febce3b9ab1e774499e226395cda7112ed7bf41dc47bb440de1c00ee636eeb12&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
