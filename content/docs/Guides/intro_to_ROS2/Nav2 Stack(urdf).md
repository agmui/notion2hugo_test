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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=8f859c6cc74aa6c3b866fbc5d9de12f708722cbfa40ae5e3e53effba94840eef&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=66bb58772a92386e9028c46c1c67de6f2adbc595c83d7abd14f09885bbb2cd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=f8627d450ca39451e790fbdc15aadb6efb5888a521c057228ac9fc5dfc6e7f7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=84fba01f75ee27aba3151ccc5aa8322ed7cba0876334b261dde98275fad6a7d1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=63b8af8b743a97a8007f6a2eef1dccce0f6803514f7fd508b13a8f198b2c9c0e&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664DGM6XS%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T190717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6phMArBm9INy1LNEaTVDQaTYTd7kaLfKYktQClM8RmAIhAKAL1zC9OAupxUjbzIVxbzWIFGpQyfAurDuSBAlrOTGwKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJaJobPaaIPqy858q3ANHq6vo0yPK9YQrxByZ7CzSaq8MWMJPdXXWpKqlVp7zBmbCTdF%2FQ%2BbBPmbS845%2BgaXnYfpoqoB3VbL7BcCBsOAucRQzPu3HFf3%2FCBk6aBKNWvxhfHvU97aFn%2BkfI0MlB9beVywwsGabGYT33iD0GWnUat%2BEHSkdDnpeLxAm7sCkASTDO20k9ytVWj61Txw8tRJK1xift2vqiFyiM3B6jAY%2BN9yE6yKcAGAGTWhwCscijCips8zv%2FsCK4JeJorfNuAr1xKotMwC7NvOEbKA2AAwsYYG%2BG2VuYFudf%2Fm8cWmgFIfHBniraWJI7XD3HW%2BLMn15GDLYqlEBe%2BzYGANUGggClN542U%2Bi4xo4%2By0s5lo0fbSqwQZaF4XeGHd3yBuecXgxWMnCfqFTe0hg4zXBJrcjLvpxM1UJDpoDH0i0gWalsK04MJnl0TrtV4FM613gbRk0%2B8JsmoCmnn6eDGj%2B%2BEZH%2BakTK7js0sJxJNsgfPZXaJMKgs8KWYNDxlPN%2FZ7xwJE8idqwc7txCmssgSQZi3Tfnr61vf5hLtQ22bvIft2IhsCoF7nZx9bevCglWOm4mZl2biBiqr%2FpB2WOZmTArzyQTipE6dT4pktQgVhkGNqQjMjReHOrl7OAGO4IjDDz%2Bq3BBjqkAcPx0XlD9wjzyVH2a9lULrXezbnnqlSIKDYFCFzlf88hWhGg52FhOhbSoyaEiocQJtYdneAj%2F5lB22cjK7ieq9K7sYvONY33Kp1VD8fnX4NVRUnlJdzikidH%2BNSrpqqWW7YCxLv6DxMlKC0nF1bWWfbfR%2BcmLzZRAXQjzo%2BHvJLG6O7Q7FaffrlX84pTzsx%2BuF9gH%2F2Ugh%2BYiyK2V3ahxzSrCouY&X-Amz-Signature=1bba9ac4b9936c4067300fdab181ef8678d19208851cfb70f3f31f1c11c45599&X-Amz-SignedHeaders=host&x-id=GetObject)
