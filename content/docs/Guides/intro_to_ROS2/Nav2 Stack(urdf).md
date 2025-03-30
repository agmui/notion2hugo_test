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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=d3e54c38e24f9a16e7ca6a62081b39d1abafddb0d13fee425e6360746eff1f17&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=ad47540bb58d799e9bd2ec93d7d3901de5ca4435127fd498db6b13649776bc37&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=b2d885d985f9cf87d65a444b52c1a1a68b655659a6941686ccd86b6193d1b368&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=68cc1c341d01927fed730037a0636cb1f55591447376e32f44e2dc9d414155e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=23c02b1638cd22e8d14c0b5c516d9d9565418052b89eb86b54113b2ac67140f2&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPCV2AWY%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEfr7Q9QrFKHl9ZhgN2wR1dFJ9KKiDzhqAoFH3MLGf0UAiAzG%2FFzKM5X8OUqhuGC%2FWOsq461YA6e9YTkH6Amvm%2FS8iqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJ8kpKvFOL39I3a%2FSKtwDdIemowIVxzil7QNGrp75hXnH%2FFYOdZSCSfcippNegsfUwcJMxLTxjph5oQV9htctdqLDs%2FflhuN%2BRLEG1c3GAuWMY1zUrpwy1bceSZybN73HGJ9p8BbQy%2F3s5M36ZiYOa05nrKNuQLC5mVnDddf1DG8oBOcKCOLYcOl8xPDUxnZXMbSYCt8WBzEj5%2BiRr%2BS0lqm%2BAbsDa3GLL27cwDpOA7AuA%2BQm14Bsi%2F%2Bgt3KaDxWtSD5cjZeoSaeUv%2B6gkj9y4m%2B9jXLBkVge0kEjKjb0GgskqC%2BT6BrZCAyrI%2Bq5fw8kceD%2FShsxdS%2BkWwW%2BVciO7MfMVB72tCzWwwT4wFGp1qEjDXwZV7JSTmswvjwUqtT9yUEYsqrWX9pmPV74HjyBc9ZCg6JBWNd3cKJ9Vq7uSgjsaiy4cmYZm6DeT%2BR%2FOhwcDzbcqyyRUkJ%2BxY5EhGTUJVadh2Tqr08eHyjnw1ZonHUrKc6bEqJzHuNVlvP1dMFWo7qr7JxZY3L%2Fis9QoKVPAfSsru%2BzTRoXxtTgMsdxhe4h2w0XbdUgJjAIFZbovBFUDvNDeEvZbTPzsxRr%2BlLz6CgYlk77En2DMuz2IG1Aa%2Bx1zCvIUCWc%2Bqvq%2FSPj3yaPCM%2FGniGPtvF%2BvHkwxeqivwY6pgG7cqJ6vKXPqnNA%2Ft608JPzx4qgUL%2Baq95Y0gnQIrMlOYMV3leQ2eEAA30bCQSksFQ0GNM6pFUArYHpOOeMKylWg%2FuF2r95G%2BOowmLNjyd7kziz21fPWPXnl14vIB%2B4hyM1dBPz6UPo0gTmdZXWZSDpQHcnx5%2Bf9o9zjyd4ztf9HpNQnc6r9EnnYGnSXqHZmdO8IlK%2BZ9d4j1cCU68ywJjsyq%2Bgmb77&X-Amz-Signature=aea61a1fe438fc1833059e86f58c866be19ab2c680cacc3313827af53b934d85&X-Amz-SignedHeaders=host&x-id=GetObject)
