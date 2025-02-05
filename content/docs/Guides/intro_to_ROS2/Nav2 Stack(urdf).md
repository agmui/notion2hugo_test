---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=9caba8326fa3ffe2573ebbc83e8670367e9c2a53bc569f997a518f40f9cce8d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=112f3a7929101862d1ab8930a7659d2cf772e602800bc1d12bf851bacbc2ebfa&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=97beaf17d33f7e232cc966717cb025349e335ed8da5cdfb4e2ea1b012323bd31&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=0a73012dad2ae212d9e6b6abade70d3b83563085e762161f74c0ca3174f2b715&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=9f9eb06856c4fbefdf98651395207d5585a015c519f0bf7725a4bf213614528c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JXURWIQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T110202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQD524p%2Fd6z2xF1GLqa1HBoJfA2%2B19HcTkH%2BcrpvIp%2B6swIgZ9KKzxYwjQ4XYLfFn5KMTDzIK3pvf6aRoA99dzenaPwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDOaPVUd2JPbAttdAmSrcA1hbEmFHkd8Z4HmGasnQtPVmC2hpnIJQjYZ4698UViAs1Yg2wglxisFQ04rXxCOWQc66C6DtObzzFPA2PC4l55zLFDqQd13DmyzR8SP3XKahyI7wettjBqdOBe8lxPZAE%2BPABtHy5wb9WKF%2Bnav65n0zoXDyNENnAfl3wvw1uKSavT4HoczEsFlEnKNDhyCMaM5G2zcOzQwNH2fBwjr7X4QJ%2B%2F6D3BiNyBoAjfqyGvskd%2FDiTHdn9cL3PW8anDYR%2BIJvzHJo1J424r9Wm5%2B%2BQ5h7GG%2B4Cz3F1znSmpJOJtBqKhjGhHk7FEWCbcGlysX13CVYdv7DIDZp%2Fz3hUekYz5AzOJF85ybHhyqb2mJ7%2FzBQUAFeBOprGOQfkOtPDdVCSVEc7hG7rKoMvLTHI6RNA%2FrUgEfXO58kuNH2q65j%2Fske1sUnV3ZUcrfu0DrQl8b6rCb13wzsCJEm8vzfX8iA1BxzoBlJM1s6%2FM0EkVk7B5NmxNAo34hXUJ6oghoT8nN%2Fy1cHGLK12R9NoNf5CyobByfC4I5Qq5yDwT1KSP3TxoggN0PCQF3U9VhRgaxPqaLKpbbc6XanO0C79O%2B5ZZexkdjD6D8OPIhToO8zsVsVao697Nc%2BNO16cP6%2BmShDMK3xjL0GOqUBwHjfPRlmmiWGU%2F5nXmTs8wwzq%2BCEUH2V%2BkHunsuBl0OZ7MzUWrxsKd%2BbnIoc5Qi97so0Wu7ix0Fh0N%2BDMwC3Wx6NdkUuQr68%2BVmP%2B0KSBB4JOU9mbIhpbfLYsl0gduqlAriKHZRtTNLSdo8Zsiz3yP8jZy2b0QryYy2AEsCQC8ZID47kfwfI2JRB76YHlX67%2BOzqo8%2FlmhM7VHrIwP9Il2jK%2FGrF&X-Amz-Signature=117f3011949fef8abbd90b09976fee0c6ba69c98f45ad18020b2cb47e0b2a86b&X-Amz-SignedHeaders=host&x-id=GetObject)
