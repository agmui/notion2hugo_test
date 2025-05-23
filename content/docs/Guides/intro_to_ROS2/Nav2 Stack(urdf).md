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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=009f3c195ab4e718c79e512b209c033b1e050d2a9d2c084d7079a8aa797a4fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=640797afe1ef69a3798c8643e44bce7714e6d56414110177f4e4c84b6c103f67&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=cecec80538c1be3a93cbf6e9f3d33510b058ef5e3ec2e3d2eba4aa27ea0f9734&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=14b7558f4b2324aa71c0b17c6a3afdcf8a62598cef2c0fc456998c139c978d1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=d4cfc224e2e1aaa299a118ab91ffcfb93d904cbb7f81cef6ab9290d6a3486750&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZIVUAS6%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDquY0lBsLZPAIIsCISwL0XHOXQC9kRL0NRaGUHdwhe7AiEAwGuodn%2FEoh%2Br%2BnrlpbFvBMff4dv1SyI85CUxZTd22YoqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDTB%2BFrGMptfKtN8MyrcAzw5ZjK1SGNvS5Wd%2FqfSN6WP44x7j57Rxnryes3h1MyXU3VBtnUizFF9AthCVRBxPcqS1fPTbBQzX6dsWpUpNPh82om4c8Y8ItVrqoJV%2BOC87PnrMxVKL%2BNxCY%2FgNNEosM%2FrZs%2FSJf0hp3VguNOyUD7CfmJPY0eFyh%2BpJipEQgW%2FxndW7SLrF3ii%2FemqAHZUZHK%2F8zjtg1Frdw1973yF3sRI6WwnxCdUxUWBHFY2FDWsvhbFXH8eVLm5t4%2Bp96L6rj03n622KX6nJctxhivJdt4pSLX6vLdUE0mw1sJ8R%2FvbEuI%2FNBeAftzyy8Le6gnr%2BHjmr7ltk0gVly%2BzIDT5mAo0mIgRuohJrDFP1%2FXJuHtR2NZjyMECcuJAaLHp4mUd69w1RSoKgNKhCvWrxfxb1YgLCcYm1fOkymCVNTloAssvic0RXK1EYbhTfBWJl5HQG7PVNEVnaOP2%2FJ0fDc1t%2FohPqg0ysnnJI5xZ8j3amnLbxHgOR6wJlABi0kSlTlEThvCXw9eMP45UN2LHyOB2hyel%2BUkmIZT7CKPkrqX%2FBiDXw0oOsTT3otmKeHeXWl7%2Bh8VDHuyQ4BVDRjA2YbLX8sy0jrcXqr%2FeN91TR3ul3HshVP4vRjXQ8QYcaSxPMPjBv8EGOqUBs%2BZieyraH9PALiDd8%2FA9gSDp2FtpwRCH1HYAPyhL2eopQVpR7dM4xUw4aFy2U1Z7Mkb8k1Mz4f8tKSH2B1tG5pXz2Ckr0fc0UVJJddI6RaVMtPxFzBZYZtSVbjepOoPgBcCr8qEPzze9Fnwiug%2Fvv6XoWXx3uGeUfVnsA2MrJPtSfWWmfeP%2FbAk%2FUGMwHNlIKid8I9BpYUpTryZ%2FSDpXY9wLXqz9&X-Amz-Signature=ce20ca37f4f519366d7e2fded46e852a6ffa373c86e538505db53cb9e49f5e55&X-Amz-SignedHeaders=host&x-id=GetObject)
