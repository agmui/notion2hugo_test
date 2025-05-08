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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=4e63eca4db062e5b558002857de1c4039b3ed5793a59ac2e632f04bb5eeda850&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=d992537a589b232deda1ac33d6f49e03fae52dcb7f2647039a9ca0a18d63ee58&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=6faa94136eb808a3269403c334e70266e4c0e17f4d5b2c921553abf3f6384b41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=2a029ba3e67119012898ec46c538b51a4d428813a5e43d81f8940508efdf6ab6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=aaa09847b05368c03f71dbfb2cf2b0133df695fdc6e8d184ec658698c7d7703b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=dd2e252a1f2a7fb449688dc3d1c8200721989754f5630e0631ad37ef371fce0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=fb19deae18fa3ab220454702cbc28e289a500126f7b664119c4be6310d1cc68a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDWENO3A%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T061255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFX3k9sOtk%2BSfSY%2FoyNjWgaN6%2FQO4%2BwKsMzpNrayrY5gIhAIipqFG%2BEdsAvZk7GRuBnv3KIHSH7kyhuuGVbcEpTelNKv8DCG8QABoMNjM3NDIzMTgzODA1IgzF8D5fVLKw8wZ5q%2BYq3AP5em77Ln3scktyoQcxKGaZiSYBf3dne%2B3r0BFgQyvyKm1%2FTZSefn9dyywS3kvIsDNuZetRxcud25dgoXrc3P%2Ftwk%2Bh0juXU653cgSZwhH1Qfw3mi212qEth%2FWWvsHHG0ZaUzJ7Mtq6y9vNGxR0edyB0WMEfQnmsb%2BE%2Bo6saX3jjXjK%2FbF6JrzQmMj9f1UCmzElkvWzcaSqRYAuATh5MZI6lvTcz4cANbGRul%2BQSO%2BLLIfOumBZLRVQQBDtbrm0EikJtE%2BfJafcytUSY3lA%2FcjvLcEnOV0S0LBaJ0FexAuvBhIWjvkmIgKoo5BVJ8d0%2Fl1MKfxxK2OCdL%2Fo4p1B4IIA46IK1qlg8ZZAofWxSftsKevVXNo8e%2BV2RXAmYXyR78s5cv8rUKi5j9rr9PbXSg8htu3gvWml99SFoVNr8%2BmP%2FNPIIT9jt1STBhtaotmr7%2FHF6VYlr0mPSbknpOe1zuYIvHQhosnal4UczM6BO2VPxBTV5VoOqhwjj5B%2BICBGRl1WuePdh1KdqpImHOVNEnUGmWeMtsj1XQgeDP6dr%2FDnKPKcTIQFLWbkILiVLt2tUXMzKi0pjn5v8btP1wlwDHg68Ic1JP%2BcyB9HPIBTPtxxtfddbGM9JMhkT2H4DTCllPHABjqkARH2vDfqpHunrfMRcbuhTlNumJadgDosQtdWyWc7L%2BskTPqjQD5PKRPLAl9oQyN3VR2QOobwaWTI6dzgdzb3zNniAkj%2B5GFszgjcsWVzlrgH%2F7G4WwJ2TWCMeezTvXeW9hqVtzQIeHAuRpRT%2FCS3FUlTCgugcrGgtMA5Sl0xtTcaSeU8mmutF%2BfIgXopmMT5%2BtvG1hkzJNel69krgpi%2BKUt7ueu1&X-Amz-Signature=cd0a40fc69d59c07271ce137aabea8a50d5746c05b4221752db66ff10737ebdf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
