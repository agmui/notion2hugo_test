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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=801aae90d93d30c024703edbee7f8bde784fbc62fcae3503e8144fbc7c665dc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=7e7f6ad7eb8442045f55c7f66e5b615cb10cba6b8bb47c6896086ffba5950824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=cbdcbb0130deb56ee75501ae8d6f8004aeaa455736c5fbbea9c53219e61a5395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=6be2b0bf73ef97c44b18a48b815993a8b9480d60ae37a2f31b2dbd1a955c06af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=ed2086b39055bc244db3bcc7eb1376f000519f5950c2fdcfb4231b2e8057427c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=ffe1cd2896750e8e3d0a6dc8598731327bc2def517dceb1d78006bb0ffac3d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=4cd2f359cef343846897210470de590e47c94d643cbd60ee4594888ec64d0973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQV6SIQN%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJGMEQCICZTE9BEm6nekkMoO1eHx%2Fcm4NUNK10mlZQBT4%2B9XlQGAiBjhgbnABShdSkKlHtvmaD15E8qpEgFYCcZFuM7HMWceyr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMM%2FpOfureSXFYmnzfKtwD%2BSLEQx%2BAdRx%2BXxXzHDFQpLGt63VJ77Ha29ridZ%2BA%2B6W0jWGfAJqTayY77D8Be3qnkuKIBRWK1Rjaaijjs6IXUYpOPQ0xrOAbJIgn0ZY1D4xgUeQYnK6dPRGZ8GO4DsaGjDjOfHUjzkjwJnY6LxX%2BAmkbKqnY0vIc9QPAN5xtdWi2k9ElD2HTojaAhkEmQDPqOu2kuHlPEtTtylZ6cNvtzG8Lbu8gYJKg8JYGcs6EnpC5VCNl7svO4gD7VE77wc8D1Z324HXLGuagZh2kWjX66rcCVjefLrRzF%2B5sGUinjxpsqSAr6LJLy27N%2BVPaVovmYlxk30T%2BYiPZI8XLfGOgQY5W8XGDGsTlp90ICE8NNQVOUZNERb99r%2FZG023QLuyBWhrzRQX7mkFnngc1cCXKm4V8MzwVmPWqE9g9JMgDaIEH%2BYbWvNWBjfAtSvkd1EfLQOCW4l7NKPFEnDLveVgEiZ9%2BsG5sxqmRgx0w4%2F%2B7JGBG9Yb9ouBhLeA2KM2WPzIc0BV2NpLmYwWiQY2cq2jdVHf%2BDI5Gmo8GcxTMgeFRmH%2BTgwX%2Bn5fa6DyEX3VOxa3nM1rTmA940gEmNTmOd4LMpBVCdgLqil%2BnDr0NjbEZEa58GaZM9XzmftT%2FoQUwitiKxAY6pgFFH63rr2DF8Bj8l%2FZP9rxrEQlZq3AhdNuLKvrIkmcO6UyOanUNLPPrNHlP2t80ZS%2BVIYuGPwDIMbx0Nz37vbtdUkcV6A1RCMJntqAVMk2KOAJ7WJ%2Bh3naF5UwHIvs4KfU4pP01pocV1ZaO8OpNAX2iOEDw5%2FGKkPDl2%2FrhcBDXv3LXwo304ocKUGpxKHst6orMjR5C%2FwYC%2Fs213K7cbv%2FQwaRXr%2BX%2F&X-Amz-Signature=6a0f6c68623d1277b259fa108b1186b1d048f588bc4c25a65e3f06487a72aea7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
