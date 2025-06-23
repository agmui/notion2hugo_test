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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=3bafcb70f0d11ff808f561324326eff5ec8adc9687f15617490f9100df2b5733&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=9dffee48029622551ea652111dc0c5268dc8e3296022011cee6d3ef5de6a1a81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=9b8df90a91e74ce92ea9e1e673826104522d265eb5cfc34b8661a0e90469ece1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=305008a992c522681d37caf1f22074cd7f8cf86901f8fca2ec54b5a25b415f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=02346a16467c1414567e312dfe74aee80d96db9821a9340b724cb155ec5334bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=110e2a082c45ccf8033b64fed5b6e465b62028936befd15e95ff912253d8deda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=e2d39f0a38b504e631f959f3ec94b2651354d90bb3f7f96e608c102403ba1fa2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRWGTD4C%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T181220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIAJnyApVWnksdB%2Be0srQIWNC%2BqmAm06tLTrAILgu5GS4AiEA%2FN8BxVC8Wf%2Ftcp4rpip79bUt3lsjQy8F00VXOzPpF70q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDIgsnfoQah%2BNSuew1ircA%2FymbV%2F1k5B%2FIB2swlSUov2cdQl1IejrL2%2BKiXFRwH1wRS%2FsPfn%2FZjLf4E4Lp5FtA7VgnlG4GlYOEC99a1Amx9Y2nBN2QOym3QM1QrP6j565uevH2DI1JEnTDjnzExT6VdOgYa7wO%2FJeYaUEk6dQHNHvp0f9DQbzJT%2FZk48oTbIUQ1i2TEqCRW%2BeA%2BgH5ykxpWHQF%2BIpvMFGpDWNLIFLF41hCi3nwbYCoeDifVtaJ%2BMl7wt3c9ynC6fY5p39MPyCOPadichJ6gXF7TxPpinMMtPWXqiFA1hCyzoF4mVzqpSrFaCn2H5%2BlRErfc50MtNaxU74nZmjPx0mX3GKLWPOCipfDWD%2FvDcJAtmwTFx0dYZ6oIBP0H4rUg6gSZ4rtMFdQsLIJmvJo%2BwPV%2B5Gjg%2B0RBzUIHfZET9BJBOADOvZgsIG8BYNVIq3EzECBD%2BF26x60ngRfHt36u23N1YjJUmkAEbA1gI1LINs8EBUQwVuFioPH7cs1gC%2B9m3RgzWrYIbbE5IQLPxahwBhuxd4U1qCnH7ef7KRAeF76tyfCgMHjP3j64X7vhl61RhV37M1nqkm1sfktTdgl%2B1E8E6bldeGmKs5TDosvgvnPbDPOX70VKEDl2%2FQXc9%2FweGFIxRVMImq5sIGOqUBJAhPQr4jLGhJhaQC4fZiLNbEiMexgpEyzLqobfYzscpkPiU5L7znTy%2FZBUQFSugtT1zp02Cu2PmJdTyZUr2na038xnsDMToJtybKd2mq7SWV9av98s7%2FnoE7rASEDY%2BvLkfm8pmlqijEjRLygS4Q4ZQUOtJw4G8yNKYXhYMufKqhyv4C87vOEhu1ytaeGKyAxI%2F2j7CRMv04uEPxpdFAYnjQRnZT&X-Amz-Signature=506a7beb39b046d00200aa19cca0254063230c035edd7b8adf77777d7e9031d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
