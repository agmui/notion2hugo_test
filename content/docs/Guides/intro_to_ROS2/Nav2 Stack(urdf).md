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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=c95c6b6724f5e022063f19f8902f2a68d5dab66384c4f9d915daa61cb6b818d9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=ae73737fab487fda23c265bb0f49bb5c7c27c451a9502c9c9c70e6cf8883884e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=796eb8fa9b7daad91bcab812768a71f7d3de0eb5c1338a3d4772cba73dd282df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=68c3acac335b19d5546760e6b6000a3cacde648af20ab0e169c5a73291a71882&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=766aff26b53ec99924b505e3c259540b54c8515da7845e76b462af2389e2de5b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT65V3CX%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBiI1nh19jyiP0flkSYNwGGU%2FPMG6%2F1Q1IGQjGrKBhaPAiEAvEht2zsvISAYbLLpIV5WKcwbbwzluXlNSs1u2k8uMxYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKcG%2BRYv2Hi8Cf7dzSrcA6yKWU1NELw11mO8XN1xJcO1EyDN17jEvs8qbSxi%2BkCJ9l%2BSNZjyA73zm8BcpBYLWgAUx13BqeXjC3B5uHZTJTshD2daEsqM2t%2FEg1FtKRrB1xDmAsTbP9k7EAl76ETexGfanPV4JxfKCt%2B%2BhlEdbuSTAlf%2FQnWrsZCqcRB8M8o2UOcvMX0ZlmtHYTq417%2Fa2anLP28zh%2FazmFnVw2eTERaLjI4FMris%2F%2BT6Dbgcw1b6EMR7AIOuessRb7DkbMgc9ywCO0B2RfjNVVchvl5vXotJw7jFKqztTk5Lz7G2PbspP6bFyr38MYOomh8i8Zl3yrLNBwQyVue9s6UYGir197sR3C7lEaoikybZsVzWQJilgzswKgUgsVLWKZCz15tUSriPmn1aJalxIgdYrFZZRSwndy%2BYqFHiD8vfkoyZXqvcHxH5%2F77iBJ85DVPlX4BIx%2BZb18I%2FHUfvxMgrKfQrutQBOEMIafZPDtxeG29xdE%2F8m1RTctdOKTqUdL%2Fio9x3vxofXsM%2F68yyRpit3WuGJFaie836AGUC465tpyOARPIYpTNnYopjmPmOy45hKdGICgG8QcBZY%2BQikB3NuZzkFuw%2FmVyuKGvMIarCx9ApGk74qYng%2BoE5IGOQ5FefMPSThr4GOqUB8c0JdfxnTI%2FkPkODSK5i%2F66hUstwxm3189Z%2FwDwxougmpOsX3JqI6JonCkV6yMcTSFWbpuliIqWDlM%2F3wsQhYTE7%2BYXF2nnb7%2Bcqb3DcHuX04eyjnaAjY3hsab6vhS6w6riQ8rbOyGJKcQk%2BPcE0NRAc1rvjiLmoJdl8VFNd0%2FYJB9Pfy%2FdziRvtedj3ITb8ulxQDwW7UTlGk1C21B%2BBOLfaGVM2&X-Amz-Signature=8b2909c769a24ec460f57f5673aa5c4cc35dbb447217acdcdf8aa13406a22953&X-Amz-SignedHeaders=host&x-id=GetObject)
