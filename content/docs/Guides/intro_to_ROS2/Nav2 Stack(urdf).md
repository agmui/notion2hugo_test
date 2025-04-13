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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=3c7bb41e68c662d393a1ea6199c8e7b3c78c0c379dcb15eca0d6520e89462e92&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=2bb804ab1fdeff32fa0b73995a171a031aa93cbed00dab215014e48b47011fac&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=4a955f65f6989284084e4c11ea3677f775474867d481942e30ef3cc8fdd0262b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=e548458644a9ac963b165a264fadb19fbe29899dc2475dbd1159cb279f749574&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=e17c980056e80daa6af8a2eab659f0c938b6ad350701a3c4f63f9364e826c1d0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROWH73VA%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T100819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQDYF3vfA7vEdkWwDrKJxti6CixN5s2cg49ybREfU098GAIgKDxCfaSizVBPSUem86t%2FY3HQSWB6J7eJ1G1%2F0wlir30qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCk8rHSLpb9pXd6aDyrcA4ns4J7CSbVE3HiMvwVUIJ6x2RfGTXMJw9MXOE%2FMI2CuJ4Uq3%2Bbu8TsR6SttxmAFxXIt5ZF60VxXqnaDE%2BmnkcBBnnb1XOcG3%2FNPm%2BZH9dDuh%2F2B2syafHvBtK6QAovqGtr3oK4vCsABEqqn%2FUrTBuFWxyUp4RbGEbLKpyvj8RThE1vKCjQoCEbI4kHFzXuusGPQ69k7eIgge8yvIJLd0Vz5n%2FW%2FsTj2XabvAcOERzo0hOyERNfmvLp%2BAlTOpN0vRFRcHr9HAFcVzG1%2FATn0kvTS3tsyyP6vPM7n5erXzWhpmVRI3KAT8rE3aWt779RLUYvgs88Ez5Gwnk2HbDJLlGGJK9COY%2ByfGe7hOvY2lDUBDzUWYDMNfTQMyGmAovavS%2Foe%2Bzlw0xj5a2lku1C1Yxa5ZKmlYfX5cP1IxWK%2F9Hw%2FALGxyTRlY%2BwADZWz28LPI%2FGYXevxsZ05%2B1tDw2cYIsSGATs%2FpGheBx4K2hnFwJEiWjXdiPmJXlGBZq9IMulwVjKe3kYeHCddWhm32TmZXQ8sw%2FI5L0Yiv59USuIlTh7%2FkCB0VWVv0ecoFzaZ54Cqh%2FWDY7ZqKVoWGNPUSWk4HI7pgblT%2B3xELND7wpEyONTWTTPVmhcY0Qk%2FbxXdMPiI7r8GOqUBO8BMSe4m9%2Fat44IjUoL7dumbo0%2BFxyE83o4sENryYbC6GfDRx2hhMpybgQNC7ydKtiOn2mjtiCaER9Ivav%2BDQ1f3hDSDJkVQbhbT2BsxLXCyVApH7g%2FzGfVqZG%2F2DLIuihphwBZ19O3b4FfRg4LfoOwhJXLAav66ur23wONcj7ujYf4RjjI5p39XlfjS1corXQl%2FLMKNKWyFbmz1QUi57DTMrBB1&X-Amz-Signature=888f723793701b4d3a007ca55a5c03398e78221ce0b844c4b7a2b297870d59c2&X-Amz-SignedHeaders=host&x-id=GetObject)
