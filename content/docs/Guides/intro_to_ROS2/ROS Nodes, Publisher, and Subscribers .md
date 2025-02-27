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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=6296fe5e7efc6e0e2ed9cb292fdf85569f274e5e5831cca08f9f7b83f47a3787&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=f335f40051f4236014a41d206b4e03b47d72f7a35c48eefa82ed5f32471a0ee6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=5cea6690a01168642a7ff1c0a1b9b81f6e4318a6e8a4c21145e7a9ad51180a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=9f61e289f06719ece1ed67786fd2dacaa9b16a1328c57eac54658dd4fc281137&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=7ab5f5d0e1ba067b82d6494140d1ca5a0c5bee45f15c9d3a7df98cc2758dfa38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=d7ab37ff16e9809f6a210771f5d700eaf5b37c1a25c24ebd75e5a12460005283&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=b487a9579667513a293eded31b59eedb1762d72126343670978abb712fca7b79&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLABKYA7%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T210727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDosPjhFoUA4rHyl%2BqF4nUDuSdyfbA%2BpOrMzYO0zQ7dCQIgOxa6vUOssKTmP5ofdt9sXe4R5JaEtAXBr%2Bp1lpF7cg0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKieaLMNTZY3H5Y6cCrcA9C6qy212ZzhqhUDxlTcgk6u5sEnd8R4pu0ZEy5aZBMMZavGioszhEqIHmFtlz3S%2BES33qPpE9ES6lC1ogV3SqR1t63ag0rA2qd1TzyrgnEyFWLgXQSoBk%2FVSOGSbgTQaJwqlqQMNiblc9D6sdlYQtXlRxVGpB6DLgJE%2B4GiVwyzYY2syqr5bjauikOS0vfZGg6uljqYY8bYQcKfDqHAadkMIbEmkSgLQjX2ksp7t%2FZzDBk0izJAk25pxXth3Qc8XmfHL7N3gikJM6d1YoGNsgL1Ny6wOSn4LBKYmH%2FJcWSZO2GIPsB%2F8R2zVp1v0lFtPFGi4lGKwAI26hvvjSR0LRWzXy2pV0AnIAP%2F7eAYK9stZUSExcRtrBP%2FE5l1Bnkxb8orjjyMBWOhctMu4j%2FLuXJEGv49ANLx5WiXNfPuppwWjLSS4wc%2BmSUQeCuNC3rd417vPvZYuc2wQ7Bt7b0s%2FWtIWUCLvEGnlsf7S93wZ2dPNbLtD%2FhN42dc5DHLQQ91LST9aRDV6%2BeWxn2pUetwp5i2sG%2BfEDhYqqkWwJlbe8n%2BagOXdw7FbR9lOOIQyvbfjVptsq6oHMvbS04knH8FNxkpxgL7qwVtAb5dk94GvaBDExXyBFt0Ek8DHj0pMPbwgr4GOqUBetfris4UIUGal%2BmgtIYPQT4AWhyNn2I8oSqZbl%2FF%2BRDfSgcRBAIcTRNgYc%2FNDm%2BQZauGdTeJyRZ4YoDuY9pTSxo4VaQ%2FroWf8QM63TcWyXCWHJg%2BgDpnzT9xiVq%2B0bLVzJJnOqThUW2k91xKev8CHY3R9YlLhDd6C2ojsmVysy9mSGlEAGl%2Fq%2FintYaacQrJ6bedoW7iGZkyG7nOWGPewu%2BlKjGb&X-Amz-Signature=a1bbc892b63b7033e22f210cdb08510634e7009569c0a6f1f98ab35ea8e6037a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
