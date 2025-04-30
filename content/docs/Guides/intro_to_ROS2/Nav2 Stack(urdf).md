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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=f54bbe18d4a1430282b0719b4ae6f89a2886b4b809fb79f55b2eff9d4867fa51&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=b60d43094db63f003d81075ee71f76f351d3abc6e9a986ccc7a9b9c7785d0bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=54377eefc54219630119413f35dc7409ef826017947b72bf558809b987b6039b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=a41718fa4adcb6ddf0582b708a1c5eff1b464599c09a361bf0ed5876bc7b1e33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=b32bc8b41e950a624e20680174156cd2c731778a304c7c92c494dac90386afc6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJXMNMLM%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T210744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQDH9Uf%2Fv%2FJrrVf%2Fl3PhlAoHseTkypa9kmcKOJWFajiC6wIhAO3SOB0L3YcLqSwwC%2BlXvZjVskuTFLmyaI5W4i4%2FfPOqKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FQ3y1SJIqxZHxn08q3ANasnkmjuFXCeG3SZ0eelUp4MXhuLi08PxQwjvt4Fo4RNXMN6IK4Q2OjqJDcEDoKGBbwLVo9K%2Bi8RWWwDTmFPhjZWtC8Gr7rMKwBwlrwMxjEU25Byfwv9Rkg0wVg0Gf2lrdmbkjQ9SFV%2BYI8nXzdQvKg38jjyH2OESU8wyr4a6Dk%2FZD8eOPLwg1iFiV3%2BXMbLKo%2B%2B6SgxV0wSxEXVWik1sT3yQptr4H0rEjDGWcotdcKbdY8L7AgRu7pHVgu06Vi7wQPiODVVGVoCrdZyfS5R83Bok3sR%2Byg%2B8Cwzv%2FidZZ4rm92pNx1jECC63EwC6%2FX7nJ%2BHFfga7Uc7jNVYozhDO%2B4%2BQDYTTxr4ph28LcF1VYLwWpViDxjcOayhMnf4uJu05aZ3M%2FEeac%2BFJr8IS2NGs5Hcdm6IpyZQqDutLER13lTVvDiF1MQIBIaSWAkLasPEZolYdhXt46PMw1ML5G1KwN%2BmKLx6DY72jhWKues7MTt8zMKL%2BmptP6sskaL4%2B6L%2Bg34V%2FhcIVURS9kZdAQKyc3PCQ7bjghMO46eZRn3T38m7wG50PAB0%2BQAOpGkLL2wO5OSn9o8Un1QqSz5vsZneROOH5GogbwBdtMZvij7MYQV%2F4NpwEHRNb6dJtcdzDnkMrABjqkAYQm9rj9CNvOtSbz6msfXhhik%2BgGjEEFehejyfoi0bv%2BAECe%2BmEn5Ejs4cFEQuXkYMOXULr%2BZ%2BcJK1y95UxTbVSMSkTnUT81Bj64ZN7FQat3ty0uUtrKf3PtodAEyjTBUvY8kFnW9S51PLkrMu8k61YoQXEcOjVKt%2BCRwQCufECJraxzlSOVDyXneqzloUrw9B8Uz9tWTUXCi9Eq6EIKV0IzgemT&X-Amz-Signature=f5daa611db651291b5d1477d12baa6c543cffae291e34ef99cd60d2bb3d70018&X-Amz-SignedHeaders=host&x-id=GetObject)
