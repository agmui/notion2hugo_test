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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=3461858eb730b51761731f78cb2c8e611c8d31b444afc203035e5294a9c4927a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=eceba108437b167281740e994803df109cc7d6d4ad5ffd4844c6fdb9855f3f3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=2904411f3d3e73d749eaccb07db1ab5ae6319d78a614157bb4aa0fa518562439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=96bbad79a426908632431ca991e9c80b8dc1d516c78892dabce6fecf372fe75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=01e9a71e969c3dec41eba61804e88970958b9f8e2629097548f9a248353dac9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4O2LNQZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T004805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC66bV9dTUdVfgVj9P8gBAcf%2FyTiuYzw4klxcjALPk4BwIgMYi%2Fkf6auCPDZgH%2Fm%2BadpCpY9UKRZNI2uN8ztWdJjEQqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCQc5g7mqXUryloejyrcA9jEoQ%2BSmiHlKWwZyXddbFezOB5V%2BrS9Pi8AbGHAr204ZYRxiP9ew%2B4ykSfBc9UwO1u5%2FdilX3jfCfNAvANR%2BJAdsiFuNMN5BznKQzi1yGbaSYyOOutKVLhiOQyq47o%2Bx8KaAgcgj9NedW74cNMOnhyR3g4BxonfBoh1DPe90YIIJDs2RQb5bm425wqk10oYkz92c2p%2FGTdh%2BrSjSStYBYtmcMxSB3VXC5XWSWyutQOCRvfSALye1kygzFRWn1%2BAUdsVgc29S3laZvpTKpXrV7sAFfTkVfAkNPcvOBVKBG7%2BFyg9OsD1wHWGcd5ppb6F5z97qjN%2B5kVkJoiKfjkJgovucKu6lrn97wUvPDV1pvb628FtKvC9hclufomKXd4%2FRqc1R5PQDyPOhqmaZ1bhgdcjdpQYGYEzYeslEMOvBtlXDWGX5TBJRhmaNcORYb3EfGqxy3271gJePcTAJaUWlyBvdWx5tZHzcRucIf%2FSlgWc7zacOMtU0MGxGIMpediiXMzMucm9CnYy4ibSz8xHnwgi%2BI1zsm4C2wgEI7gb%2BA2hWyYiDiQEKIWheY4kPqaD41P6qQ43k4ce7O5rPlzmh7qXDO58KTdeoC6x1crW3KlftrRdmuaTGPWiJirbMLOH3cIGOqUBrblqfT17LzWJqxaJrz5ieLtCxSrc6garJISE%2FwQ12DPuJrDBxOi6kEsJ3bcm0K%2BUJEtHlaDISjoB9XVbUa85c6d1F9nHmPmuB9g%2B4p2p46taGPoJVJyMuNEZCSyWXY0ub2mrA7kAeLmC7eSax1AvC4MqWd0a63ABPg80cODTjkFhfZiS0UQCPAEBpcwMUDzcrjv3jpR3pjrWLHHlDmbvXZaK4BWR&X-Amz-Signature=65c02df2eee51ab5127ae5fb0fe4c0b3094f704a536dbd5977c53614c9e90f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
