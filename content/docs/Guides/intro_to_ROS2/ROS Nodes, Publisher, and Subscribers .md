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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=0030a9900b4c21875ce2c459fd611b54ad334355b6788649627dfc7fdc697ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=49c33ba60c041e095e332747384824adea6d779c3e576c21af7b6a09ce0b0b06&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=356504c27614cbd6b1d52372daf8a6ecfc9497bb3e3955a7a9920144460ad308&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=ff3d07aee2a74cb5ec2401babb0512814cd1b57be726ed3dc113b81f46caa631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=42cf5ecf0d32250d13de427fe5011002567b1679dbee44e06f42f88e1d44569e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=ac68257e7c8df66da70c7a36519fde85b0c0af557c3964fd453423b58e672ca0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=19cba008e5274dc510263b4cf1238f87ceb4bbdaa60f08b089296f0bb579fccb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L5WXQOH%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T181017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIE8Bo%2Frrc7uikz%2BZon5HgTJ1Ziv8s5oi4LBBdkgVXOMEAiEAr4jNrr2wf6sIsDbIpMIQoraEGjoU8%2B%2Fu%2F4IsFiDNhTAqiAQI8v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH3QeMVcK4MYhigy7CrcAz995Zg54YsyDMaPxMIxiBrqQZLCLSemnJYnk1w4YJquDxILRCD8TPXaY1J87xyUn8ATYGEn%2FBUGVAYwSPsIo4ZG9lkruagD%2FK8kxVFFj7L59BE2S50EAP653FOMgMlTakv0Lur0AWICMoAE6gvpz6D9POG7AhLAP%2B8Fgdc24DFyCN1r48eBUhUSGm5Bx6XgD7r1GqdEnajJZC3kY3rKtqwYkSrZbMpWqG6LB8M%2FYLGSxGVupqien6c1Hjnc9fna4rWVdoZKWXDn4xlYASoNLUZdVw6frJgqpMtnwjRc6zB4V5TSJVzpja6mmSF98oRatSLjjLa4VqjONx%2FZbjv3sr%2FkZUKgLE4pwH5mhoV9qBbpvv%2FdGJbu7iNOrmH6D94lsCC2rM398uSX4GVNEan6qzR8s4P%2BCb7LlLxYnbn%2F09o4I50dvY9dTetuZNh1UmPVSpkE3xmGBCmarEh4XL2YQFaij%2FynLo%2FwnIGWJgOmJqKIaccbSO6rhDX5sxc6N%2F53qpRJkaJ%2Fg1vTqbNUtJfHw5icjbylpy1j2%2B4uIFxTfNyEcYv%2FcdsOfsz%2FpBjjB4EcuOa4mz2giYaVMH36fGCFwkudw1SbFHK5yKLKYLrawudrPSodwaP8orZN5lm0MPra778GOqUBoyxgqtO254LC2bpHRQE4ILRBtK40YO0yWJEnQOHhJMLh%2FhzdSq3aehViquBvtxJSZ4Hagbqh5eLgjLjVOOk9xkHdD%2F5j6qCctPIVEfVyrIvIco209TPaky8UdxnukUjXGdCx7CgPH0M8elvD7sIqfHOW%2FbLes%2FS2DMxDXVICBtSvhAfJnjN9z6YdHXB2QjY%2Bx7t1FUFL1EmVwaXHBBF8AEllaNT1&X-Amz-Signature=a0b758c681b5d22a958d3093ee406045b918f30fc9d5abb937314b1baf8448e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
