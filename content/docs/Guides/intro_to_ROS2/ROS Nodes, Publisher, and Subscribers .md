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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=5dc92d3b93148eedf5a91e3db07b5bae367468cd526c0edd11840b53a0acf9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=03db16860a9b9aff1482a378b162fbf24bd96046a3158c63278d11a290914480&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=06f35f65c0e7fae4859c8fff5728e3847984a1f52bc35badf6fc9585fa4fbc2f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=65c613d2c27e4c2e67d6d1f5865ab0cdf6c87e2c7b46ea023659f379147918e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=7226b66f25ebff0a6c1813ec2810d179ed007d876158450fbc420e761a5baa9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=e434b8a0373746f8848a1814f9eaa903d407532a381e54e492247ec8e4c6460c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=e2d59040264c0f634b3a46d035fa5cf9866c8aab689df3518f8141523dc7899d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4SDKU3H%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T190730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIH5V6KP2QFVZ5tiVbmKL1PmtM1C1uj0c1rfP7R095PLAAiBkj4oCkBRBWGzafutJvF5X16Z6Q8C5KT7aVW8cvK6guyr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM%2Fl4qdkzeL%2BKdgoedKtwDW%2BWnwQIwkWGbap7eW1AV%2Fu6jh75BYUIULRhcriYlqT11wycmTf4MgxSHiFVrv%2BDGDu%2BGnkmK1z2xzrDwkiVQRtg59huuX3%2BqBeDA82EJFve8K94araCOy50Uj2SC%2BI1OvqEAuWNSh2RM9FR0%2B8Lq55jFqX3%2F%2FwQs8IHz2MbRG82mRYQGcWCMsVA4EOJlXJ%2BYq6bXT57WXMdsEGA9xBvMQty2VdbOqaiTRZaSRC9XUrK5RLaipPHcdDt%2B0b7KRYn6eO3gyoZb4xUaLZ2lrxTCmenv7bGtOPhbBgIkzIw%2FzjTAOLCL8e0Gu66%2BN1e9fuh%2FMXq5J427LO0sn4wwTdfs5YllQjKEIozom0%2BFm8ZEnPbVfwSTph%2BMaAJp6KpsEpccWLTFbKjSg0wqxN8xsLFgDvSyMcTyF6DiglhQJNl%2Bu9WbIYy4bD6y0KgQKhFEjQPWaaTR%2BPaG%2Fy3Ptk%2FIAH0mOBsZcawLeo34MEfB4BHUW33PVdbT5Xbn%2FK9TPfZiA9s%2BmRgZL0umwZZ5LG%2F29lmufVQ4GzDEe%2BL9Q7O1VKTdKUH1dmq7sHbqYRb1Xw8Jw1XVDK%2FyiKpNEgrQtQsDsabSeUHjrCre3FZKHhukf6f1CZYxxZ3oXxNs3wQ6B%2F4w2c%2BTwQY6pgGVpMHiyKcgORJ6D8uX0AJC2H4tWmwVYgQ6FMrH4UFn1XwZ5n5TDpn3QJ%2FF0FCks%2F%2Bqwt7fY6t%2FbuUuzifIISqreWzQF55PdRaNwkAdUuQnDrobSm6D6dZ7%2BF4ZdvE4eu%2BozNsKvkavz6kfsCSPU8dVavE%2FAa2FB8dbDKdiKcup6AOI82FZNxjZY6UeOxmoFLTgimdqXq9Wr2pPDul6XtoclOSLDhod&X-Amz-Signature=9b06db91c76878c06b284b3d1f51e84f6d852bd5ac22541ba3bdf85d0dd65f17&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
