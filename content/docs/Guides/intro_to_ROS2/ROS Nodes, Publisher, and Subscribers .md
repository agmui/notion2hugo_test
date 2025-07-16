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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=d6a7987b9428238d6d3b0b5ff29a46360156533890018902bb9c6eb038a565ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=e6b3672ac92b7c947c25530a1ea0f657f4ea95da60cf5317bb762db4daa6b797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=14306585f4b97094b3ca9f586a2789885f9754bffc8f545f81d81f37ceb6632b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=a122cbc579edf2327a69674fba108157061b9775ea65db483167c6aa4828cf39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=3a70e3b7f22c093bb088e36845dc155162780e678ef4a8b7d04d06d1b44fd439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=9692148ee586e283fafe7c5c7dfda4c11664a7cd93566fad2e43336e99f510cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=0f8e96993810f982bb35625a386b11d9da58f088c63a558fd5478ace943a427e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVJ7EFI4%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJIMEYCIQDJIMM%2FExo7a9O12jux6SdrQxSjCr%2BVqtyVFxf3YubF%2FAIhAOtiTY5uCNv93wBn6Fgvon%2BSTpbFWeJgvYVF067KKEboKv8DCGQQABoMNjM3NDIzMTgzODA1IgxuQMUoUi6mrS6UEFAq3AOw77QVwKRuvWEpWVAdkf67xrtvzbZ1B4iwwqLG7Gc7aiZe%2FB9o%2Fgs%2FecpZ%2Bw3DQckxncBYJqX1s5ABlUuIouhtmWRgWQC9qFXfN41wEVTLLl6fLaHN3AWkDcKvlSaVQJIO39YmoleHjEe9GpwvBy328uByslS78wdCP4Qi6cEDsSRgwS%2FPMitCgKOTzBgBiiVBHwP46g30%2BikWL5Pwpv2hiyD15nEJQ9imtooKe8bsKcNaJfimzY%2Brlm97XKymr%2BqepnGj4XWiTOJ64Oxq3V5VZyOClZW7LXaTOJgYmb%2FybJcbhEFuqtePs42v8RrmB0K2LpZtnIanvM1ZtV04manNOTz9Q8mF60aFm8EWd5jcqoolL4g7fQUE%2BVdDRUW5%2FLFvQZ7fE%2FWBAbtCsRgrh4CBnAF7EC6vwbuT0S7gHxTb0rYyzlKrHgUJphG5chkgub8SGIfZza9NJZIHsl06vGbUYrGT%2FOLx8YeKJazqw3WmBsd4bOfTx6jpCzO8L0Dq8EN9JjjaYGJYMgkLQrPhcUxNbIWBrx2%2By2j%2F9LuX%2FmZ5PRQmXFYGv5LBKs3aymZ2IGUyD96LF2SftvJxOc%2Fcjulf%2BJcPGYw%2BCPFuqfBIOMlk%2FWvKqfuGwU%2FfyGa9xzDM4N%2FDBjqkAcwwYbSliKqvAK1s%2BCOSYT3MeeTfWRo5iNW%2Bl914EYJIibVTzf5zGGRtTcND58N14slOZ7gRgDW0EzxuMfQLjviWR%2B6zv7lkBTgMzhZZLKdFgHg%2BhUKe2hhpmKgBpZajdrLVK6asAwFpVMNAflNbiEnla%2FeNic6tC%2FsEEkIFyUZdnpHLWeLacg7Ggku59%2FQ4GFBn%2BYwzTV2KQ54JwmBeNPmrflkN&X-Amz-Signature=23bb2b20a6f41234965863750f0c9fa2f85c6c49b10599f6eebd892ba78e9f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
