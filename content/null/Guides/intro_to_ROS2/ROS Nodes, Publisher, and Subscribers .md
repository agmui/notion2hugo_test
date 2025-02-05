---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=22f3c0144c5ae88ee37470a6a1084b706ad3be6964ede9cba430b7e575ba469d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=7eff053528aa1d90117f2fbfc168358e5bf2004827b3d40f086f359f4de4346f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=963d663fdb4e27006ea7e49649233d828dc4fdaf3486db8f7703322fca8ef900&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=bf91c708fcb8a340e62fe1e53dd6281f6e63af8d96bd2975f000bf1dcaaf64b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=1a10e2b0d48cddebfe83a89e70784ce0d3d0c369323a1698eb29dcb15a94d765&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=fb1b200515af208128a50cdc99b668899e6d30fafe24fd3a2f91e37273fc7522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=bc2132ec4e25ed8f98b1097204449e1622391dc0fdd3524bd538791d1603e03f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSDG4A4J%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T070801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIBR%2B0UywEpYTihf6wLZ%2BYpIW9ziyCdtgRTGqdvANWylWAiBXujFBEzIlQlYCUgMJVKb2c35riqxRmjVR0ABzG4RYqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMK4DRAV3DNWZuFzMBKtwDsxPBc6fDJmNWy1hQUhd8ZRUg7F1jmSvz3%2Bm3YmbQjo9qZ6FUB1VyVGqyZcrZQReqsTa5ZMr%2Bnjg%2B%2FNFuN084mQPVnCLcjSlIgncEMEuyAd51J1h2FNFy54xPtQTFtaIsmgheeWqqZMHFIfK5B8bzTM5nlfyOjS%2BnEE8iVSpNejhkpVgzNYOva77C6YQcWBCIhybDOqM7q9teh%2BM0kpQDzbMnHMFA%2FYBRahrNnCbo7fdwWXWtysDrHAeXthjEQm5x7ttXoIcveFwldJRbG1RpteV5nEvWGuRfmgmOZGks462JWzjx7sHD%2FiwlEqxGd%2B7pk9kDIUaVDJNBe02P%2BHEhHm9CQFxiZoxo0LpRvXbkanSt0R%2FdCup3eyHeEoY4Elypp3gnqZxn1lDhmuZILtURdgkVB74EWJI0xaNHNyP%2FmvWIgfZjjDxFox7G80JL71aYyPEPLscJcAG1zn6kKD%2B%2BemIz7hWQoQeMzybQWx7SseSqqJ82jTZ6tdNE6bWLemlHn5cLrvlZVrfdUGCb83TcxSsuBieOQXdW73LkpeeJKqiQ8bwkxjtog3SdnYmmeS6YXJwntZ%2FFsiKkZ6a9dtULqagS9zrdMx6PxzsqS6wq1rY4jJrrEeBQYh5g0xwwj5eMvQY6pgGBVOVAKiSCNmpL9T0vPitX92LS1%2Fv2b3%2FV0HDevoxy7pqLzIgehIWnMpXDagX3bNz3oCq9E6K3ECNyjcYJnXaLK5WMj9HrT4O71Gs8NfvEnW9VTGArObbU225LhUTGvl7DMtPFDarEXKsXDWu%2FUQamv473R0HeT5MVpRZ54leKY0WKfPl4yOetsi0Jw54XKznv%2FrwEQ7ayDUzcI7Oe%2F1AJsaH6W6go&X-Amz-Signature=a574344d3c9e04aa06d47612a10d23617338e9c0c5a238d78859554e2ca08649&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
