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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=8725a3dfb6bacb50ea3bf2222a84ed6fc82f2fa24ed60d859ed2af256062f389&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=78948ad97b9bb5334881a39d57b07d1ffb1e885192bed28ca9649d04347d8903&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=448751396839fcf4e9557f295dbf33814cf7e6d56547620e5065bbf8a20e6b3a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=8927b2b2a4ec15b7284927b4957411c9a0c5db371b7df8d63469056a9a739001&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=109bc4a6abff4ed3dea2598b1d4dc0b70fe8ccd38b5988915cb9ec3418bc3488&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFV46IU6%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T132130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCmAtos2Hgl40v1p%2FEJjK2cZDQf%2F1AVzDEG%2By9dLW7eqwIgZ0uoLfyq8o78jg32HzQTs4cmscxTwogEM4fhuCuwN8gq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDOLViAbmHVI2%2F2bo9ircAx%2Bj0cXlzkDoJ%2F31y25TQ4JFw9cQZRb9VxDFG3iV6oS%2BvymkuKsYHo6iW4iob0b3kT%2FYLekdNmCQh9iK7CQcl1yrQrP4Kw0TyryHgVwflc%2BbICHVF%2BnCsFcvR%2Bi%2Bvd4vcBURXpNDnHmSKBpFAdq5xJuW%2FSRQ4Uvzk%2BXGeD%2BmdDaHFYkSC764Qn8sGI22TAFqIUoVVTKUB1q1dXWz2vTMltebRQ3kxn%2B56Yj%2BSgMolYCkPojCiWCHjkSgVrXtk3ajPeebJ%2FnvKsoVboYTRxRXYNUTgDMwgu6Utz8OdO71CLvkA8k9Rour%2BOORKeziNWgpoFQi%2B3Cy92B9PcAxTjW%2BVVjq%2BmLvPJ1JGtaBTYWVW%2BqfIjeGzxaVpaD1pnTU6vo9IN4LUN332DOT6Q%2FCG%2FKxIqsX3qODoAQS%2FMc7LEtHKD494zz7BkLAZndu%2FwlSK4HWZOBZ6xLFFkabVxe2oEn3Y61UTUs9aKOe7ycdkOhXx%2FEXlulQcbTGg1Vd8lDsdK17wwD1B4TcnmmSH0%2B4MNv%2BY2KmImpLTl7ahZl3CKZRkQKL9eY7%2FGqSQKBf43iwBERiqRjiET8wdt6ucMAXVroTeNdsu7Siqn%2FT40lY6njR6sKbCvn9y46dVNzIY2gaMNWq0cEGOqUBwcrAcW%2F7mUgqqSes2ACJgWPzDzASpVOYjODw7FheLa4qn0FABwwn4Xxzroy9AXudSuVAiOT82rvZ1squQcOY59DTWu1N9E8%2BVSt2yW%2FHJ9TlvqE6nazlpMRTGIhzcCDXe6moaOwHN%2BOk9Sx5hZLMh6ap86BLGPdwfKx8sL60AFXDrX406VBgngVnIJ25xDjfChaPz8lLj19dpGHaMqeeICTl7GNf&X-Amz-Signature=61f64a9621cd9a5d5a21da609da62a48bd9afb4e523b18b87c4c835e04710871&X-Amz-SignedHeaders=host&x-id=GetObject)
