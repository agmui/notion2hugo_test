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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=c81a780fbfb7be91a9a35b2fb9a9f4cfa6c3d98456fb8e9cc98c9a107340fa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=af0700d214af4601340b7df417b10889283ed71e4123cc4cf5955680d2e48271&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=3609716a800bc42f5ce8a5a7b3ee0e8d78bce640d2974a1d29c66d534b2c7b89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=8ab4481bcd7cd2ce1c0c6a6801fa9dc31636b52d591192e660424a5f638a5527&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=e3e73a83a8902fe37cf1df22b7a9ad742249851de4aa2c4d5abb6725b5dffdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=741b2a6956a74dd8c1e16f92bd17fc89923beefe32a66f0ca868c3cfa18f8cfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=4760fd1e32c5313abd71449f9e6ef10f31a04a664608521c014ee689cc734943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCOMSPZ4%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3Vyv0l%2FR2T2gmn11vyB3ix10Ac7NX199gM11ztZhb5AIhAIRlBQf8XiiyjOE9%2FZRQlHMeWccmTsB3twva3fc%2BNuJIKv8DCH0QABoMNjM3NDIzMTgzODA1IgyG4FY%2F5hyoqMFUOQwq3AOB2dPXQ%2B81O7uFrsV7%2FXBgMTy28wBKNnNSqCTmz4cAPnMVrULtS6WSgbDSogvloJDvkeJHGwed0%2BS3Kaz%2BauiqXl9n8og49rAuo1lt%2F1OfOcF%2FmTkzINrZnq3nKZ7uieNUJnsiZJzntLvVTy6Ih7LK453NQhwX6NgQNOhPUQwFtv5Yfn%2BCHdmfXHULrywsHDMrosCy1YQj9NtfNlACacO77q8yvUTpyhPFpQ6YOXk6wEwNGbumHPw9Ot3Ukb2Wr%2B0LhsJc9mRz5%2B6JknwTgzuQOVc8L9dUq14wCg8SoZYpU5oV6AZxqrWLfwOGFmkijrGh1MF0fPUnbfg%2BRS4Z01yLS27yRQbD98HD%2BQdhoq8cJbKrtTmWeDDdkKS%2BwYDYAjXuxKyIc8l3K%2F4CJkdQsgZOFi%2F5mBLrjfwiPmFMcTNyvRTxIulxJyDkS9%2Bg0loxmOwJBJHPbsNSn8%2F4s4ycT1sTm3siDD%2B%2Fz6CCclHUuO1w0Pmrnhtfmp6pfFWjUeiqvjBDlv%2Fs%2BjeAVPd8tqs1zHMGpiKmp1Su5fMSN2t0F4NLJ3kePfubemtkEEJTgkPUEJe378FKb3chz8UGYWGqoUs3%2FozRFT5Qf9Unl2fbs4Bvv7Yf6UZDFXsXj34qGjC%2BicfCBjqkAUlRDZB0P6tdRQzWyD%2BLkPLODi2UKkScEYefrNcy8yltk9Pq8qOjkXoShiynyEXUAVRvEQy4HWpssKjpenlxtbR4NikveSvSxK0cAH1ITCGrAg%2FLaOb1o74LD%2Bw5XwIA9Ud35ddOJGobWP6w8kXwWsNOyt8LSiI7aFmQmx54J2tscRATy5hoG7EhDWM7kIE038CIwp%2Fd1V5dZ8DcyyjHChhdYtet&X-Amz-Signature=27099e29ad2996e063007dd16f750e5cf29192a1d87eeba0360d44f4f0d52dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
