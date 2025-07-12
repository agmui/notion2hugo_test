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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=48adab7ede9df38d9e6a769764991706d0ea7847b01ddb7748c620e1bc62f6bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=ce491ac5725aa757315b79a95ace708cc21bf7f32272f434c2096a66203af480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=b21d3741d0a640d547214e88059669b2a787b0a325426691dca90c1f3c535cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=e8a4784965f800f7e81fdefb915f38fc5717d3fc21581e92a5b37e2663242c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=eced12c695011b43d2b9f8c9e30f790c7b160bbe7502a290d8dbd947f731ef2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=fbff12547e273f6043fde8f0e8a2beb1dd1ef974b7cacfb9bba572a7e64f5a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=90d10e927298489707e1ab19585d74a27697e5df624fd7345b907956b9bf80f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633FKUEED%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoZ8ihWDVuTHUH%2FOneVGGNgbqW%2B1VxUHe8%2BpBnygSQLAiEA3gQTBlP%2BX6G3R9e7oI9kxjV%2FPRZNMDZ9PuztocO49HEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjg2whjRFl0%2BjPj2ircA3R46nSiVM%2BWiaKK8PBIu77S5yG0H6STkDXcxsCjztDa5MVYE4M1sSw9dTmT8hdbXSO21ZFJdRh3PxY0a%2BlU7416h8UTB%2Fz2IEdpznoHdNWWQVxVX0lG61GgZVdLGLp4B0UWev0w6%2FJudhfGRwKNXzUcVdkwz6BR9q87SFRF7pd1zYBHJlLzYVh%2F2cChZmH4k4K7iKBCPeXHcjnw9A2MQpJ7e%2FWgfvXNaiUKnVFgmpF%2FcIFxsOuBCkvWgbOustioRkspZ%2Fp8ELxuLK52tM5hjevwYUKM1Wr8j7voud71slajdVUFTt7U9mS8J4ajVfS2ghpgqJ%2Fx724HloNRGzxsViRqt1KLZ3t9VKUMzL66s2J5MO9qmTxbIJ%2FUFFLLWd0%2BIHGyuLKPdmcSTd6dQbv5y01w1zqkMB0%2BT8Uv7d1k7op1QmI8r4XUDDLRLJe5Os%2FCoXLEiSAE4IGhrYLJnJFRyDZqjGpUx2KpFiye9BOiipg6A2uTXNd4PvHwRgSrcEarTbgMHEAF%2FXw6orv0o78dbXLFNj5Wd1ss0R8RKXsjGPfQgco13z%2B4Lr1ERTQUTGIt0mD%2B%2FWNRPmPeK4rTZM5rESRPEEETzqjJTrYhyi%2FDVAB6wWjUOEzkcMNzup8QMOH8yMMGOqUBtiKP28LK33YHIpKYpw3AdfIGQkzjPQnwkz1nJLjAfyNTJ7DcrWcEJMN1VOsqusO9oe9ZAyxtwhM7DaXVRP7KmLeDe%2FpcYuCZutAu2GlIbPe09T5Tfx2YoPSw0sqNfUYPZfbrqp%2BxNtJ3QpM7LA9RLc2wjkaqX25J3QVuG%2BiADfxtnAbakfFPsU4oCcC8LfsSqr57n3c87Q4TT7mi7RiySTUShDml&X-Amz-Signature=4312039fd044af86064e465e28d5a20cb5cfe95a6f750c60b950914897942548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
