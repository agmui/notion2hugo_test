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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=7921a648ed37b19c1b374a5ba9b102c7ec3f878f7dffe7a555add96e104a70ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=f206da678a9b482e094cf43bcaa5d2057d5120c1ea8e98f5fadf7851c9d386b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=11bc76ccdcfbc7faa3fa092700d2b7397ffd926c5956817120244b918247cbac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=b81baebfc1ef0baa1b09a4c3e338ae3244c78647ebcde7567b5ee9b5d7f871b7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=cf1a5bd2c4d9454796f2db77dac05ae8a7fdf59b83f4906c64963e3a689bea7b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3VU2P42%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T121434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4P0BGu%2B%2F9pdVNHzggXg3XVwGMgkrPeZb5bLumG%2FRikAiEAulTRlfd0p7S%2B70NANV0SF6kXu9Xzr2tJwMBJCuxY6GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDEALPKO8OPv57eVfZircA33C5bu68g3Lv0nYP3IH4a%2BgIpKTmsJ5dNAuRgjh7%2F17emDd7MtDe%2BnLiZ8VP2jvTnljmVAyX2Q9GYmt8DkuwwKBJeqrIMJpBw6KRvfwLCfuQp%2FJEq7KVAVZQ2DPHP2tBSZodCfrBfhLcGaTVc8nhHv3hxiOYPd3AUEXFVlpV7KosuLdzrrI%2BDxqtz9URH0AaE4nrt53Dqy8%2BKYCX8OHnXqPgLYiyjUaMUls7ogb%2B6zeaPUMTVFeD4QRQl6vpiSPfkq8fJYuEFHcwca%2BME5DaavpXKYUcW9irwq5WqPy2tN8leYVeZ%2FCqINVrOK%2FzppxspglCvgLcS0OD354Ia0qnIBfobbJblCiHvFROE%2FZmNQAWT1kkLZSdSQYnzDTdCBE1iaJc5frSpfzL8rTzjyspApIKCrTldyyWHvYNZHRNTnqnwNHAW0cDuVjKQP1s3%2B4hto8JVziQFi97YpxMh59mY%2FYCKn0NPFEAs5RARG8RA22VnI7c1b40i5genAB5ylPwTfFjfkaH383GOhGZm8QpZVuBXiJ%2B6d7x2n7pWv2GJbuBndTlAdZR%2BH4YnBjHhRreNorlCRWBBzScySMHE4gdJKSpq0XUakFmhiQXE3QaQfoRvdUfBMcYb8xOgeoMJT1iMAGOqUBbRudOZrmZ%2FPTZUDbavMJ5ujFabWpx3ks4YkF4q5aT5%2FuJoZuJqdrWOGnrN4xZGOiiCHLXl1ufvUHGsPnUKIeQIF7SMjU7Q8FcJqROl6z4guLCymS6loCj3T%2Bno0k5AMnSBK0wDb6LVBX1%2Fj1xykE%2BHXXH6J8EcKixKsjZ%2BYXpQPdivQbD7U%2F%2Bd%2BS3qvPQqNNTHIlkYeFqg9bynvfwuLpLESq%2BI2M&X-Amz-Signature=5b38e5b4a9447e121f2cd59f554b3c6648877aca82a99c35670926cc55fcb279&X-Amz-SignedHeaders=host&x-id=GetObject)
