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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=02412dc2483a6f3b00b2325a0d32e315d02162c95bcb620f1ae725d631f4c9be&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=f385c5b7a1d47dea70917a7117fb00a957c5669e7764055faa954f1c0f2ed6d7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=a6180693a0dfe9b8b6618be0346253d520f660f53c2d82b5b5677476ec4dc0d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=34ec2d27a55b3c02aa5a3786fe6075440f5faccf2ee929572a1b6c7cfe835810&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=e6b40a82619e40fea3f3d9bf27d14e5163cc64e751ff6ede88f16dfcc9d255b9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VPGC7T%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FxPdGa0t%2B%2BozRGGzWSNmurpVj%2FvE9TM4XOTW7WCHxcAiBac%2BE%2BiwsQwIOLkrFGyX8ka5Ut4b626ahwiVP3t0kduSqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzooEfFnImMexpHjOKtwDsL%2BQplzic4O1hYw3%2FMwI0kiYIdjlmdtYQvxuw%2BLipJ0Ri7M3XM2vGxZILkmHqnT2bxiiiAhsH%2F0fZ%2BJBm1yNVi0Y0ggw%2BIjooqD6%2BNBxueapH5%2FD8cJ0EEC39rIhhwpUm2eNilMuZ4XzY0qzJzBVfrCt20otjH55WAofR6cxWP%2B%2FjdcJEP2n7qX6v9FCGT%2FB7kljSkkQK9cIrxRcPNl27QH7vvb9bw8aurDa89Hi8jssXDSc0uxXfCnKkPPXCahA%2BNvgaHZLEiv0jVV3gleXg3csvSeEhb0sRCitsUxxczX%2BlNuPZVEf62u2d3lQlnFRyNqH6lPwvBZ5%2Fy8wIoPjDRH7KAIH6JYSu%2BWshb2p5CPZuGqusOE7mpxRXPExxIz3%2FXQ0rOeqjWtJiCE4AAoZehdEBZkDMuQymcq2yEI%2B2d3d9VO%2F4WKRhYT%2B8G6e1kqC9vxRffWOfCv0Z%2F8cKzi1lLvRUCfn8blT2oLR9m8ERtsJsCTObtgxUCJoCAXqCFGs01n%2Bvcvep3ERKSfHzvT0J%2Bw9gMVfHwG6HjwaFSJQLsPomwdr2oLojgmGJBi%2FLp6ibz0LHyKEpBJRoIBWSh8KxIrsqM1daVVylvxbjYolYjhmHXV4OvKcJDNbiL8wms66vwY6pgG%2BmEBT8G2ppZtG1HGfF1aVWzX7IqJ5Gkn8hY8kXeVEf10b1galB7ilRIMN5L1kzbij1UGKHy99V9luUACSkOpK2YrtQIT03dCURuW%2B5yRJB89mgeUpyQVH7dWPG9FGmArx0T10qF1JNotNwhWz2uQL4l%2BLJK3%2BapNKmGmTdR7ppkznnAzDPtAVb8CaBcGhE8p8QuK2xU10UViNNTfSf3Z0r9p04xoD&X-Amz-Signature=3c4567c9a3dae0651c38d004ed081053af0c94926c31a19b4892aa3d2a55f9e4&X-Amz-SignedHeaders=host&x-id=GetObject)
