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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=66d472844d00926bb0eb389763c2c4339c2734cb04a43b5be511aa1e24a764a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=e372b4d36279497b9e7061b845dee569809f3dd6f38b05910fb8f25e7ab3a3ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=9892235ba36416292839d83b06af4f91ec4c297c558369e8349006925675b721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=04e6fbd116ede83e7f7c0e2e77a953ecc224aea7c7343a72a2db50d6f0faea17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=7b6d2c2b56e7f51a521e0f294ca4e2294fcc158db547f1f31a50e25dd2795196&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XT7RZVW%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T170740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQDlhtqss6h6KcsJ3z498vXXcdhpUki3n4siS%2FkHncHTRQIhALNrALPfYE5Od5dx8Cr3SyDJbCt1nooWmjL6mscdtUk1Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyGrzM2PjOmJ%2FCGEAYq3APl8MezVAp2o1ec4YZ0dLhMIey4cl5%2Bu86HBBgMdCKTNtvsDN2pWzVEcLCGWUTe4JR1MYU2mJSaiersbP6kR2fM4ay9EtXlsYCprOXDeaz6O6UY54s3SuhRnp9aJ6AZXnn7p2%2B2k%2Bz0tx8urVp128iQsWtc4icNLIFUXigGkbLj8qqAFO6VnZH6U%2BupETdgymGn03b07ikfu%2Fb9xDexqHto272Dc6Igf5L%2BiDHLS27bSdD2HLooa3CVLJ%2B1z9cNjZ2vbSp%2BWJGN17qTkPX7gaCV62mt2EjAc6TsxTgD5q3nExFKp9YHULEFFVV%2FaxeZ5qGcEQykIioEqP6QQoDdp957p7QJzz%2BFZIeoLiEfzwXeMvR3GfKef5mk%2BHabIIg%2FgAnB5%2Bg4vXIjhfmvDd8w6qwyxBdk3mRwLTJba8OthfpN86f2gWSSAsfrJjnQqo5TWJnRa5XC0ML%2FpApPwnur1tuLAQNghIvFPf8KSpfPxoUfshZLhdp%2FNBiH8m%2BZFJBrt%2F1U743dn3A7cV9%2BqEFrU4nYoJdDa%2BWuZqd1jul%2BFFtbOkvVx%2FdT6sl1JYRYbY3dKw6XLdfQ%2BO1JFjKm%2BVAqvjwRU8KYXynHVbVFk1D0AgG12RMKnKfchrmDv0oo8jDQrqXDBjqkAXZaKqdLVi4Em0K5FYqHfG8XrNBJqGux2gL1JWt9Ho1e8aqwAffG%2FMX%2FxrnuukSLWP5QGu6BGJFGRZ2T2cvFrg1%2Btsg6Eyi5oBV9v9RuludgdOa8Y0PCgpK5WrPP4Jfkxd0jwqAGNfdFLOs8dx3BEFc2ySQaag%2BsKoZQMLUpnYFlq060McFshBL7tVeHf1%2F7yy0XqYcWgozu1BqDzNvW0888OXAu&X-Amz-Signature=4bb68cffd85967e10510112c2594346dc590b454be13a38769ccbab95e333bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
