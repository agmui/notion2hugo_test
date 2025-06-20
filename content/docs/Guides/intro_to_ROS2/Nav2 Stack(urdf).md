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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=f44b96ba47ab5d8bff5dfb7699ca49dc9caf68161ca624ff7c7e9f66f9b6544a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=9f0846ee4d6d5f776a1f97317ef736f4f0e71ec85df2c717ec62a92a88c3180c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=05e845c1487ebcb90b7e74bc67fb79900913a8350b2a8598b210dc02f03df6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=2b2d182b6e70c5e876f91c740e0b1ab4c6e82d08b22bdffedca931aced58d83a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=c5a13db3bfba5848bd08f0dad6a92cb92929e5aa3ab1bf9ea2381c6f24be4642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNMQUNQ%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T081317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvNvNCM7WzRakKUq9Tilv6dtVOo%2F7I4FdZ2MA01RTWtAiEA6yLu%2FZMIYCpulOZvnxOGE4HrtXIt5GW3cT81VUkdzn0qiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAiJdz7XblhOuVu6jyrcA2N%2FEOOhZy3vm40T8VFWnOnOyUC1MrNFAX2mU0oGWSn5bb4PxeV1uRfEhKTFPutBmyLkRgUFutte64V4ER5e6PIppOb8foUzwr5V2WUebdA3SKINFFy9Vd7%2Fpvz4UWEN7O7P5FgDvyLwZ5k1d9FQU6L%2BTx6WketHxIKtI9UhHf9p8g19FCZa8buV0PZx%2BMRcmsQWH7JfH04UCxKcA8Vk8z5Foj1m3%2Bl9w0QEB2KCrBB9UjyOw1SwDHaEVG%2B9Rh7Rwq%2FRE2PgpiJ%2Fspfx4aJ1ny7ORV6WlYccLiKNKGRW1myH1zUOeaNG4H%2B%2Byhs74oPVixOAX6uoEPVJ7RA3TcraORBqtwimE7TcehGWde0A5pNsYSg3I6Ab2XNpiEIAA8aWRT0lxbdjeSK49MpSaiQLoC4ZWrcTzocFlakozeMiYm0ZnPHxSvoQXqAD2tndGOJIXE8Msy3YXoT%2FaifB4VWFVgsu9vmpWV8LHDK2MFPsZ6yu2jzFlkpvwVA%2FD7yByCYCT%2Fzfr4%2Fx141zXuB%2BvqrfzRAX9D%2B5rlcjYTtj5j0Ffg%2Fz%2BtHipMke94FgKnZICKeOpNUahIvGuK4m7gdKzLYOD%2FJBypnge44dmYtG54huGV5rGLwtSs7x5lSpy3x5MLK908IGOqUBuXcO10diZ66y52fi86Lksov9IQbanUD4oxkd78rQCYJ2xIEYp4y0uqIX6HICB9t1%2FLz0l00Y443lRGCRefG987ObUT3tgw%2Fm%2F%2FV%2F2u%2FaOAx%2F4BHt6braHcLAocftnm5%2BveUaWc3DNiDp6PbWxqMBtGOdx4gPBot2rQZq5yAKIzvUAo1sRq4A2fqOJI0dW21f7XL7mvEJyBfRKwylp0NFsK%2BeHwIs&X-Amz-Signature=42802b65dcc9563d7ed2c58ba06c2ca5585a16fd616a598cd7bb6de1d689d90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
