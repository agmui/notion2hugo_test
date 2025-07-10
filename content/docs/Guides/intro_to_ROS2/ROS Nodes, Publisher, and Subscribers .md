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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=335a863dd6b04439733c3c2819c0176ca121de0e775c331e09f8761f3880689d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=d61d435dbc8ebb88755b406e061473c23dfd85ce6b0f81b3705995ee73a4073f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=9f6e589553524afec44c9d84a24a1863a47973e82d9929759ab1093185ed6cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=5ca0d3f3523e692a7899e7cb5ec20c4a4d9afe22d8ca30af39b226b660ce4838&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=bcf236a7a7c3adb1c6f84fd985a729fcfe48de02e6b96e6d6e969ba0523f6df9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=5e112e9df1f13fa47d8cf603236dbe6d0b21b3edbd80b083de79b3a88f29d44a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=76370323af9efa9182729859d8206488e8c834ccdd5943f2183693d1daa2576c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EQN2AL3%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T190744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHoh5UHNjhvh5xyKsvizABgEe%2B9Dxq6IDcenfYptnI2AIgfL3AevxIQRFBcqyv%2B8T43CHdP2UNfwEuOBJnhwbxyS0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM3n9wFpT7knnSknryrcA7Tb5kXoJPK3h46CTdSPL7%2FjBZHE6KmeWw53LXTvqqCUtnR8ZRlS7X%2BaLZa0xx3QY7WqskvJB%2BAeot5vTYyHpla95gkX6K11qSLFy7DbqLFzlyKtxpuhLAvL9LPVfcNYJqaNF5wNH%2F9FiSf2fLsV7Ld%2FT5rnegko9Okz2oWtXAz45LrgyV4UYg4W%2FhuISR2g%2BGxtZQ5sJ%2F5y%2Fy%2F10zNWVYlS%2BrbfJQohf9p8lp2KUSEHrVdnHqTVEEHknD3%2BbaxAou77YEl2IEi01XEhH%2BbOYywAIqzPhFqH6qhNm9lzVkFGnA%2BztkPkE4OoGIkoBVi%2FMBj%2BaP6wQMNi1Unfz2rn76rVsq%2BXk263hEd0NPyOnFaj7nUSOSR9qW%2BRAdGIc0oIlRFiaX95SAkk9PGILf52IptuhVwiD6wGJECOAJoAOaWBQjIHnOg0ZjHUv7u9SKORshTeEtII3b%2F1oqjmTA6QzJIL%2F9y1VXfYu3at7xVCEZHHr9fXGdxI6c8F%2BWa2w0jTJAEHoS4yuvbJdFidkfCr%2BgSO06Avw3blYU%2BcHc6r4k9uxYfZotVRlJDE1oQ6Zav9c2Zm9Bbebuwpd%2BBy1bTvMPhpQghjp1jjIROoNL8W%2BBFdFv89tuEt5d%2Flh3PuMND4v8MGOqUBbSDyCsgJlbGTTR%2B2Z2XkOdsB3lKIwFpid1lDayhgxEzHF1SylcXlUDSMAwTAe%2BVJMxKD2VrjL0Ihy9kz3v6ffDYIhJ0NhEC2ZY35rh8OiqNw3IAtpg5dXJcZDTJfbPpglZJHc32DGXskmD7UjL%2BYTaTwsu2wRHHeVXuNHkPd3SDkAZWvJiP4aGPLdtN7aj%2FqzllD1xGuXODjHq1WKF%2F1kQzAiLcH&X-Amz-Signature=81692f2943840f057d6478d40f857fe3718649c0ccfde65878dfdcacaf78ee55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
