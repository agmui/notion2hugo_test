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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=520e79058dcd435e6aba1909fcb89c56c4b17773a1b9c4270b98e7b7b3c03243&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=ff325da339d284e5f3e0c7a8e90dcb793fe9d9fcc5f0092f487de7697a0f71a7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=9b2cefc6185a9b29e72b2187f4adfa35759630dc8ea6c4f3399c9516fb54b652&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=1b9dfe84b48f197d5dfac7a23b19b7dbe97f61b55807790557b521c30d7fad6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=bf394caac145bb660f7fca0f85ddd7cdf9c6c1c8b0f91e0c1c02fa440ea48301&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5TDSXU5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T190216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm8fAFzjXWfqBeQvVsBujY%2BtMLjRDda89TUdJ2%2FrCuoAiEAm4oTEUTWpYs%2F954Nhql01BaJ%2Fm8uCFpsOvYLE6U%2BcA0q%2FwMIZBAAGgw2Mzc0MjMxODM4MDUiDO54MpdPYhQgNAVF7SrcA646sRF6KTt9CJHpAg8u46l3T41mU1tQsbXQSbsbpn6I4YIv2244S%2FqLXkjctjpSXA7h824HipEvQmWQA6nwfPf6n5NBAzAMHeTAqda2kK0oe0TCqzGqy9xKU6otY7ocyAT1yv8HVXiMNKxbIXC2g0sjup3G%2BKjujL4LtjO83vA32u3TKhAcN%2Bt9Ub75Mp75YiDC5YylKnRe4Xs0335b341VnGw7QeuKYIOBCyhkylWqF9dCqNB3DNE5pjqVAVzPcFbLKAJ%2FdGNb6mveTBYFE9FwZJTh72PRuBesDy8aEuwHGWAc4jLii4bDm2O4%2Bm7TUvg5%2FVU540q3w44DSt2W5I%2FKxNL5hulFZItFTIXWlIKbbp2ksYBzHtJGdkZORRqp0IVlBsD%2BLr9iMnII8G9b43YE8pw5%2FyeHnd%2BIcUhaypHF95VVPZEoSziJ9z%2Bk%2BY9c8qtO4XjApGuREtAL39EZxZGrFYNBE3Dgw7%2ByixRIi3zSKDDl6f1EAhmSvENhHUVfxdWzC02LjYlPA%2BmN7LQ8g5fvV8%2BMdlEtTu50TCRHy3MFLi09KNDualYCUHQHkAtJ6ro5Ox8aUb6Qvrr8pJhDrcPE4r2k4pZ1cVwv6%2FggTmab%2BgyrDH5qpxX80b2oMOaW2MEGOqUBq54DjXcbNoVQvPt%2F0%2B5xj%2FqehfZXgyWDMfqL%2FCAVqlfcjcu0v8z7gi0JDcmNOzIhFhjRCkSAl4E6okL3bWOyEyBVocCSrnIDxv9Ys4ZlBBv2F2fRBcMcJxDo4EB7gpKCPgny7hQI%2F3OJlFcGKDdDOnoeZUBYI8BflTtrXRpn49CmEws1MMF%2BMtvC9F2%2Bp8nX0F5pM%2BVg6ZrxPUMfh664cpWDSpnk&X-Amz-Signature=b0cb77b40a5a5f6781de9397b104bd0b92a2c74fe94a16f22aba146eb3f0e882&X-Amz-SignedHeaders=host&x-id=GetObject)
