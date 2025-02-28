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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=5e2658c7626f41bb00ddcc5c2f1b886afe92c3ea4ca6bed838917ff61b388d00&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=d8d9c368ef0fc85d718bf4f4986d476b917c7ea5ccb5089db434d421af821a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=7e51c89fc1eb846f4a2c56098bc3830feee5c91095f1ac9f04c98d9bb78e465d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=d26730eddae86d4e681269ab62eacc8579ddc2e01a7f8a8203cac6c8ee38a4d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=8ed3afceb04ade80c7a307a65b025e29dee025951d186b27b9ff81e782f28794&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M7RAR4C%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIAEgB8lIbzJBw630HAwEN586NKq7LEPMPxqwZ7e8%2F7SbAiEAimoepUsQAGeE6MpGnKFsd9AkD%2FlNS7w7SlIlHj8hDE8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKWSOGm40%2FNtJFOXOSrcA6JhHRj2ZwvSBWp%2Ftkw6KFELfjTYBE9H%2FNwK%2BL587beQNxRACQNhYW46EfkEDRkktN5jyNYSl7ty7U%2BVfhjn4Bzzb1xDJ5LybB1yPaRKraOw9NnOjBBypUtc2HyCwJRoxU%2B2m7d%2F2InotdVvsrtdZ0jvGzvtM%2Ft6%2FM48Cz6DbaWeWjlxl8Y15hGvyXk64Mi20PpeBBhaKcRMicYe5JLNH5UiVye3uDuA25%2FgPWM0ah70DPK9l6Dql2FuOM0QqO1%2Fxl2r0VJJKxt9x5q2ZPOuoKc%2BAi5%2BAuusJKZTXGxsihVXgOiKyFMN3Ub2rqbCPQjfV7aP8Eoj%2FM9HcK11eDErhhPXST8qPlFLhsHiLcMJBB%2FAVM66StQVSzhjL5tWiieoU3FCxU%2Fqi2zxNI4AZWUyebGWD68IY2Fs%2F4XpzxBOiZiImtWvaXq0y3EWasRjEXZZ2guAlXk3OgNkxPTXZRgFQ156z8153kn1CNaizd53ZkzbZqh6NRhtyusf%2Fzq%2FeYOAcdenF3D9icziIAoQk1U8p76K7%2FuzCMvsny2w9%2FNZNBbNUG628NqsKJvcN2cSLM8Nx2MNcgPeIZLHFdlvRdTWzFq96%2FckZ4j8fZgyGQ5Nnnqwi3uZYBpEEoPz3ZArMIGvh74GOqUBH9oVWsPM8%2BwGqsz4n2ivoROfRzL6SvgOTrkKtqcVUyPTJkBTVAw5TFQJv9jV%2FCQez4yC4QVuSE3un%2F2ipDE6qOMEpZFho%2BCmdkn7Pba%2FBZ0IDSYv3uceVNwDeg5cTCES9w1MasQwLlP3ufbdfHpuX9tCGxe17E1RMLjyvsh7jABV2JEFa1tTTVZP35KbBU%2BEzDecYMOnEM4zQbc187Z8yfChnOUi&X-Amz-Signature=dcca8731be6274f3675ecd7328045f519baf7db3df57d780cb95bb88cb5b1625&X-Amz-SignedHeaders=host&x-id=GetObject)
