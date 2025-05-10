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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=186ede0d49481e6ecfc3b87b2eb3427ceeef854c06279d869e01012ada1e4afb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=ba16f0b3bde1405780c31a63ac19364b72493f907181d251addc3d4318d9e922&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=0f7b2dd87207ccf74867c8a91cac6e7b2ef55d09fd8c9ef2834a896013abddb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=e16847e464980279b9e14e51ad5f26995f1270866a92eae792fca5bdd52eb32d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=10eb67f517b31300df6e02596986ae988a347d94d97c7615a4631e4073f4e691&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLS7BZ7Y%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T220710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIQCEA6%2FbOtrxiufUze1LHAb%2BPEW2ISfWQNCPZcFnojFitAIgL41hS4eB%2FeQy2Q54Frhj%2Fiy0z%2FfiFGylYuxLeBrBDVQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGg7uKgc%2Bn%2FcAKbIcyrcA8vdwT1z29qSFr3g6RQw95xUyj0dNEh%2BKlelQ1s0mlVF138lnHMmKaaQ%2FrehNaSCCVzzmAYa6%2BX63ysO4kwilHtWOZHkEfgHkxzSVpvQ2i6oP7ofSS4%2Ft7DPkEp%2B9KYqEsSkUg3jVNY875mEA4CkTE1v%2BlG7g3%2B9Kp8wZtci0RCXRVmnhCZdcXx%2Fqo5YzN9rKn2qw7td%2BKd01xaQZ44eI5Hv7Dwb8q6v7hYL8QkU8KLrhllnhD9OG7zOIsIra8jXRHRhcMgo7YiWALScRm0%2FkoZ%2BOQqSlPve2iUEildJYfRzhnrkeOTljFQlD8%2FAQXPoENG2el6NWuHZGQ7uogJM0%2BnSuCqtNjfvGqOtQDgFQs%2BlannHpvW2h2N0ByAEN1ji6tomRhMCeVY%2FhGVOsp%2FH5IqEU6Wg%2B%2ByxgI6rxRd6inVpRE3y4c6HWapwSQTkvu5qnFPumy%2FrGRxoGP%2BQ0XAlFwzlL3Is9V7FJf68lB6KFr%2Bk3w2Ht7naPiJvgccafa%2BQD9ymPPaj0xgcOo4ArUUvM5V4tU8qCn3cXriYlD0kTKSG3G1ZSd75epd%2Ft6lkT%2BBdLvQUyp0dOnjWW9yi5bwqU2ClqmBa1D0m5vlbvJygEJbk0w9g5JLxhMZDRI7wMMyK%2F8AGOqUB1rFCP3ifkj3udr9fFQ6Fx%2FE1qsHtZ32akXyxdkdru8Cqa3W20wES1CEGrEVseoTWPNRq39cmQgubK7hRhwm8b%2BSdJMkBXe88FnYhHxW0SGdtHJPsAQmN4%2FjUpGrFsWkGSYhgDEPCbY3zn9EnG%2F%2BVssbnU0pruxjp3z6KZJny3a%2BjnLcujWxsd27YdDuTXLDWXZ3Su9DZOwDzStNaXYPvxVSHI%2BMM&X-Amz-Signature=bbc4e13c813335294d54ffeb8adb84d2cb6b4fcfd7ddef340eb134144af786e5&X-Amz-SignedHeaders=host&x-id=GetObject)
