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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=05a7fdef609b3673d361ae3b55bafa1a7a0f77d2194a1ed96ca99c6a2b76514e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=b58179b7ff1bb06fabc99fc7a58efd80d8c68607b52a0c3916964304fd1ee20f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=58b46a43393d84fb88289cc4f70d7349db61d29d9797704cfcda801b8f56c4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=6c2ad35c8c1236088e6c4c26c09bba5680eb84a350de24b490264e50144a3f92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=145c9a5d0810ad0c6cf3c4d98c2a21b77064607cb2091d08e17fb3ec91e925ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=d387ab1488c863a906175498cd3662b608be108b333ba6d5cac40ec458bcf472&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=99b54a7a874a0ffe8a619570221686ecaca07b5cf54322d21994c844b6a8d7ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3IWSIXN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T050940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFato7af3IVPClQ%2FCJTPKSKQX1a9HphD9dUzhplst68KAiB%2FRNNAGZZrol3u%2FV104P5ruM0iS%2FdbApgnGzPQzk%2F4pyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FqUQoDnOas%2BsZpgGKtwDuuZ9f8cEe2p0wZQ8ixaseekuk4fvnCh%2FZ%2F9SDOcCqhmoaBaKaHjmgc3qq%2BcQ6Cv8ZtTCKkN7ViSA0RNmQE4ULtU5dDOUB%2FoQqUdfLLBOKFVGbXQOhonDPpZch34wkML%2BzwX%2Fz9ghYhs28ULyPC9pBP5mr2R48hqTu6t0r2m36F9nRSMsnLnZtn03%2BSf3jdRXEQUm7teSkqDULkKVRqLiXGyjC18PjbPqFJFo5SrQWSCiAlzV02ByrgdPSnv3bUVpJ5rjILCInKqTPRFaJvBkY4%2BtIKPzdkruQ%2BHtEOFUXl1pOwTwAQgVHCyxQmTupkLNXxIioDU6s7jIzR%2B1uWM8bYcE2gODbEpvUTAit9SK7nuLm4aJlIySywsSEbeKWExirgaYECK0YgUXUO846EqAEePDVsrwjZn3TkOqhb3hNLPc9LXK7Sqg%2FmUyu%2F24NQroIgNegNGx0gSI1x5VVa7WzSrTupSPA5idPYw9iS%2BH%2BUaxLwT5GovAmyoAs9JD3h5paMKjFGG4WuIIJrpgx%2F9KGzSVBw0x3UTLaIT%2BkFc0PJWIiDKVIx%2FZmTRrPnqymM4d9iUBNmPT%2B3s9YJVESO34i4FJD5ldWzzesWc57K7dkgjFfpDWHBor%2BDEH7bsw%2F5SwwQY6pgFuUJedWs3WOJpIPQHrPC0I7kyOy7AQj59XfanmKZqLhWNUU1j6S37ZFYZXZYRc1e%2Fqf1J81KOvuQFVlj%2F0SypQ56ft8RC2tOeeNNr2zOa0%2Fn9khIaaXH6ALUSa%2FeraWP%2Bt43GVy1C7mxdGUmRo%2BIrZJdnI5zfAmRQXmF7ds4xtqUt0jeQreRfdvweJsShVFBtDV0gYb2yYHykZWH7uQSOQbz4yCKvS&X-Amz-Signature=adecde9209977d3b0ae3404334e2be828c025e301712e6eac67a8cfadad1cf22&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
