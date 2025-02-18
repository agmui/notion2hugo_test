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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=f4f724385ed5254c9f267d83d76bc57361caf6ebd22d76223c3f224a50f0a5e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=fb6984ecb28ec06f20627bd2eb6f7609cd0be143ccd45aee9457e1681ff99441&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=ebe55666d80d1209157972d46b5cb9b9174ec5273b3ca5ce1e2e26595052a727&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=de66deb8b6fdc6bb7342ae285204dd5a1119a3887bd9a9eca4e6b45e96ae62b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=6b56b3bcdcae07587a1de9355e0615586836e509536f4f15433282ea3ae87162&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPDWIUR3%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIHTpq3wuskT8ghQuK2d%2By09gxuQGL4qoN%2BL%2BVxJTV2d4AiEAgaJExAfXuBeSvPHMhUkN8PLl8KdiwOqq8nuB4etzN08qiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF0J9p9LE4vnYymBZCrcA%2F8i0NBiCMz4ffh8APUQZhyy3VIqKntflWUqWa7ObAurWBj8wQshntPfxl6obZL2HhLG9Mn2iOGxtJCbdtxgM86WEHfS46resy1DbWn87pyZX74lsKEHQg2TNngYg0EDbws0pPw6STK9qfbLgQYvSG3PKiYhXxnYSfzQQDZee%2F%2FddFvEJvYKUIvKO2FcmVkJxpZUeqiqJWGstdv6r%2B7JNG59W8qG4ik7Sv%2B9s5%2Bn65yuyZm%2FjCaRlEqOl44EDl%2B2Qt3344%2FmIwszC3HED7k2tre0sCjH0oM%2B8N5i6bF7OuoJlPg5joJtNupasE%2Bdt%2BzU5B37f%2Bd8xeBXKEmFtuc%2F1nSTrPFHwqmAi7t1Jr96YrgbBdCecXeoZAnrYeLTTtDYqaclZYfJCCAdQ0uixzk7rzDHNapcBHFgFQVjhF5LEbd1E5CPMZhc0lvkj8oJtrNi7%2B9HjFYIRLOQMrcRSefwk1LaNBTkGCerFa9Ifd7R40m1%2FtUE96ZD5jovvFORFJFLOjFU1zrmIZm059oGbKgv5RC0Si%2FtMsDTzM9e%2F9J%2ByhDk9YMdDG86RKW1gjHWUzjMIooqCJ860QQ%2BBILwmniAFsUmj%2B%2FE3LrRdG1GT92FSgtGvz0kcdIzpehmWzAsMLva070GOqUBAM4cJJ7f5HHp4CIVehQwkju%2FibGSYw5ezF%2BTgg6K4erAyqJTcLlpmJWaCCalMWSCv%2F8IlQcw3qC9UX0MakKzJKbFrqRn87wEC9Tky0SH4%2Bux%2BF6eVcSAku%2BFFtrTkJm5JJVVwOgLZNEpRgpz4pFk7Wgq7%2F1FEKOIyVF7m5O8%2FIBQh1zZL7dOaalYGr%2FZCkLdpZNyFWCnmFFUqnCJfYjzK%2Be1Z3aC&X-Amz-Signature=0b070e4c47083cf3d3d93d75f0f8dacbd79a2ac2a268635e5936b5e595831b0a&X-Amz-SignedHeaders=host&x-id=GetObject)
