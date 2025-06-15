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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=3af2e919f81154d5c3d7c5c282737bb48bcc5285290a30363ff0da60cb8ee85e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=e215b13a9c70e0907728a8bc4e0852c14606f943c5833ff64b4cb77bb0e39059&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=3a5f460d4c99675784d5f947354dcb72edb7b9808a8d081a1536dcd036bf5369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=e7c57e44d914a030174acbfa165e6595a6bafb7ee11acb179f1be189055a8927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=66dfd17f2defbf9ff798ac2a0d1656601a6d6501c0fa7cce886951009c93f8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=ec8a86ebf39d73b266f005754ccb33054428a6adc44e8f23b6eb654471c644d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=e5573da0f81a53fddf9af189c586cc1504c652ab58edd8742e7c63cffa89e896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652LKKOGC%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIASOqfR6XGCjDsbi8qIQHM61K13j6hiuEuclbxDCR%2BZfAiAtuwkdyLk1hDbFLGoM53JgnhAiDz7W2oE%2F%2BPy0Kxk5pyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMFQmzmTLesQ7ck163KtwDI7NgtdlWf7vcXOyQjLZ7B%2FMjIPMA%2BGe8vLnHAh2rSUwKKU2TbLP9%2Bg48%2BMRk7Rk2uaKS1ZtxWTN8R4sCexxw1WM4Dsm7WWc%2Bw7nE34AUy28CmiiB%2BzngrevOEZ%2Bt9Ox5e9VzV5jSecVFb6QepNA23%2B00TQ0rJdsOaYIgbinafTa2EsrYb%2BJq0%2BQSKATc%2BXKwCP0prToiYb3D5FbtCb7jYfNPoycOGt73AM6AFfxiRKrWPT7RFiCGrIwcMvTs02dS6sthF05EoFn8bu%2F6VSHnY7TPefZFgrPiiA02VHMuP5pTaQc6QQnaoYKZkcRTCQNBZrf0zPReXh4rbOTTAxyQDxBMaM1zGH%2BLO2iiSFTdmxcvv%2FjD%2BxS5T9WvkPizxaUVBOPXdIvQ3gaGBAv16z5ktQ713K81hPGCP61Dlvoi5SheQY5dWcfEr9dRX8jQGHEPzLSmrxwnJVhE6MZUF7JGS4P5XoOtem9C9ZFWNnvx8UxJ9F1lyjTu5G8Dbo%2F72bqP4A5nBvz75956fAi4eEYraH7R%2BkUfkjiOxMcSwf7taFE%2F3jNRssUpR6%2FYSZyZ0SdnWyhMECuaxoaZsYirFTi9DvXPMBcHOwskD29U8nmXgVyKZtjq2F96jUYAMSgwtqy5wgY6pgFQ8bIBlBzas5T650QXaZ7O0DHmj0TtMRHrcQLJpVfrFQvl4AdmEuc64OKuIoKncGXvL37R03wNOVkT9v%2F33pyysZUSI43rPM%2BmC8m8wljKDUB7lYLvVwJ5rbJ78pFD4DeX5QNS6MUH6dnhQCDfUqjhT8K6fs3Oc1%2FdHvJzhZn20zuM4hfOTLB%2Fs5roIBabjiMu%2F3joiLv8KfuXAeeL0gDqzIh3e%2B5R&X-Amz-Signature=d994ed5652d88b04aaae4a025390d856301fb898cc32d820eb51c3054562e056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
