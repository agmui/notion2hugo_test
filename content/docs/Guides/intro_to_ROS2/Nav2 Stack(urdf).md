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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=8d6773047229b0328184743a0a3831a79dbbd733cbbd385cecc1f7bf9ee045bb&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=5749f63bc84702be5ef3cfdfd9e027b7ec2ccf1503f51c9dd47cfbd685607a42&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=f5c29475506b04343d5b7e14a6fae2bfa20aff3159b972dc1990329a91817ca9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=a8383a10358e40928cac812669bca77e2c4669d88ac05fcfd50d4984da7b94aa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=5cd330a5470b41860ad77fd6ca1764d919c2821965ffd001cba0d292e01fe457&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5RTBQU%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJHMEUCIF878Bp72Y1DNU8itEsNTHBXpD9AJsUdhcuUP%2BF4GKPeAiEAsXoevCPqQw6%2Flj8RJkHI84Pm%2BTa4CAs3aor1vZRhN0YqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVy7M9L7NyGueFbHSrcA5cr73V2AKzJlu2WM8dTrdjPugIT0APMtmegczfTPOyLaqBUqZeo0but5qZ0cWf2Q31X0ULguZ1%2FbaMam9seNKeYAVyZJz0Jab6msOOrj1n%2FHkg1z4PmJq6eM8DOHOia7rjB3Vvioh784gr6xt1SyF7AX1nuCfeDnDkmu4n%2Bn%2B7sKeXo5IV77mujkSWTANP3%2BqwbYeN2dVSvg8gZdLcTz1UyqM97111eU%2BU9JJzTU02ynxYgRTuJlaTc%2FwbzbOYKW3uVI2rGY%2By3QsOLOpyXwoZsnCT7hbn9aJRtY%2Bpi1tnVH8iJ7CD22ZZ5W08Nms6CCDcHpBvSpMgXJpVwWSx8gbXtMO48DqnuMU6Oy2DdzSgQdjedRKWuoEOIZi4AwQMw1i7rKyRYSDpOYzacY92niAjx0esVDZa8Yf4isN6CIiQyUmqn%2Fw8plW%2Bsq7QkLjUjL0Msx%2BO7Mdp8mc2KshCYZ0Vbzo0xeLkZ3A87mVelxj%2FTqWxsM0MTi0RS8JZncBIiuCwUKncmbI8Jf8A1ajx3zGJHyxkakT1j1NLJxAtt57sWjVxVHYrg6MKJTzArhDEavvIwDTfr%2F9o7Siy8S9CFAfTxyzN4MMKqeGgn45OHvjeoi8yOaJjzCCqxE3IQMIS5378GOqUB8Cyb6rABXcbrXHtQei3FwVdV63fBaAoBO7f%2FV5RrnzI2jVoejRlEi1K0S0YHkLNRnHCPLaTJnBQEsHSE%2B7AiKAkPynOJgVkezSEQ2G%2BAD1PGf8ZzF68xngaI1%2Bo%2FDv9s2ZowxWE0ngDEKgouTi0xKjxh1MYJDF3IToHnoqLY3NMzwWm8WfiE9jfrQAj84nBLMUIxyoBh6HXV0KIQoFYQkZg%2Fsbpj&X-Amz-Signature=481f9138a034a09a97d7748214f75e792b41f6742858129342be6971e4a9d6ae&X-Amz-SignedHeaders=host&x-id=GetObject)
