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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWKNB2D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9MLrRPMRSBMILTuZCmGObTENPzZayFVaZ8cKqRQokSAiEAk6yHmh3e42G8SRzdLdvawSBTJ4osvDvn%2FNrqlm9o5FMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP2fIglyOjftT3WfwyrcA2SP5VThxP3yINFltiqH3a2%2BpIYUcF1ZTOW8m12wTZ0EhrAxvRRE4HXvFN84eBDS7V1LCMIfSgH0lrjm8%2FOPBjPjyAxZuhxbejJaL5TH6PkhWLgjQT02X6ggYiL91MM5pq1gtgVLmat6HhUSj6t5k5qvVaqRB1hkWaRNIMDUpg5cZkpNngRKrENQFDmJ91ncC%2Bqg3bV6ykmxysZVjLiVd1UespyHxUnmVbPPv8XfnuGUnbhRYd6y6bridXUuHXko5Awtg%2BqFfy482Up307oKJqA0UyJ%2FjebwJSvt15D7KGOVUPSvtPq5vHi280TTy5efPiuq7r0SFHm%2BfzNJT7M5exob27H7bi%2FaCRp7WSbjANGakMBBq7G9O%2B2YRnDcM4tV0KmuaJxldh2qVJxYcnduq5Cl7VD2f3dSr0MAKeXrtE5XZOXi%2B82ER%2BF06uJQMUD92QZFAaZD2UBTkAyo0cYEznY4XGDNNHtFfmJU0sYZ0A7wy1zXYqFiLtKPnsXts%2Fo0570JwELBZg6F2XQPcC1MLzQrhSG0Ot66b%2BADvA2aTuC6po764%2Bj1GYVi3O81oylOohzdx4%2F%2FdunfNSkBJRq9zgu5CChHZVUD16lM9MNVo9T3FONCU2SXYdmJwq%2F%2FMI7KhMAGOqUBR5kIQDaaJ8yRvgNkh0SGAjN7oNBXmi39hAeVejqc%2FR3zzsxHTeVh9fgZDqGYvIWEfIEUP6pkulXWkdtHlEQxnaMv7faCNqO41PUSwerj95llmB8Bzfm2XYcs8qdBRQANVIHB1gAU%2FEOVYhNM%2FYgrL5Bymlz72sZ8TBCzPbDWmg%2F%2BW8KHNSRwGKN9kGyGV5yAm53whMRp%2FIQMzY3%2F3wjhvn1rhgBd&X-Amz-Signature=2be741acb568c7c95e42c5e9d4a11b45db481403f5ea530c24b8c12c335a3990&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWKNB2D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9MLrRPMRSBMILTuZCmGObTENPzZayFVaZ8cKqRQokSAiEAk6yHmh3e42G8SRzdLdvawSBTJ4osvDvn%2FNrqlm9o5FMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP2fIglyOjftT3WfwyrcA2SP5VThxP3yINFltiqH3a2%2BpIYUcF1ZTOW8m12wTZ0EhrAxvRRE4HXvFN84eBDS7V1LCMIfSgH0lrjm8%2FOPBjPjyAxZuhxbejJaL5TH6PkhWLgjQT02X6ggYiL91MM5pq1gtgVLmat6HhUSj6t5k5qvVaqRB1hkWaRNIMDUpg5cZkpNngRKrENQFDmJ91ncC%2Bqg3bV6ykmxysZVjLiVd1UespyHxUnmVbPPv8XfnuGUnbhRYd6y6bridXUuHXko5Awtg%2BqFfy482Up307oKJqA0UyJ%2FjebwJSvt15D7KGOVUPSvtPq5vHi280TTy5efPiuq7r0SFHm%2BfzNJT7M5exob27H7bi%2FaCRp7WSbjANGakMBBq7G9O%2B2YRnDcM4tV0KmuaJxldh2qVJxYcnduq5Cl7VD2f3dSr0MAKeXrtE5XZOXi%2B82ER%2BF06uJQMUD92QZFAaZD2UBTkAyo0cYEznY4XGDNNHtFfmJU0sYZ0A7wy1zXYqFiLtKPnsXts%2Fo0570JwELBZg6F2XQPcC1MLzQrhSG0Ot66b%2BADvA2aTuC6po764%2Bj1GYVi3O81oylOohzdx4%2F%2FdunfNSkBJRq9zgu5CChHZVUD16lM9MNVo9T3FONCU2SXYdmJwq%2F%2FMI7KhMAGOqUBR5kIQDaaJ8yRvgNkh0SGAjN7oNBXmi39hAeVejqc%2FR3zzsxHTeVh9fgZDqGYvIWEfIEUP6pkulXWkdtHlEQxnaMv7faCNqO41PUSwerj95llmB8Bzfm2XYcs8qdBRQANVIHB1gAU%2FEOVYhNM%2FYgrL5Bymlz72sZ8TBCzPbDWmg%2F%2BW8KHNSRwGKN9kGyGV5yAm53whMRp%2FIQMzY3%2F3wjhvn1rhgBd&X-Amz-Signature=7ca1f14437bb508d32ffb4b651f5d3c15d4a34daf3d2ed0feb5644bd0cf0d2f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWKNB2D%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH9MLrRPMRSBMILTuZCmGObTENPzZayFVaZ8cKqRQokSAiEAk6yHmh3e42G8SRzdLdvawSBTJ4osvDvn%2FNrqlm9o5FMq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDP2fIglyOjftT3WfwyrcA2SP5VThxP3yINFltiqH3a2%2BpIYUcF1ZTOW8m12wTZ0EhrAxvRRE4HXvFN84eBDS7V1LCMIfSgH0lrjm8%2FOPBjPjyAxZuhxbejJaL5TH6PkhWLgjQT02X6ggYiL91MM5pq1gtgVLmat6HhUSj6t5k5qvVaqRB1hkWaRNIMDUpg5cZkpNngRKrENQFDmJ91ncC%2Bqg3bV6ykmxysZVjLiVd1UespyHxUnmVbPPv8XfnuGUnbhRYd6y6bridXUuHXko5Awtg%2BqFfy482Up307oKJqA0UyJ%2FjebwJSvt15D7KGOVUPSvtPq5vHi280TTy5efPiuq7r0SFHm%2BfzNJT7M5exob27H7bi%2FaCRp7WSbjANGakMBBq7G9O%2B2YRnDcM4tV0KmuaJxldh2qVJxYcnduq5Cl7VD2f3dSr0MAKeXrtE5XZOXi%2B82ER%2BF06uJQMUD92QZFAaZD2UBTkAyo0cYEznY4XGDNNHtFfmJU0sYZ0A7wy1zXYqFiLtKPnsXts%2Fo0570JwELBZg6F2XQPcC1MLzQrhSG0Ot66b%2BADvA2aTuC6po764%2Bj1GYVi3O81oylOohzdx4%2F%2FdunfNSkBJRq9zgu5CChHZVUD16lM9MNVo9T3FONCU2SXYdmJwq%2F%2FMI7KhMAGOqUBR5kIQDaaJ8yRvgNkh0SGAjN7oNBXmi39hAeVejqc%2FR3zzsxHTeVh9fgZDqGYvIWEfIEUP6pkulXWkdtHlEQxnaMv7faCNqO41PUSwerj95llmB8Bzfm2XYcs8qdBRQANVIHB1gAU%2FEOVYhNM%2FYgrL5Bymlz72sZ8TBCzPbDWmg%2F%2BW8KHNSRwGKN9kGyGV5yAm53whMRp%2FIQMzY3%2F3wjhvn1rhgBd&X-Amz-Signature=3d2234ed54eaaa0fbc1834e6f14c478eb56334df65774f02f7f510308c0d2b70&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
