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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=50becc10f0971084ab7a65e068c9a6b4f55a31e63324c5f298f93254aef763f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=9040b475f70b500dac5fabc39952890f995662bdf0075afbfabac6a3d90f09df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=efbc38e36afa8c51fe7812651dcbc73f0cc933cb58c07ffe909c31ffa77c436f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=7bf36137880aebad938fedbb6c711017430e2fad23322bee7552332e7095340d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=75decb2619cd4fbf744417cf6cde72e80bc6518dc6d6c0a4b367cfa17659efd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=dcd0b3cadc670b137055ecbe75f000764e2ac3660c521f6161d0a712c31d19f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=b1865871330115ca4e2fae0388799565c2053dc7dc70aea33867b1c5f6ad570f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDXA4OA4%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHt5wnnCddNvokMlQYTKtodNU4Addhw4TXvZvVJWbjVtAiBblWgjND%2FIu07xEBU9C2yt25iAFl5%2BbfgQHpx%2B%2Fi1hzir%2FAwgpEAAaDDYzNzQyMzE4MzgwNSIMClBn7pEEMt9iejLXKtwDdIWUqh7KORdpdsHs21mFvmwVps5oakaNZo3gP73kWG2IbHcr6RsCP3dqUEknFBARmwpPTjdUjAglgrw%2BhcfizCUn%2Bz6w1Upgp0d8VjWXg4A7e2eRHOiJLgTbuzR5UdnoK%2B0mdXTqz9JmNtybR6YALM6EcCxdpf2MMDLJqJET0WQNcFTQAG%2BLv%2FwQvmdBxus2AT7vfexuu3IvB90zD707DcgXkRPiKX7IyLM6MyY%2BoY5qyFycwbkcFIuPcBk3ETqcxxHFPVjVu8eMWq1ETKyYXrx0frnut2%2Bet0HEtI%2F9gDDE6Md6XzDQI9skgRsc090nk11BW74Duo5K%2FKSPyhuSgDGNGzFow7jG7h7XYzcmljnzmTFQvE7bTyXbKz3Z7yQVYwPvlmGnaTtimSzXZk7RpOzPIk7DuvAPWICo7Clnq3Y6jjbFHLAJiLiy4zoCeKLgiDGB2FWvnOyAHCL7HwQizAdDDDlmCcvaXNxK7MN%2BdIcQRgL8yHWW2OK71hRliEEiO0n2iRXJE9idaN6dXe%2FcXITXjFpkCxVwJEaGcEY7HEiAffQhs8RZEkvYrdlYGUR6xdWjOh5rnnhpO89tCc1NKkjaoWLjze8n2Iw6sHb85HTWfqP9EAAyKDPSAYkw%2BYGtwAY6pgEG3HELBrMeh%2FHxAkF0HLLeEcDePd1E4TUsBDnB%2Bt13YS9M%2ByMvLqkP4rY3JiQV0o3EZ0bGT9%2BHHnOB0eefBpCBWXkk%2BXbItICpk3LT4Q5M13XNnn379Zhrvx7Okz4%2B1t5%2BYudkAcb%2FBCSnNl6ek4rjAB5Sb7KR5Zb7IDYSoDssRugW9du5Ful8Gu7b2d6xRnmEVUIabNpWyIoipXHup%2FyZMhScLhKJ&X-Amz-Signature=be210c79839735d4b267a1debeaf9ba457b53862695334018b06633bf7590c14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
