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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=b76b987a9b647c9637878e0537719b556fa2363c5f2830602d0588f5d0ba063a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=e1d7b343db2b8792f9a83cdce0d61f6d6911ccffbc04660f07ec544c163c230f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=2bc7ef70ab4010988912b4aed901bff9ced61d4dbb146a32d8dc4159429f775c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=480a9925429e1eaa5733f83f83399766c1aeaa370748c05412a7d9c96bc632f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=f0dd5e4326c4636c5dee009ceea47b2261c40341059b1f0bc688d74d7f38c529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=c0ca73a1abc71b1c94fcada13ca2de552bc0e3403d2b4d4a2582a0ac3cca7473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=4f471e387ad5005d1848cd32cb00ce674950b3be07e18e8f4b07bf1358fef1c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNOLYFBF%2F20250722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250722T004530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChVT8HeE3XFuRJGoI0rqF2hb3CFrdFnuwP3%2B8W9cgCWwIhANgiGjROk18ZKjaQe%2F2omRgyQQwLwqqnuQ%2B8BQTEyrfwKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJU9ViUtT0easfwg4q3AMvr%2FT2eJNu6I3qRy3%2FUInm2Fl9hMp56odIDkg4xTOSXZEDhPWhI3vNz9hxPTYQTtQr7xD8uao%2BvzUjZLqQyxR9HOJt8EBozUcY0Gr6YwgJpzsx1GqbqXbw0l1gqJdO9uG4ZiWEkER4Rpkv1N3iNwsnzQpYYYiEV9tY6xWBKtCNd5Mo9FfUfJPyN6NFyM29OnAC2z6BCmENA7k6IOoIYVwM3G%2BFIw0Ot2D1wS9xKzZVRdje5TUt9IdqQBhSE%2Ba9p30Myy%2FIW6L24vT6lw2C3nME%2BJYJQA%2Fbumbmn%2BoZY5wgwa7GG3Tfe0VWQUwgRCsYqU%2BJABLGgh15u3CM%2BwxbCwmGI7lqODU%2FQkPaiNPTZfudB714h8TLxrwzNge9JDxYdHLHiR4h1%2FyWXykJtfFFHxnfT5cmz91b4Hhkh5Qy3j09eN6kE6ww6aUebKJ0eH7gQgGo2vR7ZEJVHlJ7FyINEfjXU117qQPV7A2A8kAhCOJEs3kNm3ebNqroFN38vCT48%2F2dIxSI4HEI1J3qBK4hisoDQbndGIRcGbTcJI4LQAliDLjLEAwoXySVBxPeMjwfp8vdoPKf%2BfJZY5WsdcN97NCiRt%2FBrwQtW3c9ccwkZdUV0j%2FwyesQUfrEtcTRNzCEn%2FvDBjqkAbsu2ikgTmmnHszp%2BE9kNK2WEFIHErPMhdX23GLKmXSK45LnYilXyi%2FFSNV5RdhDz4YlB0FHIKg5%2FFP%2B6SWwkjodoj9nQWKHzZjdFwFmNWoxx0XG72UstPRJwHwAF5I2s%2FcqgySaz0NFKXqnK6hp2dNx4Azv%2B%2BOM%2FqCOS5YbmnJsz0CaRHkhzl3lwh9%2FdDAJy6a9mnwfvB5Kc%2BhVpmy3%2BBkm2n7J&X-Amz-Signature=f252f06a5cd558b8f40d0edd3cc68e944d88d2ad48dbf98a69d79022d64dd9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
