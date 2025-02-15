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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=f3d7a476067acfb9515391bfd0fc546d787a1e1b2abeb219dfd0343f40813de1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=c4852a9abfc7f985418e549d2b114a68b53f64e00744bc8f0281e40e9208860f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=04627d4e0c421461049c05806f584e3b14c344d23c84e5cc0f5808a798a1d3ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=abba1b0af3e1a2f0a1c5ebd240b16c40bc08a5a01158f9b64263c076eb17cd11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=f93769f3d1200782dde780b6cd1de9ff876059900862b5e20847d2c110ecf97f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=90d225b9b1660167e15d4615744fc1937b54515a715d2b01bf1705a1155fad33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=d8519fa579d3c79916a1f79f5a46bd2e6e28a53df047c97f22ec9d9ffccca98c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM2VI3FD%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T100154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJIMEYCIQC3jqCUACGDuowYHzubzzcsQDZeDeDUqM%2F0EkRndejXgwIhAI8vEOECC%2F208Mzkz8TaIbdarKpCfPD%2FR3Tn5mNTY5d5Kv8DCEMQABoMNjM3NDIzMTgzODA1IgwI55Q62MuB5LTcG5wq3AO7VF1dX%2FW8fGMjg2KupfEoNjlTxqeC%2BHN1OMLjOaIB%2FC2Rb7xMFb0jRPkbOAusSlu0%2BiJbRJ3XCieb%2BhFVtKwhP1Fj1Hy7EH%2B7alsBdDSI7%2BSaKQyDovvmrgEge7RMarb9qRmaKGicxK32ECpAcF5zyYyxA1%2BGlYYeEyZ5k22lf%2FxIOXnysMrZJR7CoU%2BISWkWUKOrI%2BDDaMS52pERwSQYXHK796%2B7bOwWT7iMVeUoWcII0xCi%2FenSSryHCqj7KrTd9d9FeJyvIZbDS1u4PC0r%2BeF8vXVpI8TKc2EE7M7pJ8yREiFyx0yrrH9E4P2htvTx1bAsRfJuCpb7RlivvDe1j25Q15pTG4FbnCHlYde82QqoZgtMFG%2BAs3bj8auxoR%2FSc%2ByxBs3sUAlPz86hSHJx%2FoVEkbL%2Bwk%2BnHXKfyiYYEw1mFIMDURb6NAvPAeaIKAOWgigVSmPs25yWEXbqdQ%2BGldEQw0PzgMRSHebm8Q24lq5TQZUdBmODpiv14Z0TsaPGohN5ykKsRE%2FNL2n9qoFQWR%2Bjm1fLekpUgSO0MnYX7yL46eS07yjjl7mxa86AEYYJ3nIkgOmX%2Btf0hJ7JbNmNOfj7nv8Op%2B9rlaB1jkycOsf9soMLlR%2BOhSCQpjCLv8G9BjqkAU9bWhq%2F%2FiXAJkMwk4%2BgxAogbPPQ4%2FKTDF6ICgIu%2BRKx04Dx3kjUGpUFB3W%2FRmMmtZmcVRRDIqbBeU1p%2FvTGUNbNl0hIGcjKjO1VJKdo%2B7H2nAH5miOPI95dfSZ1ZOz4merh6lqQGkOLD1a3e8xQkSMkkEbf%2BHZFuvb%2BHaQRTbh%2B6JIf%2BJDIIqS%2BsK16QELxeP%2BE1E5voKb85NCKbTbH6GGhPTHr&X-Amz-Signature=a8dd8fcbbb544bfd8b8f6db1bd1df780445e5feabb7e4a0436a4f447bc2ea6fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
