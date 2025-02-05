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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=d9cc9246420a567e582f942bdf0fd456ee1d6cba158b2ba0a485de2193bee6c0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=3f8ec93f5d74ffb2c92be3bd88d4893c92d6a0d0391a7833b1c65941b7f053c4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=f402bb935e5375cbe4dd046fffd060fdd50a5b5c5586a53d6f607323a759b403&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=28b2d207398daaeb059822702f5b83e549b9f3165107cee5d0ae69fc6e38c63a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=b95d6acc87c863767a6e0527e06864b1c00b462ec3a3566cecd3b06359426573&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=3b1719f24e99ed1d8a6cfbcb7f1d7a40095695abfc0c0f8e13c99382a14e34b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=93814fd4ac4e8f315c2d24e16c4fa6a809b60d6a8cb2dde716b6ae64d727e7a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653XVD3J6%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T230739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQCK3rVDwWhxnml9h8fVP6UvT3uiQLb6824AT8yv11SG1AIgWWqq%2Bo%2FMkkeCc%2B%2Br7wd7ldpPNIbkP10vowU0po1Nd9gq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDC7TnQtpkWtQi0RDNSrcA4OOIKI67vhQePqxTgS2ty%2BKdFo3UXHJSq%2FY9GM9FpovA%2F8AjSNiiJS3tfRFtVL%2BimvBThuPLntsuT%2F%2BjnREvwPaBr52ibg1gru7dVhP4OH%2BjlzEupoA1GLTcf1wC%2FUBS8trMUOjA7VN%2Bmv3PtUO3fv33VEfxo414ePRxv1uyOEKlIRGUTCq7gS4VqlxLb2Rcyov8lmcDf7ddj4QYlVhnzvZ6JjQD%2FcLACJNQ31NxfSvrbMjopW0c%2FAu%2FBsrYF5Qnn12Z9h5z%2FPCpqSgBnSeHPj6dbE1BrmrYkBgo%2FeVSXHAsquCEZp1eTEpACf7QYO28al2eYvMX%2F85N%2BG7UR1YRsVZwGY5bANEu4paJM2hKOsF5AcBMcvTEFrChao8Ex0hExsJbwnamLreoY6XHOSa3ZUHkWKQ957CTBRM6Ea1UMSPdQDz1NYPbeKkLBunXY1sX8ONkv8dnGmzFBpFi%2FBH87%2B%2F9j5%2FKiE3kAIldQLCJDndB%2Bl%2BvyWytMM%2BjjndAYsWNHSPuHs5ua6ziY1IYUeu5i4m2p1jVNCUuS9RIcYaBUyXFldXZH%2FDUdUTP6oGNHUcwon8FLzXStMalV23OhQneN0uEpcWQMCqhpLUWZh4Hy4y6JqZ2mDm04zmrBm6MMC7jr0GOqUBntU9FzPQyWcBA22UCpY8dLxTtUPdFwWlXlAsXmYdaZVQWOUJ3UlGSijA96px7NRRG8SY5%2BKsSvBSBiwdeHgyBSwkW5zs0XOPdAEPqdvMogXGignl0vpKiKRBKoPYN7gRTm8e1YbqC%2FfSOe84Zp%2BVthwYGIT8%2B6xoptFUvjjVguu7hI919ZVnUA4YOUqZyXi%2FdqYF2xywPAqF22z9uSrh4EWcak7v&X-Amz-Signature=5f6ce6183dada0b962232b3f00ea808bdfd70a506f90ad1bbad46880ed7d2088&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
