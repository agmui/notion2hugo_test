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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=89c4d03a2078cae0c35ebe5d52c59da9c4fdbb7f3ae3517e582219dd39548196&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=cb7f7b5eb1ed8efaedeea34255ce6716afb828b3f067663633ecb62eead36952&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=592e51f3e0b43ac16d1604de2a92da545c88cb1c6a88edac48581b9a4f99f2d8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=01620d42ece7ea2395e481150206dea70bb6224a67a270d30d412646996c39af&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=1dd8bd9b1f656708261ade02070386fe5723859ad10d9f53cd82bba93f7b2863&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR7UXTHP%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T041539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIFHX9kUK7SfKfIpnJvFeQX8E85ftEm0NE3NKnfnoA%2BGEAiEA5t%2B7nevcoFH%2BlfFUJ6DnqBCB%2FGszirHAU%2F%2B8SjpPhHcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJHHZ9DmyRH2YdpAWCrcA5iV9o42ytt9dtfwWv0OFqr5rrrUxFXZPUaQjCPb7IqXT0Fug0kJMUtwBzPPE23k3Q2ZAHRha6d4btlaSpZZD4OMdazT3amDtm3H2WJ9Df7X37fbUlEciz0LlWeTTLEBq8cGrlXmFPsHIXCoAaTEDAwJRiJBx80Akftl4TM3X45tfhSnQ0Q2wSKKRbvdWYz6q50%2B3M17Ag72LQnZ68kN3mrIbUo%2BwBlPrCc8cCZg51fNJstmg8tYk10fQ3x%2BEo8gCgqB7I%2FheN1o%2Bd5gG%2BAE38eYp98clCLU3O60XuUB4jPwv97EgIrD8t8xIS0uFkVNGUSZfUXvYCSUTb%2FmAJEFbXHdRSssxFB7poKQzJrSGSs4JiGcRliI02USLzmYl7hqpx9QaX7wSegUk1T8LWW173agZ3oMOaQlLDsOV4%2FGv%2F4lmu8BFNz1qCBiiik5Jamcj7vWw1D0595qwNTdA3Hp%2BmKbIZinGvegSMXaFghKtCaxBJDVP6YE0qHrlqQalVGsBJ%2F1DRshsnxiIleJyKzMxc19bQK8Lboo9bDoV3kkdXr6lebFKDuM%2FRrYuNYi%2Bg2ndg9%2FdSMb9mArqc3kW%2BRwoXiBjH7BBhGUxYIcUE9qFqa%2Bu70lw7tg%2Bv%2BbKrDMMN6dz8EGOqUBI%2BN0RMBiuQwnhTj82k2dR2UaCFkPuVezFcz%2FDjRHaQk5dTWReaN1SlBSbGwDwwD7a9x6f4kibI5%2BwHUft5VBbpuPcsa8nUr3rZl3PfJDimHOmNM5kNCsT4Wmffck7fEyL0%2FeGvj4nmdkp6vijgPfvQzxpC%2BywcYGJBex%2Bi8nBIPWBaNNqogXGaM8zsTZStIHvqA6ST2hgOVIhYDCs%2F7voXpbFrRi&X-Amz-Signature=ef3025f295ec81dffcb56af5a36b8895fa8a7b108fc17c854122464a4c119ae2&X-Amz-SignedHeaders=host&x-id=GetObject)
