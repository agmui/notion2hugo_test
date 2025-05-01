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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=f10f7091b7e3df678863003b9646e38982cd35dd81b15236b99cfbac35da5d21&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=c22ac20046f95dab1291cfa5b2c0b8c4437537586f0815671ca8be93952a02dd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=cc410f2034e578247cd173637100796acea89e994ea498304053062d72a596eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=fb1a63dce6311137b949690c901b16b149f7e0e8cb80cf831ada4f0c642fb862&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=ba1969cfbffe614752953e77ed3adecba42cd4b3612fa1d35c9bfe09aa0c30e3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWKGXZMA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T220832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD2oupal6RPpajq5V7B9WgLWbpjZPVB8tdN7tHnJZSEZgIhAI1vD%2BaBK1bX4wRivcHYyNUgBHMmeFPwDxiHqsHyZoORKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyKDL4RaBT3L8d1lXMq3AM5EgKHzpM0nNSS35jliYNHaeroqevjmvW9HRvKw1JvvpDkfX5L34Tu1Pj6lzlBuu6GDOoSFcRaC5s3erSmaYCAcTkFy6G%2B1VYrITY4lG1qof5NmJ7BkngCJaK3CB02WBLs4qBssJv92VDSs5wKQAXy%2BjKc8V90zWv198IJnFl2l7LpV1y%2Fm8sNAQpviJanFxzB4JxcmUIEj9oiiI9pR%2FryH8237HuCrtbHq93d4y9uuaUopMOYhbK1IGfSyYAgWefrCegLwITvo2F%2BWu93Mw%2BI2pLQw%2FXQRw%2FJ8L1FdKf5sysHZ2rRKRe9xDNCT6AvMQzppcMzjZw35pIc6feyZddL4lXTfmWrY%2B%2Bxx0JM4K9ppcGW5okyEHdgqHe32yZNFepOr1BPN0rJMlV%2Bul%2B%2Fm5mFLINgs2Q9GDLLuPV4ki1uiHECkF1Gee8aP8BwSeMnpxCOdV5%2Fn%2BOkJcsAfXr6fxP9ZKYyHEE2Hsj3FDQSaJ18LcwwecFpyE2PPVKoWKw7igm4fYv0MGCxf%2B4RT%2BJBmMneZVCkQiw%2FuuDnm2KmEHq4umPWdhsIApGWXNy%2BbWQR5HupfQI5v%2FeCWCm%2BVqPOR3Lkb0EXgUiRSeTHJk8Jhu2aRr7QQHSkz%2Fb36yw%2B6TC2x8%2FABjqkAUzllVn7RySIfPO%2Fz%2Bu0IVXscd34WwlQJSS%2FFvu0NnpVsH55kdN3LY1i44Mpg3fEPKCm80%2BmjwhU1BFFQTta9XG2HUf6Ozwf4S4jt9XLozBoGl8G7F6nYTrVzXVQxU45R0E0DbEP7blzgYVrgQqMSAC7HpsDIQuTBzLhr%2FcAEUSSwwRvxYvWhtNK14AoaE7GSrJ7PnVKpyKzkF797fIhQ4i3rrbm&X-Amz-Signature=76f13b88ec94bbdbc9c5aae0f4f64b68b37ccb5d26b5f62a288ac2fe2dc882aa&X-Amz-SignedHeaders=host&x-id=GetObject)
