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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=e6343be12da0986fc5aec86b3b58b5e6d8f502e0d875ab49a95e0f302e532ba5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=7a1749be7c9d0e8b0d1de58182fcd370610f1b3ac7b20a89f462050fefa63833&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=486cb2dca216fec56e70504e2a03a74349d08320be9903f368880626c72275fe&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=78ca7728d36a57734080d924319b9a418780ecac65cf19d511fca940dd087ea8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=5a2013d8104751fae3c4d504c8d5b2414e6f18403638a88dfc5ee141a11a2b0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=09951869add5cc4b516aa637dd32e7b98eb52c15122ec00feee2f80629a8dd7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=18ada54359064e3e60a1b8060236ec8d643c99c62baa68b93552d5408f8d0d40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677T6VFAE%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T230841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQD6zKacQBTlhGu4o%2BCyUesNDIjVE90GvrW4CopSwhzSSAIgLL09XClz%2FeSHIJlZgenKqxnYQU2KoSY3laEaZzZ6wbIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDP0Lmclp9SpXsrwmSCrcA%2BS0A4howwkS8oQs4oszPLiU7NXs8bGEOiXBiijvPCmR8g7KRgGGEDbhTja6kJmd21pPqFnsIzZLbsb9D18YGvQezxmf%2BzLsPtO2sSvxWj5uT7tzkou3MmoowfHaiBIGsCGFnfUSFPrJOF5IvVDsDAktBFg4QjsTS2z1ONo5R22w9UJepG7%2Bg5cVQ6o5UaNnpNsStswsNAcLizlatsrAHhNIkI2xcRDwI6N1bxpyH7fjRwYW1vML6ZB5v%2BrwlujW6AyURM%2F%2Ftaua3CvUeBYwEmy7jDcfX4r3RrLcg42hIqBzCD4CSlN8VjK4v3oe8o7wCVJY9bV8k8Kvx8%2B0Z3ElQ5VweD30aZoDpljvei1MpZczx%2FFyDZi4AA31kirt1wJsEDboXu7TJFttxDaFy1zAIiZPEzBBx1Ab4jmhQTovKvMHkYBXhmG1hcfCUpzVmJ3OSsUQ70QYl6kIigSXV5GF87P3wDulZozOToS%2FRe156a9c1pokpUN03yggmuNSQ5kN3kMzHYO8Uqwl1t35VNSUOo9LjR34bmJPABTf3LIU6NYwf8eIPJMVYdIjSIW47XFrchFURM9rqQN8vZqqu8dGJ2A60t1tgzB7Bep%2BXntkdsFwMDoFo7UDQUUrsQJ4MOPimcEGOqUBz6gAPvQEdJagJtcmPbW5vOec%2B7IWHEZilKlllA8npf6XztsL%2BwKVwP7CXwq%2FF4Zf0xbbNu6lOb9CTtRHikmeZq8Vkv8gVwM9PcjdLD5KiKK5Pt39gjom6YGc5kzJlhxKMmvgOGQPd094HukOYMO8qoC8Bv2zZfZL5mG6H8UoP7V%2FAO5%2Bc7jjX2dUZr7YyV3pykTYB06BsvidWbX47AUa%2BfvvY3EW&X-Amz-Signature=c667bb181ab1ddbb20114aca0e062ae708ab9a9687e7774314de575452bcbe54&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
