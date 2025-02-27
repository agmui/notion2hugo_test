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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=8e80129120b8b2ccf426b9889223448db2cbb0fb7f44b2b32bb80ff8e1779b97&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=7672821fc43ff55d92cc85477848696b1db4854a8911e66cbafa5988c009cffb&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=ea64f079470714c454997b405a7bb90bd96ab2d4e41e3894d28ef860457186f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=c63671d31ca8137a1394ff9e4e1bc699f20a087521450e567c0198f52b409083&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=d019ff4890724cb438cb482252db1e9e6456e5f0fcbbdd1789bb6fd31fd591a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EQYYAIP%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T200855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCeJ2bP2uUOKuAQoc9EX7%2FePfngjAgL5L7v6DimrG3XagIgQQnu%2BHTQK9WuqrUeMAXdolLN7gvOCwmChVR9h55LAScq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDHbYk8O9Y2d8ZLprICrcAwnodG4LTTXCOsSUPuL6uqzkRsxFlEaVpMN%2Fe9NdfbTAKHTXq4yotk5O0i6UMDZootO7hUGEwwKvRX5Qr97qHIdT7PqTCFjmPpR7pCRiUNbj%2Fus12E8FE754nA%2B9Gjz3KYW5z6KcwFWD1K2GycQnFvqkw%2B1CEOrjWY3dYy21rdyhW3TIKq05aBign1z0e2EKsHwY1b9nfqFaE3Zagqr1ucQgaEn%2BJwYs%2FmeBem7JMlaxIDHMJXiRdtzPYXyOsPmNuzwcrIXFie%2F1vCI4I8kvCzvqSvcCMNmLno7XFueieEuoLo8KyWkcdRDA%2B%2FI0EgS6lXXvwqFpqiObuYrU4Kj1Dx0QEKzHUbnvFK1CciGGQ75NLbmrYA%2BmePQjkJZ%2F41gLBW8pMrnTqfDznjjIt5pYYR9CGwhyh8Uohfpmf8Cmbg5S29PU%2FAsPbIfY1cwwCTLsdIzCsQEdVHbmsEkUN8MvIAPOLGw9YwxqahBnLtIsWYEWInuz7ea%2F1mTzty2dhoCzCZxln5N5EfaOVed8NaeTkCC415yLdgz7idyQZS%2F985V2MhPrWQbqa13xJoDsbhT2AvGHtgtnPxdrYHB8z5xccSS1BAXAfoh0N7GwxN7RJ%2B1Bes%2B%2BADUSikqShJmPMMzwgr4GOqUB9QJ%2FBm%2FKUE5eyou09ISmoiobubc9Is28zzXyBkBnmOBiw0%2FELqdRxvZH4t%2BAzgzerp2Ty2jaR65tMHB0vODyiTJGrYvtvPgg%2B9dwStSOap62sLm81JDwUm811TbPOG5KSQgd1gRkA%2Fz1pnW7PRcPQSIOkodnVuQLMOOHD%2Fgl1a6LG9n4pvZM%2FPX6PsTXeLWVghKc1Ny1j7xaYf3K9jkeRvEi1FL7&X-Amz-Signature=97ae9edb8199e6884e0f106d3622dd7fc85b8fd95fc444162e425fa9b4d2e3fd&X-Amz-SignedHeaders=host&x-id=GetObject)
