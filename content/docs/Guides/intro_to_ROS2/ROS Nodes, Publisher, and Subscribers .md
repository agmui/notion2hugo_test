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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=ad5465a2c94c0b691bb07cfec21461f5c00a93f606183723b6192afa4df93be4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=de8e60ff30cbff4b1eb6092487041228acddf23193460ce606ce4bbf3fe12992&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=2bc26d125991e847ef44e9afac6a5f5bba3dc13adf8fc74edab7d22b6066370e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=2c30ed244893ac71367c7553c222b5d9bccae56d711a656cfc57cbffe16c2d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=9664983da4a51d91abcf531217ed470ecfdfefe0f0e08174c3a02ea67c28a54d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=015edc667c5369a6612900931db0f818ffa51e9eea6bdae4fb8ef79763ede1b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=936e2da445a6db645b717ecdac260057a5de6405e344571e34c61e43d519ea3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZJKDPV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T090840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu0ayZDv8dnof8sLkYzfswX7xR0wVpb%2Bb1CF1FTTX94wIgQwaBRYuA6FSjf9r5dXDMNAdBBefnpjHsU%2BvzRSSSYsQq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDOquJs7h%2BD0SFQ1njCrcA%2FLHwVRXFJXn5shZUsYJcuhf7dREmSt9Z1tKW3Xng%2FowAQ3VoP1DdvCJlkjtb336kM%2FNkR0T%2F%2Btvpr0royrv84ZFeQJxYItkax0Tw1CR5SVeDhLYkTUdV5ar1PTqnRqF5JwxoqLV1Xqd1P%2F12JD7t8Ln7R2Idotv54CUdG0IifVR%2BXQp8iSFPugmmco9ijvzVU65%2FxHKILRnm78jcM0wimGrn8iZI8I3F%2FOr4wpH8xV%2FAoOcaf2GsbHHac%2F6lcAEPprfiMq1sxV2vKMHtjQ9q9QujRn00jf3U0T%2BQ3sU6mQBFd5qGnrPUVdUFr3q7ihRRQmk6%2FurrJnK6Q%2F7be5rVtpJOR8oV4Wui14wut9wvWo9Au8Nvdx%2BQ8JLNWehDqW4NTnx0UVSP8eg0xeyONWLz2HpOfQEzXh7pz%2Bo7vX8uucSQZKQhoDhb1xBNoMaN7iA4rPFAdUR1vFTiimSdi6frwusndz5pX%2BcJWKX4XC8E1HCTFKx58z6crrH37rm%2FGsURsHUPSwt69G56IDtbfvOaJ8%2FQxDyxZ7ZC13UTIzWFVvJEZ3sNeLFY5zAuWA4tXLJuruV5OcwQsUeyy%2BD1KRlpY2%2FjeOTbkUMGRwsjm97FkhSPuHjKkGZBsMwThqWMJTmtr0GOqUB1eyYmWf8WVj0lIuleiX%2FBuiEnvRPg%2FLlmTVkHfZQNq51iRkCshkRjAdRjaLEdocCWiqvWg%2FdNc4AAMEABFcI%2Fjxpb5NEjQ0E6iosE6l2aFncpWuSlgIQx7tL6m8kF%2Bd2zVuGzOXFhmWZ3WP5Nmo%2FjcM4i731JFp7wSc%2F%2B6ZI5hyHCr6Rb3UVGuWGxlIuyL4eOqorqMW8UrBhjYahLWbZFfHhZTuW&X-Amz-Signature=4e2b57cda0bc6ff74bfbcb36bd0ab49184f0966424debaec1652d39654099250&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
