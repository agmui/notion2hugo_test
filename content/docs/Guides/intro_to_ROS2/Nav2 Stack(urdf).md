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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=64c69f82e62b8f4ecef1ca3503b4c81d002e0a2d3125b352c991a5f056c2a9df&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=f040838508e27e0c9fd5b11c128fa47e1cc65f1a3fba4e209f2cc28f11ef7c07&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=6a016447368014be9548bdc14f2e44d3e47dddfa09ae78eb75662f8cca314780&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=a2fa23afdfc0dc961b8c793bc22781563ac873ae37344d3f03cb5aea494b7fc9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=fa91df48776db975641ee893c5d3bdc4ef6597ca35a1b9a41a1e8de296e3cc03&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4VNRG55%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDNmFzehgbaVWEs8MHHXq7krgCQgWYJZ2fxdo%2FvKihLFgIgLrtpShHebEVHC4cXiPbdxGNiNM0K0ekf%2FZ1pbphXcFgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDGJRIoBgfWMx8dh3ByrcA50UiHFokzWZLkvYiX6pzjQn6dPPDNpvRelmJ6KqWFmCJv39pdBK0Bxm%2Fd5bA%2B4Y%2BWHsH3w4gXZTVRF9tElfYhBrvNZBFj%2BTe%2BpH3jyEOf9gs%2BiiScuTZH4fru5wSniGSeF6mEmQ6SDChJ1nKoBMomHsK%2Bdc5D%2BSAdr%2BrpoYO52g%2FVmRLsX7Dgi%2Fr5MWrkKnHs9alXYkHGeDiMFCj%2F1tZ9cGJ7dfoKmpG9TU62SKOW%2FlSFzwdxlGo3%2FESFSpGVtnOxNSBbLKBe2c6tYgYZZnIFfnWzsgqOis2QFa4VUQMUse9Ue3voejyK4HO7%2FOrJG547ss5AmcDPUINf3Dzv6iHnbxTzhbpmuCMx%2BiF6jsaOb3yJrbvnHXATrztnd4tXgylls5QF0c1ftqfyaBQ1y%2BFtNNb4lIgvUhSXmXp09iK9tGEWJMuszLsF2Ffakf1JKjqbzVYogLCirFIBGpDwf4o2h0A74ld3fhytJmAjXkI4uJengpXZkxxyrukLzbQ0vZLklAn%2FG2lsHaULaFOlncpi9c0LvbQnQmTrfRaX%2FH%2Bh6CPwjbA7XxW1zgcJQfISpZETyu3mHkAMnPkXBDdVlddYnM0Bp5taKHlM9rpzsHM5xBuXRxdsRJVM5dVL4kMK6frL4GOqUBsR0ks10iuffzU20C9OIRF%2BCnD9bO%2BxpJovvo5YBmV%2BbUe3CdJ6qzhhRiYQEkEB%2BKK5oeg9yr0pEXZidIh%2F0rk8Q%2FFmLAHrD2nsBCriIY%2BUf23SuSQbMbxo2dnQlUHDAArp1fapPvIhRMbrsvg1F%2B7Y6dI%2FGqv9jMql8CkWZSWNAWhen1LhKw2EyhS0nMV17Ot7Oo2TbFyfSmITzKw56fD7Sk5%2B7i&X-Amz-Signature=d3f15ebd0406d9855cae76ac2eb772ab250a3facc391e69a28021af9f52d9ade&X-Amz-SignedHeaders=host&x-id=GetObject)
