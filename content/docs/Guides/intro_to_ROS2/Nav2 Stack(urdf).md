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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=4f6a8d89fe5daac2d248337edc7a26059c2445379365746bd6c3f7ff8d86782d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=d2032ce4ca92245fbbd4217583306676130ddd511d59c5cc593bde1f46965143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=1a287dc117278610d3f038ce0049253a1d6b15922d776a926907a9b56f786784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=f79df87118d956079b6cfa7134838e9175669881561e0ae5b57bbf4b96a32e86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=7b7ebf5b790329e8ac0d1b04f9db503877b0604336039dbe1c996fc1b31dc752&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDABAUMO%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T100833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDnepSIqynY5K20RFgjc6bAIDlJlyiNONjMi3mWIwriSwIgAxK%2F0iV0n3UdcqqOssfV7CdwT5dzqocRpuXIyuSd1kgq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDAH5BGCDyqVi%2B4Je2CrcAxefl9EYtmTlKPfiGqjaiyjG31%2F4ba8SqjIJL6sJikHJkoG3pVN%2BaZdJF%2BrVXpLJjAEdVwePfQmcH6UklQ85N3o2nAOxtQ5MENxeOS7CkgyTNv7IzLVru6ixwlg5PUV6wcvUvU0OGUkEXIci0crYjasjPwEBQbrGf7Qj1VeEhc8F3u%2FDK2OKfDqzRFWZYEZpuVReA26ylZIFOwFUhYFD3nnHDeSMIY%2FbXFZRyVSfORBNUA5yuD8H3ti2NCrKVlgxDmhzfraEY%2FOSdsce%2BAMYqzE8UoPCl5reS4qgu%2FKbYsnQM%2FlX0QkTrCG9qUzhx%2FOPwnIJl3rpT0QD3yW5cjU%2BfCuu8CEglkMjnWyxmcFdNYv3%2FblNdYmKlK71HH2bwTX2Lcqih9SG4JP98mE1SgDf%2FJ%2BQJoBOmGx9wHMZcbcJT2cmFEk1zxp%2BO94fZAFlevp2SZN%2FT23dcZ25CxWc3P4A8w9PnDH9Ne45q0vCXIvHddEDTVx8U0EIW3DZ1Gh%2B1MwdYR%2FKiIdBEppiY8rvLqQ3n1Tmf%2BPyZhHKxWg6rScXbzWGddxefE9cNzsC1i%2FoGn96S55NxC40FaP%2F9wpjNW9TdGOep3j1%2BePXrGnmq4qmp3TOAh5SNN%2B2c3UV1yVJMK%2FZtMIGOqUBk7gROcKw5iBveUvhz4jBkA2dqfQ7JgMasHQ9hDoiDHWga%2FjtzFtraX6aQSISprRQRJmzKLomQE2OyhLzMTz%2FDEJxqQYW05EECW2lgn%2BjHG2aCDoWh7VyjWWuMB68%2FSYWVh5O2%2BYP2A2d4JTn3JzBHgcR%2Bu3OXvl6fJJ8xEDaY6pMy%2BDtN9gDtN5NVdVmXHdgcngdqSiIfOyOWvEkpIHrqVm0OX75&X-Amz-Signature=2185ef659a6ce7ebe42ebc95fbc3e80b305ef5ee9dc4aa1319c2b393fbdebf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
