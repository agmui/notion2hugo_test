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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=b5cd72d87f670d31e6f9472f93410341fc66290a075fde6834202a3bcb5216b4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=0bc7bf9989dd19e3fb98f8e60e9e0bbc7a69976f8c6a10d03db8beaf958d5c84&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=0095abac66aceb41e10cc2335cf286f713736bffd1b4177a47c01c1c4001cea9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=66f87e6e1d5517855758304ea04c92d5769d2c2a7e428adccaef7dfc20f0432e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=dfba93fc9f1708bb2f207372f46ad25e780c04def1fa091b6b6881c1987d49cb&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIWN4LPD%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClhG6aWwPh4VT7qeSQ3sd53FhzQZWszTn1SsKyfgZ2ugIgd%2F7U2h5keIEJB11dMo%2Bo55rx6bLwT4MS6OkKLH8%2BWGsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEdSvjywISUf5PD%2BuSrcA%2FWz2uJPYDv3OxMzMjRJjf4bro1f3Fk%2FG8vX7Bzpk5rwgGu1a4e65Edz%2FUQm2mKs02zJaK%2BMdexczTs5oSTpPNnMCFoEcXMREHW2hjU6JeTJPYq5%2BCDKjjLG%2B5SIdwslaN4pGO%2BZLm4JVPlqfq6T724yJqHPMITK5yjWEnrl66poWoNa%2FS4ieo%2BMoS%2BIgQ8oWn7TSAZ97u4PA6LXY0U%2F0Suj4tU2pZXnBfZ4VxhO%2BA8mdUGKmChx%2B8QOuBkuf58%2BwM8ZDu4O7XpQ8W0sB47Qa6spK2Hm%2Bu7rfOTc8%2F1%2Bemm9jPH2usl65e2GeZ2EPA4e6g4Id%2FfPkPEF68ya6ti1Vm7bLIZs01oeViiqgRqeVDt5YfVEuWO5YfTuocROHWr04VNtVclBhMfGTi3Z1nAaF441gBDt0NqKl5yeYumpdsukOGiCmyhdfvduXFsKZeOkZCJfYMFkQ%2FSUPkzFAdTXcRws%2FKuq5wlrZqzJm0Fhg2ttPaL%2BhvnkBVhlivmTGq80rXEWbLUVPncnPEhchbQU7l2rU%2BIqFpxHtPPl5dNTplNg4eSkiHmZxDTFW2aT1IRIEEEJf8zlq38611dd1lV3o4ui6vk%2BACypSFuU2x4LpHmNuXKsJRzbYsELmjCqMPuxucAGOqUB4HrWdGbjy1HJUmfl2z%2B9DfzLjECh7IaytKuqsS21Jt2YtkEHH%2BVQET8iCgub8kmjX5qpqj1lGAsu7h1vhK4fWX9Ka9e7OpHMHrr0COCfpqpP%2BJ8I1JbfGQAD%2F%2FnvEknTFQTsIkaJYVl08WeLZmr5RK3xWMRfef32WbH4gRXltBftSqYV3htZX4j193kEIHhlGmFo4fzg0eMCiIUNryGyw3g2TE%2FY&X-Amz-Signature=263fa514880a5eff97337e00d02fee591f1fc95647117834e145b6f296152d46&X-Amz-SignedHeaders=host&x-id=GetObject)
