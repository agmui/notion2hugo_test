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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=5d45848d6352aaf83cba489861ddf430c041a31be6dc8972255a2d8b1f063529&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=c0f4a2d4e4f70dbea2923252700ff4ddf9ca22115c8232da7202ee13aba887c0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=e4e632dc7aec30f409498030a49ff096afeac31b001b0f05ba53612b031a20c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=8392d5b23aceb94543b13982c373e10863399e48ca893812082ec41e87b9f7cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=8512161c68d509adebe5e081c45b1dddfbb9970022797e044cc2a2613b87ac7a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RULKNKJG%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T200845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCfc2bT0xXkFQSoj0RU1iQl%2BUQr%2FDPdiQDACVXqsI3JNQIhAJAL53TU%2BdbFJu9%2FjgQRSmQXaI3lb%2B4WljY542xoKiktKv8DCHwQABoMNjM3NDIzMTgzODA1IgwLZeYwvy3apdZRc1Mq3AOB6I3Qzg05hmH%2BC5xW0M%2FZmi83fpRT1yuOMn2IujXuDXJLMewZZ%2FZKUi9OuzsA47zhZkj1QQGkJeDa6n9T8i%2BCkPzSWcDyMMD8dUpAWwJltXwmPUPzTnnMVujcYzqLaiHLILE%2FZpksVYMeebJZdmx7obFOI%2FoaviH2wHxhRq%2FTGpeZRh76%2B4mF0YygLb35XuhWJPdaUZzdVdeO7mmemazKEHMUpMnQCcTcmVgl86fXPUeMEZ4wBCRMhZmp5SbXrVt9xytBFKxxAdGWL9SniiBSUG0G%2FTBh3isu7JtMRZBGV08ywxQJBO4sgMwIFhg7uSytdC1eJT2Fw4uTkaC4nFRxtQquZqaQY6rlae%2FccsAm4OH6iU5bf4z7zurPyMlrqUwMHUTRl9xXw7B54qwaHn%2B35Tkue2hy%2Bn7MZLJvP9bD5r9hU%2Bva3%2B3%2FoCNymeqiEABEBxFAHRCA86HNdF%2F214c3eaGhDxDJ3%2F%2BajsZobMY6hFjepjlegMDrmT6fYt%2FuO5UxLgea2ijgzDuIGpz0oPVfKy6l5N%2F1iLQN2JaB2zi6J25lKqUev8g7YsFyfUV%2B7sUQEZdNu04WU7eShEDu%2FHYEG8CwFScsuU1aR9pdURJujRqNsnQ5CthXNZ3d5zDJtpm9BjqkAWhQT9ZWPimyOBKQsxK66wk0icblsyLap20qKihbggysLcVbQIlLhgpIQ1r0%2FkTJnmi9jbZ9FuzOE5M%2FE%2BzAh5h2JiHdajIZuO%2FNmkucKhRHBKCrJgjc2RwzzR08dVThyy76asb2V5pVk1XUExH%2Fjot%2F06OShAS%2B9BIl9xAGSL1affVdKjVqAXZmBMNV3e2Attbwfl%2B50HfRfV9AvOfXXBlFCLfr&X-Amz-Signature=bfece4f3d2f4cc38685241788fc4b313a346425cadb7b596f82512354521c920&X-Amz-SignedHeaders=host&x-id=GetObject)
