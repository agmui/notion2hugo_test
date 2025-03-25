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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=f908a8f4925d4bdf5339a0ab6b4936fd4e2db9595b02cba333f281558a13aadf&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=3530bfc59959edbdd2937086c7f610fc33292fe872a5f24e8128f229154b72c7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=89c1c6501ec16c97c9a6bf47f23e9068042b34ca453ce516f86c91b5056a48ba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=615d35dbff748ea07843ea46c1b23a9f5785bbc8a6fc17a8196d9f679e98b1d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=b8f3e10995d8e4f654d8421e5bcb5e4074820d9fb6289a16b0edf0d31a35f482&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HLNW5VT%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSdEP8Uv%2FZZkIx3uElF6Xxv%2Bkkd6K2eYZl9SeuPQDu%2BQIhANOQ18c4n4GlQOufkpwl2AtCSvPgXeLKfJNijFNHIut2Kv8DCBoQABoMNjM3NDIzMTgzODA1Igxechb3wFgVMQ5c9YYq3ANEKfLzDbM6sxj0cykeajbeQvySMdhFrI9DMf5Ms9VtPeao%2FJqEgDniMsaynxQH8QZEsPec5EL%2BFAyaqXK9e2MjMoD1ZvHWJ%2FQn%2B9dY5BO3SXAGXfwRU%2BPBMAYaaDLvzC48eMGx0lJ%2BUfxE0PVSHKHmpysJ2OqgwBsp%2FqBGYC8jyYr%2FTSYJ0HC2EosDdHTiHR20Beh%2F179DcnG8y4K9h0uHm%2Bp6zU8902YE4RjTrDe%2FCohonRKzJZYGh3ZX5y5X8ZhF4k2SvT3DAUHnct6RmO5hqwd4rFxNgaT4tIe2U7P5d5QtgIagdlgDfaMbMKiHrjKz680HqlddHEeX%2FFrrqXJ4sxZR92tKJE40mcB10f58OVp%2FC34ud94KexsSOfBiRARpXD0m1IfhwNONT8Kjc8Sm9A%2FOMuKLXdUxA7hba%2FC7iy0nJTny6IFDDZb3y%2B89ybq1lFj%2BrH2yfhULY3gLIU8DF%2FxylpF34dSGf7d3EX2qKl8qhyEcgQ9P34dygRc4S5N5Rrv4aSgv0rSYiKUL7wQy%2BV5LhsXUzloJORKpE5p0ZBF8AQDNdax1IfyhziN6anwObi2Y86781Zay3AacSX7xEguRtdsAAE7Tzhb%2BKplIStm5COYt6TrVkbE%2F%2FjCgxIu%2FBjqkATDPlO3Ct0a%2FSbayk7q%2FoDViWJtPa%2FzLkWvwIUTNwGnlm1wxcZkjYQTxZMrrW7%2Fm13qCA0qIcd6M2AtbJq5sInHi6wBgtXTaZGa2KhyR158jWoI4dkM3jnA4NPMNFTPjB363QUaHCQHDvl8rsDFU4oLSA%2FZMnJUqCeR5NnnGshXmtbQ7Fy0O2wgxcFBEuL44wFO96YJ9Cvep3FP2iv%2BCaxdv%2BABY&X-Amz-Signature=f7a87cb23eb9c92e14987eaa274c3e5b5e7a3e2315c88dc17899753d53dd09f2&X-Amz-SignedHeaders=host&x-id=GetObject)
