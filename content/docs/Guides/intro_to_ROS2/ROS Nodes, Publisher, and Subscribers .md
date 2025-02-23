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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=1248df6ec1a31d2373fe28de0e53b2c371954a1fe3c4ee57d569098a4d13b53f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=0e1a2a193e1b230ec6756ff45108a18f67eab294e7854e7a7c29e6134fbd1f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=dac791c5dcc2f95887b520a25ad80380a0eb7bfbd361d026edf555928afc6e86&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=6ea8516a9521f45fc5d81a184550e85d757379dbe857f95f05e2b1997e839ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=1ae22c0da9e0bfdcfa5d7f79980686ac6d0264915df509b9e2330f3599c08a51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=67a9e3911fe5a7a48d7ccc68b9adfdb777eef023a94fc5e8b30658430c2ffa23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=971066e65e42b0e822b7d76ffe5460884777c7a50707bd9841ade72a892fd7d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6MK5EOD%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7sDKdAVRNmJrZVFHKtaW6vItVYlK29AtHHsPChArR0gIhAJhDlssTSYazjQqLnffT4yuVDVUm%2BwMTXA6CcGAqgzc0Kv8DCBoQABoMNjM3NDIzMTgzODA1Igx%2FrXKWeupjOh2YVdsq3AMPtgKERWd61XxEd6clsLhOkWxY0c%2BUXQTHTWse4p4Zs5FaeM3f8EVQwT3GhWcwmz9qbUBLsoNnas4uyf3OK%2FVUxTLAvLqOoFsaGwLZ4eM8RTHooD%2F5yv3wWsMdVaDak%2BUe8K57L9xQCvDfOq2vs2178jS4h0%2FaCCslzu6YWRBdZh8ZiZiFFapjKdb5tVP0cMYYsXQBQozn%2BdaJqf2XWswwjFNp120m07Iy94Nyjzt3nTGoN0TNQ7o1VZlPqyq41uDtQvGlgyZCrc%2BdeQFTsCB7%2FwE9sRpaRKVNkldkQsXzlWIFYOkyxI9hjBxeYIjCkvkeD0zJvX9C6lmUHbw8G5Qh8iNOeMUyhygABNdJNgrL1E8CMyd5psTpCYXk3Hmhx7Fpwze2am8ywoPqDX0c7N3TYkoB0wDUt86i6MFhToiDIoEoKx12nlOOjRUpFUD7xdnfTF91bCy6B1BBZTseCgwubd%2BYAPqeULTywvKvHGWyO6PpHLQOCqT824J3nE9jJOvcwBnCO37RkMinBmx0Mv%2BayGa7A9MVfD9txAahO1OgHy14XbqA3SSPRNjAERLLFYwy8%2BTsu1t4zOdHgtbDg%2FlT0CoYYGmyx2zXi1VOlJ55kh7BK21IfaW5Tmfw7jC%2Bme29BjqkAUcB1ouxKEffHusUrCUqaQgdl1hDzzkZVQNFYxLCZo4bRyJNYV5n27jiCselfuE7ZrqVkB1%2F8YkKmh4J5QOvN954t71lS2%2BxMnqJg4%2BA7sbYl%2BkD8F6Y4iiGxxs68zapVMq7ktVXMduCBQSmQduzAiPRS1qyQdMgikY3wtl0MANjAhv07czdK3zfJ%2F%2BsL%2BiA93AhVLXLvz4sumkZp3ClsoTI3k5z&X-Amz-Signature=673c63b81681e9308d57a0a7164b77221c74bc3eb7ca67d5feb25962d599dc22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
