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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7TIUDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiSbpWFho1BDyVutWznkpBkm6eo6hJrVEKPIBy5GzWcwIgcnvzZXpDimE2eKP%2Bztx6ao1alp4xOHe1H%2BzgPLP9DGoqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FEkdJq%2F2dKIHOVdyrcA%2F0Yee08h52gxWXintfV3vpfPJI%2FI7BPUGF%2BVWT8H97xYlk7WCY1ZJSTf%2BT0jbAeET%2FO2jFcL4zao%2FBC10%2FV0K2OzqUJx%2BlMYsTV8OeDEP5sFHpf7Cds2tMAZIRo2kVI763WWNtOHHW7csBLjTY9ZLB7tRsov53tHCcKpajkvu%2B8R2tqxIeE3ia8lw3Ao%2FqL2YXXqX51GeVGcFj5jMhNXWf25vyyYbzxmttP9loEY1J69cMUXq1AZuJ4f8F3hGHO3oEBGjNP81EEXCM5jGFx82xVA6jZKWxOkiGU7Zr1JDtKKLXXpW%2BJhUSEb66tjuuCO8VbQCBfmIDo29pBufQ7oUmiLxqkA9YrTs8%2B521w0BlxH6Zpxbb5UJaXNsh5WOregy27nvfKmftu35FIVOmWpkFCPlEABJI6jaAUDqLs%2BttlgkuubcFp4mJaFexzqdo4tO%2B7bYIWpef%2Fdsd4YUyAVK%2B3ZQQJEadgCzM5pBS5uofb%2F2Bxiv60VdPbwNaAceyXH1Y1Y7Gj1K%2F2lRWllqyzkWzMz3Nxr10iCaPIcPfX7S6Yu5i8KGT%2FvY78NtqEy%2BCsljWPwlIzVbE7WH7Yk9CBm5YzKRAqQvlz7ehtkst124aJ5A%2F3anRIwZy5SDxRMPTIrr0GOqUBjgiuveIosKUocJqaFpx22kmYPKzjKLljyl4c9o8BP8UhdcfkQh%2FqBhaAgfeMP5nPIwy8aepiija8psa9AKlHMBw3uic6WUmg5ItvGEn%2BB3dnUh%2F5l7F79AS4xokOxNW5iwWd0yZv3TOjcZVmZ4K9c1HvN8R32LtcxRQpiTYxaBocjBIsMkaH1gOKoAl0u7gtMbGQaTb1Q1aFoeShgQAvc%2BP1kXHB&X-Amz-Signature=1d4735127dc0e136e8d195bba0504f97801980e8ebd98fd27d238911c9e4ee95&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7TIUDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiSbpWFho1BDyVutWznkpBkm6eo6hJrVEKPIBy5GzWcwIgcnvzZXpDimE2eKP%2Bztx6ao1alp4xOHe1H%2BzgPLP9DGoqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FEkdJq%2F2dKIHOVdyrcA%2F0Yee08h52gxWXintfV3vpfPJI%2FI7BPUGF%2BVWT8H97xYlk7WCY1ZJSTf%2BT0jbAeET%2FO2jFcL4zao%2FBC10%2FV0K2OzqUJx%2BlMYsTV8OeDEP5sFHpf7Cds2tMAZIRo2kVI763WWNtOHHW7csBLjTY9ZLB7tRsov53tHCcKpajkvu%2B8R2tqxIeE3ia8lw3Ao%2FqL2YXXqX51GeVGcFj5jMhNXWf25vyyYbzxmttP9loEY1J69cMUXq1AZuJ4f8F3hGHO3oEBGjNP81EEXCM5jGFx82xVA6jZKWxOkiGU7Zr1JDtKKLXXpW%2BJhUSEb66tjuuCO8VbQCBfmIDo29pBufQ7oUmiLxqkA9YrTs8%2B521w0BlxH6Zpxbb5UJaXNsh5WOregy27nvfKmftu35FIVOmWpkFCPlEABJI6jaAUDqLs%2BttlgkuubcFp4mJaFexzqdo4tO%2B7bYIWpef%2Fdsd4YUyAVK%2B3ZQQJEadgCzM5pBS5uofb%2F2Bxiv60VdPbwNaAceyXH1Y1Y7Gj1K%2F2lRWllqyzkWzMz3Nxr10iCaPIcPfX7S6Yu5i8KGT%2FvY78NtqEy%2BCsljWPwlIzVbE7WH7Yk9CBm5YzKRAqQvlz7ehtkst124aJ5A%2F3anRIwZy5SDxRMPTIrr0GOqUBjgiuveIosKUocJqaFpx22kmYPKzjKLljyl4c9o8BP8UhdcfkQh%2FqBhaAgfeMP5nPIwy8aepiija8psa9AKlHMBw3uic6WUmg5ItvGEn%2BB3dnUh%2F5l7F79AS4xokOxNW5iwWd0yZv3TOjcZVmZ4K9c1HvN8R32LtcxRQpiTYxaBocjBIsMkaH1gOKoAl0u7gtMbGQaTb1Q1aFoeShgQAvc%2BP1kXHB&X-Amz-Signature=cb74b2165e9a450b0949836353127f2c01d74f1acd012ac828744f17d85b596b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7TIUDZ%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T003615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDiSbpWFho1BDyVutWznkpBkm6eo6hJrVEKPIBy5GzWcwIgcnvzZXpDimE2eKP%2Bztx6ao1alp4xOHe1H%2BzgPLP9DGoqiAQI3P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2FEkdJq%2F2dKIHOVdyrcA%2F0Yee08h52gxWXintfV3vpfPJI%2FI7BPUGF%2BVWT8H97xYlk7WCY1ZJSTf%2BT0jbAeET%2FO2jFcL4zao%2FBC10%2FV0K2OzqUJx%2BlMYsTV8OeDEP5sFHpf7Cds2tMAZIRo2kVI763WWNtOHHW7csBLjTY9ZLB7tRsov53tHCcKpajkvu%2B8R2tqxIeE3ia8lw3Ao%2FqL2YXXqX51GeVGcFj5jMhNXWf25vyyYbzxmttP9loEY1J69cMUXq1AZuJ4f8F3hGHO3oEBGjNP81EEXCM5jGFx82xVA6jZKWxOkiGU7Zr1JDtKKLXXpW%2BJhUSEb66tjuuCO8VbQCBfmIDo29pBufQ7oUmiLxqkA9YrTs8%2B521w0BlxH6Zpxbb5UJaXNsh5WOregy27nvfKmftu35FIVOmWpkFCPlEABJI6jaAUDqLs%2BttlgkuubcFp4mJaFexzqdo4tO%2B7bYIWpef%2Fdsd4YUyAVK%2B3ZQQJEadgCzM5pBS5uofb%2F2Bxiv60VdPbwNaAceyXH1Y1Y7Gj1K%2F2lRWllqyzkWzMz3Nxr10iCaPIcPfX7S6Yu5i8KGT%2FvY78NtqEy%2BCsljWPwlIzVbE7WH7Yk9CBm5YzKRAqQvlz7ehtkst124aJ5A%2F3anRIwZy5SDxRMPTIrr0GOqUBjgiuveIosKUocJqaFpx22kmYPKzjKLljyl4c9o8BP8UhdcfkQh%2FqBhaAgfeMP5nPIwy8aepiija8psa9AKlHMBw3uic6WUmg5ItvGEn%2BB3dnUh%2F5l7F79AS4xokOxNW5iwWd0yZv3TOjcZVmZ4K9c1HvN8R32LtcxRQpiTYxaBocjBIsMkaH1gOKoAl0u7gtMbGQaTb1Q1aFoeShgQAvc%2BP1kXHB&X-Amz-Signature=486687dd9539c9e16e7530dd810f719f377966607ef9e3971168569d3a79b7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
