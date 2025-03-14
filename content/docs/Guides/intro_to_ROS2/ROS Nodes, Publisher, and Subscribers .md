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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=99e675b5dbd7b0109df26fea46264c722d1e0db8c7536db3de9a787695f03ddf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=e9203c74c5ab5654d31428625b3ef9261cd009bd16e0804b47e90357b3e38e4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=6acb3f35826ab12a579c61424dae8cbe3d77b1a0d905232d04507ec58e35fdf3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=87b06156faec9faef33de86d74a2b6a6637cd1b2668c8fd9cde4c356eb6fe9ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=b5251d76a2000a4b76b6ef517993e9180189e275e71ba035bd0e726e4d49dabc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=35953bcb437b7d6b5ba263491b2cee33b230f265bf92b972677bdba965fa6660&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=2fdc3647bfba1d5aea618423e08df312f320382e056e5967ffaf9196b19e7ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BIRWNQT%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCUHABadfCUW%2B6eONKHR9ATDvTQeHrO7WJkAAihf5OCFQIgCE5r5iFD08kfU%2B5C21itMX5C2wRL0ADbCiV2yVckgZMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLvNyvwUF7yCcIqioyrcA%2FpE1HOBqPAyr3HWd0Tn5GhKhH4BzmdVRbTzZTBdjDID6wGFYDM1RzLanCtXObYvkOnhO%2FCrXHGb3QpjESPwSGzGbthftvkGL4pR%2BsSOJn9oGQSEJ4iEK2fv63798aUEr8FqhNzHsjQlqlZqPpIA1qDIKls8QSXVEAmGg4yBMpOCMmiEPXyPnWuAFFzPQbd2KHNnuS8haS03ySO28Dtk%2BMp1QYJ2TDT%2FQ0J3XW%2B8bFLJdu8nSBKnjoaBQRxnaIxGd7hJ7W3njbpAdeqI7u8IBopWEikNLMQVxODDjtnDmAyhLY0khzN3Z%2B%2F57bXHpiIe1JwPj%2FypnZAcn3at7%2FDRtchePVZ8JdpVLKaZaXXEB%2FQX5iK5UrW5bc7n6mPz%2Bp8c4xtjZ63PA5RBsAn3dJrhdjfCxNdcyEx3oy9T4Ld2R5AW5s%2FsSXD9czBaa8Kk0%2FDg9QrdjCQfAf%2FITYOAlnf8JX8VFJqMu74HlW17oPMdIfLdXOJhkFHuP%2B7IlitbL%2BsRary2N2lGqjuX61vbXbrswo5yXWW7jphc3haPtMYmys%2Fa0oGgVLQCUwMkUYIR4OSFBMsOsz59LUWgLrqn20yldTuwHrXsWOykiq5kXqNZFdYWA3ND9cMJa0T4zsY6MOa50L4GOqUBnWsV%2BikhyiO8c6oA2NDDPRTuQJaZBG9vguOsOiXGPp9ggAvjALdrxkUnshVw5b2pa%2FeAECaT684pywFhxWQcueBOEh5xs0RZjqly8xY0RLhKZ4fVxAankmj6FQ6T%2BvaCgTu%2FN2WffnJ2P6ZfpYX2MUf7VFCX6vWGLKB9WaDQlMJp9Q9OZ9TIFVKt1bqfEKrUKXx11ZBl6F4d28Bmtk5vFJAyS0eq&X-Amz-Signature=106d61cb1d741cbb6f33d97d2cdfecda7a9576a01dfd2cf8d462298203954157&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
