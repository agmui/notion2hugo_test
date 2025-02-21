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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=3a6d3e18dd14399c859b841285bbd5e98063b1b8f584fb19704b65b562979483&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=4124423e5110f950a520e0a354b375791c1bca9325947c9a250a6228e180d2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=cc7895f8dc38edbea21dd219f11b6af9ce04ae25caad8ec6117e55614f17a1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=256a265358c89194bdc4364096bf58a7a87d5ccd685bf433f4fa442bcdf6f3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=68200ca00ef896f0ebd715cf76b94eb41b333d31f34051ecde8e604e43eafc36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=47893e61c56e4c9a6b6813e2b13e9088464cea6378b072e52c6161760fa8f7a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=884716f357e598582a455a6752495abf3f9f629a3e0862d746cbe681f9b162ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627ZGZLDL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfMqoG6l2xgTFNMuy%2BZqWCg92eH6HF5Bs%2BAbODqI5JjQIhALlv1AiEl2I6brTlqVQCi%2FcaGC0%2F%2BJvt18behld2Vq4qKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDKCZ9lvXpHFPJVeoq3ANLgUS%2B9LmRAiogrApRQKGROoGfqYROYP7MSnu12FUeVfI4mtJviIDEwHUmXELhqBrHY61OIwQ3sShD7g0CZkrVQXyATTBJVltIOYfTRqeYQPpZLWFSgOgyJRAHfwkitQkLOaonGL%2FsSZMd%2BwdY4TJgjf%2BlIuZiq%2B2Cm%2FXqh%2F2FfQf2GmsE5OXlIt7p3D9HRPSerByRvAUHlwhOZhGuUqw7N1Y83xE1gOVBKRo7%2BxJy5m2Q32OxTHrutmKoARPfPoORYDX%2Bsp1urTpqatr5JLZjpKY9xGqW05fr0fzFLBW3jr6T9LfdNW8HmE8fBCCJKrfulFKIUFa%2FzOus8WGcHcCzSdDXffoz4zCbaeCU0GezUGCw6HrwHU8cQJ0n1YiVqqcXInTxWNFRCLjWegF1SCX1MPqZ5s%2BX5YA4YEpBD%2FXYPmov%2BLkGv%2BnPeQnJ6F2igp8NsUS50OvypeiNJCIMqBotiSm9L0COLG627MB9udCuEYf%2FOvKatOvaSWpTbR%2BihQHCc3a1De7i5VwOeThOyYi1laUH9JWiwtp4rmi8fEF8Dl1iljx%2BV11LljVyWYHkbQPHG6SJaO%2FJpP9SsO42wOhQSR18mUSQTyJLW0N0bOFxih%2FaLqpThDJd6s5%2BfDCI6N%2B9BjqkAfYZYlzBReXOM0WL6BXgAB6c3U9ZVQk4E7sHtDF%2Bz1JLXStjOwq2HL09AwCJj7u4lxT7S59rlFRmK8O927baawqIU9flHYDJFpx2GODr429yGdp8UYFMWfZr6o3DOSW5OXuGwlvFH7AgjLleZr8f4AbKIfhiyYx2kv%2FBc2tB7xP0MxzLUOr0LXzcv%2BogWBUQOqa4TdB965Wcr0PYfP9U6Aa2hUll&X-Amz-Signature=3836bc30a7d04f45be4e8c01679a8ab906ca002a0e1e4f7c21f30bb1f5aa75f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
