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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=cf24d2fbc9becbf4f175f03e4bef7fa17afe8e43cd64cf2f797a278232e0e167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=5323f4b0626033219d0181101c3dffab4aae3da4da9ce5f89540569ea97debb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=6c1eae1bce6ba1e40cb973d9c2cac92f25e38ef78229f1bc2fb2c4359f73082d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=d88c3e35273c01b43baa5cf6a2f25f82427cd3fbc53edfbcf04cabc010c80e38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=624296cdde60e889753243dbc0896e55dc30922c675574266d0086dde4bdf93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=e3a71effcc3dd01ae64749a85ddc32e0783a5d572834491733853c679d430303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=8022ce6e3286fbb8c82214a18e83a4beb54050feb60203be4a0add5ff4892f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMGOG7CC%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004622Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD4cvoTabfo5YsJzOALF%2B6btOV3wKau3LDHJBiRLS41MQIhALZr1LFuygJ37BN7nLvvXFTzG%2B%2FwZCAcY7OgyWV%2FxXxmKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyXSu%2F0JW6Guzxeli8q3AOmnMuulMoOr2z57rT%2B2GRVboLcfg65m3uyZJUcQhqB4KFwWntYFJcDJsmFcaqdKjPPt%2F30hKeCA%2FrvCeX4PLB0nDQUXLc4oDH8FIc5wmXPkbVyNt7Kp6yfeBSVKkmnYPxk2V0T6e09eNjz4Y7yUR%2FJrLyfI2mUwCzhMx2QPbXOcvUHdgcUv0dZGppJalB0UaSEszVLNE40SiO77ZaZBd29JktLKJ9WVl9%2BFLQH3n2F%2F2Qz9q8pcBD18sKUa5NBi%2Bg1X%2B%2B6p1YUiAweDuUdUqcuT2tcUN6tsrxp7wlPbPmNvqnMgmNJmdU90LBk6ubOp9nXYtrIsGg6tEKTlfm%2B06UNpJOUIdSfH3ucgZRYgKvD5lBPiaCdJ%2FLX4Eg5kIZ82Txigrpeb0cFG5A6RFvCNyQ2ZUEd%2B5HKnqyAvG6%2F4ye9StAObOV23F1vUAMHrTecOwc4DfI6LVnnrXH5xDsJqUOC%2Bhv5BV8pJ%2FCaY97JSUy6L4iUXQMtErjBJWKun04fxQzUZ86z7Aa5QdvfHEC5%2FuPnYfnP1nfM%2BNmLAN42cd04ZjqAZDqd%2BUHCl0EpYxQww%2F8r3AZoG8b6Un3zMi0gEPZNGBMyp0vgRIUlpNeF7ZNFrNL8myla5O3K%2FrOtNDCGqOLCBjqkAQs53eS2N2ok1rzbaJwTcdWxwZjd2MspDJAh2bibbKF9i9mDqFWSarNLb3smkxsMgmiLQ1TdgtbsP4rhH6ilJlUW12SwCkWIwPeCJC88W6Uxo1ww5Er9h5YRZtk39VP4VgTjV3WlqvvQ16VzoAvvsCqn9SzwzBYpVN3AC%2FUTKxwGp1E8VAtPLLSZPA1gZ412%2FPsxGuaw1CFgUS4qI1djAE%2BlwYpN&X-Amz-Signature=cdcc9244d9976c5bbbe3dd32384929390348157e7272b13eaeb37b17f4f37434&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
