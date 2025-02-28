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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=f23ab2f07a56decab542efd9fabc34f3d80dadf0750250a12268b80c9e2a24f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=5881cbd276517ac9b00949239aa5cdd9746c402065b51ad1f1153d5384f86e8b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=53e65c320471ed4524bc2b3c22f4698efe7b82cc39eb9b4ae64914a42068c6b1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=80f513cb6f70d41681c7f1c075e7fba09c4f98a5b3a06f15e28fc0b8e5b9b680&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=1d821df1c7c868ee3663b299db15ced2f5a80617fa40689e23b189a3d657b7d6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CR4RJJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH1suk7%2BAdpKAYBk%2Ftr%2Fm3FK%2FT5jT0nxTpxm3OFYr6KLAiEAq2XGr8y8fuzBj4rQTvNLTETQxN9nNzD9tmNBue8bRAsqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpTNrtVBaxKTkegVircA4bbmSoyjphMV61bV13tIR%2F%2BNrimX1FzhgeVjGfGVcpvOTzckYmgt6EVN2jsj0hqk8Ba2tuqImu9vqVKmcySAkQ6A6suC6cRIndOP3OxDLY5Qwd2qCsw4VboDwSuhbCM9%2BfYDWRFc7UhE9J5eNfmPmOu1QCsyTsqMRSeyNcVkNztsTNmvddRLDq23qRRxCXCSv0txdMIKRquOQKBRDAscaMlYE8E6BXGDyccix1pBi0xvmx144pQNWE%2F6XvvLIr1W2vJRAWAaUcsMtD6wG5Ip9lyZN6XsJkQOemJ5ZaYnjn2QEQNAkDA5szENN%2FHeFM0M%2BsR8b1B9QHyaNU3GLUI%2BdUlxDuxf2piA9sKNjXWpOU3ln3bB2MITyajvXNGdZkJnussbXE8GAdXlDYrXkuPsA6ZFcGt0D5gE7NFPUCPejxidPoyGxdjDJ8iEkfIsoYIAkoHxlYoEbUb5TASLrCrwh5I0oYtZUTKQ1Z5FjLHPxUUkKXZi1UbOmoc2TaGUOio%2FaxdDKNBRcs7OGXebgjRrShSG7qD23INRp1FEoNYd7RZZMI6dCH7Ytj9f7MSpmAzhNQ2rbUmi%2F7p6ydJ5O7AGbKa%2Bw%2FMhrZbQkVVsTlEALBs2r6mefBeIqWhK6tEMN2vhb4GOqUBZj41YqDS%2FQNYOewKNtS%2Ff7vRVSCUgkanNie1METMmW0EQnRxJIo%2FDPRbW8XzNqRhbnyC%2BeZ4TGjLzOJyfC%2BYC%2Bk7q52HPNiS6Gm8yLdfd9Z%2FAiiFsba3wM52LjYLLPlVmwZZL61d9fFK5Y7PUfVykMoP9GB3PFzUaoFPrILWT9i%2BGBSOIIs2PasosseucyNvYoAFn7f2HQBeXSW2%2BtedwVaOwVhl&X-Amz-Signature=bd804d4e47b9dc77f3d12aeaed350e04f533dd03c4ae3e23de00f38346957fe7&X-Amz-SignedHeaders=host&x-id=GetObject)
