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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=7b1758e976cfadf8932d60fda20dc813f3449ada866de3552a96b49fb3b07df0&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=9c17bfb847e64122c2efd0590d962560696d5cb30ee1aef8ee28043adad2b866&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=abe7a7d792b372929af868e6c0126d41e6ecef1b5dd50074fb995d685074d3d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=d99114b1bea929a342a42a20a179d6d339865f61824f5f6d4d6d11ece999282c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=476e410434d3a10a62635835bd3d5ed879c7ab20c54cfba4bc17092bba79a5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XLOYXZC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuNkV41yrgYqoKo%2F%2FgHTrra%2Fl4UCc5s8uzoOdZm%2FxE8wIhAM9hWTo8fm0d4pj8IqAtwwPGNM07GbaHsOBdztX11YstKv8DCGwQABoMNjM3NDIzMTgzODA1Igxyza1n3k3hMwVGmm0q3AMwv22I%2F7IQUtmwFBlnRwkuyqf8diflGIkwV9Un4fNSs1CMSMB7gTDy0WXYiUgv2khaiQT%2BSxCMaUacnQCIH5yUBwUX4nrjxi7Zz8SnHYKiuuKHlo3ibTnV4M9N6ZMyF6fGDgeapQlyjhn56QKOS%2Bfwpp2Nrmj6IwmHBiQgCh9eh4CySwPBoFG3BD8Ab7kOjttauiuIUC2ETdo%2FkBmUFPbIdaFQl8wU30kwXiJvvdhsbVqj6l2lxU%2Bkivn2oBHvCBzGhxUA7yLX3nBWbD3z4kYhcStUi38yQAZD0dOHayj%2BBw9ScuExz87A1DjvLlFNu5ym0%2B8HP5UqbjlRBCn2qKiHqd%2FNOpe8yNP77263if4R301gb%2Fk4U4TEwxTnuok1KbKH5beeTfuQ%2BausJMEr2lwbKMc5yBWj5gonXPnCM8Yusjba0Ck6pGvUkdGelhZacxGboYJ6Sm4CNpnYPRTmWEcMfrp%2FhhJolpT0hZNbn%2BHizp%2BaCFwPZhF7V0fgfinDiYJo78gbL3eK3vK9hcG4V%2Fx5rwToWO8UpHHC%2Bp8WTlysOPvQ7eHkpsNh9uLxX6l8plwL4VTF2grpTdpStlzs3NCbVl6WUUvvRo9Mc3xCOqpoq33ugun6AmaOcDDBGjDOwfDABjqkAUCSbtDPwmDYUBTlAn3J2ihd2K9nSpA8vi0ewqUDBSUVfTZYMU6YzbKzOJolbRdh%2FM7R7VxHNtWVHtv5uhdpMSptYS0l3pZkar6phPH0vJ7E8tPDvgr2ZxE2yOCZT7%2BwTOGXEmH1D%2FDW7jOUgSBaKD2NXNpVva32zaEGWqzuUrhty0H%2F0RCXXxY8mPws%2FS8W25JXvavNO8qkaXp1YPg4p%2FSPS6I3&X-Amz-Signature=013c05176c9b6f90360c7a0918acc60210eb5c52dee3f81916450d6e26a4dc98&X-Amz-SignedHeaders=host&x-id=GetObject)
