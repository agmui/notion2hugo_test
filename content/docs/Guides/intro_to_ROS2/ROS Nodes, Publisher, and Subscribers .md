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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=35155142fd61d1ac5139c08eeb9009fcdeb2cef5ff24a0d8cd458e8e57dd5073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=cfa8610df221d7fe6520bd9780fcc97de4f76b9870c683812e2ec2e8b281dbbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=cd86859aa718c87432d7dc45ffa52fac6943138505cef49f21b080b9951e93a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=c7ddda786e52f7667777d70a03436f505801a48ee04170da4489a95788a30664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=5ae68bcb721994d5b3e05378a61893f5e2f0d816a76215a49f18c3001710214e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=4e541dc384cdc54f9599761b93fb95e737a7e44afd4ee09ca5d472f614b628a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=b90886d9daff68dd3363200dd04b851ae63dd79433b98b9f8c7005557b60cde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TV2ZNRV%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T051238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtUqeuHOd7hSn7ZGHdFHncZEAy2iQai%2FGEyznyTpKC0wIgFvwpzkgTRY2P9BBJfukOfMx5icW60c7Db0t6iY1PP88qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMQ1mhURgt2bm8WkSrcAw%2BMyoliRUWn5XY%2FjidIXX1TXNYkGkLgQpUGKgNnzRMbNgT6GULY9ETOlUEDyecj94ZjlGZgVoBOIyXuKN%2BrnRqn%2F0Hu41c1wNw34rbL%2FrddyGEb%2BtBwJivzYJ0cBnlMzbdkPbuTSevNoBU9RSjcA1h0RunGa9zXvBdi7Zyry8b5mynhFtMd6BnsoRXBMx8a62hP7e7hf16URv3iP9Xr95tcoFN6%2FsLW%2BlW2JRXbMFXFYKZGxTFoD6jKgtRdRVx7BJ8amIVESwvVKDI9DmJUN%2FmEpvk8CUAOxGKFNKhwZKXmVlyNDHva6%2FPd%2FTg6ufETRbsCyvN1vntdDuroynD22gRr%2FdFNkrpmJdPJ6xvvyFuBqljTwfa1tamXR9WoHShMvH56A0WGxBX43frShryw3y%2F1f1xvamSg%2FdG06otT%2FIjHqx9mrYBFqwWpEcxIdWR19jU%2BzgaGdsYpJJvEQvTTJwsAIOjPXuQ44vWqcAu2Qdrk2L6ylFykk%2BtYu7MbDZj6OKBpsJn0MgA17TbmoRoAqcyF1fVS6YX32BwCIs%2B2%2BJrHlppfL4BiGQaJFEIOTw9pq%2Bz0uc6%2FJuvfyJckdZ1wQAVjb5jbi68MksifiWnaVoPoBBZdAx58AhYSTwTSMOvF7MMGOqUBILqLamsYF3sLW4H33bf3LxutmGYjmPNFwqWUVrRANjSrVcfFTAOCB2I9EZJeOxjhYqmHTYdXduXcBwrsszw1Nsmdwna%2F4RJbLmjIOC0ZxX63s09UTltZP3xGyuli%2FkLxjjewXBsyTvv739BQrXX4o2D0NGAvwpgNChjsMkziQGWI%2BvNY6TNRUIbhPHD61XnGWRMtCNJ0%2FDDx5KExdnbWtLwAsuzJ&X-Amz-Signature=52dd861c65b8da4ec7cee30a3794fbe1e36eb90bfebcf6648f0af16c5f1ad161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
