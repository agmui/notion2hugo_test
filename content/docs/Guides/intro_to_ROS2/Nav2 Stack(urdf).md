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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=498cd6b25c53fa19dcd8e33b2b0687b4019ae4a37e37c590ea52749707515106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=3686a8baebab56905f856a2af8daf55f45f8f73fd40683a67aaae30125da2786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=ea37fb237b727f956b20cae9d92ffffa80f6a4125b82355d8fea90f67e68f3e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=25885d2a82fcfbad6424f24f7ad75b4d69a00330fbde695fe379f848f815aa01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=bde47dabaad4e674b4bcfdaeb93b16abeb6155b6c2d8cbdb3204d6309a84f134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XM74KBXV%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T230823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCwVrE0vRjciBSKdyjTqFhnsSMCO1S2HlyKVuTvH6oAJQIgaN3cPCPaBQTYBVkYD46%2BDBTiZ8tCWYQWV3Q%2BTLMfkrMqiAQI4P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP1yFsbKR%2Bcm3%2FU43ircAwBWg79USqevh7prBDPeNVlYvU6%2BFMHHnZ0kaRYl%2BBKl3Z85qPhkbySgr5JnBHn40mHdfL1Y7kQZLrFMNoWd9zDe8mFy54qV0aXPtTWj0XdfU6OLpYKwuHIVW3uDKZ7QDJNfPibSHa6Tj1d92rYJQEQxiJk5U164ydRN8vxlSaKakDUIhcQxIGxV2chGw7%2F5%2FrJ4Y6lg7y1lJvUpOMIgpVfqz0cgd1Wv0YgRe3j59sedens4f9xY9t7RXDg72j13D5nTv6ARVDIUKWrucRtgyd%2B3%2BOBU6nO4UhDeIxNjW0lVPlPugrIUDi6K7O%2BwrMZKD3DVm6zWEKNXot4QE2A1YcwphPnQmHrW%2BEPfEopf8mLyF960zFcZ6HeiP5LMoxWDC83a89SIOc3Q6%2FHekYqX2gmBm4oH0Sq63qp7oKWr%2BGhUwngdXLhmmyG907eCes%2BicN95kEx1OsxeSbaH%2BctmeGLPSOterj56e2Ctr0KTze%2BqRSHKQ1qsMIoRb6vvNe%2BiBr2mhpf3NH18l1tSOUL1zDhiQX4PAyxqkE%2B7BlyKuLiYzqHNJyFTSg2IRgLA7A3aLCHA5qgfhZGiPKs4Wm4gWVFqBsuvhcS%2BpDVd1MN2D2Bog5KjNVBfrgNfN%2BryMOmGqMIGOqUBCL4Duv7hutIohGvVArdLAA55bmcf48UZwECTvkqlsNOGK%2BtMKyYq%2BUZEQob3r9vR%2Bw7Ypb0djWYxzKbtv3pMuuCTNqAkP12kJoh%2BpXTH9bi4zjcdElTcoP2IFttxXqA%2BU5OmrxaZ0ycb1VfX%2FqqXcOj03sp3cERrCROfT6%2F7bM5%2BP8LFkR4U%2F3qA8AXkXQGc64bZLct6GXuwHQRKfHY8dNrwO8Np&X-Amz-Signature=02baab7f36bf908087620d309d876556a70bc56150d941fc94e6af234dcfaac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
