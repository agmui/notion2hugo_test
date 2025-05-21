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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=a6f66cbc19f5c9f9ef129748f57cbd07861862f0b4479397491d43c4df121e8d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=f3c0cfbad12009147f14952dbc00b67e7d9c8e39e77e66548e5c452f4801264d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=3e71cf743df6e26f805c58a7c8cf5da7107d865ec792910d74cb09c132b63588&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=50b4da54a016c27f0b7b1fd38ef470ce20d231ef7beb0d364c14f6b2e30097b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=f96f3cc2ac99ee4c4f725e75b1c1509dbaba8803822490dd42227876e6e3f608&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=e64aabd4d529545e42590109b006c927e918ae20ed150e6e5a6395bf56ae1492&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=9ad83c8d175cfbb1af3f2b997b534f47d891001b4991929631a549c86481267e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466724SNV6Z%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T110748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQC4FqH%2BfvKtoJLwv4IDqlHltvErCF1EeZvd21Q8wHi8XAIgeYvchCHaDzgHPr%2FUdcoAeJT5kGhDR68N0wjjsbQN%2BUwqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAwAMXnnKlwyRU1ohircA0pgyLt%2BMGTD7Eazck5FmadINrmDPhU5uRkN7amjes90dQ1tcVLuk%2Bo7RonRjwEmiWV36%2FG1RB7fJ%2FvjT%2FLMnqPFI1XElO6z2WvIvXBzp9VYrngKG70Do84QY4Y8Y2e2m0DBRJCNcKkzPWtQeYzEbUm1Wq6%2BVU4XNvdLYtSwoL8laOEEnno6o8w%2FKFBkSCrG%2BQ2tVx04KEZeOO0Mu4%2BU%2F5UnNhl0lVaxR5CRAptiLjL1bve620dq0E4ONBNlU%2BBfu38LW%2B4oSma%2FwJ90p1oYaEzYwP8YZzzSkviJ6oZd2mmmjZIgQw8KISNS%2BPKSWDnKB3LUGHVwSMJFwPYi0IrvOabgZZC0H0Vmg1P%2FVKS9AJH74e5RKt4WyloETrni456REZn2BAoweqqomAGmB0iStuEYeq47g963X5QRZPokWIezV5kffngREB0BWVxBxWfKd2omOfcE7hiNsFgaN3Do2eBEAON2%2FANanqIQLBV7hUENArfGC14NRgOaZXFYbbkqkazoBUIO%2Fb6vG0SH8Z1ompdCPNaFPXpx655o6oUSAhC9NSjN3hTidXZOZTAuK1CJbmlMMN%2BfFYMCQwvaOUiEjt0jdJIFquJQCgzDxe8x3HgmGyp0wd1VdjtwOBsKMOTUtsEGOqUBGGfor12%2F%2F0tWh1%2FrgMWbYeGDx7arYxD9%2FMX2cG71Mdxk5ook0qnnOWTjdDbjJGwGNMalc96h99OYJ11HR0LzRB9Z3pneE%2FHlv2cuSncXzIo5bPiaVUVg0ocr2NmRhETrOlaUNp%2F0pIx8QmpxGd2Psz1wyTFnUHt4QEmkvw%2F06K4IPP78UmOf498xcCvyriR%2BFBmchvpXSFN4dHBEjupz%2FepndHvZ&X-Amz-Signature=3db9a398b5adf2b22b6c44f3072bea23318c56ab140c65c02bf9f6f77b9b4534&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
