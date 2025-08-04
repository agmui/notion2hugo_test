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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=0c2158ace996dd639a35ab5bdeee06c3d3c70861ff7d53aa369ce6c03d05ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=07df34772862da624767cfa1126ce7aa1ad3b1645d771cddca224fd9b856b068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=d22c084da296210e65d42b7a46ac015e37d5f931c5c6523c1884b84fa0069cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=824569535ab32cdb17162474d889d6b447f56c96c9950ef7a1a2bcd2f6929dad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=8a1b3ab23f4d0f143a10890c8220eb0b7b94bc48e14c9cd5bd2ab804886d0b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=162a0f443e9bfdd4b9b77b0c67bd1a09ca218fc84c0207308fb7389f923077fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=fd779d5af87497609079ca63129dcb8ef0ac3b014ef5e5abf42e643fcbb6ecfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7HC5GDY%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQCqTioOoqLot0HZhLBLZ%2F%2BEWBDr23UYIP%2FEL85uWZQIlAIhANm8qU6%2Bnu6lIkZD3Ffc4siQwyiiKxFWXR03pMhLbuNsKv8DCD0QABoMNjM3NDIzMTgzODA1IgzfF05ZmWuawT6AVdsq3ANp3d6hjAoh2zJe8dTbcYLJnBIWgbHNrlbNFQHfnmsy05%2BjRaYFV3sOWOPtPg9kRc22%2BfBZnO2su%2ByKEvdhl3uVkCEFLF9qEVSBaqFuSMpLfpIoPbnOkjYLDu9KY6xTjkSdT4%2Bbde1DFdltrVwvgvk7xnb0xRi7Dxhyc4hLC56VkudCy6KUwrMkiJmMZH7x45vXwU%2Bx0U6aRLdxWyuW3j47dQ2J94QlZeSEBTp0%2Ffk0OTINKKW%2BxnmMmd25OhSl1BHa1fIy3L4nf%2F0XpxWpO%2BEeG60euU4YcKKg9ir6TvTiLcL0jLLA%2FyHKSribTrAsxP2EhsQFsL7Q3rHtleG2zB87R2yIAcx3L9j1hXvTW8IFgh0iVXC8TmRzNUczH4VjFtUCqdgR1Se5lZRJkhXxSEv6ByVgfcf7QUdGBGLoFM%2BDgv0kOffqh8jhx%2Bh1fvuEEFI2o7q2OhUgwPgeRvuQ%2ByARsHP%2BP%2BtiUbuo1wZg0aKNCgD8lGHODajoKwQ7BJue52GeT8vGLS%2BG6YwZnUwnRzQqHNle%2FloBi3eLwDL4LgO7KZfyFWFUlw0CEvcDh7%2F%2ByBkCucqvn%2FolRb%2FOxRmNcR6eT%2B84CEjkQarOY94%2FkWfRlyIk%2BxbpoDLheDkZOzCB6cDEBjqkATt1TAgPb0lGWikRWoxskHRs69YJAvjwo2hTYvFvXoBg%2BuaTWajikPQteEvUBMyqa25Jo%2FvMmtU03TN1pRR%2FgCoin0U4heomKFSeyk0zAf7dPcv8OBFMR0EXgZfpmakst92bgzhPzSLkWL1jHx3o2M7UFfmatL08SceavfjZ6lx77iGN08anU5AsQR4u45QXEc4%2BJXHIXHweR7G9TJnJAiFxj4lm&X-Amz-Signature=6fa49466143f15b770ed26073ccac95755c7a09c876cd3360aacdd8444e88622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
