---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=779fc3444034c8dcfc7ee0231bf5106801af50a235214fea8e1ecd7a498efc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=40ad5f36def71f64a19c4d34c537b61f22a4312ddc97293d0b008ab8216e6e9e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=39ba5b12d16767f13286ef9b4b02639c17e1e72c47324d4641da5c6a821a07a7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=726fb26e36446fd50c013faf112a37d324afe899bd48e1812172e123e6d8aee4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=6f4865618b53830248b998f667f1e0701cd1cd0600ddeb753c607a1b032083f9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657VWVEEW%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T081018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcvZc2bXsTbjFFV%2BYTvrVnIZci6HnvhfCDzAUkjsbDJwIhAPyuvAJ%2BRSkpT482zEA7LW3R%2F9UzfC1HmZ5JPskafROZKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWzhk81IbHWc%2BztTUq3APKrQXteG6bE%2BcrO%2FYPceCOLwvRSudOl6exoO4PdK0KetPTaWmw%2ByrIqsye2UxJw9O4UftFA4DK94ldg0dzztihn1nX%2BVBXJQVaS0buIjKoKdZjQbYSJ%2BXO5nUiYUPX147CEdqawCNOfRCu6oY74%2BFgaGGVnMC1h%2F6P7GazfBmGkv3iQvC0FkfsbH2g%2B3JNfBS0%2B8Z%2BYwbgrwRTM6wlAQE6TinMz8YT629Z36w4alX791eQ3J5V3dIJXvXpmDo%2Fh%2FzecgYKImlkTHA1ZqE521HrWN61CbZKCxNlWmuV8SxaiV06QjtzMCvoYjN8W63wlkK8569iMoWFQU3Wp8cc8UKI%2FLQENuV%2FOkU%2FozpviP7Zm0Ygp7Byf%2FOrBCjkthQ5FXqZEaJonFUn6VbA7ZPS1O6x%2FI9XkrXman1slRAoo3sh84trhSc4%2BrWbG2WVj4BXNVYOvBm%2B%2BPGpHGZmtoP0mEqwAo%2Fst40oqnI6R6XHIfdkE%2B9StM9vT61%2FYQeCgzGUg6MwWlkIKHOO3YG2ZTVB%2BuZs1wyrl8TNRPJI6HZycKw8woIAY49%2Btq%2F7blEpAzyhGZngzu6soSwBn6lCYX4N8lQImg0ucz7nbCZqyCBQwoLM0rNCTrtD1beBYPP%2BADCvr%2Be8BjqkAbn3IebXlR2GQT40c5PCZbP3mSgFxo8tbwHnB%2FDZf8CQL%2BzKrgLKuJw0F%2BgPQPj%2BEe5ATFXpTc7J4QYZWbO1xK9cAWwTSZ7t9EyW5I3rUzsHizKNAp7lpDemrQWcfle%2FROtk9mMQKs2OUpLLQpBYc5QKVcE1d37G7dXlGeFVZBvIqXRCfHhYX8SvspLtNSe%2B8d4ZI97ibY131%2BaLcnrp8t%2By9ikF&X-Amz-Signature=9aba3912f2874a12ecb144e6250524e9340d5d82087ab251d049e30fb4fb36d0&X-Amz-SignedHeaders=host&x-id=GetObject)
