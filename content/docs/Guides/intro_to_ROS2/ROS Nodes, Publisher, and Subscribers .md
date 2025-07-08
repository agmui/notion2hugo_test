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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=e497345f9f8c0c675f56adfc612a32970f7174c9906d2ca1538daf16050f00b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=886d6ffb23f3007a985f887fdf2e6068d2ceec0dbf421db7aa44505ef46d8986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=f7c9768806147be168adc1f0f80bd48b08ca2c7e8eee57488734376ecc14c4cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=5a717817b892a99f45ef712f2d9304830d3ea4c9e37cf9a6a0109b6d8c1bccf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=8fc513fd03a0bebbfd0ff8684e1747c1237597aac6c4431a027bfa040479691e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=017756f37668535b901c1ecfdec194f73adacd2f578900be6dea3c85ede78ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=30b38ceeb4b4e7ee62e7bf1029179c6501fc95fb62423c094fc5d5d1f3bcc176&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIQPYJCX%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRdstPZFVPSjZEyo0aYFF6r5rBDmnGBLIh2y6APjMLgAIgFZeaIsX1oB36jL6M84VaW3pRZQdrof5q2xTTyJmbZ8oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFyLAbfTPoKn1Sq1yrcA1rRHDPMX2mcaWPbR8pw7pwCk8RJqCN9yzRNeKITuFl5d9K2iz5zBE4psISPtPx5%2FITO0wHsPV0xucMEum%2BK3fJLyn62c3ijznzh8ZG74M%2BwWOqh79zRR3ujg8vQPzMFeLQ2SPXxjgX7uUlom7bPqYt9GLFCbMxMQEjz12LiLn%2BEASjMm9wrwJEmmXmOKe8yAxqYlm3vDnP8ZC3ObqiPAOW9uri6iCfFNAE%2FENLuNGcV7GGCTPKnnM1qfM%2BBzAl24akUioD%2FV%2BA4NssywVmckJUljLXCT9SnD22qV%2BfqoJoar%2F0UacHttm8CrYiXmr7tlWdOFFpQwWnNaqZxkRlYuV1mLyM7dd52TteLkxs0Ag91tTb2L2EzhmW0LHAjIfAnRTsCxDLwxznxlXk9zAVNt3grMqInz86bv1J3LftuB80ULKWZE7fDkVUECz%2BYTL3lhzBSq3%2BUIRZYQszek1AlBxiQEEJ%2FkuUYKJXr24bBJRnkrAU%2B%2FwVWodH0cNCLhyDS%2BSe8lI6X5uzU1aHe323NBOtKhmJ19%2F5U6yYwGdAk%2BhdyNh%2FCmuhfyhA8o%2Bp%2F3%2FNhDiVNRnmymd8z8Czz05%2BKFulxmRm07xMjiUBapncGRQmNh3HL9aSm3HCNDsd9MPeUs8MGOqUBN4S6GTQJxDCfV%2BXX%2BQIhxgU5VAAxN%2FhhslqcSz3fWaVJuRJX8n9Va%2FcwBzI6O%2BmU4QyLtBqP1oxy3IBbOM2xAFiS50rMaW2czGIc6zU5SP1%2FQCywU%2Bvc1edfKDfJfV%2FT2j3%2FIrkFBLzq7oDFieF98ORqvkhK6MjWBu1xqWQZFpv4XWCxtiGt49c34oQAnKJnv%2Bx1mAGqkIHsYnKCz3ArP0k7qH9V&X-Amz-Signature=0faf0a0e83ef036bcd93e9ebc5c909be2424a74e4f8628422ba3b5d6022bcb49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
