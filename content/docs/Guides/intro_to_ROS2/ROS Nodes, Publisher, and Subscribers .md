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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=869b675ce292e9e2d42ed590a47955cfeaadffe4456ea7d859b3129614d986f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=110d879013e6287790738f16f68b719f0f157e6288037ab7bd9826341a7b43a9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=9a36b1acb1594cc7571cfcb8d7975105ed52fd0a9756c4473a89188c3a9543c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=c3f034999f27ceeccfd558d9278d4ea1f438786f4e94f589317d6c3d2ee01e1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=397eba6fbcc5738ae317fb2f751b6f0bc171f60eac2d4cdc8046053bb8308359&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=404c34fafbf1cbface13e0ead16c7019c96b172b75a68fe3e558f7dd6135c34c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=2c8ae977e7c52676b9dcf9adc829ff471bb47223962390561d5f2b7c4ec74987&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K4DGMVN%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDQs0e6hSYZGez6lrqYNN%2FytDM0rp2WzXX%2BBlx1jIIVFAiEAxZirCGn09kLW29ubj%2Bp1UZGJQexpKHqoMVgaZqR00S0qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZWLoCBK3Py5n7%2BVSrcA7cI0SjWHpsGPPW7SFt%2FufAT47HcZymklb%2FtxalhNQIgy5OpTECQ70WJiVvbPAB%2FStq6lSOEbCTCuSRP5YZHZe7utGmpPoVvvbPT7kj56iasx%2BdJ0ynOL1%2Bg30eMovet9pjOX%2BcdKFKrjpTYj%2B7GJfdTyYORS3jDJp28L5VhBCTCGbVB6sF%2FjjDBKoeIS7DQvW0oRh78kIeTN729pTDQL4p5AEAq5kMZ3eljXKZ1kzqvzlE6%2FmvloCJ635G55dvGM9%2FlX523QS%2F%2BxUvFKhy3tQTTsSkwnJ5fHri42QXfHggzSS3VGh1w3%2Fd87PCJYXPizVb6ItGrXfNorVjOHcSMOi9pxj8QpfHZ7eAeUiZ6DaCYKnEwyWqO%2FIJmvdeV5Dh1cVY%2FWCvCocwLdHcmNH80boqU1OyECNLZEcnzXNkPjlMlrT3VZW%2F76dbf%2FiomZe3JgxgZCKBClyJ4FqPMi4Uer1oziTXT1QH3Xht0pk4Eu8dzz7vH%2B4ouejXDK4ehcMMXMEhECFqWTqv2AhB3k3Wes2rLzv27e0XSJJA5VHx8NEFmBV1PoF1J9BMW4XY%2BWqyGSoFxC2l6w104MqImrHQU%2F5a6kSPOm9pFy1fZQ9w1NDXdKfgZG9j2itXmYTE7MJ6c8rwGOqUB6MxJGWo104uIT6l9dghAzodE%2BptfdudPrkRDDujvq0NRgW1u0Ho0%2FJGi69ZWKcLYgVznVOneKXjWh6jRJeNysN6i7Pvygitc23FhBYIl32co1qfOI0pbM7lvvFy%2BQh2b4g%2BQkSb4Wfadp0f51O3u8A5Ukw64%2BiM9CMyFjQGUhxoV199224PvlYhBvqr1l5aL0varbxaFO7m0VRZ9PWRJKYq0GByb&X-Amz-Signature=efd082da5c4da7b215c2d040b00d477c383da58871039360cb6f9a44770de143&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
