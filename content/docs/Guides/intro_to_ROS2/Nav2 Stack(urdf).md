---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=9fcf481bf9f01ddcc952d5a8f2bd0609c74a7fea29c187d06f9e1fa9f60c8e5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=6d04e426c63f7b9a0f2fec075ca3793c7c7f21bc3e757ad4d77b24cca1497158&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=d12fc2800661c7b1090723354295bf0382c303644f0ff1b8e5a17e9103e979eb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=16de04c97a57c69028717f82af4e72a62cc5dd2c6b941edae4cabdcdca3e41ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=e17f367b86b8c8cf348b564b3890b6658831d5b2bff31d623bead39e0d852bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PWOWXO4%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDneurakyV0vHx8NvDDqrvxFSG5FxDQzvBNyMc1krbPrAIhAKOWOv4Ee7bn%2BYqSL7BK0oA7%2BS%2BSEyL9G3hhDXJUDqFsKogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy6aJObXkbyeHCOHQq3AOHfIELWUncIPmfC2Cu0tIKb9Vj5XlZsAftiBIzCLti4jyv73xhf3cSdaZqUWe1kx15uWM86vbWuT0qXNJSMAvN4tnx4BmxCtoKlql8Rs0cP4pDBFKhm16VC%2BbEwFRRetU%2FPNV8EwXtjU%2F05Ths2UdfJKhNP0MJAfcgltD9qXElmx7jZcEvBG%2FRYgbxuaQHGSJuJIWZF5IDNxhIhL6Wfk2BZpd9DZpXhigBlRANncbDNdBgQNym3BD5a2OHV5lquxDJUY5n%2ButoBN%2FETqVLTS2K8NZaa2%2BMWn4htIbmDN3iYvjrJJ1GwrUGVd%2BmvW0cxAHiszvYb21KFkeH3k1L1v3%2F%2BwImQ5kKsHTkdktC%2BmR2pBKtAvl2YAoJdSh1RN7c66Rhyzh1k5o0QVS6JONU3kZVsBp6SzpLI%2FMB9%2FMJY0zJNUGyK4HBzCjTNGKLxoJWa3XMAut%2B9exq1KCmd6qJEQ9WIDyQSI277i75uunjETIt1o%2FSexvE5gSydNAinroGYoXHiz3wgyAUpqaVAVBizpTI4H%2ByGeuANVtav%2BjwjeD5PbOQIX7gjkkmGf2xW0Y6m3eF%2FlngJioLhvF2TwHvcUUalfWZbO55MK9N9ImNAIsVHG8e9gKeVWa7eysLwDCPvOa8BjqkAQYPrMxwKPRLZsDGNu01Qs4oCdHyjaN50sf1qmbFSKJxbXBpG6G5SH3mSOJatA3sTdtmfMS%2FzUtUFFDtmyNsXkPxvOCXxORiiv248iX1rpHxWhRivhD%2Fq1IfRgdzR%2FPR7XaQ8Zfhf2KV6oa482G%2F7FIAOPDvTolGQEy9ekbZFD%2B%2B0BKN3EGoxNSrOtqXpLZ%2BhNvBZTlnglf9P%2FIHfufHNhwksGw%2F&X-Amz-Signature=843679a5e24f08bc0bb2cb45a89f9a14ca440d6f4d3cb53cb875624ecd220327&X-Amz-SignedHeaders=host&x-id=GetObject)
