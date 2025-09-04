---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=c859fe108d8c591e64f95e07720affaa7bc1204dd5fff98c7e3e2b91b1edd0cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=f53a4faf95a18cd6d1859d7569727c250f1be87a4543d1f8f1590beff8c470b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=a8b11e6ddddd33206622f09ce197e3ba7483e5fef7e4a793c378f159e22cba49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=cc44897659114d6bde160524898372162ee8c4f33f4860f7e6b08f3fe975e001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=216dc171ae2384500648cfd28f5e06711c8ae620570ce591b52c28e4faeda029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=7bea9b4fcdd86c6826fa7c06b579ffdcc44c406d505f40840aade707fb255a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=b5734820b5d19f2c3d5d6ae5a66aad93b58a3460acecf1eb33f0a62c4ec52fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UM3SSX2%2F20250904%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250904T012155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4t31wckijDPWjFwbbRQ%2F93OOZ6xSMsxmUpp02SLPZngIhAP2amWnN4t6Of%2BI733%2FqYn98CgwJsapOXyUKQ6fs5qWoKv8DCFEQABoMNjM3NDIzMTgzODA1IgzU%2B0wNQyFq1l6yeF8q3AOoQhcAdD2e8lJFBYHIP6BmiH3atFbiLW3Ncll5a6P6GwLKdoC8u0yNqoPmuT94yUX7PpzIcN%2FrJJdwxOykLGwXMiKNX3a1JdIp780DyOy%2BX0UYMIdk5vHKAkju4HnEuv6KWCnQobOx%2FOFneumK5lth2Shk4Nl7RxXnVcS5v7b1avxjcrVFwuE98kjmvppRX0jRc9U9z6O9TH%2B8TLW7hEGWMS1FSmt5936Eok68XE4KC3tbnAvRH9kXxcuxY%2BKRT4%2Fq5llSfhArM7hNKxTWr6z5Ixgjj4F32lyeeZpZ%2B8VIHOdnHQg6D1uOUJZu8u3OtM1BkW405aAe%2BldjXmooYK%2BFCdxps5sx42HpZoNCEVE93DmZNSouPiOXpV7dB9bYsuXD05ywipEimbGbE0AFuTyt0qnbHFjmibeyE8TjYFgw2yQid9P5XPaAMjMHAh7DoQxv1otVrwRn92PVGCoJrVZYJdOP6eTY0fDmFgPLyzbFAdu0fvqOygmpoGcBsZbG1aKiSxUaOaGgxKaN2CKVqaiO5Oud5WxB1Xqe%2F6zL%2FPjA2t%2BaJOULOCAgqAkYxsThIS1xqHaWLJmHmM1DWiEE6vEWquag32DNan4LLWfSFed%2Bsw7J3XKv9N37%2Bcjm7DCptuPFBjqkAafpGhKNOjprPJzCQMgxu3ZvO21GDxq6hlh9lYbx8V%2Bkb2f9Lfj%2FaEIRjl6xviNIdZDFj%2FyC1Q9Anx4hJ2aIHpe8BYf8Qdt9iIc%2BoAHcaC0uP%2FqWzzrpRA%2FeOpLTTt1IfMeULmaThpj%2F2HUPrxFa%2FqEmHHv2E9e3JpaIbDt%2FNBZVNnuL%2F5x9Ly31g5uQUezZaAE4%2BTz9BFY8sZnAhSVuYt9IQRwl&X-Amz-Signature=72d7bba0e3fc2578dacd85ed6a12d1cea300b9c9e66c015289ada38b59b26173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
