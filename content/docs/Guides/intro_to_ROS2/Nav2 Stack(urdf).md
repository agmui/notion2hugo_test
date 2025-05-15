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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=bc28ade0e99ab39eec1b2983b523ead8a7375cb5e2346e3ef36cd5469b542801&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=0ccf370897910f66353c9d1bb996b47710987711e5d0f23da80e9f8108b0778c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=6388206c328963a5c1124192b5c90884ef63237a7735ec9e52f54db1d4133e78&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=e414bb07be3a76e29ded1a940a01dd7172eb1f25d2c3e936d58160213f075d06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=a47a04f7216e6ea40491ebc6650ce9159796c543a699cc63b069350c9a3c3334&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN2E3VQS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDePn8y6nhqDVoQAgBcG83Dm9djxX%2F8D9MDCQvBH9H3%2FQIgUVWyxd6QuAWS8fE4W6RdwZTBtNtzulp9Anzm9t2qc3oq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDO3tOcgAtXLAIEA4myrcA1a0lydftiR5%2Ft%2FspAH%2FwNEc9H9f8HwvoCAZswbfw7RDszOjHHu5O1mhOZTOzX93t27UOnkwBW56Fg0exoLc8ceoA2Yeoh3lutzcr29tNyBg0B8X9JX7XTwEIYMFS%2FOVP6lE72NTPQpREHSMsGFFSBndE3%2BjLW1jW%2BKH221kS96TtLIdPrS6qxNFcGgp%2BSHUz5N%2BGdocHtW8dHF28SRp%2B1a%2BIW%2FtwyE1wHzaHS%2BYWobNy8tLRwwsLGEfJ9Itx%2FlkK70bI%2B15FrgmjF%2BwpRm6iB66KPz4DvLdbL1p1iBpCaQwi2Gekjkn8IVrcopB1wvTS8rIGMrVd0IFgQsJQKOsC4J%2Bu1NTh%2Bz2dWewo%2BQWoCaXS7SSCZaUye83AB%2FbYy7LtuiiHHKBWGrXJJhfUSnafW1YFbv1isZshehyOXYzoM%2FGXIrKlBsedtkuhTOO47G8RGOPGMrtvUdWDDYb5D38u7IXUt2Ti4cPI1JlZ%2FlErJ0v%2Fj8OpOoFqdqh4ybuFt1F%2BIRjGxASczMxkomzJUnOfqvyUeVqvw2k8%2B8XnLE%2Fx5ah7LvyEJSRI3Jb0GoLeopV%2FizKD7LX7PPkB1HAIEBwlPVBIFhqgxUA7cybyWN4NbgIvy5JY6SbsjG8w%2F9IMN21lcEGOqUBya6EdAtP7wR2o8%2BTqRh%2B4L%2FrVhbtcXc3IL1Z7XFPMWqnRC3jHXFZRjHZK%2BSOpupr8gIzxnsBQ%2FyPw01d7sII8RYpsDwBRm34fmaXDyB%2BNdW3XxXoKWGG2dqvwXih%2FBKK8IxMiPcOalhW3ybaegglLcsucSunDZkHb0BPBRft4dnHaIxQkMDXxY9%2B%2BEbFGhLR0WtYmumLh%2BYRxTN%2B2gpzFd9akY55&X-Amz-Signature=f2c46dd48ee16b460c624733db5f973cfd72e4c1a02481bfbc5034198a3b0125&X-Amz-SignedHeaders=host&x-id=GetObject)
