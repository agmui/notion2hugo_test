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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=86dd4475d578909ab6aeff3719badc8b03d2669c11f13b53eef4e690637c83ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=0de08b4d07947c8db20623d7bb482882c9d881149ca63c2efeeacc45d16082f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=94683c0b9bbdf87e47585e75ab0f126e4fe4e57f2aed99a69c9d31a707ab55f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=125fc55c8f98d3c4d1b2df7ba4387c3b5fd586e06de62a0722bdd22cceb8abb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=635c33eb48d1d882d787b0f020a80d3ee3f1b3f7926e1c0d546d7a8a4a571eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=4cbcfb956e1c2dc05fae367afb57fdc755fedec777e39c44b7276b8164c927c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=8bf760886e4435aed72a96d3fe3778729a090bf881f1045b54d28e34a1efe1ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJKFURHB%2F20260103%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260103T014147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCICP2pKaSVfg2ME%2BUIsZhjzgFcajBX9cY8YrtaSNd7GYTAiEA4bCA4wlpSuKQAr80OX4r5CvEAEMgtFh4iboqin3kQ3Iq%2FwMIBRAAGgw2Mzc0MjMxODM4MDUiDJznSHdQYIEIbCP%2BnircA7Gq4EKVknCXmUzFrimZe5uvJf9rfry6Rj%2BgZBg0DDjL5%2FcGasG%2Fb5m8Akwxh60FD4%2BK0eMK1cYSKEfsrMcmeiOFXO%2F5OQqbMwEvst36B5MqGnJbqQml%2FtRVoBxUrJJM1zr9adjkfkJa7KD1MRumvvlE0emeGkQfulbIJbSZP%2BhV1VU2oLc0xVMS36o1A2%2FszEKFRiCzyBHLy0dc%2BC4mfi%2FJVJC0osHBJCBf2OK0YRdeXSlbU1rmGpmec1k%2Bj4I3kWDMCM02T9G0LYx%2FeFSkht7%2BBq4AXg0thD9ToR7xQOk4bhIKXN1JKK44ZpDtOgDJX9J4wszeugZ%2BA3TCUQe3%2FyFSrZEWeO7zE1bMx%2BpPxT3edNAlDzHakhreiExKgFhUbXGiip4O7RbuNBhnsbFoJoXNse2uglaAFCSxhe%2FJynPcRDxEALy047uCFUzo%2Bz055QiQ5hsLiDD4vPl0jt51VousC7ZdeWKxPJplUcCcX0Ajd3KcitDwTwqZg1Ompjg9%2FNXH%2BDux5hRlK2SzMD1ut5OmHPFhHF6Cgwcap6U02HrN3vj%2FH3IttsQ%2Bjuq0w72nZzHeJwc0Jn7VONiQxH9%2FYoZ509p8akzeM7FtUWh%2F7zpCXr6ruvDrUUoAZaZZMNXQ4MoGOqUBx%2Bb%2FgBIT8M6Tamzb2jXi835NdoYAUuVeIW%2BcacU%2BbmKFr6qVpH4j1bHpsU1LUnyV1ixTkq27eThjU%2BfL3cVtr8beSJcb%2FTH8dP8GSdIpbgLLwo9qb62hTpaUjrYbwThGc2%2FC0oj3oAifBsF82RafFG2Aqe%2FQdBSTlEsI8l0%2BWnCu%2F%2FOx4YBe4pL4kZ76GlQXc0U9UruVuKiTFh4nWaxdqVgNPHmq&X-Amz-Signature=0b72c3163a57274300108be694387a04759dc2a2c58946b0d4f57110199e2d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
