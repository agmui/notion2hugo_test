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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=1cfc4ff51163fdde47fa476c4cb2d5254e5efe486a870849ad749ead3a6ba174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=a3e17d9017789450317b5035d335715362f38d066c624adc22616b3acb7208fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=725513cd05c3023575c106b3cc4a393fee4438d010f8cb4e575a4637faef575d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=c0227b61384e98612bf56add9e5eced17183982fd43b38e026d5db6d88ff7461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=cdb80a4501ea42c7654dcf0627c32ce991a471bf3d74ba65a5d2d20a8433acee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=e70335d03092d9345e75ab856248004a7ee1bdb47db898a40f52a0ec4f783d98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=dfb1bcac1e26d8c1120a4d93e0ed11f143b5df9faed800f82805b75c7b05f9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4NJMH2%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJHMEUCIAxpNL2D%2BGd8yRh3pJiSGnF0XELF3BtKWn0NBGJb%2BJxJAiEApYFXjm7kxNiXcAtbfSCIP5qE2FqjcONocFFLt1dbo74q%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDBrN8Kfiv%2FIPpihzCyrcA%2Fv4qE2KxvNqU3gocGgKqmD6USQ3orlQOJvT4Ocl%2F9cWbnAShMS7CgQl9kwhj%2FrDWUeX7P2RqJSxhCr3Ei238kFc3Nds%2BtSLE%2Bm4H90FXtQOTS7GGJPNwQ0vqDbtLsLvGtQRZ7u0ajxSWfP9Bsn5QW0mWsTw77k%2BN8tQo1GOqBVQg8YeB3DTEtbNiqgQ1llSX%2BiNq6ErF4TMDXIIVo4iXp5EouR%2FxsSCbNJSqiVUfZ5BEHm%2FxWi1A5MXRFAVVL8kNqFWG4Fa8mfJqKTuk35h6BefQJC9zMF90Co3Q4see5LnIU4MxTDGZccwhwBNCe3vagFdP6NzYwB0mFZFLMlpI9%2BkAjaJQNWC9OBlwcADNhar72zw7HQfvYT%2FsvYt039xXnPM2r%2Bt4ABH720S1f8i7%2Bjuo52AcQy1XwmhAdwIm3FljBQiznDEpXKi1O21ySCbH8QzRmjRqHcCyCUKqUCW8KPLfPl%2Bkdw2xpl6cdNyDID3F3e1v5R9W7SM%2FcFD8y9LwIdmI59NDa4WAKA%2FtYlQOV9yFBFkJ99xpFc6GdBhNSxdgAoIFQlNJZniiH27vghcl8XF1he%2BMDQe8G27RkpHHd23qNlST7S7mgxGVnSwYHeH6nYFlb6wtMYfC5dfMNOz58IGOqUB9hXpQy4ErFAWu9knCSI8pI7WVY1NnpZuwwq78tFnM%2B3L50qxqkfx8SI1YjcGw4j9b758Qx0JPKqFwSkIn6MWH07v9J1cD1iDv1T6k5PpwV9TzVOcCO0SGm2i6DTYM9mwr49G0eqYUu3P9m1dI%2FtuG1LhnJLhYTl5t1g8oj7TQlmptvc3k91tFPqVqBQK7fy7azTS2wEbXpWckaghf5GEGGkOhjOs&X-Amz-Signature=ef04a705a54db4e797d9aca35954786ba49f0b616acee50c4fb9288c41b20e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
