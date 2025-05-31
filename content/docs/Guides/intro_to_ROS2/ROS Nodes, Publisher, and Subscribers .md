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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=15526e9bc8a766a005687bbb23d9d0ae675b88157501ea8c895639082bca7dc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=ca3a13bd1bd6741ef9262555607e7af03fe4d2186f90013d8bb6bcd5c7a506ea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=710a8a83260b5d92a35b9ed83deda7eb3e175f41ded3f5317d069cc2fd03980a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=c83428beea16d52cf56f67ad55e33050692218df1ef07c345db28c139c7fac01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=705fa86df10fc4292eeb17ad64a7cf110ae54125a60e3bd7f60bd37a40ac0831&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=d8b553712af32ded581d4e7c6f93507e9a35cd77256868605f4ce3b97d8430bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=de843d69d971c890404784e00397c1ff779d6c975833ee0ef8a120e6ca8cd358&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSX5KJ7C%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdpv89TAM4R09oDb99lYpH5MEKHmlNpcAgSPRHYLKAvAiEA3DYvSFQqxZKP53r%2FFf77UxY17p1gPlAKu6VtEQyaULUqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJObJY8GmUlXuMHpircA3824svxhOdCFJACLoCPdR7bl5AcmPXVfKtR%2BLE%2BWb6B48y%2B8bkOtl1iluATSyZQXGtfyKxelqgSpgO1d6q9GtP%2FebSa5shQbExqFaFBKtbuSTJxqlwQa7k1%2FAnGux6n6EhLvIR6Yc3UGRuE0CJwR1U7CX528ETJ5r0NthgJnQAF4JT19MRg85dJt8cjnK3DUgupjMQL%2FEEzNioZLTxmeyFjZ%2Fk%2FobuSCZFVESeSkAIIofwpFWuvAft2AxKjwzVso5be2sOlSLWhTp3PiJ2r25rN8FakuuzDPRgCZR5npRytb%2BfcqxmHThFFdM8uNjimOhYzEQYiPPhbT8CClt7%2BmTZSipGzG%2BS76jUF8zd1YfY%2BsfzR1zsiF2j5yPjlNb5G1mWuBtKaymdvbib1E8A%2BUcqZoYDAS0EzwcXGDyVIzrE8fyuJ9zTNqo5tsuAJ4dtNTzjhQ1D1EkGvVsNywnULOZH75TI7bWnargV4qtvSbA779eJHW8ByoJqCLM3kju75z8yqqE3zu020G69BY1CSP4%2BC0nbe1IEk%2FjHUifwLSl6FWnnOYvfQUZdwZjINeJVMRaDO4I9IWmoCy3D4rY9ZJsZqp%2BisLDU830y%2BHoUah7hPNy3fg6ygGKKBEExGMNmD68EGOqUBzijs%2BxwR67%2FljP4wv5X%2B9WkCJ9LUeYoMT8%2FLHp7e%2FvzCAEXu8aIlCFeTfLek29TtZVb6R5YIdF1a%2FTVy2BgoQtzYCjW2gsI0DARRox9uFEjv3R51aaYQUGLuJFpYTqMnysQaSD5DMb4PmNOpErC5Etby%2FRKY7l3k1uRXxVpyX1kKLNwx1CDrNFhDN3xk%2BbeidqSDPI4G6%2BaRPXrAku9FM%2BEKFsrY&X-Amz-Signature=3177b8c6e5cf3205d56db1e128a08da2e64b7dc138a0fe50f1cb81a11b0219e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
