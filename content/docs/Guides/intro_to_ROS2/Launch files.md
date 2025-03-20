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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYN6ZDOJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDk9ZjuH2%2BQkzEM3kO%2BfW9T3fKTMwS1d239Q%2FrgHFb2LQIhAN2LCiGfHjRPrggC0ph%2BfYCk7DxgRkaAGqLc1dkdmqQBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ym4HrL0ZALXWgkYq3AOnXQ8ot%2FpkS7aYjXL164VceLGZ2uUPHMTsHLIk17h3E0ecWmj2hnCVh6xXBdetQQPcyfIA654drXvy%2FOi7kzHZhCOhgL%2BJQML%2B8YLeuXjq5HbAMCdM4g%2BMi%2F0WZBjAe37HPdL6aL7Far3otzIP%2FSVbeo%2F7kHYgQkVaO29gU2u72tQpAN4sSxS1%2FMIpvw1WJe2N38D4qlbfNGKPf%2B1yTBSG3PUY35c7AbQgO8Ibw47xrI1i283yr%2BT%2FEIRXE3ocJPJsTytwzppiXNfMJnffatZ%2F2CP%2BGvrpHM%2BHHaFraQUqnIDoWMutJYKZ6gkkdXUAoqMsSbMQVM9cFWnvjuuFO8u5hgieOfJQtiJ%2FHs9AZElEv82cpdujEsjiKJUypgIzKe1bnNKR%2Bv8KTG%2B2mSUsvBcpjIvkRvF8yd6knM8pp9MJY9hSDvB8Ot6OBuhAe59mPuRcRB6RMZBgjw3O00eXl6vvwd7iBevp%2FBP6Frtbske4poNIbKAevVcOd%2FVBKvmfcpjyRr3cdyrBwZt5SQCNNzwTs8K0HpGAxv4r7N4hpiwH4F3Q2lPGNOswiHFQY6%2F%2FUVgG0a7Ka5ilEdwUUtw97DFeQ%2FXuTB2btw8swaKTd5enFS2YWR252P%2BawLFf%2FjD0xu%2B%2BBjqkAVlTeov9zRMZf3vCp5GpaFEQnZbyWXcz%2BxevwY0a5XoVCxVSR0uYUL2PBh3u0Grjr58Pk7m4SbYw2IekkSsoTjljUHSr%2FZSXTTjWAP9XeHbeG6QEzw94zBe0z24qlzTunra6gWow%2FTNsr2RtmVLQOVyDH6a78rYszxjbSz7l6iZwo3OXGb6F3TD79BXnUKFzbtDc2nUw3FF1yoOiCVBQNEHf%2FCN3&X-Amz-Signature=13b6d22ddfa41d61805025040744b5daa8508a3843fdfa6c4b2bb353cfacfe6a&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYN6ZDOJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDk9ZjuH2%2BQkzEM3kO%2BfW9T3fKTMwS1d239Q%2FrgHFb2LQIhAN2LCiGfHjRPrggC0ph%2BfYCk7DxgRkaAGqLc1dkdmqQBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ym4HrL0ZALXWgkYq3AOnXQ8ot%2FpkS7aYjXL164VceLGZ2uUPHMTsHLIk17h3E0ecWmj2hnCVh6xXBdetQQPcyfIA654drXvy%2FOi7kzHZhCOhgL%2BJQML%2B8YLeuXjq5HbAMCdM4g%2BMi%2F0WZBjAe37HPdL6aL7Far3otzIP%2FSVbeo%2F7kHYgQkVaO29gU2u72tQpAN4sSxS1%2FMIpvw1WJe2N38D4qlbfNGKPf%2B1yTBSG3PUY35c7AbQgO8Ibw47xrI1i283yr%2BT%2FEIRXE3ocJPJsTytwzppiXNfMJnffatZ%2F2CP%2BGvrpHM%2BHHaFraQUqnIDoWMutJYKZ6gkkdXUAoqMsSbMQVM9cFWnvjuuFO8u5hgieOfJQtiJ%2FHs9AZElEv82cpdujEsjiKJUypgIzKe1bnNKR%2Bv8KTG%2B2mSUsvBcpjIvkRvF8yd6knM8pp9MJY9hSDvB8Ot6OBuhAe59mPuRcRB6RMZBgjw3O00eXl6vvwd7iBevp%2FBP6Frtbske4poNIbKAevVcOd%2FVBKvmfcpjyRr3cdyrBwZt5SQCNNzwTs8K0HpGAxv4r7N4hpiwH4F3Q2lPGNOswiHFQY6%2F%2FUVgG0a7Ka5ilEdwUUtw97DFeQ%2FXuTB2btw8swaKTd5enFS2YWR252P%2BawLFf%2FjD0xu%2B%2BBjqkAVlTeov9zRMZf3vCp5GpaFEQnZbyWXcz%2BxevwY0a5XoVCxVSR0uYUL2PBh3u0Grjr58Pk7m4SbYw2IekkSsoTjljUHSr%2FZSXTTjWAP9XeHbeG6QEzw94zBe0z24qlzTunra6gWow%2FTNsr2RtmVLQOVyDH6a78rYszxjbSz7l6iZwo3OXGb6F3TD79BXnUKFzbtDc2nUw3FF1yoOiCVBQNEHf%2FCN3&X-Amz-Signature=c1f3d297e3df82ae1d10c8223d6c45970922e6148a252a251e069289efb691fb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYN6ZDOJ%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T100909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDk9ZjuH2%2BQkzEM3kO%2BfW9T3fKTMwS1d239Q%2FrgHFb2LQIhAN2LCiGfHjRPrggC0ph%2BfYCk7DxgRkaAGqLc1dkdmqQBKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4ym4HrL0ZALXWgkYq3AOnXQ8ot%2FpkS7aYjXL164VceLGZ2uUPHMTsHLIk17h3E0ecWmj2hnCVh6xXBdetQQPcyfIA654drXvy%2FOi7kzHZhCOhgL%2BJQML%2B8YLeuXjq5HbAMCdM4g%2BMi%2F0WZBjAe37HPdL6aL7Far3otzIP%2FSVbeo%2F7kHYgQkVaO29gU2u72tQpAN4sSxS1%2FMIpvw1WJe2N38D4qlbfNGKPf%2B1yTBSG3PUY35c7AbQgO8Ibw47xrI1i283yr%2BT%2FEIRXE3ocJPJsTytwzppiXNfMJnffatZ%2F2CP%2BGvrpHM%2BHHaFraQUqnIDoWMutJYKZ6gkkdXUAoqMsSbMQVM9cFWnvjuuFO8u5hgieOfJQtiJ%2FHs9AZElEv82cpdujEsjiKJUypgIzKe1bnNKR%2Bv8KTG%2B2mSUsvBcpjIvkRvF8yd6knM8pp9MJY9hSDvB8Ot6OBuhAe59mPuRcRB6RMZBgjw3O00eXl6vvwd7iBevp%2FBP6Frtbske4poNIbKAevVcOd%2FVBKvmfcpjyRr3cdyrBwZt5SQCNNzwTs8K0HpGAxv4r7N4hpiwH4F3Q2lPGNOswiHFQY6%2F%2FUVgG0a7Ka5ilEdwUUtw97DFeQ%2FXuTB2btw8swaKTd5enFS2YWR252P%2BawLFf%2FjD0xu%2B%2BBjqkAVlTeov9zRMZf3vCp5GpaFEQnZbyWXcz%2BxevwY0a5XoVCxVSR0uYUL2PBh3u0Grjr58Pk7m4SbYw2IekkSsoTjljUHSr%2FZSXTTjWAP9XeHbeG6QEzw94zBe0z24qlzTunra6gWow%2FTNsr2RtmVLQOVyDH6a78rYszxjbSz7l6iZwo3OXGb6F3TD79BXnUKFzbtDc2nUw3FF1yoOiCVBQNEHf%2FCN3&X-Amz-Signature=a5ddc5a305468b6a90919d909013f16e4a24f58c63d8c511f64a7f4bda078dbe&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
