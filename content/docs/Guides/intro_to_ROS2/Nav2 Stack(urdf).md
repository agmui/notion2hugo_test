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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=dacace83018643a936cd76e52c3ee41885d18526cdda0ba9e7ee1e9b0e4b6723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=0d98ea0e921bbbd9ce6dec566064567653cab29b8149a31e80aae858c16c078c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=ce62d0366dfe40c4094b672a3ff5e5196909af72dcf607d80761b93d2e306576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=441ee020f99c90986ed3297560460b6989c0bd96ae6d34be91e7c41ce6c4b89a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=879bdcc98f4c1f7673d42a7ec8f74a988d5769ec95d17a5bd158e0df5aba75ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6QNFE4S%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T150755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIQChCUrAFR%2BeKqTcaElLrmKx%2B2YNnr01lobY5KjT14DnWQIgTuvhyoGnvjbaC9rX2a97IDaRFnAj5o2snRrk79rg8s0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCCwcaWVx2X0A2FfVircA5H0P7aGExVXCef5G0pplDpjgL1w8%2B0lBDB%2BUALmGiKiWnTgsApmjiIh1M79zmKtkb0hMFRozqgQ5V%2FcU74BJfhgHAz3ydHC6zgrVae33e3K71lToDO5en6RTyEquT5eC5c76oZ0d7FyC3ei3RUJyBZ85HpByndRkujS%2BO5uJwHV17hYNr%2FaXE%2BnrcAQT0Chfr3aDVYFjRZtS%2BcgqjGEJp%2FTEJumzqX1ZmTQaT6giGaF7V0rZUhMtay3QRBsq6FtS9tikADB%2BnmvQKPKVpJYKqCf5pe%2Fms7r4IxrU9sctRStkl4%2F5LQQfbCjCLGsMVHmoEJEe6IAmqKg1Dba0PUIszGOYjtWdSNe3tVjnQPDN4BPwDDZa7LBuqkQ0bE7Grg%2BD%2Fwr57HEdbun9aytFQUgJDAB1OlZ9uPF7rZlSSiidMua8e%2BeEIUgDtt%2FOY36NTa0HQwVOVk6WdwUyL%2Fb%2F7Le7MUKPmNvJqoO7mVdSadGJEi04D8T71Dd0T18e0KKvtH%2FgI61DLBd90PTPW6cbDSbvh7CQx54U3NLPjhH4JnfSn4wmnrBwErJgo0%2ByhSB3UQdtHB%2FE54M6oZmWqMIMJT9HEoHR9%2Bt6RJw%2BoKu5RUiKhcD5olp9pFBnaxFBCtOML7GpMMGOqUBlGTQM1UG%2Fk31Mlq9Yaxa4RbhjZyKlwprhoddbFO5x73LTuCUueFdLxamWsjIJeANhciq7itq0tH8PHa0gtVTkAtNBJa%2BdGOpKYf9AwU2K5e3qG9JGc4XYEe7pEAmreih2GI4lUyvxs9hi5D7Iefy46nZnG3KUhVaiBqvqT9KZCenFLZ3zqTCtYIW4iIz6IYQib%2BTWHHOc5nYXcZ%2BYyxGhQLbhitV&X-Amz-Signature=d5f9a4d4d020bccc2526cfc2afe54aa3e737038f849169855f11979901a8d93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
