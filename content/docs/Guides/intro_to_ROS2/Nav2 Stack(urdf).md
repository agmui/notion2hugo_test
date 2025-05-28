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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=5c4f427affda399f24d0c4fe7af9a7bc99957c4e12857f90d6c5b928296e2f79&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=00383c13d41161a5072242d1685ad8d69dc9f3c51fdb42e265d98b8691a6acbc&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=5549728f5236db2be66c44332e5c1fbe89867a48744db737205d29295485f8a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=70a1ad5e52352dd283e83c8266d34656429041a21f4c77069e93dfe9f37cc5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=1983b37122468a7b3a1361b0560917b4e7597cc127091bfe5de601962b853f93&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7QVXVB3%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGXHH4bVru%2B9uuERigZHVXNlGh02CcIcl92ULCqv4OerAiBqxKcg%2F0jp3HE502raUvJg6qv7L2GCbfGqGDaRjPnAgir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMlYObt%2BV0BObootG%2FKtwDgd3Kj2tZ7pjqr9h5X1Ja%2F3PsI4OcqyM1WFBAfyyoMyBcms93tAnKLApzASzny8LF79p6qq48uAWKWCb%2BkpR4Ri2iR9Fd2v7Lk1ywfY6FfSQo3004fXb3m9VhjM5YaKJJ%2BZ%2Ba1pUyV0IUHSeYl4Wt%2BEAvmVKvao25MJpvsBGmQ3FZ7JCGbJwsBaOPOt%2F690FKcfPTBEGCYiGFtn3XtQ%2BF0Zex7LOcSqWNsQGthzZdWLVSztX%2BT6SS78GwR8JQmUmdfjPIz5a9qWeRJeeO7KmoKad1qxIhUBRrgIUS1oGVfomf5Od38Wu9HZngDsWM3GFxhTVUgYqZbU8DNpvdyXpcmNAT6o%2BBRcyGFRWG36q8dhSx8fRbpLy%2B7VcTClqXJtdxGc6i2V4Nhk6seK32xh%2BAHwjTPlFyMSRAEN5BBmVl36Ik8fgZrIGcx4JO1KRZMFR6auXaFGViTBpwUfN%2Fa%2FOKIFtL8m4lYk3otTN2wIWm4%2Ff6ot8XKPWcOMBRX9dIvytVSsXrSQjLJuxArVTboqdLG0DqbuiENUxWzQY1pl1ftfsf1Ooc9C9EwwiF7qPzDFWndfnsCHDQzyyGyJJ016BQrKTxM%2BiXV2HcLEzy6zpVA%2BDysco0Yy1xz7SW83Mw%2BcHbwQY6pgF9vxl3Ht0xKYqgK%2B5sIacJfGQnFLmbIUmycterBlNLWkpEd9N871xNLgVeHiY10dAQkA3ugK7oblEiF1lZtnboMVTAq3GpSqcdw6sjhGfn4DiSbHCAG71fkyq5KhDIHIopW1Pk6XmV78rTrcVL26WtmCeoetatYdtfASpQlGNUSTusTS%2FBJSWbCUxtUIVz0db6ooQk8FlvaJBPMfXAOx5v7JhajGLG&X-Amz-Signature=53aff0bba4815dda05c3ec8fd0000d0be67f55a0a786a9efd1ce90d485f5a715&X-Amz-SignedHeaders=host&x-id=GetObject)
