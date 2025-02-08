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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=0b1ec57ba88375212f5e97eae43160e665e75b867852163d11eae2501d1d7350&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=b95731af9a34a535857e5a4a35d9034ff55fab23ae53f1ec31df5f3176b826cf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=52be29f8c2e5553615495b63174ac29398f2c471b56520963bdcf937972b27b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=dc6f0aadeda7298043bc9b1d3f874f77a7da357dab0fee0ec0074f0def5636c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=72d639c41c6242a6bd79bce64fc418bbc9fb625f4e4480f218c48df5cd748ea5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=dde39f0549f090522c478a09de4514d0404b83fb456804fac0b13008256a9c69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=6a9935d4fb55d5ec7048c09d0abff9bcb3db2e2840771e9711a9726d9a4d7e98&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TO5V4H%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T050716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJIMEYCIQDigkXwzTUXtRjATyPLtzVKkvn99fAiJpEJx3x2bGHG%2BAIhAKLTmEn8fB%2BVUWgih6VX27Ah798CKoRxA4E8EVY6G9%2FRKogECIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvS%2B8jcuLjdM%2FPPDIq3AOjm0S7OG8EKvXsunsIL3gSD%2BOG%2Br95ESfSpjWw2Kz14l4VLoMCUSl1OupSumTwnwoKfiNULAWHYrv%2FAi2WstSkm9DUS7EwJz%2Bffnx9OHu3MBPLpYABBjGlX9sUlzsgesP7iFS%2BFKjEj8COFQP0HQvjvdS3ikV9DKa83gOOXwT97qSKhIBuWRNt5%2BrL5SA94xBzNzlsfKHpIh7x2gFuY8GWfW2sDd2MZPoioQgoL7Y3e%2BmHiCewMRtQG3eMXZx4pz2o6S4lGuGnC0ICRCZ6SsswQ8%2FX3L8mrBq02PyaS7%2Fa6Y62%2FZumQGTufSry1IEULZEKGSmpceop4eDGqSrXoE%2Fvh7QfFeZfUTfaiRuvz2zHCIHdxFhANU0epGDgpiEcDDve0jYMW0zNHkV9MQnUo9iaROdeeAEtJ7RWBqgUMK0ups5qniGVymNOErffpQJd0lR9EHlhtSIGQd5MlWe%2BW9MSdZ6xz3knLWNdU9yPSknzAbHTaZdKYpKWGZ%2Fkr9IHfITgTS8R6UW%2FVdAoGG5v0lZwy7FdjtvV8b%2FlFU9GUAGIcnmv%2Bhs%2BXD1KFGT9R2hNCW6J%2FMCrwEwuXDwlhVaVPbR341zpulYVca91LpXoulme6vjMFkMQerxmGKRaqDCftJu9BjqkAdYpISwUwzVPdwGDOCzErTMQOGHBDV4nY6%2FV61Fy0UedUTPArH60wmG0fO8y8f%2FtnGdudFuAaZ%2BkZCfZ%2BnHV0DK9jgf92V4PKaIJRf2Lus6iIimKQ%2FxMuAC5UfeYu4RAKcXAAZXmtoRAfnXCpNF3KUulgBZkG0nj%2BV%2BigAid43rdLGulceZdJ6v56z7fgrSMCRESls%2Bjy3UMBlLTvtJS1D0MC0Od&X-Amz-Signature=20d31baff6638e21d5e02674b494d450d2fe4528490a5504bf2f1c8f53a7401d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
