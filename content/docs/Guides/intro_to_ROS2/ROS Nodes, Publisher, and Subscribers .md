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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=86c6dcb39033b4a4431a1a1818c55868be5a97c7acfc56e69433772703c68cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=b01433de02da3b9715041667d7a00235de9402ac7832e8d6ad34b67bd47481d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=f0b0f73b00a6fc185222fdfe8831fab3bd841fc6be64f1cfe54f5af0f1ec64e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=76b242a21b9d08f6c145038458f5ff169b45c55d77b585540538d65365d672f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=40ea6e134399e6f8e7fca8cf7d723bd4820d372b4e50d64d4a124d0f18394297&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=434a52d477f4c264cb9ed39afe4635dba7d9eb04f11052a70e391ab8680e3cf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=b794746969b868dc3f1c6c35b4d92279b5e1dd53c4c4e56f7bc94800fc69bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUNUPAKX%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T230850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQl%2BcIEZzHam%2Fv%2BY9OzPkzAkMnI6nArp2sOpIKxGel6wIgVrVQSJaXbERjl%2F9zjGECciJcHkwztCvT9mbaAVyeIfEq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJ3mhMRVzzVz%2FHQQvircA1Xe5lLOcc6o6FMphufrGLxf9y753mnf%2BGUMyMiyuZ9yFZtkJnWsr58z87FbMZZFktbtslDzoWTfMGfSTS8kVYpYmsBIxkydsr1YGhgP%2BafVE9bWfuRehnbb2aG5Me2ezuicT0flSNY%2FX1leF1dmv6SzKuly4GcTCl4xo6GNU4Efyi1niwPJXuRSqfDumGxW6BDpGWf%2BVUaC41Ad9UVWqn0GF%2FqyPD%2BobYUNDky9ouD5S9WqCMngxGH7O%2B3phJOsrudj4eoPFsdkLMpOG0tV5qL6t4opLgJNnHg62FR3nFzgt61ZvoVlHflcDCh2iGwzIEqUZG0jXrSbkQ4Kkx2KskvmWpZR%2Beo6sEcXns68HePrW1yOcKs8itW4%2BPpfMn8PMY4qT9bjwrQsF7uKYUlm80M4TIeJB4WtJ7U93dHhZ19bubu8Kf1eQuHGUvk0Y%2BTLnyWCdueyH0MP8riXgPQR2Pj2c1k5ba9KUti%2B5delm3TaefS7wEVc4u%2BD3weLRszHsO%2BOrmdGHDnTPtLsIY%2BLYps%2BbOETxH9qAB5LqOF3MssvQPJxHL%2FPDbIP3M1dR8Hn%2FEzH1HAZFg%2BAXrlrbkIq8aCgVXpNxGBJdGO%2BiWy4jWkYkOUByeOVHheMgaX1ML2u%2FMIGOqUBy%2BV%2BNeOyTHvJI%2ByM%2BNoPBQA83XE7%2FOrITCpA6agIkBXSXEq3PPdz6wWiAvxqT6n8Twbm075z5HwNdoUQ%2FXg9lAQSqumzvYErZyDGJT7yiSli1jbUk5kR9sNdoZXT3pkdH2IjBlx47w34QLW3kSgE8aeHJ0y1%2Fb0SNbpAatFUx66hjLQ2FV0WK4Qhteb5bL9FkkhPh4ISI1WxBbiq1peB954EZs7D&X-Amz-Signature=6581288df363e6f857066c8a6c1a094e7b33f8b5f98c6552082122b6b9c778e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
