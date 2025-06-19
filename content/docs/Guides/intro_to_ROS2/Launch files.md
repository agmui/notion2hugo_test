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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50aa845-71da-468c-a148-4c842d13c8df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDQXTLB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5gnl9djOTGwz%2FY5%2BDabDM0yQGcn%2Bqu30T8l%2FGL7HQbAiEA%2FWLullgCE26fb9chZ87RrECFSkTxlWqjG4Sr8VfIPy4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5PZj0a3VUTdF1jQyrcA6iE%2BLodF4Gs7blBl2C1oWPEhCLwTbKde0dehEG4a5PbM80MIwdqViuPhXqLuVaylYAlpiTw4li%2BigNmoLoSzWACgfzcGNj77dHU0FPQG95nooJAybEpGgZAJWxMB3d86n9CiS%2BAuPiHDJzwEiKY6Eaj%2FBt3e5FKbshe%2FPtHNShL%2FbpZPY9V3d63NRYkPz1ysw4NWI38HstRPjr2Zyfce64i1k3CCFivsRtRu1nzRBJ865MfwRfofaIOphKBmyuUs%2FHStZBKw%2Bkj4vt6YgfAG2cd7gsWs%2Bw2OFBBcazGY7ZULiS6oS4r%2B5Cbb9EmnfL34FAwTdWBpbmqEg92dtiMPrqsPVWWu5b9ahUpMZy%2Fj7RbziDefMr7sSX%2Bk9Wjh6jBgt8ncd8FdLXUNPdW3ZF8GoIl9K%2FNL83tszH1vcLD9UcQeCktB38IKba5aTL2wAXvdmoI2oIbfvpZhX5rwMuOFvpVC7q5%2FG8fs16ZwDHWm9rlTRehsoYf8vuNQkgeKCa2rKV2%2Fk1qGDvbqfw2sQ8IRT3fmGaOlvp7uTaiBL45oJQqrXa%2F4CULXDl8KZPcS7X7y7lyYE%2Fb%2BhcSzGlijgvrlbzj5R5G9Cy5RPCdreyH3M5m5G%2B%2B2cZCYOdblbZrMISi0sIGOqUBhJuX%2BNBXMiXHrQMSr8G8VLMZMBT8Ziu%2FGZV0VDyqpj1FmD5YBYb0XM6QPj5XH86TgBC56tn6NYkhnWU0AAA2yyclx0ZXYBsZSmOJRfISBIzL5%2BkMQm6T8SSmQTVKUe2LXuscteskzErgfu6o9nxpw8DAA62vG%2FbNo80pD5qRvQnS7sCSHnSXKpzCRaPXdmXo0rNSf2zyR4YGiTXmV9xeKQL8vq9v&X-Amz-Signature=c88bff0c26758f92e99b83e19720f5d85d9a27edcba252f872248d377cf10107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then build the workspace:

```python
colcon build --symlink-install
```

