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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=3894488add19f722e1b0b4563267f886deca705b5cd6adeb92e2daddfa771112&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=19b648b7e92054e19c086ee9a08f47f3741b06b97e83e1408ba7afa3c60e0fcc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=5c7c4c8f8900766b4df4a0664258b91ea1beebf010e0882515aade5ea1dfff4e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=95b4fb748a2dbc09b55f93c39ed2d1bad49458f757af16c56d21f33b114e71ee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=0054f5debdc8af524f6ab323d91505c9374174b870e666b59b8c1c405a6d3667&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6TDFPCM%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T033631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDUhSMQeWuSGWOpcFdamlKdpruxYIuH8wRhS%2Fpt9L3TzAiB3gzjgyaZK4ghtdkbBW8iWh%2BxpMK7Cp83SWrhIgenYMiqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBM2i2S7xMPBlhamgKtwDcf2C04AJWJLZ4m7CYTIcflLunOBCPDYlCt1%2BJZrmmoU02%2BWHdbC0Pl4ZiWo2D6Jktjt7WXIsj2W7P%2B5lcuJIQT9xbJ6xvuzeiITCk1tFSxkbHDj6BQRZ%2BaWtqPVUHaELbFL0xS2aYOkVUSVtJwuP7EFIg3CMHHu%2FQfbNZqR%2B6JuBAMEuBd8MS%2F5zjWsW%2B9vseAQap1dA3xip3S%2B8XgAD60utcfDpButt7rMy9fNDZq6BmxZwD8T81TiOHcI7GpI2kxkczIA2TqaiUCKWHJqtVcW8230usOZleS%2FtD6XI6SwGtsATBynkujFyHaCjq2ONKlBc4sTvbPkwnvybrk73fwQNuzDJRRRbDDlcmtX%2F5jFHWfsfg7sDltIL1WdRQYuPTzWGALv7nyeTzSN5pHQ7gsvP58RLwuAGIAJSu%2FMOjDwkCBRFLvO13SKAcUjCSvWD2u%2FJn8A5inbIvWi6Z8th%2BvCKdrmDgiOoM%2Bx5Ezm8q1uG8%2BW88alhzed9ua0loQ%2BL9dQV%2BNh8SSiG%2BfHlJGBSolBF5b60bhf64yIg2k5%2FJhkrRmtzJWQeiQXNnNIrLi9j3j8d5j64Uj18jF84I4EU5B4C3YIJACsUsSsaaMTcnAan1fm7hqsuPMjlK1kw%2BK7kwQY6pgGeZNUj7eE3EHQQTj3UHCHI627F81KIMQOugCxq4HL5K0ndgZ9U0syEukJl%2B5y9HuwccXz6JIiPOsrgG76nNEA7EkPdGZn4tX%2BaNhimK5CXOhCe8SX0YkVpy7ZEGce6oij52YO3EnPcSEq6Xg8fqqRbe6FulqNX4UZ3pQ3l7OqOnUExBPwEuBEyvJ%2FD%2Bnoa%2B20dXKQnYI6h31ZoIFCcalNTK4CdbLte&X-Amz-Signature=f3d476e7a38c69950ee09e988c597e8574c7ddefff639cf13fb1793174b419d1&X-Amz-SignedHeaders=host&x-id=GetObject)
