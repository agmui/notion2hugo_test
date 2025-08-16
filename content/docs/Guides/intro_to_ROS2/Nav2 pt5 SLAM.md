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
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=511a2797de7eeb8c7605234efabd1a62598b4938612ca62d1d04d1d17090c357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=9c4797e29836b80a3a61116408ea47951170284cb86d9da49f2bd2f8d38f17df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=47b4e5e8ff1f439c2fab62c0dea02adfbeb83e57ef2dc29f108bc5642c68ed1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=b5427e86abf6cc8bb3b17329fb6135c4ca3d4fa7fbb14b4617eaea5948a4da2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=d01816ee9418fe0a7a56988af918eacb7326adb177350169c7124411dcd36a6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=dafaf054f396cc0134dd37f6406cadfffc658374012a7b40bd97c40350ea5c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=95c5c5f6930d0fe8ab8d102d911d2e6f9ba67648c40eb403e9417c09ae9df43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=17be92101243419c2dad10bbdcd2e7fcda322470a126e691dd4456e40998e5f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=78bd423c4ce26b564f4e8376f96fd267dd48c443c78cb7ba59f7d7f65aaaa9ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=140f20462a16e42d42a10dfbbbab2cc28fda03da4ddff64a4f34c31d34024d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=fb062f1092a9e281b2f27cf98ff7a36686a3b299f77d5a62500fce3065843b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=5794b49c3faa9ceeb2fa2d0f410d472557213f08308cd271b6061af981b522b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=1a2c985e2569989075ad77d5e2df01deaed0af9d32ba0682eeab2ecf74918e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPH7HGUE%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIFBOXcyzZrTgzpVY%2FrJVE1%2FkrNvcEMF9N9dVMANFYm%2F6AiEA67gx6R3U6qtJzwFFlkJg6F1wx25C9357%2Bl%2Fs%2BT9iiWEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOpitwG2pb0WrwVZEircA2OlgLYIYHM9BoNVTQrYhi%2B3iigLmceNfrdhx7KRgV1mP%2B7JamiTFBEh%2BwmU7nxnI6w9s8nfK7oElGnvL4YfsCX1WV96A%2FQM3JWrMd1aWIiUWiIrW46YChrxpSFQjHrUrPGivcOkHq548AsPQ0%2BxHsDRK3XvSmcqbviQtgaqMiRawemIzsIHfHnsngqWNrPdzX0qw0zay%2FgK4KhJYUCSV2oe5fxQ21R%2Fj6C8vFGPyn254Jx90s2qqU2vDe2aicVPumFaG3hszDNmmtOmNPSlVNhKdgUkBeuRQ4yfVxzStdifH1%2BgYJ0z46KJ0XIVm0p3Ymw96Gt%2BODCXS3U3hgAVwpR%2B4xFaiyX0OAem%2BdAgCAO7UgXawF5pPC8HgEcUJrgcl6zlS4dEqGO96OJ2oEcQXe5WhdZmCILmwcIxTFM7Ge214v4niXcCsZI3mRoksLT2VRsv5LDouokY5kZ2gUipK4aFNrWvn%2B%2BNXwW1KR0k3Jkd4YQt9QFNPJqTJv9%2BlZ5M%2BKh873zVDTLi2hQaAaEoab%2FDl%2FpqewY6v0ndJ4VB%2FhRZkWS4r2u7fXNgsJOEsgyEURCujbmcF%2B2pJ0hqDtu3RTwrupD35beH%2BoJwZAQ7k5TOebEcA8Jsc8c%2BbmolMKT5gMUGOqUBbSM3ahG76x8ARZNUjcsy2Npdz2E46JnMBthjlwtny9bZ9dtpH6yKsXdXCm%2FsuiqYGsfmw5INsBXmm0eKl0IUu5ChetmA3x6uYN%2B1P955efgmMw%2Bg2ie%2F6kAQ3mYwva5C3h2PoyjwniK6x2nzC%2FwqYXE%2FG8TAB14O%2Ff%2B%2B7KvRS0fcmx6oWEjlyfeM70asfqqbcqyruPVybYUtHI2t7QGGvBuP0c6q&X-Amz-Signature=2680b6f8b92fe95d776f279d4c7f0ceb0a20a52b03e12e0c7f286db8eac372e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
