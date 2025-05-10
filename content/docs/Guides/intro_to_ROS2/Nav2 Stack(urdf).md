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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=6ffe159cd507ec0cb131b63ef3b22c44b49a5246a021f606f7c30655fdb75273&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=fb0c65c6c4a5c9b7092807f89db6ebd3ee6aa1f732f6679306c4fe9e39af850b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=effbda5faa9239ffdb09741231035149b5687ac9a0e4d43c89ea26c612f0b73c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=46966ccb02c62f40cb41b2082c79a05bd923197f834ac9f7be6ab297893c7681&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=1e7cec827e3f896b581b7f17752a83bb91a13dd8047f517132b00cae9d80187c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX3ELFOI%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUcMPbF9kNIRfZFj8YF9OTFZ4A%2Bs%2FruvIaj69F9fIHowIgHpcEPYADcOHqCngeUMK9cFyAePZT4dGIchdQOKe4zGMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ54I4J2N8zB7Zsu4SrcA8IDq9hQ0klIqscpIKaUkLshIPGdDhwSkOYXmHr128RGFvbKEWcdfGdgx%2FqyRNSoxR8QQI%2FxUglFV00x%2Bo9B02dcg1%2FxYxcXNXhAHCqYE3baxpw2mAxaHmQVlpvdCWIRbKqpu4l%2FQQHEPhLQK%2FdMwij0W4ZQgyktOsl7K4TFCRhaddaW%2BXqSKBMvHJTIeAag3JxxkhDEX4VVmqPNIwqBLPm5onBaDGGmzdBKtZDLv62zhAUZOkliZH3JNWwte4l9ZRMNyj1LhhesQQs7t0l13KjERV5fjFLfkuI%2B6OSadQIPp5LZP95v3JrK500reYxAbMwJxnhFk%2FaMHvcGr2jErGd7PdA%2BCqFJ2Nxsx3TcjMeacRIjj71lMQndVFnvH5OzVcKhNfLdlkfPbDr0eV4ZaVGR5VfBg6bb37%2BeGRBfAhDgf8b7%2FOt9YrdD%2BGM%2BZZPhlKod7QqC4xs1RCs87Zqev2Eidb%2BPRCE9J8QyvMvf7x%2Bs27QUTlG26z%2BlYOC1gxHDUcRX9rsenv4Qnb7HTm1%2BmfHnFvZK%2F2y73VrGP8pGFULg88po%2B%2F0mr2miqjp3kHg0SklNqJ3Pkx8DyDRZkZo%2F1ofC3o1INqYlc%2BDo2dGtfwHVSotA2QzDgMbP9wF5MJT1%2B8AGOqUBNoSw0twZ1iMcyANP%2FG9OPg38oUaXoL2I3DZne%2BlLWT6olnvD%2FFXDCfiX3gK0jYuTq19CsC%2BFZYrFRkBopDuIQKeeewcfjv%2BfPVa3qM0Kgg0qbvpa3LZx7I8yQB4g30GbgrazQdXC4LSZnEWoLNR%2FCQNzJbgHlcpyllW9yPCymcFP84jlUnJG7E7ySZWbAY3aEND61a5zDePOvP3cBaznTdqxO2qt&X-Amz-Signature=140d60165439aac9bc996eeb2433998d03bd620f4c0c12d8c2937194dabccc0d&X-Amz-SignedHeaders=host&x-id=GetObject)
