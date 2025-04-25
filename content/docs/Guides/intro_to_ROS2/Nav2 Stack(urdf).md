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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=41c7528ae0901305f5fa96fa1d7321009a553b064e688d7619332e11247cef48&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=1a1974a4e7afe76befe32e50a93945f31cf0540bedf4807c0fe0373df943cd95&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=31068e87eba00a00539cb3ea8a171052d2e8ec4c02106d5d750f29a430946986&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=7fcc041c2a7d218b305793a149ad945c66c0fb722cd8a4633f0e81fc5a5d6ca6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=8d807ede64d2c010c33b04e509b007ec3a73f7a338bae836e62cfdddd59bafec&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYV7M6S6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T200924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE2M%2FnHvvBf5aBX4QJKydXwufm7nIQtOR%2B0baRc2KjnPAiAOiptPM640r3mc7Wixow3ZfOKlrNpUMPmH9702Qj5xZir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMz%2Fohao0KVFRE9YdqKtwDaS0nxZEM7cRJNx%2Fcf6PJDbYbvpEqOX5SNq9EP%2BU4YD6NNb6PjS4FW7zqpXHiZhltaVC%2FAIaOashWZDEfS15EIbM9t1HkP77J2PoSH2N095VuBVASBPxUIgZycEK8f7cPEMDrkga0%2BIMEmD%2BTPZrNklf31AmuFBdqs2sc%2BD5Iy60QV7wHS3OlKxEE1imlcVss7FSonuBSAJ7V7EDx60Pl23WfHB9FtwJI6Zw2ycpNbWMfbg1mkIkBsWPyRb9cdQHHM2GsFn1MibQo%2B5FfN0NeCPPwFKE%2Fk58YzgSMMxLvjHXatQxRKM7CJCFentmSuOcG%2By2n%2FyJqM8q9X8xH64LkntrHck%2BmifzFiSNMXe6P%2F%2FBzo4Gjg61MKuiAxGmZ4nBvn9tlDOyXF6mVulz38VsCHI69n52eY2XaTMy9MagAtEoOu0dGYrS2iAdMM%2BXHOoVY77drEyBlk9YYKT2Q5GDVGIvT9RyjCPCYc%2BoRZ2cXXRcMXcbv9plqozImir3Tf4JFjzEJmwDV0BZ7vm%2Boq%2BUVSnRVfZ402Sv4QTZ4bjho28UDLSskWAxWBe%2Byfx6MWjSiWt%2FwZyyusARUwUtTaKIQgjS%2BJeU%2FdGTuV8oWCiy9RufPaBwLBVdJuR1%2FfgUw8dGvwAY6pgFAnPRQwP9CsW3%2BNg3yLwVZIDUAN5KbputbUtfpkelykoL%2Bj6KK%2BYImR35A2fIgrEa5wnueQsWpgqbSH0zcMrtlcUFRyoVQSe49WT%2FRFJbidwODjvW5Z9%2FespXEvle9%2FPebLElI6s1hcI03EsAnAMf9QlOFamFM5zDBNCyQI3HlbpS4j1%2BgvdK9%2F0niKKYMooHrGEkCUx43bimEigCR%2BgfmX90pd3tu&X-Amz-Signature=3d23e3aa8d2b1d18941c3a23dc7de8fbad7be60bac5747670a3ad730594661a6&X-Amz-SignedHeaders=host&x-id=GetObject)
