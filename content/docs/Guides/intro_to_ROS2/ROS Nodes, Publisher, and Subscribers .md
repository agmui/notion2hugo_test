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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=18054531dd66b418a429e9bffc529a87534ceaf6ba21c04c20056a95bb2f681a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=95fee24893d5c7d70e7562374f8f9bcec20aa8dded4b71d4805c6d645e766643&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=4072eb1467a8d30cc436d10d604b81385759e587753e33ac350932860a48ea32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=3d2dd88e43072c9bc1af05630bffe3240d877e24437c56479a2c46ceed417d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=a9ad21cea3965bcb858f5ba425ac53fb25840ee3c6351c22cacfd14c7bad5256&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=c4236cc07fb31fa58041325172a419bd613ba99c0d5241fe2196e11036e29169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=a72470514be0a2432565fad682b8417cd2636ff90575247a7f2397e5d776c0e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UXBNYOJD%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T161056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDds8D7RQaTLLskwODcBydG1BottoHL1ajMcA2rMpNsvgIgLXQbHlMBfYuqgaVO69FDg7kUPfUzK3wuQnQUErvYg7gqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7aPoroPGxVTqAJWircA1lSS1LOd31fBCp0GnoforQGw9yn1ZhCS48ucO29wa4Wcv2NhZ%2F9VHY4GQ8cL8b4hCFny3OekIj3ADhyUI2%2B2%2FmqWPYEREszdOvHYWH4obKPCNhG9tRTvfyUec8kn%2BuP0PmaBI1hOxz1O7Uewd4y9m%2Bjbo25hFEk1prhfSbGiacIWvoKgnave1YYoAtDxmSnHZEDCwkkrCeO%2BrxQdgvdifu6oefgH3nVBuJAaLvShbU67AR7ZLRc3OjTKfDcwj4yy8Dn%2FFzN65eE%2BitvkyjkNyBab4PwGxIJRB86e3YmXPgqEeqsYWf9ua45T8NdBuUgB9Z9pXg9EKw2UBhzuOe6bppe7kM2lmh9wFFjr5A64QbqDvGkw%2FWyRAxa9a%2BoggT6wRB2BizCaNWu6OPHXhfVwKV%2F2dRcAu2q%2F8Dnc6MeU8F0Sw8bM9GisdxkxeTHh680IpbWRJ6MKMJO8inpr76M%2BAyYKKp3BA9AoVjCBUah9ws8yK0BBtRWQO6SZb0A5h3bH4oI44n620WzNVQj03r5pK9i5Xkr7qdnAGuC8mmdZbAn9c6ff4P6Xn90Qldemp%2BrmDTC9IGVHPYGtDYbubQLQmFnLm%2B9UvrSrMHMP8Z2TONnlJJJZGpEqpknUouMMIvRpsIGOqUBKbXUhc2nd56I0HAnxPlU9QY7zKpdtsPkF632yNhQp8PZYtFeZwVT2W4qTCliAKLG9xP%2BIO2fwVNNuEZHUjeJ08K4Dv4GfNSX2MzGPo2sq7gB%2B3GPYsVUlk6eBzygsI9F5VF6b0dXjemzon69npnU9soqdxN4Bn8wPZDlGx2N%2F1SizcFIWaWY4GQLEt07g4qDBg9J8bfBZlwvyjA%2BYtzA%2Fej3R%2Bn8&X-Amz-Signature=b2b477cf926f30bb62895fe69920d1abbb2c3c05177235af4b31db6dea726422&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
