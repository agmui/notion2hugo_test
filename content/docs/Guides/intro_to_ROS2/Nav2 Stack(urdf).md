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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=f782d4557d24d4678a3ad6c6e51f7569dff568893e655fd50f308f000c0ff68e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=5a824fc271db9dd7099993e8050102cb2f45903bbc7ec215e40de0bc419a84a2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=5bc550a5d7642b78ac4daa365d9b789a5b2f7cf164e677401e604a37664f7edb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=3891ae9e0e6577b059ea3952751bb8486ea535805a57d8f7ba2617be71ed14f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=a540d8b9ea1e0a319e1c669675232f3ccf6c7b1378251e21d3f5b311f49efa89&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOSPL7X5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T131737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoCeoCAJBVl1mPN8nLq5Bmd%2FkCTN2%2B3%2Bzlz3mJRN9n0QIgU%2FEbibI3oriO9N%2BDg06dJnJiGOOOo4lt4HGlgxnKO2IqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDg4sq%2B6Bl5VCOPmsyrcA1lt3W3iHYViIDjOLog3yitBO9HBaOHaimVf9vLVNyBgyShrRhZNJg7ia%2FLjUlsmddJci%2FzLDh9I5AUnA9%2BbMp13QyC9WyNpKOcBeVhfdKd5r50%2FrBKeHNAFzz9t8n%2FAm3QAullbGZbRn8pKBudCYzK%2BTpK5V28d5duxvNOxVZ7CwX%2BESru2l5XKjf1e%2BN9JyQrF%2B2lATYM3ilGHzBzYVuMzK7VFsR54P%2BOjawQPrJq4BMDFHgiPuuRSItRhxTZ%2B7CSDGnttWxZaiFnm%2Brd%2FP%2FlVk%2BjG8xBh9pltrcUVDEn767EK2khGzSXb7qtP%2FycaICkX7dWWoiQoRlTlF5%2FrAE2ULc1mLZUtgWqISGAYHAhEI7ABygLHNdpwhLLFdMggYnJMQMP7kbLeJyiuidWlt9w3h9YVa5ax1QhdPv5RZElPjAJk5WaUpqDltDu1maTLL9HEjt8JJSwudCcnoADi%2FraPa2vF6HL0o%2FdD9B74s194nFEqBQ3dYgZbcYaJWjoVXjECk3U2D4kQK03oR%2FlMzz4z%2BVQYiPlNp1qAJF8nVzstGrEJl%2Fn7RJu437xR4WIMjQYkoEgV2HjFuQ1oY474WJ2sudQRDU7HWOLLs74MNIQBHGGrEBdrG%2BJcNkUWMKPqm74GOqUBCcAMVAirTwkd1qoxME4YUh2qwmBaLWqfmosJkbHV4LZXiyZmHDPh3m4sr1CPAWQGYurUhwYYBDcruG8qKw5EaatBPBfCqMAyWSbgiYKREEVJfY714bie9aEDv9OXKOmZ2aehdJgUOGCOsvp5TTEOLysiwf668wdeOgHzSAlv0W7w5Rsiww1EmfkkIk4Mb9nCq7N0g09GxPCbgdlc3OObab5XHITK&X-Amz-Signature=36094fdb19272042daabda18888da680f758ceab5efcb8952f259c417c1ad74c&X-Amz-SignedHeaders=host&x-id=GetObject)
