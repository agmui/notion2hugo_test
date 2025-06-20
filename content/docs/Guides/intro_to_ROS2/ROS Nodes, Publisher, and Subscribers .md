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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=e9983aef78d398ce5a6a9876677fb98af751741e8e182cb8bcaa53adab8c0e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=f5024811747ec533adc68a01e996d3736950f900abbd65d7df5f187a0b49213e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=ce7b060130e7596ab3286c450201b3d4692e3d91ec0a70a5212fd6528c64930f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=33d90da4f46477fe2a9309f46339baf04aa94c91907e96a985045319689a13c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=6aa854a027510664b57ffc42ffad8b3e57ad045c5bc69964cff2a9d8c9c15652&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=dc320e2047bb23cd7414b96fe40abc02a21b53dc516a7c21f286b317da061d69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=88a142e10a38021cd1eb1b8d3c94117e4f1b319a3c45d3804cae5db0cf36e192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7ITFVW%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T210701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGJAqZeQnFfbdVGSFKRSTnG52%2B8hCQ8SAvLi6zPqcwCmAiEAqymrfGYf9hFfYnHJup%2B7ePPslUhilz7cIjlydtdRvZYqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDjIzXB6duCUe1E8nyrcA1MVIBrAEkQjnqDPQV5srBLHjfVCe9LPd%2Fg6b9tKZ%2BaqctHiJb4t1FkihIZe%2FXFJMkzNanUAN0HXO%2FBul27Zl90MdIttBJhxA4mzYbRKwoSbxViQiSJ%2BccbIgV%2BSD6RMbNXcrMy207E8Kv3BYOGN1oy6Np9ZXLXO1pPcvV3HU0OSJPVEbQXMeqi3szEYvIriY5xP6qs043mjJCrrJVnixXgm4mMfrPLJjm5l9c22%2F569C%2Bl1%2Fkqo1oZm9u7hkWtjVA4pWtG7kpDcVsnE2cXyb7UKWHlMXrgwOb3naU1DP6mt7b4YelIiX7n8m2wqaqfTGbE6iaQI37qDXX%2BjFqW1vaxmtY7%2FnjwXDWILsbKUunAiTOF4wvs0N3oxpDSIi2japbLld595Gqc9sOReSSUlhFyZkvJumdmyZCRmEmDYNVT5KyEcjivh7ymnuJhhfCtyto5GH1sOPrU5gPF%2FRZH6zuAvG9ge0OP8wRDWnqN2FMIkLJlhcZsvWjCISi7ebARzrMThj4AGvoTBFtyLRW8TPcQtrx2uCwM9mOCWtuWN2JWVLdb9yhptYThebc46UVVrwprSXF1SBogc7LQPwj2xhHPDrqAq7FY3wUgmYMdyrhrCH9507jP8aXsohWU1MNKr3MIGOqUBPOOZXhjW5DAS6%2BYJBqkAbapQd5AFRej1VRoehyTDfORamaPvhKFq7i0UKUoyLHRnkBxMyGZHzUOuT8w9x35QZiwvy6gGYANWjG5CH5BPyr%2BoaVGzW9Xdzeux0GgXmGOz%2FcdQI8WvdUCSg2C3CdnsU3y%2BonozBfxhw0y3ThQvFtZ9Yo3fhfif9wK9qQ5IAzPNj0iZmp40dahq%2FTf3cEIi3VAIWe0s&X-Amz-Signature=ba1cfba993175c193dadbd198e8667af54db422a64620e0c0ca84c44d9469839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
