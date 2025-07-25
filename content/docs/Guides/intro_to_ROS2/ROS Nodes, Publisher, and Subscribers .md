---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=051c9e3e36760dedfdda70f110aa8fb01accf8ca5f5ec2f5014004efe13a5b44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=59f59e193d1e8363e0f8ac98bc847afd49e0742826ffec0a0c80ddb4b9470128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=9304ee1aafaea221bc5ca04023f8014d22ea8f3f55fcab9a1d96d5827fe3ba8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=4c00ad4eb4b4eff04905a8366fc70ea7833cb575b04f4981c38455a0d3ed2c52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=b426faa23813d053d40076c50be01cb8da17047fe3f7d73d306e22dee9849997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=0cdba1f22e15a285e1f4bbe863630a15b1dbe6f3efb88fa586dfa48c72ffbb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=51ff969e70ce31c3062e2c7d6f7a63de5c925f27e8f0fddf3971a96a51b0920c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S5XR3RU%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIFMSobZHbbPfAR52GsBbY63hAAfohfGbZa5bRT0vj4jZAiEAo5XY4%2ByxQouO3SG3cN7eBAvGrMGAyfNUYAkVT0O9cuwq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJSN23Od8383nulLaSrcA%2FX7731Wd2iZisp1ZKwL9QQOV36XB1mgR4h1yiLB8bD%2FTe67GvtwsVUv80Oa7CyBKezpt2QW%2BUG3LFSSPxIZP5BBIl%2BwCkXSx1AmINriCZvTEb15xKW6A%2BMEFb2bo621V2Cl50EKReEAszon5iD3%2BgLypAXI8%2BMm7QLWMcBYdHK91V2D24NY5A%2FWwC2PqMuXP%2BzjDsqedr4u1XrO0fnmVEoKbmDJ8mpxtxdjbYnYFEJXft6YVR2sjT7Em5BMFpfUAL1Z1OtPd0Q86XnVn4zXeGWNEGXFkBtAU1%2FdXtLh36jiexbBG%2Bd3l6aSQE8D66LctjigKMDaGXFMF3jofHBxStSPplDhG%2BebV4Vm%2BH7P8fhwdzbMKoOZljG7SI0YGxUjk6yrwGnlro1s2Gw28jzsxnsMnNrOLCGXf1JJIcVHs20nAvE95f%2F74NfLvWw5xeWonljVWr9il85awcL2ZHTEpR1Z4eY29ieTumFGnZsZtvG1mabhLuNgTazPlMBzKWTG991rafBt2n%2Fk6oiKnuVpIddQX6KRlQo1nTbMJT37j3yY4hhQANc%2FRQhm5eLBK72lvR5qu7033PYN2rcsUBd%2FsNu4j4bFOy6v%2Fs4KMxNDtpD4RsJwMPODA8BOsqubMK6qj8QGOqUBib%2FA1ETadIKoBCTAxt9qhTx9LBq5CVwMmPlnG5YNpnl4KTrVFv3O5zAAedsnuJ7iMO7D0YS8KkEI7SFU9Kg6%2BbcnHosDDJuoi6rZOL4GlfSg93KoenXSR2A6sVQyioDdfKKBofGjWA8zK7zJRLoTymVu7F0zsMbvFQmTjvqwzvVBg2moTUnlsOwYUmBAjGuOz%2BKkxxbmER0dLN%2BqwkHEy77xytvX&X-Amz-Signature=b082e22dd9ba7a4108aa0e25a0ea73e3a9a9eebb20495d376df3669a81494772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
