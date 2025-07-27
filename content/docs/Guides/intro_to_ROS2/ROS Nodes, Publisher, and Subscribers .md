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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=181d92ea941f0f88c703247b96f58b5f6e6581bc8a4cc5f25a929d37606aa53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=243e0fbeac5f0317c6f3b9180e3c1bc90eda6cc727b69cef903a562551feee40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=baca8395181a1758d57b4ec0d26559ae363f199e5a74beaa3ad1b79a03712f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=336a2fdb64ee7c0698abd74b932f41f7d5d9751e85c342d91f898f9f5c1088e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=dffbbeee083c3a5de0362b102a6302046bb5598d7c0b2e00050cde4d3dfbb865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=2347e8963a31f17a6b02ad5f49b6fa0eebbd002d216f613fb1800f8fe358e276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=53ee6a5a4acdb105653a7de0187f95ad2d34d04b449db4514dbc0658b205fbf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626TTPHPH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQCvcH%2F4vbow8JgwdLkxxIAZmfbY5NII1agbIU6hKs6Q%2FAIgGrmGs%2FEfQ3jha13ghjXc8eciJygAjdNwAtoAara1EyAq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDO3O9qk2k3StO1oJ7SrcA0%2BOsHb0keMPnOWPEFHLr9p9YD2WlSxE1SFmYTSxlwHSfjfgYgIJKRmvgNDvZWvJqV5xxsY7Et%2FOqnYT9D2UjHIKx%2FzlcA%2Bu6mjMJ%2BtrZhSkAA90K1CXlak2h524yXdv0uNh35aBLd7V9eMbvUvTJBUUUMrsaUQN%2BJVKmKJgVNKYE1PYgwz%2F3tayB9L1Agpa3kEmYRTtjq%2F0UcCq9%2FB11v%2B69NoRzib6%2FR5%2BDbxHNKmfeZQzEzud2frc0QPfwrTZZtYExz2dWQCoTcDI5CfDljYt0prKMsD7ctghP1%2Fdyu269C%2BNspunHkGH0EE7H2zJOfh6zETqZlm105DgsnNh1gqfdDDoX%2F47Q00lMY%2F7tCNw9k5ggiUL1u2qTuV3%2BEuRL%2F3cq%2FvXtP7%2BbWjvxuxjZe74QwZBS%2BwwugB5fgw9MmKTVvwPrNZ3e3EiVzCOL4stIdl9GIxRUUU%2FHsKqBp8Ak9WagrzoM4jM75dPYsDeqtOoYiARV1WD%2BIDx%2B3niaFLMq0hRwu7%2FqUYF8EwtCtzJAwZ2b4T7qtsTID5tfuuGFTnlQP9FPyda%2B5YXfV%2BsyqRwMOIqky2VG3Jpjxwwxxo7n7rNxvIa0gGcnPm3jNKJ3eHLaOdbnS2sdw6wUg7qMIakmsQGOqUBsEhZPkSA9HHZRvO2K7RCD2vyUUDRxRF4fbsIZ7YKLC%2FhpdpTdVChefS2EyhrACL%2BuTUsy4v3Yb9wtswu4H2AoiXCOZpHAuPjk1CCyFC2BQKfIT%2Bx1Vc%2Fy7HSTjfcir%2Bs8e54QsDkiyU9snWTKXZPLps%2Bg2qozQWSjrIWTzHdKdrn8yFWPluPIsdoxyLtQ920zouXvxqJuf5i%2BvQmEGvDeGmQKNzc&X-Amz-Signature=37b9880b57e7b65b6afb57c1d2afe26a3d53b870bd288635e6100ce9c5b9637b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
