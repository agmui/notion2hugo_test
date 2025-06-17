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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=ef829b9d5d14bce123281fd23cf53688d8eb25fd951681efca465908d20ade72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=7f18bf3a2df659c64527dba5042b58f81aad0e0d02f9e8d8299f1e73310b6fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=cef67a105d506834435b75f96535f4338d7c202469311e64c91fd8bc8fd8868c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=a825924ff3509b0e0bc5b02aaa2128a337e5817dd4f273a04d5458400c987504&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=574a1dd8819074acaa8c372cb93c59ec2d94e1f6822db529b1cb6d57b3cff193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJJ3HFNZ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG25smmtQVUhIlKLLd%2FaN1YM8MfAXEm9AjiiAakZJEVQAiEAr8zcocglTrJYSl9KsydpillbePy3mjx7LGkKT9ZYcOQq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJlldgXZkZ90iXiBeCrcA3EHxsaZ%2B3xJMNYaq%2F54xkPOHPznqSw450lC7t3WFSB5me8qR%2F0EHpddUpYDnpkN5GAMt5QamuLA%2BrpKQqu53fQJoYGP%2BL%2FRiFVRvbkG%2B6p075AzjYHbkF5XmM0q8ntNsGxWfILZhes9B%2FhQpu16gTlLrU2bfuQB5hTDnQ7GoRm%2F9TbQJDHthDNsX%2BVxXsD2yFt%2Fy1T8JtCpsLC7%2FCbj4lPi7oCmtkCSf3sR22%2B%2FcxNdZbt2cNU8UjluXLv3H5S4pvN5OM0m1FIITctsnEVNct9H0rWugDMCVYxBMkMcaYqa9P5CMTxCpM%2BpKaKEoCYE2GtcrsebP2IbbosBn%2FdvnbBt1pLjH9HyM5vaREDdsI9%2BSkMO%2FudDSBA9%2BeqkC7SJoqG%2FVGwX7NiPw98ftWFdhqF164HXruK84HVQ01JnDSoDyvYGVJgnvtuC%2Fb%2ByCn6xZQ7IWNQmLPM6ujiDzk5Ooh9T7hcld5kSN15KjYO0%2B%2F5qlLnYxs6yo%2FqdOb9SZCBR0wtLFPf%2FEaMXfqRTpJoAcPfmETdhG%2Bcimv0TpOPOYqHyolVfbnUBWttqD76YMYyXU58f0B4q6L%2F0tiGV3YxHe9u4Eyz6VIz8vnBH0NUSPxQRDgRyDNrWl0B2MYGCMO6Kw8IGOqUBMQdiwIlu2KcASKMufNhWoAXcREaJ%2BPhSmzkJEtmUyRe%2BE5VSIuhGBJYheGGJV%2F4DpXZ%2FAQRfSY1JEjtMA%2FS0jkduwsPVwvkxYG%2BGQO%2F80iwlHwkxJbTwiKS%2BEC%2ByzWvZkF9LAEud4GO%2FnuMMB9cFHit4Uzcs5bNnwTRohF0GbqmrtkOosYdR5Rh5jS6BT3apofMLoqBXQfH5YKk2ThsbMkKb6BP%2F&X-Amz-Signature=533f293b8fc2b42d6abd8f8d42d0fa267435b80326413b2f187477714f24d7e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
