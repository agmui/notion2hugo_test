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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=30ff36bffda0703386623c0bf66f3945555a0d2e82e501ecad6508cbc0c80f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=7c36de62b287985d5eeab8a8057c1e803f2122abc1da16da8e308530fe5f4eed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=71c041cdd1d41914b0fc4dd3d5de2a30d9d42e1351ca02f5bc30384de3922e62&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=6ab5016d774b9b23d7f98a7299c9e81b0f997f8679ba8b8b2a6be162e03cf4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=8bef2d850c1d95f3c8ce8358c220c691b8bfaccb3f51fb16f73fb89df7d6205a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USW44UZN%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJa0kSbpFRbk2SNHx55tzvBSPIdw3%2FxTv7fOafXirIagIgAvUJoKuD6SYYEu55H4Cl6p6q3MV7RiQDXcTa%2BOthBdUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDCDMiStlBXEj%2Fb81rCrcA0v%2BS3mumb%2F3zFHtupZTPpXb8sKJgqxtvtnG8Rur2zrr6l4VWUlrFWbKDJZPu4tDHPfBqRriEeDwgZ10I%2FEgOWM%2B9cWuszt7n7M7MZ6SX65VGoBobJlOEpdQiSvubNfxvBAhczofJHEmKjuPr5Vo69o4my%2B5BKXd8fNa4XX%2BWy2lHBRMUKgsFqy5Nj%2BKG%2FUlukkyWFtkZ7NSVeTsk%2BaU4tAi%2BwjJrznR9fWHLJNglFXAnqTo4K3shebFukqTqnNrdLd2mBD2lnhtLDdoU9KrrSBXhVuYoS%2BTXMRup9dat8WP0ZDhrrF6aiX86bm0I4yPpabOE%2FNwnVi4Qi8J%2F3Zbvj3RA0PAMtbTj7uJBvLjFDSQWvUuVZjbEa1E6%2BGL%2FWeJmej6sZkHtPlIZxFFqjDayXUXIpiGbS33hHVjUPnRCReRQRDC%2BRG1I%2F1hawOpvqC5Vc8PRyiB%2FUI5VV6v6jCvsUSMlsAX0dpTm5qfPuOmFCZm1zn%2BG9YkejqNpTqSdGUxVbhixk0rgioFSVEsxUFPJG%2FRCBWAq%2FOCN0jyLr32y9oIZSl9VsD7fUgJ0FV%2BHNRy0JesQgAoMwKgkRh8IxTxtPBjsUX9wswBKyGcKZgqR3WwhRxRTxfQEvclv%2BYnMMr12sEGOqUBYFbJN3GR%2FPr3WzS6d9lDQuxtEJ0P5VPLAhECwx6XUveMSgbeIQqTxntNfspntOfKddTDjY6XJqXuJFpdD5g84VmRlkdpQ%2FyBCtT0wHTKZ3mGJLURGBAjvGTFvr5ieez%2BrzZFJs3m8ZKEKjQ7sovUpQ5doCD7nGxqa%2BdvTsrk69JzsrhIFNjHy6HqQs4rZ2fAjsofJpfeOZoVVSo3Vmnan8qQ7YWx&X-Amz-Signature=6b2e5745c0187d17f4f453a88a5b4240971719e80777b6dba2e10b3bba809ebb&X-Amz-SignedHeaders=host&x-id=GetObject)
