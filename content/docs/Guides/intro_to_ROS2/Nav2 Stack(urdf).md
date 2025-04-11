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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=542072d03c96c6faa03419a91cfd09fe14b22a5cc9ef5305730a9a933424d677&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=a69afb89c163f0137aca7f7d3a736db21d7694166c1ec6afaa057e4d6dcf6c97&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=e5f3bfa1b41a6ec0680ea84a011f9743071d8b9a0246afb98f97d785d3aec42d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=1755378ad6216931d66799b16554ce5230f490aa1d3ac981de324a5322ad8afa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=129794920857ae5e144b45b81e58ef253d50a2f752630f19fb40871d2b87aa80&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CXFHXDK%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGVIx1p6ySmTL6ZKEoPrlzl7L%2FRVPdboMXKE8Vzz518KAiEA5dANqXn7UqTyPl%2BBnQpyrUjGSPeiz4pubdkyCVCj7tEqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLczcG8Z9i6nI7orSrcAx6oBQ7tVPD0B0383iXAh9bkFsDFzVky%2BzGsZEXUQVZiW9M%2Fzb62%2BaKLOMkZNR68pydtrO3xJVHUbFGzuS9IkCBkjJgb20tR1ZnLuWLwNa9C9FScpCvQwov%2FSMnjLl4dzEnKnIzYXq4tP%2Bg1xplLe3O431zkwaDbI5X5iWEALSund9aqZfKQ9MKCMlUIkcGXUaCGib2O2TCtEs%2FeY3S5u61pJ9Dk%2FhhzJhnVfLYj8TG0gZ5f9emN%2F7a5UooBYVBggeeNpcIHa2Sk2S6KTI5zbNumUrBmh1Z1PzwSxmr2hUmfx%2FlMxRJgI4eR62s%2BfhB46ointAG0Se9nI6fUKI%2FbVXvsTzmVSOifVyd3R%2Bg5aJUfNUQLbLkqBnv%2FMX2THKkK%2F9m4H5ZXy%2FarPBAwAiOaIQ8WlAVH5%2FYE3akuf9DHSxyWO%2FaKjCtImFMPC2Ko9HN0AiV9Ppba91M5bv31P7N2YoBtQVCypD1n2BvrEHhI3hKUo8eY4AQzsCnLdltArVYgv89y7z9XDce5nsWuk4elW6RaSTuVAsg4s3CSIVrwoNTglu7URJbqxHyfP22Mj9SctmkDb9yeUOwxkiulTIMqjyThIPeahlfOgNkk9m%2BxUY7kNaMIRKkrdeFk1UqRMMHD4r8GOqUBhIqVUPuK1oRjilu%2FkiMKSzpAxHK9%2FMuH5XPdpU8Xqk5JAIQCHkErY%2FUC5rSsl58obr7ThDJlrGZ0rjOntTNr%2FejCZgHNhvjb87D%2FbXazW9QSmMtALdWa1zu00exOI3uGAF%2FxzhN5DHEMpCmHuK%2FMgAsDVq4oJeHsYjr16GyVLeH%2FLpo6HQU9mL%2ByKgKvTXXcIXNOPo59MM9jAIgx66d1O3QstcmK&X-Amz-Signature=2b8d7a150a7617eecd371ad2851804689fa17eac70eae191fc2155830b064521&X-Amz-SignedHeaders=host&x-id=GetObject)
