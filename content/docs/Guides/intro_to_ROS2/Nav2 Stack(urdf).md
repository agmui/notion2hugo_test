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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=c0201fe6bab1d66574a6043c02dc811c35b7a997ca4a3ae29635d379ca57b2c9&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=a0126c9a4d2a750863daf46637053457e939f34df4f6fe6804cec2a00b6945fd&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=a4cae3ec09651fc0dfb4df5cc58943f4e046b435e6f3aaa30523b9c5d6139606&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=bfb3725fbb87b7d8041c19161fd53f695079b44b2026444a67834efb8831eeaf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=730cd9fa4971771fe467c1be7c8071f7bf3ae7faffbd2ea0d0f6bcdc4a6ed821&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTZG7O6V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDsIE8AVMTgtHyWbog%2FuuoNq5kJDqbJrgplRoAZsTyYtgIgTDJudlAmCDZkJAtybtH0gZ5hlzFsulBIIe8TVt1MxqYq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDDSLB2dJEnbPix6URircAySLMz%2FrfetTkDVr94U6JJa5%2B%2FEEzthVG7SKuSAY2UikM68oyYYoqU9vfZiNYHvEA58iXfwJUOdmOuxmasGds7uKulQug4mt%2BxFFuRf7uUZR4PsHlkAbQ3oKk3U3m9FkVat8QRMw21WsKNdnvosV0WcHINP6s2bmyJPXn9ylbkTxgVub2ES0FaojGrLtme5WmW5vK4NOM9l1InbG%2Fzz%2Bhmo5INaucOkIQ5a4wDgdPQJecI5ZgO4vF28%2FRvTFRfgK%2FzaIabO08XBosbwkG0H2QwcxN6aFc75ALUFvwk1VyFphMR%2BQc5D38UlJ0UFgWbqeJALiSb67zL9J%2ByIeGNyqab0seWlY4e7y%2FO5g9OJ63H8R9bUbsLNGRIbqQl6SoL%2BcRi2L8rg5I6S6L4O%2BsolfMUFJn96Eye2rEO0808pD7MQpEgqf6F3zSlT3a5tfGH1tA11y%2F4z0P3wPzfZiwhstONwOykrIEU9q7P9rIZViWr3X%2BkpJrXr21ohmFfotbMo922NcBp1PkcmZw%2FzWB6dQhBQvxVPGX5Qa6DIT%2Fo4pNrvVUStI2tSHABeVI%2FmEzwhBurkPXjbul540976%2FonAGmQWLUwp5Q8%2FPNUnHd0TV2uaBbXQCRU%2BYgzRG1GPfMMPwoL8GOqUBS4o94ZTcDdkcwr3UP%2Fkfmc5YWQ9i%2Bmjf%2FvpocuX6RaSOIoypaCHd36PN%2BJQJ%2BCmImh6lyqopJgB7duXq6191WacLQ%2Beh0KaDpVyaXd6CmlVxyjzR%2BvE6FIggt%2F7nOVz9U1lnFnN2wAJzJ0fMmm4UZRJlE7P63wOiRGX6yFeQ127ehWFvrKp03R2y8X1vSTzvSDI0E2DL%2B74TYT0IJi7YxwT3kWJD&X-Amz-Signature=c8f18bc8d830835bf2c176c86adb20a22e6f1af16fd4f0c23377a364ab2443ab&X-Amz-SignedHeaders=host&x-id=GetObject)
