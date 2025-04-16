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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=1963a1c7e522ef12487514bd210ec45d05939dbbaa2ed774c2a376aaea10d503&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=8109a460f497854f7bb1f576e6c8d10999a29b676e3760677abbc3fb1356eb95&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=726b0044893a631cb0a1713db1e61caf19391809e04943fd9cc71870df4b824b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=a0b7d7fca0e582c40c22f6d73f7b4d7e761d63d79580387171a7b0b4b7ab4ade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=cd7bda76e0f5b4c82d93253195403ef30a8abdfbaa4fba9277cb98ac92ae8428&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=e8cde76d47c9f56744a880662133ca1f8644e591c215be8a6ad883ab27fab20e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=29654e46f744ac87b85a0f486fd2f48e0337cb512a08627fe5ba46720f147d01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BZSGJAE%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T081218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCa0jxdFLXRDmO4DCEcntBqs2B%2BQ8GYQkCbNggKwWGSAiEA3ge7RQMYMUaIOkMkbVPHo65hNBQTBQjenUcBFCy2rA0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDC4JG99506T9oAeO0CrcA97PO0MjBLsYkixhwzm2x7%2F9JINZseZzjYBdSh4luDnbazuqlLwnj29NQFymcVFZ24RGtl9AufdQ7ArCX7xh5l58eqRSjPziH56IVz%2BwRXFoAqmZMLkgakvGKQvJTAAFC1b3jddqGTA0CnGMQbtrMW3aeQFLtQDR39%2FRZk0qNRWba7YZzmFRnDCTkDsbfET%2BKIHBlQNtiBky%2BVxTm%2FjZL0tDxo%2FwtHECA%2F%2F9hS3swbbDWp2k0ikY8E5%2BJR0Bbrj2w%2FdRIyHzDpjgKWNTDZwS%2BVLU%2FcFUu6rEh2YHLY9Gu0T8zI7ec9gEWwRLxSqqGTzgjZ5aKsFcqqyiVptk41NU5P%2FQk0EGVesTRhqHPGXeSZfWcCHQKDmMUEwkxxjLIw5SMFOqXyg6DBMNEPw38MFw3KYDGcCR2EUP8sEAl%2FHqX2sAEI7PFPMLEign5eWb0UULCBupAE6ChaP6P5h8YUilfW8QPL6VTFFEG1DfueAm2zYqM%2Bd32G%2BFuYl9BAHjAdOYoIF66X6fAa9Axj3FqTAp9lE%2F5WjWlD3S8QXos4TeJKu0YSi%2FeDin%2BKO0WXbJmevR55DcQCdzLP1R%2FbEHq%2Fn95VW5hTp1EJsgf5maHXZl5soShLLR2SDZijZ55KUrMIjA%2Fb8GOqUBT2zEbilXk%2Bwol%2BQIbprrk%2B6fjY1ZOfZIYRCAT%2Bgs9yV4JGV9krCv3Q4N%2FfuQf9La6s8B7pAa3yDnrM%2BQKYYLL8r42yFjJFq%2B%2FkknDMgjYKCEBAhUcCvTWwpGxFrlDjghYRq%2FusfboC9j3tp%2F06EpVGOzxIUwS%2FN85Y%2FM%2BNyDQYaC3ALMIBs1kx1IWIaFNrLQ7InqUUSZjQUMsATb8hfy4WhsJU9L&X-Amz-Signature=380a2f5d83b49995660c164008cb2e223c27c6be1017034e7b156c62c25571d3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
