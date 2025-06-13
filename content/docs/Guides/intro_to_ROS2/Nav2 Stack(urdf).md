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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=20f355a36912bd0d388463581b3673d5ee4bcafb2238d248df793931ee10f93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=09b95645a3e111d24476668d02dcd8d822718a2f3d008aab18f1104e13365b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=9335657c4bb4247c614f8819f39fe2576ccbf6f96d2922b3f8ba9db90b54055b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=b749361db57aee1bb6405f637fe48fbd0c577b95295844bacafd92937b25a548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=d89c802bc4589a23e55d8d2687370c446b1a7248d4b599843b1cf532465749ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEFOXMC7%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIG7%2BNLMRMpnLH%2FoKXJEFuEzS01oA0es48t4PPNxU6OKBAiAaPYDuiUbysY1rdOjoCKvqg7%2FsqBDhfc7xYOATRLPoKCqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMG7Jh2EAKRUsz3dWUKtwDgobweadATAQk7R2205T4gDHs%2FoY0%2BSWpktTl1cnx9YprRwVzMV8xZLeIE%2BmYFzom1H6JbkV4NqboQW5cX5fhPisjMPcopw1tVxrtwNEG1eytpipGwlt5Dn%2B8Crgq4OQ%2FeLtytO1esH8KBHkXXH1qCkd0r80yhLmjb%2BmZZG37VzLggNV%2BQ6TJuASPdwhiAHHCpkXPXrn7E559c7TjO2MX7DTAEs%2BnvyI1jzLvjhL9wprPiJ9v4J84fCYMYoWzmZqb6LMrA5it2Hhh21ponwGZzMB1W2zk1fNxNGJ87m0FRlILmRJKb4Twxu7RaUbe1boqRWpI%2FQevmo5FiVzpva%2BiFDvbPd1S1WWi4h3D%2Fzr%2FPDDl9hOgpVeaill8bhLCVfhN3VMyIAekAV7Oo7IGTjg4ThqBcgvz%2FvXCs5OQYmhvP%2FI7E%2BAJ75LkWdUxH1EKKvtiPS%2BKNcn0FOXfplk%2BCMf%2Bi%2BRhUVTVbn7SJqxDg1%2BbUQzAgDAp9OlvRQ0NVwFS2aLvwCjdxzF60YCFiYJ4CBpPYUg%2BMH9WjfrjO5AmORfocvaGg%2FV8BEwk5lNwQgSbX0whLW2up9kSWb9TStWNyE3JaAWm7rw4l2TvtRmGI5EhjVcvYrBw3e0Uy9hvA7EwirmtwgY6pgF1rTqTnKijbfFYf1ekbBM9HGGo8VThQYe4kawGprHgZZLsuj2Em%2BHuy1qmMuyBp9lG1zKYgzg0Sw57W2y51PuEm2CU0NOXwORsstxf4R3pz51tY%2FVXVeqo3Bh%2B3i6nHModwNYs5rXua4BRTH0U3SVpBg9jSRvGzDVaLeE6XMq0DIx25iIRmzdF%2BHKw1B6qb9KenRsAkOoNeBl4IyrCvDH7TpNGeKCj&X-Amz-Signature=3274b68ae0ce4f04cfc3a5490ff789d8f7df5d87ae845a7f6c07f809e6913a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
