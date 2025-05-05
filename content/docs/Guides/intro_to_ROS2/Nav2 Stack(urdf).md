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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=a1709c5a249efafe1590562b9ab4fee035ade24f51cd0dd03f0b0c878a1be9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=38743861f2bd682ca790d41e2e02a14d3b3727cff306a35fae7bfedd3016fb99&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=ffbee9a8b367d6befacd56e3bfdaeaeb970e92de6ffa6d9570a9d748e4efd16a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=a61bf968e95d251dea8371089c2c1d51274132352f826c0a7ed9c9b296872839&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=c4956a53593e48c944998680edcda3776b96cebe1cab6edc456299e34bd57685&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAANNF6D%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBTBzBv5JN2sV1GBknNpvkXs%2BGpOt%2FhTFHf45sdc5mFgAiEAzV4TVDtgvqhwJU1k4zoVifIxYM9KcRDcNr1Pu7p3Nnoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDHtAwsMxfBQWntLfnCrcA141xjXeof1%2BCPZWhkjoUpmqHIo3uWNyOFL72dduwp2TwXOmv3Fs9SFFLQQagX21pgcyVzlVcvVJayBjR8ovpckzbWVfgmKte%2F2UBXRv5P4LK3mMkAwBdbA7Iex8kquS4Du8%2BMnXktKxkgwW%2BSIdEQgaxq8mSebwqBz%2BFRb0lVQAS3kEs%2F0C8ehmm%2B3H%2BFXfvuYorPAwk%2F1x5JXQBHgJvDsNQpckzMxtx8eYgGMI%2FhtZ1rdD71Tg%2BYxIEeYHLMPvB3pzR0M5KoZ5tDVhj%2FsrVdq7ULf1ui%2BbB7DX7HOFdqr5b5%2BcRcnXlY9ocN6aiuuOgI1aDXuetBhJ5a9hmxYbCB3k99zTPji3AEN4gA99yl3jg7qDCO3aXjIXIVfzMxp9V1YL5hVzZWw3b84MlVeoOrszP1e8ve1zyjd3fz0Pdtb9xKc%2Bt1JaoBQH%2BugTcaV7eZG3TjkOm4P4c6qYXiyH0Jp7D%2BseHswmZwUU8EIlYsAAYhR7Lg0eT69JslT504kKteAJ%2BjkZgRych08Lr1LNyk5ExN%2F8YXV%2FYJbJhlWS28y%2Fhzcd%2F%2BEoT4%2BwvrdaoIITbY1tc%2FM59Bo7c%2BJ3gMoJ%2BZI1zQMtPhHtFgI%2BU8UYKv44mJpspZdsyIgFCG6tMJrL4sAGOqUBhNnlPQXq%2FptFB5YBi8wVCPWFQUGyae0enkXGkB1Ram4AbjLruyHcTykUQhKT3b%2FCKoFK42qw1aJzbM5z5GGnfQ9HaAz7pHnxAnllBBk3lL%2FYylfkU5%2F3cJDLD8M1qr4RQ%2FlkhfKvxdpufsm8TtxL87EAGDR6U3ohfeSeJc%2BC%2BeHx57zBi9xnY2Vq5DuEpOdejsI6LaPp7I54u4Zmhj%2BBbvScXPHj&X-Amz-Signature=1e6cc36609a2685db1c277aee0bf519daecdcfa88edf57fbf925128d04cfb844&X-Amz-SignedHeaders=host&x-id=GetObject)
