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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=ecc336e4da613a5a47d113de858eb6949ee5acab200e5b9c637f5d98da239f06&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=36db605b70842da7fcddb790f502b246eb5304b690b49b1e912177edf7b4035c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=79986609a100f8b9ad0bd8fb1c26b9aae1a34ea072ce416a21432951a096b89c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=321767dbdd36679c92db7544512e7319d9aae70e7c66681ea07f3d16e98b2f04&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=a4a9e24454861c9dd9bdae08ceeac831cdeb51a410cce9096108521b052d6662&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGQLB4VA%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T210402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIFGByUI%2BbGeX3Qxckakjw9Zj5FGTO4DNVnpsENRiNjCyAiEA0k1uqmDpmovx0RWMiq8KHphoJOA1ylcmRP%2BwX%2FNhnI8q%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDFBZ8RIs8OoruhlaKircA6lihgECdLqK1Heo2uOuOBg6ilpFPSxxWbYU6aZxNQIYkdK876F2rZJMmnqqBm4KqCRVlSM2JLuCAr70TKRUy0YNkDCHNPqfsX8uJpm1%2Fw9FMitPAv1h0A4ylK2rV4YOwvlxiY3EAXeSsuVHT71ErVwRsQp0TBN%2BnU94UfnyAy93B4cRQTqVn1a5R5iTSSJER%2F3rHAx%2F7rwiNBNVWsmNSKPntSrziLoI1RVsXBuQGuNWL73lVMvvM8f8YEwlGNwFuA6cts%2BHHs%2BqCNc3y8BkOLKB7skwQV58FqabkLltSHMhKjX9isc%2FQdFknXZKmkQxL%2BXQgZKrJ3MBGnbuiabGfRQLsSI8zgGb1Zgm%2BYqGixvPgzIUOedJk%2BUwdgmw%2FCHNy0sazZgJSOVb%2BC2PVqg7Oy8piXnWydkpkGN1fEAAgKw0PfcgmsZMM8QTqsjOpYjFfe4HsrMbnwGYqocDsLlLFuIX5WCbpte4UUEJ%2BStJXGj2h9QmTQDUv1%2F977K5Nd9cawjtURG4nAhoKJ%2BX0fNaVXZQbvkkulu1rkyLXIclH5AuF7tykaTyliPmzocOgkihLMFc%2BvvkC2uU2Ec8qL0tsAGIB%2F1VVtoxrQRoRUB1uhuGoXV0WNM5jsaDc0KtMM%2FUgsIGOqUBEErGpVj5vba7d9vdKdvNePaXOtNj%2BeIEWQSw2BG45e8AhUsCw4Ojr9k3OGWfwQoDHffGArwS536Xe4QPJ8yVuWlTzDuRPZnA8OgjlIM%2BxiqH38pqUNUl8o5ioGQMZnhhvNn4Cfmqt%2BZ0KIIFB8S%2FqZWtmJbnB3JOSGIfg79vnML8CkR%2FySM4VP3%2FgCUsH4Muc7X2e1UJyzd2guXrXbpreNv15R%2FZ&X-Amz-Signature=7a07871ed4cd794223c62dc5cb6a6505b98b494d7eb5ec101ebe3c90aed75cda&X-Amz-SignedHeaders=host&x-id=GetObject)
