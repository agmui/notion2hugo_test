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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=7c0e130d228b3269e21fb64fcf676706eeff6b8d76fbc1f52f1d1c04f524d9d3&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=839a484c4f167b18e4719368f0283e79a767210d27cb59f1c1ee7ea5c6d061fe&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=bdae14fbee474b77f150225b5819f4e2a01f6a1058c84d9258278460b21e32d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=55af3c126d084d23d555d543bca9ee477335d5175d88ce17b006695855d2f5ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=79f2ae4c3595f6a1c0283692ae5c0778003fb4df1fe3187771f8977b2b8cb3da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDAMU7AE%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtWJ9PelG0QGuv5IsdMrZJmNU2l%2F4FbR3dGfHlBdBr7AIhAMlUgNO4ZpfwPNFj%2BehBNyj3k%2FyfUy8nTuVsEDfnuzZYKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnENTd5z9xrt8LADQq3AM0Kzl6N24nulpsbmhZzGv3MwOvBDfhI%2BPQGrhqvhYSrI%2BoA%2FgvTJ2yoSynk1QWq91HU8xMRGRodaOxyjnN%2FDmnHwgVuB1JOLACJxf%2FscROh%2F2zcsF4a0sEQIx%2FWDp%2BwY2Xi72QPU0sysT%2F2L9PdJvqCpPNL5WAKyyn76KhcfPdktIZwNtmRuk2cmLfHvzVIeQcbiZuSJK94oQN65yKoyEvtUd4UJfK626hV4uR9m4Cu90FMWUts58o%2BOQvetTKdMFLN0T1SG88wUbaIN%2BOm8tPkGoOIGie7joQSb9br0yCGx389idIIIt4I%2B1Mh8AcLnPhzCieEIHvcXfALaqZOnJx9AAVLpZ0J6wwOmeKrXIFWt7MIBocm3QcjXkHBdmRfcCMsxVTiaXJ0ej%2FRfGcGlDTDwe%2FlrlqHnTg%2BhyDwit82zhMxRNs50wkvJQa3JOlOMVCYk8TwC%2B13X3h6SaGIpWG5CBrjJvgl203xpoNhYg%2BVXJBjZqN6gOvAKBU0t42aGz6C1aMOknWs4VCmfgpAARHjOD%2FAeAp%2FN0Xax5sj0dMx%2BDM%2Bx3uecBya3GTlI1TmZsyxz6GN39y%2FYGve8lKzkTrW3OWzxYdaf3ub920%2FKx3l2gcOqOzWTTebNu30jC3iKO9BjqkAcKavWKqPkPtdK050vlpZ7VNJZBHilEdAOOaTGGDv47DrvRp2XX%2Bf%2BRFom80LxB49kTqDxsyzZLl%2B79DlBuXbvT3vG7bRA3cew7%2Bosm936RhWFRCTRclsXuxciTyrSxcgLzkTRnugYR%2FTfvTgoXb1gsQIUCMYTqPrG9HlmbxTSFOt8dFhhJuFgMQS2M07czy4gkXX%2Fr9d6JZGZUH%2BQ%2BEa%2BoGXUpX&X-Amz-Signature=220a0b18d917e707e91ff9d07c931f185aae63f345cd89a23b0a10330bb6ee1d&X-Amz-SignedHeaders=host&x-id=GetObject)
