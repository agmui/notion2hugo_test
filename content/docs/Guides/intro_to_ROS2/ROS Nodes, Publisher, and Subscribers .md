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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=858418150d5f4fc49f2a60c1a5a237e535f28ab4d5fbb7e195d0339da5aff050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=5289af5cdbcc0d365dedfe91a3e7a867658928b158bdb54c3e2b0b7713b6bf14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=17e08973e6ea672ca19b3bc81118cf163c141ff2fbb22f8a1bc282a23c49c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=6695ecfcbbb951cc8693d0cf144c08051dce4186dbed9a4ea81e39f2502f3eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=3c4e9f94d5a9f7c10873066415b9f570489c8da27bacef2ad6cc3c502de78d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=7b051c1547bcc459e2b6cd33db1c984c07874e214deee10b6fed352aa9e7ede7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=046dd20eb6e06a884e5b32070ad28fe5d61e7665e3ca38c659758dfa42f7b8f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKPVZ3H4%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T220809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFZygZ65JTY3XxrQj5zevWFvd75S5YsLe3tlY5fgiTDLAiEA00R9I3hJPEUn7i0ip3EjjDl0k5bd1NN9R1ebhKKcwJUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDCVQlec4kVbyu%2FhQbSrcA%2Ff%2FcZNuPudixNRtk6QnLb0snRKHcCZlp%2BBQEwLBDoa4bwCr3dguEzi3ePCs6HQ%2FstFMybhrmpBGSqaHj8hrR6r0ucXMmkrNpY2rfFEWz9ZeSvbP9CRP3UmirccuL2T1TB%2BVtj1X3V29rCdaDHY44Ec2AbX6i2SCPsJeeKrPdd6cYL%2Bk4LvMlq58PFDkoxGoEPjtdTMhrmVpp683F3fyvzZoizFJp%2FuU2XIgkWtu7s4qzxBPE9KZK9AwevqvY3P90emW%2FQ1FKLvnoLMMtjZ5awqFFkRwfJJdC%2FmuMP%2FqGG3DpJs3ZRfLxBh1ETtnZ4X6HW6ZxN0Re7B8ygzQg%2FiMXJydxBLBQ%2B2d7Z7hEsgpE1m4zWdlE88jDIaybcefBFLSxUnGtwzaxrG%2FWjB55V5lXdjllAhUjrcnTDGeFqPEiurEY9nVvsnGFi8vXdu%2F7Tz3Y6uf7kDe%2B3A3NC8SP4q3dH%2F8qo96tjvRm6nMH4gKyA0Bud0W%2BTKSe7J3eRHHjJesPXT6O%2FczC32jJGPOUR56kgD6F1xO8XBDuaYscQ122ZUlsH%2FEMeNPY5b9saBGgS6Kgs8ezfK7K9uQ1ja8m65LoDd1ZvFr7s0I8P6rI6wXXR4CgrfuWcOzaZ%2Ft%2BuEHMOr09sIGOqUBFeyTjmfpwIsNj6Slh3daSnYn3ayJs3CqTc4TcHYpdpAaDtjmv8CMa2Ymg%2FTT5tKY0wrAGXi0AVINNDuTuYUdKw9niMvVj793TAa7xXb1xkcW9odZ1YWzRWCFGA%2FuNDwMXI%2BJcEAT%2FyZmsM4QJFrztS%2FNclZ8aJm%2FEjEb1vK13DtpDyqNN1898NOchatx%2FDynp0aqipQOqNWyjdeDbS3pI0Ep4GWY&X-Amz-Signature=d3907976600a8cff276096678cc72588f74f9eefbc3078381d904681474f0eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
