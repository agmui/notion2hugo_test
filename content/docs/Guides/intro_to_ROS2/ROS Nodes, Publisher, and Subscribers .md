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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=19f97c52574de943db2158c38b49ec5efc758aeb4be9934f37a8079ae790b58f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=1768c16eb3c1b7dc063d4e2b05cc8570dfd101f7af8cb7eaf248eeb120b23b21&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=4e44ff86e97b9e6aac1fcbad9ab5c57ae23943607c387e055fdaaa9337656c5a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=77006ab131ef0b8c086a4066a5625d2b879597564a16ce5285e3e011041edb1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=2d40452c65dbc701c890118942a3df88d014564c6b180b10673d87e6f9aa3522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=97b1c51660af5c3b91aeca5cc11769d2bc05005696af257fa765c9d6a05725ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=faf67e2c4d59a92b017be8ecca2010b8091aca737e5ab3d0499efe1e3698dfc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3PG2YVV%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T050209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJIMEYCIQCYkcYKHsIN6KwnTcKQ47PcdCUVI0JG8d6pHIuL6STIKwIhAKdh2hEeLNN3EEzb%2ByGtkdOkUTvVOWbfMuOxgUulktkEKv8DCG0QABoMNjM3NDIzMTgzODA1Igwx4NFxFkmfZsKnI8Yq3APn6m42GJQltS9lvHyr9aE9QkEVcEBn7SAGZg65JpYEmwSeEpd4s%2FxhnwqCAIz0hTFUx1GAM2pGI6DNvtPumghfA92a8nEBiTmedmNpDjdm5aN43uCz1DHnJoOjYYxMd7q4RRxJN%2FjPvAnA5GuNjkjIh3stJp63fa2xBjwCJORbB810GP1ULzEBWa3c1WhxxXXDDpY2Y%2B84OjYCuaD0koTOvWKRipZwmzJqq%2B3s2Yn4jhi9K%2Fm%2FhyiSpgBdl5FmjIloKTQpbs5TWIvPErvlYDdFPxZHTuqUlFouE12Zfp6CsqJ6YAVBG0l0seXDnXlVdLnn2WZ54UlZaZeGgvPL3ML0oNVyofSYHYlX87WWJQWYPoOkUMnRgXz1vf4Wq%2F3VyrzNc6RL2dBgzR5xnwEEoTuIaAm8ZAR2CZ0U2%2F8ptBlUZW46ALRwopK0bAldFGMgDDS4%2FzcvaFAWVS2aFE5zgHkD36fio141A0Ro2uvaYQ7ORjM6VjpT4LIHZR7Y3g9A1frL0rr0prrXjbtwOlVkAgB0T8kmFNCu7EcBl3odLV%2BfqWM9lLNcbxf58Hj8I%2Bf18AdTWB6fKJEXxC6EgCq3p2KaG0q5NRYL5hbv11inhhWb9PMOAZE%2BHFfZAFv1FDDfqLS%2BBjqkAQvddjue8OoUKHM4d%2FUUMyYZMih5O7PZXm%2F5NN3zPl3Vylg4k7WoUaRV5anGBIW1fEwNXUzqrIEN33SQaNpifIJfqP9fvuUHLV6o6dzxy9PL7M%2B%2Bx1Dew01equ1bsMc07hao0rDQg39D8IxTLYyUV4U4UR50q7cFl%2BVASPYzeNm8pApmR4wBU%2FkCHUgIv%2Fp7l76FknMM6Pewazh5roOXoovSW%2B2i&X-Amz-Signature=9c6cb9980ff8559613f28c895f16a37e88fcb55020af2b1d90aea18b8a0437c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
