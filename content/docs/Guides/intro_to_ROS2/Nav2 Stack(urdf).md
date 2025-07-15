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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=3f97bfb5ed0cfadba752848490a38f5662ee02004ec9ef390327e680bd4658b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=699d14121091843572df8de64fece143ab52b24e4a085ef3b2b8a98154184878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=ec54172a8cafae3b37cd08ae6ef5a6982a825868be26d5546e94b8f7f1c98bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=fc47c692520e034bf4606110b9f5232f2f4afa4dd90ea03bb32c2e53a2506f22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=d3a38850224701017dc106c7feabec845cbaf557a9a55f5604fdc6022bf7c04d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ76A6RR%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T161150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIFSjnfi0vwAnL9ABuvECCaSC6NoWKdH%2BHLmqhhAjx93VAiEA%2FB0%2BPKM2bYPvtdcGFOeyHsya%2B2R5Ryxb45NWydWN058q%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDAMeKsCw6Jwmb5SU6ircAxrWOPl2NmQj%2B7Q0YBl31j3DzTU4CkkckPAXTdhtjz2D%2FL9LGqyxso0vTLZlxIsqvvtj6dk%2B6Gqhgztel6w3tNLpJAMWcWxEqrqalHQ0UH3nufn%2F2ZBiTELVVFYkf4veH0Ep9va2Uh0OEqE9EcE7LMiSmeqU9IJfq301vKOKqm9FDhYEANwHMMfH9bf%2FhAVRZ3vUlHyGjmt3m4qpuV3%2Fsaz%2B0%2B6g7bAJZsKPnd%2BVvvsXViBZiVQR71BbiVIjPYI5thtx3Cm%2FmT5AFmfaQYjELkSsJPymZrDMExyw5mBTW9oGSbjHaDV5PraqphB9HJhDxzigS8Si9STygAvL8leT1i%2FUjcrcmyVZfudQHI%2FQcuWah9vycgrFgTtCfVGJE3ezxO8KeLAKEz1kAboFNQSJN0%2B4axoO9yTT6QI0BfJKLR1DhqzCzccbSwKcSfH%2BA%2BzZ60pr8rJmmZbPSJndDz8%2FnfHNXWETNiIOPK5oAesk4YRkDnhB4cnxHvaeWX4vNTE2%2BvFL0kG5MrqO7jYOE2au%2B9SBZG4tBf7y58g2NW5JuoS2qfLmrvOFV2YKtyUZv%2Fs2927jKLBfkbaVzP86KYWi9EHti%2Bqd0YoXuUQBOXLqkWySvqBhg97XAKjY80FXMKrb2cMGOqUBf1T35DgLu5w4M2N1ocIYollmqdQj5dIwPz9GjZoeCgkqizSA0SW8tAP43EqAMo0fQM4dwEID02e8mUap2evOaJeFSNvRFC61852XGt7R5ZTFs1rW1Tvpz5gju8FCOHkiJGaH3oltGmXrzwbhn%2BoxBohNTrbNnDTJQrxjPzoYg0IgJ2g1XUmFs%2FjmZx38JAWkswYgwy%2BeDFSlH%2BWuoyQ5e%2F4TSaL5&X-Amz-Signature=212bd8ad6295976d76603af6054e09dd48b7d211d70f250958eb4a95563a0253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
