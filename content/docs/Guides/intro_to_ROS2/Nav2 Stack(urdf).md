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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=a6ca22b07b27476ab86eb342e24a508aa92e16d622947f93afbfad305904e97e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=c341ef773b1a8910115594d9e59ff7d2f530ac408a77087012979eabb1fa4875&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=1cdd33cec2374defb35474c39e9545c337c53616a0fe5e31564039e1c57c80bb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=4780469a06916d5b90a559414cce3eb652314650f94a391c7af57b74e62c5474&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=8a99d34b5f5ec0fba9c4df41635ce09091d7c85780abbccd823c74e931cb72ff&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT5N6BWF%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T041743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDgeijXJVh5pAaFVDUM5io4olOl1XDuVevgHhcfzyk5cgIgSoawcHt1js6FQNy8zgryI01NJW2tM5UxsKIY7j4fJCUqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQQ1%2B3rFOZHkppriircAx5DLc7LsvssgJxFUmFsr26cP3RdQJAo8528Mfb1%2By2JOzSN3QaRoidyHyRcY76jr%2FIgbyPhdprcQs0nOZ9T8rA0PnAU5ctd2ZiUmDgzvNe4Wnta2ON%2FRDO7nXQBILi%2F8FRwiOOkOEqHx2l6JqSCePj0%2B0jDnMdBZuTkIjrxFh%2FndVpyy14YN5x63N2sgWx083t%2BxiJl4rPDDsJsOsobcD5RbunvBQOXaPunDz3ATU%2BNFudAuEzUO0NVqMfjb6icwOWIYddeY634XRd2PfhdI7J0BfhaL4uc5%2F%2BavQKCGCeS6EFJyOrWrxyaWOYBwwaioZ7eVhfV1kb0ZFdeTrOa52YXgaiB9N9NjQDR4xDcKSE%2FVLbwhBZ6akljpXUxIWlAzdAKkeOSzArSLHwDTUP%2FUHzKgjnPlKlj%2BvGv5PXYXtpcx7vai4bH3soRfZIG1U8ABhebZ1fRSxA8Iojofhfl%2FMAd1WVkfbTGN0cGnaniMS6n%2BYw2H3ibFzuyeZiWtYN494jHsuV1OxjAWqTQZ2DLURpc1UzeenqQ%2FtS27IkDWF7rY4GIrBraV7X2lnMakT4pVmCrMJ%2FvJgKK52E5nf%2B4HnU3oMxhhCKRqYLzqLWhHGNDRNq8KwdvMtopiRPNMKzdqsEGOqUBRTo4H6QY94NA%2FUj89j7EZ2%2F%2BE0hyPhsROTyvnaFRFAzqn8BpUsKbrRe8IT5r3%2BTu3Qcy4w9SBDR4xAyxzQ5YYkrdthEW%2BNyW%2Bt4GRf8TV5vmem88f7%2F8ebgoywm0MoKdd3sIVc%2BOkeKn%2Bfg7wBhbMy5znRig5kjdYrKFKcVdi0JLzwS534Hl72rY8v%2FtP2AMHpNcKtHsPGPkpJEMEPOoB1Pg0Ju%2B&X-Amz-Signature=3cbbd0372c6209c6bf096800ac581032484a018bc41e216f44dda846bf818013&X-Amz-SignedHeaders=host&x-id=GetObject)
