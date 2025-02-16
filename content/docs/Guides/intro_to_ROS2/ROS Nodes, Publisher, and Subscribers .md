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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=2d4d1500632df87e8976285f45d3aea28d98114ee68aa7721d12825146a456a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=3efd769d5b01f4d9528a65e6910438dd7076b0da18fb045c4555ac578b85d659&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=69abc0a83984f985a4575a948be2bd57ca9a055f61af8d2fe2200e339dd6be09&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=2e2e28799e13220b3a7c082089cc823094c9808fd3e3dfaf8f5714bb95cb4ade&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=0a2e41a53574077a104ab355e4521931f3232627087a3f0a79d84a4b759f5f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=9ec5aaf96c973e178092f77996139bb6021a68c4445452095a6654ae842643f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=936063e9eaa056ae4069ddb32fb313482610026587ea54cbd40d8746d1e5ca75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642G3WRGN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T090418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJIMEYCIQCPHbUYZPSoeJytYs2cBsFN2qq93xXKQ2BChm4Vfk6CbAIhAKHseiCXNiEbXzH2dkf7ntNm5vqokEeZDyBehMVY02KMKv8DCFcQABoMNjM3NDIzMTgzODA1IgxFkuMTx36gCeQkUjIq3AP7nt6s2ITNjwKYqD7HDvLWzZRBZoWYJFbouXnjoq4ImLP956NkkkBQYzwy1B0%2FvisC0mWvFeZS%2B0NYgWKCMJChsGsoicOWWQX95kzEVApZUUi3ZI7Hj8%2BVE6aIrRbhECTW0nk%2Bp73CQ5vm1rDRbEUZ8oldoHnZqQcgJciG541aQB4gfJFvH0Pa%2BGSBCG1oMOdBdB0KqNJO1sgtlC7UBOHTNSqogSAbIDOBNYFs1Flbac5tHzIHLjiEKLXdf%2F6C6PwWxdQWsHckirLdNXdDDWVWsb%2FcmErm%2FFSBQJWA28xc736S11HGEuCwJjbYM54LBxS4EUVdWtyCV8R5cPqpkIVDWn%2B3nnybYN%2F2Z7oKDkmVvoGLh4y2H%2BA8HX78ht%2Ft7h2BQw46ps%2FkalETys6yWNHPaCbIMhph78eFsSyNVBXt4q3ONTEFESwjh94WOzWw8YQQRDbHO38hynRfT2L%2FMZ4NJdisegwwjlUXkaAvIzp%2BKJhhE9LaWfZcQM1tNU6xlMe97E42ps7JsAp3NI0H57%2B8FAeQjot%2BTJvJEyy41ZdEjHhz7QdW76nHtsBql3Ct5BCINWR1bNH2cf8xfjUlQLmhi2j%2BNSV96ROkSHr9QBhQ4zASrGUsnMCdarvB%2BzDq%2FcW9BjqkAUorjoxEsxeGY1UwPMkUyq%2FzjcCuZomeCA7DrrwolFNzKJ9GqO818I5P%2FtjnmdEtT2cTuyAfBTom7Q8CQGBEr%2Fmc9t4PdG8885Z0bWecdfqYUR5kGTsWUZ2jmBVd%2F2FzX14KEBVfDhTTvSXrPeUCJwxsYE6sQthuB4vK0%2FEuimbn73sKg0lBVtEaCqdlaT3%2BIeO47l2U66%2BB8lDxf%2BbCQyOJRdMp&X-Amz-Signature=2192f0f75906c7d42245df24a00b6f2b7a6b61dea2d64b142d7d89afaf190ad1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
