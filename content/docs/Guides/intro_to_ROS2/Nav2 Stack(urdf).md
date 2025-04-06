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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=2222dabbff8f664aab91c204f8954ad236c28cbac001c96a8a4ac552ce6f6ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=35e974a7b004a20a57e9fafa7597f0ea981011e121abf737afa72c0a5c34de78&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=dcc32aeec457276dd4243a1d93beac5131d9251450aac43249a88e788ace7f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=31bb6e44068324b7d74aa9674020a290a88714ae7d15713f65410b350827a87f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=7984385a3285a1974027ccf7077cfc4b5f2afab4cadcb5fa2f38bf24828088c6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2J3CNLT%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICduXefvyLEX0d0Fy%2Bn3VSsOunMIETlc37KX3Lt04heDAiEArokNoESIVbamCysYKXWHhVhKuxrYAnNfvChaYcfstngq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDEDp4JWWcXn4oT5NUyrcAwZGPM4wYe3fZHjeATp5zGDYCXr%2F9rtucQ%2Bp3DSKrNEKy8%2BX2TTA%2FTOp4gn56p78sw5mCAwf%2BnA%2FDk2HRZF%2B0S8%2Fj84egNMDG0LXNNIsJ%2BkK0injGEkAj57gH%2FbAx3iyQkb24%2BGThigryOqVwL3xcHd%2BDRLylboE3k1N9JD5EOuwwfUUy%2F1QPVAfSjvSkYf1Kytlfi%2BLQqSFxEhjM8DkzRqusKAB4Lbpm97G88pJEVAT8fOl2M%2BmETDrKQCqZlgyreRJz2ToZUEgEO6RuGQ7gzp1BOpgGpFP8Me83kmmEYFRqD4VP454V6cHT9G4hlXKwsw4BvMiKo2Cxv7MElf%2FEBMueVLnqr9Bh5%2BSIYCCNeZVHSyCUsJRQ6Wk4mJL14b29y1FzI%2Bgv1atz1QhB1Aw1y%2F8TGDdcLbdb13FtPW4EyKXCWzL4pA5aknaUq%2BmUngpZfLV6tWFx9FWjrv8zob%2BO17pNIeTDGtb%2FGfPlnWa0ePm2JGAeOKF0Fqqguh0g7Zdowrf4JYVWWbZ3LMf9sr4%2Fjyz1JthTR8kYO0eemluaO5GM1ONAIN%2B8mQ1u7mzsp1Zze4npUZUwGQ9YN6cluBIwoioqJL6PWl441TEx8u%2BHuFzqI6866lNuehq8CQ6MJeey78GOqUBjFS7DxfXrAuUKiteTael2k2dYeJJ%2BdsRCcU5znLshkCFTMY4e5z7XPNbM4wz5tOcw8BbKLmL%2B88LSSEkXAu5ATSyByd%2BobbzNKki3VzC%2FGUjdNKzh33B%2BQ6dgacDMZT2X3HbIVep2DWVM1HicS2oGRA66W5ZgHzEZTWvTz1YU%2B1tCX6tA0NJjyskbfYgbpbaMLmMPijqAW3JZxHRqQ%2BZ1%2B3wroa6&X-Amz-Signature=cd816f3be6588418cafc5d9f457ad9e68b27d0728539b4881594bdbae34bbaa4&X-Amz-SignedHeaders=host&x-id=GetObject)
