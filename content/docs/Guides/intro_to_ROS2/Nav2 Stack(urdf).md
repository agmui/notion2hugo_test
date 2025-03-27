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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=047ea065226308c45840f91b4f987acc37e74214f430d46f993ca709451034ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=8bd7dcefed98ea853ae9e691a1752255629f599b09067c6854c4558b1f879210&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=62f3cd676e233822816befb39c56df1e7ec59402b801574dbf939027db2c2a62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=de7bf6035197fa6c205832e6a23e8d713626acc6a61bfb8e66bbb4712c93409f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=a415310f2c834d4480bddd7bf4a520fbb0346e057478c99108d87784a573dd77&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNA36452%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsRJsRdSZInqkQc3t8IFmkWgBqMpAANo5YWaov1YeKXwIgUIyWpvM86WHPKGL84VzblgzMFM6%2B6b3ZKE3Lbvkj%2FRUq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDMzkUpkiuHmgjQ8sLircA8RD%2Fu0FsLGR2C6M4f5DzU4N0ZkVtmV20Fr5a8CN4MaM7oVd2jH5YJdnefNX2zLzw740F%2BuYN2U%2Fg7zlLJ7Yo%2BRjKihTaUt0kf2KPcJKuIHgo6XjFmqSRV0%2Fz9vTbLC85omjFnanEeFbk8aMOtJcAMeUshjyzhsgcqdQgyREcQ24nMcGPd3OkBbxS1H7yDlRT5Qoy9AENBRYo%2BBFh%2F0lz38sBO9czz9uptH2dK%2BaHSyzTpniDtYxJthBMC3ptyuBbLM3pd%2B9g%2FSD1Y9s8o6Bzr4QTXZLmNRDdWrVGBLgt9fYdK%2B7eefSyuQ%2B4yVMCdERsMAITzIKPIE8HeUIzGfkxcx2SvRWqsf7FK56YrjTkRNHFHmfgJwLRZUyIgKjavf6VHIbZSMW5s11ekCAja24DAVj%2FFQcJhCOWnIAxfR9qZ6KYFAitbbgjxI16tAiMOxARTtalVBwyT4UcnhijTXpCxQSfnE1icunW2h%2FJ0vS0d4WCPhiDvjle64H43h6OFgcsWbsq1NHutvMRmogB4sb7bZcm90B%2Bjpp%2BVRvnSp9hKeZ3U2ytAkOWBtZh%2B0X0cWXqSpCbcYST%2BfN3GPiJ%2Frmn8J6qaT2EBpz78WJhaxmfx52uDEbIdKS0KnecrBoMIHblL8GOqUB1xGHbKNja268sb7IfHDwPQlPT2BTCeQkaIJja1aGBsSkTEqEulm74ZPO42x%2FsEAZaCSp4HeB%2B4vynVPr0WXKEHSBk4cXPrpLgRcmnEFoTVV0nmOiEGvEbyZGXeeXnL6kjmp7%2Flo6Kh%2BYO%2BmLr%2Fl2WvBKreLi7r%2Fmg8zkBk7P8gS%2BIlNbinnRVjvFeQLKUGI8bIHvepP0ByCRqzcMEHYguVoQUt6M&X-Amz-Signature=c4d8f4a31524175e35aaf38ea6a3b4aec754666f56842f21ba71b4b831f08227&X-Amz-SignedHeaders=host&x-id=GetObject)
