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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=6703fb3fb5b1c686197ee87e63ddde78a37ac5dc0a5ff89d59c258eda2bda20d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=03e879e164b963468367064054573451fc47a474337ab19c3e8014484877c848&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=2afbf450832e8b24c3e96bcaba4c219bec9e6812e602e936acb88675fdc0f75d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=cb0a8c109acefff12a7b5e42d2ba9a889a65f14564c5686d59cc1b0e50b18d77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=3ce5d982e7d2ce2166788011b4a2e8f6c8e24c04afc726ad4172a34bdf02cc7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=98efe734fa8733dd09160caab8dc1491358732fff2d0f3e812d2910d8a135eb7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=46379cc7b0803d38248e1b65fb6f5d93580bc34c3639e02ec1d6152146d26b08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666S7F7DU7%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T071020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQCXMD0y7F6jwuGwN2S3DZ2bpsjkwRL0wRoFo3taP1%2FVJgIhANPb4l2WINNlp%2BmvRoWEqvCy4huEej5IEKaIVZI%2BAGyTKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx6eBrDFjw12HQIlnIq3APFoVV68s%2BGy4fVB1mBQXdIaXOvYeanKprDiB%2FUQ%2F5wtGxL9onEBxXlmmOxPZcCNO%2FkoGXny5TTFRyM6xphvZvh4sqXbmws5V7W4YdWPlQe1RqpODZqyFKlEnMtmICzceujQ2D0VBvLMBRY3pD0szM%2Fcu9cRDV3TfPPuOwPVk0LlbrWroc7KT5h%2FHErmX4ovquoHUBhC8RY7QkxDGXtFf8Z8p5d0k0cFAOQAVIOnT%2BU%2BkDeYZ6YyOUzsGomzAblRh6wUC%2FUPUk2xN%2FlRwAWDC6ADMH3ejJZ3QKkxq9AUd78WBTYgIt%2BqiccOMIqkHlI1MlpPahCZGfCqHmaI1o2nbXdjAcAGJhXiEkMEX9VpCzpd%2B0%2F%2BIQjGIALZgMrFHyUmYnhFmieJCOsS%2BB0cqdRL9NLKhIRvoDjOgOIIN92uMC9R13qZm3rATmrFZ2hFdV2phELSHmP34gFPF6ZJD6VRHXRK%2BMQm1Toc79sjltNGZiT5Lelt8TplXnFti7TKMRfcfZoJjnHaekRNLbDGQtoycapNAxe0TWU0LpzGfSOU6z5OMEqqYpUb8JIajW10ctxZevFTN8dQQaXxTGI%2Fejp0vFUCfedbdwXhJmMFyKGWwbmuzqqzp6C0vlAf%2BHsATCMoobBBjqkAUU2assIMDrukQHp8NSD68NfOteaCBz2Bsh%2FLIB1W6GgiTd3P1n0X4VtQEPslnbqoJi1GFx4Jn%2F6v6fFmVJz96vsokEleZ2%2BPhR4BFVoIAlc3mosVnkZ%2BGu70y%2FSx6t7eBfknwidC5LqCwcL1mhHsIfauTqqv5blq0vKBrDugbMhihwiJRLdVdGBAGCecT8AHmSOgTbYxL8Wgfmg454jCN7KsvUd&X-Amz-Signature=56bf771f43cce04429b2eafe1e589a56fee5055639606b2b25507df673de13cb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
