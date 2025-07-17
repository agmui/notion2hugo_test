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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=e3da99fd203d35087b846d6384571b00b99c3233ff6b30bd720b15b11a55f303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=720ae9a04ca0eae5d24405511b2b986d03b0cfb0b33d450ee2bd34e3726fa4ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=5972cf28093ece77b936aa5ae8052315f1957d066695931a75e18d00234a1264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=5291a4a6e249f60bac38f319d175062cd571c9b60860c18aa29ac324805cfa29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=9829861c834aaabd2ac6cfd0014df9bd031dec365043acf4e32a34d7a973bd79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WDF2I3Q%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T035206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDODey4%2BgbIz6T3bwvEe%2B4LwM3%2FvwhSMUVd8ztTIkoIUAIgHch%2FYVDp85qomdKg%2BE8Hng9iYEygyWF1sHQZqikFQZAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPdDWfsrbCa%2BiFMdayrcA3DYLiljAjJAz4aLsHxzfuVrxNBGDZke5vGgXvrGLEdD%2Boa6xoIOrWJ%2BiFfmasaswD7EsygEaap%2B%2Fra4m1%2FLU5E9dPKev7DCmwvwJ%2FoyErGKbbQtvOnYZFoZkTbMxi%2B6CgXb0BCag5zCS1RtlEZEzr8%2FrhBugyxFWaJpBq21ZbmqPgBlyBz9DCmyj%2BAdCYiHn6IODs%2F9fFz2FfRMsoLhMsJn%2BrTghsZ8esiPWanlZ%2BeQ73DDhzYIQ1Ce8FlcsruGpytj72YZehAJIXvG7Ot5RbsSjJbd%2Bxx%2F5nnYrNdZ8oqYt4JVhzWhh7ER42L7Bz2XuaJ2IvuEYq4uOCjIvYxaNnWLfnVjnQvbbcoaIbMtWZmLM2FOqrcfJEh6HnNwgcLhoU%2FWE8uy1FtHofBVy8ZzmKT%2BQmkbUKkcvnhTU%2B5QpQThPwiI5ftilYcOkiwEyS%2FRaRuoRpIAbvFdIuMq9dTRdkEQ12stosVvtRIqOO%2Fg4Sde0Z9fXRdeDEEp%2FvUnV006ZNayBy%2BPVAy8Yo1Rs1s7ITv0wXIYdjdLymUQyHBzCE12g7CDKdJRc3NXUayeGDdskCeA7wFN8u2T3TH4SHahFxDDlaATEaF504ARwjf96XJgkAOYeZJooezxBgRTMLPI4cMGOqUBm%2FwmbznvG0%2FHb4ee%2BUWUB%2FHRUrD0wGhShc1k3RBEHBJH8qM7%2FJUw7fkCogPT%2BVO3NA6ELs9SDgHCat39vvBCp26gcaklDw2QphiYJEoU4tnYnGHyV4lE%2Fp0eHCuxoXsQIpsiuRsdfgm%2B1XvyNJlb%2Fxuqt2xUmKJOqVLKRpNOzHBlGUtNmYwYA4n%2F4uGq2EoyUdIknyaeMc34K01u4mPEMKile9U7&X-Amz-Signature=aeaf6353992b58d55282197d2be283697b7e6819d9c88fdf0607c48cd45eb255&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
