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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=73e732c7dfe188a7d1c8d85e3b7fe9450cd15ea3727e43ccedfac2b9fb890ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=1bb62a83500cd6efcd8a039fa23d617f1894abcbd2b78edb14ad2e491bd5d590&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=3dd4cd0b50f230781ad6f3ee61890c6c56f5cce929042d7bdc9ee2c64d1718b3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=ab1bae569d51bddb151e500ca3af4871b2b33846146f8229ea3efead63c8cdcb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=85de48867d7eb1b3881978f070cd32069612dd17a77f3167c77884cf57cf8d37&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVRDFXUO%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T181229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9ckY4kwOWiQ5MYfMlPoOsFHcMX9yd3yxye1zGVkb7dwIhAPdcbfGtMT13%2B4qo7E%2FV7YkiFdHOKEJNcOLBEwrYmSIuKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxmNAfsoZBx7iglLOEq3APWWKKBd0ckZ0FAnwrHjXqnIK%2FfEG7npsxvvwkq6xQTNOvX4%2B6uDpZXAs44kExoEI35YSmIMWParmGEYEurAJuSXxrtXhKfoLV7cUhbcJ%2FJxMaO83VDlN2%2Fw2JRsalj3gJI%2BOZrJ1n1PR56WBiLZIf6KYiUtxWHkeNw%2FyAgvZP7hjuL67nHMK8O6QU2gS%2FlkNe%2Bo4jsYOJl8Decnndz9FB%2B1PZ%2F%2FScHqwqO%2F5s5lfTRb986pxT2OCnnVSBA9yaUjf1Z0RNxlz5CPAvDgKEM7NeYnTpLgeQ5XH9g7sqtDYarXu1jpBK9WNHDISnCS98AQTcBolMtdjxXg9Tb6J0KcJUwVA6wbcOAqRKYiDcCxQwy%2FhCDp7DXLEdubBp2uBhAWG2FfV5JlnVNEsx4%2F8vi%2Ft3FERtCVbZznvOtj6Jx61k26SXmaC%2F2kQIYasLi6QnokSDoJTMa0RcfskcPdXJv7RxmRsIwvZp0AdFkgrUHWnMPCtFWx4SjwNlR8n0%2BAbJnXqbO8%2F5VLP0bAnGvM8WUo29PtBl%2Fr0xFMs%2BroeLYyGThnmcgGii2NQhzjiDxzCr8x4eMGJfuRKCeKXMkBgREL0LkL2Em7G5Yzim9ukjr%2FL0x2VmNlDBuFjqMDjfOgzCcy6HCBjqkAQMlul2qTwgaDU%2FVj7%2B9C68opF2T1B3WFxqAd%2BZ0KY59rPL7fCTbUZDkjIRGnrJIzqVM0%2BJykcUJdfZmDNtXdWHLmtKJy7eHPr9Q%2F1A544z6Mbl%2FPVM0%2FpRRe9j3817rWWUWwOxx%2FRAuczt91fno2o5k%2B5auiM4aXQ6Qvrsp1Ot4tX%2FvEkolFs0lhcZCaAo5IpZmACLt6CTuZDLDPRBUwFee86rg&X-Amz-Signature=746fe95693465dd217b793c4a4c79145af4ecc0a5b9a0cf1a5cd75c1092296d6&X-Amz-SignedHeaders=host&x-id=GetObject)
