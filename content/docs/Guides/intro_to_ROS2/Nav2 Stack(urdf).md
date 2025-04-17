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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=036bb60738bfdb3adca630863b8450ae39dbf05182111d6ed1f2b6df1235ceb9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=83283297cbf16c0b91744eeda97e5562608005bf98e867ec26d8377fa29e475a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=365b513348663584b142b1b7f6badc3a6296728655ea33bae5a020e5da68d2a8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=6b5be147db98205f482aca722c912749b36f6b070ecef57238980f9b99a528b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=6ae6b02c9bfbc2d4fe2be4fc03eb3330d5d314da4ff66e95796bc281ff7d8748&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U77U5RXT%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCSqLAdXotWqWhr28Hgn9vOhOIdboBtsrtEPcP0gVYv7AIgAZ6h7RnOviPdqZASES9g0vSjSWoNyEUXpn5tpqE1v0Mq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDLcm5m%2FaYRSs3%2FXZayrcA96ram06EPcAKPWAaB2Jjn8IGvhEKpshAW1UoQMVjKdl8y7w6Jp3jOQ3b7O476zWuQCaEpnCxqWt9%2B9un64vYs%2FzLs5XP00DZ2B3QLv1NiAhR2ZQoWrYZubrRiEIbd9EOkLJiJiXg6WSYPj0YGtp8f%2BgenOLeRqJjKXgc1KjzqD2PIsur%2B3G9hRs5i8KpCzUwZS50MrnAm6sSmiWIWzFPOwpiQ8%2BJEbSFWwGTXipUt7hAqlP7HN7jK5JLdN62tPVVpHRmEsRP26CHuTeCAplrBnNIhN2Dluj%2FTpmWdsyJOTWe6yf9GC68cV2toYYVooQi6rmBSTYWCVg6z06bAG3rmrFE9MkBKYem5aMGUkEfo6zIpmtgVF5oxGCyU2RYbdTfyrHqlmmMkw8wOdgPUcIyD%2BLE2o%2FUWBxiSscTi5GzH%2FkTCDC%2F9DPtHmFA5a%2Bvn56v6lYlAn%2FNMeD8zyAqOArOMPw%2BpqyzZDjM0XgwJ2hJC5A4l7y8IgqCuuaC89F2OxE62EHbjQw361Q0IAPRtZOELXxnIwdhqoWdeXo9MDlSRTwjqkIdT01%2BX%2BDWbtvG2lChBdpJ%2FdMMqEMogDtFaYDCd4vcxG0zmaGNQSsJ9odzGZc3ubnuZORiGZeRgSmMJXKhMAGOqUBnT6XVDYAq7CbAT7GDvlWkQqtfpI0BjsIQSKNOsQ2y5skdi6O3%2BPFDn13%2FXDYhRmSXh7gTgivCH8vNGGDtvwWZvTaqlxh5RujqskIj7z1IGUdCKheqvqPfbTBJMAl%2BBGMQMBodHG7JE2lpFv3xZ0Z3pQpJfP9YA5gIouBhxPGGJYFrxVsPPoWaB3DkitKCbNDNg5lxn%2BKLFLHT4HWoWynD2BH4foO&X-Amz-Signature=8d18f74b5e4c6351c15017adae4d770c3136ac1e15720c5f65ab765c64b8ab07&X-Amz-SignedHeaders=host&x-id=GetObject)
