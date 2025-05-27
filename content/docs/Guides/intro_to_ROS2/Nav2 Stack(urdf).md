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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=5e13426a6786f6e444e3996cd4707ecac631c28a7dc3fd76837a38436802d1cd&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=73b350c1d01df0fdc093f36e8acafb86f7b808b5c2c42e31d58a644ea417f0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=6505027f22a0d33dfbd155a4d980f6ff135b2d378d14471558bb45e954011696&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=319cc093c1514926a6bcc3a19788bfc771a630ab36f208f2760b739d0e94fade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=2f683cd0519a4234890a2cd61a5a7a132df1f26dfc12bc72863514913feede6a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLN5T7KM%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T230819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFq5Np8aRf7T9y9frqQcyAajqoIenrzcclVWlM0vd%2B0MAiEAk7CPfOq5U1uJBmCZSNB3tmRXWp3ONkcewctYfGe7aM8q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDAKc2zz7HIHHkyPwHircA%2FLXEfUpvqFl0gzBO1NaaYxhLnJP%2Fl29gNLfzjdc%2BlGYdS4UvR7z4lIRKvH9hkLXtt%2FjG%2FNO%2ByaTOUY6g3WdX5aABFBZ6ejHIV3pS13olEGM2cJuCcE0T3clcjgJojUbInpcg4lnizFeIf0g9%2F6XAnMLJJvO3iTmtbOTX63fr0S0WsWbTD6gPrN7%2BPerDjYAziKR1ppIwsMtBFJKmCaeMk%2F%2FASSZ6HDof9fvmtpfhYwDyjBsiTuzVHtn%2Fyk6FxOBiI6CJwY5HhPKp4JEwmZO3lCH76pX10J0qjiHJvd1w28ZSub2qwNlbZvde7vKOU8qkhVN2Guadb1WrCPFYUbXNelxvW4%2FfYHpXvqmQoR2pkenCPVeBTXZkPRk3r3w1VmlO5sVOYjHMF0f7mZW96PUwQnNuGzubneW2Cmfpwwde3fhGkb3z%2FtDD6LcL2RbDibyJhDR4VqgHWUELl4afNee7bYQbVu%2FPDd%2BrTK3cPkMRB7vvD4DnU66pkt%2FtN%2BGTtMTPsqvjgZEMIUf1rqUl%2FBt%2BU7jeLCAvNikzB87RuJz8FM424qopHaZAb7E%2BB5vWJHGBkrw1DAp1ZXpq28TEf3wzeYTJ%2FCMTer84Fe%2BTyu93BTQ5v7k7hBi4AQ8GCZOMJf42MEGOqUBx8YcPT398j9JkEqBlOi%2FUFK9znvEi%2FQn8NFAlBGBdc4Nn52QwkfAT2MSodywjRLPsLa5JmmlBITuWatnpc1uzZdPG%2BZcbu2tn9%2BXsu1ThU97kCvTCPuLzcUE4xRVl6FacnROWvzTJ8n5nUMjEyPw1%2FwiHYcN4JHbqMVmGOoY2SwnsglrZ7Pmsloh2ZoQz2TTaiyqqTb3nX4sODsi6P02HeHNdlJx&X-Amz-Signature=458805380b3ad005da366bb96af27bf4f3a05147e1b81c207924e161da5d3d23&X-Amz-SignedHeaders=host&x-id=GetObject)
