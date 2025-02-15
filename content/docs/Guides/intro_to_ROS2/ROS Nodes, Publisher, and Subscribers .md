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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=a4e6f1f8e2ee0bfcb1a1c70f023df37e4a678e7f29007018ee4df2edf96dd5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=bb2420fac65b078bdfa4dfbf8fe8087ec5f69ae162c9ca96954afe7365ff42ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=61ce0fda9bdb086f383709c6f36c2b700e28a4076ac75f64c10d04d809876c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=9c6efe6119788c632f4f0e20cf003fa2692de9421eb261cf2c9b64bd26c90780&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=dbd5c79ee8ee8bcaf823d17161b3989ca92b3e9e5ca5b5754698ba2c8eeb5fe3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=590a07ce4233d9c29284bd431f87ca1d964ef68cfcb61b63be43cf4e682827ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=cdb1c1aae88d23bb2fd1f82ced54e8648ed6b228731a26533bc991e4797089b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSVFQDFA%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T140204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIHR8J4k62cMiDhTS6CXe%2FgASIhOiOnPCcBuGxLhhTxQiAiEA5gi8hj62GKS8CiAW4x4TgmWL5JGIlTJ2EDsiq%2BR7z0Uq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDFxk66k%2FOe1iBs33cSrcA1wPoT4vubYis5NiPjpHCwEIm5aRNP5Sp6nfiJc3KM95TMPNO026i9Cde6UpfqJ73%2FhJ%2Bx01IuttFJVYs2rRbYLHmIyaahAp1JTbX9joAGiLhGTDWziwRhSKIBZsUiU7ipfOysXr4bzrj1Ut%2F8930TuOQeUT%2BP56Vy4eljVlKeryhkl%2FAmUkMgiuzsWaCVDc85O2yp4O6RuOiXYVxw7HUqRz0COmi6wsM5IRc1UuCBdWD3LP0sXeG8gyufobltgirD0nYeheiDl8NIDBpPnwLxkctQT5vRURmfgODSY8HS1X%2BX1OaIk1H5dq680yAOhEYO%2Fl2IErYUSBG8F6WZDul72Gl2CZcIHZSx3Zai0XOUgMLoibqVSAoLReuIX0k89F4BPEA%2FSDgXiV3HIBPB%2FEyImMJLkfHu60LX2LYxHtfaEi%2F9de5pcHHagSxdy%2BolwLmY9DH1elClZDXKz9RDfJRS6QCpGVc0UYQmPCUljIkPqbxoej5bAuryeicXva5DmK6sglluhrsGUSANnl6efXvf5h9PkdeDihi5xxYzNlXXPLmtpw%2BWvizf8bBlztlc3C1bB988A7UqigR627IvZSeCeCxAtKKkH%2BO5FoppzEzgvycHn5FpmWxzIr%2FrPPMNLswb0GOqUBivuxN5%2FUaWhwV0BkYdbxluxx5Mh2gvMcNAKJCmunhD5qa9OHZFjZUKwgm5z5KAZs98p4jYOkE%2BtDCFoc2N69RVofdzDyBkkr9yZSoGEnxuTuY63Yo28czlT3wHR8vqIYPoqLwhvtzpnE%2F6qkjd4xOsHCEqE3FpLh2cgdr%2BtmvdhORTz79JmGHw5JG092E2o4AqhpXAiVSBtKhbOARsbNcL34HwfL&X-Amz-Signature=0bda16c9d204c57d7f22f11364517764c7e4901ae6c716aa7d01bdcad6352cff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
