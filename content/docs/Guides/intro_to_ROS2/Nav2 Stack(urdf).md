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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=8b33e1600c2fa919c6609676d783ec59f8949de13ef2dc21db5341694922387e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=7acea2fef7953fb9f16135b226c650f757036938a7c3fc915de25fb7191bce2b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=f82b54949f39713ec2ef7b23eb9c484b930ec555e8d90c692e8decf4c02c927f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=0085e6f5dd21dd4bcb346827f4537d1d70c45db388020475d62257cb12aa0634&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=f8a1e7b0785049f648414d6699c1d4b90ed5599a978229b06300ac0b6344089b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676YG4EHQ%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFKx37uH9qZAjxVumHwU8R4BhU9%2FnM5udzgfD3JF0pY5AiEA9CPUi3RdL9PvAXvQb5sESUNwWccD6Q1MIqDqpY2F98EqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLrAC5UmYnFSGrx4ircA%2B91d0ggCxdW4uEBfq6JvrYKYwVt6KGycY4Ru11SfzKF7FeGqiKYluqbLPmpospLq4qo9OQnNcEnIwf9dFTS49Gpm3xHBe%2FBa%2FQ2Ucd3ZEzwyRy51YoylIVWeOA3LPiL0IkpLVpDTMRFsx6K10506wxBx42zRR9%2FJTDpovou%2FuTl1ajX%2FwhBGcT1pGOU5oKoD%2BPrt5E6QXvXFfUlV9KxMIWOHdcRKiMq42dPpQ%2BX032fRD1fwfrJJPZvxlWnR3PP7vTcZCnIRw7OikCNoZlp0PM30dSISrmNX0dtT7xbXqmtEM3r87qlLMXzAUUP0mNcFuLWm9BLACbOOD3N%2BW624GMasj2AYbDw%2BMGGiTr1SJj4A2zcvRvjRok1bz6AJKzAtsewOAZerHKQg0EIZjHjWa484mVBONEaSN7tURtYvSh1qvxOufWukMFpCroqTPjgILT%2Fm0FGCwP0MXfmPcMpBwJUVwlAmx%2Bc1qzC3hzQOGC%2BSHHM%2FAkgpai9VdM8hvEDA3QdR4hAv3sFH%2FUrwSLFk6Jcz4O1SOoAe8d%2BPPiXEyosbHktt3Bswt34wPUcRG20B%2B91yiaVMFs9y55NC1xZ5jl2c9wWwSU%2BPA1vpGXLY8AJsaqdWKXwU68rabviML7GpcAGOqUBJoskKiUvT0mfZeQ4xlEvq%2FBE%2BYlkr%2BrM4jpzFn2WrlTK1XXK%2F7ScvEW2KtdIBW3BMvmolAzIpfcan%2FvXyj7yoVVsHS0mJd7XS7bNdSSZAzQaBuXBzJZeR9H6DAoudxL1bnW6Mr%2BVB0cl%2FUMpX8fa28UYyIVMH4jyu8CZFxEgOV1EaAJrquRGwtIi5xrwtwFbv%2BxNeHzsaHjaiTh4zl%2BakCDV3DCw&X-Amz-Signature=c539485a10fa5ad1086b3baba1c696d488ea511813521047c37b06e7115f3a78&X-Amz-SignedHeaders=host&x-id=GetObject)
