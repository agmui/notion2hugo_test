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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=861291d688d8746739d098cd6598eff8f9e274300a9a19065d7fcfb03a5707e7&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=970a6e6cf19b631512a844f068ddcf2847042f252e858087dd870d0edfa41586&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=3da78d7ed4390e45c67475143a36b9a3c335d27ad8c3b9675c7982a793af68c5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=987220d9cd722312bb8b791f0ea6941cd4cd3b86f6807c1fd0a5dcf8260253d2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=8bbda9126867b82604b0bc14b50fb856d79150a8b2509576aa790acf488a4c87&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLTUEZ5H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcgIVGzArN1zK3Bdxwd%2FD7%2FuzmBor0jndGma7X75EmxAiA9I0A9HrYcvp3ni7mM%2BDMKkgIPeBviEXGrw4ZrcA%2BPmCr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMWvtNCPaLcRWLRzMZKtwDk%2FQSL%2FxnrTwxqO1emlnJQgXRWYVuONNoVNzxWY6fj6Y6R5S3X%2BUKFFYKQtqqBunQ0AokKck2HEcgq1KNecU6cwl3B5FTrwdN9gHh1%2F7ayFawDRRSCiqYyQoGbfVZVqBgwiXlwPYPndAEnI26Qf57tawgseYAoJ8VV7E92l7W5RgHSrHXEV1OdVJVmnip1BM%2BaPmHZo91m92JDuryNeda2M%2F42iaDqwAjJ1gVYLtjr0Vf6PjXXCEG1Lrp8tl%2FPmS%2BiGu63%2B1y2XyvJF3w7DHoG1ZMcPoidXuilTfqeWiFrUxi1jYfzOzy%2B03Fcbmz5uh3hBLMHz0T7pcYJ5TDbNJ%2FB8OE6PuqSkRi5DaFWYpJ2vSCV0b9PfNROy3CDXMcHWFEyCH8bhreHAy0jbR59mRlJRFMKMHZNjMzsvLDpgPoXPculS%2B%2FcnyAufQ8mzQUnvpTR1o5oQV9cbj0G1JyN67t8EZRLYOUwm7QGMM3kJq7ulMoscTPxOlj7pDonvdOnXOkCH7YVjWjpyiz5QJ2oR9gJveeIM8MQPLkIfEYt85oZQ2souDPvGdQQsOKDahYV1i%2F2tYsMMKfnpft%2F7%2BDovFQOnes9RK2GXA4%2FnXZ9hWVAqH3AooGFFCQBpHYVDow9tHPvwY6pgF6z8ERrolDWsza1lqcOhbjdKjgP3cBu5qhsa7A1XndK9pbh9CFh%2FayCRQ7VqeE%2BPAe9J8tO3ti57oLFlYrzUHgGlMgArT5515ulrbfdm0jVCVt1cq6n97qGBcVj0VaNsaIF%2B%2FtYycNRTwqa5MwxZsKesY6VQ8rLdRJr6wl3aKnY6ARY06uqWkXP1qfOXgek24D%2BiztL03oWGkGzveqhsqTaTyBspCV&X-Amz-Signature=00201b00690e885c2ab8fb5bea4969fae49762930b00846d5887a52c3c5e0e20&X-Amz-SignedHeaders=host&x-id=GetObject)
