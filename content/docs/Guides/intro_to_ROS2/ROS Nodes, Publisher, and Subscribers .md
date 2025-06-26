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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=99c1ae39f03c24324f8796131b0b1501f210022ccae533c35b2dde79b1366585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=8202e2411dd6c8fb943f1c952b404b551386bbc5e26945045071c6240f7190ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=d0093ddb1ef9b9c538df4c5212d76e0aafd375c38717d24317a85c1c825c848c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=b967559b621a6527c0507ef0f383042295b436535231299f7b738ad90c04f056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=44066dbe96a17913c788541e23194a65323eac3dcf1871d03d42b2b3ade20fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=e8f08007a0e3006fd3fcf36544ff89ff4896e3f15780cd0fd05f7790128a8127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=18b75723fddd99911bc940e09898d932a167a4d9c51ad8b78cb7c2f77d744dbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFCINFX6%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIEZ9CEQvptRBVT37%2FWC9Ji0XTu9YlQ6MsPa%2BuinI1CiaAiEApSJmsqyhmVzhnV1QEP0WKVCs6btS2ER5tSnr9e3%2F2DUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDKNE0m1OiEa41uKLUSrcA2SNnDY22sAFJOzwwr4I2vwmpCIg0ZssZ%2FC%2BpcOIiwOxVAO5cf17LdXEYpU4BY7Hkeptz68fBmYGz56KGqhIYiYntDOeZAnN4L18M%2BYhBR5Y%2FkqQ9DiKF8Cd2gPjXSSqoWc%2BWAh4sIbBW8ApqcQvTWa9zmD8WncO8nFGRqzUxTjiFCAa8PynDkp48V%2FhrU1Vfr0%2FpLI5vYbAKL%2FRjMFvgcgQNqL8pI7ViuHAdw1ch8XrinS1IAUSTL7U43KW%2BIUFCymWspmVLVPTdlaySaanKJ1ZWBSLKC67N8xsnsaHQUW1ArMJCvUFssIIFQADDMDmnx205n81ss7ZgiZ%2BvqNc2wGiTlDcWkFxYGF3NfEA7aPlQmxLU8mxm%2Bqhhs6US8x8HxiHU%2BEnx5%2FFXRgS81vDE1tGMeNxixIjGY8sBwtaOPNrqPilcgS03PR8FZqkIELOVFuc%2BaO4frS9JQd1d%2Fh6OKcVIGCNHCoJqRhWW5Cq%2BQQFUhk9d4r0uEWjNPn8LRslUiGtDXkwoDOstRUechOO7tgtD2dS95K5cDzqJZBjOXgwGnK02WYef7u1MiQHowv7XECYc80KX3kPx%2Bf6BOvjWDQ4WK%2Fy3bPKo7ZWAzfdK5HRHjP%2F7tglIcyJitnrMM%2Fy9MIGOqUB7A2LOfamamc%2BpKisramuXgX9d7nJp1PbUYRJ%2FYLDHE93J3s%2BxGXGF3IWO%2FatvZdrvsFH3VbiO9wS8Gfyfh25EZmlIVezDphkoQD4mw3u%2F1KWDjEo%2FKR%2BbrdCmCFyyxYOyUfWwB4tWcmLOofeGnHx8%2Bs6ajelRXEmE6VJclqftrFrVSRqSzmwsc%2FXp0IqECiTOF7Oitq87WU7kvOKFsI4Yqy0cJt4&X-Amz-Signature=7a45fa3f895a99827fc9b2a1e776ae5747b6be6bd3a9bbe8ae3336818bf18da3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
