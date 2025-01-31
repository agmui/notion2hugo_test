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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFTVOIR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpRXDxY8wQeWvbrxGkBxFt8ZlOvF3C8XxeN70t2nFs1AiBucuV9qF%2BrCmGw6dxd3dC8wWtBWnt7Jrlaw2aJ6FgsjCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhs6rJ%2BpQJka2JGWAKtwDicNM6m9dfTQ9isTIHxuzUncE37Mf1g5tK89GriJ6e1%2BFAujX7SOMVDOACP7Ge2OStV0EiZOuQ6Xl48lBo8%2FyF6YiTx1ay%2FUpZFDHhza84b9ic37YndLEkTCFtROpNzN59MPV1a2N2eyJ3Wuxmda6ujtpsnuRwmMoBKiYdrNEmg%2BEgLWYn%2FLsvZt3J1kQfPSTnaBBfwQ6gTUC0QHkZ9Avu1Qfgo33WAlPjpfrVK4tHT45g%2BCNzJo9GDJiOKkUCELF9383ii%2FG36l7uMAOk4FtRfDAMmBPj1e71lqhknHWCRAOxRBvZIkBfV74q6k2u%2BWsS85ZN%2Bcp%2BJMYHTqoFs6pRfh2jS4spNhEFfxHEttvDsoFojKMW18NLd3Ye%2FpwQJ5z7wDDOkZnBxPq2QcIXat3WQYk2ilADa2HjUvfe%2B9Tz%2B7dLQbTyhNYZx%2BboCuvh5PjsLeaAgyWfu9bH0N%2FYhANvGpbrkssZ6aiYmVb4nHCeC0Kcyf3yzbNdBI37bi66IVobKgdt198H1U5IhAo%2FDIr7FTEwgAsKEYKUWpMN5%2Bk15Z4j6uUDpokrohf9nkvlpdlDs0G1pPsNh49rTswaG0oDIebN7caqyNBxF7kwAMmmJu%2FtaCOts7hwN1q%2FQAw1f7xvAY6pgHiMcL9%2BJ%2FRVDOh98meFEZJ16up%2BpBo2jwcFOEIcU1MQIp73veVStrxJ5AJm8ll%2FGECjlps0mWLBhBSa2FHTXmdp2QCRYvTilHvg9WEwl8QbpJS4IYkG5q%2FyxFGIvs2md0b%2FlJSe9BC38Fhpi6ZHs0qUCN4ccI9%2FDAeMfHdOpIomhpb2O1ZYBkVp3SjtJ5%2Bye7%2BLB3n%2B1S7SQUJDYBd4j7j0tgHbVht&X-Amz-Signature=ad5b732f8b2aa76ccc10ecbf1b00d5a48f5e02cfa8c1b34138a06578aa2c6791&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFTVOIR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpRXDxY8wQeWvbrxGkBxFt8ZlOvF3C8XxeN70t2nFs1AiBucuV9qF%2BrCmGw6dxd3dC8wWtBWnt7Jrlaw2aJ6FgsjCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhs6rJ%2BpQJka2JGWAKtwDicNM6m9dfTQ9isTIHxuzUncE37Mf1g5tK89GriJ6e1%2BFAujX7SOMVDOACP7Ge2OStV0EiZOuQ6Xl48lBo8%2FyF6YiTx1ay%2FUpZFDHhza84b9ic37YndLEkTCFtROpNzN59MPV1a2N2eyJ3Wuxmda6ujtpsnuRwmMoBKiYdrNEmg%2BEgLWYn%2FLsvZt3J1kQfPSTnaBBfwQ6gTUC0QHkZ9Avu1Qfgo33WAlPjpfrVK4tHT45g%2BCNzJo9GDJiOKkUCELF9383ii%2FG36l7uMAOk4FtRfDAMmBPj1e71lqhknHWCRAOxRBvZIkBfV74q6k2u%2BWsS85ZN%2Bcp%2BJMYHTqoFs6pRfh2jS4spNhEFfxHEttvDsoFojKMW18NLd3Ye%2FpwQJ5z7wDDOkZnBxPq2QcIXat3WQYk2ilADa2HjUvfe%2B9Tz%2B7dLQbTyhNYZx%2BboCuvh5PjsLeaAgyWfu9bH0N%2FYhANvGpbrkssZ6aiYmVb4nHCeC0Kcyf3yzbNdBI37bi66IVobKgdt198H1U5IhAo%2FDIr7FTEwgAsKEYKUWpMN5%2Bk15Z4j6uUDpokrohf9nkvlpdlDs0G1pPsNh49rTswaG0oDIebN7caqyNBxF7kwAMmmJu%2FtaCOts7hwN1q%2FQAw1f7xvAY6pgHiMcL9%2BJ%2FRVDOh98meFEZJ16up%2BpBo2jwcFOEIcU1MQIp73veVStrxJ5AJm8ll%2FGECjlps0mWLBhBSa2FHTXmdp2QCRYvTilHvg9WEwl8QbpJS4IYkG5q%2FyxFGIvs2md0b%2FlJSe9BC38Fhpi6ZHs0qUCN4ccI9%2FDAeMfHdOpIomhpb2O1ZYBkVp3SjtJ5%2Bye7%2BLB3n%2B1S7SQUJDYBd4j7j0tgHbVht&X-Amz-Signature=daf137c8aab0d8bf53b5475348a4cd2de48fdde0565897133f056b30f1a8ff15&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOFTVOIR%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFpRXDxY8wQeWvbrxGkBxFt8ZlOvF3C8XxeN70t2nFs1AiBucuV9qF%2BrCmGw6dxd3dC8wWtBWnt7Jrlaw2aJ6FgsjCqIBAi5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhs6rJ%2BpQJka2JGWAKtwDicNM6m9dfTQ9isTIHxuzUncE37Mf1g5tK89GriJ6e1%2BFAujX7SOMVDOACP7Ge2OStV0EiZOuQ6Xl48lBo8%2FyF6YiTx1ay%2FUpZFDHhza84b9ic37YndLEkTCFtROpNzN59MPV1a2N2eyJ3Wuxmda6ujtpsnuRwmMoBKiYdrNEmg%2BEgLWYn%2FLsvZt3J1kQfPSTnaBBfwQ6gTUC0QHkZ9Avu1Qfgo33WAlPjpfrVK4tHT45g%2BCNzJo9GDJiOKkUCELF9383ii%2FG36l7uMAOk4FtRfDAMmBPj1e71lqhknHWCRAOxRBvZIkBfV74q6k2u%2BWsS85ZN%2Bcp%2BJMYHTqoFs6pRfh2jS4spNhEFfxHEttvDsoFojKMW18NLd3Ye%2FpwQJ5z7wDDOkZnBxPq2QcIXat3WQYk2ilADa2HjUvfe%2B9Tz%2B7dLQbTyhNYZx%2BboCuvh5PjsLeaAgyWfu9bH0N%2FYhANvGpbrkssZ6aiYmVb4nHCeC0Kcyf3yzbNdBI37bi66IVobKgdt198H1U5IhAo%2FDIr7FTEwgAsKEYKUWpMN5%2Bk15Z4j6uUDpokrohf9nkvlpdlDs0G1pPsNh49rTswaG0oDIebN7caqyNBxF7kwAMmmJu%2FtaCOts7hwN1q%2FQAw1f7xvAY6pgHiMcL9%2BJ%2FRVDOh98meFEZJ16up%2BpBo2jwcFOEIcU1MQIp73veVStrxJ5AJm8ll%2FGECjlps0mWLBhBSa2FHTXmdp2QCRYvTilHvg9WEwl8QbpJS4IYkG5q%2FyxFGIvs2md0b%2FlJSe9BC38Fhpi6ZHs0qUCN4ccI9%2FDAeMfHdOpIomhpb2O1ZYBkVp3SjtJ5%2Bye7%2BLB3n%2B1S7SQUJDYBd4j7j0tgHbVht&X-Amz-Signature=5807ece83bc804e2e087318710aa61236d7354bdc0617165d47fd2f552bcaf22&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
