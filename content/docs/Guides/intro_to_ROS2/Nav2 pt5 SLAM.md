---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=4103c561d3a940ae8e472019229a3be21f6e441fbfff6757633c3deba9696074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=501c8466099a7144fcac28c28612754221fe6a75bc0cf7a778ed16ab2dfcd23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=d655cf026d7528c9e832a4cb21afd456edcea037f1d0ccf6cbe0e4f60b4f243c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=b99dbb016109e7415afdd32d10c4bf96d9e78a841f494759e1e288dd5e743d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=86f25058816ea4cdcff01cba2cdaf987b033b8d8d8ea4bc47abf85638ca944b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=154aa962ec739d827bfdb4dd374d1ecbf5632d5af8a295972c9ecc9b6ddb2026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=dbe60d5139e88eab00f4d62045619d64fcc6613e7870c7efbeb841329cb47698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=251a0cb12a89d3d00c964045e30cff7f505d9d1249763629ae0617d3b0566d15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=a7936f4350211a4fa8182de8b5bb1b1273093883c6672395464eddd078586ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=fb0494ee59b1c7f01576d45c03b98d60d2e68ba8351c815058c39d922475f3ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=f860c2826e873381d07da74b631d04790e51c60ad12aab8d475f189b2d5a8599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=a751042c407249b33b52e48ac403bb9f579ee912942a717c3f9e6a45f8adf258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=6196cba7aa7cb3ead1609e5961a92c4a47fbdf75cf11925a0c6daa073acba385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAHXI4M7%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG38HlLk7Av%2BSRjJahIVUv6K9Pd0x2rpUDQFjk9waLxMAiBoy6eGytehDcu16pCXUWKFcAVk0H1KUDm2g8Ecf0EiUCqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjm7lj6VyffxRU74FKtwDRoZ5s4UVPdq6qyeck3TYvERWWr63so3R1JDTBhPVR8yVQpO26XE8eG%2BJjAVDKouO6MKbdzlBC%2BysTygQUeTeqDSWhD5X4dYpQSn9i731U1Z8D6yiF5x6WzDTUA7seGvFWiWgdz4AB9ofWSVGHBbWotnLhvo%2Bq3WhCnLaihHeR0QYfb5hq3UV9MySlC1EWwcw8IZ5QSpLJ4yV%2Blukb5T3CKUxPGIe3x0TlNzkzmL2%2BT%2BQzP3StJ6mTIvdB1%2Br57ztpA6NbdDV0TUCrcC%2FARUjFs3Qdx03MzkZIebbHbSeNsLVM%2BayDLpEMfIFwd4RRRtuBuP83KxmVdVlsKr8%2FIla1nmdXj%2FFiv9w0g6d%2F3KV9WhAg4HiIoroDHcZdHNmi7d2nXRAHpqNoSqz0RmY8URb28T3uncl1o2cMEHt04FKOA1bPVxI3xS6LLvE15mgHlLQy%2B5Z9gPkMS3HCvyx%2BJ3JLTCP7mBmTbu9ges3RFoClAOOhTKj9nPSdjbRr2PTD8H%2F0DziHIgL%2FTb9scPCuhA4JUtOzDLib3wu6LfNmPS1d53IpmtvoRXgNR9qOBHxrHng9HZDcf1LJjWxFh2syR2crDpLrcIc3%2Bi8yIc9PLT49wq5veJ4s9he7%2BrsREgwgOHpyAY6pgGlOSSpApWHZ%2FLl%2FVXjjHSAvv4rKjINjSnD%2FHmG1AcGbsbb7gZugmOhypODHAjtnyCdetzCcGyed6PpMH4ZEITZouz7WVYK07BFTPdh2JDE8mHZfuWfDLDTp%2B7EY42sTQb6t5D1Hu%2BfkxRBEFlJNrU7SbJmfoGYR66lQ5GOuY9DBPVxY1Q%2BJN1G3tn%2Ff8yq9ogN3x4lXVS%2FWBgPfgmfFoWY%2FtNfdOrY&X-Amz-Signature=62ec8a96331b00bce92b6f58cf4928b0a4639eac6e5122eadea0101c8a2a8334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
