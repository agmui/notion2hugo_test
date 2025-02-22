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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=e98597af09c1664f945cfb2c296df8d6751f436ba5c73454ae3f21323aa13c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=c68ca5e40cf1f042b51a6589a07c5d014b028da0c90109081d2419ab1ce26fe8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=4938f5bf4ca708183d6123667939b36e2ae7ab7eb7da5bb406c97a74ec41f000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=2e7a121b6552edce0b84b7d21652d705a34310990b2786265ec0142dc2525078&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=225ef0a62d9da3b04b7c216f8e3b8e522273188bea2019ad79bc4c1f07694b01&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBNCWP34%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSJC2Bp6c0wubaTCMFpq4A2sHuSJO%2FK41PPSOIdNbA3AiEA2hd9ABwBTgATHBHDZGSPWpzGZ%2BMGK8374wdTP8eCUH8qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNnwz5xF7Ifh8Zbb5ircA8TgOyLUrA5Byp%2B%2BhUUl7Hidj8ClvtHJK5sRUCu3aSHlaALBYZ9prdpakmYbw%2FAGIDesoMJSfcC%2Bz6yd3ukAljY9kz8XpGfpzQCIHefHbnY2C8qAqzCaKZN%2BQiR0q5rPm%2ByPxWhSX7ZcWE7SVKsU5R36LVAceqYOESZKR6DJIu9PzClmWhhrrCBTH2kCJLoC3%2FPqw0AbBrHNeATWRdEeBM8mEBuYC4ICELUPmf%2F2NCHPQ1TjLebd1hxRm7C6detPrxEUUDtp%2FQ0B85LJXtE6UZ9zZQrCe6%2BJa5KxVOeKQH2Ya%2FhvGWjWzZmLtp%2FrHU55S8L0JuMSIoHn9P8IphYJeBYwlnwd%2B17iqMun05mg2mreamViEjGglZYiBi97sAdqXe7AVOAfq707Z%2BFpDt5GPB%2B4ZKyW67fWDJNKiXGHLzEch9Sc9S621YSdGZaYxQC95MTk5FPosVNC93RNNnh9S28sGopPKC3fbUVN%2BBTD2AjnXvnPS7gXLPNcxW5hslZMxUGryWmG7%2FDNfZifwsY8Zq4X52lAsGj0COh7oPz6e%2B8HbACYYPUaVURAl1rTgAjrzGKHGbs9GnM50yEcR7aZpv%2Bby9qZuLyxVp%2FaaEHdWfnuF46m6SAVpmVrfW86MP%2BK5b0GOqUB182dqRGUJXOJbqgyVUfVYBgZyenXmGS2LAnGA%2B4RFVmeP2s8gDYEa%2BaZPDEin9N2vO19Rl5VUa1t93kSpPxqdy4ZC2e%2FvVav7oxqCOzuClZxpy%2FUEfEoVxiAd3Ws09mm4lm26IJuqkReg9i3i6uvglW06Op8BCuU0EicnGe9%2Fh7yx0thlvcJWIYKL%2Bsqu%2FEyX21QCclVQmsf%2BdGixrpQyy546mUk&X-Amz-Signature=f9ecef6fa5861b04741554d5e0d8fb06e4af0cbff0abc574bb9b7d7a99dd6a9f&X-Amz-SignedHeaders=host&x-id=GetObject)
