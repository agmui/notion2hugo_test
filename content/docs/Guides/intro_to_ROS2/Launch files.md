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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O65YJC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnS%2FhP0vyL0vl85f%2Fu4DJZQ%2BSMqqq%2BRpC4NzDTkIP1yAiEAgA%2F0%2BvJcLBwD6PTSpxHk%2FexuWi49eRLZibH3YRwsCr8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC69HUTYxEc5ObcfircA5q6vRjd9Fjd08ElpRpWIkaMg4BdSUQ5ojsooUiO3smFGn7K9kx3RX8tNZe%2F7qYnU7C63jGAdiopewnlR%2FPovR5I3D8n41m9tEXgNORD9Sm%2FkZFIDEGOVI%2BWxh1SEsS%2FZlBh23olgCpa3XmA9a8hswFmH1BQc2woRuPQG8vXYHqZkzpoiArLJumzBCbWqZoNC%2FDNJFnk%2FTmSN1KFOAklY6aFnnnpkdCyZXIw0F8ucp7d1diiPGBwXOHki0d5eq2%2Bg8YE%2BoVdY0kLVNb0E5JIf2XDOijoBO5bmFNrbHyPTMdjGbyTaUzpHEQLCUAnKLhb2tJJKfKLDntTyY7kww3KR6%2FbkLfKy%2BhIXehTbeh7oHx%2Fsc3ChFm5J%2FNN%2BGt0gKw8lW87YcMmtLT1qsff7zzvoL6flWtmWL9A1RZIdTQFSRQCIM6WJWelWZQzfeTSSotLdRlRycDtYBtUu0N82%2B9BuRVPIPbz2It%2FZFSxuEypMr5hJztnH%2FNvwiXu9bbBGoJlF5SMuiQp3b5yizRWnGgtwL%2FSIA%2B1fLRttvcKD3fglbTrDNaBPnpygODZHm%2BwQcSJkLBZqHTbtxf4smDnzrNvi%2FNZgpyGavNi5XvflrSslZsXsARasuEFAaoj3jzFMKbg%2FrwGOqUBhZy%2Fb5AAZ7Tb7nkdmWVKWe2yFE8sel5vz4hK05mrmFCHL2PvoIgjEUFT3lS6Zt3%2FQBLBURlaA4xPFTii3co34pRTEUserVh2k%2FjGW3WGLNCid8R%2BOCq%2FOE004lMGiQear9GD%2FhR4Nzj%2F6f1dgVwzkkAd7IckkeV2BMOHT6r%2BmHR1CbqDK2NB8PwJHC3dWcI7xnN51wPP2u9TyIgWvMl4%2BYHY6xzg&X-Amz-Signature=2cb89e1807a8bbb662629dc89ddd850cad43d9c6f6dc0780b38d43035e178a61&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O65YJC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnS%2FhP0vyL0vl85f%2Fu4DJZQ%2BSMqqq%2BRpC4NzDTkIP1yAiEAgA%2F0%2BvJcLBwD6PTSpxHk%2FexuWi49eRLZibH3YRwsCr8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC69HUTYxEc5ObcfircA5q6vRjd9Fjd08ElpRpWIkaMg4BdSUQ5ojsooUiO3smFGn7K9kx3RX8tNZe%2F7qYnU7C63jGAdiopewnlR%2FPovR5I3D8n41m9tEXgNORD9Sm%2FkZFIDEGOVI%2BWxh1SEsS%2FZlBh23olgCpa3XmA9a8hswFmH1BQc2woRuPQG8vXYHqZkzpoiArLJumzBCbWqZoNC%2FDNJFnk%2FTmSN1KFOAklY6aFnnnpkdCyZXIw0F8ucp7d1diiPGBwXOHki0d5eq2%2Bg8YE%2BoVdY0kLVNb0E5JIf2XDOijoBO5bmFNrbHyPTMdjGbyTaUzpHEQLCUAnKLhb2tJJKfKLDntTyY7kww3KR6%2FbkLfKy%2BhIXehTbeh7oHx%2Fsc3ChFm5J%2FNN%2BGt0gKw8lW87YcMmtLT1qsff7zzvoL6flWtmWL9A1RZIdTQFSRQCIM6WJWelWZQzfeTSSotLdRlRycDtYBtUu0N82%2B9BuRVPIPbz2It%2FZFSxuEypMr5hJztnH%2FNvwiXu9bbBGoJlF5SMuiQp3b5yizRWnGgtwL%2FSIA%2B1fLRttvcKD3fglbTrDNaBPnpygODZHm%2BwQcSJkLBZqHTbtxf4smDnzrNvi%2FNZgpyGavNi5XvflrSslZsXsARasuEFAaoj3jzFMKbg%2FrwGOqUBhZy%2Fb5AAZ7Tb7nkdmWVKWe2yFE8sel5vz4hK05mrmFCHL2PvoIgjEUFT3lS6Zt3%2FQBLBURlaA4xPFTii3co34pRTEUserVh2k%2FjGW3WGLNCid8R%2BOCq%2FOE004lMGiQear9GD%2FhR4Nzj%2F6f1dgVwzkkAd7IckkeV2BMOHT6r%2BmHR1CbqDK2NB8PwJHC3dWcI7xnN51wPP2u9TyIgWvMl4%2BYHY6xzg&X-Amz-Signature=d8d867e6a0bcf84512ad9f872b27a32d69d77a645874d88d318c50f3a5eaca06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O65YJC%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnS%2FhP0vyL0vl85f%2Fu4DJZQ%2BSMqqq%2BRpC4NzDTkIP1yAiEAgA%2F0%2BvJcLBwD6PTSpxHk%2FexuWi49eRLZibH3YRwsCr8qiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHC69HUTYxEc5ObcfircA5q6vRjd9Fjd08ElpRpWIkaMg4BdSUQ5ojsooUiO3smFGn7K9kx3RX8tNZe%2F7qYnU7C63jGAdiopewnlR%2FPovR5I3D8n41m9tEXgNORD9Sm%2FkZFIDEGOVI%2BWxh1SEsS%2FZlBh23olgCpa3XmA9a8hswFmH1BQc2woRuPQG8vXYHqZkzpoiArLJumzBCbWqZoNC%2FDNJFnk%2FTmSN1KFOAklY6aFnnnpkdCyZXIw0F8ucp7d1diiPGBwXOHki0d5eq2%2Bg8YE%2BoVdY0kLVNb0E5JIf2XDOijoBO5bmFNrbHyPTMdjGbyTaUzpHEQLCUAnKLhb2tJJKfKLDntTyY7kww3KR6%2FbkLfKy%2BhIXehTbeh7oHx%2Fsc3ChFm5J%2FNN%2BGt0gKw8lW87YcMmtLT1qsff7zzvoL6flWtmWL9A1RZIdTQFSRQCIM6WJWelWZQzfeTSSotLdRlRycDtYBtUu0N82%2B9BuRVPIPbz2It%2FZFSxuEypMr5hJztnH%2FNvwiXu9bbBGoJlF5SMuiQp3b5yizRWnGgtwL%2FSIA%2B1fLRttvcKD3fglbTrDNaBPnpygODZHm%2BwQcSJkLBZqHTbtxf4smDnzrNvi%2FNZgpyGavNi5XvflrSslZsXsARasuEFAaoj3jzFMKbg%2FrwGOqUBhZy%2Fb5AAZ7Tb7nkdmWVKWe2yFE8sel5vz4hK05mrmFCHL2PvoIgjEUFT3lS6Zt3%2FQBLBURlaA4xPFTii3co34pRTEUserVh2k%2FjGW3WGLNCid8R%2BOCq%2FOE004lMGiQear9GD%2FhR4Nzj%2F6f1dgVwzkkAd7IckkeV2BMOHT6r%2BmHR1CbqDK2NB8PwJHC3dWcI7xnN51wPP2u9TyIgWvMl4%2BYHY6xzg&X-Amz-Signature=25cf68aed382a13bc81f7ca050f5d9cd0e6ad491b34f60bf8d15e68e96d2f79c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
