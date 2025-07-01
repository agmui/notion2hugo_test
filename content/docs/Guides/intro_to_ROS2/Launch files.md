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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PFDDSP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZvLss3fitd14Bu0c8ODE9bLZL5bgRP%2Broi67kPFwWjAiEAy85pt5LRsqh4TOj1NJgd9SgMG2QlkJkvsycaHtlDs9AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ7D%2FKd5k5APLOF4SrcA4IhbZcLZN14T2Bk%2FEfUwtdUryBs9%2FnTgcBOcqSX%2FwacDO%2FGJhbk9qvBbs8eLgYT%2Bwg96mgnS0jrxsq10SF4qnUivx81VrO82Uft3IYm%2B1gsC27MtDJ9zJyCbWO1srdRUwpc3XXYIk0xnCXpKYjoYuoaTcF%2F%2B95PZ07nGa%2F4PFMkn1BD1myWkVJmKjEJrBCilv3oyQWz0MYqqc9ezD7i7eQUH8Cd5FzWvw%2BJ%2F%2BjPR6a%2BHnb1HCPnf52668fQOY9AXO2g3OpeWioaauFt8D%2BXzxRVAyDob7fMdQX88k4R80YZW0hNyyl64QjSKNnDNg%2BlJhFE6rYFgzxxc%2BPv9kpxZlNMT5SUVreQ9sqmtj4R55d5Tt3zbzmRf1HaQ7nxm8ru0anbeCkSgC381A54wu6daYxhF1zVgdBn5mNatwgHpbbWFUzr3gQimA4%2BI5eY8pSYo0056p%2B%2BUbSFCEeI%2BO%2B0er7EJ%2B6PhTSzbO3SNYbOLPqlGqE38Qy7mFZdh%2Fd1zi%2B0yEDRwyGcKarxnNPuBqY%2Fs6vEwkJHVGMU6nNLy4M8QHjvYgm6zKr7O%2BxyjTRYzQ9bIrBmuAR7iOLKK1QGZbyD7xSmW69D4%2BA5njuaC0vFFn9uT9erOm2eU0TucnRgMN%2FLjcMGOqUBNbNiPW9EH2QyitScFUQHkuAVe2V5lIvtBElSkx6IrkSohjAR64NwsI1KPlEHWllt304nKURZ5iCEPhNRHJptz8FGk36yOp76nrc7HC8gHSKrDF4q1OKV0maPyfM7QEctimQ9aZaiRiOYn%2FWo5VcTFx9kMwBXjh%2F5yRAhTaQky%2B0Fd3sluiMCUP7HVYZBf32UQ08uV1J4Wd2L7kOWYPsAKZ9uPBoW&X-Amz-Signature=c54ba6500c00ce7bec2d0891c03b2aee2820a854a37811fce44b58c6d060cfdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PFDDSP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZvLss3fitd14Bu0c8ODE9bLZL5bgRP%2Broi67kPFwWjAiEAy85pt5LRsqh4TOj1NJgd9SgMG2QlkJkvsycaHtlDs9AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ7D%2FKd5k5APLOF4SrcA4IhbZcLZN14T2Bk%2FEfUwtdUryBs9%2FnTgcBOcqSX%2FwacDO%2FGJhbk9qvBbs8eLgYT%2Bwg96mgnS0jrxsq10SF4qnUivx81VrO82Uft3IYm%2B1gsC27MtDJ9zJyCbWO1srdRUwpc3XXYIk0xnCXpKYjoYuoaTcF%2F%2B95PZ07nGa%2F4PFMkn1BD1myWkVJmKjEJrBCilv3oyQWz0MYqqc9ezD7i7eQUH8Cd5FzWvw%2BJ%2F%2BjPR6a%2BHnb1HCPnf52668fQOY9AXO2g3OpeWioaauFt8D%2BXzxRVAyDob7fMdQX88k4R80YZW0hNyyl64QjSKNnDNg%2BlJhFE6rYFgzxxc%2BPv9kpxZlNMT5SUVreQ9sqmtj4R55d5Tt3zbzmRf1HaQ7nxm8ru0anbeCkSgC381A54wu6daYxhF1zVgdBn5mNatwgHpbbWFUzr3gQimA4%2BI5eY8pSYo0056p%2B%2BUbSFCEeI%2BO%2B0er7EJ%2B6PhTSzbO3SNYbOLPqlGqE38Qy7mFZdh%2Fd1zi%2B0yEDRwyGcKarxnNPuBqY%2Fs6vEwkJHVGMU6nNLy4M8QHjvYgm6zKr7O%2BxyjTRYzQ9bIrBmuAR7iOLKK1QGZbyD7xSmW69D4%2BA5njuaC0vFFn9uT9erOm2eU0TucnRgMN%2FLjcMGOqUBNbNiPW9EH2QyitScFUQHkuAVe2V5lIvtBElSkx6IrkSohjAR64NwsI1KPlEHWllt304nKURZ5iCEPhNRHJptz8FGk36yOp76nrc7HC8gHSKrDF4q1OKV0maPyfM7QEctimQ9aZaiRiOYn%2FWo5VcTFx9kMwBXjh%2F5yRAhTaQky%2B0Fd3sluiMCUP7HVYZBf32UQ08uV1J4Wd2L7kOWYPsAKZ9uPBoW&X-Amz-Signature=ee2fa42e843e11280ac364c43614c6f02d5994ab228b3730b4d5ef9115bb9385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673PFDDSP%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T061411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZvLss3fitd14Bu0c8ODE9bLZL5bgRP%2Broi67kPFwWjAiEAy85pt5LRsqh4TOj1NJgd9SgMG2QlkJkvsycaHtlDs9AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQ7D%2FKd5k5APLOF4SrcA4IhbZcLZN14T2Bk%2FEfUwtdUryBs9%2FnTgcBOcqSX%2FwacDO%2FGJhbk9qvBbs8eLgYT%2Bwg96mgnS0jrxsq10SF4qnUivx81VrO82Uft3IYm%2B1gsC27MtDJ9zJyCbWO1srdRUwpc3XXYIk0xnCXpKYjoYuoaTcF%2F%2B95PZ07nGa%2F4PFMkn1BD1myWkVJmKjEJrBCilv3oyQWz0MYqqc9ezD7i7eQUH8Cd5FzWvw%2BJ%2F%2BjPR6a%2BHnb1HCPnf52668fQOY9AXO2g3OpeWioaauFt8D%2BXzxRVAyDob7fMdQX88k4R80YZW0hNyyl64QjSKNnDNg%2BlJhFE6rYFgzxxc%2BPv9kpxZlNMT5SUVreQ9sqmtj4R55d5Tt3zbzmRf1HaQ7nxm8ru0anbeCkSgC381A54wu6daYxhF1zVgdBn5mNatwgHpbbWFUzr3gQimA4%2BI5eY8pSYo0056p%2B%2BUbSFCEeI%2BO%2B0er7EJ%2B6PhTSzbO3SNYbOLPqlGqE38Qy7mFZdh%2Fd1zi%2B0yEDRwyGcKarxnNPuBqY%2Fs6vEwkJHVGMU6nNLy4M8QHjvYgm6zKr7O%2BxyjTRYzQ9bIrBmuAR7iOLKK1QGZbyD7xSmW69D4%2BA5njuaC0vFFn9uT9erOm2eU0TucnRgMN%2FLjcMGOqUBNbNiPW9EH2QyitScFUQHkuAVe2V5lIvtBElSkx6IrkSohjAR64NwsI1KPlEHWllt304nKURZ5iCEPhNRHJptz8FGk36yOp76nrc7HC8gHSKrDF4q1OKV0maPyfM7QEctimQ9aZaiRiOYn%2FWo5VcTFx9kMwBXjh%2F5yRAhTaQky%2B0Fd3sluiMCUP7HVYZBf32UQ08uV1J4Wd2L7kOWYPsAKZ9uPBoW&X-Amz-Signature=1ff2570392247f694ed94620a637487acc2fdec337ea2b7d43e4efc36aa0f6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
