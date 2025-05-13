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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=525d195260a6c3259d3ea36c07e1242318e2379616132fe0b5fbae3229ac3f72&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=2d9001b8e01a8fdd12be69c36408f66a8a2e15f4acc867f935068dba80194309&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=3282be4d8632d779081ebe602ad05e0a16d670be12f34bd9d41bfcc477294903&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=8a62c84bad30dc5fd3cb136db69c33a88659524513ef29455ddad94cba8f7046&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=1dcdafd8981a8b7b534491a73bbaff42a16f567698d6f5ae6c257ab4cca7fe29&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CWG6MQ6%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIEHGd3B7E4%2F6YrFKnAcwSXCM%2BYBSS91b4lIGqQVu2Nb2AiEAgFIjQx%2FsUKlLq2cz9PDqFcQCFTq3cvEazw8NKfBB4WUqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFAt2hs%2B7KAKwO36ircA0u%2Fsew0r%2FKooCnFpYuUs55pSJVa1e8qB9PdIDlejkcY2WaULFoMo%2F1yFatDarMvnflqLajve9mIapWmCxfXw%2FhIa3uOGOzlhXQCPF%2BxiCwhJ%2FR0VcFFZa8WQ5zmXlcXl96lC8Gm74ihxDOOMjyszlxF5ZP9ISKdIBoZMb6P9qipMbk2%2F98FmHih4Zoq6uuZBgTWcd08wzbrIrjfOTf%2FsNQu9N9f4hRlR5Agnz9F%2FvvIFnjHf6B8gCyjG8C4fM3mXthvmfBaDnz1onL38YY4THGhq66EduV9bu3H3scd1yMpndP4F5QILj7eLTN%2F5%2FhynSXtTUV6vRe8K18cW6F2QrrbggF%2BQbvhiA1pEgOrICEHX31sOYDB5dkiHOBcJ3g%2BVbLb57RJI6OPWg%2FYMT2CJeIgtnV8PevsTjPrRxz4fz9TiHPWIUWO3gjxhXC%2BLSU2fa27iUp5n93qQvS8zGjSp2HwoHigdaiDKifuTIq5b64%2FXxgnI5xZ1zkvSMg8MnadWurfMqwQgIp0zmdHdJMhVaSERhBdSlaw%2BdsO6qZKUsZDaX4MghP1zsJ0Z9vfFSk9S4RysSiFU%2BdxLnDiuY6AFD1AzccIZqb6okDGg4FL5VqAqgpK1wCQsPkVOh7QMPzYi8EGOqUBLz9ILWEU13rLfVKJgjdIyEq3%2FRBnjTvjjldXx3UH%2Fl9mnODaXZZT15XdT2yojoaPWZMnjvkiXAe2MGALjaCG1qC3FUdhwNtQyXB%2Bx9DO1ibB%2FjGGPJK3lzZyTMyEek%2B7uaIxmegWG8sMajIpgLSdkB41pjdvB6skqz5qfAdXKiwBggXMnuLiCMzpJBThtwiKcfFSKs7GUeJdY6sThs9%2BT8Cc6cry&X-Amz-Signature=d9192583b05e198e92d94c419278883d9a4269c106989d27277aa446e5329bd9&X-Amz-SignedHeaders=host&x-id=GetObject)
