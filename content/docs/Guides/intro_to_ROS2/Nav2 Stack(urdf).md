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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=469665609707298b38a52c63dcda3be9ca8d5fa5260a6239d87931eef4931205&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=b30fdb2b4c2aecf2df1937f55f21412ffa3b6ae0ca3b19a7c499cdeabc126b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=298aad838e7a86133598ca3c954152979d3b064ba88edb0b09a59f2ee44badc0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=e931c18199138b5a54428f9aa5e8b484654e78619ce4710ed368464e47aa34fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=4dcd1382387c761c604e3c28413a2144f32cdff13c74045c2caf804205c15761&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F6RYPIE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T023031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQClGHRyG6eSVmbbG012UJClf4wyA%2Faf7PM7iLr7J%2B4jzgIhAL3m%2B5tyZC5KkVCUWV8XszUlTZ%2FGt%2FKfZ1vdIEXSQIDhKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHlrMl625hNRnR8KMq3AMs5BaLuItgtqnrNEkWcx%2F2GaZr86IOthtHJGIQJZkUXsa0ToFYj0sfk%2FfuEv1HDqjygntGq8NGa4uTGsnEKzFsLffRKbAkqeJZj0mfgMIJomz3xJ1KRMYKzPbTxl3iJkKfNYyqfmIlot3L1xfGTk%2FIO1S90jqA0bMJzaZ5VRo7ySwcpIe1eVFoujgYNRjYRXJs5P%2BwaXevIL2NAvHVZmwAY5l%2FtY%2BaAXDF0ZsutD%2BF9vul5BTJJABhGEYOPADl%2B0qGbV9pSnQpP8xmhKruGlHmGk4f2sqb7LB1z8i2G7Yr9sLN1t3fegh8YOFBb%2B1hht2tgu%2F%2FSeZPFlCuaiijjV04pfRu0iOqkW3nKK5BkZWF9qNvOxCseUJjzt9hraWFMpD7N4GVCuWzvyf9jEY7Zi%2FU27AA6pVN7B3N2RaSUhjN8Mv0fgJ6u6pn3HRJkMxFg26JsOLtOS2Zqc721TAhvGqxk4dpxuuMlFp%2ByFjYe7ClhDzxCdWGmfML8aK7BPa7R6fPKmn%2Bu9rVodzwYJ53rPo382yU4FIILRRXK7FfDm6IanQI8G9Xf%2FMTelPuQeAacnk0zpULRRxfxwOlMPeTqDuh2U1ro%2FPS4LlBq6xHfanPGfNBZt36thhbNOHJvDC8iq2%2FBjqkASXfueVXOmzdStAsq1tYA0iQ69HSavatT%2FsnEYzJQFEAv2%2B6hSVy5MPyUOBePkaqHCaeeoVD2xyghwIfmaXbVovq2VH2Gnpsmvo1gkkwJpn%2BjbqKMWfbKo28OOCr29ZRRpuvzh8JMy9GRkwhdbXtEYAk9m2Z2tO2EL%2B0VgL2SlnS%2F%2FrC%2Bf4WNa4Wr1gvaABuKnWV9iLNXUv5Un4glpjrPtYahqTs&X-Amz-Signature=2aad1a3a6b23177bb698d8b45871c1247db609b5176502b202d6ef3230d1116f&X-Amz-SignedHeaders=host&x-id=GetObject)
