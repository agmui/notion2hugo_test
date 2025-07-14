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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=51c840e966091f7692d49b76ac75e25150f5e706b31b9da7f06c182c9c3ebcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=80efcd986c3172c85244dbe2006e33c43f324cb8a61883cfef9e23571eef613a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=735f6f1c6a68a0927c7a3e04461952924249d3c9ad496997952f68a5d0225c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=083d17adbd1c6d059549e715cdfda7d57c3d5218b325bb37a4ecf1952f26d673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=72af5eccaba4ea99642649812852a9c1cdcf960f5ca5d9d1cc506b7228ec007c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EFZPYSC%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAI3N3xt1rpbEeo1RG2o9bdwTC28tCLGpt3NFBjFYqf5AiBw03wPDDnJQXjrJjOZncT%2FwZ24GsM%2FQ%2F%2BSq3SBr%2BHamir%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMJsXedffdbtLrAVFhKtwDkxO1yhwzriHhlndtrsaynBRG%2B2KIFOWPr9DpXqwcB6SzM5fcC7rVE%2BDGSIxjB2cwGNRh%2FXsY1JxTMwc6g8tvs5oQqnNjq13quQTcUVDTOL%2FSlrBcblT4zA5hqNmGlU56qf3hfC3nuWjFhnQsQ7%2FAsP3JDQgIuQOxJNOm3TUzuM6JzWcCTFCr7hziOsn3%2B16%2B7myFOCGBwdQYuPtde3kiwxczhRAsOoN65YIG1qMlpequ3%2FwUbSFKCxRg8xJg3XJoNN3NVPjZXNG1GUMrbAurcuRUzXx5Zi03Vy%2B%2BBIzkuCLpkJMPGxDOFKdYfdamcB6wNAZV8qJ79oA%2B19xSOYSJIlaT5yzY2oHruPvoHGOkJYqy9xDQvOc80o0FrEs7DCQ%2FSZv%2Fq4PxT3Ht18ke6zZN8vAnHop3fbDhamK6Arf7Y1GVn1F5qIStWcY3YSWYNTmnxgUIDV2jHeO%2Bf%2FbI5giYTr6%2BzFo3rPb0qDFhZBgA1h6u6T7mpKZl%2BQ4maX%2BFMNKIwynE87mvnZQ1RCPZccmru1WcmD4YUAhTs60z4Hne3jNKViHZYR%2FNT3fcRkCMZXKwhx0G5JTrv92rlOiyS1io%2BwtBsWsYWbfWCGAel3DFyfunGwj2XqrYyPXQ0lAw%2F8vRwwY6pgERPNZZousqzybPush%2FypyFeFS%2FWjaHvFvX3WmoExhhaia6wlw3yF0BW8EuGqatiakyTkGOd54A87bKKsGz%2BDVKyaJDrNhI37POwNE937okXhc%2BISyjJlkSNldGgCQwlDwvshSQUOlFogPWDSnf1a7vPOM6f4Eey%2B6WQrGqTl0HBjw0mr9ENJDKeuzQQodhm6Gmbkhycz7czNZKqWdu4CkajgtA1N%2Ft&X-Amz-Signature=01fad6c58c23fa046da20dd63116ff60dbea2a28b76d209535947d73afc6a594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
