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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=e1ab5b6d1aeb5dabfb7c82aa2faac743b24aedcfe470e890c446382c936e68f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=f0b7b956bffa24d32233b41f0e1e25b8d20df05216e3dce472c60b617ea5cc7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=265558f188400f5044c3d4f92fe8ffceefb1c8f1f5bc655ab32ed427be671d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=8612333e7ecef5f226c976f9181e6cde8bfd5db51ac65eb9cf16b2d175f98e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=878a45d771e12791fc9b08ae3ad823e88580715c53e7b0879a23bf83f89456bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=d0e04b66c9acf1dfa803602f027ade8cdd03815a92744d39c134cb37602a951f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=40023f1996abcd2bcecaf49f6d572513d578418b5e334664303bc7f3663236de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=4bd5d16899dc098265b5de20cd73e55f8bfd87c4e7933945da4ed7b81e49b076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=16a9422389b61c90e58276917d7f0e07fba972400659ec0a6cdacdbd5a4938c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=4ea541dce3f4ff660c4d4388f1842d9e327122078d7900675eff00d027fdbafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=ab37f2372a53e8477c6d6baabbebc8809fdd5fc3168f1ad3d4ef8b8444e814c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=5362bab3e38caeb085166ee53509484918ae14b381352e0d9da0c82bb9a086fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=d15a867f15062be3493f5e0c6320b7a344374a4d3cfb11191e29c75760469daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VHRVTL3%2F20260101%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260101T015626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDPmRt0xE%2BuKtfSEbjs0ysEkCLjllbIQa7cylW81hf11AIgXmF4BU4sdBZmKPzC3ASR8OesHvW8bSl4LXahAhOPJAkqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAbuZes71BpnuNRGircA0L3R6zFjw4pW3xuoKEOoBaZcBewmns5IbzPJ9EKAU2myYYiO5v5oC1MUiwbHhm3Ew%2FH7xrckUeJa8xVgYPIA06s%2Bxyd1MHZ1U8eubEtxybfSkGjiL%2Bev0eLuUGr7SAcRUJ9jRikPYdn4Gx8Puosmoy8q%2B3TfR9j1oPOfnX3LZBd0JNg%2BoRhDLj0d01FtuI3F2NZlfXMuaa8biv%2B6hIZ0g%2FMTQlPLPIkzpHSQcUC0YSWI6Y7Lt4ZWNvGdvuxpCwRe877huSF%2Bpcd6HAF4j7sQySrqCp3lg8nh%2BFTG6M%2Fb9MtgQ7U5IBmEg%2Fl8ftIpZXB6cxMh%2BT74BPv%2FHBiPUxZqjbN0MQJCNOO4XopIDRS%2B3YjPpoVaUrv6tVdNFuXkk7dmw0OKMh6%2FiDqCoXfEbCl4Bd%2FiCAcbItvv3H9teXblWvb7jExJXweW4YBP%2B3ggHyvxwab4G77nwoX6pW6BjxqDUa5WfOKPbDOpJwvL7EcuogSRkqOQGyVKZ1HPlsvWICWevd7e6frUr9y3z6uhVoL7YoLQY7Zin08VARlhOmJkNS1grovEMkGhutsQLHirJygJ8hNk4QXcJ7mxYubZpXka7ydwpU5VmVwo69Kt4j0LareeptOsbj47hEMNHcHML%2Be18oGOqUBhG%2BsW3VP2sw%2BdD9qs0CFsiW0F7v4CjREdPIWWrzgNYtwNj13v49pBoTLjlzdWjylAycwqu0GvHz9UozSZZ1F6C6YNLhkP6jZgob%2BzA1jG%2F%2FLzH%2Bc0WdjcH9cJt50eCHETb6tceoyCcrKsodMd57Hkqfd3U0HtSD94suy1Gxhi2Rn6RrnUHgXPWMSSSbDQ33gwiJCTLWVYSeW8i8MgMIIaXA9Ie%2Fk&X-Amz-Signature=337d2bbc34bbd9126f121b374f4bd686be314334f3e1cae80a12676752052f85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
