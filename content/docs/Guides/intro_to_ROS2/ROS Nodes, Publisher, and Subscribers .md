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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=247e07593323f5c420af63995c902e6b856f1b04adf814cc623903d659b77c2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=07fae30c3d333fc2db7f7f81e265393d12a4eb8aa3f66a9925ed8b9c264bba6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=f92daa6670d05027d63605907ce372088e4f435b3010cbfe718fa96d3a1e7f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=00208c2884c1735a68841628b67cf072905d14cec8c529b1bcf976278d228ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=653c9db4276bbb2ac8ee2ae85920c442eeeadeb74a6e28860ae869fbbfd8fd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=b3909a8da601aed3c5fd79bc5489a2f3099f9172fa057f76e782022598b11969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=ab3630eb983d8c3a0f962e4b1b12df6cf1f4ff01aada7bf2e6cbbebcb3f72eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GAW7LLZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T024836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA8mYOjWLjDHVAklKYFRnw4%2FPlJtogqXC%2FEpLkD8FNdAIhAMfzILoJURvZpBMwfXQZ1XQXDvsOSbk3ot3WoE3Pz5JfKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwshpBjDU%2FCRkNeBLUq3APn1SvfsJUHnBxmGtMm1aorDZRKu3QFgtjHg9y%2Bs3ExkLpOE19CpjeB8IqFvTS7yBrUmDxqtb7H6dpZhElUfjLbpe%2FXrXX68f3Xctld0pIjJkb3C8Wo0TTvwC%2FR7FP3k4Jwvvpks5e6HFHkoMzaCQURtbqpeX3kBr6qQy620GmdEu6fGswP1ll3GGPql0aFNRoMee3aG%2FEC8E3iMUpqfEGwTQFYZEh06HPbDXmWuRQVLYTIZJaSkASi1HnDuezH8Eq0mTjXGC5d1Vv1ZFTzI3qX6pI2iarEXdILmRGXlU67%2BfvfvmjNdXLlzR6zYfEtxJm7KN561XUdqf0TDFhlPR79xXO9lh8EiS3zxzNaRuFXbH2YicvBoIbIdadicCGtta5EfXVNwpCrV9KdzlaynYpOcW4AwjeUf6iuM7Rt2Bvt3sUkh%2Fjxow%2F%2B8T8V90YrNVGB%2FcP93BE3l0gVzZR6iFB0xLCqkEqS3HR%2FvvIlnj4DefgNbNCt4IrRkOc9jicIt7egCRLCVEn5XbLotdyu2Vn0vlDZT6Om3gUJ8vw6LfjM90fZMj23l1Jf%2BqISDkQOiAo%2F%2BTsZYW45Otes0eskCaTnvela2yCFcgt1QVNE9YnAfzgC4zF1qBdGh1HyQjCniN3CBjqkAZkir87I3TfHDmmCyV9Es0vb3ybc6c5SKXxQOdcR3SrkSsKtbh%2BKbfRcC52KBK4UH%2BnZTN71Nxcdp%2BN1Fhxq%2Bb%2FF9s%2FzHjQJYr5bw7DeLayfSghm32ZJ6NOOQkEGBlpZbokRCdCP22bpwytlNsqhosT%2BdeY%2BhI11ztqDYvUC9%2FYwdCRMjRYTCm6qvA9aGxNhXoqbzBva0HnW9DL16YvQipBAuG9r&X-Amz-Signature=0b4810cb9278d6e133edf2ad9a0df1a91716ffa98de77600fb151163ff4fabc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
