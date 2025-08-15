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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=37062e90c20461517d60eb78f915ad7232021daae03d902ac9d25cda35a02f92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=7209bd6cf886a42c82050f4683c26831e170f836e16eb1b0aa7ab48e79e3bf7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=7bed59a238f3db8c2f7fa46d90b64adf9493ee474af6f148cac841e84a8499a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=52f1f8868c2cd5648c2d3508268d9757381051ed7aec074ab0f10719e31e8f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=00f0d77f97360aa4602385c63af753e37f78fea2e0f92eb300082cdc1c47ead3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=b138f0b847190b2f55d62eb24655901dd1c329a1827d30b2b059452f22f3cb89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=9285c2ab3044cb7d2b2f778b5ff51a9eff0bc173b1131d9bfbca26b25ae3ba29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBQNNOXH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQCEarf30rOhs7XrMW3saoyCOb3Tlp%2BUk6bXUFnRAwf16gIhAJFBxv1Xgt9Y1ASyqsAQ1nQuohQCSNMX00gNH197cmbcKv8DCGcQABoMNjM3NDIzMTgzODA1Igx7EdlNgkp5zuSPHpgq3AOfYufbQzUrNbiGpW3oOaRQkBykjRZ67JYuUSx9V5ohWxld1KxFJFKDLOwEaNCYa8xE%2BNozQoNpL9DYBXafj4GBrcEmFLiM2lvjC02M2r7oJQA6%2FpbxPxqg5kO80C2rRKzUF3LMWANtgD58e%2BDv8FsULhNqs9gV76g%2ForMWuROiHfXLthktWE3vu49Qtf%2B5XCr1DoQnutq6KzfAb6bVaaVnD0Ri1BUXmrkBxp0y6mGYICXlZNFXal2ywTqIHarZlxCh6JJ%2BGfS2NmJ46wGND61QpksqSsgHcypbzfBLmjZOD9If43zZK0cdbrXFAjiRut45m%2FaAdFG0p1w3mdYEy%2FWfawZL81kUstAH97t0UcR9bQ8xCeKn8EOnOuyAPqbv73%2BRm%2BQ8Jt0NVzMSNUGhepi9mKxZ3PvSmI%2BJFJNPe6qkZFWHGsdE2gpeH10k9jttg9trtwOEksaEpheckqbbgD%2FCXaH%2B9AI8sViSRn7Etd99qyBqNhsay45y1R2A72iyUe5uDdOGhahFRJPEgXtDjTF8D8wzmQQvyBr4f7vrL%2FPX%2FjBwsPw2cEfFK3aV2jGiyeLU0XAB8P9o5kLIbOnkfMVCeX%2BWfccYtKiKwzeOj3744437CLIUEIzc8kdUgjD31%2F7EBjqkAbx6fz3ME95Awgcso1zL4smjplc3sSr2Q1idVedIJXQxTVWqsO1tE%2FUB1gIfqbcwMLB4Pl7kImc4Rqqrv2SuGQ%2B8bcveSDRbW%2BPWT0Z9hthrUOPJpZff2nTui5QqMt3CIrM5aoCVe%2BW84W%2BehYVB0jsbhWvb8xGyGNZ0ijNNL86avji%2BYZQ0bqk85PXvUkORAEiUoAUZYM1go6Tm6IBp6s6%2B74j0&X-Amz-Signature=88b11578733cdaefdb059a710360627c39d8327d1387b7246dfed5014893624e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
