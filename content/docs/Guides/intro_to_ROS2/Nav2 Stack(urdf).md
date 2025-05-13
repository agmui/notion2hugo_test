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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=bf542e2d297a2e8d496429f6c5fe88103fab0d25ad982c865f3cea89d18fa00e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=16364663e59908e485016ce115750f2e641362c4f78fa8ffb69c27ceb99cd882&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=81d1c0f31f32ca7824dcf912dbfc06a8bda50f803ce5e4f3690a1928ce5de3a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=cad49b89928ded854f9e213e8cdf09c844f18cbb045bab080ee6777303f469f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=5c710d60078f9ecee87c15ca618e6bb37afc7266b46f4eb75dcfc9fb711adde1&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMM4ERN%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T121615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGn4WYsKY5d8o4MgDVEJwYZYSZ3e9hpoAL%2BpAx%2BAfD4sAiA1BWiJlaktdN%2FVGUVu7XYhHTbTofejtFZy22nMrpJTDCqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNKTikINi7L8x6Rd0KtwD%2FiaaaF2rm4IM9SSzWa9u94FaSsFvwr6IdyF9%2F%2FH9RcoFTKf1fAh8g%2Fzc%2FrXL6UrOe2OofFGUaNVb5MaR93ykPYa4gWfcmKI7JioBTsp58ZsdFUHzJK3stwebBeNoR2mKKXscg32p4l%2BWCBRJbmDLTXcqXO2JU4kppN2dKCvsHEedyBNHZHa0lwTTQccweNXne%2FptAAxZ5zKReDdgfXKNy2SEhRE2HTC%2FOQoK6Na%2FKgtU27vegJr0vKwCfUCbl07X2ANBnmVAbZekZ3uyDmMbGMApgis74BBc3pu2wVjMSU7hdP8SgNnXDVcnWuNpAPjRe1ZBku9fscEgzZN%2F0Z1SveP9kHYJIaF1M4Vn6jws6rnJjhgKZuP5q%2BS4ag3AADzNjSZ1DI4K%2F561w2CNu5mpBOKT8nnr%2F6%2BZtrBTGyj%2B3m5F6s2tTFBwnLFYMVIPmSADNhu0ysWNQ8Ky4VLgaNKL7BNje8xMwbaO0kQWj4IeLq%2F1NRvJPe2Lr9SSgLRAsdwQjuyCQgOLNRCg9sW6Poo9i0kGbmKdxVg7ZpQAL8fsHbly9QNHGcnmBYNB8vp%2FVlAphjMz6dK2eQSrI8zyRDEzpi4pLelcXlM%2Bq92cmtxAcATsQZyeMKBxcuKFONow0tqMwQY6pgG8gG6eD9JD%2FGicVSlkky%2BOf2RWHjDpJ2od5Ly%2FgiGx4mGkzJ34IlqMTS9xUzuUC65b8IAIDMbbYYARMu0nuycsaD89Bhx%2FT2lEvtE7cN4obF3dlCrYNtW6ENvz6zordJqpM06VxIkNwH%2F6buSVWDoUMF6fvFODqGR6KBurkBqNFlUMxNPZ9c5doJTfcnpH4w6nXcZqsowwcgmiFK%2FDTr7F3zL829P2&X-Amz-Signature=b3e64b64d21a9bba19284fb4ea31d866b03589835d5be83d9ae45b8621ee67fc&X-Amz-SignedHeaders=host&x-id=GetObject)
