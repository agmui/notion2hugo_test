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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=f56c95c2a64d9f97a0110dcf974aa6f85f96e620fc71c6b9afa3dcfa2aad7fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=2e308c06a9b7b4553bcda6ae1b843c9f1a2fada648b5787a16b73cadb147364a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=f869990e1f6c3dbbf9c94f6bc0157dbdd14926eab9c9ed12928d4c412204c139&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=abe733581248c5fc0b3771813abbb232748b066b0986cf87783987bfec277ac0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=7ed283c9a220a251ff983818af563223336cc549061f40c11211c3b31e4dc43c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=5d688e5d6c10916b2c8a285ba27a551d1a3b8349071230b7016c44b71621dd27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=70ecba6236d2826e566eb8034b987fce82f53bd2f93962e4451bdfdd77b55fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626EINZHL%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5ksFROdagx7v6bBWbvatba866hX0SnGeQjZnkCR49IgIhAMUF7qDif1gDWlRIMJa19ASVy%2FT%2BLQgu0F%2Bl5jAXBxVgKv8DCCEQABoMNjM3NDIzMTgzODA1Igwj5oUhj%2BGkB%2FgHNIsq3AOxpnRELm0GaSlFLW%2BJcbUCuLjXTPiHCj%2BMJxiRyIbzsISlK26mb2zeK0KR3vrbr4tlxPqyuTe3UEWtaEYaDcnx%2BfyKD46rJ4ZEP%2Btgo5FrCoSVSAboalznxYm5B8p7pr2N2MM5PqxhC2JASgPAyjP2zAncZbvFfB6mgiUHFrovLwxjwVK4gXYlH6z0Oi8WNLreBMa0asPqwZJXShR1S6qE5bTCuKtvBol3nCMlZjDq6V47cz1qb2toegiUeljjn2pl6wQK9wac663%2Fqx7nan6pPJPghvEBCpCvt1RyCYI2U9%2BOPSuk%2FbVXPazodn%2FQoQNJ7kTXr4Gl0ZInQvSRwOkF5J9wTNQv0yULOtE1MN7KSQj1QLCN7W%2B20cXclNO0lDInIVfwDBFuG%2FqZgj0H7nILbxzhblGUsxMG7uyOGd%2FkOJ6e4VH9TbkE1saeStJt1o7z9uBYRf0vsksiRhpP5aULavtRdXY5JegrrlgFbd8TpodJiIA%2FlZ1T%2Bk0%2BKeBb0F2%2BdrpZLfH2SgXfvo040MuF6jmklsS%2Bza1M72suEobDFG00fZqIiL8CgxwgktBJsZF9Rqc67EtjJNAg50xczJg3o6FHNfd6xlGRojcn3IQ5lJ%2BbGL1ZFbEbPcgU0TD48e69BjqkAfa305JxcCxWDxTXfH8YUNQ%2BX1b65CTkszIPZVPIRE2NLbPKdPHmVRVMY%2B896l1D64g1Y5vpp2uh%2BfjjXc40l5Qn%2FEpW3GZMx8iTIpS1b%2FONKeHAfwtsSw%2FpJ7bbbHdb%2Fw4bKDqn8tqS4s4oF27xdFibdeNaU6sfxULdbxGVyMZJKG55ldTU2hA6oFyU29OSlzoolEtvVZSSKcwMeK3%2B2lf8SI2i&X-Amz-Signature=d03c61ade6950a7baad1c7d51345c13af992f9647a92074850f9d0892cf60645&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
