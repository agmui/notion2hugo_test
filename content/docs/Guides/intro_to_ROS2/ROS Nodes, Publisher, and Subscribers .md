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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=8b451456df64d098b62feb98438f93079f453b2636f4d1991064f8e3f7c960c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=347d1023272542a76c55da053ea4b81fe0d0af6987339647956bcbd216926501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=db95e316751708197d307d3eec42f92e3be15cf3a1b27aebd056111ac1f4516a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=5f65b8e924a4239cd17cef99bb8e4d16b55d19c7b6bd209e1c68f3eb4828bcff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=b756fa7bb88f8d9098043bbcd2423efe562145928900c514a7ec29a64eaeceb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=63ce324d831c2b9b8fad60835e241a807393aa15eda254ebee54e2ccb9ad9772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=74baf1af5a410375829d60106e98a2c2f8a966a6955583966d8242e826d7efd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2G7PNRC%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBfXfvGzhslLv%2BNaMMgHEXjdWy5D4AZlqmFlE%2B7FZW2QAiEA8MoWBL6ccBaxjgaJeLFIJhwpEbWaKFu78L9g%2FUjt0xAq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaTqky9kQwWubJ%2FyrcA%2BujBW6PpEIDCMdSLzNnldeSxrtCGs7rQGbKF%2Feltojb4%2BF7NKbTzCsYF40MTkOBeTGAWaRLyzv2UcvYrftLYW6rls4HmpeEnx%2F%2F40%2BWR0iCn95HtTswO0ORAORps6gDNDsCW0RgJz1pgA0AT73nYsXXMihP5n9RgheoF12Y%2By8rH3oeNNsUp%2FoKo6EsveukRyb%2FuCosPBMi3nzCM4Zkuz%2B0I7Gget6xVTApOBeoffYQReERO10y8A%2B%2BCYF2eavPXjd1oaoDY1a1Bt6c%2BeQ7RW3RoYWM1FGFwdBsA0UuZRuplY%2Fc%2BprQdAP9%2B3KkUDGgE9QFw%2Bm3i67WBK563pa5A%2B7Q%2BPx02GzL6En1CRAGVRgzvAP42kFvsxU3SyVnTxeyqKCqzrsn9rIwNajAyM%2FLwQ3qwJNd%2F6spOAt3NcEpQFloAB7b17fi993lWIZ0w1oUctRW5z78WdhMm6%2B4j4C8M7%2FY%2BjlGKoZcduB%2Bj9p52xdSqhekD0JsAKdHQ8MINV5IpRAu0U3E%2BxaY%2FaPBNM8lanOs0z%2Fa6X%2F%2BtwmeO%2BfjluO8%2F5WRrgFV2OmI5evgDTa22S90PKeo8EnRx1psjcwGPzRq8QwBwyJRvWzs3%2FS5zRtc5aXjrj8j9ncH9zfWMK25q8cGOqUBJbZdhC1%2FdNV986dC7TL2WrzGIxt2aeY1eYENYSTgxsOudqMsPdsiQT9v9%2FTK7OH2gJKpqQRkC0teKZB8PCL8CAiaLx3oxjiMoRaDVYmFFfhOXcTtlp3ZYH%2F0v0Ha60jqzNCplrwBLOt1Mk02KubaCRSt7pPl78ahus8qHYLi%2FEDVAFYarO7F1suMafR9lOFbzGMoBiQQ8wkej%2FhN7TjFW88fVcrC&X-Amz-Signature=dd0eacbcdd77a5089f25b593e9aa96df4f392d0f8b7f6ca7206b30a127b5fb5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
