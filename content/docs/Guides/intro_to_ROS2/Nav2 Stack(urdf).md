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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=f4a87bbf4c4b826fa3eea36a5324716cf45b49f366865d95782274694e087b2c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=6b03fb91e8e0f4f7211a4007cd1a0ac04802215bd7d25d6066649cf29ac28f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=b0fc4aa6975f7ac57883adc1f5d214206eb37384a701da937a5c6314814cbe54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=fe053a2c02d2f5536c1394aec45cc17bc491459fef3a18f40bf152b8dbb972f2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=1789099373f25e07218ffbff5a409f38b514d1285f5c271a5919ca6a1b903eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VPGA6M%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T190124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIDmuXRQtY1%2FpHXV5mDmZi8s8iEHcp1ha6XnYtDlJewK5AiEAnlRlkhi9nh9zldSi1f1Fw8mmPoU98Sg28Py02w2mzzQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2BVPsJnF4YA9PC9GSrcA%2FN6OpH9trKfGv3dF%2Fd1TeRI06qqDsXPTzcCZZfrNCGVwP4X%2FZ3wFstZ6vJ66%2B1QHjwW6FA2TG8zvyTOWJgrrGJUfUJvmwdL5opF8vRFiWKjTU0CYAIyUznaPfu%2B8f3WZObLgT0UBBURKubVkago%2FcKfWK5AbalA3hHs%2Bodk4EYjEaA1wotjqWUPcdFkEa6%2B2EkHmzI3sJnlM40cRkmTeINhGjkM%2BhSvU5tgNehzCrikciMSgrWJHJ3ZbYR5kytRAXrE7GUhCalIn4RjL%2BbwTRrhAIFQpTnx03M7hgTQnEN5EkQlbqJj6WxOLFO9BMKjLlpF3VUrfN%2BOv5LMd5NyRlnhylnR2QERZd1BcVKqeOnyYGju67JXJ9kMUUSVWyxrNwYMhqtXpE1O0%2FGTrUlANamMm7LD4IdIkEaYPnrIDkc5xwdPoS2xHrB3kxUYTdvcUpQc4CR320lW4rq8%2FsgJwKDVBSPlMfPSJAWJrhTdmI8AGD2JatxSe6zWbBxYKjtNoTHjqZH8HMpnKx2ZzTI4r8A93gRoaf3vh%2FJREznb6uZg4aUqNJyMFNB1nP745rAvLRqnq3pW75EG%2Faw9VFi%2FG6wSBeo4XjYGXqER6EbS3rFhrYT%2FsC1s9cHeHuTkMIDb9r4GOqUBmTlg2N%2FUpYZCWg%2BTYBBT3gWKZBsnZehW%2FQl%2BrmIsqXe5p73pTsJ8eKPzx%2BsATWT68cA1MQqvZbNJ07ZtmqRkZLKp5oEMsKwsCZpJ4svwHl1nAJi4qWC8WDyK7hpnU21kLUya%2BKkaFC%2BkhnzRkeDtwpDXC1V4B%2BQvtTiowLIykGLJEKUrwTI5rbol9VCGTwQeYM4LwP%2Fytmxn1okSS8xgI1DVgm9U&X-Amz-Signature=aec1709b5dd7817e295292d0f07e01a1cb001f6a2f29a322a9f36a6ac9964e5b&X-Amz-SignedHeaders=host&x-id=GetObject)
