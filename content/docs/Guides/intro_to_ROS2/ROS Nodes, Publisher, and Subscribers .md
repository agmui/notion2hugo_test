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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=696571486ecaaef7f980bb481f5522c0667d7afa38b4e238825691981411123b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=3a69cfac52519bd0b48523f94ef7feda500bc902eeb706a48937cc354d2b4ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=be2a7b9a6215161987bfaec2847f7b217a65a036fa9bf472ee1db03e6ef7b5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=26c1c149bb4721c4eb489707b0db54a29d1fb798bb327a1bbdf11c5ee342bdf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=9e1b10fbc22719277a7ac8383b0841c8f92c297282fa7e9680220cc99d6f9c21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=d43c424b7f143739c48c05df6c8e7b8e1ebb7815c13681f3ff4671ff9c89128f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=4009b01edf22fac0de37af67c59e4f27f13d22a2df1217b860b465bf8534822e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUU3KEMG%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T140654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOKABwkRN4hfmZfEZH8X6re49Fg2VZSjHjwYzhIQV6nAIgbLygetyAoSvdP030YjZEWR%2BerAmelhrOuCUdlYHgzdAq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDEPsFOWZe9ZAizBk9SrcAzAn96TAF7lSXUMwNo2gx0sZlXVeTgFs6vduy%2FZNa%2Bdqd%2FpOJW346%2FMqhiMLIJhTyRGLcABeQs72mcMqeO8BbX%2FOEIh77i12b4sQ0EFDl9oYWjR5s6YX%2B4ZCATX8Pwhl6RTM5%2Bk7moKvi9REgapVN4dWlvV58PZ2ePcP2%2BioZo%2Fu27l8b05c3o929y2XMd5NWXzLkGZMjJWioRr%2FyMAVSp3flLwNNYdZh%2BHGpIy93yN7%2FAS0jmW5v0FCyCiqmKoXc6K64vFOXyeMt7qBFdnui71PP0qt01Aftuc%2FTTtulPs2C23A2qwRNYY4Fs0pxYuj46phR999wIcfrd1wAEOZlzTnFIOW7%2F4WNxWhRZa36xSKHCl3tcQg7r7dV%2F7LPwE8LP9x3fkp0bPfMEwHXEh12nYuF3e6Fot%2F9uyUCDbPvdAnTP5UD7femccuAzo1CHQ9Qt0cKZu8S5ziwmHindcljBL9r0QFO4uvk%2BDuaAzZt4%2FNbs5NSRYdCIVCNPdfkJ8%2Bx7jN7fDsQ8bXIDUK%2B%2FM8fVw6NxsurtPRIHGSA7Ob4DHWArZeqF2KwC4vMi07ZCOubPfiV8VpkZnYv%2F6%2Bz8B1EwDKIB0GkugUO7khKgOw4CHRB0mEgHZBbEMOcb9TMKDMs8AGOqUB8ovr84KDDQTWZzqycfKD6RXwiYDBXIOfClucwj4ihIbKbpf%2FUFMtVal7NgnGdC6aZNz4xo97TjjQKKtIz1tqCivQz3K0apdi9sXJDQn8xAOvnQYnoxXKG142IRG%2BPVHv8%2Bcud6YLHb50A6rQFtF%2BhMI190C%2F95g%2FjblTGbsYG2WBuLzH38IfY0nsAd1pJgmoMSLws6wHMxAKI8udi4nGtWbfoGXJ&X-Amz-Signature=b9eaffc4c0f1b340b5c5fc7904d7cdf8147615d1c65b63b787c465a255ae5094&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
