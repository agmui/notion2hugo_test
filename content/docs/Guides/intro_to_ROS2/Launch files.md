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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUL3SXV%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB22ewK3E8ZSrj%2Bifez%2FQZ8hxZL5O9hs0raT5QIXR3JpAiEAxRWsmCmZp18PmJq2IUlyiNPhNE75YMyYWhMPrqQZQTgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgtn6IR0bf%2B5gpGircAzfjcMSPy2JlFhmUzf8DDYFtS0xH7Pllth07j8pOvrC52DGXLQEVPsALCWjjclsHWJFuKqE5PDDCIP%2FtsQpY%2FIKjhr65SiBy0vGmOrqfK99a%2FfuLSGlwoAC0yD7FhGXBj%2BFgh3Z9iDQfy9tK94dEZffK6dgqAuBaBqnFrtIEFHfYwF7v%2BUVSbo3m5XJg1Sr6H%2BPdr61AvgXhR6P942%2BhnTWSHS0WX81zZ8N4uLZCuXlLgS8E%2FHbfRfVcAJ3DFAP6D4B0RMKNCCXdMQ49G569i6m3qXrYKciRccxIpNhs8v1FBH%2BKr0zAeq1EQfYKi28A73bW1K%2FAQ1m%2BseyyEPtuBLNuPhnPvEFbli6ZqnUXgRU6KC2mKKYmTfoHXTDqp752lVwUX1S%2B6R3tzb6mL%2F7teagNB%2FtKvV4AnmZE%2FsVe%2BBp7wqzmqcJ05cpXBG%2BPGTr5dGkRprfXNb6rD%2Fsg6PV4CePrr4x23wdOUofU9%2FdaStbjC%2F6su9FdOD%2Bo1BjSchXrCu7jEeT03pfS2L6ykJAr1gr5GAv57XSyfkCiyMAEDpk7ZpBhnYHyYj9msfdOYIEo5UGxAWxs%2BUym9OSLZ34E9oj6PfiBII6Ee4X5sZ973HPvUNxp8sWk53snxROJMLHYpscGOqUBh8J4Zs9jwSCXtjYNtb8T7THq0plRVb6Xy9C21rRtmdtKs7ROfiXapUfSowecacaeT%2F50se8iHsRB6zCKz%2BVOtmPmQjTRRjXhs3lUZcRXB6o4q34kPXBxB5YcADRJMFunQ%2BEkxsQYdQhNtgt3P%2F3kr26EK7UaVq%2FrJxZnrcbIQE3dRlf%2BrfGAUosntBzewmyReNK7q%2B3m0C3Kj%2BgNLDp5LN6%2B5jWK&X-Amz-Signature=8f93d1f38dff21439fbfda555832a208292a0ea4541236b984178c528a860ae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUL3SXV%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB22ewK3E8ZSrj%2Bifez%2FQZ8hxZL5O9hs0raT5QIXR3JpAiEAxRWsmCmZp18PmJq2IUlyiNPhNE75YMyYWhMPrqQZQTgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgtn6IR0bf%2B5gpGircAzfjcMSPy2JlFhmUzf8DDYFtS0xH7Pllth07j8pOvrC52DGXLQEVPsALCWjjclsHWJFuKqE5PDDCIP%2FtsQpY%2FIKjhr65SiBy0vGmOrqfK99a%2FfuLSGlwoAC0yD7FhGXBj%2BFgh3Z9iDQfy9tK94dEZffK6dgqAuBaBqnFrtIEFHfYwF7v%2BUVSbo3m5XJg1Sr6H%2BPdr61AvgXhR6P942%2BhnTWSHS0WX81zZ8N4uLZCuXlLgS8E%2FHbfRfVcAJ3DFAP6D4B0RMKNCCXdMQ49G569i6m3qXrYKciRccxIpNhs8v1FBH%2BKr0zAeq1EQfYKi28A73bW1K%2FAQ1m%2BseyyEPtuBLNuPhnPvEFbli6ZqnUXgRU6KC2mKKYmTfoHXTDqp752lVwUX1S%2B6R3tzb6mL%2F7teagNB%2FtKvV4AnmZE%2FsVe%2BBp7wqzmqcJ05cpXBG%2BPGTr5dGkRprfXNb6rD%2Fsg6PV4CePrr4x23wdOUofU9%2FdaStbjC%2F6su9FdOD%2Bo1BjSchXrCu7jEeT03pfS2L6ykJAr1gr5GAv57XSyfkCiyMAEDpk7ZpBhnYHyYj9msfdOYIEo5UGxAWxs%2BUym9OSLZ34E9oj6PfiBII6Ee4X5sZ973HPvUNxp8sWk53snxROJMLHYpscGOqUBh8J4Zs9jwSCXtjYNtb8T7THq0plRVb6Xy9C21rRtmdtKs7ROfiXapUfSowecacaeT%2F50se8iHsRB6zCKz%2BVOtmPmQjTRRjXhs3lUZcRXB6o4q34kPXBxB5YcADRJMFunQ%2BEkxsQYdQhNtgt3P%2F3kr26EK7UaVq%2FrJxZnrcbIQE3dRlf%2BrfGAUosntBzewmyReNK7q%2B3m0C3Kj%2BgNLDp5LN6%2B5jWK&X-Amz-Signature=b03f82acc3bc28a38d9c62a8fb72dc72f906f7f2f15ed16db5f4261894c352bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEUL3SXV%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIB22ewK3E8ZSrj%2Bifez%2FQZ8hxZL5O9hs0raT5QIXR3JpAiEAxRWsmCmZp18PmJq2IUlyiNPhNE75YMyYWhMPrqQZQTgqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDgtn6IR0bf%2B5gpGircAzfjcMSPy2JlFhmUzf8DDYFtS0xH7Pllth07j8pOvrC52DGXLQEVPsALCWjjclsHWJFuKqE5PDDCIP%2FtsQpY%2FIKjhr65SiBy0vGmOrqfK99a%2FfuLSGlwoAC0yD7FhGXBj%2BFgh3Z9iDQfy9tK94dEZffK6dgqAuBaBqnFrtIEFHfYwF7v%2BUVSbo3m5XJg1Sr6H%2BPdr61AvgXhR6P942%2BhnTWSHS0WX81zZ8N4uLZCuXlLgS8E%2FHbfRfVcAJ3DFAP6D4B0RMKNCCXdMQ49G569i6m3qXrYKciRccxIpNhs8v1FBH%2BKr0zAeq1EQfYKi28A73bW1K%2FAQ1m%2BseyyEPtuBLNuPhnPvEFbli6ZqnUXgRU6KC2mKKYmTfoHXTDqp752lVwUX1S%2B6R3tzb6mL%2F7teagNB%2FtKvV4AnmZE%2FsVe%2BBp7wqzmqcJ05cpXBG%2BPGTr5dGkRprfXNb6rD%2Fsg6PV4CePrr4x23wdOUofU9%2FdaStbjC%2F6su9FdOD%2Bo1BjSchXrCu7jEeT03pfS2L6ykJAr1gr5GAv57XSyfkCiyMAEDpk7ZpBhnYHyYj9msfdOYIEo5UGxAWxs%2BUym9OSLZ34E9oj6PfiBII6Ee4X5sZ973HPvUNxp8sWk53snxROJMLHYpscGOqUBh8J4Zs9jwSCXtjYNtb8T7THq0plRVb6Xy9C21rRtmdtKs7ROfiXapUfSowecacaeT%2F50se8iHsRB6zCKz%2BVOtmPmQjTRRjXhs3lUZcRXB6o4q34kPXBxB5YcADRJMFunQ%2BEkxsQYdQhNtgt3P%2F3kr26EK7UaVq%2FrJxZnrcbIQE3dRlf%2BrfGAUosntBzewmyReNK7q%2B3m0C3Kj%2BgNLDp5LN6%2B5jWK&X-Amz-Signature=260737b1a9315b3f8c2625d74da965c7b842f2cbf48ec2ea05821d6f73e08f35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
