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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=bec74b58d137e3c400ea5aaca5b70805609277eb73ebff73f125fee1ca6a22db&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=1ad2f4bd9821b70ebb13b4bfb54dae86c87ded990ed48c5d0a7de6dd80d3da87&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=e4b6bf3d8aad9bfa6e29577576679d5e6dda600b99e6c7cd7c0f81ed7516867d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=566f5d5f230d81c6afae41e37e100ec2abb79f8301a9f4d8bc37776ca9e7cab5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=5c84b87b64cc31cb2d95c82c3519e8b0b9af3dbd1df3de73086812a9e0ce33e6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPEX5U2R%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDbrOfkjVIi%2FhMPaPCqlU3X08jtL%2FFdiRt8oiPi8al5lAIgfoNNoMDrQbjI3EyNazJ8ymLtwiewDL%2BuHWaPfSvfhdsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO0uUHYOx1LR0npnLSrcA%2FToNKFjsE%2FNSx8WOkg7GU%2F%2FbVYh5w36I%2B6a3BbQA8r3sBIeQE8jz8hrtX9ideMDep6%2BaI5NueelMipAZb11mn6bb%2BmkCtAwX1GvjL5ZJSgHCEa32EiwujgWjswM8TGc%2F8e4dXAc49NldSa7MCXuN2jIB9E2TTcSNgdzFK57FDp84MNAOFbUXjbpUOMobmmfp8rurj3v5Ug7aF9lZqElgv9%2FbGEf4HsyVhqCMzfwfylnVtIxje%2Bi3I8tZ3ZJeR3EpneqtPgNkCICPMc5WJEUHNmjWPC%2BFgTwN%2FllaEjYs8Bxi9NyDS%2FyXoqiXxXP3GictH9pDZM6AhlS017DlcSi97YBtHGE6ris4KE9mROZGxdmNbnmVOzToxuZO3fKN62ronsQk0ZlGtZDEE618GSH76vFGW60nbBFDYUtcc1G%2FV6LD5H5dtDY0D%2BOtY6mp1Q4V8ElW6lIFft88xA4XJiQObcqOnfFs0VATITKBID8GFU3Bz5x27dlMBor%2BWs9EYz5h2fHttFcIalcVtcw8ho33GSOcMNAFw4Jmg2iqepIEZSm5szXEN6FaukNRx6Qp5wXE9VobrsY%2FUXYc5DH3k3uuN1iasbT6mBhv0h4JV7lwq7sB2ROAnREELUxoibKMPqvhb4GOqUBWwUpVlQxA%2BKv8AhHglShqbbyOZvNUc7HHnfIX23vu3wVlUfx%2BEcpD7c6vsYZaZvNvnZH%2FIU%2Born7Ovz6yXb88SBaF0N3ewB7xN6N88j%2BgIGJVOeS7sqD6zrijXRi9ncZPMuJyi1sIwCu0wSkG9%2Fs382CH71wLnCTXs5%2FzWNlehLWzguGgL5TM4HzjC45Vs7oHPD%2B7lprFonWOLq1v0pKDdJD2u56&X-Amz-Signature=d94e640c9614b2edc1e24fd6e4796b5893f348a7ff6d18fca6862282fb569672&X-Amz-SignedHeaders=host&x-id=GetObject)
