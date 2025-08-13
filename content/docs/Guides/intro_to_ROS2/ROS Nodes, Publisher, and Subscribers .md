---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=0fb8e91c8ba3f0050444eb650de7e4ba1b137a8aa197af50c3de8ab523453d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=7d92ce3284d93aa5feac4dd802701b44822334ef142786c9c96deea12f6858db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=402cbda97ce3d6983262450acd3344ce9b65e9081f4db7c641cf90179660edeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=081605ed54ddeae93ad2f75105cea91304123b8828f82c9b7cfc976ffddbc3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=2061c4dd9c2c2f74e3199c32447e27585ae8f4b47360996f75cd96280023bdda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=e9e846ea1a751dab389a18dc14b9eb72866611d53cd23937566a065246e789d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=0a1ca4d19aec9b6a6084f4efbeaad5fe26e6a7e7651a175465cd7f962ae690ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Z2A67EY%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T081331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOSiixB2zRfTZobwswtdR3dYWQiDTyUY6fW6QpptymtQIhAMQW3GIJ2e3GHKUIBjvS4uWmhxmYR2D0Zrej1YhVsWxvKv8DCCgQABoMNjM3NDIzMTgzODA1IgwYgZckRSg567tj%2FOMq3ANt0s17FjEjj%2Bp69JRTyLPA0M9%2BRwIE9bJWeBwVHLp5t3fNt%2FELv%2BbbT4jZ0zR4Y%2BxMKCVlSVRUasLrSCJBsKbw%2B6JIoXTKleU3ErmwR5ylSNAGvkajhLILB33u7m1glCFmOLJsG2dReguGVkgEAp0%2BKUSDAbpL%2BqjOAwIU3UA20rnWwvpiNF0s9gQxFvG2TMCYS9JCu3V6vW97lPNb3KoqGq1iIwouO409gKD57JwO6uatRarMXFutzP9RKnHrvdSvHMSsky45ilcJGIdhkPK%2BPu3hHugloVyCIbxj2LR8enQlUWyUHMfsdMYzLubOnCZiukkXX2VVxJO7h8u4e9%2FSX1uJ7gMt6cHsnJZLw4CJRQPpqPNirC1e6TSsrp8ypNbYnrXRLK9kDFMl3BbmbM5cj5YYGKq%2FJRah9OqpI5a7NgsZcv97FDZpYSHhOrSXyIKB%2FygsjCXZhYFcK07r7gE4Iftk7RZv3fHExq%2FkSazZCei27uyeWRh8YBqaZ6XC1iT4H%2FcX1HxfnAhfJvMU95RF3ogaSfEAJistkwuZBwNDSd7Ya3RRNxiycR93B80%2B5cRLvmksU6zOL5YLAsGf7fCwBxVo0QLOo0jru%2BD4INNbzICx3krm6PrvtbawSTCs%2BfDEBjqkARj9IR9oihfo2CvpObJE6%2B3cZX9LESi5byX9CHXOh8xYWMHESWXs81dtdEJXn3J8psKi1HRQjDydJRJDjBGI6q2uYX18xOOFKv%2BvJkq8M2%2Fm03vF4wKwW9sKb1c%2BFhcBiZftsA2JYWdxhNGwHbYFtSCk7GEsubzs3ID%2FBoczaYf1m6TINZ7%2BVjyWPDy0ZEJVdUQ20U%2B8YNcHH7NwPrVzslA85RCC&X-Amz-Signature=c3d061b727e924d66471ac08cd0e878b2261103865f38cabbcd2220b4f484958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
