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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=58d1a56498738628164fbd1dd36e1b8662caf6ddf46a13157542cf9116863e59&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=3d9cda99efb9304a9de41cfa2c2a3b83ae30662890e67068661b4e38524a5cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=bb7cb9a258d12b8f4bb634ebc822b66c53f0ea3f0d9a16897355246c79775845&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=06ce9021e8ec68453c94e59baadd6729e5396454e055dff92679fb1590aef36e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=6e15fcb4d48d1202bcd3c26b71eb28c9e6b88825265793cf471d2160709dd175&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=b3be720ed1e1934ea0a0c343d577dee87e2a5004c800095c7f546a37dbb02b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=1bbd998032d78eb09dc38fe6848876584dbd1bcc11b66875ac0128c47cf219c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCKSMAKJ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4eO%2FzD4uuNVaTxUp1YEUYpox51XhXUfTIGpn5Mwi%2B7wIhAJ91kWU44jvgmndRq6MkD%2FPdxAt6xUacwGoNVLiLVxmYKv8DCE4QABoMNjM3NDIzMTgzODA1IgzHKrKMzpmQhv0ldrUq3ANp85AxBMkEwRKrr47gv1YR%2FiDogsTF%2FiU9YljDR5ZxPt1CgIOigHaETqHzpp645%2FX22%2FfyVnYQqPh%2FUuDF1UMXZzTQfz7we%2BXexUnYIZGcyvSoBKFFtKqkakroDu3PLcBqdZ2IO4J2gPUAJ%2FiFDD0s10bbirxGxIlUwIvNy3rKi4EanXah0DMjDQgZuSXxxpPmf5WILzdE1sUWD6%2Fdz4g0LSoM45zJmjwiFFC0Lh4jRhvj9cru2Y8yIw6kOglO1w37SJd9PrZc4QdVzWn5xUoF85ikCTLNrie3KD44H2nZslNZtAFf2%2FSlrGEzKv3T8drZf5yjaq2L6%2F8Wn%2BoKO4zq%2FXD1PFJXdKmpnl25ZurncZdlta%2FxVphUo%2FDXPpfHME59kJJNXuvkabQRThLJd8MLeHoWnjHbTXwFTK%2Beh%2BdrkRpLl3T2fSR2SrxQRBQb7pq83%2FAq0ZlOfDLAObWTFHz0EyyaohSQm00PiLMBVi2E3tnbckBE9fJfOVO3%2BXkMNsZ7OMtft6rOuLkhDYYKEe4HaKeD61FcRvoo4V62D3GvULWNXp1a8KEFR3Aa9VUqabhKkPIaD5RZQ5Tzw8XDVIA140HX6TLaT%2Fkao9Q%2FOSyHj3Df6D6EF1FcPnWwFjDJq9PBBjqkAfEtLukyEKthpv9UVYKeQGkckzKOQKq5U%2B%2BV2otxA99BUpxJn4mMODApWtd%2Fnu3gp%2B6DUUxwejZwXNCXv%2FiHFAsVDi5Cwakw7aSXJtnhciQeuj88SIekPFUHNJkS7RBeq7XxAb%2FkHNNxGxgtiHHfbpMEpTBnT3JBcduD5CENRi19aK%2BXksRqnw3D9ryruzDPCgrJJA3evFx%2BVFFPTNyjsSo2%2FJu6&X-Amz-Signature=872000c68b8074d1c4779852ff26baf9c1aee0c946c3fdb2688e544115a45852&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
