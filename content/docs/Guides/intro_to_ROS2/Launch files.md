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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSIRW6Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP3RUDSYhtrQ6Xr%2F8WWMoLh3AO5rBLm%2BtRahCUONTFWAiAQuL5nYJQAhKWvJD1InxDhv3SsYbYKtdBTR7oA9gh6%2FSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95q414gLE%2FBUMfnKtwDBJ8KDjQBGubydTkVL7KNVzSQFwBuNnPij4F0kJhGzkPw2coG94IJe4YmxNXf%2FoPLK4U2AoPjGoYXrNgFZoKTRkuNRMKqXKwI0Y7HFoH9cohbkNYg4oqIqmjWN48PCtYyAA4LzEUQbPPK%2Fe7rP%2BL3uo1Fx98pfaTw81sFJ4F9IBG%2B0BRTAV%2FMqYA04KBvqFiFNlTn0ov%2FUOHGnbUZBdfOzS10q18u3E3KuARrK21%2B5epZDe%2FxxogNMBRzhnXWs0Bh274%2BSjiimmbEeQ47RYqbH0zFgZZfVzEJt48MS9IXaXs1d6%2Bw1%2B1ayCBmrjc%2FB7CkmvptjroiAfymucGzxZQybikd7HrGhg3jy%2FxItLQOBJ70fpWC8xHGP0zIlz02pDUQNkfViUWOds5Pm6T310U%2F0LIivj%2FnPX96IVuA45OOTSkvnlMTMqzmfcDuKEwGEUXjG5xbQTTIuXGczs5ug7SUTX2pearYmMN%2FPFYCESnvRJeogp%2FIlGQYHskJg9mXCvCyzyJ4lST7N5eH0eXpWvSp2bAiQ3vN4GakpvsOcwW90Ug11djaEFwplCYDdSVaEbyRMeVkh%2BimWJaokRDvG7qaUdnX2cFBFxOytg0at9366Q%2FwYyqjO%2BbQbxNovMMw7J3lxAY6pgGS9k8JbDvLjUK65zmPF5ZlD%2BcX0v5dtsuOiigSgKTH%2B%2BkUxm6epsfMKqMjnoLiGXe7PRUPsU0TIZCLPtRzoNt6zUWHX5vLjLEe55o2U4et2BIF5Zm%2Bxdv3e1mWs3cIwKLPvHPsn8xxQp6nbe1shx1S2GYi2Fi57mEuWM2Br8zGIeAlorAZGabnaJQ0m87T%2B55nt3If2%2BIhQuMZGeYGDUEDt96Jxxav&X-Amz-Signature=1d700dafcd4db16d7bb64f9726372085c9525d21f9042f48f90de6cebb589397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSIRW6Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP3RUDSYhtrQ6Xr%2F8WWMoLh3AO5rBLm%2BtRahCUONTFWAiAQuL5nYJQAhKWvJD1InxDhv3SsYbYKtdBTR7oA9gh6%2FSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95q414gLE%2FBUMfnKtwDBJ8KDjQBGubydTkVL7KNVzSQFwBuNnPij4F0kJhGzkPw2coG94IJe4YmxNXf%2FoPLK4U2AoPjGoYXrNgFZoKTRkuNRMKqXKwI0Y7HFoH9cohbkNYg4oqIqmjWN48PCtYyAA4LzEUQbPPK%2Fe7rP%2BL3uo1Fx98pfaTw81sFJ4F9IBG%2B0BRTAV%2FMqYA04KBvqFiFNlTn0ov%2FUOHGnbUZBdfOzS10q18u3E3KuARrK21%2B5epZDe%2FxxogNMBRzhnXWs0Bh274%2BSjiimmbEeQ47RYqbH0zFgZZfVzEJt48MS9IXaXs1d6%2Bw1%2B1ayCBmrjc%2FB7CkmvptjroiAfymucGzxZQybikd7HrGhg3jy%2FxItLQOBJ70fpWC8xHGP0zIlz02pDUQNkfViUWOds5Pm6T310U%2F0LIivj%2FnPX96IVuA45OOTSkvnlMTMqzmfcDuKEwGEUXjG5xbQTTIuXGczs5ug7SUTX2pearYmMN%2FPFYCESnvRJeogp%2FIlGQYHskJg9mXCvCyzyJ4lST7N5eH0eXpWvSp2bAiQ3vN4GakpvsOcwW90Ug11djaEFwplCYDdSVaEbyRMeVkh%2BimWJaokRDvG7qaUdnX2cFBFxOytg0at9366Q%2FwYyqjO%2BbQbxNovMMw7J3lxAY6pgGS9k8JbDvLjUK65zmPF5ZlD%2BcX0v5dtsuOiigSgKTH%2B%2BkUxm6epsfMKqMjnoLiGXe7PRUPsU0TIZCLPtRzoNt6zUWHX5vLjLEe55o2U4et2BIF5Zm%2Bxdv3e1mWs3cIwKLPvHPsn8xxQp6nbe1shx1S2GYi2Fi57mEuWM2Br8zGIeAlorAZGabnaJQ0m87T%2B55nt3If2%2BIhQuMZGeYGDUEDt96Jxxav&X-Amz-Signature=67dd356a2328aad8da6fa7157536aea057ad0b85f11eced1a300837ba988ccfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YSIRW6Y%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T044034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFP3RUDSYhtrQ6Xr%2F8WWMoLh3AO5rBLm%2BtRahCUONTFWAiAQuL5nYJQAhKWvJD1InxDhv3SsYbYKtdBTR7oA9gh6%2FSqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd95q414gLE%2FBUMfnKtwDBJ8KDjQBGubydTkVL7KNVzSQFwBuNnPij4F0kJhGzkPw2coG94IJe4YmxNXf%2FoPLK4U2AoPjGoYXrNgFZoKTRkuNRMKqXKwI0Y7HFoH9cohbkNYg4oqIqmjWN48PCtYyAA4LzEUQbPPK%2Fe7rP%2BL3uo1Fx98pfaTw81sFJ4F9IBG%2B0BRTAV%2FMqYA04KBvqFiFNlTn0ov%2FUOHGnbUZBdfOzS10q18u3E3KuARrK21%2B5epZDe%2FxxogNMBRzhnXWs0Bh274%2BSjiimmbEeQ47RYqbH0zFgZZfVzEJt48MS9IXaXs1d6%2Bw1%2B1ayCBmrjc%2FB7CkmvptjroiAfymucGzxZQybikd7HrGhg3jy%2FxItLQOBJ70fpWC8xHGP0zIlz02pDUQNkfViUWOds5Pm6T310U%2F0LIivj%2FnPX96IVuA45OOTSkvnlMTMqzmfcDuKEwGEUXjG5xbQTTIuXGczs5ug7SUTX2pearYmMN%2FPFYCESnvRJeogp%2FIlGQYHskJg9mXCvCyzyJ4lST7N5eH0eXpWvSp2bAiQ3vN4GakpvsOcwW90Ug11djaEFwplCYDdSVaEbyRMeVkh%2BimWJaokRDvG7qaUdnX2cFBFxOytg0at9366Q%2FwYyqjO%2BbQbxNovMMw7J3lxAY6pgGS9k8JbDvLjUK65zmPF5ZlD%2BcX0v5dtsuOiigSgKTH%2B%2BkUxm6epsfMKqMjnoLiGXe7PRUPsU0TIZCLPtRzoNt6zUWHX5vLjLEe55o2U4et2BIF5Zm%2Bxdv3e1mWs3cIwKLPvHPsn8xxQp6nbe1shx1S2GYi2Fi57mEuWM2Br8zGIeAlorAZGabnaJQ0m87T%2B55nt3If2%2BIhQuMZGeYGDUEDt96Jxxav&X-Amz-Signature=9912b2c24b02172eef318ae4fa370c9841ceae1ad6bec44358f871f6e7a84bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!!

- try to make a launch file for the publisher and subscriber
