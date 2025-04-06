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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=d0a2bebee2105dd09c7a001fbd462259751969815228dc2fec40e043977456b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=5d630233f741d2165c9cd95a9a34a599daf8638b18d4542ed00c1e5f0e394ff4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=7b9f49133413c083510a98868c7addb6339e78fab7977bee7e613b1c87fe18ea&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=5624ddbe271e1acf4af0cba62b704e409aecfda4c3e4fdbd2ee1b7d2e202878b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=9025ca037439372b38e0103acc463992d25ef3377ad12fbc2939ac05eaa8ca65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=bceb6915deeb4d25c37d33eeca5c2df2970aeaf5b3dee8c9d8763776cb6db29e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=5c549250f15ad705747ff68cdf7da51e7f97cf184b8b288e5aa5ba0c86698675&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YQJBFML%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTu6bbWbqMr%2ByLpH5HjPcNOMMs5CHzk5%2BHKco3gTs6jwIgXe%2BZyRqx3suKbS85OJNt4FlgTsmlf%2FW5K1tZdV1PMqAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDPFTuSnVVdD582C3mSrcAxTVWbPASCsacCYT1kPrScPKsCdl%2F3%2ByGa6E5Zs3TES4R%2BqXutTxz1%2FAcTmqgqbaKSHK7glYwYbhCGJQwujghYjw3%2FVlQL9GC9lH5dxf%2FPA5UNA2MiSIMU1ENqsSAn55SS%2BtmXt%2BenB5nwQHmh35NyjimLyDxphcao0WDNeSAnGjhNSMo3GCCP6nYfquLSRADtSBsioh0F1FJYkr3BXGqSPadwCfzB0aWUBNqDSs3bZtJo686uu7ZJgSZNM3paEbHcYEnEdZZNq%2BUblQmLWgTnskH8JSSwT67s0Hw7tRjJAE84UnZsDxevQGBpNGfl6vFGT3Nbn4VmFQcGuH4QIWbsQzQb%2BdifEAvoskmPzjcgU5V%2FKrBW8S6Ex428NFFdbmOphFtBnrq%2B16mDrFy6ie9AM0ApuC0Fz9wzGn33CIpkXjROwkWlDSTCDmkHx5l5iosawR6w7evZ4sJojWVw2UVBM1vDJB1UYJVLKGJwg%2FN2h3xnG62v5xCdY2R9I3LXAMoE1UY16231mVSAfc9Qg9I1LzPUaVzU0O02ja9lKzAoES3gaEykuZHMW7B2u1B06%2BV7do%2BDx%2BxpPUslsZ6Mlu7BWn31YznKHFFf1ylIPRzqqd%2FhmnbyqG%2FdMRgmvhMOT0y78GOqUBV54h7XMY6TnBwwEUArbjl%2BbkyVtgeHrcb6xsphFPKnO7N4Bzdue%2F3UDYUEEtR1ogyZVw2LN23mhN%2By7Su4bojpaSek9VfuJXW7%2F2YB6P8drpMAzhfm5ev5dVgNOXQb9Pyl9LtPKZG07vOwtv0p5qBp0bWSwZkjG%2Bd2hUPb7FfWQp58TXIyJBYKj0p75SLhS%2B%2B7a7MC%2FA2BEFi4c4EWOGFckLMAfH&X-Amz-Signature=0d9cdc29636ecb9edea4d361310ebf14a89fd22e1beb265a1075f331efede636&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
