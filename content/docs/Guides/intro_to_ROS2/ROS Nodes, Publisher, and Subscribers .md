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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=b957a6fedc76653b9de7584514f7932a96d34c7da7ebaf6ab4be87a1b4c28fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=2617b8608b809eb7306f14d0c83c2cfaa9bffb549a52bd5a6efd9a3c02a8c6eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=edc1dc6cc23307d0c0669fac5e7126d721e9a7616ee669a047f7d6185d69597e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=04fbb3117cd8527079fc9f5f6caf7c943664e4cd201676007772b5dd8a6d425e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=391f958f64a5255e22fa11ff84c6612b6938ae606d850a926035ec6c393609bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=f9b64b5a5dbb4a9928e6d6dbc8c4477994457f623c99a2c5f7c34adc57a2798f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=dfc214cb05ccefeac273dfd69f1b801837eaf27e2c9209f2ab1c7a60ea1c5fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U3MBJV%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCrxikZ4fdjHQGO8hy8an8eTKqLG1dli1CqLK8UN4Ve6AIhAOb3i6YqYhcpnnDRCgcA0nHQJ0T%2Bp%2BOcJMZDKkLhQj9mKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynecDyGNeUuI3YSZ8q3APG1LEpk%2BXu495YC3t5mSN%2BvBOXlV2QvE9HFPaxyiLSHYWFKC9A5YEstPKRwrVovilrL4QtLiFv6hkXlfEzaFXDaBqW%2Fi5xkUtnjOQyWSeKz%2BsLMkyV0lG7VcLSUFRxrZ5g1GJk6BDBoEW9eRPTqfxkToZmKBRHqjYpqiOI8E%2FMC%2BQBL23F9a5ALv0n%2Fjudhn4NB6kduoScUcn%2BEN9KHxkjqpbbbyJXSjZJcXnATVXveeB006coPtESw4mc3CYNCHgkYdbTC16VIWf65ij%2BZ2KgXr%2FYIyh%2BjHddIkUwtKbXkOsfsv%2BBzOqQNhvjmyqCeHbA7oB5Nk98eKWK%2BVrCNiQwBTb5lmTXtRph9KR058W%2BxJhvo%2BXrORdAkjs9eSD6YhXWo%2FvfC%2BeazKscvwaG0nKfi%2F9jCZbKh3GoqowEd5nWZ0I9jrr3KG9BGbknB4kcqL3m1Epav0oVIH7n1zpfHMriMiObbq4Q4%2F6XQWyoPdll9wXYNFqiLawKAT3IPXmBzXYN1GCbOYd%2FeOrRZEBf58YOZ1yeMTZwjcagIeNxKa2a1O2VYHwLAoBvbHN35d%2BkCeyXZ6xQiLnf4iPufPF6U9xHwT64hX%2F7ABeG03cUY86147UqvmVtk63flECTgDC1oNvEBjqkAZ7LFf%2Bd1jjPxzoqnjv%2BGhaz%2BZIe%2BTuL%2BgKhKf5pYiaN9CK2ymm3YJ0ZnmmwuxxM07T9xESsgfB%2Fmbm9F2y%2BsLlBmsfsYAb3I0LS3OyooJjp747fz6MeNLDkIYQIx1I3zS4FPmzk41FLciIQWSRxDBY0BNSm4ojpDlk0QR7U9qvkG5xWEcQhIpd6y4gBF5fNxob9OU81KxAsdz8WdnqMIdDlyP5G&X-Amz-Signature=762d513ebafcc2db81b80ebe6f4fc9e7636790ab91f8acffe901a2fd74d628de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
