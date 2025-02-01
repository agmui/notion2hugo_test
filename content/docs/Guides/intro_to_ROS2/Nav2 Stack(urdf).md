---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=2ff1b7e9d99f7dd3781dcda52bdb9e669736ebb11e7e0444fccee5d76f7e3ef9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=eb79ddcfe265c15acc759e84c757f1081d15126912e3cc128635dd4fc7c851cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=08febd0f4d71b00c9259617fc4bf519bd448b8e159237f90787919db6dde704d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=cf8c6ed7c256efe527fb851a493c3f1e624a983037c37626596b316b24b65f85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=b1cb7bfe7b01b3ba40815115d4960a351eb5bad871a50a7b5aa8ce0e6e277e47&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY3ALB4G%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T031317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFrhufDEPmGpsO9HX4aICOmOaP8fvDuaolwPW2PJR7K7AiEA%2BBs0j9MEdobrdrMPB2PiOcJrLPvxz9AjhQju2TKrgaIqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBkNYPybWVdAb97e4ircA5BmEPb6JJvUrcsI6bR8Kupo7Lh9QhS5wXfj%2FHRJ7Ox4%2Fo1IkgfBrz06Rr71oPbIkPN9OulPwbfrswzZXvP%2FAb1F2mCEuvRhreAB9Fec1Nygpwq4xf9dhyRyP46InzoxYX8ztG6VaIYN0g3LYPDZ%2BhSVHrUfjrNiSso8IS91cDnzebPvei21o%2B3jSysS6xELL04e5uvA%2FQCQpPJfNaOI9lfGVuXaxonkeICOgoslWE7Nl582tK3S%2FiTriznhv18xoocKP6gS%2BpASI%2B5p%2B3Wx0Zxoy7HiS0kOhIUSUyFNhjv0Sfv%2FXZ47%2Bo58ZhRZ%2FekIp%2BUOvWEKEX%2BAk1YLYI3S2G21AbPZqgQqW1U1C8%2BJ8e9wp2VUolfggaZTvrcqCQKbYP0Lcxi%2FWgF40NYKM%2B47dAKvFW8XftmVjGt3rn%2FXxy0g4iV5dmWYHh0amvZUYfHIuaJWZHEHeTGsIHZWUzc8BmohCPMyou70tOAE7%2F74ugQabEDIMrmv2SbHomk%2BVRN1H23qmsij6s4NUDlOMVpno5ua8eFp0EE%2FRAM%2FAHGT82K2W4fL3qWTqM3jjPMkuTnbefJQ1ll20E1q7Rv4cDyt3WlmnmN5s9UPe9ntxZHYKuo4W4HM7x%2FYsJpmVvAMMJnu9bwGOqUBT7XOMdC%2FI2D1P%2BgxQ1qrph33aCScTv9jnA57N0I59Pbg88qydYB782nTLaLFWA4h6JEB2jDUONKUC6vNPa2%2Fl%2BVm9N9G6fxQSDdyxKw5P%2F9%2F2aGMZChBvRCxoccNUcNnzvjzfi5CWDcfjGpO9%2BkgPAfIJXX%2B3G8HyqgQOiNXbKXzLk2vS6aWoOhehOaEPXJ8SMJlF4wUeTGQxmKfd0smxxfPOC%2Bs&X-Amz-Signature=0b09a3795cc62d510fa18ae564f2264888fb079585ee2e5f104f583c99a0d4e5&X-Amz-SignedHeaders=host&x-id=GetObject)
