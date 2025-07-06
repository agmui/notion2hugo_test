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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=a772b5669cf5446513395546642ca03f97ffcdd1d886f8a3a97d903d6cc4869b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=6bec922d84fb7909012ced68131b9c1dffe737c88f9bf539dce3d33bf044578c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=3194b96027b56fda530317b60ee89e3495e1d69093e3d728d5005c14a5f66274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=7407b3b627c9b3e5ce00b42de5f0c584c5a76a7dc103acc63beea8593b2976c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=db51f90c9ff5fd0416567ac613dfcd40ea3413965bb8569a24b01e22a5465f2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=a1431008feb06e45a6892320a9e4bc5fe94fb56015fa695a09e3614d7588b5ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=a1c9b51e8bec17016cc712611d6a6462f7b5f642e36d7c2126c9e83a1007cd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627WUDRFS%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDlfI1rV5jQ58kKIvGhRQsOVmVyGEuR%2BljP%2Fw%2BxckP5%2BQIgMFGOz98bMgGZRrE8CpdWttq37nuPWg8g1ok61V4mivYq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBTiNx5l7pMDphx9ZSrcAyiTpT31FGt2OIMex3AQU9NRqc29eIe8OJGtMfI3th1rWisyf%2FwiJBNjsAt62G6iE7qqOgQRVTThqfSp4YKPiFkRYnYGL2KTt4X3zuJuEFkaPYOik5%2BNxdz%2FOCg1YBsQ%2BnF0tsYQDArpTqzeUo5nqs0PA0oY4UWtDQG53FUzR3pUX2Z7rZ07SJJu%2Bsg7yMgZlPRdtOLp7wFMIiM%2By5Rut9wkfiF4SDdta98C12ZhUjFDO%2Be4N9mdxxl14wFzsiZw3TC4Y6BkGzBF7JBRNKwamNZooGt2vGjtoEdNSNBtK%2B3Ul%2FyOS30KIfXXCudKaNg33%2BuCZ1bUG9GWCofj94r%2F0R%2FvSutFOL%2FPI4rsbeHLgNeruSFCGOmDQRl%2Bashc90isBrVSWQmRzgQFj3pQBgbWStUtnY6KKEwbA3d6Aiq%2BaMbxOdRtExbfCaTtMgghA9GWKCgRA%2BcXTfSdqiWt1PjRkaVnO0P6WxoTW7AKbPS8cd8FcXRazMwBu6713Y7xqgCF7mVagXuXlE%2FG7i%2BZGHk8JlsUdf1VAQe0%2BYCXlYtNwq2gfs%2B7EefBCVX6pRlr86EeI%2BeDk1Zz5tQGS2tgf8o5zSkV%2BFpMZwE4ldECqBna7tqgicDWvmA7L8IFoldPML%2FWqcMGOqUBEqhpXS9efvU1qIm5mNaClCsYyb8z1rMGV3P%2B24%2FHwJYQsk85TacxnRWSJXd0CWF%2FQ4oc1zo4gvUtnSuG%2BYDzmhXc7ycKUcQuJmQQGEfDjqb4Sr7ntL%2B4gcBOVPKkAgM9PWIf%2FLMoSn6MOoANwc8Fooxxrnlht6Wal0xGDjZ1zuh4spd%2FZr%2FTKdhS7%2FetOmt8Z3Uc5Jzf%2FBpQBG%2BJbYe4YgsWgaq8&X-Amz-Signature=718e7586b024a9eb78b89e1f1a1fd822fc7e3df68e9b309490a63b44aae508cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
