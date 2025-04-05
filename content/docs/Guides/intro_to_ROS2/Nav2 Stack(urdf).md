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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=fbe6e967349b44027caab2997e9439d5cb85b334a103e2f5dac1b37ab873f7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=9b958469dabcf787ef88f4cc0d809c31419d0fcf72a02ee5333cc42a80788b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=1f48d726c931967e17e0367a9a030864c6d5fd4c0b1f1bae4f079ad44c7e5c74&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=3a752c0e51e7e14ccdd06f3b44ca7be9ccbba36890ee2799ad06df0c257d305d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=28d9d868b337e468bd6e2780dea62ecb5d8e4c23812270e0e794cfcc2403e123&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RHEDFHI%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T230736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDOhmNnDlRsLBj0TJc6dUSsTJt9WLAViaObTakxlDJFWAiAKj0FM1cCUmZctS55Q7dMMVTRu1sCCBt39%2BbtFCd6Dkyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMmlPhmwxSjEIXeRWAKtwDFNE2nSSPmlzVqj6y4F72jp8PkePBjPV636BuTxac%2BOu23K%2FOXKsl8w%2B3EPMTH63ZttuYh0k92sLosCvzTO%2F44EZ9JFrssMaNoDZlk89OLS611K%2Fs%2Bl3YFwgqh94qM6%2BVRIdhzVqP2DrM50yr9EDa56TYStPFmgt7ky8ua49nrvS94KYaYsPfXQzjpN0eJYsNF0Uii79%2BxTqGxjI76e36k2P4LQhy8YFVujSNwQBO6qjrtz4oye7eQadZpm%2FH2tvOGLRBUetkqT1soPO2U3FZFOJb%2FJ9DBFJ4owBOmTk3h619IeKZxH7sFaRT619J7vlxJWzThvbT9qw%2BKaSZczaiqvkTl8gPxi%2FmZBpEzA3XyyLX%2FFbHBQOKy0IRGOAFm4rRm51NlF4vZ4uWyj0vdgguh0OxriH6MqY%2BOJn6m9Xr68s1a5By5i8kiuaJWKPGSb2ubMvRJy6hKLbCQE%2BowgOWX3CQPaAbPWuDchREu2siZ0lojFRRGIYEkO5mjYYi7tpVLB8w%2BPg0sBaMEVmzIZZ1luP2Gn7B2fDiap9lAW2XsiQSxl01Ss8vdGHclj2Teoezb%2FvPMrUkftykck%2F7IDHxV038%2BKhUbGibJsoQoNQAzQllmWVqy%2ByAL88XpIIwscLGvwY6pgFCok1qcS8wJqW%2FzI%2BV%2Fi7pu0%2BHdlv44O0Nl9%2B3q%2BEY49gJuh9h401qQ6SvIhI8u4kjoy2NVS69qhEpg01aTZ2zjMZBVhO2nps49SoeUTIEYcetZaJgBFn%2BD4%2BYqqR6Cpi4%2FZVO8IgdP9gnlXvqsYlNbEaOvKrxCRxCvq1fytqA7X0TqJ8uoJaY1Wuac2sS4dGJoN1p%2FJ4jW56w5OlfCNlmTPCzIM2v&X-Amz-Signature=c0bb2ae43e6e34bc203e2f9cbc2f21d679a70a174b14ecc85c9ac144748a2e67&X-Amz-SignedHeaders=host&x-id=GetObject)
