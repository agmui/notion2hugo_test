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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDZAU4S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSoMHDpn%2F%2FqeIQLBFnnXAbjv8r1iLQcSzsUz6XuDTgAIhAKV4oK0A%2FJwd8dFLSANlanHC5dtrQqxYX300JibkBxxwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFjrmeJz4kpY%2FffSUq3ANj1gmz5iR0xqzxYcE60t%2FsOWlhEgD5i%2FvwoPIv40J34cEZaLbI1s5NtpSxV2AGjKfbdZu0RaeO1ctJuHcVLHN2rqmo0GwnJBOV5vmRUEBFjy2SzWXWNB%2BJCo%2FBB8xIwW175nhbzLdGzCo9zbzdOsFSd4OLtFvCciEdJyubVYfVkMVD07KBOA%2FEW5J%2FfWMLQ9vyhGQYupYS5HjTwOcp2Ck0irEzJ44k8ryIB8uDSMhU3goVXpoYX%2FdMQP%2F%2Fvdu%2FQaBbYBy2tXtevtaqy5w22EtQor3D%2B9BmnIWmq5k0%2BxY%2F%2BWgvsbpn2PAwOVkIocUAtlbBq4iuP%2Fsdws%2FsO2TIeVYi%2Bt2mNr7v%2Bf5TW2mQHA2TtDWXOOrV9Vl0iWwkOLnJqmn7pRt4IdBPQycj2%2BWU1y1wyorKN4tzM2ck%2BQLYaXxSD%2F6cOcwJorK05GK65LdD0gV7ALhpNzK8dZhZQ0pCjyXkocJMvuOMx1fPykER4xKcbQj8lse4%2FU%2BSypetc%2FZFuorh8iym6culjtrHo1R4RpYtkcAk79%2FKKSwbaWZc9w3b9ClI4UbBgKA4oPEfGj2E0OvtUsfy5Y2r9PcKFojWZ9rSdO4VQc2ElIsOssDiM97G7eIHT3jw%2BAtcjZvOUDCir9%2FBBjqkAQnn6XOiArNx6Y8PWVR2uV7C%2Bh0deP9TPrsQG1oDe25QBx%2BHE%2Bxp0CSIwMWXGSH5uI0ry2mc4w9xGcUYkHQOrqB6BVVDkYO%2BP8%2BkKmUh1P51N%2BYy7MADr3wGi7AKWNjmQ%2FHPLtPsnhVe44IJ%2B%2BbhtOS3%2BldW1fFd%2FqxHxO9vmRLNusg05Z4n%2BPYPqyW0dva1mJYFaxklELoOseM3FKYGxp6A%2B%2Bjf&X-Amz-Signature=334cc3cfa1866224e40d9801e01d52cd1cbb19a08d0136118a1f4cc16bcb8b17&X-Amz-SignedHeaders=host&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDZAU4S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSoMHDpn%2F%2FqeIQLBFnnXAbjv8r1iLQcSzsUz6XuDTgAIhAKV4oK0A%2FJwd8dFLSANlanHC5dtrQqxYX300JibkBxxwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFjrmeJz4kpY%2FffSUq3ANj1gmz5iR0xqzxYcE60t%2FsOWlhEgD5i%2FvwoPIv40J34cEZaLbI1s5NtpSxV2AGjKfbdZu0RaeO1ctJuHcVLHN2rqmo0GwnJBOV5vmRUEBFjy2SzWXWNB%2BJCo%2FBB8xIwW175nhbzLdGzCo9zbzdOsFSd4OLtFvCciEdJyubVYfVkMVD07KBOA%2FEW5J%2FfWMLQ9vyhGQYupYS5HjTwOcp2Ck0irEzJ44k8ryIB8uDSMhU3goVXpoYX%2FdMQP%2F%2Fvdu%2FQaBbYBy2tXtevtaqy5w22EtQor3D%2B9BmnIWmq5k0%2BxY%2F%2BWgvsbpn2PAwOVkIocUAtlbBq4iuP%2Fsdws%2FsO2TIeVYi%2Bt2mNr7v%2Bf5TW2mQHA2TtDWXOOrV9Vl0iWwkOLnJqmn7pRt4IdBPQycj2%2BWU1y1wyorKN4tzM2ck%2BQLYaXxSD%2F6cOcwJorK05GK65LdD0gV7ALhpNzK8dZhZQ0pCjyXkocJMvuOMx1fPykER4xKcbQj8lse4%2FU%2BSypetc%2FZFuorh8iym6culjtrHo1R4RpYtkcAk79%2FKKSwbaWZc9w3b9ClI4UbBgKA4oPEfGj2E0OvtUsfy5Y2r9PcKFojWZ9rSdO4VQc2ElIsOssDiM97G7eIHT3jw%2BAtcjZvOUDCir9%2FBBjqkAQnn6XOiArNx6Y8PWVR2uV7C%2Bh0deP9TPrsQG1oDe25QBx%2BHE%2Bxp0CSIwMWXGSH5uI0ry2mc4w9xGcUYkHQOrqB6BVVDkYO%2BP8%2BkKmUh1P51N%2BYy7MADr3wGi7AKWNjmQ%2FHPLtPsnhVe44IJ%2B%2BbhtOS3%2BldW1fFd%2FqxHxO9vmRLNusg05Z4n%2BPYPqyW0dva1mJYFaxklELoOseM3FKYGxp6A%2B%2Bjf&X-Amz-Signature=4f17e1a9a3b013ca7041b844a9590ad9b5187a2c2bc6b4ba51ed9bcc9d4adf72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWDZAU4S%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrSoMHDpn%2F%2FqeIQLBFnnXAbjv8r1iLQcSzsUz6XuDTgAIhAKV4oK0A%2FJwd8dFLSANlanHC5dtrQqxYX300JibkBxxwKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwFjrmeJz4kpY%2FffSUq3ANj1gmz5iR0xqzxYcE60t%2FsOWlhEgD5i%2FvwoPIv40J34cEZaLbI1s5NtpSxV2AGjKfbdZu0RaeO1ctJuHcVLHN2rqmo0GwnJBOV5vmRUEBFjy2SzWXWNB%2BJCo%2FBB8xIwW175nhbzLdGzCo9zbzdOsFSd4OLtFvCciEdJyubVYfVkMVD07KBOA%2FEW5J%2FfWMLQ9vyhGQYupYS5HjTwOcp2Ck0irEzJ44k8ryIB8uDSMhU3goVXpoYX%2FdMQP%2F%2Fvdu%2FQaBbYBy2tXtevtaqy5w22EtQor3D%2B9BmnIWmq5k0%2BxY%2F%2BWgvsbpn2PAwOVkIocUAtlbBq4iuP%2Fsdws%2FsO2TIeVYi%2Bt2mNr7v%2Bf5TW2mQHA2TtDWXOOrV9Vl0iWwkOLnJqmn7pRt4IdBPQycj2%2BWU1y1wyorKN4tzM2ck%2BQLYaXxSD%2F6cOcwJorK05GK65LdD0gV7ALhpNzK8dZhZQ0pCjyXkocJMvuOMx1fPykER4xKcbQj8lse4%2FU%2BSypetc%2FZFuorh8iym6culjtrHo1R4RpYtkcAk79%2FKKSwbaWZc9w3b9ClI4UbBgKA4oPEfGj2E0OvtUsfy5Y2r9PcKFojWZ9rSdO4VQc2ElIsOssDiM97G7eIHT3jw%2BAtcjZvOUDCir9%2FBBjqkAQnn6XOiArNx6Y8PWVR2uV7C%2Bh0deP9TPrsQG1oDe25QBx%2BHE%2Bxp0CSIwMWXGSH5uI0ry2mc4w9xGcUYkHQOrqB6BVVDkYO%2BP8%2BkKmUh1P51N%2BYy7MADr3wGi7AKWNjmQ%2FHPLtPsnhVe44IJ%2B%2BbhtOS3%2BldW1fFd%2FqxHxO9vmRLNusg05Z4n%2BPYPqyW0dva1mJYFaxklELoOseM3FKYGxp6A%2B%2Bjf&X-Amz-Signature=e4ce83aa13ba1918c430d120c66e6b31d49266d192f373afcab1d50ffc281c02&X-Amz-SignedHeaders=host&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
