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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=377e5d51bd64fcf00948ec7a937c58b923af3ec069ae5684a05ce58e685b83c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=9c2bac064a0fc4fdff295bb2be433c2f3c625773beee8baa1e68b5397666fba1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=95f9df066f3b517eee28286210835c40e0fcd929d68bf38ff38cbbdc4ccac244&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=0344bc136060d8c3faefc65284ff311338aa1efa54a3a9cbae2c860ce4ab53fa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=524592ef7a94c247a0fc58163d85abf970560ff511144f913face362136e8073&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BIBHH7%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDabUDBe9O3VUEuX9mN3F4AkfAr5v6O8SwOqnJ963OCkQIhAKzEAemD1mHKh8KdB4lkapwVzHzxKCoKMH7t9Pj2IB%2BkKv8DCBYQABoMNjM3NDIzMTgzODA1IgxWWUteFbkEbbOU2Vkq3AMbSNrN0YnPcttG%2BRAZiK24IGFORscETqyjBvWyQbRhQfNExlD1g99G4GJBE%2BW47bnH429LwGY9Q%2Bt1%2Fa1ZU0N3TKej8AYkTwa3HYuyxNaaEqTexsDjQBg%2F1b9uO0qEGT2TXOfKpiJGpPbAM2hN3%2BqkfLdg1JkMzvrhuewXLwGfzHWySj5L%2B8p80lKTuJN78Moq8evMhowduoaMMLPAd2fc%2Fe%2Brd6Ev4bdUYviF4gq02dwvQDC%2F9Q56YPaPaGFrf6KEUSUbej2cBV12wqP2otooILoQzFnG6gIVMHz9n%2BSWOFYVsDuF4YBUL52UNEFPJR4YDyoIXFOrc5896ZNFYN3eKJbcw54CW4q%2FpqJqbMjHFVvsG5fn9VYzyUaM30nwWZWdd3gwEO68qH%2FegJs4GCJqleEz1jgxwm6ZvDYax52%2BVPXNaE1OODJ2M%2FhuekPN964oiki%2B4feUwNbz5kozS3p1Q1Hf3K0yKDRAj6yzkORgscn6yCzzQ3bwIGd15fuzCX2CzD9hMjrZaFQkfVetdwRXCwiJsQQLUI36yeE%2BmFrs7wmWAIzyAwd55A5VhaXH%2ByjAsBmTlaAFMyHZ6epmI5IrUkcGjt2lspdFjXvPoLxAp8kEAdeH1Nm%2FOYWI4jDYlqG%2BBjqkARerx7e8mpVFV5qL0JGX9Q%2B03gO2kopnozswXwj9bce1eQzMVFsjWyITjw3bJjUIoAUAfpHtCSr9tgNHg86tUctd01gsCY%2FOV74pPkzaj7MtTW%2BYnrDCZuzy8HDK1Hj%2Ff%2F8olVvjSqMZXkmZD3y0%2B%2FY02Hvq2liT2B9iRp3OCzeCR8Xg4%2Bmks3%2BHIfUMgzRizWpMPLirsnuIDBjjC1COY7rfFn2T&X-Amz-Signature=4a78a5e2faa755efb28c02a701b9fd3642f30365d7e08ba4c665cc09517d7f34&X-Amz-SignedHeaders=host&x-id=GetObject)
