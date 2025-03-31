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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=f057eb9a670c66da979f9cd96ceb02943bc1aec81e8dbf471110e9b36f8f66b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=b14aa149278111b34813883c1e5daf48f0e9a65ce4d924c5f904b8097dd51b34&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=57b4f2f1eaf396118f6de33442b1bc7b21807c3f9debab8fe15490fe08954a87&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=1978058cdfb568e09080f08835340e21a9db9ecad1618bbf5753142df8bc9b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=58fd33d492c7c96a82023c2ee6088effdace6a5fc24f9bee08a1bd948a4937b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOYWMCR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T090949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQDFz7Unp7WDMlU4e1dCV%2FGEwvopiXTo6BcdyFcRXpbJcAIgVsTSawP38%2FYbbO3AVxlljIbQRpiuxhOnqbKvhEsY5gUqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5LO4tjZYrG%2F6j72ircA8xyWJVBhqZtI61nw5WCf%2FmtzGclq69mGaWodLbfDD85HQMH5bnEaVjHm7f4y9qa4rNqER4IKlobH%2BeLQms%2B6aDbojB8R%2FV%2BifuJ%2B6wjeh%2F2LVkI4Z6EZXzkS6B1ucHfhIaI8snJTUL8LwP%2FHwFrbb2Z12ddHbrOmhdO1Wb3UrNEcxqMH5POxJjqqhIYC8JCZ6ivr4AjkL1SysXTEklTCd%2FbD6%2FlT0LHsIIKmeclVu1gwlk4N0MaFU%2B1EzIZ1o1OsMh1gqSwmjOJkNEYrGK4eWixze9%2BjkscARUUqNE5HvOgSYBJJOYpLl5XzE0B049UcG%2FR963VXt8px%2BQYCaMSitGCxYOiyP6AHSrpq91H%2Bq8Lfg%2Bq1JlOUhjAxDFLzCSvYF1tkHWKSjeOWVOnDWb0B2SCFOzVd9Oayxv8EIRRi6mLabnt5UhIp6QVZiaOX0krzGlzEvwcazovDkvSx4GlIzyOWSwrESZmNWg8BOFEv56ZZsX8y0NkT%2FwEQzSBBGhgLBa9KBu5opJBsXpcb65LH7wIPe6rotmLX3Pi1X8MREtTtGyy6ZJsm%2FBdqT0GWSB4LKENcIDmE0qRZwOaU1taSBltZRHbvAdRHOuswJw%2BRptKClJsFdRsZe6I5GUlMIfkqL8GOqUB7cYELKN79W7rEv5fG%2FEXalHjFaPqZfpjakNKee5Oeg24OAjNUjIOjydwOQv1%2FRyAwMwI3AXCZG4s0QN9TCXdSN%2FhDVCBacPIQJsSn1mNio0elEagNwT8afCjrTJ2S9hvVr8Q5ZLTwr9vgQ5r3U2sk9GkglalleeL2x%2BLc1%2BrqJmkRki68Dk%2BeCOWROWxEk4TLaLUez7ptdqs1lwDPOP9h4NtJ0xe&X-Amz-Signature=0872773253246e6157d3425a8f513e6872c312e799db4429ce0bb4e1f50dfd04&X-Amz-SignedHeaders=host&x-id=GetObject)
