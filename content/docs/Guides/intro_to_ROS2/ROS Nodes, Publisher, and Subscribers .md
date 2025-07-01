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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=d5f566944124047945fb90c7374607f8165c78f9c164f474bb8f43fcbf55d3c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=08658d86514d1eb161f96845e11d98e893bb8e4bc5e5149edc9b172e25cdef5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=95f9ecd3dc165025d32e54e53cad194090524a45ea5049772a3e8806a68c0d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=9b695b0a9669f01788308090d1804588ad0f6f1838422816d0ee133bafe860c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=ce9d91eee0d7db625b6673200a1a7232e82c7343e7f2d44b4a153c592af82eea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=aeae8c555cb3c7469a277094ae71e95ec3034e367f208baad3e2ab94c4aa1e33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=8ed105479e6b1e48c674063f16052a3707f2003bea872ce66c08c9440c77f037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBAJXFSH%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T042844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIECUSZx3LEqCVu%2FV%2BdN9qigjnMRdOoeQFBNLcFQTOP8nAiEArUPtc6LOCdwe4YVq6ifswThF1WJR2cvMtNxZ8BA8oKcqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJxzWmRNoPU%2FmJxwCrcA1g5EASwMmeiaADqJ4R9bVejXmPvWHS5QuIlyfjG8IChJZzKwigUp4niT5I5QPulHX9i6HSTf%2BCpdVFr6VLa9a09eUvpMV0LW%2BO83Q5Lg64MYnJ592U61uFFmdPCROx5s8dRPDoFh6t2sVXEUCEHzw9wKM9GosN%2BMwT4DbLQk0y%2BxWK%2BtF6fVzYzH0qiNzpq9BOPRM7EMTQX52de75h9WfbCF5%2BS4QGUIFMWsmAAnmO6sk4CR%2BITAvC38IhCagkVAd5RMUOr%2B%2FJzFeNLUtGb2sQ8TcwihYk7qAAs6Koh3GG6FOz1oa35Y5kHTZ7Wo6it7PPgXRGtMXqrun5%2BiMBqSq7pNAK0ugZif49gkAnc2lcXzf1dRaiNLhjayyxNGtuM3w0MkDQFnO2wEfWNUrk7K2z8pIny%2F%2FlE2Bto1kjkXI%2F2N74OJ%2FKx4v9IjrHRReiwRNSe%2FmmwnhXD0ZIMC77PENxai93FsnQFqZHWHOZY04wu9tSdRtdEt%2FZLrGRFJ4xfQjOnY9jOY9D52xnv3kov%2FinDpG9XkW2KFL%2Fdgqu8p094n6t82ezD1esTPROsZ0K2Tp2dsFu%2FNmAye6KKxZZ4GJ8z3uTeeoT6a9qWAGX1dxx0v8THePWuC2WE%2FRPJMOSjjcMGOqUB6QtN25t55SnhmxBrvNzllImYK1H6n2ibOOlSgGoerHTEHl2ks18y7xS4JjiqlUoCAAgclCOUlDG0PzOIOrGzC6ffWehXVOWZsDXSaE1K1KYbIvNXTLiz0%2FaDFh5ImBFTbxMHbKLhbdK0WKLMQ1g1bFVt5XqpIkcVs6LGmS41HC3FkClDdaqjBocc5zWqRPew0HE21YMEtDzo11vWYeDjuzLlwgA7&X-Amz-Signature=cce843f1b5c4229920dba672fce7c37b9e4de90c4d135eaa6d4a6c0c233c6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
