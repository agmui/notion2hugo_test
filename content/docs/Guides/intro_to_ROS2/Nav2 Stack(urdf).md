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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=445b4928c923e9b25ae4b940c6e7cae31afa311e6b92cfeaa60a067496dffe78&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=ac2106e55ea984407f9d44698b87327d58379401e64f498bf3a5683a4021785c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=3998d72f381300baed7bf4da2f25ead96f5fe2a6fbc1de18c84b8f158310617a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=e4ad478334188e99e45db7302cc97f52f9112c383e647934b649db139097c091&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=8cfcbb0eb727379356e8a2f593e0a7e54939b7ff6f68a0879957162b1732bb73&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBKO25Q%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T121616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQC870Qs1IPPreqQspEMD3aFxP5UdzxmCBVfM0nHZmwrFAIfMorLP5QfvouM1no1LuiFhEZtmOLnal8QxuhS41fuqyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMfRN6RLduyqzwoN78KtwDfB2Ih0Wq3DbQm5dVqd5uH7kCWO343H1kwmf8MZrf%2BVOUMyVAkiM6a86NsUG13PDNMBYNfkIpsWT99%2BTCwWu5nvUl9ZbXYolK%2FPwCsKRINQhv75aeAOsoe9vwS%2FjGJtsojjj%2FweWDF2AHIDKR7MvKuUdE8mQsDL9%2F5Gv3zeOCFyTCHCQUF6zzh3XWweE3o3%2F6PSOj%2FLqeXCnWwoKqIEdhr%2ByC%2B9LKQDrH4bemcx41Z94fwUamC5lnLZUhp7KK6FScvAAd130yzL%2BsFKO1DD7Bvf1DeMASZ1PpsGNpM8JZUMW%2BgKrRhSnTqt9%2FPTo6k2mLZGjHK8DeAQ3rTbXUN8wv10qbSiO1eRrKOzM2yoz1nLX3jBNAUkQKv%2BC5PdtlbSt6tYdA8QcXP3E7z3RFS%2F43UwVhE4iXgkJo%2Fe3TOnb93MTZq94uZEP7tX1CkOPWuNH4p18Ft3WBS3SQ0bNxme6cJc6AmIGbHO2EpbtEmTLgpNaKvIgqF%2FAHc0vb2Sx6oa7R%2FU9CZaSVPYTNScpxfq3gLe4st7ENyRgK6QxDnatTXw9gFvQWN%2F%2BQHAGsvVgQTdRfO2R0G3JtCp%2Fiy0Fv8hHPd2Ing6nD21QEpGr3qYu24u7s8BGMxDT2wvQ%2BQd0wx8ecwQY6pgGaSuxOHjxANXvYAD0ivr6s1dkQvuwMHmmMTnQ6SlmSGAq7jaiSZuD0gccd4zjinWSbkNAPK%2BSzVcGyaNV4eYbr77uHpmkUQih0DOzNNMEQuisPQdtVYcRXVUJVvWhfVys6aNEt4i2F%2B7WXH1XEoC2l%2FurEL8LJZv1NyU%2FYhWUb27weNGX4MR7442P4dgnF7aSA8Goy8zBghn88nHGrVDWLKe00dfP%2B&X-Amz-Signature=9825a20999f4ca6e1dc3f269fac6eb0e358bedd252f6e7d81bf028a909a93aef&X-Amz-SignedHeaders=host&x-id=GetObject)
