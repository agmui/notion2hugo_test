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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=7077ec7ed90411e02460f6645db27db4d2b389f02c8b3981a238e9737f2974b2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=4031257f418f9edbe754d6af0faebd977fff47af24cd2298747d20ac42652fd9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=9a68cd1c90a5748b2b9188223c931bed0c51b0ad90ac0d0abfaeb9ead2ebab0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=09fdb2724b898790298bb40fcf093d07b17bb7a5d26efbfa9337caea01549b86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=685f6150f0c65d2c7a52d4399f81bc552389a06e6488d52e439f2fb1fa90dc8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=ce326d9dba7e4424ca9d18d670a0f13dfa919a110696bb7e99343110c39c59c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=62646fed9ae166cba73c2f364dc52987a72e8a20ce614154114deba4780ad9a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEPP4JE5%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T121019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIHwpamev%2F6%2Bqb9zXJ1dCy3ACij%2BTB95NeZN8Ywh%2BG5apAiEAiL1gTRQEC6%2Fz1%2BPYEKEfAC5EqgFOITl5pF1CsulACeMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDOYjI0xbMEw2xINyOyrcA8vG6D%2FjcAAhm0o4MfWaeZLeLmv8rgLvTzvE1%2Bn2pZBHNtEF0Df6UubSF6b0ld66B7mNg%2F4KNgisDZ6gPs7y%2FrYjv5d9CHaXtAGcuQizvNtr3Ayg0Za29l9CjgQO7kITMTJV2YcbSM%2Fy29moGL82GdgqrnSYd9khVXcD1%2BTxIBjL7fvDoeZk3VoDVakm7D6%2FE7l%2FaIty1bsGzSPbiJLjR%2BCQeJz4%2FpAlclzEnnyW%2FJW5SpOPeQlVtQSMaZJk3o8uLQMZABqAjZ%2Bcu6oZRCULrSUrL0r0tcJbAZCc3wHe2WL7OMb28hIBX2YXTdChcEdTOQj2kMEPfUVvIEmTJClHZNyoxuTRMomOL6ZjNEhHxdPOyD0P8hK1pmwvdwhEhYNo0Bqoaqt%2FSSGwxz0KXz9FszNUpSajPh1uYtQhecx8LZpYXkQszuzI39EEY4p89bKrQjMJLItOpXu0fVtJEty82qTYBm%2FyQYxPB0R%2BNsVCNEG6rwWsAJjVIYllbCZVIUhsoKzoWIH5A%2F%2BMpjteictMKflCyzWCDnAsMv8LqQEp5hldXvxz4NlED%2BVsPVpcP8i8EJSoPAuagPUbSJrfnxGPB8XADMU3hHK%2B8HeYQwL9lyQDFSUCtH1nT5EyTRQRMPHrtL4GOqUBHCbOovq39EMKxHeUxEos8LuyD9Jg%2FlfFwFLodFFf4OnsGAXI5IKG0yetkwultztR5zPOkuZ3sMwBpmZIo8Coc%2B4I2t7hJRh3gqF0U527ndcYfzLz5yJPG9eU6LCirOgwsIixV6uGE8fjsYTnATBEGqY2g6wmf6cvwOb5h7x6OZAGcfSGyOxeAOwpFcnHLpm9Zbdg0zFxdQXYv%2BPj5gTeqsow%2FpM7&X-Amz-Signature=ee34ad93e81efb2fe9a6e018bb421312608f5f280f86eae7d33eb1b2d61977d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
