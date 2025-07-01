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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=aeae9d40355191c2714b495a7e438a22b16d93ef5e5acc057712971df105a782&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=27f473ce1d4dbcc144cca2de6a1835d7f52384f72937084c62f8b6e04072eb03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=7e16907043faf2a04cebf6b76374e417ef3f262afd82c99acebcfbde888ade96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=4a0d28d4dd1fdf1b5f7d77bebb81a8395fe33963bb3fae323e2b78dd4df986e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=09e0833d47d20868bf84db9ecf9eed95a5877ec0ba0569f6f0c426b3f533f105&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=bb23f44a0653ecc1abe2ce5e7908f5c768461ddfcc073a13f4f1df0c2db93025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=17929a473c07713d44e5d8a57648e48cb8747a14cae051adcf59df8a2f151637&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VABN4M5I%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T190710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2B%2B3bULnNrWpMFDxtJFzX8flRjsouQ%2F%2BCXB0P3xun1UQIgSYGtHLodtwSjbEOtK4Q7kN2SedEfctdNXFM0udvcB%2BEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOf2RTX%2B4MnujVIEHCrcA8mSBrBVX5VfE3R5QGzw1uexl0VMwC75bpwhePBBTufuympCxNqmVt8a2I6VYuSNfpqSv8xPIhzFgMuYwPoKZpjn%2B%2B2SJpVnpQibqSXkX9IBGnno91uhJuUi%2F7yoC2sS7b%2BSfvMzL0wa0PSdF7BLYQnejh7CgHKLoui12COk%2FgH7RgHbhk9DF%2F2cAnQ7OEA5afUs%2Fge6ToC%2B1wdtsKWWgxkS1zvLl0SvGeLjjnqkJUtw5bzidI%2FjcWE8UXQCGuwQDy2p3JXw3qey5Fnqrp4UPoB5A9KTsCdP%2FMPdM7JASxm6JH5mibdWsCLc0o5fgspuO%2BYcY3lF7ps3Pq81PjrXzuh5SyZhbQwdJBnJBWq4NrqIfNy1rC8%2FesMuifGDH4EOUjYQVqyPjsP55Dqc5Nr5sV7w4o%2F5VuK%2BS%2FHK0BBxLGkbZwZbdRLRzyjUu%2BGKlAwXiy704z2BkDYjDNnnBsWTQ5FmidZhxqlgxqYWz9xySB6R3CbdE2cuQrkYsBVM3%2FcQ5ApbywTJm6JcSr%2BgdzCUv3hsr0DIvCQqTuJsAHW9ctSEtxS6b9WM0o2MgSls9u2pvCj0iD5udqSDpIo%2FjI8fKaqrH3W2TIaEGIB%2FyZWII5K%2BNPY08us1AE9%2FLb3WMIfEkMMGOqUBEVpmv0GjBch%2BDQpQtOmyb9Q%2FqomAP96Tt1Iu8udqaxIxpKVHU2G2j7u9OfM67Oz03h5xCOdVFEc0my4AqhxmiI%2FQqUoUsL6O7ytKYEnS0WT0pjzCx%2FKQmHx8C9mTZwE1p43W7HlNg0%2BcHGb4dBqQPMpflB98R4BvaxGNnvyRR8sZ8S1OQprTnf7ucA4074xsYqxGK1MvhhrNbT71djbbp%2BKiFUUj&X-Amz-Signature=6de668a7c9e13d5f5d0404c1b7abec0ea82a33cb34456a1dc970974334e04759&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
