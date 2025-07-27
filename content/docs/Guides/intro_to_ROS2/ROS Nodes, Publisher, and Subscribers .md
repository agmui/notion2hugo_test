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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=dadb55cdc9add473cf28301921c201fdaf8680910912c902e7335ee3c432015c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=7d02eeb585faddb98430aa070f37357985f8847125c18ce9817f883e58022b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=68935fe34af739d4a4cc2f48acd67490fd74831be0deeb7c92f17172d49e8cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=f25a181f8dab24c730a99fa200addc62e9687db09ca49590f7d177a2a64cb1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=22161c89650b2c8ad74c81ef1d34ca21dd1129f1706a7db8b66ea07e48c6b6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=e75aaaccb26fb5bdb3b10ea70b4049f0f4b0f9c2c652758ac5873e574c6dd115&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=dbfbd77b23bd9590236a524dceac5a17254596e5df6be1d9907d56d832fbf21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5UR2XEN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIB7D6eCnLWcfWQNK8ghFcOi5UTz3YLPnegwPq02Q1sYKAiEA17FrABrlZiL%2FA5kssIzM%2B746wEOD8AU3e5lKWQBvkKUq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDHKVlHjcz9VQdsZ%2F2CrcA9%2FrwmfrqRV%2BDIDwPEvDioyV1NI9f16Nb15uFzKSognhe2c4Uhk3ZcjVuO6XsuiAwoQg2OWcorXEN%2F1g5Wcyk%2FQXtQknB4f92a7Ul4tjzKBLC4wUKNGgouuBwFZaKF%2FzAFABABFTQ%2BrJ0MkKcSG%2F6jqPkkjm42spLvT%2Bx5Hff1yJKtxktw6Q2YSSlJj5hbfPGcbnLix58klyL0PWQNMi9exgrXIBwByY8OsOiAzVNHvmNzdY8%2FdgKJWp%2BQEnJ2DdB0VMU0oQxnDdrbsOofbaQ4t%2BwEqYf3da1U01axewy2WRoG%2FOBPlYRV5jc1qmV%2FhIDqqRB5NdlqA%2BivtD045W32hfoND80XxgHO9%2BQEMqpY%2F%2Fw67zdw4EOh3rjQXBPRoZC1FE684uVgZbmGXk9PLfrqYiaUOv4xvuMazmO7kiC97VhJt1bQBt6NZocrsuD5lkuMj%2FcS%2B4IT8ta98Z2jCK0dIlpUJsRcrJkHCjpm%2FC0Rh6%2BFm8VXNEhLgrSksoekxW%2BZwzwyzfQ1PuB3EWuJ7scArMu9rIIxDKoZuolwy8ORkpvNGme1%2BmAohUutvWvGDTMCAoq%2B%2Bwlo6qPx6unhDGJDicyzHi%2BfrSQrMnIBMCZJy06VXrYus3FGLMKvxLMPHfl8QGOqUBU9mGUv83FrETjlmuDQ8PooEC0pRMaVPHKgSeu7QuZtknM45sD2SNDs6lXPzZmNNe0OarZ4HRVFcNETyjtW1UlUIuOQRb%2Fz6h8nrzp9qFJ3fzMYaihTaHERrj0cdHugL3l4z04EmqnNtDL%2FWwaBDudU%2BR6qPHqlLOzu1Awd4AwGVSwJ22jIsPQ%2FIs5FVY%2BbkwQocLnm0fY04kF01UJ2hJhYGErlUZ&X-Amz-Signature=365255be31b1ac7954bd17b94d85cc96225611e86f491dbb71701c7ebe01a0b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
