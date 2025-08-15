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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=8b1daa4135018e1c43e2aa06e5e71ba9ef6a04e2604689fc638da9d84a06fd65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=71376543a96453aca0bae76f0b20158eacceb0dabdd294b9f6f39ce35c6d43c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=d94f29ec845af42b0ba3528a09f14541c2480f2a711c9024e0fc50638862234d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=9c4afdc2a7bc1b57bf87635a6ab94de2fbebd986b7528c42b18fa68774297bad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=1febcb05f5c94614c2c41e54b2c3b7f15dd76503c996e7e99bfc2e4c25c1bd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=cef0f6a352e6aca3352870e8343c6ec3c09f25fb6a5a798b4799350bcb040ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=003a9925e3bac69560871b7e51880b554c05ce200881118185d18d7b4d068ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRJRFXYN%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE%2FJm1pHanLZwF5FAS9Z6NcmccQCHqBIzgomDtRrLzrrAiBOdg3BqZ3RxsmugC34gy4EwkpiWgt3aadRbW7xkys0dSr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMPC3i3i03tHC%2F0YJmKtwDQfFMO8bA9x%2BBddhCY4567nobUHREvZEir7u6E78Zpf7ftGDn922KyKzKje4QdkeIIspcyhkGa17wZlBeOl7UM4UDfwewVTChf76rp9%2FiuuX623j8%2Bb1FvK40nqBPxjpgSLlrkhvcgcAdcCVFd0XskNc3noalPa4zbnDYLekDOTCPp2P7RxSx2YZOERJiiUaVr8jwfUo8SHGe%2FYwupfZi6YyYKpTt9eDHDjvaIsxjZSyi4e3pbVX6U1bO3uAM2Y6CU2IH1qVv61TRSfb3QVRb%2FqWWtFodqwztFSs4I2Jgd9Jq2kXSiEplaPaKJ%2F%2FBTZj7kksJhXMdMtl9Z3yXI3VDRqeV54ZTN5qLD4gqsX9zrfEwQ8PyHhcBPcmhYXb4AZvuP6UCVkVLlw9Q1e7j4wwjM9o2QvRQmR0bu12Ce8uTGCO2B04HtHMmpCl1wCatLNUXWll2E4eftHa69uwRrpHrIuEfcRLhxR69vl7LfWSZp76dpwrbH8bAN4VgDyUOgzD9Rmo1J0h8dPdwdMDr1ZanNKNfx%2Bj0ZS1MMIVvWzaLMzZcu7qg5mD66Dpxp1s0CP7o3tSQyqIw%2B8h7ROF2%2BthLPJJT9T2R1mSZqRXPwbNaFBnaMt32o7YpvI1x6EYwn9j%2BxAY6pgHjr7JBxuF1My4hLThZxdRC%2BCP9se%2FGWx%2FTHBJ%2BjLp3dNNJnPpeuVoH8ujTIeChQDx0AKgeaggI3GbEUPMDD1X80l1eo3pPasvtdC%2FFJ4Xlwar%2F5NY6OvtKyZdDJclTJ3a6MRDnMdMSGpownpsjNd3IkfoFAspDIIhmvfdWG%2FxWjCItQGjOkmnAvDOdrlYefWhQrxdxOW1qbHRmUkDsvk7jYmNzEP4w&X-Amz-Signature=22a6ba7953a951fd9f0f45214c282dfd01582433d1459905cb12ddb19ab584c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
