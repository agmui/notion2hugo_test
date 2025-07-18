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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=77203d4a7a75fdb54a29a60c6f0b192721ec7e8a782e9b00b31476d4392d6626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=fbb6f87ef402e6d3ce531e3524855f370618a26d860ed4a46c5cc20ef8e0d175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=eb38dae435e148d07a6088c8b7ebc4f67db0e8a46f1f360878cea645bdb5989f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=4e9c9834405f92f422788b47b1b1198c6bb2dcba7835480402d5e3f367a7cfab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=3482b4d0c701d09dab477c09fd1a659a1ba1fd2e029d7d651c6a5c40c17d82ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=88efa741878e4df813fafeaffe35b7c9dcc46e608f9c8113eb543ef9f07dd697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=c0e11f59d7134e1502d258f3917a9be0711438adb95c7a04e24a50e8ba42ee33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KWCMZIA%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T035405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDg%2BChQQr4eIAEdED7ohX2AZozRwnwHl02wdeMBnZi7xAiAw7RXgSySfgjCdWHb5mcbeoiH6uiuInWDW9MXhtn7TlSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsnNjJzoWgNAvXU%2FaKtwD12gM2CGwR4jk1s2JZOmK9qByLq%2B%2F3IkTWQqosZANfVkwbfmmXPUk7ELbMMTDr7S6vgRx%2FeXmnoYV59iyIU3yCMzD4sBj%2B%2B%2Fb6t6H4mbrUYY6o7lyToHexLfx9sOA9vE0OQ7SOsnrLfTcNsZojIz9%2FidsT%2BlHp%2BA99lttJzqk37l2ipwnSwoIe7cZ9x11q2pb3%2FJ4J%2FOxirl8a3sZBCv1AkBPGgGb1yvw6PZsBmc3BEk4k3rdaagsqt4xEhWLmqJE6g2Bx7RI9NwWcr3fkn52kNRqS0RwSEB%2Fr8jQPrcqfkaMyglihtQED1KUKXslK7ims4KAL0ddYVrNfvgdwx0D6B2PaH13%2BM0AzHf133i%2FX%2BRR6UVH7DncIKfiJt5GngtlqPha12k%2B6X8vxtCIgiG49pZzsw2htlR5IgTWhHtDO2k3Jtt9R9RcDGzl4k9HTmoRWRsbFqDlQ6oA%2F1OzMm6%2F8auraHr4WwaKv7ztEoKYhWIl9b5rLQs2ArCKuo2972mT%2BgDwpjta%2FyVZrZo%2BIP4462FnpDGeQrKfg%2Fjh%2FIhb%2Br2NTFLOvlRNAsbbGva%2F6zxraJd7f7DtjSCQlRefc9coSpY%2BQqrzM71Z%2FHDOlwjBm1w21Bk9EX38CNXSGVgw14jnwwY6pgE7oTaVcQNU%2B6EqKdJiveSn8aGzqWblhQCl0IddbyWeJ8uRxMplysX9XCIdknlc7wkcHe17NIcp8S2p7ig4%2B2ScSzC9WlGnzWqdNNqbsEVu8zC%2FtA%2FV1g3xZWpijrdlY83YbxLYSJyMlO4qKnZZ%2FIHTPnvIjvHgN%2BbC%2BL4ge2sNyoxQt2kD9jkQ3FfKIlYt2J9hVhR%2FRQVlPx4Mqm00jQSNURgNnfDJ&X-Amz-Signature=118bb174f8a9b0c6525ade0ca69c54e43a5b2ae0706f63b55a997b012f41219c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
