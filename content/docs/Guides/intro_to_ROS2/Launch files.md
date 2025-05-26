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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESUZ3XU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD%2FGzs0Kd2TQDtbTa8L9F0YFHDD6xz90vhx0NaOGJOpGwIhAKsd4fYsFOYaS04DHe%2BtKETcB3faqE0W9iaZE1mtTdEyKv8DCEIQABoMNjM3NDIzMTgzODA1Igw3OL7ZutMG2Cs7Ej8q3AO%2FqPq0cZuyMMA%2BYyirz%2B3SHynckChPcq1vc1vUfNewqnj9Hb7mIXk6sV4XiYfQrCXJi4Q5Jk%2FjImlJuLI9rAO9snDaRoYvTbFPuSD1cH573SPmGhUX0u3oN9xscJHl5WquuxHmZxzx5kbH2AIbxfOY70NrY03GuKMAvax9FTeo8Vdr4cmMOPp%2B8Wq2z4ABzLIm4IJKBQargaH2N4kGMwu1C0FfNruRlhteqoNtpG41w0ljJGvGRfetrlRBDn1mcI7ME0J5aw%2BLXpTwbKahBq9yOsgrrODc9%2BBGF7%2F4LPY6mPn3prmIsbyJ554c8cZaLgmHeahVcMXeFzPPYjQw7iSTHItJdlygnPSTeyUqQJOluAF3Ly9mgI9dXshw%2BrlTWoW5Yz%2FCiQN%2BBxgx1V6x2yXTXkyHyUU4%2BoHc5t%2F%2BKEBx%2FZSVNoqkFu7slOKUyL1xXBsLBOHkCspFv3%2BGppGSPSL%2F2JK62HUJnMZaEsLYZHOkVehnj%2FeT3XGNgz0wR%2B0IRgtm0nm1j%2F5CG6s6fcLv%2B%2FscZDHHdX10YxJKXO7LkGP3KL30Kc5jYwGan%2BQP%2FGwFSJ3w8X%2BcwBi3KCgh%2BCXCAKcREKnlpjXHYiKqkUbOMGEYI6PN%2FYdxkXoFwsQuTjCG1tDBBjqkAeh%2Fs5rZ7aqyNlywi5UbBUhrgqvXb5U%2B4f4DZmAySIqlfDeAUra8rNi5V3UfL9AFASF1I00STwr72Zc%2FWvR0%2F5SG73RVvgYUVT4j53T9diClYsmM3VvRgz4%2FKbPJ%2BqjY23j01h1wIaL0xoiDAwYw4RNfSxtZZ4Lqftpati0h0oPV1PpzmOYOTvD8FXIclFZA6DzByKAOhwuP9BrIhLRTj%2FWQTd%2F7&X-Amz-Signature=15ee638eb79ac81a746d5fc7f993c904ba177c802d5a6100c5ad95fc01c8f30d&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESUZ3XU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD%2FGzs0Kd2TQDtbTa8L9F0YFHDD6xz90vhx0NaOGJOpGwIhAKsd4fYsFOYaS04DHe%2BtKETcB3faqE0W9iaZE1mtTdEyKv8DCEIQABoMNjM3NDIzMTgzODA1Igw3OL7ZutMG2Cs7Ej8q3AO%2FqPq0cZuyMMA%2BYyirz%2B3SHynckChPcq1vc1vUfNewqnj9Hb7mIXk6sV4XiYfQrCXJi4Q5Jk%2FjImlJuLI9rAO9snDaRoYvTbFPuSD1cH573SPmGhUX0u3oN9xscJHl5WquuxHmZxzx5kbH2AIbxfOY70NrY03GuKMAvax9FTeo8Vdr4cmMOPp%2B8Wq2z4ABzLIm4IJKBQargaH2N4kGMwu1C0FfNruRlhteqoNtpG41w0ljJGvGRfetrlRBDn1mcI7ME0J5aw%2BLXpTwbKahBq9yOsgrrODc9%2BBGF7%2F4LPY6mPn3prmIsbyJ554c8cZaLgmHeahVcMXeFzPPYjQw7iSTHItJdlygnPSTeyUqQJOluAF3Ly9mgI9dXshw%2BrlTWoW5Yz%2FCiQN%2BBxgx1V6x2yXTXkyHyUU4%2BoHc5t%2F%2BKEBx%2FZSVNoqkFu7slOKUyL1xXBsLBOHkCspFv3%2BGppGSPSL%2F2JK62HUJnMZaEsLYZHOkVehnj%2FeT3XGNgz0wR%2B0IRgtm0nm1j%2F5CG6s6fcLv%2B%2FscZDHHdX10YxJKXO7LkGP3KL30Kc5jYwGan%2BQP%2FGwFSJ3w8X%2BcwBi3KCgh%2BCXCAKcREKnlpjXHYiKqkUbOMGEYI6PN%2FYdxkXoFwsQuTjCG1tDBBjqkAeh%2Fs5rZ7aqyNlywi5UbBUhrgqvXb5U%2B4f4DZmAySIqlfDeAUra8rNi5V3UfL9AFASF1I00STwr72Zc%2FWvR0%2F5SG73RVvgYUVT4j53T9diClYsmM3VvRgz4%2FKbPJ%2BqjY23j01h1wIaL0xoiDAwYw4RNfSxtZZ4Lqftpati0h0oPV1PpzmOYOTvD8FXIclFZA6DzByKAOhwuP9BrIhLRTj%2FWQTd%2F7&X-Amz-Signature=9e909029c84dc721b42c307ea68db2a8a49085b8ea22775c506ab912bcb81ac9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RESUZ3XU%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQD%2FGzs0Kd2TQDtbTa8L9F0YFHDD6xz90vhx0NaOGJOpGwIhAKsd4fYsFOYaS04DHe%2BtKETcB3faqE0W9iaZE1mtTdEyKv8DCEIQABoMNjM3NDIzMTgzODA1Igw3OL7ZutMG2Cs7Ej8q3AO%2FqPq0cZuyMMA%2BYyirz%2B3SHynckChPcq1vc1vUfNewqnj9Hb7mIXk6sV4XiYfQrCXJi4Q5Jk%2FjImlJuLI9rAO9snDaRoYvTbFPuSD1cH573SPmGhUX0u3oN9xscJHl5WquuxHmZxzx5kbH2AIbxfOY70NrY03GuKMAvax9FTeo8Vdr4cmMOPp%2B8Wq2z4ABzLIm4IJKBQargaH2N4kGMwu1C0FfNruRlhteqoNtpG41w0ljJGvGRfetrlRBDn1mcI7ME0J5aw%2BLXpTwbKahBq9yOsgrrODc9%2BBGF7%2F4LPY6mPn3prmIsbyJ554c8cZaLgmHeahVcMXeFzPPYjQw7iSTHItJdlygnPSTeyUqQJOluAF3Ly9mgI9dXshw%2BrlTWoW5Yz%2FCiQN%2BBxgx1V6x2yXTXkyHyUU4%2BoHc5t%2F%2BKEBx%2FZSVNoqkFu7slOKUyL1xXBsLBOHkCspFv3%2BGppGSPSL%2F2JK62HUJnMZaEsLYZHOkVehnj%2FeT3XGNgz0wR%2B0IRgtm0nm1j%2F5CG6s6fcLv%2B%2FscZDHHdX10YxJKXO7LkGP3KL30Kc5jYwGan%2BQP%2FGwFSJ3w8X%2BcwBi3KCgh%2BCXCAKcREKnlpjXHYiKqkUbOMGEYI6PN%2FYdxkXoFwsQuTjCG1tDBBjqkAeh%2Fs5rZ7aqyNlywi5UbBUhrgqvXb5U%2B4f4DZmAySIqlfDeAUra8rNi5V3UfL9AFASF1I00STwr72Zc%2FWvR0%2F5SG73RVvgYUVT4j53T9diClYsmM3VvRgz4%2FKbPJ%2BqjY23j01h1wIaL0xoiDAwYw4RNfSxtZZ4Lqftpati0h0oPV1PpzmOYOTvD8FXIclFZA6DzByKAOhwuP9BrIhLRTj%2FWQTd%2F7&X-Amz-Signature=3bb414758fea59c4db37d2120367617cba5c9bcd1452bc924a9abb86c1ddc35b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
