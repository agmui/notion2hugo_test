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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=ffc0c24662043b77ebdd3eff19963a826a6e353af297d9e16f081f46f5002f5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=3ac2ec8f01768cb942420516e27e6f386534402a24b9fadf78724f5b2375f889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=6d7b80335de303f9c1bd9acefa95891ab014bba0165fd82d1b037a41ae4a01ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=2392d2703fb023d1ba43fd9d625da0439c7fdd85b720f72176029e3b1288b104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=9fd8f56f22e120e49047a4564c42226ac11b49ac91f81cd9b9b6cf12f778e055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=4234c64f1870c91792e7c039106ff82194874bbefc24adc6c79d7d15580f668b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=9770cb332894ae1b32f020fc2d5559c587a7079981daa8d410f61d4301e58608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKFCLTDC%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T042503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDluL1GhTjIqtnBOzuFBeCDRqxHNremtQtjqU0PSyAfzAiEA%2BDdgnpO6bG%2BjSHErkE0kGLXPHsk3KV0LmYvLm8EqtVEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ1uqlZfp3vAl8R%2BvSrcA0gKopkJpirHCCStf1%2FTMNAuVCyn19pnp9LcAVJ7DC9k0%2Bc%2BeqiIy0GHBP9B5%2BC0CzlQyYN%2BJtFHQzP%2Bi22pb0efIhr8IgmEJJZ4jv0D6OHsbcuPK%2BJoGwF5ckQArGk5y5MbTEZk16JSrEHxy%2FGQicFww%2BquNZ9FahWnY82vVA3T6HezLzHnRq4OjutiQM0rawt5aTMXvU1OiOIHDr3wbkQleNqu13JeoEkwvLd0IKlE2GV8h6zD5FsPkiekl%2BMFTSikcmCMQJax9yrlmBpAE%2FANMU0Fj5uAE4viqOFuA%2FsfKaAzSlu6XFT0PNSnYcVSlG194gilkdRrJlb0TdUwynGlt3bdnxz8dbg%2BSy1XSBT1X0HUlyFD%2FzJPw%2FRfZ7l2VVGA2nOlKRX8PovooZx8TEBZ9nuKtdcQ3f0uOORk0Sj8kfuYLaW9LDFO33XXG3wooovU3Tn%2FroAUH3eCpAY7CsEICiPxRJQjG%2Br8zZ%2FQAl%2BKS6IJ0EaL0xNxB%2Bb070j%2FA9HIvNiHZQberS4IObkUy0%2FwXQtzq73Fn2Gy7AiDxVcE8vDoSO8JwGwig8PjedKJYRBd9hz42y9X7tj3ImUPxePpwR%2BvRiGZDGpAB%2BvlI%2BkgJnOq0zvuiYezFWrvMO2ctsQGOqUBQ5Pg4UmC%2F6cba%2F%2B1gv9U7usKVbX3wbc5YNL0d8041w8SyDLS3ZaHTiZ2MVDeLeLdPYXQKFcAsCJED7kyjkKV%2F%2BbV%2F1E%2B2H5bJkf1LXilbbBVMxDBGmxWkjwmBgEL2Aa6CUhi91HD49KGIdjNPrtjsx37WS2wj1QpeBZazja0uFvynotJcx%2FbjyHe%2F5jm6D2et3ucfUTiuF2yu9pUp0zp%2B7kDEg6p&X-Amz-Signature=b7044c8209907adc6eff5bb7e37d509e600e84c15b459d733af0b3c976088b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
