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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RLK5DH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlOUqxUVPs1ULPGnvT9rT1rziWyPlX0MBdZNoD4fc3AIgS1HRhC4RFKEFfCDu%2BTtyB8ILhjAvcZlkZjmqF5bT9XMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjc45PWuV2qbtQGpircAwhi5ahWcC8UfRR6OBiMvfc%2B%2FdaZgS00izB1DbZVxnspynj1NGxL%2B73bznKafee4Gt8Ai2gCiELgPDTbxE%2F0JCuniY%2BvrBrd11tyAJAFMsQsQMz5%2BMVlqt1rylfgQ3L425uYbvq4mq9euwPcubfh4y6bnYkcu1fbF10EODw4XZxofWCcJFpMs82lvaFN6WR4%2BFhTkWGTnF9K0a8HlBO6idOTNO8wkuEDDUzs67bakCEo%2Bke68Dyn4IdBNDh3LEDw%2BJfQ7mEhaEoZ%2FqSdr5paI8jqxnYYIo1S0oSeo7sxcBLtbFcaNEBk2BWp40TCatVlD%2Bc8pPfajiSPb8BoVxL3FsUrj20nw8BhmmbVfT42B25A7lfncT9SnygKh8qGzHZ9LIEUA6Gp%2BncoIO3CEUqUmJnvjY8eiGmUzn9eMrsqjTfKaTHrUEhpCALxwJkGJN%2Bi5A5ElKh9KhhchgRpeig2iQ8hZ9grkalRNSR%2BZasPleCFghAIhNjqHTHMrMGcLS4T1SVVZt9ix7hd4j62E%2Fl3zfo2457xDaiMyAhsOZ39fI7IL9jq7AGWmzIfc1mhOZp1HE99GrYeDmkVbQprAt7kYq3Am8dHXIpS8wtVN9NqWOSNREI0s49hHpGgkjRWMMjY8rwGOqUBWRXFusa84TGfJF3Se2zos3OQWA4fjp09XXj%2BwjI%2BUCnCkVuTB%2BQW1eXysdFPXF0lqZNm0URkUpAp06hZ9ufUIse9AzPed9V6PECLAnUs897ONxXraJz7J71FounaFxcO9xZ1HwzrxyaKvai1e3B%2B3e46dq%2BypARq8Jig3urvH%2Bw07tuUoOMi5T0t40HcEmxKCS9Ip6vtmvtxE5re9gJ6a2b9253n&X-Amz-Signature=4a49c01be497d44da0844edf43cb23f5123fde7700ae4c1ac3af7a51e937196d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RLK5DH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlOUqxUVPs1ULPGnvT9rT1rziWyPlX0MBdZNoD4fc3AIgS1HRhC4RFKEFfCDu%2BTtyB8ILhjAvcZlkZjmqF5bT9XMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjc45PWuV2qbtQGpircAwhi5ahWcC8UfRR6OBiMvfc%2B%2FdaZgS00izB1DbZVxnspynj1NGxL%2B73bznKafee4Gt8Ai2gCiELgPDTbxE%2F0JCuniY%2BvrBrd11tyAJAFMsQsQMz5%2BMVlqt1rylfgQ3L425uYbvq4mq9euwPcubfh4y6bnYkcu1fbF10EODw4XZxofWCcJFpMs82lvaFN6WR4%2BFhTkWGTnF9K0a8HlBO6idOTNO8wkuEDDUzs67bakCEo%2Bke68Dyn4IdBNDh3LEDw%2BJfQ7mEhaEoZ%2FqSdr5paI8jqxnYYIo1S0oSeo7sxcBLtbFcaNEBk2BWp40TCatVlD%2Bc8pPfajiSPb8BoVxL3FsUrj20nw8BhmmbVfT42B25A7lfncT9SnygKh8qGzHZ9LIEUA6Gp%2BncoIO3CEUqUmJnvjY8eiGmUzn9eMrsqjTfKaTHrUEhpCALxwJkGJN%2Bi5A5ElKh9KhhchgRpeig2iQ8hZ9grkalRNSR%2BZasPleCFghAIhNjqHTHMrMGcLS4T1SVVZt9ix7hd4j62E%2Fl3zfo2457xDaiMyAhsOZ39fI7IL9jq7AGWmzIfc1mhOZp1HE99GrYeDmkVbQprAt7kYq3Am8dHXIpS8wtVN9NqWOSNREI0s49hHpGgkjRWMMjY8rwGOqUBWRXFusa84TGfJF3Se2zos3OQWA4fjp09XXj%2BwjI%2BUCnCkVuTB%2BQW1eXysdFPXF0lqZNm0URkUpAp06hZ9ufUIse9AzPed9V6PECLAnUs897ONxXraJz7J71FounaFxcO9xZ1HwzrxyaKvai1e3B%2B3e46dq%2BypARq8Jig3urvH%2Bw07tuUoOMi5T0t40HcEmxKCS9Ip6vtmvtxE5re9gJ6a2b9253n&X-Amz-Signature=4d322f544cdeb20ab5dec4058036d9d644289affe1d036c5e632407fed678c36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4RLK5DH%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T110110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXlOUqxUVPs1ULPGnvT9rT1rziWyPlX0MBdZNoD4fc3AIgS1HRhC4RFKEFfCDu%2BTtyB8ILhjAvcZlkZjmqF5bT9XMqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjc45PWuV2qbtQGpircAwhi5ahWcC8UfRR6OBiMvfc%2B%2FdaZgS00izB1DbZVxnspynj1NGxL%2B73bznKafee4Gt8Ai2gCiELgPDTbxE%2F0JCuniY%2BvrBrd11tyAJAFMsQsQMz5%2BMVlqt1rylfgQ3L425uYbvq4mq9euwPcubfh4y6bnYkcu1fbF10EODw4XZxofWCcJFpMs82lvaFN6WR4%2BFhTkWGTnF9K0a8HlBO6idOTNO8wkuEDDUzs67bakCEo%2Bke68Dyn4IdBNDh3LEDw%2BJfQ7mEhaEoZ%2FqSdr5paI8jqxnYYIo1S0oSeo7sxcBLtbFcaNEBk2BWp40TCatVlD%2Bc8pPfajiSPb8BoVxL3FsUrj20nw8BhmmbVfT42B25A7lfncT9SnygKh8qGzHZ9LIEUA6Gp%2BncoIO3CEUqUmJnvjY8eiGmUzn9eMrsqjTfKaTHrUEhpCALxwJkGJN%2Bi5A5ElKh9KhhchgRpeig2iQ8hZ9grkalRNSR%2BZasPleCFghAIhNjqHTHMrMGcLS4T1SVVZt9ix7hd4j62E%2Fl3zfo2457xDaiMyAhsOZ39fI7IL9jq7AGWmzIfc1mhOZp1HE99GrYeDmkVbQprAt7kYq3Am8dHXIpS8wtVN9NqWOSNREI0s49hHpGgkjRWMMjY8rwGOqUBWRXFusa84TGfJF3Se2zos3OQWA4fjp09XXj%2BwjI%2BUCnCkVuTB%2BQW1eXysdFPXF0lqZNm0URkUpAp06hZ9ufUIse9AzPed9V6PECLAnUs897ONxXraJz7J71FounaFxcO9xZ1HwzrxyaKvai1e3B%2B3e46dq%2BypARq8Jig3urvH%2Bw07tuUoOMi5T0t40HcEmxKCS9Ip6vtmvtxE5re9gJ6a2b9253n&X-Amz-Signature=4ea9115e401df79225308c41c9c359c3f6a3bbd2eee63ce9c0690dca44755ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
