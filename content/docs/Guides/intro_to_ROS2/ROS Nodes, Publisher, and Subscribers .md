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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=10aea8b48c55357b8311d3119ccf62e9e4610ce0f41d35c4a5ef8aa25abbb780&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=f0faf5b6d57782d5898afc38aa7cfb569dc3ba81522c0653bff2a12d60c86566&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=b24e8941787e3da8585759a34dc37b8c10ff6aa44bbf1bcae7be65cab05ccc3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=0e9cb2bb687cf34b4763b5ebb5c91ed2ddf193beff682fba687921cb996d86d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=ed3608446c17c9bbe37785908a158af2fb8d08bc6b58c490be921605238a1c14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=952ac4e4eb3c51d325411ada0b3eb301629bb893f44c2704de4fcf15f198cbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=a0479b9e46cc1db51b12042b1c3ecd8c389747ab93553567a407c33de05e332a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JMH5PMG%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T200811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCFCBbemSTttZyiPVnRfrYKZXEjExFQX9YdNSJKqHqmpQIgQROBs8iO31A53YNIFRTVm1dgGdtmtFowAGlBzgXDzLoqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsquhFzdrIih7U3QCrcAzPTbxnt6cKsMedcHXpjQs0k7VLxH3jIpqXkd3gEaPRe%2BR8x38LiGJekaLKtvWuBwqsmHbVg%2B91kn0%2F3sXHdqZ3pCGNxtW81p6ZbTpCm8aIEV44uhX6Nxd5XGTLtX%2Fj4fj0iSNpBSCPsDBPhWRePnKyiBnygAPe1Pl96eYBR%2FnE%2BZ7rCBcf41hvYQ8I%2BlMjPbsjQ5qEg96D2NfIANoYRJpZ0mvEoAfL8buAy1UmHxDpuSz8E3LCHY9zQS5xfQiY%2F27iV7LJ6VVcJzMhUUa3M%2BG2cKHqq19xZq6GAoiTrcDDRW3rX%2Fv85tRQ73U9rfbwN2W0AIGHO8BsFJTpA6SCxU1ZSMFldKC9FSNzD5IK4hxBd2XHdUQc%2BQz840r9vNstoy%2FkX7Y4gumFJNYiSGoER7N49IKjHWeS6GOQ1wPupRblTYV6PdIORMgGPBio24beDbJT9c%2B1HjdOIwUZ6QaJjprjeYCqHe%2F47cMJR4v0TS2o6BRC9z1q7ncuQrqYcEkS5FKLtd7QHSWqTE1chdUH%2BfEn6ttL8gQPg0WoFScXEEEGxNNQtvx%2BFWbX%2FY%2FVd62ZNLycuOnio0pMMg4AALMZQWcoGmSMtBKEhlqzbAaIdbjnn5uBIL48t9juXn8bzMK%2B2pr8GOqUBydxSnaAqfH2vA86kb9S%2Bd9rdBk1NTf47tw6M191HmeysMDt8PZOGp%2B%2FE6x%2FyucyEHG70sGOrfEQwlmENlfuFYp7tsfv40a0kh6bUS0K7NHUihsqC5K0ZblQyV1wJSm%2FytcReEo%2BFhVbt1%2FLTZgtBRFrZ3p717OOJdI3Z5GREEepOGzNdu%2B3pEiIbZoz2Q5pUxuueBCEvBiT1A7kX3n4o0TQLkXyn&X-Amz-Signature=3f41c12b1c713bcbd38aa60b3fad9cb4780cd4700b5448a42debfd7330717ae7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
