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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=1b41b84701058be4c83a58aced5c9bdd7638efc86fceb6a03e196e7a2860c5ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=ccfaa2f582b538b2665513c13f5135b5da3166bc2f8c73240920af2ff9f8e230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=0a32c4ce977a78175079dba0fe9243e433e1c3e08b276999bc23094a3321852f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=f9a8fc091fb56990c04010390b6b781f9008eb4b16afd8da75a978a18a0b3216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=237879baac5c858a0a08d36884fba08aabfbed0e745d09ad4dfa8d2cf2fba649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=74eadf0efcbc0c5018ce0cb46966ab9dddc2bde7590572a9da64950aa56bdf59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=c3ceb873c9dde812725fcd93edc11ef7432f5cd5b1305b221cc7d0ba4d0bfb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU65Y3DF%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T071201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCVFFPy8kVY3%2BWOPs0FbQN7Sy5YDSRLMmX9E%2BkmGDV6vAIhAOrX41y5Dvne9AzFXKjIXWyHXQjscfiiFBFdmfC6Viq6Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzD%2Bwj7C69qRHJEb7Mq3ANw%2BdFlS7fRn4qRhtK4JlTWYCvaTvK33o7xb5cEeccMsaAa74Yy1ivR4Z1zmhqJ3LyJdoV0ze2QNpaQ2f8RN4%2BMnF9arzoWa13KnzPRsX7%2F2uCK2FNLCPYD617sACRX0fBdpwNYugBcPV58zz73PKro5aIvmS05r2XqV%2B%2FB16gX5aFRpHwx86WZ5evdBlJHlp3a%2B6kSVQ%2F%2FTubgt5fFxPnLC2z%2BgmshWrR8If0ZbWktp4mlUyCkc%2FszVX323lM4VsrXESXjpGuRPex9LuQ3FtJENldhsc2AKJJ2Tj9XhCBTDTODgicm9TuRGMmv0DAWe2qadDvgXgxhIfC9aypiBdZoNBXsZaNW3QfWU%2BSISDK38LoicVEDNF1TfIOHHnvo3%2FbORON2zYX7S0pQZ7RxxzKSi6xF3I%2Bjq9bUNdxxKKvoq20jjmHcFfe%2FxzWru8k0I%2BRKVL3Pdaj2Y2HSyLux%2FsQBNXMH2yhS7SX1csJM0aMc6EY8Qh2AUcqUvrTokn2f4cZK%2FXoDQLqDcaBig2ZTjmTYv4g1U894uy4hGjBnesqlb0A9YsMZmZNNEyLS7SBpofiz8lajIWwoj8i%2F7%2FwaWtwcckoB1SNPkyNFwbpnM%2FQ8HHqxMg2m518KeCpRITCV5qzDBjqkAe1AaLSS9CPDUiG6X5ecWmAE2fBJyIthVwCGMqE%2FIJ4pDUQhgkLuNcikMDL3sf0edRg1iU4oWTLDH9NqaI1tcXHTWFl%2BTfc2RHYMrESRmPeJrM1tXLJ1c0i3vZjWG3f2sqfKLgmnSivR7jGgKt%2FTwb7nNkHJuUIoVx7zEStwJ1yQZ1yTgbT6x0jd5yTagr1Tsgn3Ea0Y1rCMtdY%2BDOs50lJMme1p&X-Amz-Signature=50456e73c326aa5ebd7d4ea55e2878f26b5af9ab5eb1e8e2a0c67cd0b6e18864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
