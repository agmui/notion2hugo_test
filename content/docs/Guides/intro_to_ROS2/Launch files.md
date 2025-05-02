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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZG3KZP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4FY6ABZ3MFlLTw9ZaKFh%2F4VWozA%2BC5WiLU7nFA7JEOAIgYDH07ctpnyOUJGpNLcFYz2iR60rwJVfaJonBF8NJwboqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbJsDNZXa9z9Vn5nSrcA9hA72nWsRz79jD6bZufIoLy0JS%2BJO1Mnla8cH%2BtMuuVPvU0kcYnpibXRgqBQcsOkrQCirMf0OLRWDWRhNabhifA1PBbGkZXffsHVjfjx9seMw5%2FWLbOVgFsbcvNF0%2FShtzxyGSuFhjNCmgUHQK6O62ZS75aVMBzQZQJaZNc5S%2BDHcHAPXB7rfT2zf5kQTvJwSGQlq1DlqGWfMd%2FNr6RXvg8aYO2dgNniIh98ufbY2TBp81K8jd87EjPxDBuYvN%2BT28ozmAmqKH4ebK09JlBXeThNozidcPhG8MEh1b1IlrAabWqatCJRNA73oFL6GRVeUHUVnQvpoSoYTLF%2FQnEQDMxNiyI%2F0O88r6WotTELL3vkgLTsmw%2F98%2Fim6S7Bzb6%2Ftae%2Biz7JfmPD6S1moem3FxH45J%2Fb7WOFO2RnQDV9Y2YEGSXVQROclRDL5uD6H4a5%2BoukH0mJ4em7klw2GdM2s33HjzP21g0JE2urqlYIHhmLfVyaCZCeIOsZnPipz8ZePYgFwwC3cZOIjnPmUM%2FuKA%2BbHTRtsGoY3u6ZOwLXUZcpmjnFNMm4%2FIhPTt6ZOyyueJ7c5F%2F%2Bs9uixqmikfP65gGf52eoj5Sr4zJwVUHJCWxT7ai%2BkNwBeGks4ppMJLl08AGOqUBVwxVcz8dHnRCbHbt2xXg3%2Flzz7oOd2%2BrAL%2BrMnNtEjdlonlmBYn8FAv96unLFW1uXhBj3ZHco5VBoczly6Yz9q5E4bvrZK3wo%2BGL%2BQWP9rXMxWpWmjp8lfV6ysP64q8x1fu9WmdoaupdPnJd%2FSB6kk2eSpqaVqXEszdhxBaEAdv1N2MVnF7l68wdxcFoZ%2BZZ2GvTxRl3NBRL%2FztbQUotO3U%2FIMe%2F&X-Amz-Signature=d4d04254ea91e1cd6f01aacfe3337545cfc5d753f113d6b62c7592729ac2f074&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZG3KZP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4FY6ABZ3MFlLTw9ZaKFh%2F4VWozA%2BC5WiLU7nFA7JEOAIgYDH07ctpnyOUJGpNLcFYz2iR60rwJVfaJonBF8NJwboqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbJsDNZXa9z9Vn5nSrcA9hA72nWsRz79jD6bZufIoLy0JS%2BJO1Mnla8cH%2BtMuuVPvU0kcYnpibXRgqBQcsOkrQCirMf0OLRWDWRhNabhifA1PBbGkZXffsHVjfjx9seMw5%2FWLbOVgFsbcvNF0%2FShtzxyGSuFhjNCmgUHQK6O62ZS75aVMBzQZQJaZNc5S%2BDHcHAPXB7rfT2zf5kQTvJwSGQlq1DlqGWfMd%2FNr6RXvg8aYO2dgNniIh98ufbY2TBp81K8jd87EjPxDBuYvN%2BT28ozmAmqKH4ebK09JlBXeThNozidcPhG8MEh1b1IlrAabWqatCJRNA73oFL6GRVeUHUVnQvpoSoYTLF%2FQnEQDMxNiyI%2F0O88r6WotTELL3vkgLTsmw%2F98%2Fim6S7Bzb6%2Ftae%2Biz7JfmPD6S1moem3FxH45J%2Fb7WOFO2RnQDV9Y2YEGSXVQROclRDL5uD6H4a5%2BoukH0mJ4em7klw2GdM2s33HjzP21g0JE2urqlYIHhmLfVyaCZCeIOsZnPipz8ZePYgFwwC3cZOIjnPmUM%2FuKA%2BbHTRtsGoY3u6ZOwLXUZcpmjnFNMm4%2FIhPTt6ZOyyueJ7c5F%2F%2Bs9uixqmikfP65gGf52eoj5Sr4zJwVUHJCWxT7ai%2BkNwBeGks4ppMJLl08AGOqUBVwxVcz8dHnRCbHbt2xXg3%2Flzz7oOd2%2BrAL%2BrMnNtEjdlonlmBYn8FAv96unLFW1uXhBj3ZHco5VBoczly6Yz9q5E4bvrZK3wo%2BGL%2BQWP9rXMxWpWmjp8lfV6ysP64q8x1fu9WmdoaupdPnJd%2FSB6kk2eSpqaVqXEszdhxBaEAdv1N2MVnF7l68wdxcFoZ%2BZZ2GvTxRl3NBRL%2FztbQUotO3U%2FIMe%2F&X-Amz-Signature=86bf3bab6a76fc0cae6739eddcd986cea99cdede6925dc860c82b812222e062e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLZG3KZP%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T190715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4FY6ABZ3MFlLTw9ZaKFh%2F4VWozA%2BC5WiLU7nFA7JEOAIgYDH07ctpnyOUJGpNLcFYz2iR60rwJVfaJonBF8NJwboqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCbJsDNZXa9z9Vn5nSrcA9hA72nWsRz79jD6bZufIoLy0JS%2BJO1Mnla8cH%2BtMuuVPvU0kcYnpibXRgqBQcsOkrQCirMf0OLRWDWRhNabhifA1PBbGkZXffsHVjfjx9seMw5%2FWLbOVgFsbcvNF0%2FShtzxyGSuFhjNCmgUHQK6O62ZS75aVMBzQZQJaZNc5S%2BDHcHAPXB7rfT2zf5kQTvJwSGQlq1DlqGWfMd%2FNr6RXvg8aYO2dgNniIh98ufbY2TBp81K8jd87EjPxDBuYvN%2BT28ozmAmqKH4ebK09JlBXeThNozidcPhG8MEh1b1IlrAabWqatCJRNA73oFL6GRVeUHUVnQvpoSoYTLF%2FQnEQDMxNiyI%2F0O88r6WotTELL3vkgLTsmw%2F98%2Fim6S7Bzb6%2Ftae%2Biz7JfmPD6S1moem3FxH45J%2Fb7WOFO2RnQDV9Y2YEGSXVQROclRDL5uD6H4a5%2BoukH0mJ4em7klw2GdM2s33HjzP21g0JE2urqlYIHhmLfVyaCZCeIOsZnPipz8ZePYgFwwC3cZOIjnPmUM%2FuKA%2BbHTRtsGoY3u6ZOwLXUZcpmjnFNMm4%2FIhPTt6ZOyyueJ7c5F%2F%2Bs9uixqmikfP65gGf52eoj5Sr4zJwVUHJCWxT7ai%2BkNwBeGks4ppMJLl08AGOqUBVwxVcz8dHnRCbHbt2xXg3%2Flzz7oOd2%2BrAL%2BrMnNtEjdlonlmBYn8FAv96unLFW1uXhBj3ZHco5VBoczly6Yz9q5E4bvrZK3wo%2BGL%2BQWP9rXMxWpWmjp8lfV6ysP64q8x1fu9WmdoaupdPnJd%2FSB6kk2eSpqaVqXEszdhxBaEAdv1N2MVnF7l68wdxcFoZ%2BZZ2GvTxRl3NBRL%2FztbQUotO3U%2FIMe%2F&X-Amz-Signature=45ea776d92828b11423ce0931917eb84161039f67aa93dff3e0d40e77f422c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
