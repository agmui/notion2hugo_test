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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=04707880680e7e96c7f91d23160717e53e62f65b660aeae9f35003370632fd9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=d4e241d517cf1beae767055f142e509c38f77783ec90fb9c2a5fb47b13a1e49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=51932b094569ff996deced22336798d6bad9ef27899063ceee884951f6fe2187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=14e6fb3ee1268fa2d90c5d2100824f7b684aefee20a0b5bdd18bc8fe8029186b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=22ab66b1015f4c3004c4f2c22ab9422e5d24f91be65ecfccb4b09f1234c4ebeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=e939db2a4b92ee376e52c86ddbb4ff2354b032d6e8b62a89e9d4cdb178be021a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=f1285f0797094e7c4631e7f0b23d6cce5a47ab53b874f525272bd0f9014b9127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMSHQZYQ%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T035343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCKo6JWbNJTvCzqrJ2i2%2Bo81w4XipwaW1o9Z2c52YzbVAIgWaFzUz3wvUowV5YLEcQOV8yr%2Flm%2B8UVa6IulLzxofnQq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDI6rnmzeC7Zf4Ej75CrcA3LO13AKNOtxrnCIEqrW3tQ%2Fcm7buivVe3M9K9s9iTOMyan923SUhMGQ37uK2OMbvbFCuqkPKg0qJ7QCuJRnZFEoF2ZDBVRxSLcYWaLaHK%2FkJdFpj6ov0LYBb3BLyyQG1Pk62MvvuaCC2pTHHIBl2DzN4rLqdTagmL6BdpQJG%2BOChM0iFdwDHAm36bDskiad%2BxGgLEWiUgpyvobutnQmUSwrVq4vF7C3bTudXE4195uJKqHvp1y6gctWkCQhnktm5Dfyf7Hc9o6SvvYy9GmfSNSNcSMqnhKzWrKZvYsv9FSgqacEyGjckmBQZP3mTfkvNCb2GJnLOVVYO%2FhVHLEuq7wO3gYI1Wt%2FU7m4Q0YB%2F0%2FbHfLy6ktod%2B3YtqbwqFzlqerS1fNG6GDkec0ui5eEv6aGF2SIHT6EVEjJQ4DWRZ2rZQaZ3fXtucDTwbP%2Fnc%2FoIo9oMMNPrz6LkvjgvaYN40LNa%2Bm9TOPEVXAmJnCp64jFf7WuhsQRCusRdxtiXVQQOjw8inNNS1%2BNIDMG%2BrEIsJZFZDdV7wPiPPBevAJE4lFr7CIhEmrUjqPi7kQ2WCaxns0OPODS%2FRfjHAAE7NBEApo6XqNB4FDWG6LmjSBFSihCOW5dGinlp8JbnQaEMJ7%2B1sMGOqUBFUWEKWX8sQ26UA2mE3jIasOcR%2B5GP%2FQdIbkls0t33menszK3Jjs4VJQHYfKiAUsRklxnCSzfYTI%2B9TBAazarxOTu3E4fNzdVZfBzoxRzsjDHoYu8DelNcGrSLIiTmLDQMI4oGIcIxhO9sNSs%2B3wWpI15opfA%2BLSIbkWrYMODUPrDmB%2FBhL%2BJo4RJTRwPi5mPHVHagIwhCB7%2FHBGZY5jhEIBQXMbM&X-Amz-Signature=d7607d95133aa82dc0700ad871379810f1cdde955dd0110e7cc18f6df8989d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
