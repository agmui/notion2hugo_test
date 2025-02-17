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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=88ec95fcc002a76694bdf461a41e5fc7b2d184de70945ee52808f2a990d08887&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=d48aafd15ec90beca5134c9d2200c95f9b1034dc19db6aa413bede22563e629e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=9f581fb2dbd1e2b8edd37143357bccbab08d4a47ed8273758961cade1fdec286&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=272cbad1af6d74876025a6b95c3ef1155a43f436ee256d6024049a124fdc6019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=95b80ded3531a292966b45e03f625059b4b962ad2c5414f575b8ce0b9f7aa883&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=93cbd00a5ae47220a8ad91a77a4cc8f37da3f230bc989b15b52653eb6cddedd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=f9780c61ff360fe645c27620fdef5d4af8347bf1cab85d167b818efc64a7ac29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6TFEDZ5%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T100848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCZ0%2BIZ%2FSMULCSOBhv3VjywxFhVUtrgo84NSojG8wHpugIhALGQDtWEnylhotYyEoeTsMt%2B438lYhbDIWCwILYOqJZkKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEOaQbomEB7fByq%2Fwq3APbE7gqhGoqKj9iUErf2ktluGsse3RC5VUrGS0kXzUlco03LzGzplbBCBVadSv5KOdgJQ3p82%2F01cpMau4DlIehrldJ8r%2B%2Fv6B6n%2FqI0XxGpfPf1cRVZ06VKP3V0gcImt33LplJ%2Bznz09Iah61HRoI8L%2BSeivYawwB3PpMcyCk6oFNMnsQMR7Q3AAPGbaYqgPyrDc5wPKxyk48XQBPklyUpNkPiRDY55S1DHn6u5loSUW%2BqLQkoIXop9XHuni9bv98KM%2FxH2Wo3ShvoZMXiNbs5UmjnbGgAdn4nzrvLWwaBCq9Aocps6Mob2ET%2BNj2vdBasJmJj7X0Om5lzxUoRubkjU85ic3qdEw%2BqTKFE8kcSeRccaeSBfDY8sKfskX%2F4Ch%2BdI%2B4oqvkbzhr9QJL7f6xxy7QYoBVX5P6fhGVLmSO4uTOQYC5uyn2ZWT8fg4w6rInS%2F25%2BMw6IRx8UZ9Q6hC9yppv8bdQytbLOlPX%2BBWRFmLNVI%2FgaHjgBqU9TvUXAY0YSWO5xaF82f%2FUL2YXTPakZKThMN%2F9ZwMllM8%2FxIsfqngzmmoAECmB%2BJuhpCbC7omHAXrFkaGfI92dCUJZe6fpyguBEMM8534N4Uc09uKeGqCY1gcv4RvUXg%2FO8lDC86cu9BjqkAVvo1MZ9hjehjcPtZuOgRT7jTpciL91jh9NjiHJJSiS3IP3uwIIh4nCLFypfb8TPayJJie%2Boc0YOsBbl5qZ%2BHO16OcR0znh6bP6LIkdwTQ4mo7Iuw6olRafrYHl%2B7FDLlgA%2FjtBxj%2BgRdohCMvZLRySgTl78QkRXorP47DHxBH0j9DsU5kEsAV0%2F5DXMkytAZnvrwX4dyuy%2BcPRA%2FPOkD%2BX9VPtK&X-Amz-Signature=9a4a9cb899fc47f35cdeb7149eabd59d94a8a237e13f25f2a135bf61c2e37c49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
