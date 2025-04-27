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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=729adda3b78fd361182086779aa315cddab665e5833677341507fc838e2fbeea&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=1338aa61b7466c6c7a464dd20ee7126f2f1ddc21fe16de86e8eb67dbabab21af&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=3eada1e95337822b5cc0209f341adbac5de158de279db6e5c8447843012424c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=702984ef59c940fb0ebd8fac359b7353218b80fc9d13e039961b3da16538067e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=97e87821f4425890532fa122f43a650d005554882885739be4c3cc4ca13b973c&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466345L2JFX%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClXqJsm4AfiN5zGWEeZZP%2BY7hHKlPVZtMwKrh5VS1GJAiEAvPIYt27kXtzGzVXc2SX7aY524yl%2BFO%2Bb213f%2FcKL6SIq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDHXq6DJb7Mn8%2BBbjByrcAzDnncAR9BnUQMd29eoHDCxOKdbQ3Jr7mg5OS7VwlwXXEyo0fUi3BJfMFuEzGZsThu402uU2BHxHhA7LC0PnDs1Q%2Bs%2BYWNy06Ln2AQO5qaKk58wJOe3Q2nsEsfBgV9gnm9joZvNM3YkiHz%2FO9fzU5hlIraYh%2BZY0j4ZZnwbYAeH52Akcq1HTxS0rmOQf%2FQDte9KQsAnQfIVls8s%2BSVvZhic4yxYBLFSH0e384WxmpVP%2FzK4ZKJPvgbm6qAsKr8jRk1ErY5ilug9BkrYYT9tQuXlowBtlztMZraDt6QYUITEtk%2BGxd21Y36yDb%2BaQBJXf5EG6vkeHSmohMGfBqM59XLpcQgr5Vv6quHK4C0u5N8Cz16HyBTQlYQUf%2F8ZnKAa3VECOPRjfMHZ7dn6mdicH8LrWPJyjGwNL8VMZfMMFQoSV2lxWf3zohfMjIxzNGc1mOWCCyqSg8E9gPiUoeKFuF4B5ELrL1e%2Bk0hpfeySNXU%2Ft7U8mO8mTJpEwcpbpxavk8KJ4xCarNCldUZvdjnKb3nTfkErKHJdTZTny7V2n67VzIfgUNysLHStb7aThoOMOtmsuhWbRw9YUaP9G%2Fy1WphJa72WSUtgvard%2BDA0mFHdEaYZnWkRdIjibtAuZMP6%2FtcAGOqUBVvjfrb8KQsE1SoAagD4ohnFM69FWZHne9BVdtfdO7%2F4OQuNWC3Mi5GNF0LqzYsHv%2BuGt3SdNTNCrUWBxzdREB3lPS3Vg3MDf%2FZCm%2BCyNwDgNqQ6DvzW5sap7lyphpk3unimAM2OAqALVwzR08%2F9okeS8M3QH%2FmyFExtdKP19LRexdTcBSjBdOI3UW9w7PcBV%2F5u946Ih1w3ATjNYC7ibB7vyz6Vr&X-Amz-Signature=c4098c7886ec1093cd7383915ade478975659e2eabb6e5fe10480625b9a0fafd&X-Amz-SignedHeaders=host&x-id=GetObject)
