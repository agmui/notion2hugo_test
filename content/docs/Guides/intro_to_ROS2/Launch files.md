---
sys:
  pageId: "d6173c25-76d1-4038-abd3-af075abdb629"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-02T09:56:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Launch files.md"
title: "Launch files"
date: "2025-08-02T09:56:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 146
toc: false
icon: ""
---

So far we have been running each node manually which may get tiring.

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7JRAZJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhTA88sxuNmT%2B71i1x24PktMnPmyh66ROd9IN3xdgOcgIhAMDeSdhPobKTH4zKT692PYb9t%2FRaqB76CZKrZqToNggaKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTL2CBSFyoYXqzuAq3AM1R%2BW12GCTpJcInW7tt09GMGlK0HjExkM3V8D82uTH62tQMUAUQcHXBlbCNq2jLOleNF6PtxsG%2BtEGyYBG%2B0vdfe%2Bg%2BcibtGuLQlURizMW8gFJzgRVMoAK%2BjQnGDGcSRbZkb2OeWBNIjz3KH4hYzKtzxFj0SZVem8zhjop02rA11Uev%2Fkq3o5Vrp1W1UjTdls5qWnvP88f6IOrm70kayp9UL%2Fv%2BoGHFv2k2S%2B5b7CvDSh2RUA2BMklZbPrA32mjbo5rlijWs5tCiKWzYKy8%2Ff1RQjtVHnvHVuMGTvb6Rk8o8x6PP%2BkiZ0ORTBVgncnR0f%2B000rn7cJv4vzqxZy3el6GT3ro9NWhMr0%2BL3mWY1Ddc5w3JudQOt7K%2FlZD1SkfPyhtP5iUcUtP36Jm9HZOqXIv1JR%2B1uJE5%2FhcWGuLdehzpZ5aleMtGBQiqNX0ElkEaqIcqjkfobpRHBuoX8VXCp4Cpg0u7%2F11iZmicw3leYNmkR84JHQMSqJD7%2BB4VLehjSyfM2kpqgiuM5HvIOTcTeVYTRk1coE%2FJf3pX6oS4DTYcOzJ9h%2BKzRHrKT6zksUnaxA2eKhB2Towrd%2FgIcqe4fru5jOQTYsNZU2HuZde9zgsisK8DQQlT14mkUMejD7uuPEBjqkAVLGdM8%2BuM%2FOA5iWCS0YWtjvV3M%2FdvzwUAI0awozHJvSO70Dkf5RDgnW3qK3LGcyGBIL8HvGkl5lUW3%2Bot0jTaoV3goy18uLLe6LYFPI57eszxgYx6rOGJgt7HhKS356643WtPc9ioU%2FPGnWMfYHqKfeeMtL4opHbIdXvaFppf2GbHHABu%2BxU8d60IBd3dQIVPxtkE0qhgHecU%2BCFvkSnvutogkX&X-Amz-Signature=d08c09b5565c5abb53a4e9f8b0228bf8f1d484f5f6b55258ee98a1c86445a4d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7JRAZJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhTA88sxuNmT%2B71i1x24PktMnPmyh66ROd9IN3xdgOcgIhAMDeSdhPobKTH4zKT692PYb9t%2FRaqB76CZKrZqToNggaKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTL2CBSFyoYXqzuAq3AM1R%2BW12GCTpJcInW7tt09GMGlK0HjExkM3V8D82uTH62tQMUAUQcHXBlbCNq2jLOleNF6PtxsG%2BtEGyYBG%2B0vdfe%2Bg%2BcibtGuLQlURizMW8gFJzgRVMoAK%2BjQnGDGcSRbZkb2OeWBNIjz3KH4hYzKtzxFj0SZVem8zhjop02rA11Uev%2Fkq3o5Vrp1W1UjTdls5qWnvP88f6IOrm70kayp9UL%2Fv%2BoGHFv2k2S%2B5b7CvDSh2RUA2BMklZbPrA32mjbo5rlijWs5tCiKWzYKy8%2Ff1RQjtVHnvHVuMGTvb6Rk8o8x6PP%2BkiZ0ORTBVgncnR0f%2B000rn7cJv4vzqxZy3el6GT3ro9NWhMr0%2BL3mWY1Ddc5w3JudQOt7K%2FlZD1SkfPyhtP5iUcUtP36Jm9HZOqXIv1JR%2B1uJE5%2FhcWGuLdehzpZ5aleMtGBQiqNX0ElkEaqIcqjkfobpRHBuoX8VXCp4Cpg0u7%2F11iZmicw3leYNmkR84JHQMSqJD7%2BB4VLehjSyfM2kpqgiuM5HvIOTcTeVYTRk1coE%2FJf3pX6oS4DTYcOzJ9h%2BKzRHrKT6zksUnaxA2eKhB2Towrd%2FgIcqe4fru5jOQTYsNZU2HuZde9zgsisK8DQQlT14mkUMejD7uuPEBjqkAVLGdM8%2BuM%2FOA5iWCS0YWtjvV3M%2FdvzwUAI0awozHJvSO70Dkf5RDgnW3qK3LGcyGBIL8HvGkl5lUW3%2Bot0jTaoV3goy18uLLe6LYFPI57eszxgYx6rOGJgt7HhKS356643WtPc9ioU%2FPGnWMfYHqKfeeMtL4opHbIdXvaFppf2GbHHABu%2BxU8d60IBd3dQIVPxtkE0qhgHecU%2BCFvkSnvutogkX&X-Amz-Signature=03e65bdf1d140514f0be67916d2147ae94a6bd2c205c2e07790abc8263767ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZC7JRAZJ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhTA88sxuNmT%2B71i1x24PktMnPmyh66ROd9IN3xdgOcgIhAMDeSdhPobKTH4zKT692PYb9t%2FRaqB76CZKrZqToNggaKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHTL2CBSFyoYXqzuAq3AM1R%2BW12GCTpJcInW7tt09GMGlK0HjExkM3V8D82uTH62tQMUAUQcHXBlbCNq2jLOleNF6PtxsG%2BtEGyYBG%2B0vdfe%2Bg%2BcibtGuLQlURizMW8gFJzgRVMoAK%2BjQnGDGcSRbZkb2OeWBNIjz3KH4hYzKtzxFj0SZVem8zhjop02rA11Uev%2Fkq3o5Vrp1W1UjTdls5qWnvP88f6IOrm70kayp9UL%2Fv%2BoGHFv2k2S%2B5b7CvDSh2RUA2BMklZbPrA32mjbo5rlijWs5tCiKWzYKy8%2Ff1RQjtVHnvHVuMGTvb6Rk8o8x6PP%2BkiZ0ORTBVgncnR0f%2B000rn7cJv4vzqxZy3el6GT3ro9NWhMr0%2BL3mWY1Ddc5w3JudQOt7K%2FlZD1SkfPyhtP5iUcUtP36Jm9HZOqXIv1JR%2B1uJE5%2FhcWGuLdehzpZ5aleMtGBQiqNX0ElkEaqIcqjkfobpRHBuoX8VXCp4Cpg0u7%2F11iZmicw3leYNmkR84JHQMSqJD7%2BB4VLehjSyfM2kpqgiuM5HvIOTcTeVYTRk1coE%2FJf3pX6oS4DTYcOzJ9h%2BKzRHrKT6zksUnaxA2eKhB2Towrd%2FgIcqe4fru5jOQTYsNZU2HuZde9zgsisK8DQQlT14mkUMejD7uuPEBjqkAVLGdM8%2BuM%2FOA5iWCS0YWtjvV3M%2FdvzwUAI0awozHJvSO70Dkf5RDgnW3qK3LGcyGBIL8HvGkl5lUW3%2Bot0jTaoV3goy18uLLe6LYFPI57eszxgYx6rOGJgt7HhKS356643WtPc9ioU%2FPGnWMfYHqKfeeMtL4opHbIdXvaFppf2GbHHABu%2BxU8d60IBd3dQIVPxtkE0qhgHecU%2BCFvkSnvutogkX&X-Amz-Signature=fb97c89f5984ed2bf4879430d6c60900ceb4aa2a838268ce8fe4e7b1d152db5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
