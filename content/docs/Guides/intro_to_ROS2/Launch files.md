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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKNH4OCF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBSSxPAVWbORRpUjs286wx8bK3mlS%2BPw2PIInUGPRDBjAiAqGf3Pm%2Bp4DSm69d2od52L7aKPCJMxZmuqP7Q15Bh5bSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM64edqPkmn6XbtqLbKtwDCUwjy2D3mmgU8%2FgMXcdgsHRrQvoTc1wy5XJGlqOFHpd1k5i8Ru75d6ovmKy4tkeuGDzisUoRAbU4%2BKsm38MtMEJxKkCQp61mdYiDfqDb8w%2FjY6VP%2FDP04ZqoSK%2B%2B6mkjdP4CfIJcYcMrc2py2hgyvCDnXkIGA%2F1J9yiDvwheqnb6OdIh4UK14ESyl9fWQr9EIUff9kK72ANzEDj6kQZ1TUe%2B3JYOqawndMPeO0RgKewTpEvU7aU8t8ABjii7%2BQsbStPnTSnn3APLH3pS%2BIj6KyAldDXEwlRf2ix62cXxFKmcX1vhfRkkyJJCUARRcfGlNs8vibl%2FGj6OpQRNAS4Sl5yf18xbu%2FmmVm81hb2iTvl4uTFb2JwNTgQbcpII0tGf%2B9txZGJ6hhnyNUr%2Bq53a6iiZ156Tf7H%2BDC%2Fa5ll1UcOV3ojskHe5jaOK3wLSgsnT%2FSYQqNhqgFPKxYVHhQu6n932Tkr7MKI7pZQIE1wGgml%2Fgq3iNtcq%2BI5KTn%2BScPqd5GMv7fYzS0vsdETW8GvdnftMqdvNqyYHabYiKSs6B9r0zzdV52vhh8EBF1KZvIOXnf9NeLE5DG8xY0%2Bf6Y6WfIQNGK%2BrnehOwrKptkVYeRTpY1wGCJjNlVUynfEw5OC3vgY6pgHTmkAN2HciMwn%2B3JhqbgO3ySnA%2B239K%2FOagMxZyGt6%2BKw2SNh4fRv3cxezeQpFoWJlZKQxz2PqL8ePhoA179xsjmtPhz5SEVYAuY5eGMFqUU8OLI2H72%2FfLb5Pzr9kYfmFCUo2vFCfWde76WNQYTR%2F9F%2BMmad8R56p1zrvwh2Ya%2Fkmy0zWop9FIV38XhYr2x78LTmAADHBvPfUx%2BplXfLeIo1KBTkS&X-Amz-Signature=8ab78a602fdd972c2e54ec167023158b51cd565e1df35701b922fa00dfe2f5b3&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKNH4OCF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBSSxPAVWbORRpUjs286wx8bK3mlS%2BPw2PIInUGPRDBjAiAqGf3Pm%2Bp4DSm69d2od52L7aKPCJMxZmuqP7Q15Bh5bSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM64edqPkmn6XbtqLbKtwDCUwjy2D3mmgU8%2FgMXcdgsHRrQvoTc1wy5XJGlqOFHpd1k5i8Ru75d6ovmKy4tkeuGDzisUoRAbU4%2BKsm38MtMEJxKkCQp61mdYiDfqDb8w%2FjY6VP%2FDP04ZqoSK%2B%2B6mkjdP4CfIJcYcMrc2py2hgyvCDnXkIGA%2F1J9yiDvwheqnb6OdIh4UK14ESyl9fWQr9EIUff9kK72ANzEDj6kQZ1TUe%2B3JYOqawndMPeO0RgKewTpEvU7aU8t8ABjii7%2BQsbStPnTSnn3APLH3pS%2BIj6KyAldDXEwlRf2ix62cXxFKmcX1vhfRkkyJJCUARRcfGlNs8vibl%2FGj6OpQRNAS4Sl5yf18xbu%2FmmVm81hb2iTvl4uTFb2JwNTgQbcpII0tGf%2B9txZGJ6hhnyNUr%2Bq53a6iiZ156Tf7H%2BDC%2Fa5ll1UcOV3ojskHe5jaOK3wLSgsnT%2FSYQqNhqgFPKxYVHhQu6n932Tkr7MKI7pZQIE1wGgml%2Fgq3iNtcq%2BI5KTn%2BScPqd5GMv7fYzS0vsdETW8GvdnftMqdvNqyYHabYiKSs6B9r0zzdV52vhh8EBF1KZvIOXnf9NeLE5DG8xY0%2Bf6Y6WfIQNGK%2BrnehOwrKptkVYeRTpY1wGCJjNlVUynfEw5OC3vgY6pgHTmkAN2HciMwn%2B3JhqbgO3ySnA%2B239K%2FOagMxZyGt6%2BKw2SNh4fRv3cxezeQpFoWJlZKQxz2PqL8ePhoA179xsjmtPhz5SEVYAuY5eGMFqUU8OLI2H72%2FfLb5Pzr9kYfmFCUo2vFCfWde76WNQYTR%2F9F%2BMmad8R56p1zrvwh2Ya%2Fkmy0zWop9FIV38XhYr2x78LTmAADHBvPfUx%2BplXfLeIo1KBTkS&X-Amz-Signature=ecfb965a1ebd01f117e5e2cd98bb5ab29c4a986b3b017ba959f4be74981c99f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKNH4OCF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T220348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJGMEQCIBSSxPAVWbORRpUjs286wx8bK3mlS%2BPw2PIInUGPRDBjAiAqGf3Pm%2Bp4DSm69d2od52L7aKPCJMxZmuqP7Q15Bh5bSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM64edqPkmn6XbtqLbKtwDCUwjy2D3mmgU8%2FgMXcdgsHRrQvoTc1wy5XJGlqOFHpd1k5i8Ru75d6ovmKy4tkeuGDzisUoRAbU4%2BKsm38MtMEJxKkCQp61mdYiDfqDb8w%2FjY6VP%2FDP04ZqoSK%2B%2B6mkjdP4CfIJcYcMrc2py2hgyvCDnXkIGA%2F1J9yiDvwheqnb6OdIh4UK14ESyl9fWQr9EIUff9kK72ANzEDj6kQZ1TUe%2B3JYOqawndMPeO0RgKewTpEvU7aU8t8ABjii7%2BQsbStPnTSnn3APLH3pS%2BIj6KyAldDXEwlRf2ix62cXxFKmcX1vhfRkkyJJCUARRcfGlNs8vibl%2FGj6OpQRNAS4Sl5yf18xbu%2FmmVm81hb2iTvl4uTFb2JwNTgQbcpII0tGf%2B9txZGJ6hhnyNUr%2Bq53a6iiZ156Tf7H%2BDC%2Fa5ll1UcOV3ojskHe5jaOK3wLSgsnT%2FSYQqNhqgFPKxYVHhQu6n932Tkr7MKI7pZQIE1wGgml%2Fgq3iNtcq%2BI5KTn%2BScPqd5GMv7fYzS0vsdETW8GvdnftMqdvNqyYHabYiKSs6B9r0zzdV52vhh8EBF1KZvIOXnf9NeLE5DG8xY0%2Bf6Y6WfIQNGK%2BrnehOwrKptkVYeRTpY1wGCJjNlVUynfEw5OC3vgY6pgHTmkAN2HciMwn%2B3JhqbgO3ySnA%2B239K%2FOagMxZyGt6%2BKw2SNh4fRv3cxezeQpFoWJlZKQxz2PqL8ePhoA179xsjmtPhz5SEVYAuY5eGMFqUU8OLI2H72%2FfLb5Pzr9kYfmFCUo2vFCfWde76WNQYTR%2F9F%2BMmad8R56p1zrvwh2Ya%2Fkmy0zWop9FIV38XhYr2x78LTmAADHBvPfUx%2BplXfLeIo1KBTkS&X-Amz-Signature=dddf2145a960936015b03d4196821a3d554e21d6209034d5bae11239634f5a71&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
