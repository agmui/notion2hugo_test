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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=52f4cea886169ebb8ea08625c136d1cda88ba83b916350538345ae4684e55749&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=b350901d0d35c6862c0b76d88fab6c37583db7f4a71cef941951ca8234333043&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=269123088e57325c9cce24ef0fe9fca9baf687f593594f3294b582394ca2074e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=43e6be032777420e81c5330ab7d9ac05dee2269ac0b1f63eb1fadcbad74d2621&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=3a47c4fe2252f4912e2f4784166f1b46eb2fc13d6a3ed96c6dd95494afdc7a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=4911bd89af24a6f35ad7045b967587715da2813a20ca236d2ce7e95ca7570c4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=aba7fba9d3d512ba55f9adc39b623bb021c2fb77debf6e3e6b5d6624bd0e5203&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXFJ3MIH%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCICsE%2FuB8qc9wtJvPi%2Fnhz%2BQHAESP9TAuD336f0oHToi5AiBNOWhdszKAQblxKxUxHNQnKjvW3Aqe1CLofXnqu5PkUCqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtOyq0AqZzYHCgHWaKtwDjWBYd9N7XDzskYrx6cTcpUOg%2FIoTkVUFEdqDm0ajGe316hmy8pzYA0shKFgrJIJ6TUgQzuHOFjnHIOj4gg8f7iYGokeRZImmjYvwsF%2BD1sB99aafUqY7HUSlVipaXR7NcPPnhsjWNZ8Mxksg2gx1kx5nnrYWu7Ta5EQhjGOkiqGQNRw3DHZYUtS7SI8RauNLIMe1xK3LfyBI2LGozlfqvYL3o1%2BvZnR7v63dnwuCpByypsIK09r1oIcm2qBxw%2BCKJxFRKdjzzWjkynTc7VxY6EVXYFV%2Bjl8ACCPV0kbpUjLwuuCntrkYjW72utXgrX6XFX9Z11IcBeo%2B6QC7fvPDb%2Fww5LwXXOqQoNM1qDn0blA%2BXm0Q3IpVVkY0vhldW5PJed9OJxCq9y6Kmccxj1GU3IgUXktJBfuEFRl%2BwoocZPccLMY5xYRz7IimQ6lBzr%2FqMk70OGVr0317s3mvLHyFjAuOmEuMm20QG9IW5IvXVsMKtwnDwvotOaUEKzl3IZdV3oYfFG%2FrzrgO1UTTEP9VyOfhdI01gZsY8aHPHuYdWnZztGVpSPRdcS0qD1k7J%2BH8yG5OD51siWCWYxn%2F5maI1gbhihu0IEUwv2TGXoVa5eWagvFCZH%2Fnabqnmnsw2JOGvgY6pgEkBydm%2F%2FAqX5KpkDtbstMaRIrHDDGonmmXchH7rVVX8ceg0%2FPzjf8e8%2FHEMXGsLsL9SS4xGGYdiHVQNk0RE2lmR1NFln91yaeq7Iqu0AXS97iQtp%2F3fOH5Ix8Pm12qdRav238g210vQ8VtrjHroeiHfCCxSmXadNKCkTyrpgKPXSqsLnTEq8Drmtp6XzViVRrq%2FfwoFKGFObEFpIkDibP3mkgDLOE2&X-Amz-Signature=6ca86cbbbc5845108941b71a65e93f98652b053aa9d8253c2b742abd5b82e0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
