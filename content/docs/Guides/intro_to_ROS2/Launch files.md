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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLIN2I6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz2vDDcGhc0G9rqE0JazoV0x3uZvtr0sExpUpf%2FrVxuAIgHrTgjzBggljsCjQh%2B9GHLxGTnfJdS1DB71HrANjQm7gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7JlTc5G2ivRa3IXSrcA8JalT5ozWG5VKBdHPS8IF5%2FzvmH7E5DlYggdkj%2FTKH9C8a7M5Cn9PQTWs3vBch1c80lQ%2Fxbs7w5HPskfpkpJ4JCyDUQrPpmuFgy9nr5Eblzn1tiSTvHknBksRB9oclx2s9amSwAiNs23EGXezaAid668JHFET6hnl6XzdY1xNC%2FKpw4Qkqza0AW7Tiz3cFNuLvq7Vi6Q6CAooGRapExVreONzN3tE0ITvyFsQXiQ4via67pb3YAJv7tEP0C6TugGQePu75DsgFbMXaky%2F9nkwYXF1K0rx4C8o5NWYx37G0FQkIETWGXxhPDJSKOCOf%2BgnqEfBmSDTIw2MStYFjKShu5VjebfLj0NbzFoXH0ZbXB%2BlZRcHrIkWUa3vrsZ2k%2FzlTWaNT6jS%2Fsl5MFvPyiq%2FWu8p7g8I6wU5qwkopEVvhEoHqKsmf7H17zPFXg19RMADtF54On5UzIfhwIfIH7nJtHhdqobrNx5%2Fom%2FlnKgs%2B6oF%2FXOWG4IO4bMTbu9g%2BDqjt6a6mAUf5EbiFl4kV69oh7MoN6ul0ffgtxlzyliII2bat7OZn8YbDuvlzn78M8a%2FS66xQXmRGOfEsqbYk2RMs%2Fps6NMeYGk6YXld5jpzeqUjrWRhtsYZnaFH02MP6lwsMGOqUB0IZaiFsdRXKwNixj4MXyxzXX2NmA4CVmIUdEOzdCDbpdYWC4tOYMvOAsjlaHbNKUmA30s579YyaUsw%2F5hoKRUGbODCxtjb2vbQRkVkle2Ydo5H6%2BnpfUu5Op9z7%2FiYB6AaV%2Fs34wHFP5QEIf4TwMgzHwx7WKUAegvoI4s46E%2BZ8GmoSXhW6mlIoMBhbS6OeBj2uritGYY8V9o1OTYwg0Tu%2F8Gd7C&X-Amz-Signature=20771a6bd3068551ebca41f849dfe01cad4b1a8744653ea44398ac7379b15a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLIN2I6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz2vDDcGhc0G9rqE0JazoV0x3uZvtr0sExpUpf%2FrVxuAIgHrTgjzBggljsCjQh%2B9GHLxGTnfJdS1DB71HrANjQm7gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7JlTc5G2ivRa3IXSrcA8JalT5ozWG5VKBdHPS8IF5%2FzvmH7E5DlYggdkj%2FTKH9C8a7M5Cn9PQTWs3vBch1c80lQ%2Fxbs7w5HPskfpkpJ4JCyDUQrPpmuFgy9nr5Eblzn1tiSTvHknBksRB9oclx2s9amSwAiNs23EGXezaAid668JHFET6hnl6XzdY1xNC%2FKpw4Qkqza0AW7Tiz3cFNuLvq7Vi6Q6CAooGRapExVreONzN3tE0ITvyFsQXiQ4via67pb3YAJv7tEP0C6TugGQePu75DsgFbMXaky%2F9nkwYXF1K0rx4C8o5NWYx37G0FQkIETWGXxhPDJSKOCOf%2BgnqEfBmSDTIw2MStYFjKShu5VjebfLj0NbzFoXH0ZbXB%2BlZRcHrIkWUa3vrsZ2k%2FzlTWaNT6jS%2Fsl5MFvPyiq%2FWu8p7g8I6wU5qwkopEVvhEoHqKsmf7H17zPFXg19RMADtF54On5UzIfhwIfIH7nJtHhdqobrNx5%2Fom%2FlnKgs%2B6oF%2FXOWG4IO4bMTbu9g%2BDqjt6a6mAUf5EbiFl4kV69oh7MoN6ul0ffgtxlzyliII2bat7OZn8YbDuvlzn78M8a%2FS66xQXmRGOfEsqbYk2RMs%2Fps6NMeYGk6YXld5jpzeqUjrWRhtsYZnaFH02MP6lwsMGOqUB0IZaiFsdRXKwNixj4MXyxzXX2NmA4CVmIUdEOzdCDbpdYWC4tOYMvOAsjlaHbNKUmA30s579YyaUsw%2F5hoKRUGbODCxtjb2vbQRkVkle2Ydo5H6%2BnpfUu5Op9z7%2FiYB6AaV%2Fs34wHFP5QEIf4TwMgzHwx7WKUAegvoI4s46E%2BZ8GmoSXhW6mlIoMBhbS6OeBj2uritGYY8V9o1OTYwg0Tu%2F8Gd7C&X-Amz-Signature=4f2e4e3716a36d0a6f8838a5d11289a3c64a7f0a5950d3a967b9bd6d1784a464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGLIN2I6%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T051423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCz2vDDcGhc0G9rqE0JazoV0x3uZvtr0sExpUpf%2FrVxuAIgHrTgjzBggljsCjQh%2B9GHLxGTnfJdS1DB71HrANjQm7gqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP7JlTc5G2ivRa3IXSrcA8JalT5ozWG5VKBdHPS8IF5%2FzvmH7E5DlYggdkj%2FTKH9C8a7M5Cn9PQTWs3vBch1c80lQ%2Fxbs7w5HPskfpkpJ4JCyDUQrPpmuFgy9nr5Eblzn1tiSTvHknBksRB9oclx2s9amSwAiNs23EGXezaAid668JHFET6hnl6XzdY1xNC%2FKpw4Qkqza0AW7Tiz3cFNuLvq7Vi6Q6CAooGRapExVreONzN3tE0ITvyFsQXiQ4via67pb3YAJv7tEP0C6TugGQePu75DsgFbMXaky%2F9nkwYXF1K0rx4C8o5NWYx37G0FQkIETWGXxhPDJSKOCOf%2BgnqEfBmSDTIw2MStYFjKShu5VjebfLj0NbzFoXH0ZbXB%2BlZRcHrIkWUa3vrsZ2k%2FzlTWaNT6jS%2Fsl5MFvPyiq%2FWu8p7g8I6wU5qwkopEVvhEoHqKsmf7H17zPFXg19RMADtF54On5UzIfhwIfIH7nJtHhdqobrNx5%2Fom%2FlnKgs%2B6oF%2FXOWG4IO4bMTbu9g%2BDqjt6a6mAUf5EbiFl4kV69oh7MoN6ul0ffgtxlzyliII2bat7OZn8YbDuvlzn78M8a%2FS66xQXmRGOfEsqbYk2RMs%2Fps6NMeYGk6YXld5jpzeqUjrWRhtsYZnaFH02MP6lwsMGOqUB0IZaiFsdRXKwNixj4MXyxzXX2NmA4CVmIUdEOzdCDbpdYWC4tOYMvOAsjlaHbNKUmA30s579YyaUsw%2F5hoKRUGbODCxtjb2vbQRkVkle2Ydo5H6%2BnpfUu5Op9z7%2FiYB6AaV%2Fs34wHFP5QEIf4TwMgzHwx7WKUAegvoI4s46E%2BZ8GmoSXhW6mlIoMBhbS6OeBj2uritGYY8V9o1OTYwg0Tu%2F8Gd7C&X-Amz-Signature=2d027575480505b445018d39c6ecf2f2d36f82ec6b4a9fbbb67444ff71ad33bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
