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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=fa03599092b67787b1c64ae8a0d1327f441b6517c6738158587f142c7b5ebf49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=3ef59158ceb48631366259b5a5dcd88d47636357b90a114cc6fa0ca782185f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=c2aab64976a32ae26cdec503ea63876660362f48e4ee20106feb164cecce053e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=d36e8053b2ca3d51f5b58f376dd0e7a07e3a4ef786500419635fe2e0e92a5d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=1e6f5cff823ab5ca787da268f1e7b744ec5f323bce7c6706add6d8681335b8ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=6a2ec93144170968bd027da1f270d8860e5d94658a49b1e0990554005ba8b2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=6909cd52089a784443df369d309ea59874063e46198d982040789d3229bdfec2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXOQDI5B%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDszex9IDHlDtCzci6H1BK%2FW1SOlV1YGIllshvzLSb%2FFQIgMKxnFKFRMyn5etOq2YLhKJ2erNTJ2EJqXW0mW5QUVUUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDS1nBWDxhqlOSGBtSrcAyRZFx3Tn2oSnLSqmciB4DDJsXGWnRJeJZ261V4jKYkjYAi7jBqAbtWeU8W1F34Z4o%2BUIfH6yD0v9G%2FGfKMyjiwLC8%2Bq%2BYJAWCiFdclPrqBgEtUAUFIrC6npqm6ws5%2BG06GAcX2gm3Pi3QOj4HupglCSL%2Bp4r88X7pZBlZeDs3IguPYxT2OVQhN%2F0BK3rzgahNu66mmAa41I9XgVT1KQHeJCLySVBvhraknSrhp2qsQim8qlXJsQcvQeT24PqWCkSxF%2Fnmy27gb4M7u5ouwL4zbt5tGTXj6JeljRij%2BBMmCE0ojrqyV1YGtAFOfixE6tpk13SPmjjobvgo0jC0vmPWeSKA%2BQVPbThUtWAhRZvvovkOIj1UvBWd1dXOLgCeNt7dYcGU%2FlGghJoCyaTmf8MO3WvQQya9AR1yMQMZm7HIahXAO%2FCXxIi0UPbB0EgnNdZrCv0%2FCMzs4kfg1%2FQYjp97gOGtsuOp1bUrI5UZ562enzattAqHBO%2BNu0RdVSmvauFuUaJvqYH5U6Kteh33Nx6x8iVkR6WHOQd8H9NMikzPCKelE%2BMEbko59crjTY%2Fo3pxAsQN83ItJjh86L8AZuuB%2FHDErcjofcdP3vwgWEszWaMF4KrTgYaYO3BNObOMITNwMMGOqUBVzIYKQm8XRSjes0BXZUzeoM%2BVsTEgOJCfEyi8FU48cmBn4eFvmdIUhcS7DC7QvEqNo3CZ340r%2BeMLq887NKkrJhEZ76Fl7RHzYxZKc8sCrag8aWrbgfmKFXjV2egf45oI99zZ5lGn1SgDoM21yzJe9EH59hkBrKkfEmBbipD66UqmrqF7DkT8bc0dlXuolHEQaoGPrS25WWaoc0%2B7d7YhYzAFp8R&X-Amz-Signature=0ea61f6d111fc7ba123a6d7758eb1e3849e573202846915d1509daee8efde175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
