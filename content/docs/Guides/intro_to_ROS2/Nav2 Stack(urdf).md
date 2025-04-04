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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=e4e0bdfc011ead4f757c55a6f5361cdd0d6f281298994a835e1f0e884c6aecfc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=7e0390d73f4ba71cf27aa3553111a7c1e678c163c2edaa46346b9bc0ec5555d2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=235543e4bac3f51a86ae257c72062850ecf3f36040b083720f163485711fccb4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=8054f8af67fe5319e781576b9e3a0b83d7fce578c277462f5b3b3aadc3e25971&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=b9d4a85661e6f74e1885df70a5a0f01f8805c3d326d6bb5be6551ea4a21b6935&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2BAKQGB%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T160947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQd9dS769rfySh0GaTHfI5H8zDm0LESTDoL1qeFFTIAgIgRKbxDr5rUPtZCi3m1u2E4RS8WUlCOqOQgrHOVj%2B4ow4q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDK447519rMDzPgekISrcA8D%2Fmg%2B3UkhWfQy93uxAP5jJJvzEHtSHKk6W%2BTbahscvGscFO3lW0JVZi%2FJl%2Bylf6aCZtUwrLXncYoHnUiJnx5hmRTk4wQ6rImqaQfBR9QpqnYZLyrqjNC6bmyOe7Rr8lHyCOSWtR7A74kvvL2Rra20xoSVAMeayCmz6Bg1dxJWPghxxwks3H1jdL2BC8NBX1m4OC1uZD%2BzDrA8fPBz1CSOeF%2FDyp3LkZufiZGaTq9HTT3KojsR6upjErGnDAk8JgXKxkZL6cw3A2ntq%2BX7XEZyo3gv0biHyW13i5r%2FVcLz6zhFGtXTHZxpXGrYH%2BWx5emyLD%2F4iG8q5EVTpxnwiVOrADGca%2FnUFnktdsliY8UrWslSwSkBFChEPjTeJYed8QHu2vbVqQS86DYPkSzhhGenzXyJU5Zycu3FFxU4D%2FO8K4nwJhsQA5m1vzg2NubWcJLUavhiGFG2Vbs%2BqMO2vs33VkQwjbr6EgbDqx3PEjgw7fD9HZuKqP2ElUiDImVYR6Me2Q5Wo9m035FjPdrsxb%2BkG7i7hP5jZby3zD9zjs0Yqku%2B2QqUWYqtZwBliq4szTrL9UDcGJVIlDjFXpQ2Ehwgs%2BKadJmCzG46f6OUdW88Pj3ZWCD9fZB1guk%2FLMO6BwL8GOqUBJzgU3lzJnJwHLXuHBQ2CmWvHsZw8ZUp%2BNGT3wSX4pccDvF5YdtEDIJEtuaDewFHflXFp96WmNgVpXPF8%2F0Y91WYTd5lj2xT7m0ZbhVjb8NXDsA91Rv4IAdl3f9SQA1TwFOHBan6Z%2BqAP35ZdmdVaKTQfRGQ8BSZMyGi%2Bg9NO%2Fot7uD10oaGc6uesMfwrXf5BJe844dZxp1oNS9yMje0BQlMD9XQF&X-Amz-Signature=ecc0c713b158e51ed29d034dac6bab05dfa3bb116bd5be5b9898f4344ca60981&X-Amz-SignedHeaders=host&x-id=GetObject)
