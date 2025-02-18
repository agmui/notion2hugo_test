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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUKLAID%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDU%2FynXQaFfzrGN24noMMSJJypI5QCw2F8osccFD7lkyQIgcBxGf1oTB%2BmGDMVwI98TMp27dPr3EiGK%2Fe7kGvSxH9YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94uXeoGSkrDviWXSrcA%2FVvNJmyiQf9NuawIHYaShkXvBG72QM21%2FPhoexaoCKeYFhA1lVM3ae2ao7L9oemna8RD1zC1LrSKw7lw0n8HjqH7ac1xiI5r1FtDZNvwCNa1Hn1CF8K7QQVG7e6zncf97aCIrFDCsZoG9a7Z2k9nsp3zLMwCZYuLql0NXyu758pQ1qZ%2F5mB7HngelDuXpHvlwxNu53bcEuKb2SnnVIYYDA6brE6Xch8TVx4gd8CRics4%2B8aDfum0p99Hqdnlf8qXl5fgel8XD%2BkLZywYY0MPXHaoxJjORPR8G%2FX7w1iOjUlVptvqj4saSQZYJVkDnU%2FuAXgGjYJElJ3rQW9v%2FNyzwUX8BPf8EyCbAxcguMSvKG2gIxSXYSuNCiPCxImG3eUdSj4CpnNcueLDt2Y%2FB3Wt1O8y6feyrCP%2FML9Mbc5UHT1biOGdH5t4cksN5fKhgAEVmkJi0MgZ0xI%2BnaeGURR%2Bg7%2F7MH%2BGe9Y9ZoF5KYm1RHqmF5reatlVbmOUCFLnXIdnoUxdHFX%2Ff2fShMeBKgjajB8Un3JJPjatsLA9aNrIBu1wv7%2FblQVO9cV4YH7x1VohO9oT5mSxyRZqwC0GbcNrPruAG5vuNoJsUQKzALbeP8LHzlIJrjA8RECDmw4MIqb070GOqUBV5c5%2BtSudG95aJ%2B9hLNylVXqbSExR9%2FfQu0QFsv1MYi64epCsq0tryy49HgErZZwm8VaGpNK7Vey7MpY9eKJaMelkF0jkIXJ%2F%2FJXMqS%2B8c9AfHtkfmY%2BqCO4%2BB9g6NQNf3Gr%2FGdI8IC16VzvE7t4F%2BLRlTmeiMzznUk%2BRAGLDVFgHbzj%2FhMceBndcP6V%2B%2BRf459maylvtxF6r4aeIJReSBDj%2F4dg&X-Amz-Signature=2d1d1bc1c451dce411bef29f558bcfa09303338c576fb26acf341fa55410356e&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUKLAID%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDU%2FynXQaFfzrGN24noMMSJJypI5QCw2F8osccFD7lkyQIgcBxGf1oTB%2BmGDMVwI98TMp27dPr3EiGK%2Fe7kGvSxH9YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94uXeoGSkrDviWXSrcA%2FVvNJmyiQf9NuawIHYaShkXvBG72QM21%2FPhoexaoCKeYFhA1lVM3ae2ao7L9oemna8RD1zC1LrSKw7lw0n8HjqH7ac1xiI5r1FtDZNvwCNa1Hn1CF8K7QQVG7e6zncf97aCIrFDCsZoG9a7Z2k9nsp3zLMwCZYuLql0NXyu758pQ1qZ%2F5mB7HngelDuXpHvlwxNu53bcEuKb2SnnVIYYDA6brE6Xch8TVx4gd8CRics4%2B8aDfum0p99Hqdnlf8qXl5fgel8XD%2BkLZywYY0MPXHaoxJjORPR8G%2FX7w1iOjUlVptvqj4saSQZYJVkDnU%2FuAXgGjYJElJ3rQW9v%2FNyzwUX8BPf8EyCbAxcguMSvKG2gIxSXYSuNCiPCxImG3eUdSj4CpnNcueLDt2Y%2FB3Wt1O8y6feyrCP%2FML9Mbc5UHT1biOGdH5t4cksN5fKhgAEVmkJi0MgZ0xI%2BnaeGURR%2Bg7%2F7MH%2BGe9Y9ZoF5KYm1RHqmF5reatlVbmOUCFLnXIdnoUxdHFX%2Ff2fShMeBKgjajB8Un3JJPjatsLA9aNrIBu1wv7%2FblQVO9cV4YH7x1VohO9oT5mSxyRZqwC0GbcNrPruAG5vuNoJsUQKzALbeP8LHzlIJrjA8RECDmw4MIqb070GOqUBV5c5%2BtSudG95aJ%2B9hLNylVXqbSExR9%2FfQu0QFsv1MYi64epCsq0tryy49HgErZZwm8VaGpNK7Vey7MpY9eKJaMelkF0jkIXJ%2F%2FJXMqS%2B8c9AfHtkfmY%2BqCO4%2BB9g6NQNf3Gr%2FGdI8IC16VzvE7t4F%2BLRlTmeiMzznUk%2BRAGLDVFgHbzj%2FhMceBndcP6V%2B%2BRf459maylvtxF6r4aeIJReSBDj%2F4dg&X-Amz-Signature=53b69ce017458cf49f713de146e71d9c4019a6a7f89a98908ed2f96295cb0bda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XUKLAID%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDU%2FynXQaFfzrGN24noMMSJJypI5QCw2F8osccFD7lkyQIgcBxGf1oTB%2BmGDMVwI98TMp27dPr3EiGK%2Fe7kGvSxH9YqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI94uXeoGSkrDviWXSrcA%2FVvNJmyiQf9NuawIHYaShkXvBG72QM21%2FPhoexaoCKeYFhA1lVM3ae2ao7L9oemna8RD1zC1LrSKw7lw0n8HjqH7ac1xiI5r1FtDZNvwCNa1Hn1CF8K7QQVG7e6zncf97aCIrFDCsZoG9a7Z2k9nsp3zLMwCZYuLql0NXyu758pQ1qZ%2F5mB7HngelDuXpHvlwxNu53bcEuKb2SnnVIYYDA6brE6Xch8TVx4gd8CRics4%2B8aDfum0p99Hqdnlf8qXl5fgel8XD%2BkLZywYY0MPXHaoxJjORPR8G%2FX7w1iOjUlVptvqj4saSQZYJVkDnU%2FuAXgGjYJElJ3rQW9v%2FNyzwUX8BPf8EyCbAxcguMSvKG2gIxSXYSuNCiPCxImG3eUdSj4CpnNcueLDt2Y%2FB3Wt1O8y6feyrCP%2FML9Mbc5UHT1biOGdH5t4cksN5fKhgAEVmkJi0MgZ0xI%2BnaeGURR%2Bg7%2F7MH%2BGe9Y9ZoF5KYm1RHqmF5reatlVbmOUCFLnXIdnoUxdHFX%2Ff2fShMeBKgjajB8Un3JJPjatsLA9aNrIBu1wv7%2FblQVO9cV4YH7x1VohO9oT5mSxyRZqwC0GbcNrPruAG5vuNoJsUQKzALbeP8LHzlIJrjA8RECDmw4MIqb070GOqUBV5c5%2BtSudG95aJ%2B9hLNylVXqbSExR9%2FfQu0QFsv1MYi64epCsq0tryy49HgErZZwm8VaGpNK7Vey7MpY9eKJaMelkF0jkIXJ%2F%2FJXMqS%2B8c9AfHtkfmY%2BqCO4%2BB9g6NQNf3Gr%2FGdI8IC16VzvE7t4F%2BLRlTmeiMzznUk%2BRAGLDVFgHbzj%2FhMceBndcP6V%2B%2BRf459maylvtxF6r4aeIJReSBDj%2F4dg&X-Amz-Signature=1b6c5b480797038e703ec11eccf1209a281ee177e85f234614adf5b62f64501e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
