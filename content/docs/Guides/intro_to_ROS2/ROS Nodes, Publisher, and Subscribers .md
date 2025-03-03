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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=43138b3b005e3472d30a4bdd5340421f91dddbbe3f44a74520631720dcb8e7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=ca4ffb73d1e75553d407b482d79e404f0cfef6f32599b6df46769450eb32b3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=0354a93183b328eee535f912609667b8b7eccd0ef41974723f20be3847a4b38b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=6607365348204217ec09846e4e50de4295ac69831845ff73ca67dc43881c34ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=c2f6fdfe9f031b3cb9880a91504f26b2e6da43e78f158540773b8e1b8a4f6f4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=fcd03c761b60f7c7b531670cc58631702629cab954ce4c7f7caa5bbd83d4ee55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=85460a3190fd1fb3f683c52cb594f8f7f5f27f9e141c3091c176bfc1f4b30d05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSLI67KF%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T003858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgG9l2VxHyYUjEo6q6Rxj0HYr1wvWmeNiz0p7W%2FhJOwIgRy0%2BRGcIyb5R2TXo38JKXBm5iQCExaD9ybV0UTY6XW4qiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEN%2FGkwPV8oK5kU4SrcA%2Fr5GoiE4qF5uz7r2PbXZwkSzPZsdnQqHhb56mNYZDQzNnZc7NY7DIZunkPHW5UijKxUpwmgZUOe9ssOBulsOW8JbV3CkqB8Fnqk8ea%2FK3ikaceSCk4hkMYckY5B5Cf%2FqrmrXvRPEZ7IlxDDaAaN8wYyYyMYzppDRpariy848zbth519t3VveqS%2Fi5KTCBFFVAmLk4hr7GxiWs9AJn4T6wgIvWJ809Xq4c4xzld6kkgxdkCy9AxwEaKTJKNr96mpAKqSk7Xsd1wW2igpTbBfRKxW2ykf2qTc4CMlqLSXp%2BMzBOeqez2N%2FIqejtyS5375jQFt7DrVnxer2vOYol%2Bb%2BeC1JFn8qdt4ema5sYLx80jr1RNntHaZSRSDrpcpb3lshF3sGNIYgMc4%2BJtwN5pbfV1wCl9xkmhuDmt67kyEZOOcdKEu%2Bk27FIguKK1lxVo9AA9%2Bv26VQNvQSa%2BUljdrMy5KQm2osdnN0mX6rHE%2FUfdxU9iwXZo3lHnHB9kte74dNmRQYcda3NBp76afvI%2Frgadu%2F%2FGlL9brr7TUqwZCxXcr0lW%2FH8YOCfLTLvrmsyvvArM03hdrZBrQEgCYKzW5tsPELOmowTKmHMIfucp3gBfu5qPrGYE9q4Qwe0poMLPJk74GOqUBYjZjThBeN6CwWDqgqzmDkxf4hcBmZoT6Y%2FDeY7CABxu%2FLB2ZFJ71E8em3u2bkJppiNFXmv3pvW9%2FtKu6oYU%2FrxDmFBrMMj3QCz707exGeGdczqk%2FmE%2Fr7isVj9KAZUwB%2Bo4wmQ6kg%2B54ZdN26KIK2AF3nRD0JgGqIXT5yRKCDvEHSM1XfBYhQ%2FwPE0JmbDSOJvb1jmj3f1aJY7PTrU8czBAgEhgc&X-Amz-Signature=1eb2caa3b2d9d39397f738e64b870287877f779f842faf26e250af8bb5510c35&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
