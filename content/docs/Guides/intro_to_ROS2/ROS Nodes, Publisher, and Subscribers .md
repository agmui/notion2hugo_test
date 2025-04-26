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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=0a17e66a5144cc9046e4f750af61ab3f310ca643f4f541de71dd736636fddcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=3779949e911c27c98d2f8037441bb921fee881d262a2634346288c00e9f7efd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=f2aaa7e65a6ce04bdc099ec33a47201de369ae28e2edf37dbe8554d3ea807272&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=ea9c60de968e2f087a51f859939e9f999796e66d5ee6ad0d72c1a3ce93d0ca89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=387f05244541004c7cf428b948685fee20885bb59dd61c0b0e2ee666c2f35da5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=6a43f37ff39fdb565ad7cc0e03e02bf5f2d617dfc16d029cd1a227d05319ce13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=38479e509635aef199652c11b8c172fc74592aeb47c3537c8983415037f5837f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W2TGGZO%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T003907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDm2MS0JxCINcInG%2FHaOSdqFoMuM0RGMB58se%2BJj6ogJAIhAJPhdKk15zXFoM7ixHhkLToJXsuEfKz3vW9MCpP7Y6MzKv8DCDkQABoMNjM3NDIzMTgzODA1IgyVUb1PTvNjETzfhx0q3AOwamCctlIPOr1Fk88fPQnJscpQGjcc%2FboBY%2FLDf7%2BaPwAT36lUH2%2BP0mfs2C3krrnT4zhYA1RpQZplniGZjPaOuljHISOb7bEhQw8HL%2BLdlKSErTB2HNjJ8TaqS9kLZrr0YaIKe%2Bpyab%2BPwK9kxBXth4oYcDDWu5f4zTe%2FV%2B4jzORHdNmvbVBMS2pHqpPVap3GGfJSBdub%2BtCTGVHOz2RkU7UyXOyLyvR7%2FwSbMX9TtsKgLVK15W2I9NFHbk8KPpYTfxtgDLmR%2FR5BlQPW5ggyvTpbMqxlbT6uwP3xd9q1vsCUrf%2F9kRux8HOKUW%2FQ32ytmyZIu7fluhv90U7sMjXbFeNNAUWA9CA5IHrV3cIxc6XwpGnFg9Qf806DPMCrMb0aAfTC3PgXCKfk95PKJVpMVg0QCDeZAGI%2FuGJh%2FWUzdHcO8wUsGqmG%2Fx5qZEL%2Fd8oDckMKdsQ67Qd1NGQnj9cZL7M4xNV7hOsMA3DomyXaX8XoEDtCSsqjR404bs5reSHJkd0c%2FkI7XzC7v9Nje8%2BMMoeToMNc7CBRKgIrIr9cY91FlyQY4FE1BGKCwAHRLxpEqE%2FHfYfqiTxYbgg2wtyWe6UOhvl7umFOt%2F58on0%2BPqDlnReMc5iXVwmnETCvvLDABjqkAWGDLzfUbCfdvccx5LWo8UtlInEeRRu9Id2F5pLs%2F3NtqhtrjKN5TdE553CzymfuUlfBPvg%2FC%2FPLmxLL%2Ft8UtxvALU1XrQ%2Bm7ACnCMt1%2FeZXh57KzA1LWQSVHs3UwwZyh8MJ6qkfsAFRZW1%2FW0bTMZj9QddcryKkZfj6WlZUiod%2F5eiZRMDMjIT3KZQyYrGQ0ugTa%2FBs5S9HADYX29AbzedbxXrY&X-Amz-Signature=ad8001e0e2421fc944b7af4ab4d979d8da0c85a5410d3e114ee5bf45f1ababa5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
