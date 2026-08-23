---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=f0da6d0a665ade3d605fc16c811fe778a84568f58620d1ef58a21ee8aea04283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=943c474c4f25e4765ecfbc71750fa6166bf715a2f1bd36b3ddbc159009ab0534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=b4f36653090f3faec27053f5b903f5b842ad7077001684b208ec906a2682373c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=28d91063d5c6c48e892fcd6f36805d6e808486b40c0765893cef1fecfa532ca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=8be61a6d295d346e8b0cee39bb4cf3fdf5d80d92ea06a8c53ac9a1876b414d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=c62b788ab35028b9ba0a0c4893fdeaab6da9148250432d0d5736133ac3ef6903&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=6c6f13c334ec7921a117ef1e530b2776bbc19e087094e949693b1bc8cf9c2898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV5SLE2Z%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIDZ0i31PzaZlsMvqK7hbYalUfDagdmn3JHUQaqS%2FqZRbAiAh%2Ba9i7u2geSRtmshvZQP8UkmwoUTz2baRjSyhWS3%2FYyqIBAjK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4Oxq3f0LtU1NBzQCKtwDqxM1hseXJ5e9odKHHxX29BWQjbvDASfzLVqsyGoMANBPQAYMpzxCfe%2FdfOgN0pJCQXk%2B0EKW%2BBY1b5T2RZ3uYUvbkHr0DdTeus3ujSSjQP7vL%2BPMvILuNruaYQtRI8i02WmPUg7LzwOKK8J7UW2vkqZD0E2LXRUZrSZzTimnCr8rI1fVg4DMmD4la7M9SkU5ZwMRFLY%2FAFHkheT4fDkTruW9%2Bfl4sBPx7PiWWf%2BJxVqQtVGFz5UJBpw2aJne4cpTbrngIaHLVUJ0iziZkviFca2c1ELK0CYqtMhPM81YtV6DQbVOJNOKOJ9iE5eKWacrP6xHIRAcF%2FicXhWn0%2B3oX6R%2FqWKXOeijmO9vF8Ct%2B5GDYkmE4iCK%2FJ7L1x2NCV5c9X%2F%2BVI0VZzEba8ccX9A4MPLoAlqZOo%2BiGp%2BLO8J72Xi3FJjJQptYde9g3%2BYksoN9vjrfVLaEsaqt05rVCpppqb3imE4JStA3esyBxv7raQlG4XyI%2FxcTLe4EXGITJ5ntoqKBeEte4i7knZcUvlDGI%2FqlNjDrtOHoEWnwsfnGbkIXXTNPuFDH%2BPHGYVf2XhINqQE%2Ft5mCGKAHyA%2F7FvMQ87BP1EbzPZkZFewie2poytDd0HJgdh%2FNxyD%2B1q0w6Iap1AY6pgGJM7E9ipBA7CpsLNBwzBSyLLXTVGn8N9rUGsZP2ehcccWIzu4ixE%2B%2FWugKM6abYJ84ynljNwRcSo5tEKOIb46%2FrugDastwt4YiPYXUxcKVDHa3WBp1o25gFRZh9HQYyPUwzOVfgtsg8HUEqDJbWmYgqaUCn5%2BQPzWvBrVEVsjyvbSXt59UAwi7ThMWOliwHEdRsinyExnLh2Q8ZiIkJHU64ukLU%2FDH&X-Amz-Signature=b13fbcb51f5532a23a46b3e74ee8c23dd27fc0ed8ea762653aba36a8ff597039&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
