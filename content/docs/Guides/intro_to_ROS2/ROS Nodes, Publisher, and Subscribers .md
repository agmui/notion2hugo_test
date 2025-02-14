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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=c7b9efcd82c3541999e80350521d6f379f7586149618f7e017f1c90e1d54d9d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=581cd79fe487ed61836ef98e9a84e7b00780fc77e09e435b890f93fd33880f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=79e2bfbc74350bfb107f21c2bf6f8ac0cdab12ee4fb4842cf7bc7b172378b1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=6aebab22361e11d68778c142f72ea9f919fb92fff1bcf672f0f172b200fc3fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=c3b188fb5ea234c36d43f22173383bbbd0387692ab0b85599bdf41b469831be0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=daf70fa6f8c31c40fef24ff9d7f5d2b3281b705049d632a3c18765dd5df2ce7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=5ec1c731f80bbe44d1148f7c8a96abc7230a0c889ced81add1f96716b6bcc0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFLXPNDT%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQD8FQIeGiuQ7yao2sa2RgcY5oyzDOBLrMSyPtTeBjR79AIhAP6b23AEJcBosbf5wLmEKDdno3derCtb0blIpjYKkyMTKv8DCDMQABoMNjM3NDIzMTgzODA1IgzK99QjyNcj%2FXdl2Dcq3ANkNVxos6KxVqOWFFXzCXZY1yFWekDzuocqV%2FL%2FCenG8V6nr5%2FStSPqmcN5ARlhuZBCE9lN%2B211trD0ytTHCEoMX2aPe4U%2FjxdXF0vbur50SA28uLImJ5sgxf3FTCsazQZf5ZAtG0DA178KdJJFOo1WMp1L696Hxorit4Om8ToDdAYis2ZAHXqFvvvtkK7JpC3wUqYYBZo1%2BjUhH3YL7C0YXrN7tV9JlvpbWNZn3fWhvS1P0lt8aKdzS3%2B3LatQol5Dj9IbTAuHG9LYHzMDZBpAXljez0raUyEQAEPRIhAJybKu1%2FeS5urQPWJHo3G2%2Ba5YllnokW4%2BgxEWbZqSpADZ3UsJXlcdbGkWfh32gvGmKpVVd%2B7PgjhYjA%2BLt6jhUzC4QJGO751B31EkdZl74bGt5bb1XVgG4a5bb1dRUKLI1RQJZisg5ttxLnw888MjUM64OI1ubmM%2FBq9%2F46e8tzxQvTEik1pJ7hk41W25XhdJnU%2BGlB5hFRL9yZShvi3SjmelbL35f2%2Bd4RdaHxCzwZPvJ%2BEkSASS2dtzdLCcJXkyaAffBd%2FuI%2BpcZ%2BXHah1dA0N0IYf3IWrniVlmkTFVSNFEIgIfdLYT0Y8tNI1XnyDdbNSaT7Tj%2B%2B0d58A%2FaDDN%2Br29BjqkAWIzprqS5g9Alzg3AuD%2BibsDhx555pMWDrQDHbKUFOVRVXVD66BQn%2BC0g7RD6r%2B88FmRtdQRp3uHGkKjSnx%2FtqzMaupirLv4tnOxqV7HWcvvt6UY90r%2BGmMLX6YrEsm2DS8nKZXxfESfDsgOkVJnh9m9iYB0ydhM2iXqNHqg3PFCixgGUb2Ymh6xgjnE7fzH7rP6MSqqe0EtEUT3XWEwbxhdPHNr&X-Amz-Signature=acd6ac4e5f95f12962113a6bf247f8f578dda22b2a614465e0ead654e16481f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
