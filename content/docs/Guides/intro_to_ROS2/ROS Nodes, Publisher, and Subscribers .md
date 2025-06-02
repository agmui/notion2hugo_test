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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=6ed577f0ec3875306451ce2b9fdc88432ff6ff7b44c0577cd7e9ebfa30c3da44&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=82d1903c56b1f1376dd5acf986fdee4a3e4d20865dafe1c6d45dbdad847bf371&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=f4ee9c1261ed36c085a2d73951ce1b7e54a5c9e1265fcb73e5bd13c3a0d23512&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=7c921822566767dc6afd47dbe4987dbf45b38629351426b5a75923959c431a3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=1990ed8b2df526512bad7735c9a2970469e9aff6fd24c0aaaf1a23a2afab91f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=9cfdc269946c6420bba5dd549a31d4bc603fe8ce11ef6120a745b362f1ce89ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=4896e8a04e724c186ca5c04328a720cfc77d7463d5ea79f16381441b851bdec8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6RX6KO3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T071103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDS3vk8CrsxMTYzfQgslqx9oeGoj%2FEHlM8%2F82uPhGVyKgIgMucfzmOeROoYbn7U1aYD4jusvFKL6ZHh5EuKfMVDYBIqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDORGXFSPLM8hDggYLCrcA0QaxHGBxAHxiI9MOGHX2OgGui8VZGnKu7G2g%2FVBDylHgUbE%2Feq5D6i%2FFHTr0zU39WRRrPPWO6FM5rdNjtdl%2FGxBu0GzyuaxzRNvN%2FV7YN3NXrv4Z2Xm46dhLpZaONM0mKLJ0bNRG1K%2BIbGJ3LOMxpJ7sD7%2FZ3tZJR7%2FRPpmASOtPdNQWtFCwskHoB1ky%2FELld3mdbJaHOmTSIxqgVDOtDPivvBiqqe1nEIm6mFTHhrYIJ7eqeDeAtsWjza%2BmSCn%2BFyEBbdL9lob0V2Rwyw89I7GFpK2I8a%2BPeclzI7br01D%2Feg3Ysgcqz9UMI%2BQp1SyV0wh81DLVFQUbWwhxiR4C8NuOXGvnTJcH8P756e1FvtzHgv6aj4U6sTq9XpSe0w7V6Al24Rqi18lB9%2FcQsPacZfq%2FgQfaIecBzMu%2BZBIfAq3R0JA7YTAPY1Fg56%2BvGIkzXLQ1eFUotcf1HaWhD5Fgi1ecRnbi10YQ4fXqNn6T84RvljOGKwYgeCDsU9m9okE3T6UtOk4%2FYLtUhhyB%2FKpdj2%2FHF6FjgFIcWFZiQsPf42dAQrQ%2FoXfhfQlM5%2BLZTzJJpMtRRni5FrYj3GMcPkxZF%2Buf2eTpZABmNfCH03U%2FpUCGwnA38%2Fqgcb3LtkXMI2R9cEGOqUBSUGhnEWA8pMjU1mOmobV%2BEqgOYBb3pcJNB5u0mUD54%2FSsM1eMEKZKW9Tgl2APMomnDtQYCgIN46yf64lz%2FMGBZQyCEH8WZFyDdx9la6A4xG6nsSCO9RRRbJt4AnooIyvkfJ5%2B8KqxkJYG96sKJKSUNZzY89xz7Y%2FUjh6ZA0onoflyG60UQkG0sqGw0Rfh2%2FtcMko1i1tBVDiD2kg3ZbfXnWk5Wh9&X-Amz-Signature=438b72b144fca1b02a5d85d72aaf2fc49f8560fcd57564582522d409e5ab0361&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
