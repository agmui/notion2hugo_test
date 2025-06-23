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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=0b0b96cf5807a2d657231e5263742e579f50c3b3b76ee886230f3b2653ba279b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=3979eb5dccfe82c337f552f79289b6756c28874e52d08460c5cfa65f0f9ae2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=44cdce562063295d43f875b6e8db36233934180b3bf0d41da9d5414e4382f1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=3fb0abce62c344d6fe69090ea709bfd327012a10b71ece8adac6638ab4e0e3cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=edb1faeb5baa089d4fcb4df343bade339ab6de9818d4529acf6d069d04fea017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=4b673089c0c431344e2ebb936f4d23aa0b6dba45af27e69f26c942a6f8173589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=3e72ac35149bc67453205236983fafcb49ae9ae17ec58595546823307459a3a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QTVQJFG%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T161109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIQCDgPP3lPkeM9iaX15d9p%2FFwiSbZ52P91ojzMurAhpwoAIgVdBjjjD%2FJv%2FdUZzvnpZrhITPUjBnWGVb%2FnY4hd%2FlTt0q%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDBt4Rp0KDPBcxYXkOCrcAw8FSPms9Jcffs7EWcPcrbcjleKJRcY35JjkwVz8M49jT3v%2F9mwLoT2bKSq8y9PZILuNDHsSsHPqHvrzAlMyO5PH83Aisqc2tGIRz6yg8eB%2BcI8HEpsWMW%2F0B%2B4Sa%2BrWTTLX6CuV5NJJWs%2Bn2W%2F5Ysiy92j%2FoVdXrX71x3j%2B85i09RdVp%2Bh4f8E2FO%2Bn%2BpC8YaFriWaSCcc7IaDODV6%2B8g59m3QOVbR%2Ft28zO8jVxvGcw8NqLRJHq41YgiqEW2mjSK4mmaR%2BA3jl%2BwfiRNvU6wMGPz5V3nrCeiQ8pXyvUzB4LtsQbwund8zeNCT7oL8QxHBwWnZ5gODKHrttJBHNJOVJkGUo2LLYCMQkJg4aJjvgH6%2B2jFeJKB9ptLg6wTyOKz2ERkWHNyl%2FbwAjRfH59%2F%2BPNTz3msrnIYYDTgam9BDzNttI%2FU20v6iOrAigWvz09E4HaaBFIbKlxThTHnKwxUruHzmZfe45UYmNjuV5tECGMjwYBZwvHObxft6l8%2BF2mmBOoNzWtgyj1JdinaEBcVvVEnU4DJwrfz6yL88fj0cGVWxgjLW%2FApiwOUvZHLuCdn%2Bay5xht4aSulHa2rahPj5KECGYxtVSzZGetlGMvYjVAAMxiiLuW3ZlpqlbMM3z5MIGOqUBp9pyGCysyx2J3IDJxd%2FtenqFtufODJIU6Fk8DSRrmQJXDYTKbR6pCAsV5pK44AQS9kArHYvtV7unYn3g%2BZ0zK8NbmUy96GTj5BvcCAUZugTKZliqDXtqUixq48TR3mWfiim9lQ0MTdNyW5RJksWSzDG1ToAFdebLmUmsMeEFidi5aKwdikQrX8IAZ%2Fw7eUxrxIuzuxxTbtS76gyh9xpxqmykvwSb&X-Amz-Signature=9866749632a67c82848cd5ca3831de03b326459ca6538daa765e7e4d89e319bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
