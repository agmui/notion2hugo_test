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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=66c138505fb8c59fc83d8288e33678b9c510570a3c479bdd8742a9380ddda31b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=49801fdaf0b972dd7367b871b253f73948569545df435bd35e6b6fa9831209ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=3d73c6991121a3e7cd6bc5c6349ed4f2a31eae164c83db0ca275304f9c563e19&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=25e70cdabc91b6e0abe2a648edfd111237f0cbbb20c862bfd4995eb64033a2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=8c99e8b2ebce9284f80ee911300191aa8b8aa4b6290e034db47ce4c18e76e282&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWRBIK4N%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA5AHjcHtg29gMkE96bqKG097ZjmH3Sz2UsorrICbhJVAiBhIXCFusAn%2FuPOQMWMa3D9LGoxAZK37YoIFT8869Zw3Cr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMDJVJaBlHGDbU1wmbKtwDtdVri51PycaLn1XqVgHX3UDEz8J%2B9IUFrBk4L1t3Tuff2dyH6Q2uiAGMudknnVSCFaMDZtL3vWf6z57gK5wiEZ79iYt%2BgpsOr4wtvgMVJhJRr58Fe1KTL5nb0QUi%2BXsao%2FKg5RxPYRek6WVZ7z1DA4JxgksAsdtVfCnwjasYOnut%2BQwp%2BSYFcQhcMzbJtH16t6OsTsOUv%2FT9AbflY8Iv6kOh4ok925lggB4OwuOShaD7SL8FmBys40gbKvOS1pjqtoUH6VCo0IOE0wmBwAOqhFwxQdCow%2FUDJbX8O62o3wDmqs8wuB0TNLp6rtAsTutaok%2BOUGWPCegk3HPktWlFHV0OpLrpxEJbS5SYmT7f%2B8CRnZeav%2BLOVw4VJ0HFO0uwC7WTRMDQF90juGNgVRCj1NCi%2BE4lSia7gyGvQ93%2FwR5Kmxmux%2BQivqxmR2cAs%2BQU9aI3ZOFpbSg05hKkgjIyrBt5yc4iAlLgNOWAjVbq5yCdtHE5E4sCtgBP0dVnXgnBv9%2BC2OIXQ%2F7kwgVSGOA6bsruqUGXSHXhf2JM3n3RfgflSP5NXa6rj%2BnFv9N3heQo5CkRUhGW0Ofn35MtfvHAHQzkSvx%2B6sNUoebGx%2BZKaXxRtYuvWoUJQdx9Z6Qw6aecwQY6pgGqnTuBIZk9%2B9jIPQQkq0TIj4ZOLu5zFf4hlPUj4pxZTfOBtofuE7jdDHWb3QJyPxFBw%2Be0poMH8jRIB6fQSVA%2BE26crZrsS5rqcNnth28fSuiPQ6Vlnab6uBM0iYf1TmkfyEGHUSQbiXQiAIhyt8EFCWdwP4EKFjKdtEKI31TQpByELy2QyQ9o7FVvLErqrPAyAVHd1GfmZzrCNlD2TacEM10v0N2m&X-Amz-Signature=5162296c7dec91d4b1bb842d6a40825dccccdec24dd3c94a923dfcccb9a2e54f&X-Amz-SignedHeaders=host&x-id=GetObject)
