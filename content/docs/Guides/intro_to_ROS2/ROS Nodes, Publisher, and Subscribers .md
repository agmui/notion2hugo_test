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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=79750b8f9d77b421bbb730b543e6a7ded6ef6b521f2bccf1bdb13af4ce26dbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=974a86d9a634b6defb25df29e4ff53be2a151562f84462fc2b398420eb10f8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=fe7a816b46d6a6e7888ae016a4b65d59aad67e1848e21acf22aa368fb3a857d9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=4b318377de1ca29dcfd966084d6f34c378749f061a2e8c1a5e5a47f7d2351d40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=4ba8fe759ac6318234e1293643ab058688d54bfabee0953ff7de968e8b28d747&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=5d816bac4771034d90fa186e023080caa8a31ff74b6f6b7176a92ace9c984ebe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=4eeab4d8864db974ef40e2a75a61a21ebb90f643fc6a3c0c671e1807963a4a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNICWCMW%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDnl%2Fu2rTj436VFcPg%2F41M9dkGU3bAzPfU6EYi0T88yJAIgZrCHNDDhWqhc1DR1mE9lZkjDtckd35bxF5WbFqRloWQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHnMh47Htr3X1RImXSrcA6Dymobg8Q33gotAiDdIfXNZ1LsGxp1Ml2XrFBvkyn0LyfeTcaTCr4Uydg4VM83bUXxQY2xvIA8jJXpxX8M720Jwch8a9MhjDi2VyqO%2FSy2H0c%2F1OQ2PIy1gjy9l3%2B3gHkPIE6%2B%2FU0QyB5XkH1iR5FPViQpJ7ZxmpvbobDKreImBjWxEuy9U62UUlZYJ9Uu9jMfqLVpLENt3VAYrLo%2FlJyhbzvGMZAt0qzVyRABPRoJTwsAygEJ1mcfYYjaRyLdGBNf7C6UMxh4fRUQUuSUbHBwQi2pBHwoN6y8GCAWzwhYhWPbc3FqUKKwpsj2xEffj%2BzlAWvaDfPUqOe2X7AXKOa4%2FrN2K8X8h1l1u8JNu135xIAJUdNjsd%2FCKGpIXCANEDZVwNf4iyoEMYKFBy6xQqYBNdJ3Wj998At1bGu4hSI%2BwguM89B97YT%2FxWcoaFgqxhd1t4eF8Kq7pQ87jWsonoL0WzCRjHZCsM%2FaOxbKmrKGlouJaegv%2FaAM4WnB%2Bmo4Fdeli9gghuMlDc0MADBu0hJV5yRJ0fBeqHh%2B%2Bj%2Fgtnk3rho7%2BfdtTM4lcpNkAdH3fLeLcMXJzeuN%2Ftl%2FEV96LpR8JhqPhVSfP8A%2BrEhNDe3u8bWTPGZNX2V6fGV8DMP2TosAGOqUBPfaGkmcgX85T3TDFsOddklvDNDRX7BLlQrKBx6x7oCvWKY23WjtY%2BkoEzDuLf90pJy%2BvCWfIvk%2BZo91b61Q2lzCnq%2BX%2FzM%2FDNSLxdZygRfdQLugKrIUvD6i1mZi1GwPTSnBR1Rui1ZD%2FskUZ1GDmsJQ7VBnJKHeY0L6fVAz4ea5GmW5qGefdniRXvhN4Uf0Ctq0xk96nFNeLT7aWhQtXhu5vBvDF&X-Amz-Signature=9ebe58abbe733ec2b99ec50dbc038121d28643de6d835e2f73de0052f03bef4c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
