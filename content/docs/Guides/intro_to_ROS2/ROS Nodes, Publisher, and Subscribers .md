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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=e22b05c09ffb7eb087b70e85f6829f2ff75c8fe0d4f9ba9ff6fad36e833e93d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=d66dbe3ffcae77086826fa28ebe4556c1589ee9394a118ec9238f3a48aa7839a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=f8dea1e29107220a3be2eeb5e578d58b1b31b5c1b7b7dff80dbcc638eaab28eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=bad6f72f8387b3a018eb436c5950446924676259aaddf0ddf2f23d2956b970fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=889d6a23cd175cb1b424dd17a5e2fd31d9628fdd545116ade9a0506e02aa552b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=ce770b86c697c50b7b88f653d291fcacb2a83c0e8fcdebbd0edc8d0393e2a99a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=e628b94041b2a5e9697097a9ed209015ec9d9d908dd1093bebfea72232669555&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQI6IPFT%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T160922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL9auT75Q1TD5cNMp0mk5zlbOSmkZ5sIGZKXy9XKZ78AiBlesosd4PZd0q88d96jGiDoI7CYvLzjeG59Tj2TYI2NyqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMudYc%2Bl3SRTRd6xuWKtwDzfSxdwgzD6r2IRaCaYRSdIzXIUghN4laInDWuQXkNYiPlh2jfLBmUy%2FPknYABA%2F9i%2FJegjPJfqNiT45FlkanAzLsyAkJT5sXsO7rzzIJi7Y%2FXu5jmEA9dCT4S4NNgTEZSZdwE8PonsDEjZ3cTM8U2FnkQ%2FT%2BZTNQgVzDHgJQmrkdY2ps8K0O35uf6cgUJHLbDV6rUp25dco2pf5ACa2dvKYWiUROx0pPOou56NkAw0GLeCBaIFRjPN2veEUgNgtC0IL8lewC8pkPdMA%2Fl6ewzHTxiVeIcRkSBB9dbXZKVXWunliY%2Fzr8XXrv1F9GEpTi57un0O4SK2Tz2MAIyCZ7mPpSfwPwoCQefhDVb%2B9l2VPqYqHwLfRp%2B2iYkNHCO6vmY0sYbcSRF%2FddlSVrQkwHCun4kC%2BScD0rqnQIXIwxX6NQXDrPPQHgLNhCABluv%2BGiTNlWmBwcJrLK8FJHwMa9IuF2uJ6gpR%2Frzjldkl6ZrbpQpWrmWA5gClpBor6FJw1dygYxnLObZbBBZjrG9ZsEEf5zl4KuO0VbMMCE3DHOVbGd0adO13keU%2BtSdOf5eZriPEseOixUJ1UX2Z3Hcj%2FmshLKOLxdzAzALr16gIsPrntP2EnDgYWLBOCiJ7MwzLGyvQY6pgHqyYWHfw6bBl4qL8YlkZBwfsvbWbuCKvKqq6SmRzEKIXrhMqLmiMIMEgzlFLdpi5scMXO%2Fhm9Xq4%2B9oZFGrDL1GHQfQ4GdaEf2UGD9qPx2AzhZceLsxW3CMChpamH0HTbb%2F0MJhCeIIm2RDaK2ctmVQV2PidJ542KPklQC%2FNK0gIWiTLDkODaNaGIzcHDbefpVfD4Rro2rY7VaUoOKFm94cbR0tdNC&X-Amz-Signature=21eff8b422e521457c3f22f344b44b32a9803aeb4b7a6427f388e1ce639974df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
