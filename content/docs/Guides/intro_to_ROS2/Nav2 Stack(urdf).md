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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=d40dcf5105110c1bb088cac06b74d1ed9145437f79206af9e7d12b47bd401d6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=53f4750ce960c5ab22646be9a4dbc69222f6dd182ac834bde2e50d0546a16072&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=c8eb48744dfb7c597c6df72fca57f4e3958f3e1ddc4f76c69afd920449b0c195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=0228892a813411b69778586b58306bdbc704225aa06c92973d9b758f29350f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=f4ea6328deb8de22f5978bbb1581a015d677a259cf2e34374f0bb5c8fa12314c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE72ZIKO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIDjgF0eYrCcmde4urhUEg3e5D%2FDeNd50GgZV4OPt6KTJAiEA19zO%2F86QpyBqJhzz196iBzjIZ35QVDo8MKphwnvmaMEqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEXTVRAdK1MbWUrhySrcA1VY6EK1dirxdAHyyYjKzhTssJSL5MuUfnnF2sBXxSf12aUP%2FZI85YcWkQhEIknMYAe44AnbbAbv%2FSS%2FJD3afQt30hR3iOGeJU2N1dALf3%2B5HHNE6WkU2Dk9V388PO1hPv7UoaZHe6uNZ7IRtoukgAo%2F7%2FSiOM0Dx%2FX8MhqwdVMEJ7DhCnXSpWIOjvjytKt7IHbFfY2liiKi3Kja9tWyNSrhvGRdIuOamx94r7tf7bfq3d6q6SknMTfwBelLluEu7GQ8hDAdLHdCIDoaKUOk8FUbhWqHKrhJ%2F6mQiuJ%2Bax%2B3O15Zn2nlYqJ0IG0MNeYRv8CCO6rlAwgGd9qjkWLU8evPdDJ3ps%2BJy%2FBfyEvdxGaxxBk3Z08IT%2FG7Budb75eHpvY67qwzZkZ9qvc%2BvH6l81uQga2EFguQ5y1KEt%2BTwSDGy4Vm7q%2FkRmNHe7zWLfWcXTVVwD3%2BQBjd%2F8NVqwyTw3TanB97aQLcor3nylQ4p7sHOnEY5%2F%2BTKezdXZkW7F6KNlY0iWYm5Kv1DV8QiuB%2F%2FfBr%2Fof60b4UxVLT2cZcFiHh0YrkR0sxNghafLIq%2B6M%2Fhn295Ch8o1MNaGCU6plHKT4uEbrCdzgCwwjBF1CLoFbsSZ7tCFs%2F6Cc2RQAJMP6vmMMGOqUB3YrOCr4Sm5PTOy2Rk8lvpkbcrPcWl2Mw2l3kb%2F8gXqAZ1E7G9QHQEymFofqkzBkorDmlo1XrWN1mxZSTfkslS0DOhiNXERDXI5j%2BpursTHN2kx2eg77TVLlWh%2B6iToQQ0rc1dbaUCk4M%2B6EYnXgxu0wkA0zIIFavwqQPLHon9M2%2Fr9E6TRzQ1%2BHvGvVMg6nhABQFAZVw%2FfIe8%2BhPpLKahteP%2Boh3&X-Amz-Signature=c3f8a122d45997479caec521d8df9d3ee3acb3928904b0d48b74b0f9f326a124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
