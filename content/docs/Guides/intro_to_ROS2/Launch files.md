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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2D65IZS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEPjBqYW%2BwRp52orWvW6dO9UibmI59GjBIPjAI77FlETAiEAggzJ4jBftew1WInViacWinRnZkcQ4Q8faocEYtHGZ6EqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQcLjbo0zh22DF%2FTyrcAybljN9XJn2hshK2qkNZnwvWVHQcG5%2FYEpWoqeZFbd%2FqmaBwzJRGE85KA257Zk1FfLFXlnWqb6Hhn1F9aQ2Ksx9%2FCPQpMQtzCCfAWukvdxKcFVQvtbtajIAJSa6LmfhixZOKGWoOSh09bnXC%2Bnh9%2BTbOQDNslG4%2FD5YYJWGeDa5Gg5YKYb1gVsWKjQi92HX5EP8nf94P%2FjZ1qpniCgO3ED0m9lOSKG9QaTss3ilpQYUMwlTYRfrDz%2B%2BZevBT5G5HkKpXfdGkLZkgjz4%2FkXa9u2vOa%2Ffy8Hu7DaNOT2EqY6ioiawCa77V8xDlaDyIW5fHP%2FIZbL1pbokQlmwvhMljq8nh4bVC2S7B0Lt8goEKSzUSN1OWv5v%2BMv34oq8V52A%2FxSea8HI0HD0HWzukFSg7cs0PN4pO4X3TctLigLkNspIf0%2BNJ%2BKjEE4ck%2F4p529EiZoZqFFJaDJ7R7XTWi0f7nPo2zcv79jskqWmAlWBS5YtpB4yN13TOovblv3g%2F%2FpHB0rfrMxT%2BnwiPYD40HnLiN2cLgeT9RAINOAebGw3hqV6eu6n4ZvCB6yw0xO4bryWmW4TIKnlzZ6j5ufC3mn5KkZ1PxctSOsiu0dHgTjeJjaiLJVnaLaxHv0BekWbtMLXw3sIGOqUBHTKuRqWK3nm3jh3g9MEwyhmhYoUVcsqnDw9UOv%2FOGtvS6hxuIYCWaAmwgTyTIxryzq%2FUEXSQTPOVjgzWSwIkPo%2BF9wGVq6I68AUe4t5DZkhucMnoo8Agzjr5g5SPf3T9w8XqYu7Fok6H07ASUTK3ap0iKu9KgT1e7CU%2BFU4556bgjbDf2JPOoyIR47hTDrEB1%2FSYNz%2FvBjCrRavm9UxnaRXLMpFg&X-Amz-Signature=46fc8cc1b0ec6455f57b17c6e52f7777d53eabccc3d1f99654846dff3e04889a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2D65IZS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEPjBqYW%2BwRp52orWvW6dO9UibmI59GjBIPjAI77FlETAiEAggzJ4jBftew1WInViacWinRnZkcQ4Q8faocEYtHGZ6EqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQcLjbo0zh22DF%2FTyrcAybljN9XJn2hshK2qkNZnwvWVHQcG5%2FYEpWoqeZFbd%2FqmaBwzJRGE85KA257Zk1FfLFXlnWqb6Hhn1F9aQ2Ksx9%2FCPQpMQtzCCfAWukvdxKcFVQvtbtajIAJSa6LmfhixZOKGWoOSh09bnXC%2Bnh9%2BTbOQDNslG4%2FD5YYJWGeDa5Gg5YKYb1gVsWKjQi92HX5EP8nf94P%2FjZ1qpniCgO3ED0m9lOSKG9QaTss3ilpQYUMwlTYRfrDz%2B%2BZevBT5G5HkKpXfdGkLZkgjz4%2FkXa9u2vOa%2Ffy8Hu7DaNOT2EqY6ioiawCa77V8xDlaDyIW5fHP%2FIZbL1pbokQlmwvhMljq8nh4bVC2S7B0Lt8goEKSzUSN1OWv5v%2BMv34oq8V52A%2FxSea8HI0HD0HWzukFSg7cs0PN4pO4X3TctLigLkNspIf0%2BNJ%2BKjEE4ck%2F4p529EiZoZqFFJaDJ7R7XTWi0f7nPo2zcv79jskqWmAlWBS5YtpB4yN13TOovblv3g%2F%2FpHB0rfrMxT%2BnwiPYD40HnLiN2cLgeT9RAINOAebGw3hqV6eu6n4ZvCB6yw0xO4bryWmW4TIKnlzZ6j5ufC3mn5KkZ1PxctSOsiu0dHgTjeJjaiLJVnaLaxHv0BekWbtMLXw3sIGOqUBHTKuRqWK3nm3jh3g9MEwyhmhYoUVcsqnDw9UOv%2FOGtvS6hxuIYCWaAmwgTyTIxryzq%2FUEXSQTPOVjgzWSwIkPo%2BF9wGVq6I68AUe4t5DZkhucMnoo8Agzjr5g5SPf3T9w8XqYu7Fok6H07ASUTK3ap0iKu9KgT1e7CU%2BFU4556bgjbDf2JPOoyIR47hTDrEB1%2FSYNz%2FvBjCrRavm9UxnaRXLMpFg&X-Amz-Signature=4344d50d2d6bb447f9a29333a164ef6f0590e704c5c52afb6aa0ef0b15b72bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2D65IZS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIEPjBqYW%2BwRp52orWvW6dO9UibmI59GjBIPjAI77FlETAiEAggzJ4jBftew1WInViacWinRnZkcQ4Q8faocEYtHGZ6EqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFQcLjbo0zh22DF%2FTyrcAybljN9XJn2hshK2qkNZnwvWVHQcG5%2FYEpWoqeZFbd%2FqmaBwzJRGE85KA257Zk1FfLFXlnWqb6Hhn1F9aQ2Ksx9%2FCPQpMQtzCCfAWukvdxKcFVQvtbtajIAJSa6LmfhixZOKGWoOSh09bnXC%2Bnh9%2BTbOQDNslG4%2FD5YYJWGeDa5Gg5YKYb1gVsWKjQi92HX5EP8nf94P%2FjZ1qpniCgO3ED0m9lOSKG9QaTss3ilpQYUMwlTYRfrDz%2B%2BZevBT5G5HkKpXfdGkLZkgjz4%2FkXa9u2vOa%2Ffy8Hu7DaNOT2EqY6ioiawCa77V8xDlaDyIW5fHP%2FIZbL1pbokQlmwvhMljq8nh4bVC2S7B0Lt8goEKSzUSN1OWv5v%2BMv34oq8V52A%2FxSea8HI0HD0HWzukFSg7cs0PN4pO4X3TctLigLkNspIf0%2BNJ%2BKjEE4ck%2F4p529EiZoZqFFJaDJ7R7XTWi0f7nPo2zcv79jskqWmAlWBS5YtpB4yN13TOovblv3g%2F%2FpHB0rfrMxT%2BnwiPYD40HnLiN2cLgeT9RAINOAebGw3hqV6eu6n4ZvCB6yw0xO4bryWmW4TIKnlzZ6j5ufC3mn5KkZ1PxctSOsiu0dHgTjeJjaiLJVnaLaxHv0BekWbtMLXw3sIGOqUBHTKuRqWK3nm3jh3g9MEwyhmhYoUVcsqnDw9UOv%2FOGtvS6hxuIYCWaAmwgTyTIxryzq%2FUEXSQTPOVjgzWSwIkPo%2BF9wGVq6I68AUe4t5DZkhucMnoo8Agzjr5g5SPf3T9w8XqYu7Fok6H07ASUTK3ap0iKu9KgT1e7CU%2BFU4556bgjbDf2JPOoyIR47hTDrEB1%2FSYNz%2FvBjCrRavm9UxnaRXLMpFg&X-Amz-Signature=50870e7a30390f87f94688e204d9beebeb9f8c7af7f7b719ffaafa6b98efe467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
