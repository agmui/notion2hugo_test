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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=09c90c780f6b3f5d6b543ca11805226308cb9fc5bdc88fa169ae2dfe706d7074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=e6ba795cf10780eb8784941377f0a715d029c3ac3d5c432111840d6896f7a52a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=02d7b4948b2daff0d1f64c7d58675d0b136e5da1bc70598500410a7d7a928705&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=189cc22910c97e50fd45c5c3d0c625c123b21487ddb5ed48f8e0a8f65f29ef1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=5e69ce6e9e9e80bf7ed5560b6520bf36c2bfab8017f39797361fb6d773b565ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGCNADU%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T200910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNz4HzV36rMyTMGabcGtbtcvdBWslyqqk5zfM7WAljswIhAPIFXN8D4g5IA3hGGKNB1HyXz2fxYKQFLFP8%2BxaOCAw6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHI5w1Q1J%2BpqBJQoEq3AOBcPj1BpiQ0nR1MSsg%2FbymSFFj4LaOEG306SoWtVTtMdMbl5KFYqNENEigU1f2oYaF69K%2FnFWPvURMwmz6uOX9%2FNWp3%2F6cZRkl5hcIUoHbAgsoF1U5FERv4gIL6s%2B%2FYaZCrsrRp3UAziUzjdebzvySB1dk22sUf0dJKvb%2BV8K9Ux0d3Cdt%2BBvMOpg%2Fwbnykl8EAE35sYZsz9KrCXeUb6ykZhhs5upAJkANJcWdKT%2FOnbhLRZHbTlAlrYoas4FkrcKkAH%2BSjtfy04RM7WGmzorDFa2y5hVYnI%2FkElhJFlNLq6I8ulvfvzqOHapHoxAKlnEOKQgcLuUsPE8rhz43cs9rXYU%2FtAqV0IRApcwF1bMNTbIDyU27C2hJdxNRypMM1vTA0ABthPz343pPV8G7gWRe77VDg%2Fded3kKSVmnZg5KRULNZU8StXzGEBV9eWFIpZAGCCxrKp7ZLxNEAV25GGITJnYXIziScUGERJzw3Vz8Ecr7s5NkWLTXlXJH1bGBA6cyILZJF3pZcJ0%2FF97fq50YPBhVeDWilgQv4lTsxs3VkEGeJ8SCMpf2JYP7HhTjjHr0HhNCW4Zyu8XZzL0BLDAQbwPZJso4lBr3EN7QIZtEnWrAl1ZmEmMXlNgANDDxpIbDBjqkASipkmVJb%2FMHdO4J5McGp3AFrNImHVxG4oxa7%2BcPgxeNGOJn84mLXfYCOVHyjy8J%2FEyG%2Bm9U0YasfJNTFs7iUyjgG%2F8F15%2BkM6MSTz%2BN4MduWBlsqW0Y4ltoaTb2HNfMdWgEpqqzEnNfwzCsUelfUBTI8sl3BhUwMObLuEKkvN7lCQ232fpZepfk35BV2SeKnrVXhJ2NpEpK4efG4tm7PA7cehuJ&X-Amz-Signature=83aeaa10a48610a657aa2d913be87aa353cd4bc412cfbc344c5057438a30ed6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
