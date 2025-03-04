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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=396636127a12040dd022e121acc50aa031a0cdbc6bde8824424036094f5d7dda&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=893d0955cb671a69a860c1bf0af5534cd03bb4fab3766ba7b5a86ad27ce08581&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=084b983b049847c6f7cf040ff336be4b3cf502edc7d590f805114dd6065a54fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=f4dd309f3047377d56bbfa2e637acc6abc298b788cdddad12329ac58a10ad224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=ee4282c42bdbcd7d159e9b53b708b4ccb833356be9b1e7d8be6f4fb2509023f4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6EJQZR3%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdMyKl0ByaBC0XjBHf6wbG7Wx3oE2Jkx6Xrc0%2FIJYv9AiEAxwE8xmZK2JvMIquI77qEAREH%2BkaXQ%2FKQSzyaXyNEtz4qiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPVMWMSb3QP0zf3xqircA38pyalo%2BQqhEkyh0bzgWsAKGfDBTryKFd18yuL8UDYwxHPmkho024qRirM%2BBBU43OKz2EN%2B5ub6GG10q0E7Ngi7Fq3TF1cOHUjXjVyi4Fx2c6tCESQprQi91WFT4bZOiyktJE%2FZTTn8xAvT8njpA25YbluD0MqCzOQP%2FG0cFguXwJGHpTHBo3WhsWu3ZRHxsi%2BOeudEe%2F%2FcJYjA%2F%2F8GoT6jyqyOel0k8UmBFev3WIOQE%2FsR97%2FT1XfZjEFFm7BdQEUGisDNVmNli%2BVUQbnP3rhVNYb07jMHhQbP%2Br2S0yWusCH798ZueOzNYiRbVUS5spiUuKmO0eCPHN4Je1cNve2NctssSRsDeHmKJUs1zIE0NVNj2d0KfxQcyM0mQ2sr%2B9DPpaQ13MweYdhSA%2FEJlLeP795KXMLbh9FhF0DfnNYe2%2F0McVULd5eByqaJRU3%2BDmXZybnfEnMSoKfvSRouM0%2FxYX0vKzPhUTGa9on8fmNg6MOieyId9hKkyhXGfAvwKkU8WSW3Q2F%2B%2BPOaTBxBtvImQEtu6JiA0I7nxolPyuhVyJYds5SPIb03FJ3W7rdDLeNLlV7Hy9reX87wKIU6rLtdiAW3edg4KXA4WOAiJz1Pj7XEOYc9eT30uqGfMI74mL4GOqUBCsYUZoCvcQCE4Qyscp7QavSbcr2DLaGreKwvAEPvUFmszoeJqAF%2Bz7UaAtkm9J8JZ0b11Gi7NmtrLJRAUZk0vBArpBFjlfOjmbRY9l%2B5kK2VNT2QCKqyn%2F0jmK%2BGvLpiGecfw6jaiM11vh4ETk1aOFE8lcjw4qwrRhhcEGo%2FaX6wKz4aXDCgnDjujGgZCtZqT0SNY6kvOp97TxZSPQu0Aap0hVTk&X-Amz-Signature=cf0b98a957b8b03700bd5e07f4d953c0141e07119c63c72655369583fb25c576&X-Amz-SignedHeaders=host&x-id=GetObject)
