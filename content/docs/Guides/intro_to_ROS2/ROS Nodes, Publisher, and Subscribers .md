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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=d80fcad158f21fd93dadd17779b01ad7e240dcc0069decf1151038cbd4948ecb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=3b357edfb91190a7014686fe4435929307fd2b9044dacc401d9458a52f97a07f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=b090a4eed9cdf9726e07fac598f886bb37edf4fcdc535555e6bf5613bf2b775c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=549d149545d0f695fe82aea148e8ef978771f96071a116603b0e8f11164a7c36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=902057742eb1d938781e63ea93f287675bc996db853b8fc18211df5023ea04b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=b9301e34e5ea47da245cbc19c5d3e8096675227c845a49b3bcdd27f4144c929c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=a2acb7a3b96d402a70f403bf41126cce4c32a4753ef0aa9847385fb1339fa23d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YD2N6Q45%2F20251212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251212T014432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQD5%2FnSv3hZK10P1a27DYAUSHfsoJX67rs2siSp0jhF8WwIge6qgcBZyleaFiNuzWAK0ALIV4ew6PHj2JBzj%2Bs0IcGwqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvp2lxGcQMgxyLX%2BSrcA8tQjwabN6xFDBAc%2FcWwZuaRP973g4mBzteRwMU%2FFgHjlpsuTyZ%2FPAGMegb%2Fleq%2BT%2FhZERZaB2%2FiZCOaJ0qOW54oYwSDcA7lWrG8YEn3CPz0ztcW4gcZ3b6voPsIW4tvCg3q6ycnSYTjDP1Ta9YLzSzTLvdILRQ0O9s0V3vzVsDlV88FXO3kG8mONZA5ilpwvLWJ5KbXYfvSvsUjH5iEqV2dPwvgvcwFHVvH04HYeGD%2FtHDYBDFy6w%2B0DHt5sy6C81gRwx9CDS7eVXIayq8I3UoPwJo%2BH45gXu4FALnmXE0ND0oZjrA3PDM%2FCb9yjnNlxkgOod9Mk%2Fn6j2H3c6r1lMX2UIKZNvx2cgXyp%2Be8X76WnPSYtgPlYnQgmx8qAoS46Sg7OhQqEAd2qHxomudkyLt%2FhIYpBeN%2F3X6iYl%2FJeuVOJ82KCIooHdziH%2FcsEqT3viIxDKyTpQXPBKC037%2FIs1rnjlJ3680kTBY8J9GPMJM3ohMeJifWj5xEkzm9RsYVdRZCrVX4PEBxuc2qY%2FAJoiC5cjvbpmhZni400g96X3jT%2B4PA%2BCrXgsLO7QvZ2%2BcJ4miWOWGX7Had%2Fjsotujv0zfQ9OiDcwIOLClUpXazgPQBKmeDrX%2FZib4hV4fIMIHV7ckGOqUBguZ8q%2B2f4RG1Ybbj9BvwbkD8SaMfn7GT0sXqMHwrXFISzoVclknN41TJF9wDb1uyEU13NFQBQZlo5cGFTWWIHdozUZlT6v5L2R3Y3iqLtsfm7o6uhMVYPIy4LZxHZrnzS7r%2FUbQGfVv%2F13q9KWFywJCSe3qyj04JIUoQmdYIHhjhc4TZK%2BafyZ5dU6PEvRs9ukhRrTdQPloHpne49YXhtHq3pjdF&X-Amz-Signature=7fc2f02b566d7dd5c1870d37e7615f13bc1ffee0e641fde388bc815513380920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
