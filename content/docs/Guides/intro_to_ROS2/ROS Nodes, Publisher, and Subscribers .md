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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=c503ae43969883d72ed805fba04f679c2e01afdd7fb3b1e16c42af2b5f43753e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=f3579c8d23c977d7bad6147ba05988ca59c37e5dd57da0a37d317fb4590852d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=db4e01907232e992871bb2ae61ba3b73857e49cd643a92233fc3adb334e9a829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=6804769dfb3c418405d48454daa1f1987ae815fcacffaf13e023014dc0b73244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=d77a96eb581e37a90256c951e21ddcde1d9a3e460b2609b95e2a1be8dfdfd7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=d82cefb70b32e6fd44f54ad5a10af8354afe10c2b23512e9968f02ce13844ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=29cf7a71397ab57e76b2d8b422b5e9c03038e40822ced0839682edc2c965a0aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466222VPF2Y%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T132415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIG6LSFbE0jZsaxJOuhJSwYdT9emOW%2Bbwmjo8TpGqUf6OAiBsHrZzezlQ3%2FaX%2FCvVZ%2ByJsySk4Y%2BmNJQS%2BjOdlQojkSr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMCXFF52gZiWZ85TkNKtwDDZv1sIyR0yW0p63%2Fph%2FdbiMbrT3qMnOQ6epVI2eOCAnvxplmUbqWmkF2%2FXhmGQIvGPkRcjwy05UrmANipEvDQtcytkpiPIm%2B4RZurn6SJc1MagY%2BUrBQ7r1c6TiHhIIATz4MqPUWfB1zhL51Sxw6SaDuCR991nJO%2FSIMCq9yJg81Rd%2FSBXMvksXZ10eCvYvFEPIiksaIebqVNO7dQ38KnaKiCn1t8x8qzpBihrK6DtDGyGPCCqAP0ZESvSHlIsBLjXCHwdRGrMaj0%2Fch1fcW6cqolnYI%2Bn5OhwcKmWBPTezADyE9aHpHgFcTUrc5XxlGY9upoU943iei2EJfZ7phGoJ%2F458p1KHDcz7nM13JDOtWzW8GPKED57QTz7Nqn16IVEhv3E8WcBvFqQSmyLK79V49jQV9V%2B%2FfXkKV%2BPahucKLRNV0MJLlL1rJY%2F3GJYGBmmV%2B0wTfY4YVKgPHhG6XCIcmHwsldSt9InB2gHFLW8pH9%2Bx9JamCw411qLVOdFY5W4yAZCjwJ0q6kQ%2BIUnLBugjhD0CTlK2UDigVLDSCXk016L2QKc6d5AQYfMYM8HOBX6QJM6yJZTELQyU6M%2BM%2BfRI1TkBHSKLfVr4ZEhQdSYs42%2BvZol4dc6Loip8w5KmwwgY6pgHbGrnarllRXwsC45Ft8aMY22nBE8XlPLZVgWg0%2BRduTmPmB4o646O9wSWYjimMLcM7oVZqXptv%2BiF7%2B1%2BatlMRMjSf1TrkJmQegQ1sagn%2FtocjKlgo6CqphMe6H9YrC0ayliPcYvUN9j1l6j2ITBRCepfbR74w4%2F39Fhg9UgLyjznGUI7iW3QxpSJqAh6xrkiMhdB%2FZGvtD%2BulxD5uS0pQU%2FdVO%2FC4&X-Amz-Signature=de340b7b333b160784c845bd5a942421ec783be18bd5d54a4b9c3a6f28adab23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
