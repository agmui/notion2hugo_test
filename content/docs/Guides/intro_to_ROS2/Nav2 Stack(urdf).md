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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=2f323226574856a91258c580fc39522830eff3582396fd261b2ff5e5ef4d183d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=0d35fe80bdec5bcf5a5b9912797558af81d8915c61c5dafc8b75bed45482f3ab&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=9fada284e65140b5e43f2a56d1794d20e21d16a84c6019c1f6b03cf4ac9435f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=bc7661fc9587a443e5360e3b289bd0e210ca7af61f3d8139757ad4871f2f1aea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=9fe20346de8d16285fe1e50f14cf6491b7a6d745bd1d469039b4325755cfa7c7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W37ZY63F%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T070858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDBFDj%2FK%2FLwbUPUeNojtakw1dkBtJaA6nJaWF6PDFNGwQIgPc7VNC1xqsxBBHlSaGVh47HkZZyUWI4ppkCbuB7nWlMqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHd3wZHkZn5beIY5kCrcA8gkHECir5EnvibJ0%2FgmM729pfek%2BWlagdFHH1nuMavn9Fwy8yjTLNJs7hboafyV1ldRrmfbuM6C25pdBDxvPCzRRGmMlIBQBY4uf%2BBjShCo%2Fd2B00DwNpSuj0xI0civwy6S0APrQqr17%2F3gsHFenl7hSj6FxhTJgZKlUNTL7A08wlioj1ZgLcUlBKO55tXgdl2Slxzp05f8Mk7Yz7Y%2Borxw%2Fxtz5PmPTzx9LnCpTuIbMSTzmDbAIjUMA1kYKSOH4zrvXaCvqp%2Fe7rEHdoGFWdBOoFyyh9PU6fnxBE6Vbu9t9w4zcS9ypixOKTC7n9MGrnfZqFKFESx6RrSsCoICuKX%2FXlDtwdMj%2BIRzJbkNtaWe9RuF4DWu0ZmttTpwOuTuMjmmGQ9ld%2FAzsCq0Pslz8bcpyJyhAZ0kE%2BlyJf9SK8tW9EG52R1ev1N0v0MMkMbpnThZT7MiWkONU4dDpFqC1aUdLSRPicz9oGiceeYgK47pBvTM11%2FiLrJYLmkEtLMf8M2vzMxgbbCsQYAEuBTPKX16MWQ2LE73IvGtw4Sx2neTs52C8evWlZH64GZsK6ybTvFeqzsiEujeLD0%2FR3Ox0CM7SHnYJy8DKdWuNeEETnkdEiMKW0PCpucG39E1MMWwv74GOqUBj9MfWxoOna7steV%2FhmJt%2FueN2fMyUkwI%2BNsLDcvhZfItTFTh97geGKAdevj59BmRWJFiMHUInXpR9SYWHbms4RRQgHcjHwvUigSO8Qh6obHw8RpoO5X3sk3%2Be6K6n%2FM36hw%2B49uTwaD1HVVHQ%2B8g3H1%2Be%2FtTvsFGFwWi4zmIHTGPx89DkACyz12lkonUvoknVVM1ivH%2BGGkPqO4gQc7O7SpC8Tmo&X-Amz-Signature=64a8748d2aa037ef3a22dddd302c1986c4f2e24cb069e5a1cc86c08267815ed4&X-Amz-SignedHeaders=host&x-id=GetObject)
