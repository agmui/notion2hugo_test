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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=997ddd09128a2f24c3c45ee182790707f47f7731ab0a3b20a2d05c3ac25c4673&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=335ccaad556e45deb5e32165de00d434ea06d646b0ccd1ba706d7225b75cb05b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=f9a237cbba3ebedf05fd9dd5ead222520ec0b66336d76e92cea9775281a4fa9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=091dd03cfb6739bb688fce96ea09999dcc44151aa03ab94993eabd3391c39474&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=d0db229953c92d7a1d5cf5a4eef417ee3744d5925e7a46dbf3d0cf28ad4fdd6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=64c9ddb9e4ccf20e0960cecc7a38d010850e35ab29c7f6f9c7c26963429be481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=da7fdc25ab8811a5823f51c6bd6cce1ca74d46f6918f9c0a5ba612ed0ba9b211&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMNNVPH%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T020745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICRh8OlQLyX3GNf3iKnzloncRa2za8OrKq6dXI%2B9Y7RzAiEAtczIFt3qwJxQ6NCTTnbNmCyeY321GoY%2BrZ94pGtwf9YqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyBFCmDML1liGWrWyrcA3Pcn4owUG1E7Y8EpcdVEM%2Bj%2FOdaZcE6amdeSCz%2FoJlnmRS2M0eqJb6lJiMGkrSKSx4D2juuzU%2BXLJuowvCPDp%2Fbvg6hr7bGk1vkUC3pJ4f4GObIZMqBbwH5FuetBRTBPpT4NZFtSSsAYqht%2FINsf%2FXHxJy7DK2KtsfkCNx%2BsHD74WVhluciLiX2a7%2FlsUMLXZETljqUoAWGlp9c%2B5O6IsWXtTZtAVCyI%2BMYJspPIM%2B7NwjQ9POGpwGtWf6t5n4UF7IGuyGwd6s4GwPPn009wdwC%2FNFdb9KrqNWZdt0BTnNiMKLwxpXxtaJKvDfC1li6eB4J7QfKL3QtgL%2BiyPOsk8Voe1QetLOudinERa0WB3kB7ma6g3NSCxOlKkro%2Fz%2FTwZ1gt0mgG7a5x2cBKoidG2mT5WEJDx%2BCpb1%2B6PwaY%2B2cvFUjXuAcq6M%2BeZ1lkmOUEkQjUgET1nn%2FMLX1wqMI0VEpEfVk3qSfbayP9ZqnGR%2FKY8%2FblGN%2F3w4fTNlks8NoupZSDxyOA8usNVA7RQbo97UseUA91OQPacjkKHwuasGbZTjcnm9YQdddBRxThdDuJ3rGfPE4pdLHA8SxTlCfaM4qYqiypKyXZOA0W7YXv8PQmwstGahTHGhHrG4eMJrBgL0GOqUBTTc8%2BWlYeWQqvnvOFYnTZOoe9Y%2BKbrQbEJN0tnkE2g7wHCv%2BM%2Ffe3ea%2FO%2BM0HK%2BbJO6UhexnC72tohmjrDETl%2BTtG6LkWwrbE%2B8vClea7m4Y03CzG6weQUSZbA5wQMGRg9ZC9ynD7BzA0CsWlPriYaQXy9wEfhHE7tA%2FSUUTNzQGXvAhl2Emml0nmhuYbu17ewKcINUu9nBnmeMflGWrHMdV4yxy&X-Amz-Signature=1541dc63616829aff1e10225081512b9e008a30dfefef43a2136c811cb1d5521&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
