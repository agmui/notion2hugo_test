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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=43af42299bbd608774cda6e48a6914934ae3de9fa33dd8676cef177e340dbb0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=f22d02dcd4db9b1da2ba85c301a2f0ed527f4000361111a1efea0553c507fd88&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=e099c6764880b907e9ebfea80b064e8256a41f5e2f68cc7acd767890d0231afa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=ec537fbd67d3922e01fa9407ea8bc0cda8523955ca4db7dab5302a055e155729&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=2e08b1da64e4e4cbcafd6e936fe234089e22697f7ae3a45f86d14f4068622163&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=0d85a30299144c247d8a4f553b6c563db4fec6c01afd4742ab0562d471ac7c29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=f8f459deeb943dcefda5b31badd8259299ef041e19f08aeb32281c0bd045f061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSI2BX%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcweS8RuPyW1d1t0Bm2FxK12y1Rv2HdkjVO5IQnN6q8QIhAM9zWuxSebHCFd%2FJpfr%2BTu94pw%2FVz6vNSd1Oe98qelwjKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXqNyZfV0fVcWZcqkq3AOChGig0EgNh%2Fa3%2BdaeVE2agULLEDXXjcr3CCCr7rs4V8LBD2%2FuyjddwN8fSSDV25JpmHl1JK7tkgqQns0iRpTaHo5eBIi6JhwPonHOWDDEuq%2BO84vCiqBna%2BM4UAi59mgbauRuxDtuaLPcSVtWu1PajKh%2F5iXy7nh2HdZ1GcOeF4L0FPptRxPz0cGY08n1kLuRD9jy6Xcoa%2BZbSVqjr0cmSQTzHMCilArepw%2FuczsjExKMZTJeoKU9J6%2FpQIk6QX%2B1bgOuxLyVfc3FCs2unIfeF8xolN6pylnqMKbyauiZVF33B%2BmiC8RnhOD7W554FVPRJsdlMXfh%2BTphmiJ2hi4TeZ3ZMh6DxFG4pd7UUQeXiKbhvzyAgBypK%2FX7mbvcqIVKqUYvRALDn1JbeUkpH17TtwLOiBRiqFfMct1lZgoskvzWDiNOdmswGQSNPI16NAyJ5QQ2I7VA0TKRmUZG916eh3XJ%2BV2NhfEfTce9%2Fq5WQMHtpqG1%2Bwj%2F7KcgGlEjg3xz%2F%2FcGIlYvci8d3dfItbJ3RQ6mXpa%2FlH9%2BT%2FDt9J2Aex2puruhUqnaYJQPksTiwlS4BtA3BvH9pw06pWs7j%2FWAuUI8NdqovUgcis6dFjOnvp7WkMQlcSkQ5TasWDCq0OS9BjqkAT8t41jeLdVNPo2y5n7YoRSmU2tZIlV165NZPFSpspC8eByub4c9tnDdBRP3oAuTE1HI8e2fedpLk3cIBt%2FLWwxaQfEjAF%2BLjSGVGbN4mhKhX9pc0DwwKq0jB8WyS9gkxuN6izKaBqtca0hUMmaWYKeKHo5E9kqFH3pj0U3Z7I4aBpj8UGKLG9ENEB2oAPqYalYgVMs8ubTkIO9MHPntntQJiD11&X-Amz-Signature=329cab646fd87156c65449ae84e5e33e5bc0c752bb41a44486c70a61dbd6a31b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
