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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=2f9209854a1e7a138f68cd0cd34a6309149199eff8d9c729fb5a3a714a3ecb98&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=7c949f5bc97cec9818427e4ad133974064ae7c272a7dc90147840e4af15f867f&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=d504a7b351973a8866adf269b4bf032ccb9a2ec15dbc182d09719d818a6c4097&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=0d313005a3bd825e0aa1d8efbd95e8de6a9af773559198d4b0c1774e0fe5e120&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=1c2f3a5e422ac484fac318125ca486b44e280efbe37210297212cd2f7d2ced51&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VLFPHVW%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T050225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQDg9n3pLTBNilz6eWOpG1Dn2QCVe991OJSihQDE6rnP%2BwIgSv9fy7qSp3GrZkgVKjofdUX6Zl5%2FCjfnyuUDvWOmyMIq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDC4upH3ScYgXzEyAtCrcA4WqqGaybFirSuJQNAoWhshqx64ZuJZiAhr0Ig0UEWG1ZRqyLTe440iXlPE8Rw0AC8aHwF1SmPjLdN2ZkgJeGNcSzmsQs7Gdz42JVsEKtFXW0OCUuzSc71X1GrQnQCccFOlqmX21Nn87YVETq2Hx1CTXmcxJVcKwMIkMLIE5ziPJiL5LZ%2FdhmhEPFxlDyL9qj9ivrzDb0YhfClVfpSoZGstdXeqoB8oRsNkV6CNkVmoJhI3aff81ML%2FFY1SW9lN13ZN0RpKf9z2BoKfh4Fqy%2BbdWKQW%2BppBTkaNZmeztsNAK6Y8bh2sX4vY9McR8SXapOn5WKipFNgJ0XLr5%2FZbH0R62f5BBoJWiYJjIrVOOztCDv4%2BV2UoWyFZCEO%2FIMRIqRI7G001rNYi8cEb82n88lJ1MdTm25lll1%2BQndKTkCAm2XD%2BN%2BDBXK%2B4pM5Nk3%2BGIGl3QNHawZA%2BkvCp91bB%2BljqfZbiZtdWvPMxQdQ4UWzGuU8oH%2BcUU%2BMx3cxb8E7l2XvMOcmVoZq3puBJEMZYB1V0Vt5TEm3brZOdt%2BF%2FDd7HkoQrmriemleNUfHpozYt3upH8RyodIB%2BehSYLtsxSd0zpA269oM1h70%2BDyfd%2BYlSbMCaa8IqwMaDBPRiZMPudr74GOqUBnb0Fqenx%2Fx87y0k8pAMH3aATwujrInR3e92%2BnEFhQTedwAXufBDUWwEZfmUmy1wn%2FqcZyxW%2F4S1EnbXt6CDTvCUyfxvyAbbZFZnNKPHyLskzGUQmf40G7wY48RvZQbrc5qOPX%2FynLX14q6v%2FP3lHkLz9hRQx4tuPn7AbS8Zq7tYYZ0Ci3zKU9MoOZHBSXRzaaOK0i%2BwYKwcx0aLVXZLMWFstsSR6&X-Amz-Signature=7403ed51450b40ae6f5658567ee7ab758b8029a9a58be3579a23fb2a1e21e8e0&X-Amz-SignedHeaders=host&x-id=GetObject)
