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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=6f95a937b26ffe5cdf908e6bde753354356dc00264ed664ab217256a6a6d1db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=32838804ddc2db5fec163d1a4b2bdd3750d6aaeec9f6f8515f161361418716ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=7da2679b817ac292a858db3680e7b0f1b7b4bb144c6ee0d0c6d055079f0e00ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=c49e4ed2f11ee6ab7ba64d1d96cf47957f1376914684319e82b5e3f26d5d9f79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=15dabbb47db751b6b3c1fad90663e52da8e311093cff408df99ddf81966b4417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=fea9ff0a3af19a42bb6f797d8a116c516b3ef86677663bc53528d94dc408e4d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=3c227bd5093ed9f6c38fc9515c4ce3316f86fc36fee15ad79dcc173780579b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RUYAAF3%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T132555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEmEQOEvaaJt7l3wyGKVMkAs4H6mmX3cxrKdkbjt9uQAIhAPZClH%2Fo8oIl0D8CqOUv%2B4KoXxQxswpJvuIA6gaiHXhoKv8DCHUQABoMNjM3NDIzMTgzODA1IgxyoA0KCX2CCpuoRIwq3AOZLhjEhAIyRGf%2Fq8xihpVGQZpA%2Ba8EqjUI%2BTO2Get5RnNm9wjSDvB0gEH%2F40KqABfVUG9hdUypCJsTpHghWuVr%2FoDDaRQzLmcW33YW5rWDlbeFUQgGQY0UFh2OU74MJbN%2FcPEqeNd2Ia38PwK4ti6nUcw37QFuWfzyvV9kZNna4aX0vwR00uduv6UfZ0tYsNsYzcXq3Ky5nm2sXK%2BSGwMU6YfbVJutVchzGX85njLu9PoYucQ3R%2FIwnhtLbn71CE0xb4biJw3g61tFxH%2B1dyye%2FQS0Lzc8B246lCtoboT4dcGjo9OnfOkA9xdGYi2p4LLhfBfIXzccDUXTdOg9jTvcCyYkKThsdLilwdge1b0Xqx2ZGY9fpwxC%2F%2FZ6Kd%2F2UJaEPFvckYPQ%2BB36AOeScojqimggX%2FvaVGnz3qTBdoGsihwclAuLZLxtspAw3MgBr47kK2oKDqwLZ0ZPdPY8tl9DJPRBUj9tr%2B5FGLrzLrTVjSi%2FbsnW0OJe7gFuxRRAGtaPcFS4M0NhYIjCchlFgnDSULK4KEu%2FSAmNT0MexC2w4G%2F6unaoyKC2uDTW8%2BDygc6T1tIO8fJ4k6y2N7Y5gfTxa0YIZmeeUHFhWyLicWS24OlnsfQLO1IMxEW7VDCBp8XCBjqkAbvnt1AKcjSqIiAgsRs9NxehByNpA0uGNtlFr84hHMtxa7bun4UNI3o29N7B9aH9FSQb6se0g5CZy%2B3TTgp80dVJBA8QEqjTaI3oZbSxHQoVIGTa1lOaiZrssSakjFu5BfqFCTqGL0CwI94C5xsyexyoK4VNu9MxpBQ7SqtFNBZqnu7DdJyPk3xN7aD5ZkNyFLfnuGmpjNKGENMNHVFfvktJzIwE&X-Amz-Signature=4be41be4cb2d9d3290ca00b73e823d08499b22a7850257637803a033ad448937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
