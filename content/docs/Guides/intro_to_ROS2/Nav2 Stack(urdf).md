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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=13c638221f8f48a87fd4179ddcad3880c6ba48e7936086824631b2e28ab63fa3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=fc9b877a9a33845ab74cf791d918e8f925a4b8e985b95b9ae6bd1e9e3597c204&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=6d0151ced9beb3b65e480b261191757cb49a5e19ccec00aa668883a1e500f983&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=467bde654f4a37d33ccfa1063ec6ac477f1969ab4a29ccfdf94bbdba7cdff203&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=edc1c4f7ebf61a9070c1e5db4f707d540639530714f286e95f9ade349e2be62b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3C6X4D%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHtZHUIt0diYdP%2FkjjaVNIRIwkOqoNiRhIfIxc40Nk3yAiAjI%2FEUK19BCh3wJpAY92p1Xr%2BmLmp%2BVs5Hr8z2HLLufir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMDWEXVxpMa8kU3%2FQ%2FKtwDfQWU%2FJbpEawkB5gJUZbfALt%2Fd%2FLCUNJo4hplKP%2BkumGMrFsggeRK7kXwWEX%2FGH4ViSLseczZd3prQ1RhjzgzIAVv440vrmGaxgj7R0OqzwOkcy4ARclkqka9Sy88LLJ61rW%2BkqtY8nrxz3uk%2FScdE72Tt8v4%2B3GsCSpn5LQTtdCLMakUF0x6sMuLav1bXMd9TUy8TEzUS%2BjwccZgxGsERzJpbTZDAPFX75pQVmW0TEbv7ioa%2BukkZ786GTuAnjyywUUmP8CfKa%2BNj1S1veSlqcFWHdZY3TudIkn9%2Bw0q4tIYwDXP2sO2kGWypuJbKFIaI8%2B%2FI4NPhQ13MveVqaY1d7zDwghe6PjNPqaFoGyMRHcSSmzFx9U5AZVgZ6MuplIAPZ8mH1mHloKGvc%2FicWYGpY4zGnLP3pYGDGI5YyJxNJW9mUrMQJL6IAhLgfShPO6cC9I1sFeMSEVXt8OgtDH6MYM81RKkChLqZ0%2FZ7CTbR1e5T14KhUaqER97eTyVZqwg%2BKmmwsNdJbk48U8ugD3V%2FFiOV%2FoLbCCzbgtoQs798CI0HXTBaNOu2EZDbCfRnD8R7qqDFaoZdpTIsKwOkeUCD9FndOWmzu5O%2FfXo3s4tnwHAJ1gQtt4jgVgM4dgwu46cvwY6pgGo%2BhN6L6x%2FoK5d9wzsZWeogMDK8%2B8AYsn20iehPriBi61M25%2FoN3EGzxHNpMElayvsP1U4vHV8GUu7ECdgcqZAu9rM8qwbXnHe7r54W%2FrjFq%2FJQ18YpWk4G0PoFmIQklRNcerDV9MOKBjsvIRq2S9HzJmrx8avJsD4xUHmPgBUrnTDLXgN1Sh7dIFA21trGv9IBbYtwURJazsmQD8Pxr6ZnrPWBQfW&X-Amz-Signature=66f3629559a2b25589e2fd26d3f08e8d06c11a9a89accd8cb78fcd3ca2f3d823&X-Amz-SignedHeaders=host&x-id=GetObject)
