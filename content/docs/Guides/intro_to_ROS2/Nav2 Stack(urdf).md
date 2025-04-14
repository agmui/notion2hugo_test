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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=d11c3de0f04d447c7a4198837d878d8ce7c3250fc48d6e2d19339c5567c62f6a&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=e2a2ce73bd8a02c6cb77097999f9c7fe87a00b8e6cf0f9bc96d41c07bb3fe857&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=5c29174cba14e6366631d1ee41b478b7bafc92d70bd736e012fadaad12029fc5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=10a589ea7471a8ebfbfe7795c4b188b47512dea9f68ce12d3bc631f504448b72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=e2081e9de65e2c00b0c184c0310463d0d924a2f1a3ae745525b75ab91ba045ba&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466367BYVQO%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T041103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICCphmmt0iTPWAHv2YxG%2B%2BPNia98bbiIU0eLOYV3jHbIAiAYvo%2BgJXkfQAl2NzK02TRCYMVkSVgQdTbyojGBWI3HCSqIBAj9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmEQdZX13ZMAP%2Bz20KtwDpapYXfOdd865WQ%2BVRC3Px%2BQtpXiVPsyJguSLNL5XU6dCVg7aVlQ%2B%2BAvbcryk37A%2Bx7lXPhF8Oz9AFUSDzW6SsaI%2BBWmehCqXni%2FHxOQlnxbgMPToYKOsXXQkr8jJBT8ICZSs5R%2BVGhZBaYI9YdIzhG%2FXM2O5DJBST4yUVuSh0lzIRUXZYAx71zdWFb26jd4GroJbNstwF6bQSCW7mxS%2BtwUgo2iMIAlDfnMCGq%2FVDRA3S2aqoyeMxgPATukwCeG4dETzUrVTWVhBJ42kT2Fh5TqSLuSiBORTYdbrsdDOiMFmDpLkyBSkMQbRwH9wdAJDIMrwJ9KiZHGAcSZEf6FRVP%2FJDbNMLZFjzdA%2FI7vUZLSKSBG3wjVsg0ycK%2FjGuIATIEHvh8ke%2FoW4Z%2FrO0GFND8v6YqAuWnq3j5xXbS%2Fo%2FXzRLOG182XinklIVWd1tgqcO0RZtpIf1yDF%2Bb2H2Z1ijy2GTJGjINF86gb8DLUGM6MUIRfYLV5hO5t4RhjF9QHh%2BdQEPpKXIuyqkQUtm3CDUElK1qg%2BW0AKm%2F8WMP9HYqchW%2FD9RE9x1JkgVTQq9Xg98jqfbUOMjLpr8uzhVTOMJ7RDBLeITjYbHyV8KgX78y1htWoRWlLT1qg%2BiSgw1ZDyvwY6pgGmObzx3w51148BNVXTqEV%2BTXbWzhJwZROqqARGW2eUtcmaYLZzXPR1sf2OhSuSZjIx0pHgb86aR3AMp1m67uRWtC0skA56CH0%2B8%2Bfb85hI0JsB2GDedtfyxdzGZJGfFDuy8jVtCBuuKGBhGKHKdHJTdkqjCImK2tSy4AcVaqVPQqtz1nAOTPPqNnql3tfPk5501BG%2BQdMNCMbHFCBvt7HgIzcmiJDM&X-Amz-Signature=c22d8acaf86ae9d40f2d4eea2c2b16fd1d3cffd344c49502c9413b781fbd9e80&X-Amz-SignedHeaders=host&x-id=GetObject)
