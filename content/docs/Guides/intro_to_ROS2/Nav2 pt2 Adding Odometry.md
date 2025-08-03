---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=0f1b0ec918f4aee7b07561bfcec259aa8a50cb9e8d11bb34c16abf62f6f4d560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=9d2c602a5b9371b58399750e90f36b6aaa5282229071218f9a79ce8ed6ef6ce2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=f4ab68c5f060a7499cd188fed21d23c55ad24bd262dcecbbd966d4a5d7a22cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=f7ab8bba6ef745c18eb13b7988f5c0c8c9434dff4ae34b06ce4984f815fdc210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=11d200d0a8d16cfc2e18b54aec3e81aa10f3496491d675231032ff6a10049b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=31b3d4b7a6e4ea60fbf6a3d90c67c15ebd94904d087f32a3d5b993780519788f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=89c79c1ebfbb7f88568796b4644e7ca1611a8705c037b7dc54afbda77f26faba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=c04f670ff94064fd6a616bd6103404b16da5dc1bf174f2be1339447afdc566a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=17e86fd068b7334bbec9aea6dee1eb9a31e33ccaadc420e97a7fa373a7086ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=1c8ef8c65fa077f96cdca62f70148a93a318bd7026332ba98343e25c38ac3ec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKGHERGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIArwC%2Bh6RzpQodMeerj9ywmIsIS9kF03f7rXdgbpov2xAiEA%2F7ZCXUzksbuVRm%2BotBJvauBu5grW127sz4hAHvNLV5wq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAaclRXAA4lQlWBWOSrcA3Yo7fDShOyIg7kT2vxtR%2FQPF5TKQsw5neYiNkDdZDPd9w%2FQuewasxzsmTVd%2BUNe05GK4ohyB5J2AgF%2F9o68jkaQF0vcitSJLCv9TpyS%2F0KTsyd5Req%2B2pwcckAiwuAQXac25LlIulDk7Q%2FJ887m391HoTnBv3f2FImxiosTum9cuA7aEEe6WFlCkcQhFMbhOtHJDi0mqBgbFhzB9fj%2BWJjqrxhW401PBrWrPe0FVSZ%2BmKAhJqM%2BHaB9yXlbo7GoblRmtyfynrK7clVtJwuBU7KpIOY8ld8Fa61vrmuscz13o7I7P%2FbGjs7lVV8jag9B80U%2BzZ%2BcfxOkG%2FJIMFUbuQ%2FFFvZApC5X0Hqp5y7olhZqSWqY3ebPC0TSYFTz73Jia8vKNMNal7no3OQ2UF9y%2BJWPKJJEVIcNZsLrNZCG0a8SFq35kOjJRsyVyQtH1aZBReZBq%2FFpk2BlMmytq9dkcr9%2Fy7wfy%2F%2F0CY5GcseJXGHrDBElxu91%2BMf0UF01LMC%2FDIG9eyDlwTVjVQMK0RxNCzW2gF8RfUWnuppOSDZnhX8RfvCraYpHqhHOWzAVaSgM%2Bi53o7ldygv%2BRo0x7qRsk%2FNpounwjg9DY5pp92c5Ba%2Fvcr8oWGNmLu949dLkMJ3JvMQGOqUBXj8vdVCPfHp2oxDm2mi7%2B7QLpNO2KA6hdp7KwAPm2PNGgk36Xaw0wsZiS8GDdGSvNtfEBTstxIqKmryGt3JZUHO7gevOiyPPiQAdl5tChc9GEzV6W345girJoiwp9x5qjYKg%2B%2BDx1c69S6ZJVUhDchddjGrNi6v9aftsWy8M38EbMHwnteE6p%2FkBbGgIE%2B3BKNGT%2BsogRKH%2BwNUL2nSG7cPZBll%2B&X-Amz-Signature=008edc03a83f653e959eecebb40a65b94cfabd348a383bf3440eedbe91740775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RXC6MXT%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhqLphDhhKoD1Cs8YNI5j2KZgcmzhhQNASWQcf7eHA%2BAIhANyVcXUhNjowDB%2FJO4DyprI%2Bo9rYCrnrTay%2FyPw2WMbQKv8DCCoQABoMNjM3NDIzMTgzODA1IgzioxUL7usH6sJ9kuYq3AM%2F53iD4sob4XWtOjdfFbkS7fMFdzCshMzaa6XO9T%2FNwb85u5jwyHk%2Fmnq%2BhKH2pz4vM9dgfkRr2cH2cMOHNjG7A8iaKksa%2BKcqrVb6k9cS2YsQRw57OzlUa2%2F2R353eoKzT8EryUEV5qTszE%2BWo2q2MyUCPFu76uDxXJeAIJK2T%2BThJYbXQTtXA1Lxyj%2BETYG4gZ66%2FFbu%2BfhbqLH7tfskWsmktRsy%2BeLqTETTnYl3QWGMNj64xCowQrynJ%2F8vycBxr%2B9SWfgCfU5zjE8LAjfxhMerwp9SM2%2FnYlz4hIMypxVCwkvgz9cQsmbhSGrHA9Y%2BN7J5gcKJW%2FLBO0tHMwbJxZsPQP4Sn2o6p%2FuOU%2Bl%2BbN%2FoLj4EqaLyUQ6vFxqXZcS7h8Ujk4%2BK0w%2Bq2wLVlQ6ttomuz2hYU2DZCsV9EjD4%2FypwHlEairkP2X%2BewJRCvdmYk7iLHyg48vfN1UaeFCfp3NTTpTq6mCpSW65FeJPLTA8k3ISrkvey9sqNTnJVEtG94IQHHe6HiYp9WGa5OMdaO1tguGfSdqAvbe9KwxLKLCM8dYl1DtpuyCMK86NXxK8iCrFNArOzS%2FLgmAzvlczsJ8rqDU0iV2inW7xkcFd59pXxfeiubLRf1c%2FwbjDzxLzEBjqkAYnlqwrWr%2FzlY5veyCYetOn8whjuo4G6MHZqljeZGDIzsjWz2zXWiFAtJt0eIJtXHwUMEJu%2BfEPbxCjfMhB8qzYzDIKFmrXFs1%2Fd59VB3y%2BgW2RKpEx6BEyKgcjFqPpmcehtyYq9CB7FBG8CCSQGfkTFmo%2BkRV82UgCmctmu%2FpyS2D7tVxGdghsAAGtSSyk2UhGAlb1VY6HNMX2N9AoXJAZZu92L&X-Amz-Signature=7a49e43c801a10b7ce54bfd1961d70c2814df32d6cbebbb89ae9b0c3f41fe7bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=3010f6947c118c2a89fd3d4881a23b66749dadf13b93b63eba28e277068b4041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=7eaba38aa2f722c3dbde96a303c3f059038b86457f98fdd1b8ab283654bbfd58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=f0b746fa249414aa87766748bd2b812b94dc2161317c2228e742da76de68f14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=27239b6a3f0c4d330bcc4a478ef6e1a88b05cd00a46be6d14cd159bac0a49a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=58bdc9da0e0fc19239e526b5c0b5d6bb37517df3112c1b3f24ce58b725dc8032&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=54e271f2f35c5ffa8d317673c4ebf93c06530bc7a7ac2e8cbb1e301af24f038f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=0c4510f6d25311f4b1e302507d59a75af0e5a119f77c690d8d72040660203039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH5H2HIG%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T100932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICmLfm4XcvoFPoKFK7Sypa%2Firp4Al8MFmhyN72zSeupcAiEAnOlb373SNsmtoBU2OI27474qRbXWVMHTjoJMv1KSUm0q%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDAWIHpBtMujUoOGBXCrcA8ySWplQsjnUVFtPkU%2BI1DIJaWCBoIywr4kQTFrYi3JqcnHKrfxmQdxpGGU4QIQakCIXmysogdWBwu1glyk5ct1PSRBJ6oV3JWlf1hGROKOo0ZiJhPI5G4CtY0LV%2Fp1r0WZvi7YxUqlhpKX%2FUFnVr6jX0LjLxTW857Dez3b%2B8tI2TB3lbbsmwOhveTOlGWApPGnkCknVY1tivfquaBy3jrKbRI0S%2BbTty%2ByHr0mCIUH02%2F0PxS%2BZIYo12yEvkuW5zfduHc72Ml3WKhvJ6kyxbKiTmW5IXxnc0v8ftUPA846WpwS%2FbHYj006p9%2F0gcKLYzJbI0Hl%2B5DCssrH9YyQpwKvLAxuNXGq2WlEbNBzSbbTexfFm6zatwTQ6q0Fs%2BesUSODKMa5kQVTAhZ14pd7EixPn9PLQ0H3Tgu9JfQQe25%2FgYTt%2FU5sOEU82ujzL2ayi5ACOUTBjpt1PvI4hHEm3fTZpz8aqXyYS1k%2BhGy3Nba3r29VW0olhqeoJlIu%2FF0e05fbM0HwLP%2BYq1sNSolZFRBzklPlHph3HcIRcweFrdzfc07fFduDgx%2FWrCe6eeg%2Fj5q6Shsptiy0zKrD5hVeMtIbtFf0PAlV323yWwaOwpSQFkMJvw2l9GxDtn7JQMJi%2FvMQGOqUBnCaeXrIpig7ab8fRbhPjxYig1ec5Hphmmm%2Bn8l3aNPAc90N%2ByVpfB5iYr4j4VUe02tZnBd2%2FnhNbj0qlDlNLqE1vgDm3NQLUSPp8wPmPSRXAQm4QRCuW%2BDzRGQO2aBLnSXO4guO8hwC4BZ4PccjA82AOn1%2FXb7w3FrScLvj0bgYMAuwgekGya0rza8Iu5quW%2BYN6oNzOYYFkBZ9mYPSw%2BToABR86&X-Amz-Signature=e646ecd589dbf2090fe590490193cc34742ef5567d9a3018ee8b8bd25181d690&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
