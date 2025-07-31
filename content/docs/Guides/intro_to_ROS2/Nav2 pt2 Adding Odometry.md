---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=5812e0e7dce7b4321b69b545b568505aa7fd388b6e3c55eb830aec663b90baeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=b67d104943c81de8463ba6e2b03e78d5022bae85eaef3fff2e2a98dfd215c0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=b6a8f0cf6b370c2cd6d6ba8c09374e53635c4d397455e23a5a7d3303086ce51d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=2d7ccc5443e15c4bb58fc18daca18117c15a5569bff15e604b72e06e327dcc0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=58a70e2a8d022973cd5f2ad5debacf6e13cee33d5fb1ab5e614c7d2331fb7802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=5894fd33c7ea31f7992cd3a8eb6de2efa4fd415c8398338e3fa1ad2021a1d022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=6d3b6a92fe7090dc5bd1d69e0a38caf5f7132ab4eff46ea518661e688d1321c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=2014cbd4b58bc6bdc1795f178df6e63593f5f19f35b7f31f4a7161238418a547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=d1645fa2e954fae3cda460bfbd4eecd05ab8a7eee3f86331a2d892759337be98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSAYS5EM%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHz4Gl67gRqJ9fkUlVsrRiCGkRynZxLYz%2BXEWZX%2FwWDqAiAe%2B%2FMXN5xFdek036WVVVmnKxO7vVHBRZPlYw8b2N2vmSqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYEbLj8eN%2BbBekP9EKtwDoKDU2leBuACrasOio64zSLaFQxNC67z3PX3q5J%2FqOw8%2Bk9J%2FvUA6DlEorGINfgkAEPXectsRui7tjFZqIhlrS878UHKrnkwqn%2BIF44vpYKiJwC0YDF4B3Ellk78jXRb4XrsyzjPjQ1tDYXfu9gfCpfkKVBVp4gXtHBX%2BOC%2BdnMCBQI%2BYUBYC%2FKCTevEjMoTA%2FFMcjrBp%2FDa5kHIFuX%2Beuqmh4UE%2F0%2FpRYB10Cj%2BT%2FPHkO5clP8yEENGgoDplaRLkk6m9CpS%2F6jVRsq9v999W9SBiEzw9%2B8aBk0lByL9EVhNubuyuTMvqhE%2F%2F826il%2Frs9uBoAvW%2FBLDSYosR8%2FRI%2B5iOSdi9I%2BZtl2VI1TTavyopsRM5s59BOAkRlAucABKeCLnIhh8JoLnlFYW%2Bikxqgj2BF%2FLECzaWNEhFrt7L2Hb4hzANUSkFcP5zNIj5wkcYzELECy7kBG%2BVhZ9ar%2BH6KGPXnTg%2B%2Fo9N97xXy0JQvZRPX01wOzzdVlJQnMqWJb95XexUPDWEjp0tpA3xOy226Mcyv5Shxa64mZiBq31C05d0exAdlRJwT0jeTsFaRZryVSCFfvISZzEtqCd%2Btb0Oz7ydz2JGmMSrs%2Bxr%2FnacHJ5jUFn8tw0L2qhWpqYwq9yuxAY6pgELkJZBfyvtLiNpuu0dln86ygo1%2Bzs9kVRMeZW%2Fe4tbIcxqyddt4jhLhDqvCGpokIYeu4ek1f2kO%2Fp0TboAANkZw1BMyadAQHweLZlI5uXQVYEgl8R55mKv34OgxMWdATWdyUUmZvKdblFfPT1tIFPJ%2FmYO367DKAgaQMF%2Fe%2BMGkn2asUc8YhbHPs10j3Yo7YpWDa3KhThM0S%2FKFLV1%2BF9isD553jmV&X-Amz-Signature=923d6c7c9eead471afaa7e4d4b403bb49c3bcb8bd48f9c964a374ce76171f12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKRVILE%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYISw%2Fc5Vy2kWsmJWDiQUadmVyaKxU6yJaPA6%2F5cLblgIhAI27BWTF3cj%2B6DZH9xy%2BETKqUnzFC0jSzNHv5xb%2BWucnKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxcxDlVVniohjMGsxcq3AO8g7jfmNPd16HOmctWlqHVMlLAnYS8CI3o03HQwcgrnY6BzONhIUXumSzP8Tv%2FlSx9Y81NvrzyZ79yj7Y2WKO3RBryyDp7l8Qm5JWmjYSBrNksqK0R8WXrcAgn%2FI14lrRjiQdGeS4rZthVC8pbt3f4zG0aHTiC7XEVwMuEXBH0Q56JMwKJ%2FiZ%2B7IggHnr85RjGpQOdoIE%2F3IcL2vwNWkeQAev0G8tTpEsed0%2BPGy%2BUbIQJQgp44ZIwQsL1DmR0VlkPoiuig0y3NcTKEo57GjaDhomOcmg%2Fce7gOT%2FohbVfZl51PKA1bRnQtOGu0Yp%2FNYVjZlBV%2FqxeNeRwnbUTIkr7XvhoWibHnpAs%2FbFx0mDcXuaK1PB20gMXmM6floQ0jaeL6%2F%2FH%2FJWoPDzGX3xgCFXOaW8GA9AgiOTGuWeFY6MRFiIrXB9b0YQFQCDihZRbRnuit4bmdQRlkLBWWXH%2BprzLH616d%2Bc9Kpz91bf%2FZXhLvnNLiHA6YDLIViOXr9gc6A%2FNteEmmQt8xcpiN97KlTxihFvQGEy2cZm7PodYocdNHbh5cJk7GxpGC5t1%2BA%2BxP2p5Gc0aG%2FVMVUqDEDa3Zc0G%2B%2BpRsk1HtUTL4oXZBAPg8D2MCTcssvSp1%2FhNsDDm3K7EBjqkAfyXuWGiVXtix6GXMO7It85Ux%2Fg5bbzzgNIMBGzjmvii6XR8zNgUIMVHbB04bgtxmqLJ6riK8P8mmFY3t9c9NzqVpwmXgE%2BgOEsHZ0spPa%2Fi74nppcCM3CGs3jvzERmTVVOtObjxS9mqcNarygHPQa5JcsfeVU8PtuGLBnLBvpP5td1Yv1epZ9lp1o61OPbjSoO7Qtjb0WZ%2F1LHJP2xns%2Bj3qhs1&X-Amz-Signature=e24b183f4a2afb544ba67ccb75e78e577b87ac29b19dcc73125fdffa1ed2a8d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=915f52cb8c863cf22660cb6ee14cddab4554612bf6883e579bf34a3e2a40ab83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=5a7cc0b78e9d59c5786737e96125d535c3b28fd9d474253ab14fd3c4e19c8799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=954e971d5c2a3241bf44c1684edc7721003f45fed3fd57908006d7216eb1aea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=ce68fa0bed6244bd1867db35fe942541228abb43ef385a5eb83701ee20441c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=6fa3bf7bb21aff20053f77b16b0c2a58d676e07787017dc8d37096ab9eb61355&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=7afe19296725bec92c79e50e3a5fa4ea8578de4a7e589b4460956006cfcd2d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=6b1230157beead28dc0706244fd42e89eec1f9847d5a8f537a2388ef43cfcbeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633NP3KEB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T181426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH1ACSIsQxfudgswGiM70%2BvU26x3c1dcw1rnaOdkrUdkAiBjZxkLkJXw4GEa27kDMY0Yj%2BRA2aK3tR3efFWHJdXqnyqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHdrC33SyYhnYlWqrKtwDOfoPQ%2BGSz6os3TARX%2BxY9qmBfkH%2F3LkFTNl48x232rodzcwb8UjYDhP1UfjTL7T8hyjoDDcqS2w%2Fbdc6KC7LlKzSu6O9U9q%2By7wwlaUeZg9wQxBmidpnpBFRSQwe9f3mBmXGRTpBtTAmTHquTg0buA3TC%2FJC%2FvcIqgj5kpak0nPgpV2eI5wbFHYyx7r8Wk1g63KuPr%2BaUkmUUc%2F%2BEmI4BjGjinivEZ4LN3u1E6lbOhcGet5IQq8KX4QnUOW1L5Em1D%2BDqNaS%2F4ScUoRzH99eKQLGGm251g%2BtcrbUdkWVHGP3%2B%2B8OaG%2BmLVF0V7Cpld3lXiTY%2BtRz8X%2Bl7At9YQOly%2B8CFkBd3O5G4Ba0dF2Lc%2FbjzxWlaxKKyBcGY2Pafw2ZLrU4ujoGcPYcaEFJTClwWr7Rt0oxIsiJhdg%2FBVDdrFQnfDbH4jOwf5RRtGG%2FkrkqmFeRCQeAJRsfWqgSFZGq%2FgZ%2FMto2muCc%2BHprJhvFNc6J5BjerfnABhJSQcXny5rMaQoMWFdTq8pkVq3aOmlScA%2F1RZDYrIGegx%2BCmTuwGgY6T0jokopMRTDWdZMZbWgNuZrDu0E2D1VkT%2FS%2B1Le%2Faoq9PfdQuDt5zX%2Fpm%2BYHVEtT9%2BGXOTgD7joJBA4wuNyuxAY6pgE8iv4QOQt1YCSeNK8dP0iAPRWDJkn7YW7vCQLXhjaGxav49mipnFZZ%2FBZ60Q0GNSPSKEz91XNrVJxkgg%2F%2BTTfyg3NHbYHq0r9LvyR0iRFS17S2KOLn7aFgBkzCH2bIOPokhgZ%2BJSh74%2FD%2F%2FQ8b2Mg2H38bFQi7i5injcGWIOpF7CfRFke7xY0FwGIETD1hnVH1TjxAHijI5XFaHCmwjS6iJyP5fUc3&X-Amz-Signature=df02614d2c4dd9a1b14b47ec5d33cdab905baf088a92ce0aff97dd22b0ec7524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
