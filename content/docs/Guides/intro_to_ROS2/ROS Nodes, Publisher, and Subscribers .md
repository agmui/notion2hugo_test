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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=db401663085a69acda0f75c5e7f6c1f38542a7fe3b93e43096528e94a728158b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=6db91c2a9ffbc8e92a975ff97381db0dcf15e1fa22f3236de5edf8bf15db39e7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=6f16bab24cdbfd1a90f31f566089d3dd943d867de9d1329640e0211869322957&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=a585ac2565746d5fbae451b8201ee9087993838f542033fe85de3dbd8c5a7a8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=30143447c432d847619b4998d9ce41485f279db62ceb0e691346ed4396a47200&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=6ccc1526a62e3ba72187639c6c7a4c2bcb9bce8352ac4da4bd39b19d1b60a4fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=14f9f5d0ea177ea2d845fa5d67b02c883e2403f6008ba86117ace4bf0359737d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZY2KRW4%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T100910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHBzPoQH9kUo38KUaMfBVqoFzMxTwhz8tKqsTxIYWAF6AiEA%2FD%2BCJECUOrlJ1eMHmoijrXG93R5keCN3EtAtJTiAspkq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAOVJG7020JpsxTTgSrcAyDGjfazvnzZDmos7vCADlCcqDweYl1XMXr3Vl%2FdQWi5rRopoPkDyaUw7aZgAQOe%2FwbQFoaxvkx0ZFlGs%2FbCsuYzvNbd9uTatW0Jj6ea4T4qLawReYLoj8hGYYdjI57Ppi%2FawNUpuKnbYoCsEQSXf1WcsA0frHJfM9M3q5z8SuLTXx4Aaeo0eV5cvS1%2BOD%2FNWhAUP2d%2F9BrHSVQwQ5Ovzzi830Ji5pz%2BWwXzcxWdiluRvZsUbSbiDgpJXVHv0W%2B9%2F4X6pkdlBR7V8VGc4AwIsksh0s5zGh2IER1DU0Q1gfEVl9fDnCIq5DcaBVLrpf4DiOk7NkTyq9xaeuC5T7wMl3pGCMhkcHU%2FhqCCAh8T1rxsJMhyJF8PcpqyZypd27KL3f2F5bggN1xrKD2c9xLf3MpITKhfOLDxnEvv9NTKIT2hntQIDRv1FlfCe3vbnnU%2BKaKtTt9I4s%2BYAC%2B7bElHF6Xe2TSQG01HpLjhZiDF2BpNBnRlWpBqEztv2rCJZ%2BTihyVJKASs0gJtsO8wFJ%2FShZRdrm8sXDq%2FaKhPafDkzos24%2BMsX4IH39hNpQn5eSPjUfbRRWZbMSdCMj6wLZYUGlmlO6AW8Mazb45XZ7xO3ehJrHtwb4rWft30HyzZMMv1%2Fb8GOqUBTn6TYB%2F0LO0IbGSdf4P8YUdNYU7yIRigw%2FQ%2BA%2BFY4ot10gY9RJT70w3SUTewFzTebNKogvmCn5EQoSWjwOTebLcPuiZSERUdIrxUJlXHZCi0jQsZTD0RihYWyTJJvJN6OptP6ylKaYWngEzZAp1%2F6ZKNkxGUwmYkPYrU7JEQey%2BMVWZk7XQdHGbKBPLYmqYgHRcrV1S3ZOfh%2BSuZUDdwrJd33zhP&X-Amz-Signature=93a4e34009407321d491d226389d453f4dee04cff0e43ec391f15940603de6fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
