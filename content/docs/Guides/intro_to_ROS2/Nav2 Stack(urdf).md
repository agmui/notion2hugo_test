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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=ca31780a7630f3f6abd9ea22c4ae9f08f19007fe8c6dfdfaf6ab7a9b8ca06f70&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=2636b24748494592687e117abaa02d1db95c843296cbe8013412e9c6b0f461e4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=bc0dd09e45deb5399e4046ea668dd7c3e8464a2baabb2a3ef09e71f9a9307f22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=3c2d7a4523570b9c90405d341f9818f5f820805b91d3083136ca8dd8153421d3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=016bd5071a3516773ff27564b7cf7884eba231256dca78cd63e324370a13d082&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH3YA2MF%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T003650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEPRXOR77gPoxPWuCcBVBolPQP4xzzInent9jM15WSGQAiBKfvqiQrgkE2HwISweIl%2FHgCIld1mpxeHD2zYrq1FPeCqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHEaP6fUs7xnnlJlkKtwDYp6E0GNUOFlxJBv0lFKLmL9jCOeWQl0a0mClQT%2BZnEJjUc8QtFnJmlpe54CZW%2Fb1fRTgo35PDQ%2Fi87aTq5t8%2BDASU379%2FfjtJMNmHxlXxfEFbLtv1Hs4XbYclZY64Qa2M%2FeWnxii%2BcLgv3%2BjyWYz33XYU%2FZkCzMM23j41B3yLX1O%2Fow7UGjV6iRtCSk9FMW0F913ZUkkr8FyoQDd1v6fTP%2FzTUonwsI1%2BOYw47fsBQnSomp%2BFJKeQrWftKL3qilQhqWnVs5oUynvh%2BBYC3%2FVk3xU5yw%2BKfbXJPem%2BkgW8JK54sH7U4iI0o4NhV5k9zSiHrc5vbKWqfz77%2B7DgLZRK5I2BAGh9edcPqKgdY9A2E6vg3dO%2B097o9W%2BLmYvwVJ90ZcUjg6HjjrXwiMqCegjA4VoJ6yaghKvYHRFsuOQ5e2sSygKY3g5VQEVD59AXxrICnDpLrI7lXVMHDrEgeJa6EWu6jbV1%2FCVsOboCAXnjO%2BgyxExoMNmJ8A3RJXbiUA0XSPC%2Ffh6i0h7shs40Rtm98d1PJPzQSAd8XF6LBUdQNfuF8LjwRfofjDd1Xtd9P21g2yIbs1B3kgkyTIZa2R0LL5gJ49qf6HE9PfbUqV%2BoQDIjaaIepWHYsRSAjkwxefZvQY6pgEc0fDsn%2BfmtWS908hynUdXpk04W0nDsdhQ3qqtHA1jEbCXLE0i91Xj08VvMcD98rrPKjD9mGqWKxFBg6GY3S57DgN7RUXOye9a9voQ3zCSqmGqzOvh7dj9g8gCEgX284v34wT5Xd%2B14iqGx%2BV5hiWxHn1vYzY8Midout8uAI%2FVSgMxLELF5ygz3iN3V4iWsSumDlNiv7SlE%2BmjxQ%2BI3UDaaqfdUKSX&X-Amz-Signature=848ed7a251ca301b37bace4497100856de5c4f729f5c695140599e9c98a9caf6&X-Amz-SignedHeaders=host&x-id=GetObject)
