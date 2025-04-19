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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=320545d026cff1b0908326e6901b8bf833f9ef97a5fe74b493f9a96584a2ac38&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=bb8cc5a20e07822691222f5b1b656916fac4134427b553a9dbc42d42df97c275&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=5aaa339f9294ecb44c014b3c5e96bf6fd43d01a8397403c923596e86b579115f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=8bed31aff0c959fff2186dbb04becc09e99b7abf14e736be42d693e146ebcf97&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=e9f57fa4e258bde402008d7da5afb25115bc69c3d1cc6aa1a49093e9049a9138&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LO4R76C%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrGBMvRojwQHzTE%2BWJShyilDVY7nqFM5Cpvh3etYajqwIhAIvPLNR1PW1FAjK1kQTIh0%2FjdQ0GqyEqUrr7i%2FiDJBEgKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwyZgU5pZ2Ph6k79dsq3AMk1mh68Cwh53fgoxJwCO5pu5otsxurNtu92%2FGB9ck%2BLG9knb%2FbH6jUW7bjGUtUmXQJVrQr1RRJIjaUahvAnhrALmlTFdfXIPey1drDnyviknVguZc7jWPt7oMNfxVwZdbuU5iykiv7RgeV4FX8LW7Ow8Djb553tJ19BeZ%2BOWH01%2FLG1YbCZhADpCw7wj7mINovLLm4u%2FhJW5KG4yA30aKXzKTtWdotqM%2Be8wkxAuFj8HDi%2BTDywOTpNMFlIg3GRvDtKZNMtohZPMdLF5wuXVIcEqSyqWTmny8m0lOErLkfsyyJeLo%2FnXSmJWyjyYfJSpi%2F%2Bcic9fW5GiDH%2FdnYuA%2BaGs6m%2F63w0Xu2WXHPnwSUeFRgG%2BLz3UdslLj68ztqyaZ6JkuKTx3Xx5m2E7HKr%2B%2Bh%2BU6d6Gq0LPCMNw1DdfMsz7wBBYKAPXix6%2FHCZ%2F6X5%2Bxm8BUgQ1ZLlbNXlBcS%2F0t4RQhgpNVYo43GAwXlCCyzH0J3fa18qqovKNSXrvsahnOTHYBF26GK8A0MhHExWAsV2ZCXp96bioVl%2BurlCU9cnX%2BSKVyb4jCAZxB84lotSgBJU9rAEDU6yTYjDAGyHCBEScD7UVxw34dOAolXUuvItIXK2L87QyvfU24oOzC9%2FIzABjqkATgc6QHKfbgM3tvyu2trhr%2B5uY8ZJxfJDFtipzYw7CChBoxiCTitx3BEbzUZG867YFjclupjnciSJysCkdVNMSan9oBYTtBAft3%2FSNO6nmCYbg7wRweWq1H7RPPjPFBK6jaM%2Fy4n9dweuG16MF%2B5Dbz17O1NaPPXXJCZhF9%2FpwO%2BkB%2BzuyUzAihz2mj85ANf0BMmGNcjEBOHnJfpKXhkYXjua%2FlX&X-Amz-Signature=fdf3883ac53ff1109ba2e88d5ff8668685a1baa5313fe0d58aa69fe708faebf3&X-Amz-SignedHeaders=host&x-id=GetObject)
