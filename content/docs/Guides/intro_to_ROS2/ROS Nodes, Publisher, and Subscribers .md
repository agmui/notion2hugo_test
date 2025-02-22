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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=b0a15ddb1ba95c828ecfa80e6a39aed273d9d1c624e7b2bb824728ab32a6b073&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=6246035f1244d9e9b63d3b60c82b5e589fb334ac2358088d2cb6c2117c63a233&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=8caf0047974ba68af15ebe2dbac763a1b9286e6dcd2251c07b41e00a3fd19a36&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=2b65a162cd7bf89096bdd648bdf797f8cfc0dec81a5834ee2abdca6deb89e338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=70633f7657ef07db8853a48b6b856cf68a2014a2ffff932112c17296746e0cf4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=159358000425b4dfaa9a507bbd9a41b62824dff08dc5557b301316cf78ea64dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=4acda03449efb83d7473fd37e811df4a27ae2a5a787d315fc63a3ae44508ce8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA2TI3NZ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpa7RWwaR56BFZEC76uUPRFyV7hKN9bJDu9krdjljV5AIhAJv4ZIfgL5B7gp2Q5DER70mf2%2BOhaFBsE1OyeG7XL%2FpFKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxkyf0fAn4FfH2WPGoq3AOWYRaMIbuQ%2B0c8g%2B9qo9ruao6hdTtC4RTzCm%2FT6Mfw3%2F5%2BNHpiPH43BVF14qfVkN%2BaEDi2M%2Bps2A8%2BZD6dmdnVva4b4F6TH3wyXZtePZFc%2B5r%2FwIrSHluSHd3SWX9CiQx2dHij%2B66bXVXpX%2BMUkfsLbvD7OZABMydF9NIX%2BsqVxcvncszfSkzjuuH8bDj7Sd9eINHx%2F7b8He6N0EHYkRWjnBKphcbcd7wq7KKlcu15BrhjVs9WZDgCqOEgWJf2U1cco2SFrUyQxhALfaZ25bKMZIwAi3HRv2it3YgRGzfXuTLKGrP6RWykFdMxUGzhcxSnkx1MFMboZLmxLtnO5FNuvnSwUpyqbjKu6YCL2iXQ8cXEAAa2MH9V933MEbigoowkHCZ2GDkd1RpPK93VQ50arpcLKPmn8O5OlD5y4Qo9ObMdoVTIwKp8zc%2FF%2F18oVaf7BqHO1N%2FHy94dQeKgMeWnNK4wRnn%2BSgqsc2T7sHXSSuiEWHmTiDf6U4JMX%2FJo3MYrsB5qUdCsk7lOujMa0NQQ9IcdAuj%2FhdDcbo0C3kkmpMauKhV83mWNRK09irznL8oalrGxDJvfJSCAGjazvumDjiraY6akFAfYPSb1kT5QsnWXc2XOSf7PzmBlhDDl6%2BW9BjqkAdHdU4UA%2BiZxIE5oF6C%2BjuJBiwvvb%2FKhHnIcPx%2Fk2mQnRoE3wmhrMHl53q%2B%2FoPMgGyhO3AZavM5qiNJbBR97rPeiiByQ4RBGjh12SmE7sZtWW1NXDY1ud9pPz0g8dgr%2FOXcHqQI%2FBAXqPnSFogkI2tz%2BwRcLc12ZUN9%2FS6cckuVqZ7g41yCIJoaqk03aVDtS1UTrpsq6Pi906dfC5isQIOxxL%2BM7&X-Amz-Signature=def6390396b72775467b56e5f2ce25710965e21d93f821fc500a27d30f8ed9fa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
