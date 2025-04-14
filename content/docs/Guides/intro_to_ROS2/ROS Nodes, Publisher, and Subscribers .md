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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=82a3b201057404d1a76a94e376a58213a335b876dee4b6171ab643bd39cb2b3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=552e2fe9790d39f63281122b0bc161a371d7755bd3598540a9742a86b5ba5f25&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=bddb3afc9934a5bc489ccb08f8840f42360102fbd57943143f624fd4fec6a80a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=4c99cb31bbe69c42dd2c2ec1a0363df6e87a9f2c9d6b6d98975c135a04a712d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=fa5d571b14c89088dc8230c85830dc9f5fa43c31176664f1e2fef2127ffb64ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=7b2e668349b493fafdf7fa87f6cae3a1d9237d5c089c58ae3a73b92b08df82bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=0acd42062c8da716a29b95d250deac0f66fe569e38c3ca6b21b828054c3cb481&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZRVH3P%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T121506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHnKkw1s5mvEOZXLFqS%2B42O%2FNZIfJ%2BFnh6ivZHB%2BDxJmAiEAkh5KDQMKZg5tYbVZa6H75Cch6lkKAQPnqJZiuEHmPf8q%2FwMIExAAGgw2Mzc0MjMxODM4MDUiDMhjz7e2GYAjf6MgJyrcA8KeWeGtD9OP%2BxDvi4Db7B0Eyk58DP9GxbDau%2F11AXddlDQI%2Bt0zKbJpFHc7%2BnsegecsaaKD90QEU3yJMxFBYeeIPlO%2BkXM6tpZPSR90W4iknn0KoPLFGaNLs68kkJWhDlY8iIOtKkVx8K2OgPCdmRFg%2FL2ff6wTZAqPaX8v0kBPVR6pU1h%2BU%2FObPD0nomvWl58zjSUUxGtr%2Bf4HqOdQ2NMNjBu%2FIPZhqfZYQRyR6GebM%2FqtPewd%2B3gEGT8Yg48DctRi04QbjMDH4UyAsuWhpmG2HN8ZWtqHwqk1OxGQJxXzpOh7q9U%2FMA4WzCl3vqwK1ZSHotohvou0UOrQVxZSQ5BjOJEqNmsBz5QtD5x5rRHb1yzzS%2B6PC6NlzeRK2gCR8pKTgU9bqztYmd%2F0QHYTKYbqlt32Jn4r9I44yeEMp9gFZMM%2FoLaenhZX8n%2FDdsU2lftDQ3usy%2F4ICI346TZoYf9pR7jy94eL2yOERTTA%2BLvbJtUS8SmNA5XPbDXFJ%2BDBREh6wATu1usSdMeH8iQuFlVtdqI6qQBXF6Nq%2FgPmfIFVvT0vHZqHBA9SE%2FwjGiuq6t9H%2BIBXy3A2ARc5hw7M7SppjRyfdf8o8f5e7pTVC%2F0Mx%2BLOqdQgSxX10BzdMPvA878GOqUB8Yis29p42PZwdx7ZuIy4zWJMyZ8%2B8sAMmHgB2F9Z9fu9vKnMKOKfOEf1tzl4R9AFQdqyUxv13%2F4v5476BFLQMXFzxGOxZo0MYrR575LPsWSZsraSJ%2F0Ujr%2FtLFBEMnHlu%2FYpnx6ERryV1s%2B%2BX1BpkvJQErgMpmEDYYc4fCofmpadt08h0dm%2Fg80GblXiXvtwkEzQPoKtNYCMPBZarlrFTI4RrTch&X-Amz-Signature=a3ecee80cd869befa688c4899823bc3df45477fd7e46aee2d66cb314ce1582e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
