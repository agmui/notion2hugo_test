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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=b37d193480ee0f0eb714d1c7756ee8d6f41712120b7cfe101a43ac120c5a9f2d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=21e402713aca2f9de05d5fa49ef50ec9bf0d3aa05a7e2476eab57d90782df278&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=0232f1edae18609fc0da3520c1316203d2802ec22124baecb029196aa058ed75&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=1f7b7087733acc60fcc226f3bd9405928d0c0b8c1b7097ac747b577a76e380c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=de086b5390db55d9120d083399cb80c4fbdfa42ffa80a1fca380c290c94aee89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6OP6JZ6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnD5UM2oQYrIOAurpolvbW53rnQPTBuw2K%2FkC1mOkmYAIhAI47fwO0td%2B4AUfyhXeI%2FlltFLQyPqkRmPaSskd3V74SKv8DCDMQABoMNjM3NDIzMTgzODA1IgwvjEcDZR0CW3C9TAIq3AN3vY0gtnW4jkMPfePP%2FAk%2F09co98o6CqFvUTw%2BEGZFyTTsMqkDT95DggNnwcL%2Br1R5y9YqxsW%2BtKQuli4dAHu8QaNOBfsp0Mgh5RkR1OWuROt5iM4Zco7x4F5FSDcmvTBPsgCQIY5Nr6e%2B4WruxPhgkwk5DUy22ZQq49ZThYYKrETOJHtcp5p%2B3WkZNNAlBhx91Am2IIpYGykBhdCLpThe%2F46aVP1sQo5KuZFGcSDqxAZlpiECIwpOcOSUn0S96%2FfhxcNLTLkhHLMoCF%2BrWI76ld0M89RfSBTBJ9JlMK8Qova64i5j4p1lOlMIQlx8GulhlWtWV6BevCXwYicq5kv4IV%2F%2FZy%2BUWhhRVNempzN0eViAGBb146eRCCRQd7AotG%2B1CTe%2FoAWO91QAuvXc73ROLpmEAvVXQB%2Be%2FbAKYilDh%2FowEEL%2FLJi3P1EdUMS3YFsY98EyVeNiDA%2B6mqOZMyq6tHPt31Q9%2Fv%2FHJQ8rNXgCVw4puywWD3jww%2BQLWRx7rm6YN%2F2HcK3FXMn%2B9nQ0BWiUKK0RZT3ZfcOKSjPdYAplXOUZW%2Bi%2BAgo2igr9rM4Ej7521eIgXxlrzXy1Gdp%2B33K5Aa5dxxQYjyv%2BAxV6ofyvGB%2B%2B%2FHoR32PYpoqxtDCTna%2FABjqkAUr3LvhvI8vE5iu6ISs6dXNir40x4lmpOEv6aDrUMV7%2FzaysdL4lL%2BnKoMilAPJ7Lvy2CvdQ%2B44dzGvEmcOCrDIkZuWI55dR5RoWEUfUmmYf0TH4G%2FX1LvjuPzhTzQnCsnC7cgzra3S53AZLxIPqCK1MGeDTZdQe%2FUhCoTI3iFuJFkhk38lzpZbJ8CkNNkxwKvA5T6qzPEIlWnjFwM0VKASNio5c&X-Amz-Signature=acd2b3be0a3095edf7a5c57fb3ce3efe846736816e07e164ecdafb8fd1f708b1&X-Amz-SignedHeaders=host&x-id=GetObject)
