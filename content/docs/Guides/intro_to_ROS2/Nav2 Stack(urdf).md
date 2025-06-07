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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=2c5618703dcf7b7a0a13f0628d953a5ef82ede210b66d1d7a358cbc6f0ea1439&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=c5b4dfefec5f460531251b1f06505e14af619d385ea6ad6d08f1c1170cd2407b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=fea3df05bb5b0dd4cf57d4878dfaabc6cc2e9fca7f4cd8f0070561a0064a255a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=a60a299352fb423384ede43cc0290ff3f26db389fec931cb71f3891753fea348&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=88416f3cb1373c60a8d817d6ce2463325df039baa71efc9d4e3a2994c4a6bb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT3DVK6B%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T100841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3IHuTkya657NT3H74OSNv6e%2BcGl2I98vuIqPwb%2F1mJgIhAP1Fn3YhL39ywwbjzXqAdsy6Tsp%2FMwnpvwovpYbFl71dKv8DCHIQABoMNjM3NDIzMTgzODA1IgwixQ8qMSEqWx625JUq3AODl9H6sY8usFoRrh93qXnJjXIDi02gS1YWJuCgNgjFvF16U0wmngoHuwyTrCKNMsXZ8eT2fbVOd0T5GOxbr00rDCN6CM%2FjUsWaLHme6TP000Ywyjj9AKHGDeSVXxqlS0%2BlX8IyDEKVoeHuIK0LCWnYI4j49TBaLMub2Bcdyg9POXoiK3jwDEn2a6CAWBTSKL1CCdCBtR8SzHjeNDswx3Q0IB98yEJVXwmF5Zi6jUsSLejfmv6yJvKbLEcIRRtey5LHKgYmvy0WM%2F6epcutrxFEM6qZQxVdraiIpkemp39ugtL7rPrKop7eorqSXpdN8ouToLhHczUvQSLzf58sJktayvSzgH6UowFZY%2BmGnXkowyq%2BeX9gPIf%2F%2BLONv%2Bxr3%2BOWclgUb88wbcX2uSOR6iGpy429ZYH9TW4DdPGdKw4H%2FcNhOGhAx2GfpQYjPmu86geWwGVR6hvfwxiT5F8wT8%2BG82DHC3xc0CNHv99cN8VWbIxeGd9lH5AZCG8xnfxTaI4xPGdjBLFwCcxc0xmdHLYsZU82r8CE%2FpM1ckWeMq1zYKDAJCn55DeYENLlYR2hTQP4X2KOwxMpAbrjmg6SMH9WYiMkLSry2rEA7cYqMC%2B6v%2BLLIEIOUMnXUOpOPTD4%2Bo%2FCBjqkAVk8vYxYy0z4%2Bzh1wz5Rq3I6nTXTfcxWhkXqJsmJ%2FF0TTS0CQN%2BIiEGvYwTYkGWiyTCQyxCWazx8SP770yGDLKPtLyzyxJ1z5yj9Q8qxdR0fSfpUknIeBWegKO0asKoXUN6LA9QAxRBVP2j4x1zFkXUG6BEGwHtGwGbORmtFjw7GD0gkJUkpQnR2hat6P1v1EwX5phDVzTqicKQIEaXD1CmFM47g&X-Amz-Signature=726b399b0081162f5b8f420da62c6fa0c775d5e8d3e8a899db5c59e5240efa67&X-Amz-SignedHeaders=host&x-id=GetObject)
