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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=48eccc3cb76f3767be3dc31d3470d42f48d5d86399e4b138d8873601703927aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=ead762e116499071b97bb2daba056fa49478d1ea0b5b3278b86732643db55fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=37497af600c6a3b9555c3c69091f61d39c0a066178cc4b2ed7d56892bead1a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=0ca54a47a76d0117a54e57e5d91e4d2b2816efa111a7ab8dcda60a0e29143beb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=1dfeabbdd81ce7bd946ab38b10b406ff6be4a147f033f21e6433731a006869da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YYHK7DL%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFT40rAb6jI3NtC8AIp8cwFeXjZyL%2Fp8pPmhkFwf0Zl4AiEA4mWvbSqfJe9hcGkIiwJid1nTE2Tlfk9AyhOkkNYnjJcqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH0VmxtwHw8KRy3DLircA0x7mYLpeSoLNhcO90vFgLzVI2U5QFZJI5xJrPIpI0PByKE9T8WSh%2BEFhcMkUoGggTT6vpZoFLfGOTCPjETXQr1W%2FVPn9IvNHbBjWV%2FKscvMlElPypDBKv%2BRTcgwcCl%2BR7x8r6iaIlOBDd0W%2BTS1n9TCYkgpRFgjmHmppP5%2BLeycklCmoO9GDRDHdlY%2Bj%2B3yXdcR6s9ry7FQZz%2BQ1IoJDfJJEr0wO05mQdkmGRlaHaqWjvB8qlLND1gi4QxeHsicWs3UQhvEegex7zLE0%2FDZWm514%2B%2BT9Mo7tmkzLmGdyvv01sZwgdUOnXBerrlKYAMNhwgvZ6ht%2FNZ0vvIagYUtTtSbMBo5aoQjdGW1TzQ361hhk4Z7aFXBkrq6BLjHRe2ffYFgEQe5mboa94E1AKQZm1a753CulDLOz9IvLbATlbUdx7hpOwUhHjcedRIp%2FbM%2BLD9%2FLPC2WVjZxU%2BrUUu67Q%2Fhcy6JfngMTZ%2FH3qn9b%2Bz%2FVXuL%2Bn6nbjVIOiOk%2FpzlcMLs6OYKCnDRpu9h%2BKAUtQHhJsQdxHJeV7%2F6DLdAhH2knVF4r20WE%2FsIaq9HLBGv6wbYtJnmSu6GXJTIEBjsZlYLHkZ3ZSckXiMdHLSLscEzZwXYA7PDHjxXA%2FD6MIvDqcIGOqUB5042FM6bWZM2N%2BxrPEU%2FPVek60YvqcLyj2pEYNY9WySYOsuyuHgnqEeA%2Bw1fFDiLDPbKBW9TmubDa9vkvdTSd620wWpxzHIgSTw7GCR3Gppuq6s1RGWTbHiZtxniItSCkYf4EUJk1j%2BM05ig7F9t0ExAQonq6mGmC4GZus945UcIEhA361CKGR%2BVXlppcp6k8X9D%2B6%2FMLNfjpzc4GTeQrNnuKmZb&X-Amz-Signature=1d868fc0a3b73da63a9143626f1225bca7927aa4b2e0ce7890e2dae6e0d88a97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
