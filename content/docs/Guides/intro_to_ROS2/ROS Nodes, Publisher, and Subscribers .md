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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=31f5e108bc1096d5a40e63b6d9cedf634aeb63b407763750d1e1c8eee49aa047&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=c9942377dca85e6fec98930b866de01ba40039609ac6efe77c127f05d11ee926&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=b1d5847b9c88cb31d66faec0e6f0ed32c4a414f7f96f65d6b15fb2f85573c266&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=f4633dce495572c2814671399357fbb02179061ffb55161bd9e1169066b41241&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=cba68083e53b1902ee8a01c955670743136c2646d7df5c523b3e979fb2615d85&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=3a87572d60811d385d629e2df8a7c85c3f2afef37bf8f951c1c0192aaf1136fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=0be6b06a3ae6df6a8509bb4bdb678f449332213574a37a565356918e8ee4af0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QVLUF5L%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T132120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyxgC4I%2Fp%2FhJNDfN7%2BmLHD5ub%2BHZrD8u3tdeVRv2fx9gIhANCipF29kgHCwYiQoRv2j3r760AKo%2FGzJCtS1XZNMiL8KogECI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2TMIcWBskvZ9qubcq3AOscPjp%2BPP0NERvlkr7zwlL%2BJ9ZDOiQ%2FSzRJTe1tWo6kwbFgRryAOc9gjt%2BbLzU4xwUORtAIkNOudDl6AFw%2Byb3CxDimkmBq9FzAQIIlQX60u7Mn5qvxxxj9l4njWXbrdZqrrcZWjCZG2xAbkyzlosiR6l%2FUdUH%2BflZmbO%2Bchb%2Bcw6gS4z%2B0THyeYvYRXfQfkBEwtIQ8aGMrC0eLjHog9VlRoCVuEo3ChHCew8mq7bwCugXmzxS5GX0zd71UjKN%2BjhJRjaj31gAFvVGtZfZwDEJhMDaLCNG83FR0Pu9aucch1E4l5SginD7NgOw5F8Ew6z8Xmv5vCZ6M52uMVFZPM%2FbWRiYNEGD9bqD7rNkgPNlo%2F68Ko7u2YER9oN4Vc9jhgsmjTCuu0oWfGfAF3MjTA%2Bxn3vvsm8ZtygN%2F6YvWxSx%2BylnyBfm8Ukx6zMuVt3T4r1I3KEue815Sl0FLfKMZIgYwEOCurd0b3eKG2Z0PehxLJw%2Fz7LTsyZIFtTIb5WEY0eiUu4LpxcTcBHYsMzGN5p0YJ158KM9Jl35GjYY76aJ1e0SszYh2NJy50wcPUN2Au6HieO2cTlP39e5PwbfwMieQABlHkwDk%2BdrCL9ZWRfYl9bjSYoEnaGv89DJ5zC%2B7%2FfABjqkAUhANaPfhGc1hdWfSKQaGHIGkQxmLWSWWtm3rM6sBuEIfIEqTbr%2FpUcEXDm8%2BHInpNnLBG5KwzLPGUKW6O8R8gjNwbPK3u%2B7xLkl3E9vKULcnBjR4yi4Xet8zePBpzHXXYtaoYeNOMXREMzQkxlY%2BlENGaDZFZ%2B6iuLbIGMlVPl1fhyAfpMq3m5Vgb47P39GlhHUra8eLH%2F3J9JZ31zvIw7UZDMu&X-Amz-Signature=424309104985fb9443b76e22daf6f33423ada61929b6477c6bcf3cbe03269328&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
