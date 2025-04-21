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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=ac04d8a2676c8ae0c1a24deecaaba3de82fdcf8f974bfb88d56c8d95d803a9d7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=eebad7f999c09e4d1e8c64f6be91c72427c3e3f7b4a2064468a6afa0db9cb074&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=c5f4e83e47aa89cc1551eb4178076de43e3bb7833499cae58ecbd5576b1f3af2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=7f9b18beead757b812e43dd0de2a271ee1e866807960e15ed7a4d233dd38d6a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=1bcb63cc9f5a82ce87bee9d8544f1872429cf660697954b66f80f8716662b343&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=5a57a5bb1b629b06f753f85210dbb11fe83f2bc12d813fce6a0b8cc8fda8a86a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=e3980d4631757afd8184766aa9ef4764c8c7900759a53577899c4c41d723f655&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYTR3PKS%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T070928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCgJTyo84fjzVypDPJLkwzvTzT3bLggVoZLwloVMLGkLgIhAIpjmW63S1%2FuXQ2CHUTGXuwfkm2jEiFydpuTQmqGFoOUKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbwoTuvHwVVep7p7Eq3APRRmDp9%2BeAdAgBOAWsCCSrRZiuwIs3w1RLebAxljCD4DKxa6GZN7y2gN3eEHbhRz1wqQwYmz0oh2RJoMiQBDwZKqKgZWd2jVvzGUL2erPVqCVPrmDJRkI8iB2hHk3mTac%2Fqtaop3QPPNilQpSS%2BkGxXsmMAuYRLLldgGE8BiWFjmbaZipQUbwFh1Lg0Y%2F7o6VF6lX%2BKQ1SccWN6hI6RQtWKoMKQA7vjvZ5%2Bqu7gtaQQ2v0n%2B6toIT2nv%2BmqhE4xQAUD7x8DiFyCqzCMW4ZyCBSxJAZhv2j3mWubrDDYMLs5nUTFeBNGPOZMzi%2F%2BFDxLOfmFcm64DxlSt6miiWm2WWYSZHDCW5IwbAigUulf%2FA8q8Tt6i8Zl%2BQcmm2tDnRI6C%2FUe7NpxVQrNtt21JeJvdyUwznJfizSqxponac%2Fj%2BAJq4QuDRCyhw6Jyx4WpiRXewu4BnkXKlDC8Olqes8yJ8BzTRsLUnMYnZweltABWdcQUxAWvqoH9UUvD8ogzdtgg5LSbD0OAX9pYiDeuydqDU9dgRPR%2FF6UT07OxED963uETThkJ8I0JGTOJuhnbApgIrWbNq7H49mVzGf741eIyDHutOVEYjNKQzepfukjSy0atIS9Q94oewGQk5zKyjDL2JfABjqkAXpqzT%2BiodEk5uwWOVfrMUYcNq11HYs8D6K82vI%2F0Ulypjh0RhCZpVuwUVDfTk4DoGSVEAkBQ06OWyJiR73Q7pm8FhFEL07cW40XyhpQ18Twn2aQjxzbqRUTmgb9zZ7OEV77Xu%2FOFjW%2BgUYcGgCc%2FThPUZS2KakmEfTJOVYtXNwBD5ifVHpbuMhAeZMI9DDeGX5N143ZnpunYHWlf%2BI%2Bo4KdJFNN&X-Amz-Signature=3681d3aa243f0b935efc61a672ab6f62ed9f4c5f16182374573c039224c09743&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
