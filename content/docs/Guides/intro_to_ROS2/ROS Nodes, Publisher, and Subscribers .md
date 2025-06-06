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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=15a672b9b611702912232220e2861b4beaf928c9e3b26d902b2e1c4c6a86397d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=447c96b8ab9c2f650582e88fd7950bf3986455fbf2d6659d434a19a390af2752&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=4f51313461a242518e8d3d8b58f288d6eb92740c797cf5a6ce3cd1aa9ae1d286&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=257a507d831904d17bce246df351c63224f5db4e173777c299d77cafbf02abec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=5a652d9eb2c42687626fb990f5ecccf52c37f7efccde2822b9c2980ce016a074&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=c6265c9ed67f47ba61998f52436fa8a78ac0ebf31f7673570b372a17e3f97047&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=2b983fbd903baa20e93d8174f3406efc531ecc388a0ed2d1a063e8d2122c2938&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW566QZ%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T041557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIGgmual9zYpMzncBq5Hoo1PosuLUkVTkhKCGjcSSCMaTAiEAm4p7Q86YPCGjrmwakJ%2Fe7YEp4gNWg%2BMpt1BjXd4QwLYq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDAj4zRya3CIToqpspyrcA%2BWYmarvx%2Btmiqg4VygwJPodTo0Iv8fVnSR9qrOQNi3u0gYESlivclarWiFH3DkQt07QWqeszvTEHtxEa9ddKsMpjW6M2MOrrwh175h9OKnwW9gcLeppu5jKBleqEqlbHG7Uj5LTkmFU3jEgRmu3HWc9iwdTK5r2P80Zi2zFH8U1sQyifk9eG8JDFRBRCZvOO0CIv24956soX%2FKMNAJdQ6zgj3TQMUaG%2FkjtZMENa6Pih3Xj8dx%2FUG4spW17oAj4HPk8814G3x0ecK4TYIxjB%2BseeCJU1FLvOpeN6TwjunFdfYE0yOBwvUIBGZxKAD1NuJUDcs3lkFodA%2FiCXObW3ttNQxdhxtxiknEa8ASCza2XkmQfReLReY0AihevpFjZwCudnxqukZSOEVA6nwuvTMUxcY%2BDJsSgZ8RDLqrn%2FQAwr4YOiJDikI6HzuzrId56Tm5g9piWMRMxSNA1QufhMHez%2BuvnAG0vcG7FkWKL7Ohx7%2FO7o3vw8JNxPK9iJya0TfLf99v2hYynEw%2BHpwxth9X4JTWUlBYIz8qR0Byml76SxFnxGxQviG0o%2Ff%2FIY2sfFTrXdtYM4KD%2BQ7KgypP8%2BXJBxvze3t7khQjf4EP%2FwIRhWT9vgvD1OEKznwveMPPkiMIGOqUBpMs830r82hCLlcEfy65JPY%2FockPzjmtPKWSVdKQGcUUTtgr8cq2dYvWm78J013ypZFUK0d96oi%2BJ0%2F52dMvDltvxnJmwVsf%2FpK6n%2FgX0dPihFZuYpI%2BBL4v05Ur%2FOwcUSPihv%2BfX1VB7O%2BpcYsW1Ctpa1byLL6Z%2Be2nGj%2BvlXrP0qGxYImqJsjWqyqhDHwCPzmIGR7b94GYqCxHlMbU1uxDJB1de&X-Amz-Signature=449a3ae37526ba7d5392e17c387bd3bac3d87af42f620cfb1cc602ef3e9fa27e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
