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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=ab44dae808b802ec080be09322787770e86d19dbb6a102d9eb9b954bb500e73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=0d428e991d5d51280cf4eeb6a6a6a8105305acbe3527e087923bd337b60f35cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=86c705e141c817164e562ad29fa30fcab2e64132ad338203b446be34464894d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=eb25abd760f9adf8233426580557b2e1a91c8afb21617bf6f130efd9fb0e5760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=4729aee85916794b41cb4fc62687e883102f05fce56df8508c542d010a21ec3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMEGSSWZ%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDFUAh9nJj7pXvuhMfMzFYa6wdNDdlWKZeuciFOnb%2BB0AiEAxCVTXL9slsLWTOAgyulxKi8Y%2F7U8Rt4sAu0mo1CFrtsqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDABsMuvJ17Z4ae5XPircA%2F3cx9GK5gObmykEBPgY%2FbjaHxYwhuRxFGyFJF1fvCY7GCSIAJZ0CoK7%2B9Fwmje5GvgvMjsKt6XzCPv4Jrr%2BsFnwh6bTVr4HX1%2FeTu5MrYYq4s35O0z9xUUrKjGn5OS0UqTjPuexrHmu4Djk6cRqGTJBLsw924qF%2Bf4L5ByCraztcXnJalGgX5%2Fyu9Ujnn5indGYErF6PS6BNoFEdoLdpnKFfHAW8jSrQBZa%2BOVP%2BNkKe2%2FB9DPxZirROroeLaNUfnwFuDIsA6iAjXoPyPB0zMSss8M8HNGuYMk35AXqmlcG7aEe8xjABYJTP3vo4tsSVT22Bw9pVmNGRtZfOLHX%2BqmW95DfkoHmEnr5%2Fry8LEa0RrzhSz0pJ0WrTL5dn0N6HoTIooJqXD0cYJTIHquHtNGRfZGYPBi9i2ES2w8KEQE3Dd7WkUbxuvZaLZzagu3daPYRBbpoAqdcwNlzQZwFeTgFulOUJT4L9sYBb4lGzmhRB0cy2uM2Ii9KRP9jBeOaAIYrR950V0jotmU7ifOHWK5n0BiiSStXhFswlYU6arDHll3v3%2BBW%2BKcwlomFWAbvCM%2BI8tTwRxYpr01M27B8uq1TyC991j4WFr7ptHUO%2FN829hDeDEl7qqIFj1G7MPPW%2BsMGOqUBXsxSslm5U%2FB%2FY0esIXXIYONyVySPlSW0XBEI%2BLOI48eACBeaLYfNn0Z%2FyTDo%2BB7WmVbFH8hwJFc%2BvetrPYv6FcV2uQqpDRvIy0TXS%2Bs14Gcam129Uy4BbGCnAQITomMskiziXKIOYEzw1lcMFBsWkuoRrsY07RmX%2FkMEdbyK%2FE5A6c1hNlQtlQnFw4uyHzYLmaOc9ZOnxzBcGvOTxvOBXL%2BHD%2FGj&X-Amz-Signature=46651d109f962322528df2d11c1a36a9776204335a30158b7eb17852f7c5c580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
