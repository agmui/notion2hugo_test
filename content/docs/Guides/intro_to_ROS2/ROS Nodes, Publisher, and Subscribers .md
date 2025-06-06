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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=69065f6d30db01ba8d99a5ce38d2105b55277a06a58069560bb4bbcac1906bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=2af1b35131b4e0e7573c40c22615156aafb291e69709a028bb1bd9c5e3687bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=381f305f7ce5fc6c91e288268fbaa7d502f6a30b7edffa53e9291559491a64b2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=b3f38f28c6da646760c490e23ad49e5915636e1fee920ea49ec03e0bdccdc53f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=6f03beb842c26ea6cbf794fd513e4fa11421490311abae1731d369e8094c413a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=9ddfe444a9a801279afe38a8d743f8a95c68ccec8103a8ad9e5a0e5e8b3513d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=fce958741b79ac74f04752b1f6b34ad12918fb0a358d6186d203b81b0c72f5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCYUUJA2%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcvWAZQ9nNTZETcOoczrTj7LPe7IFSZy5h3Tns%2F6xgQAIhAJmOohCFObRhKY1T%2BdlcZCJGzo8LsZuZC8%2Fkn2rRDP%2BDKv8DCGUQABoMNjM3NDIzMTgzODA1Igxgn44TKnESaPGAs2sq3AOE1ibnwa7adMzyd61yjZYMSuSJ8M8MH3snrUUR2p%2BoDr234FyZb4jtr27MRBC5BpPq1mCSkb3OmPf%2Bta%2BDfR0T8QdLNStor03BBkAe8bnycitXhd3RONaforECy8av0w3V7GlPmPwBv%2FRwjLA%2BRngaTp75gWprMS8I5ifZc9VhQg3AKy%2FqymYlnSWvTY8E6c0wsuFOlLmwm4TkA%2FtQ0rKif1saNttqhlZCiGfPtnxFtPEqdjM56iKUqTsnE5J7Xoy8TqK7AKlC3fil15eyUZbQeBTCoSS3NuflItIDqmW5PY%2FPFAKrQn4dIbMxnLQkpRk0N1hfCNV4sCzUGhw31hlxUMUDCVGZ5uqNbaOH8S5ja%2BDSx3qlN%2B9xf6LiItc7YC%2B58UglIPHWS22bFGymOUUPks2%2BbebuZuwlhXBI6X9FHSbjeZmJUVIEiGt%2Fjcf7nAHoKZ2hldegLBY6RFPCc4wyURptED4marKUDpP8SkXC0m3sqoFA2quuh%2BlQTWh7rFlmY5mjsTezrtiExBu3ybhvVyUq9QFOfwLXM2OViCABOY1UNTYL%2FOAEx9tVwO7oQlGawM%2F%2FJE1p5C8nQR6SFPKczGOM02%2F4AFkf%2BTx4Eg%2Fa%2BGQPxzM5wUtsK9nu7TDJkY3CBjqkAV220MFjUPNRowqNMkFq8I37cH%2F9B4u6QjexQtKRjwrpcK5CmxoLT4zGaQ5u9ML8epy19jh%2BI3q0noehnl0VDrxx75CSFhbmcyGx5HZw7s0dND5aBEDTglCq8VOzGHnsPD%2Fj2mAZyOvKz3m3y3PyzJubrht1xrOpvOYBmJLl5DgQETXVb8KDojMB%2BWqxr0lNYSZcGhRdues80HsTK3hjO4ED1S5x&X-Amz-Signature=3326252471d028ccef04c4050d2e01478082d1b5a9d84d5240ad31feeeb03207&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
