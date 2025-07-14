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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=3a65abf936f583a672868938dbe4ec40e8f1adc185047359101d6c0f8a0f3d03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=8a3d534cb06bed5bc24e8b263fb716a6ea1dde223282af1625f10e4fbbeada70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=1877596a7dd385b46adf6262612e4509bae35679ede67c7b28a143f2baa7db3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=2bee0f8f0ef5f271ed3c7dced3258328537d3e5333566a8dff1268582e99a127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=92e4554407bef50cfb0aa4a585f8eed9609b90e332dd6efa8596fa8d0a5af790&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKAU53EE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T190917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICK9Zuba8%2BXEWmf2kafJoP1dg2uOW3GYZTFIoanaUZNzAiEAzQijzka%2BKwk9Yr%2FSNG%2F%2BJW%2B4gSk1j2g%2FYj0Ldw4WThYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCDHow6L6Gdv7j2oRCrcA5YRsXb9fa960VWywvrYCV4kYZ2NHiTsb7nZK6BgeD2LtleR4jPI7S8dX%2FlrJIiqr4K%2BWKXCbuJ5DEK86045wE7pFc52%2BHcG7w84g8Oj%2Biln%2F316lJG9n03xVj8MabFH94P9qGk5EWLUavvD1HQvKV8TFgpJqkUaekh1rp6jEtk2X97U7qFLeiz%2BRS7ybIwcxXgsx%2BGdtyBMu9ulSZwLumRrEet5WL911Xm0%2BEEP4hWeQxTbrawIfdPo58Gu%2Fy8ooKFUCAfWZdRAZAb4FZaj4Pf8QBs5oK5B1QZjagC1yv59U1bY6InByRc8AHoVDQyYZdbOXVL2ctnq8K5vQBPXlDh0JQVN5dRwYBkT3rpndJMg1uUv%2FB0VimCh1F0oAq7HKT3ACqoyfd3%2FEayCBXbABT7J6%2FdF3ocCi2x4Urf%2BlWpYUtMDf8wL8O1Cgqv2Wt7fUn46oUAcfrkQ%2BSt1h8QG5NDma4VLCRrp3EnhQOjB918epcJ18X3qb9%2FAmRD731plsjL5MKNqtie%2FkZglZR1VgzYaaae28DndejdfEsIzjy1WOutRT%2BR8m%2FnEiJawn04BJE59QHnCLKvYA7%2FWIeOwA%2BE9jp2VMZUG3mWFpMt06zcr3qZQOg5kmtQuLPnfMMak1cMGOqUBN8duDYho88DilHJvRe0ui7drTcHcHFectD0s1L0t96WL1siHEbM4lMFzQYq1wFpzUhvgvmJMOuvYQl%2B%2FhRRS9AtXemcyzlqkW47mUHYkW6pyTzQcHpsLHOq93pLIh70G7E68FyrE%2B8Y3msxXlzHCuqZa9vKfhD2nJM5RLSIUpNbfAuFUYU3tzbS%2BIO7riFpaZCbk9agPTvlzL9aIeIK8eQA5vRLn&X-Amz-Signature=0a2fceac17225a8e2aad669b8684024c342cb6c60f42f540b15e70c5a0a075de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
