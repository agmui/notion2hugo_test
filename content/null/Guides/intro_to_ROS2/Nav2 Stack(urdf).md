---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=11c42d4eeb391b6cebbaafed68822e060b73294405b6145bc666ef283495a6a1&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=5ba2fe141c116ba41433cf210180491739efe17002e36a15f09ab7186b8b1fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=15a5e0d65e74cfcbd48da586851bdcbf4864ca8191f86caf1d8023fb4baee819&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=f58e4536b42f31e647bad63cac1a8e1c8ea9071363f6a832d86a81464bf4afc3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=09bce24ad3ebdbbcd1d26a152e07fce06626f419f771fa0eb0707bc49c4b61de&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RCA2FJR%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T230727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQD%2BOEuR7OnOLIEbfP54G2dfTrJPPdIbpNF7nS5m8lNK6AIhAL%2FkVXfoWJH8T%2BvoFZMyRfCveXrF5f3Cb8fOW5gWBEkQKv8DCDcQABoMNjM3NDIzMTgzODA1IgwEcQk%2BTQJ2i749a78q3AO913QX29S%2B9vMTJBX1h%2FMQ8YyHosihUn%2BA0EupZQPtXWEac9GbvzeYhjiKcbMHtGepshW%2FE%2FZwWan%2B0xk98rwBADqFQFO1QNmqkkiKMz03wcWlP%2FP7cbu5RxiAHpFbwY%2FGvt2Ojhf7f5Kd1Wf7v%2FctpbbNUkcf%2BgRO%2BUPNVS%2FhJyiaf7lqYXdU1VJ6yt%2BY%2FWIbc0S2y7frXyfoT8hAW%2FRjXeyFIczkmDfTtj%2Frui6KrW7cmsE5sqBVEfPNn0vj5CgBT5ew65zi7eRHMs2%2B9EKREi4M4JFBCxWWne0p6MBo9hgtSVPTuiE%2BC9VtX%2F2v5oneQg%2BvyfbCJnZsECOnvgsjWtcBCD24TSnMomsbeQ5TooCgJ4k5YNxyy2CL0vgm4VjulOUGfXZxPoEIOBWCcQhKudrXfKbrqa7vCPnOjU9QiDyFthuyxoJWLpiLAnuvqjeNVAuBUFCW4o5fzjmpU1cdmg64hUiG0%2BAbH9%2BRzxvyl2E12dUKbEojTm9WqhwvLA0s%2BEhi38IJzJd8eBHulDAYswfLrTbLwaRIFkJx96Zw7RR4L4wEr4wdbDPdaBSxVg5GWXxPza4frLsCH9buRBU6UfByqtKrNYhO8RBYZP6z71P%2BlWr%2Fl0hVgKlU3DCZlYq9BjqkAajTzqhDmUnOZLrnLR%2Fb1PTH5oO3lmA7%2BLzwvywMf6qHNo4Ge1tAbH30oWQtL%2BxjpLF9n7EZ3jxN8xTQH4Lc6w0iit%2BkobKHXVQbrXBgH2Q%2BUREt37rQP9pLVCQ3C%2B5RpaH2ULUMr4PmqTBjoRej6yxCLIAXy2Sr3H5WEBj9%2BOwI%2BGCBsmGRnK9LfqxGlD90gfA8lwCLonsMs89wScSEFAgv18Bd&X-Amz-Signature=415e5f7db52ef11f36807028b0d4d1a21ff2efcf2e5312ba078ed39d850ac6bc&X-Amz-SignedHeaders=host&x-id=GetObject)
