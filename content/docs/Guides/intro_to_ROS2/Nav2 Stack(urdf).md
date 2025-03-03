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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=0276494b8eea17397b37432c43593a631b20b8cff6920ecab8a3a0d7e214899c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=9b8a177c4285dc7a7681357148ac24e066a0c96379b33f0f1cabd79881b622ad&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=9d5b6f30571e36aa798c79e920a3ca0e639da680bf69f3936ebce22698c048ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=58cde2ffcabe0375dec940b276967a8d956235a822b72dfb3e9b245e0a940224&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=c7fb495b73bc8294e0ba3f757ecda5ec64c2eb79f7b771bb9a4a195a95c35c15&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SINR5CX%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T061311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDGo6kxSB0pdPhS02ZCome9VEudg5%2B2dpKmHgMIlX6vAiEAtPHuxR0UytMu9a6kBq1BnMtYrLmDz2XsEYOFnI%2FayYkqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE7CCcrsVr2ePNcunircA5EVV54iEqZcajntEOQyjj%2BleAkrVE2ZjObIkXUPNosJPNpp13xUvhvSaggQgbxNAqnCz1BM3D7rSaoGk2aaxNgA7nZvsky709yX%2BOg39QHZyYFqmM0odhnba1QtWzB7T1oMARm8NNTtgdwSzyHKjxuD1xpzF7cFfdg7K1D3Oya2ug8JkpTWX9%2BE7b8KTBFtbTEcK%2Bg0jK5ldv6UYFz%2FEok9DTrh5EIc43B2XtTCVZSjLjpA4g4mJbqMKZf%2F0u36IZu4VDIe%2BwhvrCc80qK5WzeWVYXMaGgVyWhwCGWQThnhav5zBJeqZ4LrH0udQfD%2FWUcOc1gHXtilVRBHthF2Z5JgW%2BOAuan5g5Y8hIC8dv0ylFj%2Fa0M9bFYJaV%2Fc2lyGTew2MyoqxJGkj8JfhHs2UlXH5dEJ2blCAY62kJ%2FtMZIy%2Bl83PfqRxSIq6IzKBNwtf5dLbs3uqKEzYYOTrDElpQZM2BMcRgBw5qetNDum48FwtI9CbPYDkLfFwSeovdqs1fXfJ6O8wnx8R7jmVVzCBagMDEJNuWGaVCzS8OVE6cvDLeEKKj6eEdGxWSllz%2F%2BK8OTlwXVDOiSxLfheS5XHfveO5mwq0aop3amSwlfw%2B1TlprkH4MlhQAF3h2q5MID5lL4GOqUBzcsd1Qyylk2ZX0%2F3zBWYg32o1z0LY3A0Sx3Pk%2BSPR0YC2tG2631%2BmEx5Ucgu5%2BC6ATpu4%2BEUSspk1BZm%2BDO8O2hAUSg6n2uy3BfLlM55JZUkvV%2FHr%2B2uoGsF%2BVm2fovUOYX9wzgAztVEinN9X%2BaRbQ1oQwgouhvpOk3B3cMxuLkIEml4jvG5NZ%2FDHT2xTXjrBSCrs%2FbvP0r%2B%2FDBMQDpJDoaTT5ja&X-Amz-Signature=edbe01880688145c5f6dc5617252d1776803860cb1705973d6eebf84d9c50a11&X-Amz-SignedHeaders=host&x-id=GetObject)
