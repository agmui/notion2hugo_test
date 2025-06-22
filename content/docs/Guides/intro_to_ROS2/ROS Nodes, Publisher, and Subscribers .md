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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=f9d44e2a5b5664706be08288a91193fd1e3b6b34325e389bc67fa7d61259738f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=47f4d82ce659e9ed16d04854ef5b61aec9e5342537503df7e8342955ef035fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=45a70efc143149c5142d341fcbd567a27f635206284df490c4e2f75561b07e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=4133b1d6ffe2504bb29d61b202fc4d02b7ff0ffd43fc7f4662715a0867bca407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=ee106605225fb38fbba9aae25edc666d6d36eb190ed694f9ff5dceeb4042fe29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=dc3ab4b162a8456d890587639f8abd0268e4b69c0ac2414c271d66c45aab94a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=f94e146e5203c84d0f69508f7e856d7f60a4aedaa4cfc1179ec57fce17fc2c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LTBYRTV%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T210729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJHMEUCIQC1daGBIInpO4qea8OaIG7EfGHkIaYT0282hJaCLNvPNAIgQaD6Ka3ccxvC%2FxWn2iOSqhDC2jw7LYkrsGghKxiODmUqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFJq7J2R3Lg9fi3XyrcA2ZM1FZz%2Bxdlduq3VLWLMtLA1RfT4rRtdIRBqaEmgDEKjImtmBqDtIgOgDuo2KoDOjdZew%2BhCkT%2FPy6G5QgfolUYsVaXTatg%2Bn9QgmOLMbbXCyMDpHHW2UisO1RAQ5AvMANw1%2Fps4Xi9944sTy48YIhY10Ba4meLWhM7E%2Bkwho3KDfgTsEJ%2FbrGrENdhvr%2B77Rx%2FWWR0XyK1cfcDVR1eXAQ%2FenEzZyqSCobdRJ8ZCpqNV%2BsyXrHlRGOC9z5mpcMxvQkYJBcb5JDfUi2cNw2YHOW8E7Dede4stkN9cKTxjPHJREcBAityIvCJuCY%2FFNVSDX1WA9MedHBh5of6NpNwOt4Hywa%2BxQiByglnLryEXJAJ1TCJpOkVMwr0vdfniyQb3qLf%2BDfaiU%2BD%2Bp6ZlSI7vB7ZCIt51Nuxmt0WzBxyr%2BX2ABhhkNIOanUiKzWqjDgD3KlHy6ryNh8pqkYE34kBXdpB2T%2BhUZSe6JF4t%2Bd1tectb9i9pbssROPHkXFWqaND9SA3Z0fvHq6tVA3pPt8LNJGVLDC4r771B5ZSQ9TXABzzqMrDRlejvms8OhaxkOZQEZU6GXApgBLa27uwyO7bNzQyxJJHHllCcaJbmvIFKNzUlCLnqUBUB7Kj5GLtMO7H4cIGOqUBOYOi%2BGyWN%2Bsswa9YrGNO9V%2FbM6%2B5EyXID%2Bj7gPckVASrHiqT%2BECQhZrXsViXpbJioFWmIfkdh8QYwRqaaNk5PszGMOxvTlVvq%2B9VxCHSlkklKt7zZOhg33MK%2FH2wcJE5vMy2AcLzMLaj9bhaNYDgqjJf4BFHtaw4UxK2KGTON3NlKEZF7uHi7jCeAAkVM4JtEC4%2Fzr2mYyw7wiodozMip%2B6BU%2BhX&X-Amz-Signature=b942390fc319cf5e1d9711e2982c8fc6e94b079a6780e6a8582c2fd6af496ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
