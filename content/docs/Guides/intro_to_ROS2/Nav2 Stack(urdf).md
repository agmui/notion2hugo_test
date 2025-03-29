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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=c9c5cb91b1db44fdfa108994188f9ee4463e3a64ac6e4b771664b1694b52a937&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=a2407fa5a31eec89c6a7328557cefba511db214ed2ffa01990ea79695056d8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=cfe1ad1422e384de40b5d50f1c98eb387710dada889f5f15a6730cfa2763fb40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=faedf70a3b4c13fe3c2b8a1ec60247937b0b460f7a23d570a125559dd81fd718&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=a0fec5feaaa6ee76b08ca6b46a67ee2f6a5a80366eeed770804b1a81a1a4b6fa&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUXZQ3LA%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCXFMfjnwvInPdAPtoz3jQYYDT2ZjC2592PRpkZ9%2BKceAIhANqoFeatEs0q%2Fw4SiQhHYfxmBYUL%2FJWj7ONdvTR2X6EVKv8DCGgQABoMNjM3NDIzMTgzODA1IgwHyPnKzpQH2F%2BDuRMq3AP1A%2BCiuemYmxD9UgSY6k1N4GM8EN0vk2tV5XRHYRCfcgTrzOpjB4A7TQ3iGmTFXJm%2FzadSTEEdQb0NnDFVnHpVlndfGH06F9eIemL53xIdjJDAcmZYKpfy3wQT6821xtj3SkyHBwO%2FVDR2YoJkYrWhLF4Jj48CmKHzPnl6gyiOx9jzUQUCVeRDJtMmFcvbn5aDdZDDlds5MXIOQCDTkfASoOyBeAPsE8jdVC%2FImqkYVG6NXljJ52kIAjXbn%2FPbBTTOhmdAJFkgSUQyBnJEw6VLsptODH4DObYka0jwoo4lO8lU0QCLZp1CGjPuSK5s5DyqfGtLhxxNNxbp0z4v2uSCAXkxbnubHt0CEdtv5FkHvhNgbEu7mgPZKD47v58GtkZ73ao9m%2FbCI2y5dwA%2F05Vs9ZJVDBF%2FGCSpoOBMOSzgrghFKWLp%2Bmumn4k7Qt6BLWckoPqjUNUrPGXSwYIF80j0Tyxxku9wQCaxYdXxP8zWEwo9ovfNXVUteQ9%2BVxGiZvuSmNGDnK7iE0WP9v5CInmS%2BS%2BXXIVl%2F5we8PMyolZNLZsBinUmhrW9UTcop1HURYd%2BDIm53LALEJkUqphcnGZK4QH2C2diYpRXHfdT%2B8SpbanEwh2s9iJL3zz2JjDL35y%2FBjqkAV5ClXyNX8aVGyriUanc%2B3ordiuE5YPdM6hN4p0mUGd72tNQpMKmvzA47yf2034WOPeDqbyAShmNbuKD80uMkF1GOODUjPoALYTLEmnZcniuVgDuYPZrvIrtCg%2BLRy58uq34xDOQBJoBkNl%2BFc8yqBrTJrjyNOc9EWDOLEsifmCfBcQVt9llLunuM4vduqIw%2FN5Njhuo7i7lZOQ6Uk%2F0%2BkhzievZ&X-Amz-Signature=130c16801c7424fd725c809816eef3a1b3d343b4c38a7c976c0ef123148f1d1a&X-Amz-SignedHeaders=host&x-id=GetObject)
