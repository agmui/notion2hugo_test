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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=209dd2406e41a6d4c1ae6089eb566c2c8f7cdb2bc06dff496b22e3dbff357194&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=a7da38f80d625f8fb7fe717904b4f96784220ec3abaf15f208e4273787b41c91&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=7063143f31b59fa7ad1dba135b0b875832a6ff3703931a859a021c860c018595&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=a1d62ffcb1cd9d0fa121a703ae16602afd6698e3de5ebcbd17afff0876782539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=7d923c06f6e04dee955d355d55fc6979bd1d0ec1af49d2017cb57fa8a9626821&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=5481da17cbfab481133dbfc7225b3f5be83d65927506f3e3a42157a4e50697d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=771751e8ef889535756d60657286bc0d22bd43875374e8acbd9ba79ef3508510&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC54CMCF%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T121538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE3FqfiH2wfRNgohA5iwKZpHYW3QLQaE5XpnUG02gjlyAiAYjdg5j9lyNPM6GAbhByKJ34Py%2Fa3y9xLhFLLkHvczIiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVwgcTKsZz9%2FklwI0KtwDDqqcQxQC44ptx5XwAmw1GedB9g0j41i101bOwUbJEbqO1rlcd7YHLc36DpI5JbKFFIdX%2ByAL6we6CTIF0f%2FGnsvq0Njl7jub%2Bo8aMoGENFT1qg9NpM41phI3VnsvLOxikSg1lS65y8dQdtTxsUR1J6rqkYRWzJ97lIHuNUyNdV9v%2BV2tBGIccJb6VRhrwUnz5KJ6tb4oaiS8SYQ4L0ZzvgOPcFX7GerpNO7vBbZFxnsHG%2BwgL3gBT7KrfOS6oRTUEZKayWtQKtd2RqAjufM6MaaC57tO6WaD1%2FOU5lr3nd%2F452QzfAezEgrCf8j44dVsiygVSu1W3DZD4sYmt9CNcWf8oV3C8TiULYHu8ibT0GpT6tIRlHI%2BqdHWSlhOhyzfXhOZ%2BrYPfhTElNrz86tLZKNNlyhVx0jTh3Ax4eKRh0TrhnxY6ykNmZAcqpTyfIpMFEtUAjiou79ow7%2F%2BlC7VHFy4bt0wcgtjIjb%2FJqLlZeTN5IFJ1MDt8eFs5i7VOA7PZSqFy%2BMj58ikr5Wqi5GRydgxlshjO6OTavF0nokPaegJI8fDxE0Tkr0xF9icWS7UwBUg5rcPFYKvnTWplV8u6kw%2Fh4ANmCDlKR4IbS9kkzQLEnIL3MMhpgSGbnQw9Y7mwQY6pgHuJRe8x50FkuUV%2FSXCBCbooU5nWZg%2Bz%2Bv%2FjEEzLXFLjwZJch0tQZEarO9gDojP9wHoOyFc%2BgEPy4baLk5TIplSYw7Ri8tB3UJXDEZ4gI6TygdiayKKNH%2B%2FK2rbryEXAl8JXnM9ipNe7z7BRFJ432X5vDgUVQpIZHnQtTxhqmzdu4%2Bnm5BoF2b%2Bb0ETpeyyZ72drkfWbLU%2FamU%2FgYPcxtUuYzpHZXYS&X-Amz-Signature=978ada2d06d4272daf463be12a4ebd91d815e4fa8e6b2fd10b8858006fac82df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
