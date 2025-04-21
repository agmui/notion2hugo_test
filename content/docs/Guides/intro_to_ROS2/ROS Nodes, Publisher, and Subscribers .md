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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=5368eee70afc257c3fe6c7051b5ea327fa8331f88b199f7f5bb03ace8810631e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=4717bddd3f13ab5e631a44ce1b113b2ffbb6ba6f4c485381fa3431d2120b8efe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=9b4b93668d39eea2b0a23aaf48b5ef1a460d43f9ec925267c6ecc7d4a2376b6c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=3ad8adb2b64e53aff156a3544f3739604b4bd2e76bef3c4e6673b7def1ab76d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=1cbbb4369a5d5cb431eacf853d04ce41c3db324e2ce84d060555ee52c82b9605&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=d1ae8687e373e4b8739e26ffea696e7e145399a82cf2dc2c3bdf38b177d31fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=edd40c879a5a1a404dfe0a9ce4d3741a69b9f2a8778cf08601a6f4c0d7a23789&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656MGLPMW%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQCT0Z0jssBHkSyxPGBpfIuYcxDapOm85ts02%2FBLunrZrwIgKau%2F%2BujSIpC590tAA7NrwjeXW8LdoiRCVvqbCclGpMEqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEcYSjQvMH9RuMQz9yrcA3KLTPDU%2Fg8JThj3oeSM1mCqwC1nptYqHb2VDbFiSZ16d48oMiJkF42fhW5Crxgya9wrpWqwNwfuo6Nlcyv2y3Ivtg3cnrVQivLqpM8prhvRdCG%2BdCgWEe4cm1L980EhwhyruqWNMhF9XemCQTiY2rp8m2NYIzivgvMRTvqeTbMPEezzohqzOy4RtzO1i%2Bqqssu2IPJ%2B451%2FQJmvHEfDo3sJX3kW999%2FkTOsNm8YnOtpH0EZa9s8%2BPkCifL%2BiAfYsFEsNNvnurUllXCI2pry8IEis9bdcovlpbpZTkQIgA%2F5phCB65H2fyRTAsCcG2p7OrFFpwDmc8iUCoivfx3B%2FA1gHARlZO8jb3KHcLzLPRSRhVvG57aIKTGsbemONtOutxN9xrCPP4ndnH8IxOuDMgkrjG%2BvsNliAeVkeFwU9LhXUQP6efhN%2BDxPFzKl0aYN2wym0qk0Ak0ZuW3UkuJWxhCmANR9HzkhOrVM03N1ft7ZV44YCOEUVW7QgPML%2F%2FHBaYVmpBb2MKWYpcZeycSfF0aaW16jLEjGjk8tBumuY965KigHiL6hWLAlfPcxVKQ2HZKCZd4xeLvF76TK2KqWqhls%2BSsCtUrps6jux1sfF4S5jtfxzl%2Bxq5B%2BanjLMOCGm8AGOqUBOZhRwjvt%2BlhOf2sooc46toPlDRPuqxV38TGDTzWvcAekMakq7ioX%2BmsNXmjh3%2BNMDQNfspyQIQ7I%2ByrQBY4e4YtXUkUYkfNsu2bOkDqDyEclXpvoE1ZTSqq2HXQikADsqwsRAsTdNGGyS9gIiRC8DBXje1HAfeCddP%2Fy1Qb2gN0pRY7jS09vojCnaH1SEe9A%2BTAqLdLxeehuMVJhwGLxVQlDkmkS&X-Amz-Signature=bdcf5c4938bd97fc68ac12cda74576597b7f2f1c7baf0bd5b4d2155d3c9f478f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
