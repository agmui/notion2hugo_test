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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=93a9f0c14d6b664f19b0a0420257e641498f974363ea0955e9af4f49709f12bd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=61836363d5c0ddb2ffde63d33f6452441ba256987ce87384389f82ad468aaa11&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=85f5e389bcd098511b93e0c0d06654508c55879468889dd15c41f5b5a2580399&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=4065a56eb79bda4bab307c732172d24e20fa7bb64f7c0a6a44aa345fc5bd7ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=e3456d45952e029623cda0c57a6c73321217afaa814452f3c3127bfd974fb922&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNG7JLTJ%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDznM6nyDMa%2Fpkc316DvJNXjDhmwsEVWMzm92MWjnuflgIgaySlNgL1AsAoaf%2BEpd4rihB%2F%2FGzQToSVCaS2rHgcnt0qiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAKry8ukfOL5rJ2cpircA2%2BfuBSfKG7z3aQCTbuvfEjCQeYx2Ks4NnQ%2FnzKkQLiOG%2FD9QGeh%2BfHKlXpt6DoVA40QQ%2FRCdpQhvgZd7te8ZmLDUdCKdIZv4k1TJNtS%2BDGcDNMK3Dv5r1v8gn%2BJZcLz99YWHI%2Bjad3M%2B%2B3I6s%2BcBLdPZ3oz8RQjbsgF0dbCvEnH%2FDCXLJX4b2XgaYjURBzTC3poF9qOLViGrkv8Whyr6SW5PtRQ9ju7k5QOUx4bGkoULBp5BcONDenb1QcFiULlpthbME1G%2FOzXLMKaG3QSJZ0JI8YBYmqnVStDnahmHwhykYuN96Q7GRru4gaGCFK8xeTTSDebLbmd2q%2Fkv%2FewsDwsLiepIb7%2BRvJAfgbzk983CtVVLNfUciWsw3htWc1IZYHlmqhjvvLKL8u%2FerHClSFVDndOr5%2B2nnCxIzxClI1Lk4BSicGn%2FcWDYy3V0QlSSCJkKLQmjqEUpGtTvZfdtt8Qu1dneJ5%2BH1HqHTj0bkiZtcQveLw%2BYPLdHMxBN5djmBJtG7lmjRGXIwhnbp62EfiggT5cQbxBlq7aqbx2oFruCtk6LlnM3OPuF%2BrrE2A7W1TafySltvZN3koFXyBS4%2F6CD36fYEInmNQvRbNnDK35G9d9p3mfIpilUjI9MJmcy74GOqUBO%2F1D5Czp0S3TB2ICyotilePkyXrusHr7e%2FNCwxi9GiniOSF1WIEgy6tYJzZx%2Buvzu3tECvB1I1G9CeiPyFnqhGMGL8SpMaAciPrtqmRuFTVwEEbHvVz1RcP9ZhI4iDNE%2B2Qz%2FX74sPeJQYwdhpg1UhCo8114txr2JAY2rxo90IcQgH3Wyyimoboi9YYyU042i1AZefb2IajaDwJSbdGfgJ2XXuHv&X-Amz-Signature=59a864bdf46e97559164f1ad0ff0e23b04c0fda81f94f07f45bb97c47de6b57c&X-Amz-SignedHeaders=host&x-id=GetObject)
