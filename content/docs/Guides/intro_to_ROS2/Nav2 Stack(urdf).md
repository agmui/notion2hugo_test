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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=33ccdc4677a129b95f651ac6355c69c7226cf8d2d3ba03d473faf3500409e8cc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=dc6d159eb954be8067518fc044042397df351f0cf912b49aaafadb48188acb41&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=a37baef10c5e102d6df4f8c642d27691a4054c4addc1bcf4cb33d2b69233bb05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=63cc85b9ce69aa2e6df1d14c65ccab28bb5ccab809743b6dbcf4281d519e38cb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=994d8d10ab63e983dd0eae42bcf91ec2202cf729dc6ef821db86beabb4f17164&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663B3JKMCV%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T033608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFe0K6B69HXn%2B%2B%2B7ttcuq%2FeZhZizmMa81WJS4yjvYcuBAiEA%2FPGUMCSvntBarnSHc%2FJD4Hufl8585IcCpONBaa8PLdYqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOk1DWAWkrgZHOwq%2ByrcAxOBlWkwN%2BjIBR0MY77rU9WGuKltw%2BV%2BJD8aqZze199klyeoZr6S0ZnxCvdC8HIKezRRsUpMME6bBbFVMcl%2BYFuAnUT4%2FKv3w1GJ1RmMERGt62lePCjZ3ZseyvVmlWbJUu%2BNvKJRGRs4OgNUINOZ8PcHhGfayR2o4XdBppIZZCn7OJSdvAk2sgyQtyh64nq95qch3gSnMVyMaiWw%2BoBXs1BrUgD5ZHwypEgj2NxVojPpJ%2FXt8Yuz8SkNgTOwLwtrRDWgBpk%2FwpIabGTHgQxfZnNTwCVDW6GtS6fnm0iurcnUDRsW0iJ1g5hINL%2FkgdmglcHLvWHPCVCJf11HTkkQq8C5%2F6B2udJzEHrpZPpRnoffVysmRNk%2BokE6DSFCBE8ZY8roNCxunzZNXU9PVF%2FfN2GhJLXvLczyKyAHAcUVKZffWOBjp%2Fy2awq%2ByH0BYeRYY7cP5W3VR1n%2FX4JvnWle882l0Zd7%2Fd9IjdKwlwnsQWra7ztqTJIbaLYhHKZK2I0YTdiXFpcLZ7Eyn4OpQqpSKu94my5vkYibCU8J6xwhJ3FMUdwgRLzg3gdGvrDJZ0DkQ1gXgVbDFwPC6dJtLJOJ0IiPLnElqBMBqpR64FNnpOWEV1mn0nhVl3AftAmCMN7jr8EGOqUBcPQMEOEi6fRra%2FVf0kGJmGf8hDu%2BiB%2Fo31gyoDo%2F8Vto7CF%2FBCXqSxgWOIhQguxx5%2BmU8U7ZEg%2B82MtbZ94Gj29j%2FEnD65oex1ki2HAOU8BXFao0j0I4HEf2fiAYljXib8WndyHY78ttA3jDezamq9JYmmYFga3eu9VI7uPL7JGOF%2F90oxm7ai76UgOnv4bRQk2i8HW6fIs7cJjQvKf729zlERJr&X-Amz-Signature=9bb64c8a7ba7eaf75ed309088a92f42f29a2036b4a9647c971e0c699a869d48b&X-Amz-SignedHeaders=host&x-id=GetObject)
