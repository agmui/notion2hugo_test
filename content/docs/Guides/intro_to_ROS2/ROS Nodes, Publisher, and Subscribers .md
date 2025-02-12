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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=9c33c120b38f9d5096a39648fdd0b54617f184c48ee7c12e97b7dc7a23780c6f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=fc14237dc3b83110ca736d19eefc362e90a6852e2389887f0fc003cf721c573b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=e810a1fee8f41d85a0a5aa96a52ddef06c97d6b50bccdb5f9717d63a4d155a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=94fc8ad6565fb05fb04b538a7263808c0f0640bd7fef6150ee6be7c69364ee28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=e1ab37628f4ca032a8a7ca899857f5feb680891d5bda6b8971c0733215e76306&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=54308ca3e048a8dd67cd1589805b93c5c097f3bf95df480d63f3e4a6206eae23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=955de483f924a0b22c62f0a3c09357bf0e8e2e885c00e6e7cd7eba733e92d86d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663KQ2TFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T220735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtxOXCKbPrw4A1ifAmjGtSQJYzBRQhLJv5kJhE%2FoExZAIgFE5X3jYNqvkeu6U1YG4nTMX7Aj8HSlQ2AGJTNW2IfecqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOx9eBk2DBYV%2FKk4BSrcA3vy9s1zkZlcwndhbjisidGWWQwwcmh4eHbFy5LvqFOgJtYDG4LBhK%2F5QcurDsjvhcLqpDEvrfjAdF4HAUPdrPUqrLP2VCd3H23iXRoITBMk7BNhF6gg3O1HL5a2k%2B%2FQBQajmSrYtxnZbQKcjMnrb%2BLcNISJvbmfkT4oLfcbaraB92Lo2k%2FJeT42x4%2Bksv4a4oitLlZ4WMmtSDor9N0OQg4Pug3hIl1ccAKSRlkUzQBrLzIkOGawcagIr98LwbhIrf9zoA4me8NXHFdXZbIg4zrhHMgDgpWrVtzHS2wL4SpYn7hOa9ELNYNwMc34cLU9WEMtHjqHlyVMpJufjN6nFtiZiZvjl2NSYAYT2chfKc9FzHef4aALpujmg%2FchY9heXjK53TZ88oh15C%2BDbRBMU%2FxDHrLYsK8f%2FUwQd4TKdDlVdEKrSNWBQKRRv617R%2Bd3TqFuWRCXiNQAiRcP%2BmXNQn4x42QE4s7qxgME2LS8vu4F52LKYwy6FxarGonoC4QFb1tzTGROntz1I3uuG%2FLDY1TtVMkjjlYTkDOj96kmZM5pWUzru5BUbxRuiVDALCdwar9Hf1eYwwikBwOE3oc62RQPjH0Rff69OSCTCXLM8uHmcHm7llE54QPRNvHCMNmotL0GOqUBimHIWyj4HimGD4%2B6d94NqdJPoOkb%2B4l53RLr063TTDQC4SpcXRlrdl87EJQ5%2BYcTydaTahfbXv3bF8ymLRWKRkeMnQRS2U%2B5%2FGDyXdlF96JcbCWlySA0p2Qmeb%2FrY3bb74QdJGVF25jGdsovWImNpFZ775BLnPu9WpA2EpHsPpgOEoTXbnPM2EkRfN2ih%2FCbPYV7UrnPyVSgxOQg8PcOGHgDw1WK&X-Amz-Signature=5b33ac47329ae811350250ed432a05d7539a141fe2f0f3a666fc9e4643d6f6c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
