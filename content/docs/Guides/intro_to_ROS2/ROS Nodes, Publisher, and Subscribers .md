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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=60cccb1fd89d1eeae7e6b6e77601a4cd72166817cd7319d38d222f9d039b606d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=94bbc592299fa29c6768ac7ae9c86ed65c4ee824959e841cd21e266350c9bed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=fc926dd46386a43610b45b8526d34cfd66378940693ae4e2b26fa2444d85b8e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=8370bfd7bc0081f7b921740f9f2c199a7a72f540b193a3bb309063f7596e02ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=6c6eb8dc52d0c69d2ffd48d0e0206bfbc4b4e7427ddf113ab1be91b3587e2a58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=186989c3135ef0271d35dacb43f61dcee84b54eb1fbae49b44ce26769aadc469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=192ffaaacc7d8c465d7a2182a039e8f3bcab09a55c086c2a44b3c81e43105a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6QUC5M4%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIHTjZJE%2FujZpya0yL%2BtgD1FSMKjFuWMoti9mq0u4iiQ5AiARdOv8cGickpO3fS8HT7qTPCT8fC2abAIS4lFuVpopKyqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtjIgRYK21nS5RgT%2BKtwDWzilYiJlLXhQFV9dHyGUbQEpL8dXRFF6QWnxJA5h4RSP%2B%2FF2r%2Bx2tw7AVH4FDBw%2Fz98kaKucj34BFhKc7AgRClbWKqiOZ9OBC2HLrMeOPGGI%2F2Wr3D3QKgN3m5suuuhDlPDO3VMMFX1HWbJJwzZOokJbjImR4l91VIRsg8Ro%2Bfzv8FwasQhrD0JtN5eXPQ8t91%2Fk6fgcqKlLmOvMX57TaqnXdQ69HeIK4cCi0UZ8cNOX3ksopA7RIeFfqNJDL38OHZX7mcDUxZI5Yiy8JlPk5VQ%2FhMWkH1tuFk9H4U%2B%2BFB%2B1HDbJEDJlxF94sje%2Ffd4%2Bf6yJyKXNdNkSWW4Utxm3Dbp4XJS5W1U8y1qg1YP8iZGFerPknlCHHVKZ8l4igCSzyMPPfn2gxKAjpA69wCklRT%2FRyqNKX0Fa21T2%2FXDz%2BiGziRKtV8GGNV6WmPTjDWrBbbp9OQ3PLAAVwT4Rfw%2F%2FCg3NISqcO%2FGULX1DA9cQSHUExrI1ACc0R9yAehXsi4CaQvSovhB9PJ%2Br6X5TviHiee8CBNqegFHGX8pvAlqcpJtavXrYPhJ%2FsfCZLq%2BkKWyBlimp9FvzGtZ5G6BmJn9y3ugXjIDikxKRcTDKjI3cSTcYII%2BujCZ%2BFNacngQw4emWzgY6pgGXdUwA1Y89Bx5noa9QrCTB6g%2Boi5TWECPoTi8%2Fu6CvDezdJ5yb5UVBHsVQrDHrFIchlP34KR5mzL4adpOpjaRMnlSqk%2FiOudUHce1N5mj2hd1DhddaiHs2Xpg1XaQgmQ0wXN72TFcjhxBBO%2F66rrOVueOn6numLEgLRyQxGOJ9LylYVtPtSyslpw%2FV9nCfsJA11mrzvVq27feb%2FS7beZZzAoEtojSi&X-Amz-Signature=d5ddf23d15de5b896b4d45a09441b739c71e6fae721275d114028688805b2a4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
