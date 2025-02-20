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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=34166bf60505aec4f5d2a85ec36ec7537d860c45c6e6ffeb1e0d412ac60f04d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=ebc217cca569212af0c52cf6efce362ce593cefc54ddd0dd2d544d4a26651742&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=a1b369103e25f0250385867021768af27dcf646ec2a357813812e94af555e757&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=bbe976ae61263ebfb3243a79b9c9efa2f1d41fac0c0c82045fa5109f01a76c9f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=578ac69ec4abc99bff153bf09ec5e260c9a97ed115fb7874cdd004fa5498ccfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWL5TIE5%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCg72BVG6B8iS6jZ%2Btpr%2BSVrmUbRaSSRVbBag2LR1qp9QIhAK2evBwPYADh0C%2Bz8k0nV2fTav1u%2BgjFhbn3c6mHbHnpKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwD1%2BXWsXQMmdLssr8q3AP0ashhEYi6BAZu7xpd0Eut9o7f73hXk5Fuhpn7a%2BZNk0x%2FMdaUdVv%2FZcSrD%2FVCMIqdPwl%2FayOR5Bj6LNMtWTa2YHqc5NzOLTxlEvILKk3u70pe7gVXNL268dwc%2B2S5G66szGFPowYzVlPNP%2F0tWUHO8x4lQz816875FruxJGb6XuFFyC2%2FjIBK57IlMoirdBnci8f8gu%2BYN0Fxyjc4ZGpKuJsZVfcIyCKXQRY2iH1NLgWbsrOPSDVBbYeznfNftizFmh1K8DNbiBB8MsEgagNZV8hUVfikVz7xU5Gso49FlvUxVnAHrb4ToUz7dexHc3hUNzkMJLAy5BW7pLkqRJ28q05%2FUqxd%2FEWI5GkS79310rH8RgvjcNZK4megWNgIopx8Jv%2BTw2Nav%2BLrgLpDpdXOF%2BUYo4pTTsmYSgt0M1wrjUWwHZyTH6DkeBKQ7B9ryj8X2YUz%2BACc%2FreDuNoR%2FehaV4%2FlB%2F1UAFIBBOveY43pDNnO3DISVHezgHy%2FWJX504I%2BYIjzO6aYXews0uYpgbMV6m99zD3%2FfmQDuzdCLb9C38yLGz1oa0aD5JsI2sjOkXBlIc3gcCPHXvZaTFJHQ3lOu6odTNo%2BbjlGikscvK9K8Ak3jdqieTWgrDF4pDCTp9q9BjqkAa3D9hPKlq1rZPFyKcqcdnu%2Foik%2FVvrMe9nvl3bK%2BlBXvaz%2F76zwQq0pSRVaHPKf1Bl3cwrfp%2FA5QqbehR4opRJTLWwAZnpqOaZ0i4YhZLdhp5Pyp4sX4o1jY2J%2B2AHpy3qfeDhNMKQ%2F3Ewo0rDnArzYEKQyQue8O%2Fk0JPn13iRRLrwrNZyunY8YTqarm1afGsqQhHrchQOnKE%2Fxr3PsxgaiQjI2&X-Amz-Signature=0be688919c1eaa7b0009df7024575160b15e8ec5af7492efa2ae0a961af20254&X-Amz-SignedHeaders=host&x-id=GetObject)
