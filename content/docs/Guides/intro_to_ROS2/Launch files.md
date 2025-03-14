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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7OXIWF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM7KszcMeoFi1w2jL7pc22uj2SB4Hs9Rdw8AeJbcINfAiEAr4aI4UT9dN9wJ%2F7ZZxEKRUmvcjUGqElBzdkGvLeXfTcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3wqH3xaaka44yNxyrcAz8H16AcnpwnK98Vf5J3pI9fmYuWHYKcK19mRdF%2BIxXuqertsZ%2FDOzMsbg52TnAJV8ujPSaoJ0a3y1QpLJi8nrO20nYNxznxtVXfIrOCuNeY%2BwOtgmyo5ZUPi3mBAoAoPhpp7M2pOsuqx3F9mGl8YMHHrdaXTmc8ELKplcuEEvN%2FJAqAk0EHpE%2FPaZBEMO8SIeeapCo9OEYfmKE%2BHpeOu%2BfY8GbbCyEfNuH5FIzE49TCRGJbr%2Fb%2BZhh9qXRWu0Vvnxdcms2ywBpQPJxFsNP6a0IAvoQz9dALQObrZOJZSDfIJEbQdfoW605q9hPT3wgNqJoc0PKygjYRhCeodixcNg6lDe%2Fc3qlsXMdDWnLr7oo%2F%2F9ejaIODaP7QFDAFMK4dg2Ro5UytIdP22DMXw7CWWf45bf4tlbV4PWVWkZSaAmgUf%2BfkfgBfSuiPqP71KH%2FU3bkeVUQNXgOFkMF56BFfd6fVjsDn8UfULic%2BBGfiY%2Bg%2F0Jl1fCCH62VMocfQDWGmy0wW4oLAp%2Fc8f7XdFqUJOSuBUVUXFp0iRu91P1E2LGP24zcG8jN3%2FjnZtn%2BXmYOpSbxlU%2BeiIOQjXro60CRa6CoE06tEcDPyYRUPDnZX%2BsP4PB2ypHYhx5uN%2FHjiMMOi0b4GOqUBFB2KoiMXC21ypUtVYfUm5RUc1zPpJvxqG7RFuiFXssxrhMFkFJzaeco7SUi0%2B%2B2jHBVKEb7IngWoTsxR1oScXI2J8RTa%2FNFdmwpRgi%2BauNdIR7SPbSLGg8ZU1Kb%2BYYEFWrqNVa9daSdp2JZrj6JM%2BU4SvZC77yxnBx3OekT%2BhzT%2FeKYAwLvCrQVjvmyFULBk5mo7fgGuZRRB3N8rJymUKq1tuwZ0&X-Amz-Signature=553e0921eb52f55486f3e9221cf8932acbb1aadd4ff841e5e5df43efb3e5fc06&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7OXIWF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM7KszcMeoFi1w2jL7pc22uj2SB4Hs9Rdw8AeJbcINfAiEAr4aI4UT9dN9wJ%2F7ZZxEKRUmvcjUGqElBzdkGvLeXfTcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3wqH3xaaka44yNxyrcAz8H16AcnpwnK98Vf5J3pI9fmYuWHYKcK19mRdF%2BIxXuqertsZ%2FDOzMsbg52TnAJV8ujPSaoJ0a3y1QpLJi8nrO20nYNxznxtVXfIrOCuNeY%2BwOtgmyo5ZUPi3mBAoAoPhpp7M2pOsuqx3F9mGl8YMHHrdaXTmc8ELKplcuEEvN%2FJAqAk0EHpE%2FPaZBEMO8SIeeapCo9OEYfmKE%2BHpeOu%2BfY8GbbCyEfNuH5FIzE49TCRGJbr%2Fb%2BZhh9qXRWu0Vvnxdcms2ywBpQPJxFsNP6a0IAvoQz9dALQObrZOJZSDfIJEbQdfoW605q9hPT3wgNqJoc0PKygjYRhCeodixcNg6lDe%2Fc3qlsXMdDWnLr7oo%2F%2F9ejaIODaP7QFDAFMK4dg2Ro5UytIdP22DMXw7CWWf45bf4tlbV4PWVWkZSaAmgUf%2BfkfgBfSuiPqP71KH%2FU3bkeVUQNXgOFkMF56BFfd6fVjsDn8UfULic%2BBGfiY%2Bg%2F0Jl1fCCH62VMocfQDWGmy0wW4oLAp%2Fc8f7XdFqUJOSuBUVUXFp0iRu91P1E2LGP24zcG8jN3%2FjnZtn%2BXmYOpSbxlU%2BeiIOQjXro60CRa6CoE06tEcDPyYRUPDnZX%2BsP4PB2ypHYhx5uN%2FHjiMMOi0b4GOqUBFB2KoiMXC21ypUtVYfUm5RUc1zPpJvxqG7RFuiFXssxrhMFkFJzaeco7SUi0%2B%2B2jHBVKEb7IngWoTsxR1oScXI2J8RTa%2FNFdmwpRgi%2BauNdIR7SPbSLGg8ZU1Kb%2BYYEFWrqNVa9daSdp2JZrj6JM%2BU4SvZC77yxnBx3OekT%2BhzT%2FeKYAwLvCrQVjvmyFULBk5mo7fgGuZRRB3N8rJymUKq1tuwZ0&X-Amz-Signature=61de159de8b022aa6a125bed6a9d9d24e1c52cfcceee6af869dcf8523c1225bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7OXIWF%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T160931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHM7KszcMeoFi1w2jL7pc22uj2SB4Hs9Rdw8AeJbcINfAiEAr4aI4UT9dN9wJ%2F7ZZxEKRUmvcjUGqElBzdkGvLeXfTcqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3wqH3xaaka44yNxyrcAz8H16AcnpwnK98Vf5J3pI9fmYuWHYKcK19mRdF%2BIxXuqertsZ%2FDOzMsbg52TnAJV8ujPSaoJ0a3y1QpLJi8nrO20nYNxznxtVXfIrOCuNeY%2BwOtgmyo5ZUPi3mBAoAoPhpp7M2pOsuqx3F9mGl8YMHHrdaXTmc8ELKplcuEEvN%2FJAqAk0EHpE%2FPaZBEMO8SIeeapCo9OEYfmKE%2BHpeOu%2BfY8GbbCyEfNuH5FIzE49TCRGJbr%2Fb%2BZhh9qXRWu0Vvnxdcms2ywBpQPJxFsNP6a0IAvoQz9dALQObrZOJZSDfIJEbQdfoW605q9hPT3wgNqJoc0PKygjYRhCeodixcNg6lDe%2Fc3qlsXMdDWnLr7oo%2F%2F9ejaIODaP7QFDAFMK4dg2Ro5UytIdP22DMXw7CWWf45bf4tlbV4PWVWkZSaAmgUf%2BfkfgBfSuiPqP71KH%2FU3bkeVUQNXgOFkMF56BFfd6fVjsDn8UfULic%2BBGfiY%2Bg%2F0Jl1fCCH62VMocfQDWGmy0wW4oLAp%2Fc8f7XdFqUJOSuBUVUXFp0iRu91P1E2LGP24zcG8jN3%2FjnZtn%2BXmYOpSbxlU%2BeiIOQjXro60CRa6CoE06tEcDPyYRUPDnZX%2BsP4PB2ypHYhx5uN%2FHjiMMOi0b4GOqUBFB2KoiMXC21ypUtVYfUm5RUc1zPpJvxqG7RFuiFXssxrhMFkFJzaeco7SUi0%2B%2B2jHBVKEb7IngWoTsxR1oScXI2J8RTa%2FNFdmwpRgi%2BauNdIR7SPbSLGg8ZU1Kb%2BYYEFWrqNVa9daSdp2JZrj6JM%2BU4SvZC77yxnBx3OekT%2BhzT%2FeKYAwLvCrQVjvmyFULBk5mo7fgGuZRRB3N8rJymUKq1tuwZ0&X-Amz-Signature=44225e3f981be90e00870bf5bad1ffddd293ffc126929f3c4330d7f5efaf199e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
