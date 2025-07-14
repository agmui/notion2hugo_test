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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=7916e901fd951c718011972aa63f3e0771d6e16845658d748a629a1a712b7f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=849771f7b060fe7a9c96eb2438a70a64ab1e807fe590b589103b71b96979bf58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=714e36496752627ef7bd1200648252223089435dba0fe94da7b5391cbcfcc828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=a9f15063059f0dcd314b66e72fb3609f3d9029ce04a93ba5223558719afdb7f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=f9e75a74357861976414020ebf90cdaf2f19efb2f589e520f1962116ff0f200e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=aa80645fd6a5e5d0b8c49a36257aaaf4439ce720735d06053d4d0b79956c4cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=38d220cf778b8968f989db00ca6fb2cba1c406369544f56823779501d31e9f01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UES7FRHD%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T081443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQCrGDAfREIM5A0YGCmR75FXf%2BC%2BEe6wL2PofOk4EnievAIgBbmuhuEnodRjPLLlnh7au2JgkG2krwwmxTQQtfo1nJwq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDOC83cls80IKHhwKXyrcA%2BHIX3ICEmcbJ9nKhzWKF5XqgNgKAKzM3TCs2r6kc%2BC56YjXUkVoVMJMCG9MG66XT3cvNWm5Oj6Fdsx9Ou%2BoszN1Jjb8Qmcb6z5tcBz%2F%2Ba5Xayu0012xOpeAORxFEdAsOgJ%2Fa3g7MsxwpWYL5PWs7Nu4OJIWMxBCHF4HP3t509FrJl0nRzlL6zYWf41uYEG2hScExOiaAr%2F%2BXrkyJx48PnmfT16MJcEOwe4DL%2Bt8t3eRW%2Bx9%2BH1UsS0JzAkn%2FMKdw9dNdPs3WP0W6nomKToXKGNsb3h1Pilwx%2FuGih%2Bl7t0sunJljCT5JRXWISHLvqNL2N7awhq6PGMWhBjjVfF40acn%2B3e%2F6Rt7GgbtjfSo8wFvW5UCU14OFRW0ybhn7j575di%2F78D2wyJTlIDU6eZJFh4pPrwsZSwjahrjM19bGSI5zOAHAycRweo3wuKZtac8XSdklfHb6CC6aFIjU5InJ%2Bdwcx7v2alswCI%2FANq2mZwj9TxUiVCDkckcSowJF%2FN6wos1r8k1IGfc%2FeQZ2cP1bNRN%2B4cq8SbVLi%2FIBBrgYETwDtUJFQGFSjOxDjYJPvVc0h7E3keZS9ZY2KLY5xmyUE3x3ZBn67z%2FrNgz0gnfYqNz6oG%2FTM9E%2Ffj4LVw1MKXc0sMGOqUBzTEA7jCc9ySqahrHttFMGo%2Bbm2%2B3eNdBBkwEmOO3W66xtFVf%2BGzCvzzQtyvlkMTonb8TL1Yh8LJILoLNOGjPuA4IMvqj%2Bhy%2B7JqrEWCRPi6AlG9MtT8CzxGXn8Qk9zJtgFBMc34DYId6Xk59fC7PTAUb1rRPGpT%2FpguVovcsXayDLuV%2FLHxDn0z3QzhGpnOuT8VvGItkz%2FJV%2FraQnRc%2Bp31z8mIm&X-Amz-Signature=1a598b21358d4a9db40d6e8db309775300fa266a305d5dd43a36271f3ad35ad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