and run the launch file with `ros2 launch <package name> <launch file name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ca5992d-b0af-43b9-a7b6-f5d141ad4cc0/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDQXTLB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5gnl9djOTGwz%2FY5%2BDabDM0yQGcn%2Bqu30T8l%2FGL7HQbAiEA%2FWLullgCE26fb9chZ87RrECFSkTxlWqjG4Sr8VfIPy4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5PZj0a3VUTdF1jQyrcA6iE%2BLodF4Gs7blBl2C1oWPEhCLwTbKde0dehEG4a5PbM80MIwdqViuPhXqLuVaylYAlpiTw4li%2BigNmoLoSzWACgfzcGNj77dHU0FPQG95nooJAybEpGgZAJWxMB3d86n9CiS%2BAuPiHDJzwEiKY6Eaj%2FBt3e5FKbshe%2FPtHNShL%2FbpZPY9V3d63NRYkPz1ysw4NWI38HstRPjr2Zyfce64i1k3CCFivsRtRu1nzRBJ865MfwRfofaIOphKBmyuUs%2FHStZBKw%2Bkj4vt6YgfAG2cd7gsWs%2Bw2OFBBcazGY7ZULiS6oS4r%2B5Cbb9EmnfL34FAwTdWBpbmqEg92dtiMPrqsPVWWu5b9ahUpMZy%2Fj7RbziDefMr7sSX%2Bk9Wjh6jBgt8ncd8FdLXUNPdW3ZF8GoIl9K%2FNL83tszH1vcLD9UcQeCktB38IKba5aTL2wAXvdmoI2oIbfvpZhX5rwMuOFvpVC7q5%2FG8fs16ZwDHWm9rlTRehsoYf8vuNQkgeKCa2rKV2%2Fk1qGDvbqfw2sQ8IRT3fmGaOlvp7uTaiBL45oJQqrXa%2F4CULXDl8KZPcS7X7y7lyYE%2Fb%2BhcSzGlijgvrlbzj5R5G9Cy5RPCdreyH3M5m5G%2B%2B2cZCYOdblbZrMISi0sIGOqUBhJuX%2BNBXMiXHrQMSr8G8VLMZMBT8Ziu%2FGZV0VDyqpj1FmD5YBYb0XM6QPj5XH86TgBC56tn6NYkhnWU0AAA2yyclx0ZXYBsZSmOJRfISBIzL5%2BkMQm6T8SSmQTVKUe2LXuscteskzErgfu6o9nxpw8DAA62vG%2FbNo80pD5qRvQnS7sCSHnSXKpzCRaPXdmXo0rNSf2zyR4YGiTXmV9xeKQL8vq9v&X-Amz-Signature=e94258021be8f6867802b4a0abdb9241ea92ff000e2935d72fea3bce6c08b2ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae87690b-dcdf-4588-b5aa-960c40cc8416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPDQXTLB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA5gnl9djOTGwz%2FY5%2BDabDM0yQGcn%2Bqu30T8l%2FGL7HQbAiEA%2FWLullgCE26fb9chZ87RrECFSkTxlWqjG4Sr8VfIPy4qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB5PZj0a3VUTdF1jQyrcA6iE%2BLodF4Gs7blBl2C1oWPEhCLwTbKde0dehEG4a5PbM80MIwdqViuPhXqLuVaylYAlpiTw4li%2BigNmoLoSzWACgfzcGNj77dHU0FPQG95nooJAybEpGgZAJWxMB3d86n9CiS%2BAuPiHDJzwEiKY6Eaj%2FBt3e5FKbshe%2FPtHNShL%2FbpZPY9V3d63NRYkPz1ysw4NWI38HstRPjr2Zyfce64i1k3CCFivsRtRu1nzRBJ865MfwRfofaIOphKBmyuUs%2FHStZBKw%2Bkj4vt6YgfAG2cd7gsWs%2Bw2OFBBcazGY7ZULiS6oS4r%2B5Cbb9EmnfL34FAwTdWBpbmqEg92dtiMPrqsPVWWu5b9ahUpMZy%2Fj7RbziDefMr7sSX%2Bk9Wjh6jBgt8ncd8FdLXUNPdW3ZF8GoIl9K%2FNL83tszH1vcLD9UcQeCktB38IKba5aTL2wAXvdmoI2oIbfvpZhX5rwMuOFvpVC7q5%2FG8fs16ZwDHWm9rlTRehsoYf8vuNQkgeKCa2rKV2%2Fk1qGDvbqfw2sQ8IRT3fmGaOlvp7uTaiBL45oJQqrXa%2F4CULXDl8KZPcS7X7y7lyYE%2Fb%2BhcSzGlijgvrlbzj5R5G9Cy5RPCdreyH3M5m5G%2B%2B2cZCYOdblbZrMISi0sIGOqUBhJuX%2BNBXMiXHrQMSr8G8VLMZMBT8Ziu%2FGZV0VDyqpj1FmD5YBYb0XM6QPj5XH86TgBC56tn6NYkhnWU0AAA2yyclx0ZXYBsZSmOJRfISBIzL5%2BkMQm6T8SSmQTVKUe2LXuscteskzErgfu6o9nxpw8DAA62vG%2FbNo80pD5qRvQnS7sCSHnSXKpzCRaPXdmXo0rNSf2zyR4YGiTXmV9xeKQL8vq9v&X-Amz-Signature=1ddca8f54e05e74a8abc7f7a8e20f97f7abc9949fe01846626647ce4f72a16b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Exercise!! ( _hlep me_ )

- try to make a launch file for the publisher and subscriber
