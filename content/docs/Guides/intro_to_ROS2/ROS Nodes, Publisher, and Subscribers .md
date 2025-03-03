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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=a03343bd1860e27432474a7e6a58a111bfc99cb21807df2826b65d76f73c2c54&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=358ccb3504b98952f23bed80462a15fb593d941a57496fca816eb69b592b91b0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=9cf47d4c26fc71c8b278c9a03034c3fff74172fd281534bbbcf9fd5ca6075a6a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=57ae2f92f4eaf7fb8639612d490b9c4483ed01ae7f3bce0bf299ea6e5a3c77f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=7b789a41d8f4057a3681d9cba60abe0b90ce00fff46571298d49c2139f22ca77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=3e20da590c2e54dd4ecadc2bf6c47b6dd2ab96f7457604d2e9806cff0480c316&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=c0f3c53c87b2b29210ccb59f96971b72d0977e15a0182be14992c2458e6c2d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHFHMWGK%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T110118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJFFZazMlljq8ZCDm9hA%2BIdnxvgJzz0YzaADX6J0C1KgIgXa4jqfTTe4YYyEcP%2FRYjiPQsIGNQj%2Fdw1dvCn%2B%2BH3iQqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPebDJksIlASTmmnyrcAzXg2Ovzl%2FcfFBYn8CosXxnoCJBCN%2FUR2JJA8YRaZoV1G7u3NX1cfELP5oOxdaexzgaXeeqVF82wHWyRcxyQx7OfOx0jV70ZJkrEtrXSwEDJ9PIy3uncWWMrEfk0x2A2FxuYYhI18YGehuvVpWf3DYkqQySwU0yMS2ADbhpGmOGrd5M1LlGIWd0mBTSz8ynLOxsWipnzQg0raIrVn%2FRTntF0OUBUPperXynmrC%2B379wBwmvtVLkg2%2BkMia%2FDrJxIYNHPoJFttgHrczu%2ByuQeXNIj%2FUoNco64GEWvewf7Sm6AlX6v%2BpMjVpN55NkcvMPV%2FvuqLdeJsAGqmbtd%2FhoCNtoNV%2BCfmNAbhoH6Y3bH1uVYSbtALFri1ggSm3Ftsjmdcf%2ByTeL7akzaBOdSFdgqXsEZRBoQKb7JnYWWuIRLOlxb2j1NL3TjJhF6EHi7RMeKNKwX0hM1EsW79TY3Ff7O4QT9UJRdX0K690HEJbvilOmQrp4KbIrOz6rtanMTFNDv2jyB%2BMZ5IbTds%2F1v0LZbMaw3qvEwiE%2BqHn3gO1ZBW3RX%2Bj%2FkYer1edOKNdEW7d8geKxKdqzhToG8oVcN9I2uk72kpAiDip316zJoCpyybXGsUAgG%2Bvxkc0%2Fx%2BdrdMKj9lb4GOqUBNk1W5Yj1fZ3SYJ80mcysi%2F9%2Fydac6thkfCrzjT5%2B%2F1Z%2FlBL1pOkzXei2z4owd5%2FvTCsa0NVkqRyOMhZ3yd%2FrWqSU5%2Bb2BnlU6kBw9YhUsSzB90FVMhONEHAftuedZ3Q2AHGqSJphovmUAdg%2B7hEeH351MM7VtZGRLntnEJ%2BGyfm9dX6mB0UGVvK1ytdNMFA6GL%2FbhDMUTwXisnLUwdfN1uCByYAf&X-Amz-Signature=123546b9abf3e1f323763f14d940d85734a689daec121d08a4ae736e10fe1351&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
