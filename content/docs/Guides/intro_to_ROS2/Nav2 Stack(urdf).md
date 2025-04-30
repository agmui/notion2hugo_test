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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=3437fac750272b0598a1089a1bd9e0af3ae80f212ad6ec14d5be6c33381a5c24&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=1e90a70f2e29fbcd6682c38c928a29cfc0c549d41f2a88c56ff2fc5911fc9d69&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=813cf4fabf94a3ac7a13617e4255022d76ee6988f0745b222b080410b86f9b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=9c6d5b4893234b1bdcda343a7edc12ce104b6bd5cd8d84e81420a981acfef60a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=332912c9e442fab90599676097b29b4566f75c87085389c589ec67e1db9c393a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R73BNDLX%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T061243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIFRkePgl41ldtnOjrtdDZm9sFrrjAF8D8drhwxnQUjtyAiEAyKYxjaak5xOC%2FIZ4Q8OPN68k9odjWZTXxp9P5WuXDA8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHcRZPppq4PY%2Ffkq3CrcA0QuCuPHIYKQ%2Ffpv97Zkm8anIC40uxs3fMbE8BGCrY982N75IMv3LjzUBFdHcinYXGWWepAHITyk8dK2YmL903yf586PM%2F4E3Hxpi%2BSG4oCgVvCGv7%2BhBf8h9wGWelNabl8nlEjAVspC02FSa4MU9MURYvYlBg3pQ1U%2BgiK5t2xVsxvTCjwVzp4%2B%2BfUupli%2FV9RNiDF8nIgvutIolg2bUZGi%2F1ozoXyXyIHrgWuvOnydObDqGznxS7ogmerQYnBcJOSdRKkiYHkx3UGgiKhVV8uvlNxAJA7zIR09SyS61T1o8ZtwZ3ciBWUZbLZ1CHSKtwiYfufN17vHU8DP7KAlre3RAGYAVmzZKKCDUbE1N3g%2BMmbOBdUKSgssxM51omwhaDxopoW3I7jRPKFtoXPfj8LRV7fNPzvM%2By7gk4VxWqnLjvY5b2Z5HsTtJ%2BXacKxwsvf3UUuBQvnloH9d7n0ZskWTdpDW%2FNXGokretFWFdJFX%2B0v%2BaLgrUtFCIGMGDCab7b2vDDYUftNKH9rRTj1p9GwqlBGskFUkbIc9PqgsheLWLRj04TSudWwwlE0CCEP1eBIM%2FzstAolI0SKuBqytJ6JROanR4Ifb5V4mJUM8u%2BWh0Zpm0T%2BwPNVwaWZYMLv5xsAGOqUBvkkTid9Jgp5EyYOhR5KWoxrizE6b3COYQdjI%2BqqSf4PfyyAPQalIJf2tqT2G8FPfbx6m0s1MFg0UwmCoGFQmkpPw6dOiKnVNg9DCGfogzxQ7uIpV9EY8IWO5FXUA0m6j64pYZYPhlRHpqocbsxLkUxgDCnJ89M21eX0Uk9DCZIet9bD1cEfkVFpmxhecoS%2FpMIVmE5PA%2FKTjHNKteCajhseBdlJI&X-Amz-Signature=27f4c8806b35373457dbcecb438fb72366822cbb7ebc01df4689ba61e2b90452&X-Amz-SignedHeaders=host&x-id=GetObject)
