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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=948c836c8449e83105ad3a917e27b0254aef3923b9fdcd4dbf2860f9366613c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=d8363a3241939a2507852959615cc15c8762e61a5cd1577eee961191eae8cfe3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=e1cb7fa683a0c0bfc6d7c3ab0f099799fe86355b21c63fa1c6ca998300a96dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=49fd545a3541862b318c0724230fa4f7788530cb74fc31f964028d04e8e864aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=b54eba1d839ac28e740b28bef3312b40ebc36162a2b36c3b20b2ed16a867ed3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=c712f27b94abc64c8bde48ca11fc31162975ff9c83ef7953dddadf6b1d381534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=89823553a4050082824c249067826269e6c5baf084e2bb3192fd1d47998c521a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674GGKKXM%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T170812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClB4GQs0ftJTVSJVRj6%2BauaGmnxaiPScCNF7old0qYEAiEAwJhA5%2BHTGkPXkUb6cdkMSy9FdVHDAERWKAFwfF1fxgkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMc4VPqdJaw4zgFquCrcA5bZ%2FZRVzjFfOc%2FY7Yhd4BBybwaYKySr2T%2FEz2Vbalv8cFFAIlsFqrDCW9ey4mCJP9%2BkELBu0NR5dhW82vWGIBCah4e7ZUstr6S2fANVe%2BXjnXFVVqMtDnALVHcqnlXkKGppAPXLOHN6IOxP6eiYOi202%2BPuq8itLavBc2E41xwit7kYf8OodU%2B5dTM04u5uM%2Fx69S7l2dxEyuyq%2FSiEIvsgHhilU0rMRQcIPSXUXK9BEsp2xXw%2FIDcgjYswgtHHpTLgZsH2T5VJTe%2BAhF4c7%2FWkZ8haFPRqgnTw%2FcpLSuO3uW0SvV9t9kvKRUXmgFdqe8h0bU%2BBpQjQwi8Mp%2FOPkrtV6q0IBG%2BMmvCRAfMT5aX%2FKuAgD2UJXbMsmv3%2BATm0R925BJmAZrLwsFFIXRkljRxRsKa%2F36dfH2PBU9pj388O1zGIZqKHiviMRDDKXx5qxcvKGrkdEW5Z1q6u8ySTFt%2FxXtp0S%2FPde%2BLWU3Ky8QFnmoKSM8jafPREuGZOmchm6TERYSfaE%2F6zSicLb2aVIhpLjAUsUCKbhaMkARkUClmjp1XPQ%2FExqvtcEqn80J3odg1k1YiU5C2ijq3KzyacEX6bldEbdbGutBuOxXynrXa2vm8d7Q%2BUE9awJO3vML%2FJocIGOqUBzvmyrMHhlHh5R97vcSGuAtB9qalSJZZ58uwwq7jYM2A0xqIiPBMdK6wXJeXFe5%2BsEI6PTNjP50P9rauk94DMATmEutoIhmRZqngSvX9KlZtm3WGeFIFiEozrZIA9%2FZycOhhj7tz5uWbXdbF0qVutqEv1tjetO1Kahx3S89iiVcvLNHhZ7jl3wAK%2FYb3DUAWO4timSQ%2BaYY%2FhXch4riMu%2F1pPy%2F1J&X-Amz-Signature=b1d3d168653b6e2e700c3f23e6547e998eff4cf5f3e22b9488ceb3032ac2e3c9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
