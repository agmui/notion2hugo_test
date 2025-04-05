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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=084e8cfc3b8422da6d33d4ac5d7428f2254d312727d09986feef68f55a2e849b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=04a96eb2a042c605822eba61b428934e85d8c16b6c3508e223efc8918d8ebe3f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=fa229a847cc5735d65f9ad59e245475dac971e9fbd20fea5d8df197eb1c2f8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=53d3543eecaf701dd32149103e596fc6dc27cc051309203d851730f32d562950&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=7b0d25baf2ad452dbb96c438a857f8636db157f25f8ad22b9a32f1cd7cf17ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=f26bba20df70f855e4aa3226372e36cc36a26a67241e4d7c41821162f1cec403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=a1447d0b095179a2c2b6b82e5f08ea672f5142f495e688b6c4cc80a40f515849&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN7TYBLD%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T050813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNDEyCBCUYJ3Xom2XyZMRc4gokMTsDmqqQeEA%2BF4ttxgIgQyDvB6YUEsfrc7av%2FbNZPQbMGYpnJqrn4xol3Bw3nvMq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDHDDJkOf8PDlmzXplyrcAxucNHkAsr8G5tp1%2Bv2g7u0vFFcup6CA6zMDmq0LbeHCsyRNvofScTAAGHkhBVk9UrqvinuWlJMyFO4BLDS762oAI%2FSGT4f7uX6XBzP2MInn5GsJ33zRBVZPTLsAwJQgUpTJzMZK6RQ2SaCQFEoEU%2FxOCVghnDLDnr5xqUJextVzw0piWjArDZPts7MuuybujIe9%2BpGgX8WiFIrdaJeKNRTw9fle3GfUH2gAsofN2hRX95QIOhrcIIx2NDZw7Z5yRPNLRr9HZSm0Oy5eo%2B4j0c%2FOQggVjuBuWDCF1hTYEto367DllRJvbYE76V%2Bn3iwVrMGF7c%2FJT4G%2FQPbSL5YvJ7VoAAL%2F93%2FDS5NP1%2FNEUuQqRC4bsuSXZlmOZiOEWmTMTsSLqabc4mATX9GQswYwTvLn6no2zzg9zecBu7b4Nqzz0ImwOZDYQ2xbRN6CzD4egY%2Fj4%2FQ630fdS0XBjmQmxH4JW6LCtt3FUTuXCO8IF6nxz0i1Zb5B1QwDGo%2FbWziQ5tquGDJWXCRnBGcVw1EBUG661VQjnd4Hln5diy5n7Kg1O8hfHr52%2BdNBaA1ccZXhFGPga19qZSUYHx8sDugJEfhfK3siFjnmPePzoEL9SHbnnqjZ%2BYuQM2qd9zjsMKnvwr8GOqUBiBKpbPIMLYrkWyiDGuLvHDHM%2BGFhCw9DhQFepFuViSqMKFBJ2IrLMV3foUrZH3SkIZSQ5lMnd2T%2BkiMQPLciRbPZqHh8Ug2QOesKMnHItrDu%2FZq03B38ZebDPkoTv6PtzMbQlJ8AEs1Pyen%2FtAukNJs%2BkEuAzL9m%2FmXMlYlUzja8a%2BV0jUFpIbmvUtHa16%2FbbKd90tBxoZbkYOObLlO6WkMJkdZ4&X-Amz-Signature=a4c8e32fe8d86421700e1989823bd61b0341a536a62ecc43fdac59bf1e619663&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
