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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=3cfb8f72757f9e0114d9cee6c4d16d3ddd3cf261bef3171d121c71fe7f6eb6e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=ffeab352de96be59a93d42c13c34c4cbbced4107e889786adc43d5c8e4735cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=1a187dec58206f27e687f557b7e2eda6f86a10f2535248a4b1fee28404f9bc65&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=8db095c983bb81a6ff94d98c30f695f1bd97199624d852903d865f8b581827b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=8416a540cfa3b348fc70d9eda6a77dc13b7adc7ad87906966e23ff8627720fdf&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWEM7WHL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T150827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoHGZhdyhSg6OcMOyLD6VviKRAA%2BEOdV13NEqKtk5HsAIhAOZUqrc4ZSmFDZ8BF97Ig1arivC%2BtWs4qDsV4tyVmODEKv8DCHgQABoMNjM3NDIzMTgzODA1IgyIeBg2gnDWlsZSb7kq3AN033kXDAK9oAdv7WfXFEWi%2F%2FObIk5bsMhIecM8UWAW57mKgXtTXGrXDwUi4A8%2FhFcObdyUeXXoTtit7mL9S7SvGlMcDIISCQI%2FRbtHYk07UiFDKFdIkPm6PDTg%2Fz1FOzsa7jdifBN6PGpr8vrMQMKC4Ew51gIIZb1igCvPczPH1eNsxgMFYpQ99wJqyC89XPDqNRU34MB2aYUUIGPWAzLUmKSz7PxLM6WNUhm0LCqJvdGkQVZNyUly%2FgnWbQxSGcXdA3MOdgWPf4Q5KlG6I0eEjiHqgabpuNxlfhU4QtklVKD3BJh863dWe3pxq2oq63h12KWZhQQZXgg6aUyDhWTdbM0CRslkJbeVJrmwzn6QolfPFS99pKBK9PVFn1ld5kZqDH9tpyqqHfDHjsXxa3X3zfhThJB590%2B7gnGnp51TmXosAkVu%2BFzmD6fA8aEinb5LjRc8KP%2BTyQKO5vwSC6sSk4eKl%2BGxojiOV%2BZQ9ic1WW5NzeHVB8Y5gBzuGQ4tqGf%2F8gB3lb0rGNN3l6TdrZEqgRWRaPIz2WF%2B%2BYwDOfHwGX5LEf7%2FqPK1uWjCo6ho7uCEjEGVdmUU4Uh5cERHThJKo7UPUPd0HW3pwm0%2BaCYfR0CFMwW9DhbkNLcAUzDzw4nABjqkAWkXBkNTRIXAw6IzWqlQjXqVuLdRPSm70H%2FjG%2BN6Q7y34W1k%2BOvakxfpsiwzocob0%2Fr1V5KRrzoxGhVcdOHv4odG6GB3MGO0J21xwFUwtw0I3uZ31Ff2Vd9ITGnrmsG1IwvfHpyY6atLshn%2B6beRO%2ByCCiNET%2F4A2fl4Qm5cA1JPMTOq%2F4xaZSEEA7V7X9%2FJpFqtu9%2B949DUSMWwFub%2FBI3h8Kom&X-Amz-Signature=7ccf598e02893ae97de3916d562715020b692265b53f1c82b59e702c261f75b2&X-Amz-SignedHeaders=host&x-id=GetObject)
