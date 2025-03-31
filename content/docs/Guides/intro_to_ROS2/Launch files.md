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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZRC577%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtj097wr5N9uGMFmYekemJJM1GXweA5doiUk%2BAk56QggIgRmJ3DjOlTxmnhhh20%2BHWzUFN%2BsuEJxtRUjCJ53uokC8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1vzrj7tGVAIgQAQircA7d2K5ei7385t1rZixN%2F8swWbuN3suGgmjaGs60Crz2DVp2TqCOKT8VYk90wkt29ohNjAeJ4WsvN0tt6%2BwsFIrzL%2Fx22ycZhWYNMcKnPMkg3EoYQtsYaBZhTPE9HsL286olfL877iJxNx8vV049ZU8F8M50nfDKlaHaVUuNQURXujw021kAkigcUBE5Zqspy6UDceORNoMzQUL7TO%2BTRTKul9ny29fkk1yturYIuURUzEaDJ4yi7XvKXcGyLyI%2FIg0g%2B4V89JvT%2FdS%2Bi%2Fn3Elfjnx6vHT6xLfAuWkLg%2BZdf6D0VaQe9YpIBWuCxxDeRixdglP8PGM4VWhI3hK4suXh3sYegmGrkHSO%2Biqv1MPctVmF4XSe7O%2FfvBo0YkU4OsqNnyweP984i4hw671vFdo1P%2BzsWo0CcMkPZXrrXFjddvG3vg49bJtPA2qtst0aZevxUBFMAXSYpd04%2Bv6p5X6iPjxvyL7MepAWZgqUBSPsmPKn4wIjNsn16MmTq9Du5IkIQiv%2F2JnYGi72RrVuCk%2FiE9RgqRVEOnzoVn4MV6mS8G7LP5FJuXTiwvuidLnqj7gBis8rcc%2BIYRUJs98PKesm2rWRH8lbO%2F67fPKIlYLmv%2F04ErFeCA2YCZZ7ZbMOaaqb8GOqUBeMl4wxOkfpSPKm879UOah2KXAViT5KU%2FTMGHM8O3H3LmMSZ937RG1SF7%2BGMc6udmSUE238qDvuRoTHHgLbyoo91EPiMZMWdibgpfI24r%2FJ%2FjGa2N2fZiDhEHSXqBQemuooZLazpfro7hMgbwOss7bdO%2F3bdi%2Ft5jBywPwS9%2Ff10W8%2BP1c2BmgWg8UeEChqrMbKTtDvYS3CjNCjJCbWIWfgvdmYES&X-Amz-Signature=796994ca028e0044355518f3bb901558535805745b258dd5af336f3f8e8f5b72&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZRC577%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtj097wr5N9uGMFmYekemJJM1GXweA5doiUk%2BAk56QggIgRmJ3DjOlTxmnhhh20%2BHWzUFN%2BsuEJxtRUjCJ53uokC8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1vzrj7tGVAIgQAQircA7d2K5ei7385t1rZixN%2F8swWbuN3suGgmjaGs60Crz2DVp2TqCOKT8VYk90wkt29ohNjAeJ4WsvN0tt6%2BwsFIrzL%2Fx22ycZhWYNMcKnPMkg3EoYQtsYaBZhTPE9HsL286olfL877iJxNx8vV049ZU8F8M50nfDKlaHaVUuNQURXujw021kAkigcUBE5Zqspy6UDceORNoMzQUL7TO%2BTRTKul9ny29fkk1yturYIuURUzEaDJ4yi7XvKXcGyLyI%2FIg0g%2B4V89JvT%2FdS%2Bi%2Fn3Elfjnx6vHT6xLfAuWkLg%2BZdf6D0VaQe9YpIBWuCxxDeRixdglP8PGM4VWhI3hK4suXh3sYegmGrkHSO%2Biqv1MPctVmF4XSe7O%2FfvBo0YkU4OsqNnyweP984i4hw671vFdo1P%2BzsWo0CcMkPZXrrXFjddvG3vg49bJtPA2qtst0aZevxUBFMAXSYpd04%2Bv6p5X6iPjxvyL7MepAWZgqUBSPsmPKn4wIjNsn16MmTq9Du5IkIQiv%2F2JnYGi72RrVuCk%2FiE9RgqRVEOnzoVn4MV6mS8G7LP5FJuXTiwvuidLnqj7gBis8rcc%2BIYRUJs98PKesm2rWRH8lbO%2F67fPKIlYLmv%2F04ErFeCA2YCZZ7ZbMOaaqb8GOqUBeMl4wxOkfpSPKm879UOah2KXAViT5KU%2FTMGHM8O3H3LmMSZ937RG1SF7%2BGMc6udmSUE238qDvuRoTHHgLbyoo91EPiMZMWdibgpfI24r%2FJ%2FjGa2N2fZiDhEHSXqBQemuooZLazpfro7hMgbwOss7bdO%2F3bdi%2Ft5jBywPwS9%2Ff10W8%2BP1c2BmgWg8UeEChqrMbKTtDvYS3CjNCjJCbWIWfgvdmYES&X-Amz-Signature=c887c2f30ba18dbe9ebfdf3035db54ae4234e530cb0ae21e97665442070bef99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NZRC577%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIQDtj097wr5N9uGMFmYekemJJM1GXweA5doiUk%2BAk56QggIgRmJ3DjOlTxmnhhh20%2BHWzUFN%2BsuEJxtRUjCJ53uokC8qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG1vzrj7tGVAIgQAQircA7d2K5ei7385t1rZixN%2F8swWbuN3suGgmjaGs60Crz2DVp2TqCOKT8VYk90wkt29ohNjAeJ4WsvN0tt6%2BwsFIrzL%2Fx22ycZhWYNMcKnPMkg3EoYQtsYaBZhTPE9HsL286olfL877iJxNx8vV049ZU8F8M50nfDKlaHaVUuNQURXujw021kAkigcUBE5Zqspy6UDceORNoMzQUL7TO%2BTRTKul9ny29fkk1yturYIuURUzEaDJ4yi7XvKXcGyLyI%2FIg0g%2B4V89JvT%2FdS%2Bi%2Fn3Elfjnx6vHT6xLfAuWkLg%2BZdf6D0VaQe9YpIBWuCxxDeRixdglP8PGM4VWhI3hK4suXh3sYegmGrkHSO%2Biqv1MPctVmF4XSe7O%2FfvBo0YkU4OsqNnyweP984i4hw671vFdo1P%2BzsWo0CcMkPZXrrXFjddvG3vg49bJtPA2qtst0aZevxUBFMAXSYpd04%2Bv6p5X6iPjxvyL7MepAWZgqUBSPsmPKn4wIjNsn16MmTq9Du5IkIQiv%2F2JnYGi72RrVuCk%2FiE9RgqRVEOnzoVn4MV6mS8G7LP5FJuXTiwvuidLnqj7gBis8rcc%2BIYRUJs98PKesm2rWRH8lbO%2F67fPKIlYLmv%2F04ErFeCA2YCZZ7ZbMOaaqb8GOqUBeMl4wxOkfpSPKm879UOah2KXAViT5KU%2FTMGHM8O3H3LmMSZ937RG1SF7%2BGMc6udmSUE238qDvuRoTHHgLbyoo91EPiMZMWdibgpfI24r%2FJ%2FjGa2N2fZiDhEHSXqBQemuooZLazpfro7hMgbwOss7bdO%2F3bdi%2Ft5jBywPwS9%2Ff10W8%2BP1c2BmgWg8UeEChqrMbKTtDvYS3CjNCjJCbWIWfgvdmYES&X-Amz-Signature=bcecb60d977a7bb4bc0373e37f95e2502ce02d7e05a60577d00bc1a862af6018&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
