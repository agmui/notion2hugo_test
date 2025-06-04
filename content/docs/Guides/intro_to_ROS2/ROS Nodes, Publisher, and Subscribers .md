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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=76d11304605e65f2a724cc1c71ac94c42fd61b0f1a83a32e85663cea9e80289d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=0b5adb190c82a34a2a6378a85584430bbbc704a18e5e44c7792ca24981581dfb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=f13843cbdcbbee1b1124489477b73b16c7d9edae79f84e4accd33aef67dfeca8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=737306c1974dcc6f3184fd66f689b2ec1d0aa826465300715de069a904b30435&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=a747d18cbadb0b6b3d92b01db29135d9ae271cf62dddf17e9077d51baeb4a0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=8ce58bfa3617ce183183f4994d0db0ae7cdcb004fc93b71af638feae83a1ec4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=d63485039906aa702bae1e986cc154224cef2e8f8490237a0564b1c37759a823&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQFJEHF2%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T110751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIAMWj3mS59bC1B%2Fq0K47fJ%2FObRNL4dx0lVo0TLkr%2Fq2HAiBQONqru3r7lP3EiYGUmVWr1wlohtZW%2F3COmb6BbPTi2Sr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMGQHZ6UI1MgLrOQHfKtwDeu%2Bn0DVnIKKn4puFTk5R9TwCCjNMgQDt8VAnCg438pbMCBf7KZ%2FLx%2F60lvtxzAPnJHFVxnZ0xjjqfH9Efo%2BOi4JBZILWQKsmtBloOBOSv20uG1f1Yj8VH2tr2tSnxAi5BhBuJT2a9OlTgYArohQE01u51tA%2BuVZ5wSOoqB3NG3n6SD%2Fkcay2rdJX5%2FAPF5ArnAGpxqkAB622dwjuiZEIvBGaGQXkAwO%2FoIBKNSP90LwNwWoy6AsrbQBZBKKT2ES642MjGn8QE%2FVgQ%2FH0Pg6RLtpfP1Fh7r5FB4Dd6et87b9UtalsDbuTApe%2FoFfsIK4pueBLLrUVhE3DvrdPG8Yr%2Fne9dKUcUaboaRAIo28YwVIbWBrV0LEH%2FUg15SigQJ39X8T02e1A%2BqjCk%2FJVt8rs2bALafRtNu28fkGj7RtkU576adTkBU2MGu7%2FF5s%2BpAIu2RsjGVyCow2TGVL2hsMlta6kIdoLIGzPi8f1461myzqStWbFWoVU5bSnkRXGbb3Zhme8dtLyJ6CFelVl1xmKfpsou1GXxBDGiFb%2BEIJOqNhVBpfLnXFBM93IHqpb2XL912k5sdDUY9%2Bw4W4aQwk%2Fe10vCZuKQPIzwprwC7%2B2RPc6QWepz%2Bl547mem6owxdCAwgY6pgGv8WqEckgG2VGMmVoMzTVgCeqidG8KNGsT9na76d9u%2FYjH6RrSVKoWyE6wfwYPgcW1S8PEugUfGjmGc9uGvbNrTw2Gp1sTo%2BdD3d4Fnqeh8iPqcrtURvkaByi3%2FhTzSDKicbyF7gJ2pRRVZZ8aSEOo3ug4AU2ZS9zIsqc2isWlgvMdI9QWbHqIUCxIQsPFgl1Guhi0WVnt7olR0ZR%2BCU6tpBHZrUSa&X-Amz-Signature=efc648782b002f215589c1803d4157fbe3c4df6eb691c458c414ae491eb9e5e0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
