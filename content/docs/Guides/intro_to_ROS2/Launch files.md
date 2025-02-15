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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UK4VNIL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIG2VNVvkcNVx46QABPIIEyZpXDakXEI4CZenQY4OjB9VAiEA5%2FofYp1SA3CGHMVi8C%2BfIcue2Wq66ZB20zR9kfSIPbMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFFYl0N5s%2FNOdBeQESrcAwX%2F8fhVK%2FWKpv%2BMfIrYvq4Fx3HQzC2e6jQbGh2eC3HgP2gis8PDdRAeRD4wlJbTqtaEcnFLwUqI0GJ01CHeqmjfpAMdBN2oFk8%2BICI9ZD4t%2FXSvE%2FZVfE%2Bwo9XbtqCX6EFXmSe8lAMUytGpmg7BtWlAgn3lw77Wf9LK2CdVsau1zPzEkxU90AujhSOhEmDdSqki4XA4g0E9YqBczOUocjl9ykpjUeG2V51Y28sF2mAc9lXomeD07%2FMGRgeLO8o%2BAZ2%2FxaLuCtGpCcDwUPzMtrAEjhVJOKaSGyWyCWbBQKkgs%2F2anQUVUjkFR%2F11t%2FxgbIbey8QSlGSSoIT8uDedmqgPc0tsCosFlfXTpTiy7fF%2FSMfofS2%2BnEonp8VDJQoTS5X1S8HLwRfjUINnqCLxqbdl8qbVzryg9jJtpGJKziMKmIG22V1uAt3gACiZxU%2BuE43JZXcKFwa7pbMRzd7Z%2ByXpXwgiTJM5Nzgd4EwU5kzzpA1l23fD0PvkO6IF4fwoo25%2BZpHgL3GM%2FIMtu49GF5NpER42RKqqBNCnS8mHNX5cpk0YbvrqCWbyb0K%2F%2FTvuKk99YTd90QxuSEvuylc%2B1CMCSXUA8N%2BIr8sLi8nIxG%2B9OJixkG1C9easvLsIMJuRxL0GOqUBTE0BgMewegd4En7EKKaVq2oW53GhkOVb9quDxzqMER%2BYc3JZm%2Bw9IG776M4ahOsrmJDhAg2jHbIipSqF9wVBqvq1pDaouT7TX0KSJD%2BcSOa1jjgl9OWClZ%2FCFwKEyfXhTJwSfWi0vi8sC1YG1IWNwaW9NQP6uO9BTUSPAMxdCzBZ5Qi2D2w5gb2RV%2FtKBrGqckA1vo8FPr8LHIU%2BWaMgOEjuuskC&X-Amz-Signature=1f746490d6a4f9af758a138c0818b2ff073da3f9a03eeff31f0874451aad3111&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UK4VNIL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIG2VNVvkcNVx46QABPIIEyZpXDakXEI4CZenQY4OjB9VAiEA5%2FofYp1SA3CGHMVi8C%2BfIcue2Wq66ZB20zR9kfSIPbMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFFYl0N5s%2FNOdBeQESrcAwX%2F8fhVK%2FWKpv%2BMfIrYvq4Fx3HQzC2e6jQbGh2eC3HgP2gis8PDdRAeRD4wlJbTqtaEcnFLwUqI0GJ01CHeqmjfpAMdBN2oFk8%2BICI9ZD4t%2FXSvE%2FZVfE%2Bwo9XbtqCX6EFXmSe8lAMUytGpmg7BtWlAgn3lw77Wf9LK2CdVsau1zPzEkxU90AujhSOhEmDdSqki4XA4g0E9YqBczOUocjl9ykpjUeG2V51Y28sF2mAc9lXomeD07%2FMGRgeLO8o%2BAZ2%2FxaLuCtGpCcDwUPzMtrAEjhVJOKaSGyWyCWbBQKkgs%2F2anQUVUjkFR%2F11t%2FxgbIbey8QSlGSSoIT8uDedmqgPc0tsCosFlfXTpTiy7fF%2FSMfofS2%2BnEonp8VDJQoTS5X1S8HLwRfjUINnqCLxqbdl8qbVzryg9jJtpGJKziMKmIG22V1uAt3gACiZxU%2BuE43JZXcKFwa7pbMRzd7Z%2ByXpXwgiTJM5Nzgd4EwU5kzzpA1l23fD0PvkO6IF4fwoo25%2BZpHgL3GM%2FIMtu49GF5NpER42RKqqBNCnS8mHNX5cpk0YbvrqCWbyb0K%2F%2FTvuKk99YTd90QxuSEvuylc%2B1CMCSXUA8N%2BIr8sLi8nIxG%2B9OJixkG1C9easvLsIMJuRxL0GOqUBTE0BgMewegd4En7EKKaVq2oW53GhkOVb9quDxzqMER%2BYc3JZm%2Bw9IG776M4ahOsrmJDhAg2jHbIipSqF9wVBqvq1pDaouT7TX0KSJD%2BcSOa1jjgl9OWClZ%2FCFwKEyfXhTJwSfWi0vi8sC1YG1IWNwaW9NQP6uO9BTUSPAMxdCzBZ5Qi2D2w5gb2RV%2FtKBrGqckA1vo8FPr8LHIU%2BWaMgOEjuuskC&X-Amz-Signature=0d9094571b9d506e1dd8ddb09f43a2f25ae95b131f30de53aa92345c22edd935&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UK4VNIL%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T220143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIG2VNVvkcNVx46QABPIIEyZpXDakXEI4CZenQY4OjB9VAiEA5%2FofYp1SA3CGHMVi8C%2BfIcue2Wq66ZB20zR9kfSIPbMq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDFFYl0N5s%2FNOdBeQESrcAwX%2F8fhVK%2FWKpv%2BMfIrYvq4Fx3HQzC2e6jQbGh2eC3HgP2gis8PDdRAeRD4wlJbTqtaEcnFLwUqI0GJ01CHeqmjfpAMdBN2oFk8%2BICI9ZD4t%2FXSvE%2FZVfE%2Bwo9XbtqCX6EFXmSe8lAMUytGpmg7BtWlAgn3lw77Wf9LK2CdVsau1zPzEkxU90AujhSOhEmDdSqki4XA4g0E9YqBczOUocjl9ykpjUeG2V51Y28sF2mAc9lXomeD07%2FMGRgeLO8o%2BAZ2%2FxaLuCtGpCcDwUPzMtrAEjhVJOKaSGyWyCWbBQKkgs%2F2anQUVUjkFR%2F11t%2FxgbIbey8QSlGSSoIT8uDedmqgPc0tsCosFlfXTpTiy7fF%2FSMfofS2%2BnEonp8VDJQoTS5X1S8HLwRfjUINnqCLxqbdl8qbVzryg9jJtpGJKziMKmIG22V1uAt3gACiZxU%2BuE43JZXcKFwa7pbMRzd7Z%2ByXpXwgiTJM5Nzgd4EwU5kzzpA1l23fD0PvkO6IF4fwoo25%2BZpHgL3GM%2FIMtu49GF5NpER42RKqqBNCnS8mHNX5cpk0YbvrqCWbyb0K%2F%2FTvuKk99YTd90QxuSEvuylc%2B1CMCSXUA8N%2BIr8sLi8nIxG%2B9OJixkG1C9easvLsIMJuRxL0GOqUBTE0BgMewegd4En7EKKaVq2oW53GhkOVb9quDxzqMER%2BYc3JZm%2Bw9IG776M4ahOsrmJDhAg2jHbIipSqF9wVBqvq1pDaouT7TX0KSJD%2BcSOa1jjgl9OWClZ%2FCFwKEyfXhTJwSfWi0vi8sC1YG1IWNwaW9NQP6uO9BTUSPAMxdCzBZ5Qi2D2w5gb2RV%2FtKBrGqckA1vo8FPr8LHIU%2BWaMgOEjuuskC&X-Amz-Signature=5b256e8db8f2ce936a1d6007fac6b170cdc0202a3ff36cf8a0c2f0a4aaee9397&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
