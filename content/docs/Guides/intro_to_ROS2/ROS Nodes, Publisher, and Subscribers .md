---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=cb42bed9ac650f8c97ca1e178d33be5e2554eea33c7669257425691aa79a0bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=3bb6c9c9ef722e08c03ba991c8400ab9f442b7161b2d28736437d09fd73cbd74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=83b1cc218839c092781fdc7a78a51dd1015420fe21d501a3d4da762be0ea6d9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=25b35d773a70a695137f221676b03c2de20c90685385a7b79d22d7227325d22f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=a176d0b69baa5a0dfddc8f91ee5388af07305f6deabc65afb191a9c4962830e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=c8e20559b7ac54f4890ffb4d6358aa675ead42da2e2c3b8bfa303f94e30986c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=5bea02a79dff821924b53e482534e04b7e5ff36f6263aadaf8c157102f8d2db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMUQIND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T161005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpwLxLWFK%2BQ6oeCWoVO0zvdlsYpD%2BJQn%2F1wBJ5ck9Z%2FgIgTzyS7gQrntRCyLS0OZsB21XLd3wYgFkSi1Qo4JtFwO4qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPoNLIBSMzi7Yr%2BZqyrcA%2FDKoKu2IYBainwjmMVGaPh2MHNXrd7wti35mQFNz2ngipUDxQDsrum3dIjqL1SwYuDazd4iRsUZ9kEQbtUIr3uO7RvIBbYUe07eVoKGpb0GkSxHy8nFW336bh9Ut7yi27tj3OrccOc%2BuVyDMTZK8%2F2HfICdEzjgbkHGKh8AykqG1rk6nE2gbisa4ShU69CreQhXzPPwn8Ap7i6aUobT9FkiL2RTrD6JdM1PAVKkIgt%2FKzZYmfZU7zgyBqtGubsIGADurwCqQ0V5E4Mx1PhU%2BtixWhcAzdxk5SIstI4LVTBxUZhcPpYT73d8O758nEd%2BqfM3aKvTjcCJmhwJF%2BdJptwUzdoCuoA%2BXjY4utJumpXOhbdK38DKT5oMh9nkHSwehDcyNe%2Fi0mkhSXMhQ4rMKOpTLEt0wIAPAo1NWv6XWL6iZ%2BMdYsjATHyWmTuAxiz6Y0aQlHu77hQFZKZjV2mKg0HwW3Iv7%2FTUVsdn4Rd00kHpgz8%2BJKdd8Um1TAeY7v8R%2FDen4LtHjRxQy4Verl3nAG1FVWVdigLSEtQgn%2F8dRz5Tq2%2FNSbYTBjnWKLU%2FTWl8pRizyK7zWURM9SqRwQ83ui2ZkbpVix8TwYK8fkYAmLA5Wx4Y7oYNJ5bYkRfrMLHj3MQGOqUBjjWlPcogMDTA3M7geJ3j4QMqoFIAmv38%2FttP38UBRVjKFiJuTVJc6Q4is4PjSkRO9wSZz5htcZom%2Ft4IHZznPtFOYYFSfnRcfFwDDVIHgxfVNVyR6m1D7weEBLKfAo2SpJMCD7NCij31K7aPry1%2F5B8rzM8O7uXzb51rdzL%2BXvyq9Xcb9FrUBOzDZj3zMpM4o52IQAxwKNdQxUIzqe5MFqHVFQ5f&X-Amz-Signature=6c1e47006dd7191a8dc86633b6ce5d3f267b8acb63e3d14806054cc171b2f71a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
