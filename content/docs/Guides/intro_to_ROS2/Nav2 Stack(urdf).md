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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=fcbebd55ec2b2029ce28564b73fe5f28388a8a56ae266b2d12303aa3ab66885e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=2ea910af70f96e07b886ab61485d949f8c600665e34d272d373cf47509372a13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=af430d777c614ad814f870d42d81e8d0b03d295e8e40cb74b8340f74fcbd7f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=5cb438d40dd44a88955994ef410f847b5d2535ed6cba0e603ac6993143ee92a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=ce9fdf330bcab64168b18801f526b85255834b11599efa8f40418c4325a7795c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHI4LXZE%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIC5%2F0W1nLmPdA0vrY4R3afbd8eOqEXtkLRRyGRiVpK97AiEAx3%2FjDk8gduzSbcQAHM2SCfdn0J4clnQHdwnswqrsrNkq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDJVb5SobEHQ5GQpT7CrcA8XYoRTRwrQ3y8iAYwBp3wq7JCIE7ERr3uRC%2FdnmcvVCxkvzNgtBzoIksq%2F8%2BeOmbZw%2BD9AGMJIMZQ826yxAdHzBjiTvHtbADbqlNlRxLxcKIU3hyMSWxIVtIExMgYtEY1mSQY3lDbbwUOOOWSbnGYeyxGdEHe6NT9Y0S4v%2B6%2FeFzW2mf19X5U6xLnXHLhTj1xZhbaDVtMyjVEMJv%2B4m9nLKGqtbjf416jFT6zBTBiPTpEmsUX%2BB8iP5wyvpSd1rwm7RgfyjnIEzaQ79dFWsgvl3jDRfUPq195Feu4rxk6H1t%2F6YbbAl4jxJB0iNUi6cARYErGhmYLaLPjha8n3PkO%2F0bXEiwQGgP4mTzK1QTdzcXjLwxZMxfam4gnCFbs932MGO1kP3drMyaMKGaHmtJewtSy9ZvLoUowYluLnRJTxxvbZdCYX4%2FOWElFcwm8FnvYc7mAdrWchmo6O6u4zUOzue1grko%2BiChZn7m%2FRkhnubHE1sX9BXtVFKTtdoiaQwqTV8YA2kJOqDf9jyhhhLiewZlxGR1ynuw%2F6k97ebr8bXdd24widjRdC06%2BPnd3AVigW3xPDjC%2F%2FJtCG%2BfcMW3kcYIkbhKnZe%2BBJwk3%2FDz%2FmCJDCWrkA7v4sxQGNMMKWy08MGOqUBnCFlbHA%2B3tG7b%2FIq5vY%2FYIyzFauIHArh42Rqg8Q7Zi55aqTY8Pdkx%2B%2FHkTqUIfPuIJ2d3GDF3gELZciYaoeAAMcTfQ3vfg%2FP0KpZRgC0ZZzVKl4SLpgkosG9wtnbMG8ts8sScfDi6%2BmLIYnCw7BqLdFquVevNZVIwPX%2BOqtK3QZE6RvVCLj534no4TCQnAKonS15ADzoTNxeSJDv%2BBxlsrnsht9k&X-Amz-Signature=78da90745aadff57d9708bb28950b2f0f27d066fd106167fbb80d81b83aab936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
