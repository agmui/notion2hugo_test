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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45OFTXJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB3o%2Fr4sPDM2brlHnYC1%2BCIw01EfGJA88YOBiXIDymSmAiEAsoA8d%2BmByfwwrSsngpeWsknFDYnpC2Hs%2Fb9L4QYzcygq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBSM7IqzY9dLUj09yCrcAybcr6Nl3PVlqf%2ByQYkfLiVw23FvYCS71Oxfj3cPtDm66FJd808hKimth0dDSnvQjnXAchRJT3nfmpoV4uVO41tCE1hL3dqrzMrMN82Lb9Tgn7nN7JhP6Eb6BuE13ekFSy7q%2ByjpWYFIrgqI%2B17HetfOo%2Bymh9gebVZxdlV54oZux1uykL2nzL1rk7aT%2FofbZtjSqwdv1TwsqodtuhzgBExlWEMFeNKfWSAouQw6VEoahppYBnlR8Jpd4%2FlhRn4OVGBugVdc0it8EyuvhklhKUaa9YtsYI7hG57J9aOrOXWRmL51%2F65T%2B1SJAHmhDRUDsGmBRlg2KFi7kUSDNG1Pf%2BqcLbC22K7IguHL99QxJ0LvKS2l6Y8akHFs18C7tkOfZONUFpgdiW7aShyxFi5Uz25K%2Fwbdd5mGXxXqIrJ794hVFEQkQOZ%2B2R6Nc3%2F1zPzJ5XoN0Ua7g%2BJfHCvjLCAZRVntkcJnjKQY7OSkmZKKVvM46Tw5gwcRJ69VTnJIP7Wqzj81Kav49XVlzwDVl32IYMRw3s1XmCO1oETgtPqq4z37RcfIakaONlWYQS4lX6BnoNa1LFkoHYzynVNe87tNmXVZelWK2aEvDIiyo%2BasnSqboBwI6cAUH0d3mwOtMM2fqcAGOqUByUyKp2K75%2FYWQ88bR4tt%2F0FjSRx%2FJGBwumQzp4%2FYkG0NxtcO0alY2pO57uOVDfPC%2BB05%2BC%2FqMl8vxy4PHfMFrGbGCupd5BDKkS4ydL%2Fg%2Fl9xVnJWHzLKyt%2B8XSRl189wkTSqHF9uQI6BCQBoB318Xq2%2BP8YANTPMQQSHbzmOA3WWi9Vwz7ksKemKHGB1AK8tuhoXKr5zXOq8ACj%2FRuSJDwbp5aS5&X-Amz-Signature=a6925012cf005ef190e74987716984024193026cb114b04ef9b0108cf46074a0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45OFTXJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB3o%2Fr4sPDM2brlHnYC1%2BCIw01EfGJA88YOBiXIDymSmAiEAsoA8d%2BmByfwwrSsngpeWsknFDYnpC2Hs%2Fb9L4QYzcygq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBSM7IqzY9dLUj09yCrcAybcr6Nl3PVlqf%2ByQYkfLiVw23FvYCS71Oxfj3cPtDm66FJd808hKimth0dDSnvQjnXAchRJT3nfmpoV4uVO41tCE1hL3dqrzMrMN82Lb9Tgn7nN7JhP6Eb6BuE13ekFSy7q%2ByjpWYFIrgqI%2B17HetfOo%2Bymh9gebVZxdlV54oZux1uykL2nzL1rk7aT%2FofbZtjSqwdv1TwsqodtuhzgBExlWEMFeNKfWSAouQw6VEoahppYBnlR8Jpd4%2FlhRn4OVGBugVdc0it8EyuvhklhKUaa9YtsYI7hG57J9aOrOXWRmL51%2F65T%2B1SJAHmhDRUDsGmBRlg2KFi7kUSDNG1Pf%2BqcLbC22K7IguHL99QxJ0LvKS2l6Y8akHFs18C7tkOfZONUFpgdiW7aShyxFi5Uz25K%2Fwbdd5mGXxXqIrJ794hVFEQkQOZ%2B2R6Nc3%2F1zPzJ5XoN0Ua7g%2BJfHCvjLCAZRVntkcJnjKQY7OSkmZKKVvM46Tw5gwcRJ69VTnJIP7Wqzj81Kav49XVlzwDVl32IYMRw3s1XmCO1oETgtPqq4z37RcfIakaONlWYQS4lX6BnoNa1LFkoHYzynVNe87tNmXVZelWK2aEvDIiyo%2BasnSqboBwI6cAUH0d3mwOtMM2fqcAGOqUByUyKp2K75%2FYWQ88bR4tt%2F0FjSRx%2FJGBwumQzp4%2FYkG0NxtcO0alY2pO57uOVDfPC%2BB05%2BC%2FqMl8vxy4PHfMFrGbGCupd5BDKkS4ydL%2Fg%2Fl9xVnJWHzLKyt%2B8XSRl189wkTSqHF9uQI6BCQBoB318Xq2%2BP8YANTPMQQSHbzmOA3WWi9Vwz7ksKemKHGB1AK8tuhoXKr5zXOq8ACj%2FRuSJDwbp5aS5&X-Amz-Signature=0e61b98aa384bb0b836bb487b23a04dcfab431541e8adb381d50c3df60958732&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V45OFTXJ%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T150914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIB3o%2Fr4sPDM2brlHnYC1%2BCIw01EfGJA88YOBiXIDymSmAiEAsoA8d%2BmByfwwrSsngpeWsknFDYnpC2Hs%2Fb9L4QYzcygq%2FwMIGBAAGgw2Mzc0MjMxODM4MDUiDBSM7IqzY9dLUj09yCrcAybcr6Nl3PVlqf%2ByQYkfLiVw23FvYCS71Oxfj3cPtDm66FJd808hKimth0dDSnvQjnXAchRJT3nfmpoV4uVO41tCE1hL3dqrzMrMN82Lb9Tgn7nN7JhP6Eb6BuE13ekFSy7q%2ByjpWYFIrgqI%2B17HetfOo%2Bymh9gebVZxdlV54oZux1uykL2nzL1rk7aT%2FofbZtjSqwdv1TwsqodtuhzgBExlWEMFeNKfWSAouQw6VEoahppYBnlR8Jpd4%2FlhRn4OVGBugVdc0it8EyuvhklhKUaa9YtsYI7hG57J9aOrOXWRmL51%2F65T%2B1SJAHmhDRUDsGmBRlg2KFi7kUSDNG1Pf%2BqcLbC22K7IguHL99QxJ0LvKS2l6Y8akHFs18C7tkOfZONUFpgdiW7aShyxFi5Uz25K%2Fwbdd5mGXxXqIrJ794hVFEQkQOZ%2B2R6Nc3%2F1zPzJ5XoN0Ua7g%2BJfHCvjLCAZRVntkcJnjKQY7OSkmZKKVvM46Tw5gwcRJ69VTnJIP7Wqzj81Kav49XVlzwDVl32IYMRw3s1XmCO1oETgtPqq4z37RcfIakaONlWYQS4lX6BnoNa1LFkoHYzynVNe87tNmXVZelWK2aEvDIiyo%2BasnSqboBwI6cAUH0d3mwOtMM2fqcAGOqUByUyKp2K75%2FYWQ88bR4tt%2F0FjSRx%2FJGBwumQzp4%2FYkG0NxtcO0alY2pO57uOVDfPC%2BB05%2BC%2FqMl8vxy4PHfMFrGbGCupd5BDKkS4ydL%2Fg%2Fl9xVnJWHzLKyt%2B8XSRl189wkTSqHF9uQI6BCQBoB318Xq2%2BP8YANTPMQQSHbzmOA3WWi9Vwz7ksKemKHGB1AK8tuhoXKr5zXOq8ACj%2FRuSJDwbp5aS5&X-Amz-Signature=388f65f9c57aae295cc5679655944cbabd651f3ef3e7a317b7720e1c4f461edb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
