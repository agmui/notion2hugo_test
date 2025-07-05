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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=c7ac06ac9602439ffe4d297de065cba5b7b89550d7377fc445d3ca23771e7ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=158a0b0ebe38b1c7252f9c5125dafd3f1ff3f51046755c69b47ba5bacd409eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=8d2a2ac54996e122ca4683fd2ea20d90abab9e4061653cc3703dab7755f61e5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=11cee87fa12da0343df10c9f7ca978a67aa711fda270a0be993e6b5215d10a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=c9bf5f110cfb41b6e5a0c71c4832a517b060bc8c61cc3cb09cd17d4601d7ca31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=3a7d1ecd8dc710bc1a37fa3c5a9a45f8b955e7cadc1f4e158e31aaf686db919d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=2aa93e29def50f33e89fea52b673407a85b0a8ac07c426654b11fcbbdadb5afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4IUVAJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T081114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCICxueIBRJAny9YxtTKf12Dqch7anT%2BnGu1FSwD9vjoxDAiEA8A7ZFSGgWKMRQQPpBwoefwaG%2BJ8BJ3pJe0EHOTHqYQIq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDClQMfrL1eJ2G7haJircA%2FXRnlR2wVn8lrLzHriAighJTxziQ6az1VWPHXcvdNqRcm94Va8yUAJ%2B4WCKJivOHp3a%2BtApE8Ash3OB6U1dBluPUZMpNSy198ddq11508cxNnpmtvmct1j0w49Yp0afqj3Yuda7DIOeADFGwvldDDpMJT%2Bg%2BlyeiTSPRLg1i8rUFESifxXxwCv24iDU7uu64f0GC%2F%2FdF0tdOeTM51lvVDzr9E4ykPfN8L1I6UGPX54oB%2BMGTaglAeY2nHuQQ%2FiWkGyMqJFvv3QhhXI5c2whWvtKXe6rCGBebw0eCgxvxwGVrbHXKYjm9rlAc%2B%2FA%2BpJiHtpyBtGRE%2FIMZu47oJA2ViTiDX4pPjfYm3Ho9oNz7tvAuc5m3as0JycVWbVLBGR3GPN6aozVyT7A3dSDxlT%2Ba3%2FrOfj6lWg%2BDtyjFRLZRfNdqRtu1EQL9adE%2Fpf2%2B99LQaJQSlZZhxkRUGBC1dYI93mEzWEW54eeGBdEZDda17Giqpz7zEcifPDz7qGPOoGZgUCi%2BHrFO2B%2FRHxEck6CEuEW22%2FFGfU7%2FlyrjOehjci%2FcDZWK5prxmRX%2FIz1Xo3QoNtIA4Ym%2BCNWJMsjsFRJVsJiDnTry6N%2FfhJ4vT%2BLfIqx28uviHFdE9u1d04lMKuso8MGOqUB2Urxpl%2FlrupXoDvqyeB9nemqtICdUzAUJ3MwkQn53kprgZlmpOu90inqIKMdAx1%2FEcTPfy1ROtOFFGh8lKcOyMMD8boDzff5uGEHcBU9eJYPEYSQ3nfBx%2FVXEA3sAZk%2FtQiv7MmSoT0JusXVWkuarDhP7yiBN%2By5h9rCBIA7MQ0Go1sVR%2Fq7XPxoppHuD1fw95obxmuY6vOQAyOoSmuR4cDZrRQ6&X-Amz-Signature=57bf01c875280bf135b727d47a6081a261bd40723d3c24ba9d81f4d40943eae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
