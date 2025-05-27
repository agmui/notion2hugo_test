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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=52ffb69e2788e1ff7e4955fee3748a604a741797093831ba257a2647fc114758&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=972067f376da19c211989d6f319a1eba578d48b3b7f1a466b273640a3576722a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=f1cb1d91b262e79691e665046f0a9b90a45cb522efb22ec323a80ae5b2673f17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=904cac5b7e5d924b058b3e4d2d9f474e307f1ea86bb3217f509a0ca9bfe10c8e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=7192520f83ce7b9f5ef704898a27254939e93109b06d21e8c32109e6206ca0a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOQUQIEJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICm2JHtUT3D2IcDM2qg6uvJdnUqbpjUNKQ9%2Fobwtt5aJAiAxmWfGBhW3O4HAYpvtmscDzh1CmPmYczmymg5sa261Iir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMRFCTlQJYivVOTPeXKtwDKtbjrGDZYeE5eujyl%2B2QHF%2BDK%2FYtjmCb%2F%2BBVEppAv6GeYBCxE4aPIXB2k5L3FIKWjxu4AUnhppIecsiUY1iw4M%2BQHiYEwjfoIgg9hKtSXaL1vdP19SNkgf7OtHuYFk7GSKvawMvgHC2AEA%2BC8mMkPCnFfrbUqUc5AOvhbcwSQorTtZUoRZH33RovCgxVPZukRDxiNmJejjyqoAbgFukxl6RyRgyVncF7TGfwMPSfQSndxFlzyrUtSuWxqBt0ozsXmqKafBLPAUNAdvFVS6vRewPTgFupj4AL4xhru%2BKljzjdOBh%2ByNRf%2Fed2CBuza6fc164tHFgEkT2m3%2BvfNiNP4VJ%2FXZAkbXCrXSxBuxK%2BoQHakz8mLhBcoX1ewuwIipxwN908UAuk1sPiSu2ZeSEcAhYAsfweUGJm1Xdgf5%2BRtIpdrHxUSlY6HGl1nXPa8pjyGxPed6fnkuVyL%2FxgAZMj5KcEJN2rQLjm%2FqG%2B2394b7TKFJ5eshABf8Yo9J%2Fhsx%2BUh%2Fay71r6fiL29obtLYdERG6FP4V9tHfiOfUNaCYFEqk6ElArVPWBMiHcKOBbN9K0TZ0R0m1%2BEcJ%2Bea6hndvix4c560R9NKkUm7mQqc0475IG%2BbYci9fl8RKt0mow9oDWwQY6pgHyX5lKc9DBHIV1mCCX81PVdCqGqPVzRPg6ATl1vJ5Kg5qHI%2B0oBmkUfEm6XFMr1%2BDHRk%2BhgNRCHGvDm5kvr9VegQFW8flvefpjYCVbC8cvQ3LKEN%2FWNVFJl8Q5z2sEPF598z9Bv4AX06SND4knFtaJ%2F%2F8JrAWfVukc6LhgS17bXGM87GNdn6v9o79hWuPXxV7RspqQ4PuiEFF%2FIAwJP3ryliYa9MGp&X-Amz-Signature=b633f5edf32a75bd857e180449c0943a3675f6d421275c5675aac2168d08bb67&X-Amz-SignedHeaders=host&x-id=GetObject)
