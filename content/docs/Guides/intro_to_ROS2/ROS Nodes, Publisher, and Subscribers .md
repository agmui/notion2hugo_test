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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=2d17369b3b15b28d3666c7d20043a1e43bf761963e557e3e50087baad3af9e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=3be228d416a0557bbbdd9bee5ced0dfb65749d71f4b180a9e7e5e930036bca84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=b91e5a5b5895eb5b3ba988d43fce4047e47fb4678537318b637438ac68fa906f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=30520f465a764801790105d31ca210dbb5eb0a3cfb53cf169ffeb0fc1e33ea17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=3d2702c83432032ac07f2118fc7bda16637424a6a868ec6d8bcd7cb5fcff4646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=8bd28dee6cd7d6ebbcac8a81f1c25080b27d0db503ff579d8f7106170d4a6dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=29a9e3e18ae39a6c1460f973b3a5978d854eb19e27879d50053c4ccd27e1fe1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX5VY7B%2F20260415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260415T023524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDp4qTlzN4TU9LCF6iWYYPfspfAVDn9qWaqyUgkcl4QEgIhAJJDyJso9sGBwrkoWa2EP67PWFb%2FoRtkikfX4UaaTF%2BlKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPPjC50uEke4k%2FNVYq3AOYTA%2BTHlH3bZVi0vuhXxP8vdY%2FJ0VR1BXgUjkeIvNSyNsvMZNu0hupHlT1u2Hxyuhitrwkat7bwAy3AzelwYwHsRPd%2FRUWNWxdW%2F6Oy9e%2FLTdtzQ7fXPHSRHc9dRxIGxnHI%2FC7ZctqDSdYwT4PuerHIv8kp1yzXBZTtAsEgZQl94L8PLk2a5K7FHTQP7mBf4aDAFsw2IvHmK941sx4db0jtihi5s8X5gdD%2FneYnyzsS8dmbMNR6ziijMjgOObF0IHeimskBX%2BuIN1fXAPWDw3uu63tRO1GEVTIYPhFsm5PIfdjwusu5siUBI%2BBSccufAfCCsbip0%2FgSPLCtnPKu8xhhhtUwMhqoHz7gnj8a2%2FQACOjVCillPqc3LFCDFzRUghNphpIWb6mc7TxiSNbkX4YSVOxAazCx2KhG6PJmive4kxh2M0DpTcvUs7fUdV3Q5ZhCIfgfwE0G7WTy56P24594oxdiAbsrGpLru33%2FKI9I9KdmlEVHSy%2Fl3WQW7l3UnUuejXMbCEGDzVSZQxOBy15bDBBbQJ0upesALZdI5TpbwVKM8skfhp%2FxJ0kJo2wnKDApX1thG7Re3XcBr5d3del%2BOJVBBnLaqRO6kjFYdMdCTRgyPTFrUcKU%2BBKNTD65PvOBjqkAbHwlBjwwPwOuYZmoIkrLotNOB5dx7NaBXNl1XRdr%2F8eTHhtIf%2FL9yULMAjBzGa7PatePVwGh8qB35J0x6im1R0SKUisVdKjnrQl5bBgRlqLaEVR3ruD96ksZ%2F65qeCqorGSYPb08UwVM3jh1aZl4h63YBQktkn45L4s%2Fn6dAcK7ddc3ceYcPLDIxUqh58uQ2Enxv7SFjpO5GRYiuWGU3YYWXX55&X-Amz-Signature=f2d026a6c463dfe6a96734a4603d25767abe0aa3c4d3de639b2bed640d3e76cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
