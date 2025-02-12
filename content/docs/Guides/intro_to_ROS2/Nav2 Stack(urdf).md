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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=fa3be2258f3444093255decb397484a12819292548101d9ece2248304a363887&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=4e48da864ef957056cbd29f4bed0b5b4e452139b8c255cd0c1ab9af4762df971&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=0118a965a1842fcdbada3dd613a07cf1fc5dd805be41d182e3f1a478346fd256&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=66ceb36df768e43f69fd976783c9651996e06d82a84aff53d04befc73f85a3c6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=38089f30c19a56a0d474c613797ca9e1b1a95633e02d974e2fe46350e9e8eaf8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXCBQCI%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T181048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5J9tm%2BeJngkl39yatyLpQ%2FuKvYOFGyss40jHjFTjLmwIgJQBrjrjMECXzLdvBBI0CQs5GGTVoaJ7kmLdZ6z4L4poqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEaBV80JlAOXi%2B0YDSrcA1B58DzUpXr4W7g2h3MD%2FUNMkptztJMdjkZORBgRlHQIDtXFOa1bHC%2FMbjAheQGmn00gPd6kyH2hI2iH5bFHAKpLLo7cM1ShlnzYNY1YOWpLHEMSpI9niwBuycoWG7C9XGaHzu5%2FUR2CwydkxFRt4hbDynJ%2FQ%2FLjVq%2FRk03wvOaZnyPYCFxSgK6Q%2F%2Fi4qJ5YopliTzUowcG7mzVr9xVC5KAnipAkqVrXOoav2JL36TUX3xqaWHxf3%2BReL%2FbveBHsoeJHawAnhhk8xZAQi8GU4kxZMjZvs1w0BR%2BOwYf%2BPVVKzfvmMkzZyHrfXgGfyh5IWPRkqnU0QMdTXqG4ltW3LutaWaO2AlsTqUU4Ljo6Y31FEqXla4WEM%2F1fpv4%2BeG9UYPcxm4VHaqGhKk0YhD4Vq0DAp0WsT2dqC%2B3VvmB%2BPcqRd1obS%2Fanjwwkpu3BsRIRCLQL1jAiVcuSDFLRiMqbGEBlUN0p6rHNzfMBhWgwLsQG6eAvb9FGxuydyiF5anPC4dRjT4a20dr2hCtusEBNY7lN0GpOEFCYJeeP5J7G2xS6S27BNnok6uT26bVHPymfbH7pMUmST33bPnzzhgmkd7ip9F4su0m8vQASTU03Y1VefKTvi0qHLbMGnW2gMIytsr0GOqUBGQpSa3UcL0iK4B1SgIALzZC7cJYL6dfmAWRQavzMHlOQkFuIL%2FXG7UcPe1qh7NvEUVSrlnJ3vnl4pOa3ohhqRoXHdIPmV%2BPLP8hGu26iLiFI5%2FQpYS6UsYYaZP%2FkUpRQ9ZnZcGvWSPAqk%2F6zxRAhQBtyt4np16sHqePZiMnKDp%2FJ4nEtevQx7IT%2BFSEgSBQP3WdUPk%2FjkkJyPWEV0du67ICfip2l&X-Amz-Signature=38803b26de2313eae902c65790e4894ffdf18b82151696eba625dfed9da8884b&X-Amz-SignedHeaders=host&x-id=GetObject)
