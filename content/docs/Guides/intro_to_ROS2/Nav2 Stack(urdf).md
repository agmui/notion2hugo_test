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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=2dc453d50d00906c1bd4956aaa7ec775560b14702eca56ad92e6f94bcecefee9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=f29960f99c6f239e3f0052b69104f508b42531246043c780dde810e75b725b85&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=429a1718deead42f3a6816c4b18684b87690aac75850890db8e19ff76561d70a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=9e9e3681a1735bb95545925f27835e3101619817c125a73a5799974d69ce42cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=a38cc4666b439153a10c321a768a3fe50fc628e904245657e625c160354afd0c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CXZECQL%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T021227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIGcs8QdbSHpZi02FR%2FgIYw7oHlqcMmsD9IT%2FpXDMXmjBAiEAsSoSgqow2lyZ8tuXjDAXwhSR41sf2tSSDtXHYDBYWOgq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDOkPS9bzX0BveHA8NCrcA%2BOuBpd3zdeiUvVFFRi99OzVyKyuMfWNb%2FVUY3%2FcCpPOhWWYfvhPI9512i6hEalszh4rs0u6MYUJG9IUHyY5Qp68IOcyA90Lxi%2BY1WirsIz%2B5emkBAiKu5iKwmFla6zgP%2Fvmp9gNNNeAb%2F86%2BUejlpHFTt8vps%2FTQrYHBRkBo1XLgMEsh2bbzdUX%2FmKDcgkY%2BZE%2FMrIQyZ5s2MjGnYVKhf4X%2FB%2BlAfyIhUN37PwTuRGI%2FugKgBcOo%2FVwuk%2BN%2FuSSP%2BQY0Fhncpg2TKB5P6OL%2BZNvFRIN2ZYYLfz%2B%2FcPC0UojhZghajeHDLhIOijVXZpx7VpUw8UKSpggMcVkKf1ajbM8CYBcYDHeruWcbZy4eu5N%2FvlW2fLYQhaJgoxFA%2FZBV79Dcf02UTuUzFJc6Wgvbfa18XfyPzrZrxa4VZYb6WSDdVa5%2Bf3rCJYveJgClfmIbaltccoqfR8sfTl8OgA%2B4QMTmcg2J0r14DIGE27xWH761HNTCGWErv8E0%2BK1LEobWrDnlBFO8sdPkpRT9dCfOt8M3FRxlZOZocinw0YhJTboM3GI9i8fuwLZJ1Kyy1FGkWbj2%2BZA6k3B3q4QUZ5SA9bUGpJFM8nD7LzTHITvuCt0DAQBPhoSJx2qAqyQMPu8%2Bb0GOqUB5uvMeGU5PX76efGWf8%2FiNrdnPVuhA6QbEtce7ZNt7uQehQpBiZsOf64A2%2Fwt9olq7%2Fxt%2Beixp6BdrPiGOOUCtJ1J6393KSaUgegype53DUxVXqW5iIORDSMcPjwbgOO4RlRNFUQ5E7MZpnOziaDGpumMB4oTDxDz707v4eABNLkLquLmMNHYCdASeoCGznY4gxz3%2BeHSb%2BJkPXA25Rt1ZIgvPmq8&X-Amz-Signature=7df654cbc52868685b645f7e015f5b0d9d52579f5ca05aba6dd779d7ee78818c&X-Amz-SignedHeaders=host&x-id=GetObject)
