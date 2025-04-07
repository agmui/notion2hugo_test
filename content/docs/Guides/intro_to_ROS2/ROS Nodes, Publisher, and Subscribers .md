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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=d8368a5f015549f3468a9ca43841cfd0e4f85fa1074ff00bf4639bd236e27a39&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=ee970726c6dffde75af5b7e2d1e50d91cfdc6cbc780cdf43b8ed98e71a067b16&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=cfb06823c660fbcdb9f558c49a2e246bac78fe3887eaeafb045cfb66164f9c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=25c590d4fc820c32c553cd6275c8ad7a6f75ac8698021712899fa3d37df7d89b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=94b3bad9c722ee35c4bace22352b1752e503d9266321afeb82db4ac9a460f00b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=7651c3f1cc2c2f0ff8a9006d90ba8f2b57932069cf701d89fff10ebf508aa494&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=2810661a61e8f5e2a5a054ecdede926f4b880b7f42a7bc53ddf1bca06c766ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOLJBUJ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T090946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgF5A5YrTcGB6hAm04GWvACQpc4vn0QT%2BTK5esiM8xhQIhAJRF7LpjCRkJpjR2vzYrfgA9229JC5AKtu%2BQ8keOcx0OKv8DCFoQABoMNjM3NDIzMTgzODA1Igxsly7Cfwtirr7hdIkq3APkX31yLQ5pxl8NPQE6lar7%2Bo78Xk1Rwf9yc9UiOb5otl7N0pvEx2llRvHsxcrR8hM5L6LnCDELWTC763Uq7nr02%2B1kKI8C%2FUg1Sr8N%2FS21XA2XaNlOj4A2P%2F7PGP2e5brqs%2FrfpZXY8iXLdhLT%2FVeIWtxOyqOCuT9ZE73qZcHuAD32%2B9zK%2FrAc9CT%2BM50QBcqmHxaZVler2%2FTM1a%2BwhGHGBBGaE3qjcoQS3IoQKvcjgcg9Dtgsx9%2BJlYE017omcsksdddxjK0y3YhyKJAwzSscSBBwQ7em%2FupddFY%2FE1POSTBjVn%2B6NunC6N0V1CK29KLDMBQ3iyO0tCiazVPQ7yIPsO%2BczaUShSTSmFKFDF0pJoauPH4IvB1JP5VvZ6knv3dDzxJTkP6LdppWBNzu%2FcfDLaENKhgHfTSBI3JvqFq3bMHmVEzlrwA3EHsiJzdFnM1hRhyEylHFgDqYhRensvi%2Be1usmRNboVcWqhZzDPYpQsFlI4Aa69U%2FNLywagoJXmcN0Ul97Jvvs5v22I6BgU1H8tDJIKjJNwi98T109j%2Bq0PVRTMMu%2FSCpXOwh8ZOy0Xyw1qMHmrhNG3qW6zD8qcM94V5Y7W4slM2Uylyb8yPRwTgkuvKXkQtw%2B5pLvjCsoc6%2FBjqkAYiH4f4Vmg8SNfK6ZGOW%2FlaWkZiMVTURY75Zt2Zvn0aZFZyk7vjmg02EEr2LkjcLZjfUZJy0Y65WIcjSGclH%2FwFupp7zLhIHaXUTQkhOh5Wx8Sq7LEsjMmc5rqnpfy6o2t7x2LVZji3Tex9glTqsILgo9mZG7PWByv7mMA6EQ%2BgzPXixUul3tHznu%2B5FCs3MK5pqoNQ0q5LTdxZIz2%2BT9sYnmr9%2F&X-Amz-Signature=a6b986a9c73791ce058f5cfe00e561abb8b51b860b7c0ac59a816f5cadb96e91&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
