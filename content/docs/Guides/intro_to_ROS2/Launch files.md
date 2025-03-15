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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JABCM6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrih6lfO5d%2B4wL6QoEMLTfm1%2BbeX%2FkOBxhjRsyfi%2F3iAiEAxlzEhhxbbWoxZADucZVz3UxU47OjAFt59HFu5HHfiPAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNG%2BuoayChINAlaW6SrcA7vEFtxHPu1hUm1YhLegRs7y6bK8MV52xwQ%2BSVnjz7bPDFnV%2BeG6Fq9SPn93vY%2FA6CkIMR9nvwYeClC7BnCTwN9n4PtyFSjBFW058ZtHVlW6ONNFhDwrJzZYe6mnA7Vptpnq9dZXNeVymYMEpo8vFPc2iGvZfNL31yIb3tG3Nk4Cyey9hZyLst52rNVgVYKPXVwI%2Fkb%2Bwz9JqBJ949Df9KVDmGxl%2Ff9Jit8sRhOIpUAM4A2Jpb6BcE%2FX5g3wHGTawfXbcyBdxoykZhSJ%2FkS422SPZfzFlbauP4YCGJ3Q5B%2FkaQ7BxnmDjXh36HZvVFc8%2BesJIouio2H3iv00Pfw3hq57D2aNcyzQ9qWjQe%2BYyplIyrEElap10E9OKzjPw2E23lbyq%2BL5WCWKLdyS2sQETBnKiHHq9HsdCQaHDf%2BlIjLLFtcHADgtdcFyJCa1s5TAuzRtFovC8KrrpN4isPL0KS3BpuT9UgPGqqDlKPmBhSzoY0xe1BKLVTgcFNTJb9GeCCuxTfWKZM1PUWBvv44giyM1MImvpXsgVAApAEYQ5QyT5TePOz6QxMxMihaQuTo2REahRhNjtwmOIksBw1Xc9peWLF08yqrvB210sauS%2BA8n0xunzHGrRhHaBJuUMO%2B81r4GOqUBXRs5vFbX8F3lDBSQHkBh5KzaTCv4WUxldayOEZCd7Chgf2UsanpKwTR5ITzXRsvAadxK%2FKHl5gfeoLZhXnO4sbhKyZF7J1UyoUG%2FTRiCHfhyanoarfhbdLQRAILJQkOub6J%2FelDDMz17oxCX4J5HDFRSgqePqkifiMDlxjxAVAE0K21AQf2ZZnJwDyJok%2FIQpcdHVVVxp4GYcRE3UJ9Xv0xjRlPi&X-Amz-Signature=252c8e06d24ce84357fc415abad48a57bba0fd6ca8dc4c6423a2475fb56d8aba&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JABCM6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrih6lfO5d%2B4wL6QoEMLTfm1%2BbeX%2FkOBxhjRsyfi%2F3iAiEAxlzEhhxbbWoxZADucZVz3UxU47OjAFt59HFu5HHfiPAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNG%2BuoayChINAlaW6SrcA7vEFtxHPu1hUm1YhLegRs7y6bK8MV52xwQ%2BSVnjz7bPDFnV%2BeG6Fq9SPn93vY%2FA6CkIMR9nvwYeClC7BnCTwN9n4PtyFSjBFW058ZtHVlW6ONNFhDwrJzZYe6mnA7Vptpnq9dZXNeVymYMEpo8vFPc2iGvZfNL31yIb3tG3Nk4Cyey9hZyLst52rNVgVYKPXVwI%2Fkb%2Bwz9JqBJ949Df9KVDmGxl%2Ff9Jit8sRhOIpUAM4A2Jpb6BcE%2FX5g3wHGTawfXbcyBdxoykZhSJ%2FkS422SPZfzFlbauP4YCGJ3Q5B%2FkaQ7BxnmDjXh36HZvVFc8%2BesJIouio2H3iv00Pfw3hq57D2aNcyzQ9qWjQe%2BYyplIyrEElap10E9OKzjPw2E23lbyq%2BL5WCWKLdyS2sQETBnKiHHq9HsdCQaHDf%2BlIjLLFtcHADgtdcFyJCa1s5TAuzRtFovC8KrrpN4isPL0KS3BpuT9UgPGqqDlKPmBhSzoY0xe1BKLVTgcFNTJb9GeCCuxTfWKZM1PUWBvv44giyM1MImvpXsgVAApAEYQ5QyT5TePOz6QxMxMihaQuTo2REahRhNjtwmOIksBw1Xc9peWLF08yqrvB210sauS%2BA8n0xunzHGrRhHaBJuUMO%2B81r4GOqUBXRs5vFbX8F3lDBSQHkBh5KzaTCv4WUxldayOEZCd7Chgf2UsanpKwTR5ITzXRsvAadxK%2FKHl5gfeoLZhXnO4sbhKyZF7J1UyoUG%2FTRiCHfhyanoarfhbdLQRAILJQkOub6J%2FelDDMz17oxCX4J5HDFRSgqePqkifiMDlxjxAVAE0K21AQf2ZZnJwDyJok%2FIQpcdHVVVxp4GYcRE3UJ9Xv0xjRlPi&X-Amz-Signature=7cdc172c74a7bb506c4cb551fa3c93a8febf2cf6471db980ae8f8eab7b42638a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JABCM6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T160816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDrih6lfO5d%2B4wL6QoEMLTfm1%2BbeX%2FkOBxhjRsyfi%2F3iAiEAxlzEhhxbbWoxZADucZVz3UxU47OjAFt59HFu5HHfiPAq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNG%2BuoayChINAlaW6SrcA7vEFtxHPu1hUm1YhLegRs7y6bK8MV52xwQ%2BSVnjz7bPDFnV%2BeG6Fq9SPn93vY%2FA6CkIMR9nvwYeClC7BnCTwN9n4PtyFSjBFW058ZtHVlW6ONNFhDwrJzZYe6mnA7Vptpnq9dZXNeVymYMEpo8vFPc2iGvZfNL31yIb3tG3Nk4Cyey9hZyLst52rNVgVYKPXVwI%2Fkb%2Bwz9JqBJ949Df9KVDmGxl%2Ff9Jit8sRhOIpUAM4A2Jpb6BcE%2FX5g3wHGTawfXbcyBdxoykZhSJ%2FkS422SPZfzFlbauP4YCGJ3Q5B%2FkaQ7BxnmDjXh36HZvVFc8%2BesJIouio2H3iv00Pfw3hq57D2aNcyzQ9qWjQe%2BYyplIyrEElap10E9OKzjPw2E23lbyq%2BL5WCWKLdyS2sQETBnKiHHq9HsdCQaHDf%2BlIjLLFtcHADgtdcFyJCa1s5TAuzRtFovC8KrrpN4isPL0KS3BpuT9UgPGqqDlKPmBhSzoY0xe1BKLVTgcFNTJb9GeCCuxTfWKZM1PUWBvv44giyM1MImvpXsgVAApAEYQ5QyT5TePOz6QxMxMihaQuTo2REahRhNjtwmOIksBw1Xc9peWLF08yqrvB210sauS%2BA8n0xunzHGrRhHaBJuUMO%2B81r4GOqUBXRs5vFbX8F3lDBSQHkBh5KzaTCv4WUxldayOEZCd7Chgf2UsanpKwTR5ITzXRsvAadxK%2FKHl5gfeoLZhXnO4sbhKyZF7J1UyoUG%2FTRiCHfhyanoarfhbdLQRAILJQkOub6J%2FelDDMz17oxCX4J5HDFRSgqePqkifiMDlxjxAVAE0K21AQf2ZZnJwDyJok%2FIQpcdHVVVxp4GYcRE3UJ9Xv0xjRlPi&X-Amz-Signature=8d587c6a19d91ad1ac012535c6eb02e9be5d602f379503aab5a0e8d1b4437f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
