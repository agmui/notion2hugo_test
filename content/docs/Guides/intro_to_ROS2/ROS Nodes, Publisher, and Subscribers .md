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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=211f4d3df4b2735c2eac973ba66ebcc34698e88fe041bb198ca2311294b0e503&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=6f8877fbf9a41294239c2be5c0b58f95182aa244e158557cbff025c4b61a52e3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=bc84fcdeca69b199b72c9c4a3358aedc8c769cdb6a770349b9a9ff3cac566855&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=9179dd2322b88108619979a744c7a92e7dab71de269d4235bdf35fc8e335848d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=871f547640c2871a408d7a977bd32b9c4d8492cd6512debcdb667dbc5b375580&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=059978d5e7e206d130ad6fa7c80bb03e4b4fd2128f3bd40fc79b96a6bf1b9c7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=62d305aee6d902f739eddacc018a759fbf563e35a93d2147984fef4be9f8c967&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOSP5OM5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIDxWQlnMEfqJiqx4yuXLKHzCa9bE1dBgdwPlHRDXNVvxAiAxE%2FFO%2FJgnWvedeP2nCZnL6mcKXgwq8DJI7oTm6ISfQyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMi%2B4EVnrFQ%2FCD95xhKtwDijvEADzg59SBQZZYyia8eHqi6tYUocCvr%2BWrZiTkejzLRLrtxvx91wwx8yhV0uYmz%2BylTsFzwyEvxkekiXRjrWzHwvglwrPJV7ZSMG%2FjBun0IhJkJ0ginkATk3zAwFMQ9R3BV3tUI0eqZmIuSzLEy7i1WxdF%2FFtu4GlthPm2ayoE5DrPx1zQrAqhr9zmWbvGP0ZZ3CtnDTeqBbqo%2Bd94TkylQjODezCkpsyftekCuPs%2BnPwJlV0XOMA%2F0z4WcYbJqtxCuOf8I9g%2FPdCAaZeyZjXimCCTflkiVbH5PSgjpdO5A940XIGA%2BVL49q6ZLhj6x8jDZIpw9vWkIYDA1HFigWZdQYLlEA983Sr7YwSoszf9KOlVDFdJJwywgSKAqbAaixXy6vjyj69aCcxhcgONhkMY0r59eIKmpjnDW7GNoP0VLVjVHdu043u4ARre4SiBYtl4YwkMZiHsRQfq54sHBBfnldf8W42YOaTyJwSZmRTh8Ezykk8zMY84XA4wgpVVUQRDxdacGzOYaQs%2Fj3lGD%2Bu5vnyy4wml0OXVHL8EAM%2B1X77HQCy1O%2FORYy8AQC7xYFtWlgQr%2FqiPsa05GHJTPOzk4iTxi1lgK9a5hgWGDJl%2FXh9GvYrTT1o5U9Yw5qrRwQY6pgG9oDLZS6VSu7qTddi9mUrESaxCZF4WlnUE79MJb9Z3vASTYaHPTLUdJT9p3vRNT1lJKE54jfI%2BvxM%2BX05hxn5lj8TovcwDZKXiZMA6NpLM1oCacDg9u3H6O3w4MCsGg6cbOXFVEsat2aAf5PIhUCRN5GeZEaCv91z7UelBPZEalttrzbl1LpPwx0cT27RqhaT3Z8Eeh%2BTKBHmx3fcRzztSFWe4li22&X-Amz-Signature=b53c578bcf912da340ee87564f1f64fb7c71baca46332d4155f578e51df714c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
