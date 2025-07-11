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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=b46de8c572927063a84cfdf287fb330c984b4fba4a55fc297d257ad21a78d0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=9b27a8ad74565b186302194d0d36595997fdbc2b855602967c0b35ac0d591b53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=34264e31b6a6ddc48d594fb54ff87c03be4e75dd806c0277536be6af3783f3e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=baf9c238066ef09daace87222ce1c203a1e3c3a5929312806b59f1f3330f6373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=2fb199de4ba393ba1836b6a3219d2e06655c93ee322d8701909e60f72ae451ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=fb66bffc67ae833446f81b44e475ae9ef57e74b71d2d31f67898ae752629ccb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=4394c67e698e5cc2ac91cb067fb470b2d262e367aaaa53143089c021b53824e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L55CHWM%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7G1egPm1Xur3PL4RIWfTuzwkgbYCBeuoI1tXLQ75PAiBAoqfu%2BpJmQh%2FJ4HcngZTFlhjISBVUfTiAhz7Hb0XWUiqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpawm5I1469fBbS6KKtwDk9o9Z1UTvteJvpcAOXLagMQ7TaMYpLZH%2FcIf%2BMKUa0Bl9c6dOg1AifjGxo1G0mGz0rQhpdmwiGpnCDqRNkh5fiF22vJlOFWElOkMoqnNtBNXtAAIu1gS9wPI9fgerPYDMj1nzeizpQ9LIYGjzlSuBfgcFCh8Gb5s9yPiFVW6KMqRZindWlYBn92NFMaf7aGsnFK0WuuQm7%2FyIqGN81Qq4IJUg26j1%2FbuW5vqVeonkQdxYbzmgFgVZl4thmcviqV0Xy1P%2Bv%2BT74gQZsDrF4P87NbzvqQ3DpXbbRqsSkBRBeQsM6nvEljYPfUe108bz6Qe27IlUQAU%2Fw9qrFYPhGbk7XeRjchlWEDq2ka9mofm4fk9wV0N7oezNG8TDJpaAzx%2F6GBtwC5%2FIWDCTZ%2BIKvPmIDkb1fLjTa0mLpggIAtRkqDc6ZsKAB%2BwEQy5Yknxi5wHPrjqKl4x2RYAPPJ1Iq6VIAZaiBqP9VaW4xH%2Finhg0W%2B8vob7Ofzr9Ge6SEO8MxpjMxyfZDb2UBz%2Fc%2BfyK3HtGWEnee9m4ipikKd09oQrI3pFS8t%2BrE7eI2T%2BC7aBeQyAQscWMjz0QNyotbngXhPbwN72%2BLDlVdQGaxw0ZMIKE%2B%2BY6SFjNIunFc186y0wtanEwwY6pgFYuR9G5b2G2LkBe%2Bq1a0kdTFA9vM8qjymZmKyFjhp5lMATygvQjZ%2BaGsU%2Fryn7Vq30bhJx9%2FW4gtBu6BMcnRdGDG8wQfUtHHB9%2BWZ4Xm6qJhHRdCdI7WJxy%2Fu7%2FIPZrC3t6NpKFEQl6Oar1ceB5QJYmqq5ctnevLycbrG0ys0Ui%2BZmGeByw%2FDdsL8xkEFijN%2BqdaGdt%2BM3yLSqa%2BSosyHQUpxGjpNi&X-Amz-Signature=f13ab3af6bcd57daf89554f68aad639f0cab938c418fc220e4af5335536e6818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
