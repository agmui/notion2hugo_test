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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655J4T6F4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtzjBO6j80Yc9TIl7Hwwzt1onHv%2FmX5AJ4nbm1WkjdywIgL6faBKE7vP%2FHNdJl3o8cUN5%2F8Q%2Bcq%2Bktw0tHyZq1RpQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDINjM5Uf0%2F5csy4QRSrcA27Tpg5yBzMiKB4Io92HFr1Rc5WTJ06pxBeollaNRwVTpSwiYGfVWXqZxFqvNNsXmCtnn8FjCVEi2ZN4zy6FRlmnHYs5DRqY9ymAdL7dyd%2Fq5jK%2BlJzgMbNHjd9NXMf1mVFkSAWMpiz4EzUIJcwpGaLcbgI20NShay%2FP0NIn896l9tsLM0M8W%2FsyF0Y8UK9kdhc495f%2FsX24dZCWMl2R6jQ%2Fi%2Bo7IM16cSuXW3bI6bgRXnIG7nV1hl3lCDV9agd%2FP0aXWk0qnanO3xh3ZFq0Sz9H%2B%2BPMtakA70W9LnLKfhZK4DGvZ5%2FMM7h4TTaklIVISYqp4RAXKLV9QAcL4XMRhC9%2BGFdHEK2%2BXtACl1TgyEr%2BaPj9ia8Gt0xiIzvvt7FKxe3E1%2BLhSbvl0p%2BKwkV4ohdNtC0tp%2FqfmR0TFr8sWE7EehiR7Hc0pqCkv7KabTsZJzRSLSvpSBfj%2BVeVNAMg4ToXgRpyBOZb5en8g7GEO6cvYAvxF2%2F49%2Fwc%2B82YExS%2FgoyJbcOZ8P%2BdobDs%2Bfu%2BB0WaGkf1jkMl4PQTmeb9Dw3vauFy4hhDDqA44YxOxDLv0cXVHm9neqANg%2FfEy4vGV61beJy0oZ56Gn3kHpSNb6pbb7HMc4VAj9Zb6D33MPzB8MAGOqUBArweTj5mLaoBXb1%2BIEKh%2BZv2T3bTqzRB7Dh1e1cSLNIJmcMsY0n5sJs4PWBHP2NVpJurhnypfdlxgJSDeB69Y297OzfSDXHrRf2CLS8iHZyk8ivWGG4V0YzlI0i74K8VXFRGx%2Fmt%2BRYGj2l4Irj0%2FtRmiM4fyQe071yW1a9u8lGTe%2BgzY5Ysv31I6ROBktUGajM86Ho%2FqpXa40DXCSiD0HqHptXB&X-Amz-Signature=d9d86a9239c0cd3b5326810d585f02a6db0a459023e77f25a2672f50331832d0&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655J4T6F4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtzjBO6j80Yc9TIl7Hwwzt1onHv%2FmX5AJ4nbm1WkjdywIgL6faBKE7vP%2FHNdJl3o8cUN5%2F8Q%2Bcq%2Bktw0tHyZq1RpQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDINjM5Uf0%2F5csy4QRSrcA27Tpg5yBzMiKB4Io92HFr1Rc5WTJ06pxBeollaNRwVTpSwiYGfVWXqZxFqvNNsXmCtnn8FjCVEi2ZN4zy6FRlmnHYs5DRqY9ymAdL7dyd%2Fq5jK%2BlJzgMbNHjd9NXMf1mVFkSAWMpiz4EzUIJcwpGaLcbgI20NShay%2FP0NIn896l9tsLM0M8W%2FsyF0Y8UK9kdhc495f%2FsX24dZCWMl2R6jQ%2Fi%2Bo7IM16cSuXW3bI6bgRXnIG7nV1hl3lCDV9agd%2FP0aXWk0qnanO3xh3ZFq0Sz9H%2B%2BPMtakA70W9LnLKfhZK4DGvZ5%2FMM7h4TTaklIVISYqp4RAXKLV9QAcL4XMRhC9%2BGFdHEK2%2BXtACl1TgyEr%2BaPj9ia8Gt0xiIzvvt7FKxe3E1%2BLhSbvl0p%2BKwkV4ohdNtC0tp%2FqfmR0TFr8sWE7EehiR7Hc0pqCkv7KabTsZJzRSLSvpSBfj%2BVeVNAMg4ToXgRpyBOZb5en8g7GEO6cvYAvxF2%2F49%2Fwc%2B82YExS%2FgoyJbcOZ8P%2BdobDs%2Bfu%2BB0WaGkf1jkMl4PQTmeb9Dw3vauFy4hhDDqA44YxOxDLv0cXVHm9neqANg%2FfEy4vGV61beJy0oZ56Gn3kHpSNb6pbb7HMc4VAj9Zb6D33MPzB8MAGOqUBArweTj5mLaoBXb1%2BIEKh%2BZv2T3bTqzRB7Dh1e1cSLNIJmcMsY0n5sJs4PWBHP2NVpJurhnypfdlxgJSDeB69Y297OzfSDXHrRf2CLS8iHZyk8ivWGG4V0YzlI0i74K8VXFRGx%2Fmt%2BRYGj2l4Irj0%2FtRmiM4fyQe071yW1a9u8lGTe%2BgzY5Ysv31I6ROBktUGajM86Ho%2FqpXa40DXCSiD0HqHptXB&X-Amz-Signature=8f2c7f6af2682d6d3886ec80cfd722835277618cc561d02d08c962e0badf718f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655J4T6F4%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtzjBO6j80Yc9TIl7Hwwzt1onHv%2FmX5AJ4nbm1WkjdywIgL6faBKE7vP%2FHNdJl3o8cUN5%2F8Q%2Bcq%2Bktw0tHyZq1RpQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDINjM5Uf0%2F5csy4QRSrcA27Tpg5yBzMiKB4Io92HFr1Rc5WTJ06pxBeollaNRwVTpSwiYGfVWXqZxFqvNNsXmCtnn8FjCVEi2ZN4zy6FRlmnHYs5DRqY9ymAdL7dyd%2Fq5jK%2BlJzgMbNHjd9NXMf1mVFkSAWMpiz4EzUIJcwpGaLcbgI20NShay%2FP0NIn896l9tsLM0M8W%2FsyF0Y8UK9kdhc495f%2FsX24dZCWMl2R6jQ%2Fi%2Bo7IM16cSuXW3bI6bgRXnIG7nV1hl3lCDV9agd%2FP0aXWk0qnanO3xh3ZFq0Sz9H%2B%2BPMtakA70W9LnLKfhZK4DGvZ5%2FMM7h4TTaklIVISYqp4RAXKLV9QAcL4XMRhC9%2BGFdHEK2%2BXtACl1TgyEr%2BaPj9ia8Gt0xiIzvvt7FKxe3E1%2BLhSbvl0p%2BKwkV4ohdNtC0tp%2FqfmR0TFr8sWE7EehiR7Hc0pqCkv7KabTsZJzRSLSvpSBfj%2BVeVNAMg4ToXgRpyBOZb5en8g7GEO6cvYAvxF2%2F49%2Fwc%2B82YExS%2FgoyJbcOZ8P%2BdobDs%2Bfu%2BB0WaGkf1jkMl4PQTmeb9Dw3vauFy4hhDDqA44YxOxDLv0cXVHm9neqANg%2FfEy4vGV61beJy0oZ56Gn3kHpSNb6pbb7HMc4VAj9Zb6D33MPzB8MAGOqUBArweTj5mLaoBXb1%2BIEKh%2BZv2T3bTqzRB7Dh1e1cSLNIJmcMsY0n5sJs4PWBHP2NVpJurhnypfdlxgJSDeB69Y297OzfSDXHrRf2CLS8iHZyk8ivWGG4V0YzlI0i74K8VXFRGx%2Fmt%2BRYGj2l4Irj0%2FtRmiM4fyQe071yW1a9u8lGTe%2BgzY5Ysv31I6ROBktUGajM86Ho%2FqpXa40DXCSiD0HqHptXB&X-Amz-Signature=0ded7fd136223b9252bc2b7b494f4285409a913355740087033e5d7ee379349c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
