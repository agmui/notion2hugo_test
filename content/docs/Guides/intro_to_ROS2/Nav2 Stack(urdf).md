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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=828d11fdf824f604602e5c0828917434da81430eac27d4590d9bd3ae241df397&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=5298a73abad3b3e24361b36ad3cb52e599a687950adff3f3acb2330d17e966c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=df6d8cc4a9f6225ec16596d29a1ace151fb34ba0d55a7be498d271830c261c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=951d831cb3207c75b5c21745e5c6946044308782b3190da6ef03bc8ba6d941af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=bdd5abd27e3da4ed71748f2280fdde58dce0913846224bbcf47c79fd27855a21&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W75V36YH%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T022339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7tJhfF7LoTOpd04LZGax2Kb2e0WeoshXGu03O6RIyoAIhAP0wm2nX0INwYh5i%2B2BEahnObY170w4%2FdGZ3gA6beJlrKv8DCDcQABoMNjM3NDIzMTgzODA1Igzn9kN%2B8qbuPl6aixcq3AMKmAWY3%2BZjg0%2BL5nLOFeHde5w7OQ1cI7HvH2RKB%2BVLMNfa7l2KDHe0tS8LBR6qkxYZgr0%2BD8ZxedIccDLjngHd%2B9y2qw38JYLm%2FXKdorXauCpc4nC4PtzCJyrhmeDd7AZZsR8nng2qVtKpOFZcH2LRMGOMCjtypaOi53MN0TpL5P8nCj0wgjACBqvusi21xRDDgNxh1RW9cx5OiSIl%2BcX87UVw6TodszD%2BByQ%2BbaLMQFnd4WQenwh%2FyEQZKqRD1PalYRCuupYw8qIC8LCjR5656ZCODjaTgeAVEZnABJZZu6mJS9W6AQeMv8aJsmZiLDkAcxCksJcOP3OVbNOxn6lNgJnUfP4qkqra7lgK0u89AZMd7IzvTrwgWHTIpNAXqW0v5T0OBQ79VE4V7kOcYLwV9PlTH%2B3F0jIRhXF4mvqXKfFPHV0%2BwJ0IwALVoUVlxJn7IZdiRZ6Mp9VgqG1vHglBl8YpZ9KIxGQDbECi3iRIoeRyid%2BcMdogOhby2j3WHmMCAag2%2Be5YAsW4Ya0aQ%2Bodm1kZ9j3qrFwW7fVFM6BLj1FjRyQlLf7sgOIRbJRZZM2aLI%2FEgT3019prnz5TISfVcUGuLlSDNVzQx0ACHL3Qc%2F%2BGPWJLDH6XNtY9YzDkwsa%2FBjqkATy6eT9Yu7F1DMDGg0ruVYuLs%2BsI1BJIOV1U%2BZzuPAreuEk%2F%2FYbc4j3%2FMTUzTieGOtPR48N1JsYDms%2BoVGl1kK%2FHhZhxgmL8VCflyGOmhtFKCHz0gCw%2FYl%2BOLHjqj65aKU3vcuIM%2Fyx1iJfM%2BnPERJ4zj6kDq3exmrgGzGbAKoUZdwop8fqtL21Lvwohiod9aW1AZ%2BKiaRK3Rc%2BiphIypM3b7xoz&X-Amz-Signature=18095b45522a881337718c1c52ec3ea54cbebd9979d5b6d8c25f3f152257a233&X-Amz-SignedHeaders=host&x-id=GetObject)
