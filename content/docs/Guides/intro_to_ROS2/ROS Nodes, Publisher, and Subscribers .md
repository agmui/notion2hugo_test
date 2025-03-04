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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=53f12ba9c949bc94dc59bfe1d46719d89d0267cb72b800da475c4f7610621d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=92389a6d08c027c9cf8e596950728c35c0ec16ca26857dfe3140ec297c248e31&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=3892e82dd959d4fc328113ef8bba3c9a8c601571947adf03d36c243cfa357a48&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=8905796f44700ae274b598a42811a02bf522b85b314c06c5ab3d8314e84047f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=7846ad79854a3411478d9adba31f0c941f0545de40fed2192cbaaad2141c436b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=92311ad25503dc56297afbedecc3a9e3089df6fc6e294b306c9a1812ac3cb59b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=2e84f3e3d1636899f11947ae90086bd55ba192d113e3b83b216b5981bd3f65b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ONBL3U2%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T090844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnyDRREySVGsQ7f%2FmQJGcL8flQPT3DeVxPjtleznZAsQIgKYItFTlf%2Bw2cISrxmimRuBv0aTbEzCprfqcuQojoR2kqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAD27cNM4dCEByllFCrcA6yOG0nlBrBW7%2BPnuTalDoNzpYNfxOvkdy1Xg6csCNXpnkTLTRWK6S5%2F1%2BlmtqB0onNDFWCH%2BiaKwYTUFT%2FIr5RQu7nxwut5ce6Q2oWZSjMOggG324E8hjR1nONQiXRFGnFND2OJpLnb069LUO4h4MF0rC2kXeeoHDYaa1dhjjy5P9pp2GDexoOC6o8TUSg%2BDQprHgrVtaOVTrQIjqKdy%2BhaEHbYCpB9jerB1f1pqy99l1jYhjj2vByyhnjeGGPVAgmHM0AAGvj3CiD93LyBQDcRHdsqCAaChptVOGDSTNTofvmdXinsHCBkr2RBjrQJCfYTSOhR3gON3rPoHeqTHtcE1g4gC%2BWI7BcNMZhruJui3xwRIEG%2FqlXdPEytgHbjZxupyLH2arYaZDv4qTEGKo9xXVDwU9Uz3%2FpvcZAGU3l3wY5Sbl7PoY2UiMt38t5Zn7OMsLALzEeOeXdO2q3lONvF6LY3NopUHuGJDI1Z6avfvL8NJNfnq3pTcemTMIOtMFheNngEJA2oMYClEMya9MleCanU9dPlgVl0VmrJeFLmJVhIonTjdfzwyZaaw8BDpgLhKy5jUFtWBvdcnRKYjod4seCJI8gtxWwxP%2BzE2HJ5nEI%2FAhscoNrtbmBiMM2Em74GOqUB32zN87l60FC0GsuPyf9C3vbcp1%2F9729Qd5P2ICF0wmwcp%2BJnsnnkZAWrFm9R5zH%2F7ng1SrcwhT6GzCOh5%2BrRdkhWPrVAtts%2FWW278qbf8hrySRsT0YgleSIM%2BtrxD8jmLSiwhRY%2F63RrmVzFPNogb5yucuJ0DIZT%2F886pd3TIrTp21%2BTWZhBjJlkkZKRhcWePSP%2BS2C7nnkh4tm3Mr%2Fe8OLzbBF5&X-Amz-Signature=11695d893d16328338a4b85e21eae2bdba1f54bff0c3e281aba6f182ddf80e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
