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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=e6aa046e2bbca28bed78daeed6ae1f7b749b4386f4667ccafb92fd1efac6dd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=ba6c85095e30271a5146f753df8a032b6aa945e4a6681ab6f211a97e68241896&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=54d5b656f839af1fb1e4c84614b4051bca3629127d01d527d4b2fd39db8e0496&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=3e933907920d559bd49cf4628efdb3880478ac17a236d59dbc4a393ed72ae2f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=5ad69e30051a66a8764ae9b137b8ccc247465a63536dfd940e8950d8e045bee3&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644MEL6FN%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQD7WpUIRtp7Llzq2oRrTGOhaD3UEyeJIdpsEMXrdTGHMAIhAJKQp6NxkAsvy8MDj2TRu1Ulfs8kqL8S9V5HJoyKz5U%2FKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy52FnxosE2kkVZZ0oq3AOUlqZFJGnKCiB8S5R3Y4LhYRXr0jjHBRnqNTD2JBtJyjWixRVQDSSH%2F4yIqrl49%2B4zWQoxYq%2BQa%2BlvIuIDRHiuRkCDwT%2BX6JLfpp58OrSRaTFq7lre5KyIzm%2BGvcZTnLlaMNoVfnhHFMj6Cu2XW7gmzDO1QhW9U%2B52WFtCskQEWv42mzuIs%2FVk9g%2FT7%2BXWI2jGHG9ewBtrcczWV3Gn%2B9cEiEQreJZvKWN%2BdYHzN23CuZucBkOwfEm%2BHnnn0udFYIpiJ5%2BleQdocDe8Fz0jJdrQER6rj9qCju91G2jFa7iOu9liU07BpIaR6YcD0vqMjiRnKTM4B5v0PXkAfGBpqirqBXW0fVDLbiRimSM1i4HV8g2%2B%2F0WU%2FlA892RSdbHWSdb1cJvm8S5kliDHg%2FjYtbPSuLKOYuhqCnlU%2BGxza6ax%2FUKiwhxM3mIvJRp1Cdbyqd64MWglVdY%2BsotrgmNOCqKut7fnpJxovt2AfXuhnPZQOLuzR6eM%2FJoFAbX%2FnAYtkSe2tktZ62afR8CBVCKT1M6apA7fi2ZQMPwaUCRUwpW2RgrLnPT2ouZQtUX3Vls1%2BW4tv78KV4FYDzcH%2FUVR4C5Hv1DeVOdRnY7i%2FNuHKQniz2QIYCoLtN4Yv%2Fad7jCMmMC%2BBjqkAdBuS6YsN5C76kc826NnWxCrhAuuiPsAKv%2FhKtbodBqHzS3CdO4iKFy0DlppEGcW32K7mYhDzO7xRF1sSzlpJnNX6Y%2Fshq9DVDdA7j0mPL9%2FfZiOF9bXR2GsJfbMjAhaCcl2FrEbl9hXiYwoCuLhlyHLbBBCB2%2BVMEosgwspAx%2Fr9UxjoRy1oGEcLfN7NUfLcISRmeGIx7EKf%2Bn60m83zmpd%2Fr%2BY&X-Amz-Signature=c10a65f911af83b922f543a8ef6527c8cf205ac4c9c088831203e979424fee73&X-Amz-SignedHeaders=host&x-id=GetObject)
