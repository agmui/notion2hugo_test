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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=0bdec8b2a712eb109d02d3d80355cb211bd378217b9ae52e21baef73cf0424c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=9ccde8f35ec0a836d0fafdc8cc52e015990fc86df2c83a9deacc3355c6151cec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=72c14de19e883a50f3e89670533f5b7a87d755fe5f7f905d97417c9334a5f2a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=d5ca063cbbf165dda78cdbc087192ad8ff094fe4dd69ab1ed6ececdd8f585f97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=137d9670d34b8a2bae337d6435f291d0af1a3197afe5349bf3518cf36bb44c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V46M33PP%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T035505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF%2B1lmjwaiRW%2F2eiVPnXi4fbyRDNYyYFwhZRR8jq%2FE6AiEAnLZ8RefndaZ7ZCdESxU3cv5yWu7FeylVQIg6p%2Bxch3sqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAZ%2Bvmq2poyd2p2VzyrcAymlxHVNQ69FLKq9%2Ba%2FkdQMkWodQSc1rJuz%2FPfDIcUFNtRBaTk7ufVo1FQQp3EJa4dFAhm6ocapftggbLLAn7h6UNolXh2SEeYqE430dYpJU64VoMm7estPXMi0kJDne69EGn3IsEGdXuYyDF6oZRdkfaZKiqKiArt4xYWQ0jeHimN5Q3%2F2wOFH1UFRxvtI2KYRXS%2FvA6eVHLDKIlZe5iRmIJYNQSPNPEkqxM7TFoJdw5VD5JzPlmdotHFuXlrybiYQ324PNsZ9MckGt39gOiQyMi1x5DztN6emGvrhbtZqG%2F%2FihqfElb676Z0gh4d2kaa85gwAcyZOqMo9EKAs9ebrN5NeZKEQXdgY0XYEYnG%2B%2FaPZIDpUA0P3zAoaT%2BudtwWGnPcWZnou9mh%2F8S1MnHvF2VBgJNKaCHb0Nt8IhREBLi%2Fsd%2BTN%2FEqnZzMO1bIDkI0R%2FyqEwTa2P2bkWZ4JTD3PkQNAB3jU08gEsLML9AqotdcdTtzHi3CBNyvHeJBguG917I94qCNDp0VF1raIlRBPivFUfwD6IY3ITEFtX0ex4FEhjtZfeqG7IWeUa6EjSKxGvPqUJbdkX4CMT18oT%2Bz728d4EPdwNMXDRCRFHm4sqjMna6PTzgqUCWLabMJnZzMMGOqUBEScE2I8fjfjBPLxE6Z1eLIoneya4gP1b8JA6jDP%2B3FmBPJGmdo7SxMVU%2BIxf4xXANW3hTUTVk8hBhRw1W%2B8gfz27hPT7nX24CbRbhjvHPiRWcfFnglClg6TwMMYZnyaflTE9G%2BM%2BIfva31VBRJtZj6F6SkrXiEzx1ZV3P6be9KHkYnkLQUaf0mVbmg18NosGscbcjv%2BzyROr2CHYHnNEmH9YcPVq&X-Amz-Signature=0a721916cb825824f21a190c7cda84fefecbc74d3f1585b82781c35b3fd2e67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
