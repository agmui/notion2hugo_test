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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=95023fff1261e295b211fc1b6545d0ce8f32840e8e9b4b6d8851ba575772b130&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=af69738fd1a8452d732f2b3a865c11678506eadf51fad21d243874b3aeeabf66&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=d33435ec2323e0f8cbbf890b0edbdbab827dda00aa3adab82a5b0ef4acc486dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=7252a91a5c54cb39fe3f9d56130821ab39773cc426247ea8fe61e0086a6d7c1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=1194d36b95eedc3ed676087d70ca8798e50a1d7e3a7dd3a41934fab31c4b7073&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=0555a288d8874e8c777535c0ade281990d055a3d79210cd0b93174ec0356d340&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=c95fa632db3b05ff887db2fbe226fa237528dd3784bfdc18de7c0e3f06d8c07a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDXN3GUW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T230718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQDtS9qoCeNOqLFwF%2FQM5FiV4Z1rDDfbt7B5o88fYn9wUQIgJCMelIo9A%2BENW1R7BzyzT6%2BEcz9eZWEZ9heeWsyxW8Aq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDHogAn0V01vyruAbaSrcAwO%2F5IRgq0lokZiyzL%2B9vJW0qfJRlxnoYy0UrXHCXrrdbXI4QSHCq8PNeejbFzZy6MSR6FMQR5DXTDJ%2FB4ObUj%2FuvlyZc0u7UQ2WacYIhn5PvWoSYKo9uh%2B4H5QyCJMCiI2Xo73XqN2WTwTDgIt4nt6hB%2Bm3H%2FhsfNls6sFsLz14dAf3eVptchSFBZuCB3wlo6BW6OJuGNO7uzUwzh5nWO13Fxy%2Fd%2BwsCrLPdK0dp8XMp%2BNiFCb2njPQ0msYG%2Bo%2BqqRhh8K%2BUSFSFIMb8S0a97Nz2mcOnn6MuGq4%2BYceqMsX2D93EtN7AtThTG6tlOhr4sMeGBW8ZGmdsxThzR9QXJcvdarlh97%2FbAlBCy4cnTOINGGwPRxUqq5mFN6L9wPjbm395hYrxPwT3eZZN5TpoGYbaUwxvCDU6l9KBUX8EEn78nIrmaJxH51zHOJVbBBTjqBPFZaPHmaGBvuCIwsdcI60%2BQKVWQYyL0f9GeQQIKwopXG93gfoovVejlWy0cdoy8grXQSxf99pxuZM6WtLL9dHeVQHMGNKWVPVFBswWosuZqAqtlk4x7TY%2BQiqZVYMfbsJQWIgJ5ahY2YSo%2BcfOS5bKmg9MaeGZvbgTvU%2Bm91FbyepcG2jbR%2BeMoDOMOCAmr0GOqUB%2FTAlRNDZPuVWpwy%2Bqh3NV6E4LCg9eQoSwSpS3yCtfYePI2VsULgPJ28qdE75qn8aieSRxnNadMMTkhVPuHD1tewfhSrykJPCU1LUWdkuSk6JbiLarY6qe6rYSHsRve8eucB1BvHnKDCzFQpl9wfTWVwF%2Fn5dKuF4llnb%2FuJRO85lZ0D%2BGOY3bF0cdX2zFue406fuN4rcFt765hwhbl8vheZgqmRf&X-Amz-Signature=800c1375db270b65f2bf28ab19a5110438902e3421ac1f7879a1ad3971cdb9f8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
