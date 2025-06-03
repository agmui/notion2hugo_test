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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BFMJAP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCw0CtKpTpu7UVCqn97hz%2FVKKLASp984vY8Bt%2BVP3H5pgIhAJFTjyGfjw2mS7nvt0GTBBGebiqTN%2BQlWKeiHDCIhIAoKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG190jduSRr7NCvOcq3APNmSEi5xQ3NizIFaq8VSe0xlxRzl7BPPuQAG9clhmKrDzwx7IsYxtKnpd5jkVynUm5jIxy1dNhKeDNtALYAdenIJQPN3RlE2FeZCPF%2F7LXvj6hk70YN%2Fym9pFvIC9MmBNRasptnqnQmwamhRJ%2B1R%2BR70UiElLVaJzQaz%2Fl9Y8gbRrqBc3ilb5YILApRop5HLXXQ6WJ%2Fq8wgPcebmw%2B5pr8OZspWmnb%2B%2B9hp6fGntqk0J2%2FQJzcZU7mAE6a6YuX%2FvsT%2BBa8iM2ki18p3HEvkxrT3NQZO3vGjwpN1EkYPCu%2FIWkXLYi1W4Z3Rei%2BaxMMdiVwnAotD12yTTULwU9fIM73pq9BS2dxdZmQd5qSE0lEnIrP4TGZIfMQyLao%2BmUnl4v%2BLZyhRfu2Z5%2Bpsm4S31J1hOfk032FSl%2Fd8BQRhgHocotZaae3EI%2Bei%2Fs0iTaGKMsKg7mwJOntirZBMJn5letYqJkDtY0Ef%2F36UFPYdAMyNBhNB94j6nrrcRs8Pe5CLhDo%2F%2F1HaD3hE5t7vVXfTrurKJtMTzbPwJN5hUx0HX0bAOcM0ieFmmOZtRZdgz6k8k8fanGk%2BexLoVQlRQkl95F%2BO0H2QgPMNo6QjQtDxrQhs4BFaK3K3ek%2BMIjbEjDV5%2FjBBjqkAb%2F3aB6u%2FuLbuFkyuds5NTVAGJiqwcHIbSpq4tFmyNhbyjbQxhUUx068zLLsTRm%2BdkyKjhl%2BBbsLrzXjz051KydRtK4Mj6sRwYiNm8Gl5HxlLU15hDEddx3meOnyg%2FowYTEboA5dF8Ygiio%2Bpcj635ezW4HDihD1bE9XEhtNNIKNzSn3oVU2dE4l71Qy0z%2FkGUHDe6dJSVT6YQxctMxmQ%2FQzGR3%2B&X-Amz-Signature=cbef899e1185792c4ccb53c527d4a15e1a5bb2d897b0217c14a819eaa80783ec&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BFMJAP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCw0CtKpTpu7UVCqn97hz%2FVKKLASp984vY8Bt%2BVP3H5pgIhAJFTjyGfjw2mS7nvt0GTBBGebiqTN%2BQlWKeiHDCIhIAoKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG190jduSRr7NCvOcq3APNmSEi5xQ3NizIFaq8VSe0xlxRzl7BPPuQAG9clhmKrDzwx7IsYxtKnpd5jkVynUm5jIxy1dNhKeDNtALYAdenIJQPN3RlE2FeZCPF%2F7LXvj6hk70YN%2Fym9pFvIC9MmBNRasptnqnQmwamhRJ%2B1R%2BR70UiElLVaJzQaz%2Fl9Y8gbRrqBc3ilb5YILApRop5HLXXQ6WJ%2Fq8wgPcebmw%2B5pr8OZspWmnb%2B%2B9hp6fGntqk0J2%2FQJzcZU7mAE6a6YuX%2FvsT%2BBa8iM2ki18p3HEvkxrT3NQZO3vGjwpN1EkYPCu%2FIWkXLYi1W4Z3Rei%2BaxMMdiVwnAotD12yTTULwU9fIM73pq9BS2dxdZmQd5qSE0lEnIrP4TGZIfMQyLao%2BmUnl4v%2BLZyhRfu2Z5%2Bpsm4S31J1hOfk032FSl%2Fd8BQRhgHocotZaae3EI%2Bei%2Fs0iTaGKMsKg7mwJOntirZBMJn5letYqJkDtY0Ef%2F36UFPYdAMyNBhNB94j6nrrcRs8Pe5CLhDo%2F%2F1HaD3hE5t7vVXfTrurKJtMTzbPwJN5hUx0HX0bAOcM0ieFmmOZtRZdgz6k8k8fanGk%2BexLoVQlRQkl95F%2BO0H2QgPMNo6QjQtDxrQhs4BFaK3K3ek%2BMIjbEjDV5%2FjBBjqkAb%2F3aB6u%2FuLbuFkyuds5NTVAGJiqwcHIbSpq4tFmyNhbyjbQxhUUx068zLLsTRm%2BdkyKjhl%2BBbsLrzXjz051KydRtK4Mj6sRwYiNm8Gl5HxlLU15hDEddx3meOnyg%2FowYTEboA5dF8Ygiio%2Bpcj635ezW4HDihD1bE9XEhtNNIKNzSn3oVU2dE4l71Qy0z%2FkGUHDe6dJSVT6YQxctMxmQ%2FQzGR3%2B&X-Amz-Signature=3158ec804d08c9d627affa261553fb2214f324974f0618494543026187c9f0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633BFMJAP%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQCw0CtKpTpu7UVCqn97hz%2FVKKLASp984vY8Bt%2BVP3H5pgIhAJFTjyGfjw2mS7nvt0GTBBGebiqTN%2BQlWKeiHDCIhIAoKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG190jduSRr7NCvOcq3APNmSEi5xQ3NizIFaq8VSe0xlxRzl7BPPuQAG9clhmKrDzwx7IsYxtKnpd5jkVynUm5jIxy1dNhKeDNtALYAdenIJQPN3RlE2FeZCPF%2F7LXvj6hk70YN%2Fym9pFvIC9MmBNRasptnqnQmwamhRJ%2B1R%2BR70UiElLVaJzQaz%2Fl9Y8gbRrqBc3ilb5YILApRop5HLXXQ6WJ%2Fq8wgPcebmw%2B5pr8OZspWmnb%2B%2B9hp6fGntqk0J2%2FQJzcZU7mAE6a6YuX%2FvsT%2BBa8iM2ki18p3HEvkxrT3NQZO3vGjwpN1EkYPCu%2FIWkXLYi1W4Z3Rei%2BaxMMdiVwnAotD12yTTULwU9fIM73pq9BS2dxdZmQd5qSE0lEnIrP4TGZIfMQyLao%2BmUnl4v%2BLZyhRfu2Z5%2Bpsm4S31J1hOfk032FSl%2Fd8BQRhgHocotZaae3EI%2Bei%2Fs0iTaGKMsKg7mwJOntirZBMJn5letYqJkDtY0Ef%2F36UFPYdAMyNBhNB94j6nrrcRs8Pe5CLhDo%2F%2F1HaD3hE5t7vVXfTrurKJtMTzbPwJN5hUx0HX0bAOcM0ieFmmOZtRZdgz6k8k8fanGk%2BexLoVQlRQkl95F%2BO0H2QgPMNo6QjQtDxrQhs4BFaK3K3ek%2BMIjbEjDV5%2FjBBjqkAb%2F3aB6u%2FuLbuFkyuds5NTVAGJiqwcHIbSpq4tFmyNhbyjbQxhUUx068zLLsTRm%2BdkyKjhl%2BBbsLrzXjz051KydRtK4Mj6sRwYiNm8Gl5HxlLU15hDEddx3meOnyg%2FowYTEboA5dF8Ygiio%2Bpcj635ezW4HDihD1bE9XEhtNNIKNzSn3oVU2dE4l71Qy0z%2FkGUHDe6dJSVT6YQxctMxmQ%2FQzGR3%2B&X-Amz-Signature=f3edaff8541ae8906c09042fb65fc88574d51fe5e1e1d83e8589ec9715ac108a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
