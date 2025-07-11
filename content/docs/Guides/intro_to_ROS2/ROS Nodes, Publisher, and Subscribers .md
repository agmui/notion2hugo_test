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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=1cc62eb2048ea45d7335dbd3afd59bff2da24b5763f7078c234d4133921f81c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=9f3563ed0d03fcd050caa78e0d43609dc30c47b6cbe20b1031063410eca63c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=9239d4fa5b491e3579c8d00c737d6f9baaadf75f481818a6e7c145a2674ab9bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=1c60620c7c71ab7e833e2e49302693ccda87300a12513fe36f30b3dfc9d878e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=710c0bbeae349b5c8124855c23c7a9eafcb22037a51e7ee5425d04fd42503bde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=d257c8c585b6516111875af9879be47b71f657f8b0839b3c135b5780b23fba2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=8dbdc5f49f8398bd8988c2778255568dc948d9da18e4a17c817b7bf449285aa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU5ERVHN%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T170947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4%2FcI3EoL%2FEU%2B2OGiZuqXRHWT5fnqQHmAI5saP8jRq3AiEAlNmxgIDKDrbNnH3MY8lbehOlA7iDCGImThUTR9G%2FZnsqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMA%2FBGUM%2FJ3Obwq8WyrcA5mPtdn7mNzvjXtk%2F3vig4LSQ%2B%2BWpLZHpNrrjPelOt2KXwXqy9IcNzKo%2FDi8xdzRMVKLo9m4NPbjAGUr9Aja%2FBlU6PyXEGbFJE2LIE%2FwneLTDdwV5J9zd8jfcxNrsco5%2FJ56e1dsFn7zqmxmTAJPMlVUrI2gIfYXuL8Jl%2FUoQ7k6YLqo4jb0vUm81aPhi%2BCmHOP8tP9cUvqssSDjM2Mj4WgQfTkCRIZP%2BHRx0EMw9TlYE2mK6fJLhenU9T5MlyrEMKtxYbFYILRPP1agz2WImEhwP7eY2%2BYKwGsGPJugKAmqDCKCVWekhaPLLgQqXhUDrcAoIIMctUvMoqotQQFz5Kh04U9Ivduu3ixBWVkx7QK6nvXcEbiIKk3bMgMyQsVyaN5gzL6AmXvKXW%2BFvXsflgtvacihdxh%2FBgWl1rTsyeR1MVyZsUNAbDzMwb95radg4smsk68ElxifrAvKgOFu%2FD9s4%2FQxzwWVWgw28riQwKx2RfHgofdSvh5ZzDZvvDAauIgDfvdDQm%2FOM7Dn9duFxSqxJaW35i4eP6bQOTuT09O%2BqWk0FfV1kVQEILJ7YACaHjRULnDFVMN6RpzoOndyKQs%2B%2BGs3jbyxRiUs79qe90HCWNdxzyTNElquqi%2FOMJH%2FxMMGOqUBdAq3F9cQwW04Tzjt9oEcyfZ0A%2FPY%2BrI9CIWC6g6Cf%2BKDFh0VmKvVhkC8W82c39raz2v2J4rDUAalCaQGchum5SYHY6%2Fgg6yIAZSukAWlAo5rVkk5umQJAOdkM8IsfZ9ELnew1o3rgCzf%2F3suUH2ZNBJCyLY8ZzE5wbN6A6pIDjP1tjxyNlohGeg%2BDiJeeKMwqcjg5Ody8a0GZf%2FgQtrPcabB4vn8&X-Amz-Signature=c3287a9ef91f5d2abb19a989e10d022ad8f6c6e1e0f4b553d4d82ec5ec10bfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
