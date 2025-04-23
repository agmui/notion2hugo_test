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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=a268aa14da3699acfe0cd390a1951fbbaeba108c01cbed15f889a1ee640d72db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=382d56fe27b6b04f884b49b337ba945c6320cc1e6bdc93c740aaa7d8ad64eae6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=70b0369d6444c219d1e8cd49f0a8f76dc391ad1b3b323201bda80e0be2b1c193&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=89ee12382767600d6d739ceb5d9670bc35c1e04590d06edce0bb84c69af735e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=54addfb6466dff14359440ddc07101bf29875d16bc3c573184bac2162d4c0da3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=b7d52e76572a44b453a8f1138f8dc4e941419d7ce505605af5c6ae64a2c9b176&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=4e968021616bef8efb37ac262dcf2ad133d5d342b96ddf427065246ccbebed12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXIQFN6X%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIHsaAMPj0r%2BOCv2ABmKH%2BILbsxZo2mq7tq2MFfTxL535AiAh5LTd2iojhkGhYljn88ASQGu8XOOeGsg9Q%2BxSBRp6HCqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8WjZyfnDrF9B3lFqKtwDW4EDIWZAaWfcA4a5Qm05p0kxsDsOuoI8etSa5AR%2BidAUUuNzsQX7WP14gUM%2FbwI2PP3dZKyA8q42rBrWbH6AtCOPiQ%2Fcff1LUahAdSV9JJYoDQtTh4s69%2FzPKM5VbB%2BRLv5WDmwX8WmNNTHn36AvTUAOEt4hz%2F6GIVDAAwYxj2WHNsJi0UpsFBLz26saz%2BW6jbfQJdMi%2B9s2a3%2FtB2Ms2qfTNAJMCQ7jltUpXe77ZJcvRt1sL%2FTAZxkSxCXjIgMv3798lKaL%2F%2BPz1Y%2F7E9VHv70Wt3qapRVhXqns6WB0wJd3dnjEvZNb2NUlKPkW5IJqhbisHU1M1n6HHylT45hcrUgizg16wOxnSnG7vOfnoX56bf4zsmez9Bgpo0XW2ZGDEqkpF6aRm2oeGnFaPCPGXQTEaVMYpt5GTHOT0GUcfnXMDiPa%2BdGcAgfWgsuU3GyaBy8SVnF0C7kMLgdwoRfqbcP72xgk%2FHvrx1iM%2BZjUgy6rlNakK1iYHMb%2BOWcfWnKZ58sKucP%2BVR0EVQHPTLLRPHRzDHpOZGvTo4z81UjmYKhQYL8OLqXgLtuMzQJmD9JTsq2ziIPH63tWGsqOYu4emQPYPMvFq%2BF8BeyGIK2TjOP0d1NRI7edSXppJ9YwwKmhwAY6pgHp8BDi7xTKY1901uXluWkJoIh4Rg3R7aX3rP0DRVI1xBDSYFiYZjfYt7Zn4YKoVNo3gv1nRaDIXGb0oy9qhJzaO2pbYEe%2FUE8S5jnGVlIyjLeR%2BCbbxp6qeVVplWYkKs1eGy7%2FdLXEc%2F4V32aHnDHaS5E3%2FX%2FeqnRcMUexo5donw18okKc0cZRZiBlVD%2FVp3%2F5ze80KQdWp7LsoxAb%2BNLwFBBL2LsB&X-Amz-Signature=0be7a7244ef1c8727e1ba828f8cfd799b86acd03a3436d4f081f9efac038f3ce&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
