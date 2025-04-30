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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=4d9633b674e57fac0fca92a91a7b4cef0170e67dd437cdf7c4eeb55cf87adc5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=32ef0c59fa942578ed643031ee0537741c8f5f961c18a520091870ed76fb677f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=dc0b8dea92447ac3a45993b978894540d69d60336a7d1438c1863c2cd19f08b4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=687a2f32adbac89d9327fb23e309d8b57e0a7fdc4ccd7a96aa561799c432c30f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=88ea731125a2b9289bee25c9589d2fbf4c9d91d2dd095e396f3032409233c344&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVF7RSGX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIHMBXwLNda81T%2FmE1rxrKM4Oc9HwDhTwqBzHvK9L3CC6AiA%2BBB2dAXmtDHd4Lec0%2B3YvdmSBO3DeEGfjTpOcdED6GSqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLObleASiAuhAlCVzKtwDxgwJkB4UpQJJi4pqyy5fyZYt82d89hZscy1b9ISzAcTSkY4XdkVip%2BLRtJRG2zjqSsXAE28npF%2F52zkOzBmkebxHiXUszqsWaFYg%2B16ulGpJgLCfFtMJaaL68U0KWZQhTp9zuJlfREif6luOn4AEFuC9COeJnAMG9lzy%2B9%2BZKCqYCtrqaQSg7436%2BNk5isHHBajkImNwKdFb3%2F9nzVZHmD227RmXZQpuDwYTq2aA7%2FTJpNmpxN0sCAlpjfB1%2FLs3DAjYZMvtoOZbq4Mx7oo%2FuY0uVqfTZfDn71zaTyPqvk%2FvwGqJEUSWJyberH1GMzIj18nX4suZoOfcOgxoyLzDags0zgaZcFGSYDkq5J%2FRaYP9aMHHQLL5skjG6t6l8C8lQIkS9WTVd21BpKdBwT5Li1ds%2FP7%2BmF9%2BceyMOPYJ3918n8vWmM0B8%2BbhfcUs5TY%2ByU4wuD0AZ5ok4BMPtu3vvYN6VEAtLkPfJTSWeblymh6meUrDT4B81NVoVKwNcO6mJiuC%2Fntw7ipS0GPKeExALujLMNOtmCXkwrnmrNq0NNOygz6iJ3uvwTtntKlWt5JKLNN4vAtQHzUuClwRQ4sSjh9h2ks6WynY5PS0dQMnbiWG2xEP2phACvD8oy8wtK%2FKwAY6pgENQcJrrFgJkQJ91sFHPl5vcEngva74HVlBS2iGMRdrsd7vPLSv3flbx%2BHql3eHkc5CyMHTnrHWpfhzuN%2BgYa%2FRLqZ3hfrjzwzPdN33BsoAHSbdP8e9YjLvLAp7WG6Nssgj%2BZ52BnegGbVqNNDo31u96SCYd2N5rI%2FE9%2FCugl0elixmQ%2FJu8jIzJeMjENu8Mp%2Fxq5uJ5x9cSfTsnJaQyxSwNrcX8a2v&X-Amz-Signature=32adfb2b4740b94829ab4d114c3d766627a7f0c9f11d2e85da51ace41e9e5398&X-Amz-SignedHeaders=host&x-id=GetObject)
