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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=cb9490ae988e8a93efb1c831603738f57f2f61ca610a2011bd9f98d606cf452b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=38d2b938beb1025bea913f1ccda54c3acdfcd16bb33b09ffca7b3afa5e0b2d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=71da0d305e19072010f260280da846b14e06bf7c6aef152d5b08f98f145d1b96&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=311b75e1f9eeb9b072175dd33bd1c9e17b3b98a63b9f1fc357ad38165dcd13c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=f67a2df0b59d45db3890f900b2ec046ca32cf8e23a7a0ffc262c5ed2a1d8f360&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z3A4ROK%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T131552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrk1wJzxL3OHE%2BBSohvzCO2ocoEIRtK2fbGbmT4uRcswIhAJIz2kLACp5HO%2FbOEx64%2BO2q79cBJneYbHJCZ%2F5b169VKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwLmjKxKyE0e4QEe3Aq3AN%2FtEk%2F%2FTQpNy2EHw0373Fv1M3uehPRjOaOigxILHaOlqhEBnY5UNHC%2Fwldgzl8jw18fYwyA%2FIzrdcb3ntNi9EuU7JmH7OL8gAKIgcWAnSAjfoqb5uWsJUJ5U9B1XEQHC3dbZO3gR98keSY6X4CxD73OVLZ%2Bi8PfMs3o5US7ni6tQE80WAUgdouttft0asUq7TPWponsyQ79ZiMZ9dNBRt9fxj7uGeLGWiAVQ9JXBM%2BdvxMhgzRrFlsMZJN1Dzr4VAbkzrKi9AGDwtHcfCg8BKX6Kb4dnX%2FUO64O0tgkth3S1TDPXGqT1magE%2BJ0ZaZ57Fa2OZ2Z489qHt3rU%2Fn9yXoYwhhExpbrh5XnvSqmYNHiaQ6U1UD9uv7ZdQADN7ibHaHJIj%2FuqGpxGGIzo6ChcjOVNK2DcnR3NLuQ6Xzqy%2BnTpvHGLMoC1Y7IpbV4ZvT1Fg%2FNrUh2UTCGAh70%2FIY7Nnil0dKbqZkbIeX5PnOPMpd8V0ml5K9QcUgj7M1WxfmlB0Sb7%2BM7zqS7O9IKRZg7pgvWKCLrQ07W304%2FEsRFnLOWUut4AaSXsiyciUixAV7Lgp1Fdb0oXYTzGcnp0%2FwT5VxZTE%2Bk2FbtOhsT4VLjomhg%2Ff8VbXabIZ2h4gWWjC2rqe9BjqkAZQbikVERDqjQ%2FXzZgh4zZ2%2ByFhL2Y5F9tBUDiC3qt0XGjh7e6KMCS6pzCin5iE3z%2BHf50SNxvRm6qZcAJEZrMm%2BQZTtUExbB8wq1yn1zP2nFcBHqmghb6GmEXtk9%2FhejuRefpw3xsw3TaDhQ6p3zaNDp7yAh31VljYblrhFPeuyCkYRPhkoArJv4D61Cj1d%2BNvW3F3cpg0VFsZ0LE0Fh5p3lwdg&X-Amz-Signature=5a6ce99434c3e297cb5604bcb2befa2372cbdb1656877b92cd0f75f01f3f00be&X-Amz-SignedHeaders=host&x-id=GetObject)
