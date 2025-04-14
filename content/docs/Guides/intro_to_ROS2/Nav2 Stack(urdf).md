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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=f3dd28ab8197ebb7621ad05554341aa865a538555236b0321837fd6cc664335f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=0b2f7da9fbbdc3e426b31648eb5104829fcc697ecf8dc68043fa3fc792ce17ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=9e105927adf280c9321bae597f6e07ae7f561f79f37755407f6f69e8a890dba7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=d8f2b0e64299b83c0af5f381441a0fda68e82c344b769fbf4fc070ce88bf62e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=f71e1f30026ae4bfeae6069d92648ae52489308e0b1a21c4044a2efc147ce423&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMGW2GXZ%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T230808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpEuRXDmFpqb7nDv5b9ZXe8LS1wvJdUFCczHV%2BmrHOXAiEAj8RC5zUOF8N5gLbWseyUVGZY0XqzwZq9htrF2ZV1mQwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDA6k3e6PI7QzBE%2FJESrcA0qaSSD%2FXvBaWjaZo6WYrfKB%2BxTFOvKGBds%2FWM5P7E6Ng9DKmUBplQyxofR3hf9cl3A%2F%2FzG6dl3H5BTCFaG4NWRwnRUnaOIh3vzkVJlQ310o9cYHnidcwuVvtjIjl4ehm4pOYySGGB99OJ9Cg%2BJ01dTZ8jOfx8TLPGgoertaagYEazp59nAhnhMGyFvulGwcYYJ5XIRYDIFuDQlKKWL6ISMLVkViTTqtV7dx%2FG1%2BEQszrtLAUAGzP4SyH2EDPYXjMdGS2onqgLA%2FQXub85zdqZwfsdBgImIGdMH6TVMHsOeUPcOkEpZxt%2BKfAXxUt%2By9JpS59dPyQlWdnOTg6NQkr%2BF6%2B%2B%2FBJ8gSCa3Z%2Bc%2FErBLh2qJdToudhtdPtewFQeRTlBmKNA0IdtGJhXrF%2FlWIUNKYF6BJimOdbyt1AXCXoR7Kt01tSzEkJ65jUMLS4ONk8HuA9YrOKxQbHFhgP7LB4s%2BwPCtigm0eWBL3ElxRxlpMfk7t7EZ3xHiuXJ%2FXlK%2FBPW6myuymI4n27F5Y3%2F8Flpvm4B1%2FyCUqM6ufl6wyyB91binw3T6ZLy7Y1DuxVFLv2DQn9T%2BPojJXjqVNqjGANZ36ozwPbO5SDS0lBu2Y2BQleulBdxx9ZWsDDEZeMNSb9r8GOqUBETcYQ87NXWVQM2PFKEvum6hFGr1wCfDvPZ0lCI2WR11nv0IduM35%2BKzIydscYB%2FtZyoiVB3SUd5NHwwHuQhdfI8kNyy0BIETppG89vVBOsbypy90sjD1pKqfqFrKqJ0vvWNgXv8FBnzZRNS367K47tM0nP5LIHy718IUKMAk%2Bh1v2b%2Biw%2FRokUMpr2YiQ48nJS2figU8awfveGMDDbWFTJ8DF%2FWp&X-Amz-Signature=0aad0785296dc6110379a955bd7102d411f865627f73f4c7bbf649146ca2653a&X-Amz-SignedHeaders=host&x-id=GetObject)
