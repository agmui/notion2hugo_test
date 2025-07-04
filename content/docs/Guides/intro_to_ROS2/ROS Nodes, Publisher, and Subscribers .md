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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=4b63c8aa6a4e8e8685b6d86d527d0652b160685f4d30ed98e7ae2dce1d897b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=09b099ea653e228d538fea2383f8feec0b3d2114a042ac2bc5f8bb6ba38f40ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=48acef940c79c0e0f840c58d5032a26bc6eb1acbc5c9894ecfa70c69ec98c7cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=bdae5592bb8099a411334d6a7a813328b9c0e049e45474ad1973d5795cd6483d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=afc0cce7f7e25137c781c2bd282ff8ca8c6e47dfd16f2e868947c6c1d2cff5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=0e008c99754543b8df97d66f878ffe939d5b0f25e509586f320669a4dc04a8d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=470470c02c24b92fe5a504934c64e3e497ef815da22a93803c73c62dc660beea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLEDYZB%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIDewPev41ylFRUxrG9GEJCO15MREuoPNznqQJLini4rkAiEAhmbX2Yzyf0oYkHBEnRMwSNH3RjZKL1mkSyO9ARKh4iEq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDM9BmTOoIqSFPEbqxircA0c60LmKonnQmCqUvDX86z4TabqdgU6ElmVeuOZMzuDNZBNbHdNJ%2F2uBnBSiwrRWIPUy0suYj37xPaOFWS1DhqG3D4YL1sNAKXLuaCgChMONox1TL9bZsoBrM6NyUkcbbxNaiNYbTll6aqHuxaoPKAg%2B9rpJGeklfZW430uK3J0cetx20TFjwFhx98eYV552eaNPYpfcojy9uZnL5NAScipv0ZRyXUoCLx5fCJPR6jUZ2JEh0%2B9T3MUeK0DE8lsZSfSIiIBOsG1a%2BM7Qr7bnjKfoXrWFoIuqLmoqcAAhaEh6TOUuuHzEmSWZL0bplAowbgwFPDodtUampwNKp0E%2BQa2cDZpc9iuOKlyIc9lBouLCpdp45SHqLAsBVPFdRdmIKGesYxH%2Fe0QumXD2v%2F7SHGxmj05HzoyGkqkijAnc8yWcEht7sSwDnvm6D5%2FDNFzSz5cnGctMXxBmtNb4ngq3ygKi%2FppbMflEWufQc4dl%2BtK%2Fp2aRE3cllua2Uy7h7soCS3bClNA0edU5%2F2XB1Z4Sq3tk50JASX3gmhaY5IyxEhJ0%2FBDcHV%2FKYn%2FsmO0uAkdaxg36F9DzxQ1vJwe14mmukqu1ZG69lJ%2FRw6kiuZ5oQYzINu4VGe5uE40WJA2oMN3noMMGOqUBbGmA2eO06zn%2Bkpx3gGfQgA8u%2FEVEOcDOK0NwMKiC17sXRjF78gR3RFwX2WoZWDE4QBzkquA%2FffWDwod02PU5c1BdGnGuTJBt2OOcUaI%2FXp0DzmHi4dq68VtuA%2BusMfSFmS8xEkIkCFw4%2BsYCG6%2F8n1I0oJU%2FiXxxy%2F6YyN8GB5DVLd5YdD%2Fk8WLGeAJ8ztojUJLsNItlH2vWiJa8qqrDaTeWEZEm&X-Amz-Signature=9db43b537140bb4525a17a95fbd55402c8d2376c593fbad3e6b9838d5fdbc20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
