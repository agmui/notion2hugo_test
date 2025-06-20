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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=5379f81fa63a0880be0ec55788cbfb49ec36a2910a5bfb703ea22284856d0d3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=f8283d63dd5bbcb48075f97b1c143146c1e21977db140f7023f12dddebe08527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=27275057099f81c6afb4f314dfffa75b1600957a2d4cb9f4f24e2b23e7d24f76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=71e5f5fdbddbfe1eea0c8e671f575853b28b259b2d8830349fa3d5839ade6374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=658c67be16c3fca6d5a3ae4011aa7b88e83c57736d77b9945f677500419f194e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=4cc7719f8ef773a915491f409a4d40f0cbbfc0b70e17ab61f5f6b672ce040206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=fe6c2904453a606cc7f27808e2626088c4a9f0aca5500aebea27da1babc01ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMVIOWQV%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T041634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy8HQ7Tz9CRrG7vHUxsbBWy8YARWrlmaJueV8YlXob8AIgIJ6m04wmqBiVD%2BbIIr6DJ6xAh5TjeSoGU6kYOHPss5UqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH5QfIFII%2BP3QVElbCrcA57uomJcRNtHkmW%2BM0HA2PGu1070o8R6BqN5iECmG%2BpFGBndIwyCN%2FMMhM0JZrK7o83vDdlCrPRA9cHD3QkrcU8iyS7gADojK3LNYIfMNfzedOO%2BDvmztHgDje5wOB1pHSdV3JZPB8UPDoESpyGQr7PyI%2FPh1K4wc4wmKIlxsr9D2tr8wglLDpoXTE%2FTaWdAr3XXxzNYTczwHLGLKpV2Xa3PxfONQHkNW9Na3X%2FYNT1V74RaQUKIJScut6xJ4BDBjM9QA9NrKfkZm3E6Vf74jb9gFceqcAgOHbS1E6IvNfVL%2B0U7OWmh3Xj8KeM0OEqahl0gTV%2BsEkEEJ%2Fu31QB%2BGFY5%2Fjv2FA4yke4xzqXDGgkUOzMYdVEndMzYZSlTSMA8H6bp6FrkFC6MVsKIwJ8VeRimCQxkePsmNgyp7cg2MVh%2F7h1Q3CV%2F%2BTDeFp0lnzsOlvKKZZOykAI%2FbmSFGg1prhu7hU61zr3%2FykvKg9oAVVWewoE3VKtVvNSvU0t1QaUAOrIxSo3vNUyJZBwxVz6Y6N%2B4YcWZtUpTfzqf7ZJlfbLr%2BQueALax3Z40J%2B9zyskh6lbXVSG7OUOHHqZSke2SyCab0yhpH8mAF4Mirc%2F8mU8G5oMKkPq48j1Y8x4kMOy908IGOqUBUMG%2BcMvYQOIUxpRdM5yl%2BSoprGBFfcbCF4R%2FJsR3w9JVKUL2oL7CkzPaTgVMchfqeuEwjs5uxKBqDNOTZGDgq1WW3GEQxz8RIxuOqGD%2FN1%2FzA7SSvV5nqY73JpDCtHu7PEHoYfZvRKKjfaK6mBxmWeJjtRiaQQCNUc2EsJp7kThY0HA5qoMJBiOlG1b3O6hx5YxRD1cUKmeM%2FLpCjUM%2BEjrYz1rK&X-Amz-Signature=96d5ea7273917da24b5a95e684d70a4383bfe3e971474631e101d80c9142f57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
