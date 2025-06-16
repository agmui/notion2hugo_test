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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLATTX6V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIANgqZ5lfH0DXpNcw%2BdL5VgxPPMUQ0WWrGIVhuSrUeD0AiEAi%2Bt5qMf8MAnJsyZPuaQjhfLaZ%2FWz5dkWBhoXu17ve84q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDM4qmEq1tKoiFEeraSrcAypFje6UiaS%2FbmxnOq%2FVCb4urAqs%2F9brSr39oMqrMzoatvozFXTge215SIX5dFJRzLaQP8vT82k2ZVGTpK3WLRhDgyDdiSNiAXd8y9XktnoHKig5U1UyAel5jZ%2FJxxq9ZODAZHDVJhSrCG5AsUVOAV7sqJZoEBOQ0mODnmlYV6JGMptSXZuQvFcO9ZYrNGo2cwJ9N%2B2WQdFE1v93mkS2WgdqBRyQ0n%2FaKEVOyhCruP%2BMFQRQSFLj5gEZ5R%2Fh%2FbRq4BqPLMvWGyB0W5bsvNl63sUM3C6JsyPXBEivpicD3rNOmphKKezw9vcHqlorgGO2nOOKyfWJxBW4%2FAwJ4B8hroCGqSFxJYUADKsmYy%2FHDFa%2B8%2FwtidrSfksclFa5GjmgK0JMGgAV7uBmqh27g1AKYTh8KUmkXpaMBUP%2FqYJwfCMvoQsSrHhJS5hsu%2FvN93G2OZpRsktIe83Rn%2BpMiaj3yL4T1gIiAbVlXDbGx80Jno40RifPTdROhrxdQ5uOSQs7pq2ce5mgNYc8a5lNj3q4OPsANfRcDmn61lvDapexWvlgQFwenBgUu5J0RM%2BrD7XILHZduDdsoVP32HC0u%2By8KHc2RZJNreijiBV%2F79WPWI28D%2FCuYYEznOlkvrSnML20v8IGOqUBDs4d68oV4Z3%2BbqvurO0%2FCDXJ7TP1UD1uE9bOJ%2B3YvGOrY5j8xDnwbwCdeMmaC0S4Ad5Bgsu9Dlzr%2BEseJRzrzhPObYYsAAn19hSC9aFU%2FTOLUbcM%2F7fPMi8%2BzWEWUTUOhOO%2Bs%2B%2B%2B2ymAIIskA7TBH7dYWgbZAOzhOOAW%2BJ6Nn%2FJXyKNSMqZNi56rx2AXaG6JUg%2FGxGV5IjJp%2BSxENRUL19onnrPJ&X-Amz-Signature=d89e57b563866237eceaa085dda95f1bcd92c8f7370bb2f008ce96045b1e66ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLATTX6V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIANgqZ5lfH0DXpNcw%2BdL5VgxPPMUQ0WWrGIVhuSrUeD0AiEAi%2Bt5qMf8MAnJsyZPuaQjhfLaZ%2FWz5dkWBhoXu17ve84q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDM4qmEq1tKoiFEeraSrcAypFje6UiaS%2FbmxnOq%2FVCb4urAqs%2F9brSr39oMqrMzoatvozFXTge215SIX5dFJRzLaQP8vT82k2ZVGTpK3WLRhDgyDdiSNiAXd8y9XktnoHKig5U1UyAel5jZ%2FJxxq9ZODAZHDVJhSrCG5AsUVOAV7sqJZoEBOQ0mODnmlYV6JGMptSXZuQvFcO9ZYrNGo2cwJ9N%2B2WQdFE1v93mkS2WgdqBRyQ0n%2FaKEVOyhCruP%2BMFQRQSFLj5gEZ5R%2Fh%2FbRq4BqPLMvWGyB0W5bsvNl63sUM3C6JsyPXBEivpicD3rNOmphKKezw9vcHqlorgGO2nOOKyfWJxBW4%2FAwJ4B8hroCGqSFxJYUADKsmYy%2FHDFa%2B8%2FwtidrSfksclFa5GjmgK0JMGgAV7uBmqh27g1AKYTh8KUmkXpaMBUP%2FqYJwfCMvoQsSrHhJS5hsu%2FvN93G2OZpRsktIe83Rn%2BpMiaj3yL4T1gIiAbVlXDbGx80Jno40RifPTdROhrxdQ5uOSQs7pq2ce5mgNYc8a5lNj3q4OPsANfRcDmn61lvDapexWvlgQFwenBgUu5J0RM%2BrD7XILHZduDdsoVP32HC0u%2By8KHc2RZJNreijiBV%2F79WPWI28D%2FCuYYEznOlkvrSnML20v8IGOqUBDs4d68oV4Z3%2BbqvurO0%2FCDXJ7TP1UD1uE9bOJ%2B3YvGOrY5j8xDnwbwCdeMmaC0S4Ad5Bgsu9Dlzr%2BEseJRzrzhPObYYsAAn19hSC9aFU%2FTOLUbcM%2F7fPMi8%2BzWEWUTUOhOO%2Bs%2B%2B%2B2ymAIIskA7TBH7dYWgbZAOzhOOAW%2BJ6Nn%2FJXyKNSMqZNi56rx2AXaG6JUg%2FGxGV5IjJp%2BSxENRUL19onnrPJ&X-Amz-Signature=57f223099b866defcb94b7994c27f8c753fce3f33deb4969fd8ef8d95cb7970f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLATTX6V%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T101034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIANgqZ5lfH0DXpNcw%2BdL5VgxPPMUQ0WWrGIVhuSrUeD0AiEAi%2Bt5qMf8MAnJsyZPuaQjhfLaZ%2FWz5dkWBhoXu17ve84q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDM4qmEq1tKoiFEeraSrcAypFje6UiaS%2FbmxnOq%2FVCb4urAqs%2F9brSr39oMqrMzoatvozFXTge215SIX5dFJRzLaQP8vT82k2ZVGTpK3WLRhDgyDdiSNiAXd8y9XktnoHKig5U1UyAel5jZ%2FJxxq9ZODAZHDVJhSrCG5AsUVOAV7sqJZoEBOQ0mODnmlYV6JGMptSXZuQvFcO9ZYrNGo2cwJ9N%2B2WQdFE1v93mkS2WgdqBRyQ0n%2FaKEVOyhCruP%2BMFQRQSFLj5gEZ5R%2Fh%2FbRq4BqPLMvWGyB0W5bsvNl63sUM3C6JsyPXBEivpicD3rNOmphKKezw9vcHqlorgGO2nOOKyfWJxBW4%2FAwJ4B8hroCGqSFxJYUADKsmYy%2FHDFa%2B8%2FwtidrSfksclFa5GjmgK0JMGgAV7uBmqh27g1AKYTh8KUmkXpaMBUP%2FqYJwfCMvoQsSrHhJS5hsu%2FvN93G2OZpRsktIe83Rn%2BpMiaj3yL4T1gIiAbVlXDbGx80Jno40RifPTdROhrxdQ5uOSQs7pq2ce5mgNYc8a5lNj3q4OPsANfRcDmn61lvDapexWvlgQFwenBgUu5J0RM%2BrD7XILHZduDdsoVP32HC0u%2By8KHc2RZJNreijiBV%2F79WPWI28D%2FCuYYEznOlkvrSnML20v8IGOqUBDs4d68oV4Z3%2BbqvurO0%2FCDXJ7TP1UD1uE9bOJ%2B3YvGOrY5j8xDnwbwCdeMmaC0S4Ad5Bgsu9Dlzr%2BEseJRzrzhPObYYsAAn19hSC9aFU%2FTOLUbcM%2F7fPMi8%2BzWEWUTUOhOO%2Bs%2B%2B%2B2ymAIIskA7TBH7dYWgbZAOzhOOAW%2BJ6Nn%2FJXyKNSMqZNi56rx2AXaG6JUg%2FGxGV5IjJp%2BSxENRUL19onnrPJ&X-Amz-Signature=36bef5604eb133470512036233bbcb8af4a819d15fb64c27878879f305c2c7bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
