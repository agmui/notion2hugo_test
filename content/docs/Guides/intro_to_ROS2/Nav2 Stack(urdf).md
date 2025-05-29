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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=92ea8399bc0190d289ea4c6c806fc913ad2489179e3ba90920e210d7cb82f8c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=f0c2a97e115767221a9913e595c5c7cd4edbeeadd48ce5512fb60df9127108f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=bcecb0ad3badf0d4c0714fec951573e6044e16f9181c5906e063fa6be51bc273&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=d2234fe908a44f49aff80f85cd85cada0bed5751286f5359896651516e640e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=c0a9b40a75bdf88f2ed4b12dd4a0c6fd8a64046ba4aebc808fc1601e0617b0df&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWSA3EZ%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqaLoQc2hRpKJv4zy8MhvfWJHtHuvfBSkd8yX3ky4%2FXQIhANpsbhCQjzeLPZ1aL6oDCks6qJsJoG8ibCIVyT8KO0sJKogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxiO2k5xlcJ3kFqQTQq3AODMd3QtyyE38JngQmA42udBjnqK%2FI3xo8le75NvxWdUAW2Yk%2FTkc1tVIwduUqMk2VC8eYqmYX0ilCBPs3zLW61xY7xNlwCGnZFPKW77Ubsf2KhxJJkG88yV3oxHOXRnovRUrgCQo2xz0VzjsuSgZ%2Fn3pBuhyzBLp0dUjpvMs%2Fc57YTroPPuMEPwsKW%2ByKixc%2FsDrAaLqH1si3DT5R%2BLs4WMAEnBbgiUZL6k%2F8DTP7WXKmYkofw6J9gRg9zoS0k%2BAciujVQGJC1zSblZ%2BdqWcE4cKFF8csD9jGpUFVPVmJYTmreIvE%2BRGgddQV3ygoPuOJUonqxGZNcdDqFzzwFAdmZlAnVAtILm%2B4xbZO61HXR%2BsyM9Tss5BW3l3QHntIEKPIYfrBi%2BkuPdpzXqEawOwAOcZBi9Odbfqsn7h%2FtkhBTbUCEJQ%2FznYDhWT9H70AQikTP%2FDLnefXl4LLrtqhO8XXFEoR9d1C2OPI5l%2FjHUQO57y2woWxABWg3QSLMdQ85iXv72pN9nQmmNlR0CCGuhrygi63xd8s3bZ%2BJJfWVRH5bqJ16Tl510ov8OpWhYkFRCkeY4GF6GXsroFJSQ%2F%2Bt%2FdN3cL2JHbJJBN8%2ByDEilCg4hG18EHtZvVWHZGUXXjCRsuHBBjqkATE5xWPxFcG5R5Hl%2FhM%2BZgAPPOFkSxqg7zZvNmB9RVx9p87%2FnOE0AmVhfIW%2FI09cRuDzRGK5zFSIdz9uuXhBcz2Ih4L5l%2BBZTBddC0Cldbf0pkd9qkG7%2FCAaJx7wDKvkz63rjf0WO8hjW3uWR%2FU9YoJqzMiohjUfOid3CM0nioTT9C11dxmgK47kvweyQaI0XSz%2FbUAnlIRS5lZASaa1%2BumVHiF6&X-Amz-Signature=c29112cb373c3701bbb68687c92a0aec240e4f45b59b28824756cbae45219580&X-Amz-SignedHeaders=host&x-id=GetObject)
