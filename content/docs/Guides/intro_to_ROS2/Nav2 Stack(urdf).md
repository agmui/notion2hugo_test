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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=624f79e52b3364d51c56e03a51694019ce67c0ad3c20b9c51f7a0d0df8d41e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=4ae1b86d6c8a46adc19a73bf4b39957357469945c7a6cf03a9cedc352108bbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=1979999cdc31635e2d4392dc5a8664054788fe171e1c3745bcfe3cb115a5cc80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=e0189d17ae240fab96ea16deb09eb83fc22b11b283a3f63014b6bbaec0c02d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=322f2362516f0230032c0a5cc89d383b5ec2cdf221b8fee5ee68efc4a68758c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662P6ZDSGO%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T200935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYSClLI8wblmeSoAiiAGwhJQ41lJK%2B7gt%2FdtfXJQI3UAIhAKQVzy%2FbH%2B7FJp1egT5Ujpmg43XWqVQeV%2B6REstAzj6vKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzxj4ZF2L%2BD0wVQa3Eq3ANZguZnXJI%2BW%2B1PddEpwr2SPH%2FSOo5UmsShYYgVMBeENjWaHsdA3KPIuej0Q9LV%2BVyaGqfp677ovE9ScE0guWhZFL0NEJtf%2B6JsoTh1Dr3%2BM29LHEKoFShcSG7JONr7u7EqfIAsxSIOc0PEvuitE%2BiykubAFRkq%2Bvgat3ghwm7lob7AMuTjZ3pHT5TVrIIMGO7aBuaf887sGSFYbLxUAh%2FXBfcLQBSY5glAzXwSbQHf2uCC0IkXfz0jein56mPfG5GWo8ZRyln1sZ%2BW5eaw%2Fg9HSXDI2%2FcuGkpd3cPpYtODTcHIi6UxOzdMAd8Y49O0pvrWv4q4y323BCRj6MJdS6QN26mz8xUcRF1IfW3FhHBP4xQNCbrcr%2Bk4xkZDpkub6aRyFN1LY9KRDPW82dPO0raot%2FWizNSam9RkxZes4Spbu0paoviQyFrjvItcZJoK%2Bsegku212FsfX%2FZk3GgovVbrh0Ngh6OHobIjswW8m4xcXqU0ipOdvkMASN4irbb4IPr9lxET0qXJgY%2FQ6XgTrQ4Y9tZ5%2BjyhKUS1ebZkpiR2K8gLR7ENq09FhIEUCur3E%2FjmL0iJNkczIR7DliRl0Cm3hm2m4Ev93rv6eXlFDV9w5IJdtwKw%2BxhXaxfa4zCz%2FvTDBjqkAap1EWNeSEgVTfvvf2GCyMGgIjVKV3bsFQ7%2Bvmrg4vP0tn1lfgpwtJwOI0K%2BL8VvnoEvsiZAHioK6CoTPXn2I7D4GHPnksGbPu8lC7RnQuh%2F1FoiAOdlZk%2BUZdk4pI5SpPtBRt%2FE7hxpJ5uqwdjUutJEdaFoAavm%2FIwdXbogqZiHwbXmSLJoyE%2BHxllBwS%2FjGKoFhDSMRnIt%2BXnYrBNXxXmpZazt&X-Amz-Signature=30071e7a02faa0862e84a07b23260ab905fb2be3143009d756b3cae3051d8fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
