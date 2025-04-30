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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=a2b3e866cf89049b5e1e012f975a44718a9f3e0478f7f31fdf23f160198f4c2d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=5f551109488bf0f31bf83a70b1ec50d60574ea29c27987fef93f1b789c44fb86&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=9100cc81e187054965ea1a84a86160d7d0457daa7c203cdfebb0134ed6fe8484&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=aac60f9109adc32fed4d80b36798ddf58c80ab0842f864d4b709d5d03fe3365c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=1620da842dcef5078e7b55ad2338808968d7784e05ebc4ff2f4a5b0ea3ba028f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=5d46e4396c1598a0c66d0a4a863d028b93b35f73b5cee364815ce7f16a43dd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=3c3c8e2eec180ba57b6846b7cbaf16868eef80836e08a6c41cd79c13ce3c3a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ACR3PWE%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T220808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQCUEy4gRoxW8ZxWlkvUg4oaBDGx0oZmVw0nry0YqkJGyQIgDZkRZILl2%2BNZtAmL8eTbQxtyfteeQSuhgiEDE20mV%2BkqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrTjVAOE44wENAVDircA6NCGhCuOkYccu15go48oYhgqgkK75iV8Th%2FhoTXxa%2BpvE37lf3l64JN7I%2F%2FhIeFrodSerYjVK%2FwKSiZ9fJoNxd6%2B4UERx0cOnUPonhiT7yim1aJHSNVMV%2BjXL%2BhZO5J4pPjEmYfjYJb4bf26It4Nv7n7NL498i6%2Bvf5I7rjB0MN6yeWJCdYWayWvbpIj%2FX%2FK%2BokL0zOsTcWOMM%2FoXfcdqT5v4pxSzynXA8avP4qIkJ4WMFQcQ7keWQPM6%2BswPXKvCsRxUXmEJcGYsTGU40pO0bfEgL%2BqiRUPH%2BlTyFZyr2AGN2acoyiMHbvMllXQsaB5n9S%2B%2B2YwsxIYO%2FSOTb1EjgTUDoNOkwAsiNkpunmuSuqiSP1cTwhY5UH0HM8I8RA9iJ2l%2BbNSgYMztvXg7%2FUEslrM7fv5vWePy2oNnH%2FVD5vF8974OiAOWBc4Uv4pXvtqNu%2BowPHqv%2Fz0bGMARTMnOndx4OYBWUpbVc78hAQ0tXRvvKq49%2BfOhzWspQg1jpVTF5DL%2FyafIU1UQ%2BH9RrjVDit2Fc%2BbA78a0Sby1cdke36D65%2FfXAOVjL5rR8L0rs20Eeg20a8FXcd9gkPLg7UYLnIxPqB%2B1YVAEemEaDz2IrcuN%2FzI5MkMxROtHVqMOSuysAGOqUBnRtvvL7hHYtt2j7UN%2FADejDhALNbD9TNzR8q8qa6iSx1rH0PM1xkID1%2BUNmtnOe0dZwmvXb1y28Q3KEDIWwLL%2B4S%2BvXoGrkfMan6LeuJeLqXRLkchLUhCS%2BzTmcqZFBbnMbLa7hn%2FCfTN9%2Ba9kqVdEENg6x60JWyMecpeoWYBQ9q6%2FdgRQoCGUtZ%2BEIx06I4Hwk4rua%2FCquPlInylE80B1JabYOh&X-Amz-Signature=81348dbc95c9b225c6660ca9aa2b4d1db65967df3f576682bb7dc8a3eabfa602&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
