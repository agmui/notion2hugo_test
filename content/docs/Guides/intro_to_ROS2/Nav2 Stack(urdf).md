---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-02-07T18:41:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-02-07T18:41:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

TODO: add rqt graphs for each time we add a node for the Nav2 Stack series

# install pkg

# creating workspace + package

```bash
mkdir -p mbot_ws/src
cd mbot_ws/src
ros2 pkg create --build-type ament_python --license Apache-2.0 mbot_pkg 
```

### building 

```bash
cd ../../ # you should be in the mbot_ws folder after running this
colcon build --symlink-install  
source install/setup.bash
```

## Download

create rviz and urdf folder in `mbot_pkg` and download the rviz and urdf file:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=d20f5670404f8a49b1cd396ccee4421e4c2f6720c039ebb3eb4700e1d78f20f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=27e6a56a6f6ed1b96a6ab5420140a7415e3ebb801586f786d1d7ece3605a0a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=2b469999ae3ffa178ea244ead93ed60620eceb44091fa0c3ed69f9614479f16f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=9eb0fb1693e929cf7afebeff204b91daf3f3b4b0050097d8544df137e8f2985f&X-Amz-SignedHeaders=host&x-id=GetObject)

(From Articulated Robotics)

# creating launch file

make a launch folder called `display.launch.py`

**Nodes we are adding:**

{{< table "table-striped table-hover table-responsive" >}}

|   |   |
| - | - |
|   |   |
|   |   |

{{< /table >}}

- robot_state_publisher_node (reads the URDF and publishes to `/robot_description` all non-fixed joints, static joints and links)
- joint_state_publisher_node (finds all of the non-fixed joints and publishes to `/joint_states`)
- joint_state_publisher_gui_node (the same as joint_state_publisher_node but with a gui on top)
- rviz_node

## launch file

```python
import launch
from launch.substitutions import Command, LaunchConfiguration
import launch_ros
import os

def generate_launch_description():
    pkg_share = launch_ros.substitutions.FindPackageShare(package='mbot_pkg').find('mbot_pkg')
    default_model_path = os.path.join(pkg_share, 'urdf/mbot_description.urdf')
    default_rviz_config_path = os.path.join(pkg_share, 'rviz/urdf_config.rviz')

    robot_state_publisher_node = launch_ros.actions.Node(
        package='robot_state_publisher',
        executable='robot_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', LaunchConfiguration('model')])}]
    )
    joint_state_publisher_node = launch_ros.actions.Node(
        package='joint_state_publisher',
        executable='joint_state_publisher',
        name='joint_state_publisher',
        parameters=[{'robot_description': Command(['xacro ', default_model_path])}],
        condition=launch.conditions.UnlessCondition(LaunchConfiguration('gui'))
    )
    joint_state_publisher_gui_node = launch_ros.actions.Node(
        package='joint_state_publisher_gui',
        executable='joint_state_publisher_gui',
        name='joint_state_publisher_gui',
        condition=launch.conditions.IfCondition(LaunchConfiguration('gui'))
    )
    rviz_node = launch_ros.actions.Node(
        package='rviz2',
        executable='rviz2',
        name='rviz2',
        output='screen',
        arguments=['-d', LaunchConfiguration('rvizconfig')],
    )

    return launch.LaunchDescription([
        launch.actions.DeclareLaunchArgument(name='gui', default_value='True',
                                            description='Flag to enable joint_state_publisher_gui'),
        launch.actions.DeclareLaunchArgument(name='model', default_value=default_model_path,
                                            description='Absolute path to robot urdf file'),
        launch.actions.DeclareLaunchArgument(name='rvizconfig', default_value=default_rviz_config_path,
                                            description='Absolute path to rviz config file'),
        joint_state_publisher_node,
        joint_state_publisher_gui_node,
        robot_state_publisher_node,
        rviz_node
    ])
```

## add new files to `setup.py` 

```python
import os
from glob import glob

from setuptools import find_packages, setup

package_name = 'mbot_code'

setup(
    name=package_name,
    version='0.0.0',
    packages=find_packages(exclude=['test']),
    data_files=[
        ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
        ('share/' + package_name, ['package.xml']),
        (os.path.join('share', package_name, 'urdf'), glob('urdf/*.urdf')),
        (os.path.join('share', package_name, 'rviz'), glob('rviz/*.rviz*')),
        (os.path.join('share', package_name), glob('launch/*launch.[pxy][yma]*')),
    ],
    ...
```

run:

```bash
colcon build --symlink-install
ros2 launch mbot_pkg display.launch.py
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=ae1551eca6024c70e4e112f9f59b3369d2a767c900ccd6468a7a9e7d342cd01c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ45DPMZ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBAL2GkGUPQNVXI55ctMXimetLaE5uctiyZXCFkcsmXSAiA6lmmkw7%2BwgNmnPxnr3jhdlCqr6FghJcv08nJBOG2v4Cr%2FAwgaEAAaDDYzNzQyMzE4MzgwNSIMFk9uFulfFFFAs1NkKtwDQVTshgHyc84UDmRVS2nzM7uiVXcJ%2FpUgC6zJVvUsi0w6nDLqDwBT0BgBt17msj9M8kOOZ05r1ZVMJTTloxdi21Fs3amT%2F5yI7qNoDjYVJNhAi8gKSyhD2rxlNQcdnj2WrOoo6Ngb6roB1g9N%2BTtQICaiUICbiWgmsv3gfZE9X4ic3XdqVEmSZ5RmHJ2zzYwqXJ3ily1tVFc8e%2BMlXvExlGtthCY0cuRMB5pLjX1L09%2BZIu60uzXpni2uPjTSQyvOgrGKEizhgpr2bzydUKUZ%2FHjYVgD%2B8n5QLYuF2P6M8L9pvZsHUc32iYjx3Rrvl6cTH92Jf20xSzC%2FjKc%2BUCAylNFWB%2Fn3aHJlfGaoF9gci0Cu0TxUQrzguR95SZYmKhdJf%2Fp1a4Sd2CT1DpYrAS3ugAbADzBpQPXMD2I8BEVsxE7W5YCemF6MOzD7gZ7rsrtr4%2B0ekbnZytlcnAR6VGbVg8GO2PVUehub%2BFEi4rPg6LATwn%2B%2BtZHLvQLJ9mPYSHbBpWAkPV9ZWCkA2R77Y71g%2FqoHoRFgchoK9zmmwMQ8Mx1RqA8qvBwyXeovNqTxSWuuiW56Tc4%2BOVtCwlljNZEwTRVX7N6lCwxf5QnZQorBmq0Emryh0hqVjXI6UokwxYSivgY6pgGTRNWK0%2FUSfPnOSf1V9cIJwn%2BuoWCLUTxnqSvBz4%2BUweaiKv5rRJL46Smu45ptxPIRrhWGUSsZfOtqllerEUYo%2B%2BHyei4RYdVgSBrxhLo%2BxwhdUvGF73EZ%2BwnhBqNNEDh85%2BaGMxiWyWJOOok5xzc0cnVDgGO13aDN%2F2Q7WWV7mqpXZqwgam3mmfUXu%2BO7WfVuqpPIFpYUwYNujgP5TcE08jfU8kvx&X-Amz-Signature=685db875b70bca79a4b6e05c43336f8fa8359c0fa2ba7dddcab04c9520ce1744&X-Amz-SignedHeaders=host&x-id=GetObject)
