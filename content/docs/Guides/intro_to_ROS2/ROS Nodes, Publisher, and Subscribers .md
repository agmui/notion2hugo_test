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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=1ccbfcf09c623522d59e236e1326d3402081090469c2771283e1aadd8b4a3e06&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=0efe0fd76427fced985197d5da52c03591ca504a4bdcb6dd9e1bd8c04978a4b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=b2efd6c8d11cff11f23aaccb52bcfe77a34da01a2e5d2578d24fca2009aaa2d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=b8626ee0ec2784273eb24bfadad75f8370db1e970194edd673a759514d86d5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=2222b7bc11611d8f558f2436edc278faac40b6dd2a4c9954cfdfa5ed44c37059&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=be3ea18ad8d45ff725b8ab686d8acdb347672947d57b5306a5a5381679e7b341&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=147af455ba12b2e97f609aab6377d00c3c63dbf51c6a00f508225ad91de355ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524PL4NM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQC2cwz%2Feqld2Y80s5T%2BI20%2FM7QXvVSesp%2B2Aoh%2BVGL8igIhAJj7hULS%2BiEMqqmGbavY9SLEgOF70ZCntZTe6Ei0GFzpKv8DCGIQABoMNjM3NDIzMTgzODA1Igx%2BDqDkfOJ4EvRJY3Aq3AN9DbO2siLH%2Fgqi8FRh24mCqk%2F1NeeiRF%2FoGqIJP3o%2BIEv4x91UyeXwSGHLHXgx0xfKruBAdAoMmsJtoxYPRdXHMTeJQ12wvGvcaIA5cxkSA%2F3Mn85JZFkww1uoLb7%2BmEtVeE3oNobr3kDFBcl1D%2Bjs3gE8CiDGjpbFBafT9b2giSJH3zVwGFaGJaLf%2FGsmfXytXLpccdodWL6Jzm9o4%2FM%2F9WFxhpOeZOK4S%2B3%2FzdC%2FsEtnApxd1bPy%2BYDjagbCuyVk58j5dPBu5806AvKd8%2FN%2FAMisiaOUYNAa9IiDky%2BbXB1xxVH2q9qWlDkDF%2FUnruZXK4mDEb1RWbUEY0XV6l0k2ay0X5lNmKTTebtMiP31U4PRaMEMbvxkfmcxTA2Ij8s9o9W4dYBln3V5j8Kh65VbtOZEHplLXewWqML3CocHGKXzFSL3gVqStFlkOLO4ISiwy75ITXujyGNorp63W2Y6Z5B20PfR68MMRgSwMMOYq5sspLC%2Fo5MRhR309vRyXuwRdFrGeamv0Lxp2VQEfxMHgUytnPlRdBorHqPc6YOhi3tofziwQaqtrxea4LwTCJfMsVTtus1tVdkBFHpFrCp0NW0Vt6chrmgLhgGoG2asaeFHlvKltubkSPatiDC%2F1Oa%2BBjqkAVMBeUCRnQ2F%2B4Wkx7RvnYYEPKht94RQk%2BWkP3rAv935sLjKsPKqGvhzt%2FTdpAdaPQDpCyWVl7%2FtXqZoXndaLdWM8lPn5hEH%2F1LE6%2BvuxahTYWdJ2RtItJNCGdbeNskz8ew%2Fs6eHcrHGaLr%2FT1bnkewuQ%2FP9BdSCGjFO17egbzGv31Noi6IlsqiV6J4uhCZfmQDA8M0m4JhZ7GvLTSCCyGcStA3e&X-Amz-Signature=b18d95f68b85a9e7e80ce107b750405b7d474d35344618a7eea839b2f46dc58c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
