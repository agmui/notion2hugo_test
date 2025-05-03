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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=8a8168cabe5da2f58ff373dcc468c7e4ce2adb14fcd9d13cda160c29fa278592&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=951722f06827c95e3d51a031a013c7e1a6167ba6e77c2247f4b1e88c0bbc244e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=38cdef28c1e8645bdcd338f18b8c178224fee8a59115cd54e062270c69e9921e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=2f243ab2dc5dd3033082299cb235a5cb40b84928bcd452cce87c15b92f2f6083&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=3f356c3c50f05242a18ed63db604396bda491b519f251fdf4bf2f47bf8b10c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=ddab5f56d9abc47f993aec21074172ce7e750b8b611892af882b97f8ae79686f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=91332a8a178b666f1064d90b3c5dad79af0e8288ad2120403380dcc4935cff03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4GCGLZ3%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDNuUawNGcFTlK0BfNSI%2BQHtvpD%2FVgpdypkPXFQuw15RQIhANujH90xvLnUZdVm23nqcsfpD3aQ7s3EhajvsQhpmXNzKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyA6F1EqKGsy8I8eCUq3ANvmMB20YQQbZKloPzAVCdhkGhDMucS72moDTp8Kuc%2BdTtawWjzx2jLajv7KS8R041rV6%2BC5qZPWOz08xGvN33NqYupgpkG4uquoakgKWYX6noyynsUrQCjzgt2cbOy%2B25f4Ex5xQV9vQdQjMD5uvUIKshOHcNqbpS5EZCr4gkbVVV5uE2%2Bf%2FbvXp678%2BButMi82stAFw4N%2BXKs9VMves%2F8WOBgQ28QQINzMBbsAiGGMY3XwLW0Dv3R3Ta63%2FEXwfhYvVrrHuj8nwR4Hkmf1pAacTi7kysB5%2BdSSTBzhw5R7DBJ1a6AmRcRcvrYWNCIXZQfiwaZisQoGIMGM86LiT83Fzms1JmdufMTmaHdIoruMCjv%2FhIfRB%2BuqvqwC9H17auHa5H0KJF5U3Kg6f%2FTv2dgT0eKS4UuTASs5nABmDlgOD2UToHNMQnAy%2BBPcgA3Ou8B%2BI6PGANgxO%2FXu4XPlNfIA%2BXEWBpV7YnnMo9dZ70c%2Bg6AilYCf%2BRQyvqk%2FyNbvEmLpAei0b0RvtSIYcqoLDXbk7lm0fzEiq29OvMhBilB7OB0DQglKnms5B5Fz3VAPYSwfW1tgpViXrLvzPYoTx%2BVZ0Wle9oAGKy%2FXG%2BMmaDiHIAcsg31FnP2UZfTDDCQh9bABjqkAbjpypc6Gk9bTVqRzvPmcV77UXpy%2BXBk9g1ob%2F9Ai%2BbuVlbg1FjKmgCR4VwwToobDIeGfI0M8tKQS6v6a76UgSeSpFOyuMQtfPQgHCStfveaABacPjMvp5nyxC2gvY1MXEupxa%2F%2B3rygYdcThvV2sx7UNylPt7aaLwHlFmQQLpHbpJVg4pJFV9qeTr009Re9histRkKSG64wS9WVqYZeq8uuCM9W&X-Amz-Signature=7bc52f597d44e96ec6ef8d729447776972b2329461ae7c80f3688c76f3706f5c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
