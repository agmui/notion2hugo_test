---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=8b41c5c12030f8fcada04ae4e1238ed06cd9db5dd7f1f4c6c2abb26fa1fdb2c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=97fc86c859d7fafb1f230b4df3ddc3892d48300357c3a69970a2d7efa9fdcd54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=fef5464ba4307bd82f41b6401133b9113c808340a4491a6fcb7ea7c35274c365&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=e433e60e6ec9ebf2b96269b3f7fddb6fe676f906643900f1262f8d9e8e12fe27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=6c37bacd29c8f76443ad9c13d849a2fe026cb1ceabdbfaeb9307d3a1a77e808e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKTGIFU7%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDIh9C08iOwJoWxtHOsH3PUS7pRxnTYTn0y%2B9LN4aiizAiEAhG1f%2FXXkPk%2Fb4UGXujmOG0PcapgF%2BMU5Qw1XCVBeG3Iq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDP4g0Pkh%2BCerDfZecCrcA70PuQ1PtvCDaKzMJZs839EmRQubnLc0oE%2F2gk%2FTjB4nvnquNyQdJ0jAHNTymBV7LUREoRw%2BVXZb7aVV%2FGxqRMkjnmEQZS4umJC8phRIJHaIJq83XwHKcsnIC9zreyJlDIcMqJsDOr2m0ZQ0U4rmTUawphWJ%2FQvrMFFcIrMwk7ePUmaB8KVbBEDhWFv05XwjPINap3CBTIro8hwg5QXjsYT0gDA%2FUg5wvbFLeI44LrPt4LThMf4e%2FWDoHF%2BYXmw2OoI1VFSZaf%2BQMuadSjRRXA7v5DmiHH3sozkM%2FXcc3ibavDeMXRrSklUmxI0DG0Ypfq%2Flm47HY7zj%2FaRiIs66QduwP5vxmxOs8AAr%2FtlPI4KGq%2BrxrwYAtA%2BckUQj5F%2FlYpbCGkRDfqYFydMhXNwo8J6J4AwYFc61ffpovZ%2FDe2nO7D%2FzfImkyokWBN6cbbdb8u7bIrv9JF5qG6FqXj2%2BicXg5hHTToc%2BEqaLSRmG5JdQxcPc4HtA99X5m1zQfUwNfkrnHgB2e4DYgjbU4kwzqqppLSsBXcfXrA%2F%2B9Vx0azUav%2B6jf6rlM4xJ6aHSFytuiziy9QTJJpsSUIlI%2FG%2FZJmbcFJQGwd2gGpLhGlw4XO5R0pVlaKANbxk6bByaMIf9mMQGOqUB20zBQ9FfqoZiq2C7iVmXNKzqcMOren3QpaMISH1H6JDfdOhUk8udfbCzJ%2BfyvNw8%2FnVLCvBqwuouZuJ8NmMjapOxvl2So%2BHeRpRxVHx9KOoEOtvzVZKn3o40Ffi9IDNCgfZU5RJs%2F5M4rjXZwq3kuONN6ylwpq6IACgSUUMK17M0grYmjXOEBCjl3dKkW%2BblCw4YzBUPmkY28sP%2F3qw%2FJN%2F4EYW2&X-Amz-Signature=3107bef76e678156cd5295d8fe6b2bc815c5c51a255eec58046b28337d577cfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

# Nav2 settings

TODO: change footprint?
