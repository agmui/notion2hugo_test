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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=9965bd0d1c3f3b97a180bbb869972a36c7a197adf162d9c1ae0d41c9809d7f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=0d3550ac3d39c3bff398c598e3a10179bc546c3577d0817d787b324c3317a325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=8ac2105930a0476e5cf9c15e34644d403d616cb82b274352ca5e499409c33f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=ad46a6634f42474d2bb34b13c36ceb1196f5d5010931253a708952fa7528388a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=5cfd1f355c9144f33bc30f657312a05869905c38bd044b43991550834624285f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=e29c0f6896367bbd5c779344b492d8540484bcc9545bdf4312fd09edd2080940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=986ab1b357d71d7f58f05be2f93ed1279fc501792a8584c57532561716c9f9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXPI7MB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCC64UgFYsFbZacKDmCDAis5OFqbZss19jrKB43R40JwgIgFLgdDkheZ%2FZOSUCr6r8buujPmoq35gM3y9TuCa8khZ4q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDFAIlof8nb51yfsG0SrcA5j0L1lTXFOnIU0XRyceKmZm3WQm2iYcluKHLPMd7psOj%2BdSPc0cB6hJpHyodLpzrTQ7QBv4EhWRU5d2yZBpxnqX7EEPbQmW0miLicZrMU3IAYUNfvnkp%2B5MF1Ty41AxI8WAyQpHK0f2jEgg9Kwfcn3SHc78uSIZbNR00Vz2ac86Mf5b8OLAjiRWgVARwxnvzSFz0ER0Gr1E9fsrHTiGLcf3bAn4LW45Zf9t9sUBGgIxePBmB4BkRjKczRUPu%2BDBNTI4LCT8a5wmk4WimpuYqP56wQw9MFwYIUX%2BUNCvWxz%2BmKPv20x1chH%2F5%2BWbyHhRZ5PRxuELEJ1I0wPTQ8E8oKYlL4gJFWLgw2%2FNEQGaozQQnbNy%2FLtqBrg8UhsMmEJaoD2PoHgV25oPCX9fc3t1qw5vYoCzEVxT%2Bvw95C1FuuwDMviwrbRXMcdsz1QoqrwONdlCqc7O0nXvuH0Qj0jM%2BjUXjjLDrYFPGf5dJrruPl9o7Vw%2FLVDuGlNp91MRemm6WiqHIPx%2FTB%2FAgq3sX0YUfec3oQ9WPZ8bTuHOM75dbvfqhTSNIZEP12aPeW5hErBL8sqh7WdEMaRRLFfFLeauS0sYz5YmkC3i90k5LG9kwuZPonphM0QW0QJAG7zzMOirksQGOqUBOXpXuYEGNUcAjIThIYpXqYUtIG5OGT6J%2FWuPGQN423m2X0oM3Vw248LxzE3jkP7HL9sjjI4bAAqCE2q2E9f92dpnyd7nVdkrZNbawgfXIvCOuMnbgYkz7w3x4iFWSJJxx3TPctpwcNOC73ZEF9kshmHQVpOQH1a8If3XPL8aIsfGfrrQ3xxJ7v%2FUe2L9u1F0XtSb1mRlCRNT9lZjQ3crnOa3HUuw&X-Amz-Signature=c25873c1a95544ab72f7c961448679b406d2057d0a4f611ed34835af2ceff73a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
