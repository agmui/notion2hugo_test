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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=d45cc08fa3da8f17f7f11362ec7925c257d0e2d43b59e45abf4a2030afd48304&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=0b463a7954ac61355a0ca5866fa501c353786eaddd128fab6c04b033a8318a2e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=fced46dc673f6f7216d9cf6e00a801bdf871d792126fd7aea2756ca716b202bc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=b3bb56a9589054fde36a02bcdde6b1670ffd8c2e2df9ad0598030f8026e1a9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=d4d5163d12c156bb9c27c32eb2a10664631b77c96ea4a454a3688b8eff31f07e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XULIP4QF%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T190743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIB84oLP9Aop%2FpVL3sWHs4eSDM%2B6SwqtRDXs1xHVsd4VmAiEAsiDeOOwhDHMNjy4OHWbBWFdEUF74vmpFBmNmyrNGnCIqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqW%2Bqeu57OwvuV%2FBCrcA5cnON6CchVdcouXfY9JngM%2F%2BfSYb8rd1%2BJUvBED3jeENI38oQTHB6BhDYJ%2B8i2rQnwaBYN6wVP10Ndfm4%2FvgNwV3fJA%2FHdFc8BUwkHTQvHUHyxWbLT%2BCH5QSdKzBhfX8f4aVIZ%2B3rgx%2FF9YgYlYHQC%2Ft%2B0wdgDNCVnMLGnBQTgSABP4vN1j6jK0E9XKCMKgaez0ilCr07U7iiMkzS3kYma4KXlve1H8uIN0OLcRkAsFSr6RqbF1vRxmeeN%2BudBwtOlC4GxBgDTNHLpInvnkuN%2FDC6EuB1N6L%2Byoc09Bh8bPOtSV%2BReQR9fGH7xox0SNr34LEZC%2B39V%2Bb41ReNkN1lcofYRGcWqB%2FfWfqH9ARc8MxWw73B1Ea46eOWYGHBmBTCh2aPEgfiDxPAmuTHCkRZ8fri%2FYPn%2Bhlx6bIIX%2FNg5jdaFxjLLnPHG1u%2B9A8QK48BZyrJ385MJUVhFm27hKR%2BQ6lKHH4HawdD9hUf%2Bpo%2FggIX3rlQ9lfoM9o0pFyXffz2u58cUOVrKLvy7wRexpOAHCOOC9DSu9OtaHR0%2F3sVopsRXpFXDGsDkf3wdzYOsOTlcFLzg6BmnkWFeiRPSW4%2FvDUYfKjymvJ9yixYMttmdLJ0Cf5%2FnfqzVkRAlKMNfAuMEGOqUBim152vDgVMXMVvMRsU9gI9GGn6%2BFXaXeeamStuqLGsJ9QP4k6yeNUAXEL4Kb6U2vhxrClFTiVIWmVtkXCzZnhesAIKpRKFJxf97U%2FTBH8WAsmT0TrJUk1NROhHIsfZv9lKi4HvvVfr80GPRbD44w6Sxh3g%2BwWAVG96DLZ%2FaCJyxzkCgcHZ%2BlFRO58kUSfYamttCGnDTkYCxx%2FaZlsCCmiBk3M8Ao&X-Amz-Signature=77178f8d5f28ce742a05e532e58db816b4a12bf21a65d249dd1aa3a87d7b826c&X-Amz-SignedHeaders=host&x-id=GetObject)
