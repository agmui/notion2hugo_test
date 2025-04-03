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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTSEYEZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCsxVUPGh0R4vY5pTr7Y67WAmvdxZQbyNBC4U2Krx42OgIgDdTKdge0zepU0FRwOfCuezZctmw3F8PfB2SefNAgFp0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaDEI3ZgHRJQcB2dircA71wHHOLKxKtEFUhWS5dN825EbZy%2B115bm1SWF0J6SWNxTGd5Xla9u7lGdqeiTnRdWh5LzzQtLbrD%2FNEJa7XfgZ938IQ%2B5pBu%2BvqkwNFWk4TjuTlgp%2FO42yhCG%2FZ8%2FTc2B1ev2Nzb3ny6vXkMZBeo6nJBKntrTjwdz006Ovko7bUHZbwMiQDdW1mNYMaBVHAj4RcqzhprN89MmFqGGXkGw2Q8qQ2QZzrKL7PJtoYGUanwL%2F8QsG2fu6WXbwsWrZ6m%2BkhdmyjE7wEumhzsQJDRYSjBcqMicyDtGV17Ry8bAW461l9mGJ4Iuh093mxwbMcX2sl9uwelb%2BIB7yO2txq4BdRdNUXSV6fg3QepmVolUqSFsNVWZ9eVaIXZWUOa59KcD8%2BipOn0nDMt9JYj9mtkWN%2B1v%2B%2B2%2BeysPQaCIofyNJgvgyUFdf7mK9qsUMF5DkY8vPmu1t2YlysGRDPG1%2F%2BBqSMWaVrGkaCcVThMertCnj4zhIzaPed77EFVOiT7G5i82VhLEO6CWDtUOcoe9SCJuWx43K%2FZZwu%2BJ7fV8PguroKr9BGXlBG39NGOkDMrVwq1bxi%2Bg8RWMx4eZIPHUQgvxzWpZT5oaxCkD9vUjndY318mN%2BQ5JwfRhHTwUC0MLbIt78GOqUB9yzjru6J5EhFw3sUG9UR24I6w5s78bFTMJJ0YzMXQINbZZorXHzZoCJlo7wGqHOny15rqvnWtI4KR52oLqRtxD7%2FjW3p085Fl30MwEFk7pnS1AMO33GXCpLjRkk%2BgncqGMi%2B3%2BTEWj77SJncVU317cXZKxJEtIblDYk2QnWFaQULRlj53zfLVoPfP3yqSkwctLaOwQzKNXvmt%2BpVm1Jd0egm8uMg&X-Amz-Signature=3b73f026a0d8ec963370edc61478084021cd6ce34d280279622c128ea6a0db80&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTSEYEZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCsxVUPGh0R4vY5pTr7Y67WAmvdxZQbyNBC4U2Krx42OgIgDdTKdge0zepU0FRwOfCuezZctmw3F8PfB2SefNAgFp0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaDEI3ZgHRJQcB2dircA71wHHOLKxKtEFUhWS5dN825EbZy%2B115bm1SWF0J6SWNxTGd5Xla9u7lGdqeiTnRdWh5LzzQtLbrD%2FNEJa7XfgZ938IQ%2B5pBu%2BvqkwNFWk4TjuTlgp%2FO42yhCG%2FZ8%2FTc2B1ev2Nzb3ny6vXkMZBeo6nJBKntrTjwdz006Ovko7bUHZbwMiQDdW1mNYMaBVHAj4RcqzhprN89MmFqGGXkGw2Q8qQ2QZzrKL7PJtoYGUanwL%2F8QsG2fu6WXbwsWrZ6m%2BkhdmyjE7wEumhzsQJDRYSjBcqMicyDtGV17Ry8bAW461l9mGJ4Iuh093mxwbMcX2sl9uwelb%2BIB7yO2txq4BdRdNUXSV6fg3QepmVolUqSFsNVWZ9eVaIXZWUOa59KcD8%2BipOn0nDMt9JYj9mtkWN%2B1v%2B%2B2%2BeysPQaCIofyNJgvgyUFdf7mK9qsUMF5DkY8vPmu1t2YlysGRDPG1%2F%2BBqSMWaVrGkaCcVThMertCnj4zhIzaPed77EFVOiT7G5i82VhLEO6CWDtUOcoe9SCJuWx43K%2FZZwu%2BJ7fV8PguroKr9BGXlBG39NGOkDMrVwq1bxi%2Bg8RWMx4eZIPHUQgvxzWpZT5oaxCkD9vUjndY318mN%2BQ5JwfRhHTwUC0MLbIt78GOqUB9yzjru6J5EhFw3sUG9UR24I6w5s78bFTMJJ0YzMXQINbZZorXHzZoCJlo7wGqHOny15rqvnWtI4KR52oLqRtxD7%2FjW3p085Fl30MwEFk7pnS1AMO33GXCpLjRkk%2BgncqGMi%2B3%2BTEWj77SJncVU317cXZKxJEtIblDYk2QnWFaQULRlj53zfLVoPfP3yqSkwctLaOwQzKNXvmt%2BpVm1Jd0egm8uMg&X-Amz-Signature=875a29e64949332cfe11c57c700ddf2f22252f796c70b2dc056ba597628ffa38&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLTSEYEZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T021909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQCsxVUPGh0R4vY5pTr7Y67WAmvdxZQbyNBC4U2Krx42OgIgDdTKdge0zepU0FRwOfCuezZctmw3F8PfB2SefNAgFp0qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKaDEI3ZgHRJQcB2dircA71wHHOLKxKtEFUhWS5dN825EbZy%2B115bm1SWF0J6SWNxTGd5Xla9u7lGdqeiTnRdWh5LzzQtLbrD%2FNEJa7XfgZ938IQ%2B5pBu%2BvqkwNFWk4TjuTlgp%2FO42yhCG%2FZ8%2FTc2B1ev2Nzb3ny6vXkMZBeo6nJBKntrTjwdz006Ovko7bUHZbwMiQDdW1mNYMaBVHAj4RcqzhprN89MmFqGGXkGw2Q8qQ2QZzrKL7PJtoYGUanwL%2F8QsG2fu6WXbwsWrZ6m%2BkhdmyjE7wEumhzsQJDRYSjBcqMicyDtGV17Ry8bAW461l9mGJ4Iuh093mxwbMcX2sl9uwelb%2BIB7yO2txq4BdRdNUXSV6fg3QepmVolUqSFsNVWZ9eVaIXZWUOa59KcD8%2BipOn0nDMt9JYj9mtkWN%2B1v%2B%2B2%2BeysPQaCIofyNJgvgyUFdf7mK9qsUMF5DkY8vPmu1t2YlysGRDPG1%2F%2BBqSMWaVrGkaCcVThMertCnj4zhIzaPed77EFVOiT7G5i82VhLEO6CWDtUOcoe9SCJuWx43K%2FZZwu%2BJ7fV8PguroKr9BGXlBG39NGOkDMrVwq1bxi%2Bg8RWMx4eZIPHUQgvxzWpZT5oaxCkD9vUjndY318mN%2BQ5JwfRhHTwUC0MLbIt78GOqUB9yzjru6J5EhFw3sUG9UR24I6w5s78bFTMJJ0YzMXQINbZZorXHzZoCJlo7wGqHOny15rqvnWtI4KR52oLqRtxD7%2FjW3p085Fl30MwEFk7pnS1AMO33GXCpLjRkk%2BgncqGMi%2B3%2BTEWj77SJncVU317cXZKxJEtIblDYk2QnWFaQULRlj53zfLVoPfP3yqSkwctLaOwQzKNXvmt%2BpVm1Jd0egm8uMg&X-Amz-Signature=cb3dd43b890ed1763ba75371797106c0f0fe82d419c4747da14938d863391e85&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
