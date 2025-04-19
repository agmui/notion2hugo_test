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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=e8f6e2635be24c91f53ce6592e6522fc65cf876032e48bf7c70ba545eca5d83d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=e36d91902945b456d6fc13226d46a422460e12a46853af0a852efc11899a7b85&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=6507eb59785c8a0d60f652ed5e481d6c1280756a5207f4026dd5942182df80ee&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=4fb0c55ae3a9f448b1ec931839bd1ccacb9147918d7477f61ed69a323025f969&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=2606e8f721b5e3992bbf257f3560daf406d4f3d58dcece6024ba6ba3a60203c8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65ZJ6YJ%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICR92uIj2wRxe3qeOOKplP5llBPfZ5PozXAJYCFvtlF%2FAiEAiqaOaIxASJOFdSr%2FyTQu4XmjgiNLUj0SqSyJFUs2I8QqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCeeV%2BQHBBJtMTvgKircA1LXdn1Xiot6U5wowBkA%2Bg2YL6ZPLhOSF1VSjrMCZahhKuM6pEsh%2BaIZDgaC6ZFh%2BHNXIq8%2FdGLXVIRHuoIZHE8P9r3uC3Y5HVzIqI7nQhq1auk7SKfclsOa3zMqTaUIg4vtr1Lw9XG1uAO3urXXVRcpeDbtFh3Tc5zFUU4q8J27N7Nt4cYwqwkYZYCt11mUawmsr8IkvpbG%2ByJr7euKTT3CjoMG%2BvWm7kMYG5KRS%2FiYue4YEAjoqrst1KpnRkbk68dfM1Pg7PqIzkeTSw6hnxoz72GNzcGce%2FDAP0xCvuQ8PvG9b7i8gtSLCDoeQCqMLjjhwpO%2FXIHLQFBkzOZg8tXDqM3NixPSea1lAs2ZV9U5fcfxjXz%2FOPRIw7nA%2Buu6WnYkM5xl%2BBaeniws3vguvnDoEWXQLho4sidE4S0Mm6Hk9SecWGG8Pfgux40CebGynTPgu%2FnUzR1iBCYImp1aXdqxZCh05fCzWSATzlWnLRlTf9bU6cfCmqM7SN1tSOaP386dBdrVG8BX%2BWgiDpvrbyReW9SQ8qJsTkyaPauRDBb%2BJ71eompD2E2nZoznGeBw55IArhai5uRNHwfm1LzhV81mdsc8mjymKCn0%2BLQZLPxKpt%2F5vOBGrdH3j6ebMNz8jMAGOqUB5B9ODKt8byXTvN5RKAFUzHMKeOgqGLRetspjalsh4gv%2BbHFbtvdziPfuWVBvz%2BZ3VBaFzEA0OJ9waRYZVtpzIPDwPYhAcAjXchSBzHzojw7tIOiKEmxKIi8JfePH3JH9LRy3E7talxrDkqh%2FwoFaJnkcd4aiWeGnW8J9eSQpcGOS8nIlO2V1HlZXOBzwQOsqz8M7GALstb%2Fzu9DCYHcAVPd5jf09&X-Amz-Signature=bec8e64706661c5162965b840742fb24a981fee56d2b59abf1a8469edf3d0544&X-Amz-SignedHeaders=host&x-id=GetObject)
