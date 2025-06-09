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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=89a7da5aabede0dec35c99ad97bc9df0d4383c7669736005a27ee4e0f97851db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=bf4cdcf8b48d7c3c14ff5700e2801c5b354a71d90fff5afd84c4d31f250f2f40&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=c1e60813de8fee348c6b8bd011b12c62e417bcd0fb9f989acac258eadc514398&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=f8eb62ddc09cc132fb57fab1430583c49d5aaa4cdc775eea323ba0cc39963e44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=a94d4abbef43dadd11160eb6a11dc7d89f63ce906e6f6642c1c6945fc0f20406&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVATWDAE%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T042111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXUoTe9Q7VR5DB%2FsjYLRyTh%2FAY0ZNG8WbG%2BBMfXsjBjgIhAL6GQdrAGUgOngeqgAuQlPX2srps1%2BBwY0nhN8TKvTJkKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4TrzKcY4MZkA6uF8q3AMHw6hUTe9BH%2FNxCLNF0vBOpI1mewR2cMo0Y%2FpARxrPghzBI5be9cYBmpxHrDhOlTjCB7wZBHRgkHQYUuGcVB7DYttpK7f%2FDSGDWb4uv7Mo%2FAmLxEiLN%2FXt7%2BLt5wv0LkaN11ZTBs%2B5lPKNb9VcqD%2FTe%2B8Wxt9aR6m%2BLLtFFar5p5OCxuRVWGeDCG0ROJDy7aZPI4qP%2FGIdWPWcnyEYJeuTZEi1nxKoKfbGZW8ZCNV%2FpzbD14QR9m9DKT3ACFcOy9RHIA8cYotWYJgrO4Hb7E6WoRSqFQCChbvCouQMwHqbrAtA1xv%2BMaA2BKU0t2WGRjf5SrlfLGiTyesn3eGqeC4wSRkR2Qi%2B6Gk%2Fsxol1TCNR6hXKnwLVbpyJh3D5p2Y4Pk28A2Q0vNqA%2B8JpWXhg7dArLCmzNCfLZ9n0mAYjDmosao1CI7Pypfb0tpPcAVq6BSOI%2Bi3sg%2FziIKOERSkV8ymXrQb%2FOxImSRYOP9C1CZ9UThgEUChbNT%2Bud0ughRPzdazWke37bOYgp2WRDFMS3Fich55TzZsrf1vt2Gk44fVaMWaCZmun12zKWwkkJ9RsIrxeeaaN9odKvYB5SB970Oj%2FCr%2FYon0dUXCL8TJ1FHCEjHnRhujfLR4tI7jMjCUo5nCBjqkAcMsCF80YxQxawZOgRkdbUZKdBJSBpjszeFSVeMXAOP%2FrtVa5n5jbHGwh3Ny5SsIg5cqgQunGE9%2FopKSlug%2BVAFueT5xSaUw%2BgKA9hkrj%2F%2FOZ0hzNlLIMPMOQ7zJz0ne5M8zh0X%2BAvqZ3hpFrlsn6xQ2%2BbmZBapWQEXj3JUG25eYkpMYE5y7DBF7Uz2qTFmRQTQ76XFaBsbVL4W%2F8J9y5yKCA8SX&X-Amz-Signature=df8a1610bfe0387751d91a8b4e572cf41d4483fc16d2cb2a7fa42ef0f5878edc&X-Amz-SignedHeaders=host&x-id=GetObject)
