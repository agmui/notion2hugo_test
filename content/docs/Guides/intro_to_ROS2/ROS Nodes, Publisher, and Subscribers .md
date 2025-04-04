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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=eae3901b834174ffbb360d0ee0943701c35070d073f49b778083fd6581ec5f83&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=73ace13b3d15f472cf582bbf8cc59d7a968eb039768d177aa7478eb2de4c3109&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=72a718b7ec8091ae0447c15f7a838e5f7e6b0da24f2aaf5fcc0bd7adac42c64e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=488522c2fed64233696e9099a4de8f9af01f540c6c1a5df9b357301480b5d62b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=bffd9f235158170c3c38f14a1eff7233c75f609b87a30c371e5d608229325b69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=f6dcc733782f0bc1925a8eae1e57af4e8b5e5bf85ea9ad33125476cf1d8095df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=59f54bb829d017377f63677c9b5b9a13ecc98d7b28d13d2b08ff2a4a76cab45d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTTBF5JO%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvJjL08vcKBc9forkElA41GUiOzI908N8RUw3nCyFGNgIgZKIJ%2F5daxepyGWl%2Bvnyp4eMmY4EW2cxtqB9DSSqnu%2Bgq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDM4Zv6gDe4dFyFTB9SrcA1IDUPBDyRLlb03oZIWzZ2MPmC6vR1MV0n4NtefvLQp2USvJEEmXS5alC0mX9coV2Y9pxEI56%2BM7f7psls8O6pLcdL3M%2BPbD6HBtbl6XxGIIebUrggfZLOmjkTCSp3VldQbOxywmt7pZU1sgyVeu5Ln2kuFeqc3ILJg0pYghbBLJG2Wh9bVoqa90p9EjRghRYhmXTI6Uzu67lBBSLXcuRGfy8bfO1oxidEmke0OwqpufjXhDL3b8GgbQcwq7%2BcsnCX4cQWa%2B88klTOFh5x7t1ItONodsyK18QSUSERvtUvHfP64ClV95QdvHo2heLKra9s2oOvl%2FO4sZnkS7ISrl5oeCCGPL4T7MpEZqLYUUD7UkZuaDfxNFSQsqc2U9KKBRacsns7LlMGw%2Fjt1xGPRE%2B4hvIWX6QO2MkRZNpdYKTN73MuDGrwMpw758g97jFqxjLms5eKihJAwhLcL1KI6UdWO44tKnLsZr9XoaRv%2Fm3js5fxFCQwpsFpxpKWhMnPRZ6ItQFiQ4R%2BXmCw%2FVqpI3DiCiXERkGo207FUg4N9f6jKcxhI6JngyzVXyV7o3GnabBWk0jW2WVR3fVZWgMyMYpsI802Kv2Jmyots%2FPjnZgX3a9ICnHxOqU5kcnEhRMLyiwb8GOqUBWMngUK%2BHClLwyEn2EO6aOAE7lClRaT4hkWOdUqyHrc2Y0GOnn3XnV%2Bu35GSvln2TDS0lRbgwOkQCZczhX%2FZ3doyR1BFBwtrSLqRWh3mtdWKZD1AI9Yok%2BncDbLdlJ2DQWEVUPmnJX6uTkSSq68bjdPXnK7sutvWB0PuK9TouB0qVNbqIvqADepeGhgOp3Cl2u7L2yL7m0gVHrUUW8JLw%2BVloz3%2B2&X-Amz-Signature=c9dd4743bc89bd09f3ad119155255a16782927379676dc394315b6b4a7646c50&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
