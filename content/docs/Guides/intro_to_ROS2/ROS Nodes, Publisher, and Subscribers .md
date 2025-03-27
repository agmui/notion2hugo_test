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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=ae3df8484d8147c3f447ef3d73758bd3bf9a81b3c2c97c15a7df681c2e475915&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=8255cafeed9d56177eba068049e7b5ada78031c96257f7ecf4e2a87fea766b94&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=9864e371a13756d34262f4eb78d25758b7d3d909ffd538275ba744dff16f37be&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=b20b2b75b3bc63198283850a193db6fa3c2c4870a9fa841a524976a73216dab1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=68f5508bdb8a70533f8e69dcabb77872b3388a22767c2eea26c5bdb8b27c68b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=78e67189b53f6b1cdbaa12310c5ec6d84c923017d0e79c8a31c6547f95e596df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=bac91b9096dcd51acced82b34a8975349dcbb0fa159a6c358f25ee66bb4e5a2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP4QELQ5%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmkl7%2B26%2BKZlPXIZsI3a0aJa3jrtn6nqwZuHtAYCeCHAIhAOH%2BlrpApSSFTOtwhate%2Fz31qE%2BeXDU8ix7dqGXS7D0MKv8DCD0QABoMNjM3NDIzMTgzODA1IgxnFSZOd6G19PWL458q3AM2QJ0D2uUAvjuqbhn23WSUXy1QJrla6wSHIbX8Jrgg3GSr2Z4DID2mIQz%2FaDVYuXZgENOIZxAeHuOY5sRlch0S5Eh956EhSR5lz1RzhFFcZz4P5P45%2Fjvu72kG9%2FpfLsbm8YipmaOrB2AECfBkU0TEvdqeHQ1WuMyZo5QDQvfo4v5DWvsMQHORBHMFTqov%2FGtKd1HA%2BJjss0LHhvtUpf8HuuytviJRLuZD76hefzcq25rA0EkhPF3A0A%2FJGbrFwyWkSv9ZXQWhz1HmHUDyFgZ9IbIesKFdcyc52e7NVfkOMlzkVQ%2FzdcYuUbtRyzFtN%2Fzdo8tDH0RusaaV0JgdAfv9nQqqDou6h49Vt4z%2F7sS40bDHnNUnSmQ%2FAZ3H5VV7HHDiNuKtE%2FZnDdOazIJtVbGcIWx8zqG3TMhOpyIVjSEpGrg8DQvyy%2FGHzOxxwSkth%2Bmp2NDyrP6iJF9gM2FWMHsqUwZdo6Ob2DXxUJ649Ws4RKpmDsnjPZWVzqqv8jgdAtexYmL3NVbMkBHlbfM6i7x6KE2DIUgNS4XNsRNFDE%2FcBCt7n9uhpeKuxRUN8I2bThaa0NRqXoDWMPby6IhkwDgdkqG9bv8oCWe%2BFn7ENJUwfPjKYoz9Sa%2BlTnGeUjDppZO%2FBjqkAac5JtHfBQrmfScIvR%2BZm0Aa3jSEbAt5GV6UGeKOXLKw6IdUlNheWZIkBRYGqMGWKfE4wLNTuuFK1IjV5gIEH0xUy%2BrU8HoLeJN6KKKssk2c5uLDrET9aYjRvQUxbA6OuMeEk3%2BpbGNPHBUid%2BjwRjhkWqzDAJwCSXRahhRD6ewmElTm12RdnqYczspk%2FXQ2AAu9dRwJuQ5F1Tzggvoen8puOJEh&X-Amz-Signature=6cc3a14da7592380e600bca25b9a0c06e29eea65e4243f20ac8e4c6d240355b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
