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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=1f9a39f835e7f32d83fb9f0123c6c011d1b3174f55d586667a69f6cc92c74838&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=1f558f58cef2b49c1756b91139e964b467576a52592c09f8431edd900820ea5c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=9fe22a5965122c8f1a29af96093f9f192704a046b2d52a4a59586e7fb5a5ff09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=f900d4424e24c3943e83f2e8d3eb05fbd937ada8eba63d992608c6410790cfc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=6f3e252efb9515d9b84b747768fcb7cb60bb1a97956a19a362294c17f4108efb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=cf86d070846be78d9a02bbd1df0f47811cb79cb6b240c4db2ee7905691f9c26b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=fb37e2746953f6aca832446d29efb3fea9478d49bb60d42a679ad9f0004cbea9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD564MHE%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIFHTN3dpitn5PLl1UtlDuZCbcb0nfXq1yN2mQActw5THAiAO8MXASgS88zVmMYypsIGKbmq4WhLGD%2FYAJLg8ZCUJ2CqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJLzxqSoLgHBQsfGmKtwD%2BXmF%2Fmr%2BfwQyRgM75AJa%2BwRUWIssVFPBEoQpdW2figeZb9Zm3JFWcYOkdGBR4ABgkTNhnQzzaVJDcTquYskad58kBmCma8e7oGSQPX%2FomhjOFHJFk%2FNRkM8Exh5NLov6lZZ01CqISTG5kEM9qOSnNmDmRuXhrOwYH7K1oGg0wvSeKbYS0zs8S1X42sc2aU7QPoslSehbhgtXt0sqRKzwhUPQ59SqFqR%2Bq9skH6PJwANR1tbwyJOCXUqswekKIhAnaltg0pkwkQQNZ1C7eb5qRLrwiYrsNsFdP3wUyAUCpOzlNQACsWGGoTWSLQxjrPJcow4kmXlkKzh59Mq2dj%2BKRREDw8t4V3zpagznBiPoW2U3degDRc5BE0YcRTuMZHY%2BjuPoCq9jiauD%2FtSpHMzKt2FNj3iAxgdkQWTcUhhzRoEC9%2F9bDhEp1CzyzNG6HU3thXAuioFDz9V1BDCg%2FZGt3vb866sIFnV3ItT4bQCe3U%2B39Pi9KJmm9e%2BsSXHPMUi7uRpscLSngR5Vfp7TgoGY5EaJPnzEUW%2FMKTnl69Vt2H%2FsxMwIy5qdzoGPRxpna5bV3f%2BilB8oubvBTiudYVtbUyI86ijtzvi1lccZVHpiVKhO%2BAF9o0LME49yNT8w2YSuvwY6pgFTn8%2BkCWf%2BNdBZXn6hdV5Q63i1aesT7%2BlbwW7OrccUsNa76C7t9ZKzwaVhl9OGYIw6HoxbY1ocdjuu0P3UpGsrOc%2B6soWS78FhIzZadLKr8LuGaX9BhMNGRnsAypJXBODxyPLKttfWLVE287GR4B2A8nKjrZlJbVJBxc3omUWL6mLVbXjdWmQZxzv0CXnibmRabLGlEZACpDJSkHqc%2FgR9R4piiA5b&X-Amz-Signature=ffb7beb3a1a695232047f94919375ff55e356649b912ef6d1f5c866b4485cbe0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
