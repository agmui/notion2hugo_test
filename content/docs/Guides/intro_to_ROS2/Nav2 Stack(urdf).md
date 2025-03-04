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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=fa2c704dc7436c8faa2fc88b2f64f51f2e638616b4229f3ba026fce5ed81d713&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=0a7613dfb0ec6984dcd24565527893d6fd68200b3f0f542bda718dda0ca0689a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=ba54de8391c8d5582305c1bc005eb0ee5c49d86901c8004609f3fc56352645a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=03bc82a338ec33820983a4a4fed60ead52cbcf46790ad1a99d8d0854fbe19020&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=1ce03793d75b72ec6db83de25e98ab99ceb89b1dc111845dded76b3055c543de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NRFZBTV%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKrRf6IprJFIaudgteBkKOwPo6%2Boku86Ixmx2rQl3sNwIgaM%2FRDhB9afvcmK4NL9WV%2B2pzYqC6QiIkWLtCPBqz5sAqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJLsllaIhmBF7QLByrcA%2BYIO0K6rYiMC%2FfNtr7yKTzyuPq5y0XBgj8l2JH3lN53WM7S62ObVj7zWdVF9FQgriIhpbIig3Uj6yf22C%2BikqVsVELECxa5RZgy%2FAkFaOxJ6ntWzJ5rSPrdqrseD3V8uDInZQv83VHptmyUY%2BZmUs9aXhF2GCUVTyWI5y6k0RxuNtSTGk3rhb7JsxUy9lXotqXOMX%2FzyRc3MWVaiO2fCtqC4M%2BtSnCAKQAdNV1T%2FDbYfQi%2BguHiGmbm9qtPm0hKFqqGJ6NBb69lIwtax5OncxUiZTsnc%2FGpS30WFHIJ2sE9TkcOANny8U6ybX4Sz7lUekUOgU2mVvxv0LXBcY0T0J1r1OlnFsccKoN1KfmEN%2Bk1h7tIAHpAFNl%2FamrHkJVePGBoT0wopWlIf5kxEBvklV%2F%2F9kIW7JnBUQXVwFeOf9e3Ke%2BMmiFLKj5iIXpO9P3P35z4%2F0cD1a0TxifFcPVM3XqiKqia7e5TrFkw9qrcRNi%2FcancsyJYnWOHKbtmeiv9Oclzi3MmxzRjZsNGYDxWvoQT%2BlefQcswl7T%2Bm3fU9gmQ7CnsbNoKFMLu0vTUoLg%2FK4AqHCO9tQZgZd7IpiKzGVwZafFvwM%2BYI5vNNxtMdtHioJ05QM4Wnrd6DtWVMPqLnL4GOqUBiEIzW2A%2FnzHDPLXsmYWvnLivalLxO%2Fon8uFD8C0CJ30quVaXdPM%2B3ayL2NWynawks1GVrY5plcSc0BBwoMjbJA9NrnOa%2BigZVwFneraWakdnMmVEqxs8FjzxaGhvdCYdLIkaPjKGcHtfI9WYrDBi6nCtv6k50CCsKbGQuJ35RvEpPuTykSJnVoTOmC0%2BinhnqMX7Vx6UG4NCcQcriaypaJfQrNu2&X-Amz-Signature=4df5877b8bd72e8794dcf907ec5bef77bce70c6f2961976e2b6bc1097a01f8b0&X-Amz-SignedHeaders=host&x-id=GetObject)
