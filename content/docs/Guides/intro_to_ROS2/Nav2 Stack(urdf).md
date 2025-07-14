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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=b59896d72d0bc08bc6b24581ac503085e7a72be355201f5e3b6d8f16964f4ff8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=3a57feab1750f4a5292421dd8cf6cb6901ae648b5d2434f65b9aa38951bc2711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=92791e0e8536ddeb0237cbc26d13cc090de8aacd01ac618f7791d75679c94e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=e8953f5b45f7a69a4e22e9b89600a300850af1796e0bde16d1bd754766acc2d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=83bddbc3dc0a2138045e79d304c73e5448e6dce3d3fc724697adefcbaa6c8a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RSIFNGLK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T230915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDoHZRmEYVODbgtlW6LxaKFRCpEimKWu390B1iecjLjSwIgDxV1k2CyD4H0Vu%2BGsC8SkFFDwrECJFy%2BWlGPfZ6Gkz8q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDBBDvER8%2FgQ60j7MWircA8cJeVVq5VNefix8Yc5V2SG%2B6%2FxauURPtSGDdWnVyFyUxC4V4WepwNRD1b01UIQSFVNiYaL7YKZFfh5%2BX2N4knGYX6jIld%2FHTlCfmuGd2PffndyUrFXdk%2FQgoBR2kdMFrjznv5pYyF9n1rvnLn9hc%2BXtyL0ZhJ35aXHZGAxJT1x8ZBQfH5ucVzLz6br8bL5oJoKvKEFXdS%2FPj%2FylJDUUk27%2FWFc2J%2BPpDbib925JP%2By6bWYIhT4UepsFT%2BHoxK0cHt8mh633CW7a82RpIfJ2%2FdnBlhM6sscsx37%2FmDoDXRaa05LN1xhNCTYKfEw1%2BuSxL4UJ4t2MwjUiHhi0fO8tyXWH2HkdAyaKI9iRepm4Ct9lfdhK8ae759ZgmvAx1mfXn6lix1y6RjT%2B3nCkLley17KFwAQ6T2ncEZ%2FSkdWOA%2Fz3oaVPMm0fKO%2BOu%2FTZsRX4mZXBlVAI7WutlkE0myCIPF%2BnBqgWXyLrbzzq8Nd4k%2BMR3yENtoaxZhT3MhAVNS2PrUTTobVJ68%2BDtUaLQot71G0haPJ%2B6KfBVLo98Eq2v10NreFYd4epZY9sbHKVKz1dcTmzn1WmHNHzKFPxAWfxLCIBSLea%2B0F0JIy6bvPHoUmkGKu84D8dCZfFUB5aMJ331cMGOqUBoPYYylpTjPgTrEh0OL1f4Rud4p2j89wGSyQocP4WvuI8Pr8AC6b03qHC7eTQ%2B9QyyZv6wGzp%2FCpb56d7AIBkCamtf5IKrJrIxUDKhspToR38jzUCeF6UaIxtQBmlFT36%2FuG%2Bqc8nFH%2FAJVX6UlCfygz7%2BcIu0kkk%2BQ5WrPS7r%2FBGIJR%2Fj%2F%2BgY2Lr99aun7%2BC0liM29jZJsYssv%2FV4YDZYwdWFCui&X-Amz-Signature=cded4c286a22d4e019a992f930fd592f51e762e4ced4fadfe22d549c80eb8a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
