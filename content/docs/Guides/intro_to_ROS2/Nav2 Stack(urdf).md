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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=7b551b484c738bbf1052e5650cacf8c3c0576bcadccf1698e0e5d41e5ba0bbc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=c63056084d7695af7d2d3bb0572a01b838abf7cefda5f79c4df1d6daf19ad44f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=f803e6ada0f7e6409ba385f6f930f2bc642b5523b17c676e316ff7c45ae00a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=ff51c03590f90a6ff15635554d9f38eea3749c54286556494fcea3dcf1208871&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=02d2663eec037e1ae08d76732e17a979b9c92b3d6a0581e190143f0c9b1d2fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVE72IC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQT7IcX7yi1w45FL05FW7TGEiHzk4WLo6r2tsVwZeRgwIhAO0PJ2cW77fVkPs0RNIElnRtagFXMS8IVf23vZs7018PKv8DCBIQABoMNjM3NDIzMTgzODA1IgweY8ufSEViQmagiFEq3AOQpp27bIZyFzCguLyt3lNg7ES27Tixs2l6SrK3AmnMr0oih9rvUaG0GV6ZVV6DDdWxetS%2FSB%2FtGNJQCJm5sTH8N1F5I%2B2utKfcM1qLUtTGk0N17LS6NNrWUqAiMACjKIPFgKGbeANHZpGwZoBuuuormbr4kt0AbSHTAM3%2FuUDj4Ync00V7JsWzCDMbWXcdcvfbJAqMz0VKSGbPZUep0HExxjnlqc7rLhqrFiBSokVBhhRbCmfGsuF1TgH7Ke8AvNBI2BJ8DXv7VweXO8rRLjHc1%2FMJxFGsDCBHYnKK6TAJBtbHUfLIUx6QNSN7y0B%2BTqdI%2FbWv3PX6COmjKvilBI5UeISQv9qLCkLOxmX1NBZ1U0Gt3769%2BpAaUfMd8Sv3nLZf4EGf9sEKb7FPXp5cIz85hi60xJGeGpw22eKzNhrS8beUJ11XPPSEQZlwH%2BXMKQI9YlWorHhDIXEBk5LzdLX01C%2BD0RfiMeokVMwHUlZ3g%2BdJMEui4r87W6L1P7%2BkOyLxj0h36cWDnwRO2zplz24sx5waVMIPrZeiDSfQnmcg4cWmbSvMApnorgyIO2Oc2tCG6SUUNLx%2Bce5GsaCo940RHGV29QE5%2FP57oPLEQlUlQVdp4J0bQc62a8losTDcpvO%2FBjqkAYQCslZl6K7f0KYLKm%2BGYuGYWzT%2BIqPof62HIX%2BNCkWTGVpKj%2BOo6ZH7X1QYVGsaR2FJhPSMYkboPLWar7Xkfqyuh4s7t78jVFQEd7ywpQvQwFBfmUb%2BhWtmmeLEWIuyzzS0LIpO8%2B%2FRefrAWrkz6fVK6T8mTNw7st8zCARKCj1dY3h7a9%2F8BYsY%2B9yt5qBNGAv%2FycQJ%2BazdClnueL6RRH0oW057&X-Amz-Signature=46d6690e48357460c477c0f693f83f9dee497a20adc02b4d24a9d0214337aec2&X-Amz-SignedHeaders=host&x-id=GetObject)
