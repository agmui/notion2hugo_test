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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=c636f016f9974ba3d3ed1a1d7c61c1fbae8d507e2c38821eaa2630a02eee6d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=35f487d2e4d8bcd634fd001834e052b05808bf0ed5633395b4d8d4138fe7444e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=7890953b99efd2f3b853d573d454f1f50b1ede9a0087ab2ca6c7a2d3f5e0f807&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=6344faf6c8fb08d076a44d1ddc953814560f627ca88629065867bd177e90fb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=351173cf3c6916186cbd23db00599180f3fe21a0a52ce5783e19fb8afd3be9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=22b65390cd6690708ba968494df1427475e16d23c1e8c57b7ec1232bdc9a1933&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=85db9e6519f18239a40d0a33925e2ed70b311577cb3b02e9f0c4c14baf39cac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YZJ3HQ%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T141056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQCIbKOi0we9pg2Cm8smz%2Fsne%2BkN5BCxQy1wnlTyO%2B8TfQIga6WY3n3weVJ87eCvhV6AAXsdnYvs0CVkbF5UXGOrqvcqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHvEO4SKyQEmRX%2BNaCrcAwfRdW2MHxtLcjC0i%2BcdEp%2FQspOfqJV8Gox0Vj9BL6RjlzLadsXfHgb%2B%2BqVvMx3AVz1eFeX6xq%2BlpjBO4skl5wkv4q8FKWzoCYsZa0HkV4t45nux3vSnDVkG3DeOs6wQV5FIFcTSP6rvvPMpWYtu%2F2%2B2eWuAyiVjuU324Hq%2B%2Fyp9LS87fJzzLU4C%2FEowxDMoN0KhyPeXaBmHGGXnZJ65yhydN7QCS2a7SaO%2Bn9hNkRwzEHCRbukGgrStm4tvexJU7y0NJj0KT%2FOXaTn1qA5sDKl6AZ0pq74THG1jcmrQTYyx%2FApyb3RCD5soWqDdrosuoDdA98Bu2dIS3EtxUXlJo5mVbKy36G8zUF2NqnNF%2BWVybpeLCuW8pQDkJk%2FXZ%2FRtpv%2F%2BIXut79m9O9C%2FZXAqJKkhpUasBNw5%2BKiw47FQPdUONyW%2BIl2JzXgy9mWUJFGchnH4iKN2Hl2GSEDx6Mgy6C3ZY7EClKvfSJ4QKoqwCycjrDKgLCBeSPCWEqLdM5BzMgpviOHBqcbkD41yVMVtWBBgUqPKwc9R71PFDiJnD6UJaqXpP77NrZMBS0D6xtsCKVFTeFixeVwfHyqJwYZFlUIJF5lRIcARZs7FpoIZY8bZcrcSKeIvKprKZ9HNMLzP6MMGOqUBrHOj9AviefmzvhCkAHdwR7XYBm%2BFI%2F%2FD8MW5QJfOi5B5DlfPLPc%2B0THtZo0Pc7dfYXRbHbSLWQrkcPiBJ3%2F4sgMyOFBvfR5GBGc30nQ5jEpLRncR5kyFYN0CrfNLzr8xpzSRJys6XqAaJNMkhb9a8ZhXDx5r6oNVic5yPZWDRK3bYtMaOZqpaWmZgO%2F10MEI7gizl6KQgDMUV6VzE8xq%2Bo6WQ7qs&X-Amz-Signature=805300ae97ca338792a0181599fd7b190cc4ac278c31ae1d2494d00749c0ce2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
