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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=316b41c3809af4bb735f59fd6f7315c1f84b0833a39d541780321d718b8dcae5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=e678b696d98e34aa41ab5913f80a29db94f3b7b5f81008fa49911e22415a857b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=5a76a961acc70966ed1aca93cd08ca23eb0f1043bca88822a11f5aa8b1e75607&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=fc23639f04642a89c20e6c4271cb9dbceefb558cddc6abef31cde8a1700f6ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=099618f35ec067b4c393cc6beea985aa585c6fd8390ba6a0e9f2205232863799&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=b087058800f246e01d6eeacb78c9c2fa427a05bb491550317ce9d109e8b0ca4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=cf0d1f9ab07bea0e06cc78202de4d1326242ad2cb0739070aff4efab207b3951&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624O6MKBQ%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCe3igBtJtcCTLkjjoDXEUwksmIJmu0bdEeY58vulwtRQIhAKS%2Bd%2FMyT6AKJ42b2dDsC1siWDW7iSI6CopRGUG2UKxTKv8DCH4QABoMNjM3NDIzMTgzODA1Igyxhrwrlh1gAT9lxJkq3APLxJelvPI96BIgGc9TJljpa55BDvHDdNsfYLvzJYDIWV8uMKQMO4ovXc2sYkLRwSRyqIfFjmH1zXe6taPvPoJUt2ctsoA%2Bq%2BAyY9TU84xMnKHKK9c7leT3jEbjoVOTIYWNAAu%2FxsU%2FnjhC%2B2BzS%2BtArdEeWjTNVFUV5fO469BO%2BqjWl3tRQJ3BdvfW0wAKSIWoNTtfijBgRsQkGXmZqtyOP33%2F0THZO2%2FbHFZiF%2BHU%2B0f3uOabs2ZiZO1hbNXtUqixiqStWeLPtmZ0ZeTF6kpekoBKK%2B%2BkQWn8WGdaQM7BhzNUrIFKNvTFGnYo3cBynPvzCBlSXuktOMg3%2FyQQ7m7x9DEBdoc%2B3lVlckDTs6MX6GMyhqbKro9H1zhRlraa2iHFBg1PLC8VXdI7IFCgaMUL6D5OzpyrUg3WIxgPjeqLNxfO7fXvHob9LkucP4gILZ1mEiNRgOX4sWUANX9j2VkwIu9reyexAt6u6nNumwnCy6685r5WtVSyyulP81NWkEtXje40fNdcYUlusd4bPp9IaMO4so47wqXWjlqlpptBz2Q3K05eUg5E9rtUV5UBm%2BNKRaSoHSRKt9QoX%2FRG7ub%2BptkQDwQH7DAIg7qWYxxxvtpYMzoG5bz7Rj0awzDyy869BjqkARaMLtZfQ2lWxO2Vkjt0xTEoI57DtV3P4wSLqQdYTe3woFoa%2BK4KjwWRG%2FVIRMD3pFrQc8VN0i6ztPcc9ena0cyJcHFmiG5XJI3z5xonKl1ktrECq2zQBWktxVVPfIYkE4UBYjjjNUKbYVUt7QXYzY99j1NhuNFIwuUq9savgbwtCN5%2BmV1nn8uXOWf4%2FkIN2Hnd3J8O%2FLGuAAchcKn%2ByZh0CHt9&X-Amz-Signature=f9289110187b688ea07a3fb0593a1ae839c946231fc5d5625a7156b03106d509&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
