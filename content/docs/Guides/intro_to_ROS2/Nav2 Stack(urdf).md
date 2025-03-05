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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=23cf41353122cc5d53d0f84f61b891cccf092f072995fe7c35465ee5dbb80952&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=08c8962753729371fdf1472963145fad5b07831fa91c859da4cd5230c692794a&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=d4d86b6c40704786566232b25960f50035ec452e778bf6e42817202f45d9c134&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=2d52a3f5a99408285dfd531615554ced5f0bba3d10b7be288bf150a7f5501680&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=fc8d1a46819f1bf3a52c04b0e82166831f657f6d80b6f510e96cdb252a3bbb3d&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIIMDRDN%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T050842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPELQTiGTGXHB8sXzmFFyclazeJh%2Ba7cuk%2BXPQn9qJxAiEAv10pH9dl%2FoP5sW2vLfR2k0tEQvk%2FyOAehpOtXjd54OwqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIGPN3c18115dzZBjircA4deGnp%2FybP9e2O5OtArxjlHMFplTiGmzap0wroyr4Dch%2BBrGqrmeLm1JQjJwqryOsTmzKy8aqKHDftTnR2thgNNbN6i6WI4ekXbyutPjb7n00B7s3afoo8yUCeheH93afU3%2FG%2FRp8fVvrfv15RWnuulItKTGCH41A0wCejglmSU54atipz51PpuPEVY%2B8YDntJReRYpm82ct1Sdud8iK6DNc8FeV5LZSH72EyvE4D9%2FoW%2FFMLmWx79ne%2BzstomKgkYq6ySFe53QU8F7pLsfFmBJPpMiZZAtUgHwsAadIp1s8ekY1hwAzX4jlZn6jkfsCSVfXLT0QSuHD5Pi5k7Zw2dX58TPfHcAsPZ%2F6I6VX8j5JffDPqm3nGcDBkOxmOJHUVwDDsOjt84pq4Z10%2BSssLQswGVDyUKq89hiFFt6YYOOQnogSJq8o9Rnm9%2BuvAECymtIELS3blL6jIvkKbygQRnm9UmyDn0FnuK2H0mdJhBcZYgShUxWHfQJI7ptvPskYhpzuGA7ZlsbVO2%2BkA6V2LGLwXy%2BupuLIs2gCgzS4L%2BA4BZoSVOhg3QdCQm63SSvQt0zHmD0mXeVQz1z3B4d5Nlczw0UpQ4JFWdCQ%2Fk17BkYgRZtjt%2BQdcL4UwT5MIipn74GOqUBT8%2FZy1b%2ByBtF81UeASYsOa5F0d9xqexOanyVoh0sX1OdLjACOIrA4JBYBUUC85rqiYHH8RncoLTgTYCYndBSMhtlI%2F8G1QYNmNjIU83lKIFJY4MPvJ%2Boxs3a248HlLiiALW7x73u0iCVounFc8Xwse1J2Tf0A2YKjHE%2B6Mzk3X7s7EgSq7GhPEsd%2FtqotCookzjRjvPT9R3h%2FNKiTRg2nKqRC0Mj&X-Amz-Signature=becd9f79be864e921d0bfac7fa5188e34d1ec7a08a70efc214d4ddf9137ec785&X-Amz-SignedHeaders=host&x-id=GetObject)
