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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=6e36cf8d7cae5e8f8a3eea03d0e22531c132ee6f7f9a47673569d63489300829&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=e2722ef36859277e78e906885d56d6a7eff3b57305cc7f790e5e1d0044231275&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=3c8752302c3be8ddefb1fe176a2d727bf40d1f34dd075b889d7165fef8db2c3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=857c42600485418284c052fd8450a392b5b1d13de06c17c8d91175d1460f5c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=543de46418e9178b71e01cd111d03582d744ee425bac39aebc009cae45649992&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=09e8999b9fceb039f45b825036dc3b366a0603f212a43caf4bfa9f6adcd86985&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=60c9cd60fd8860731562906c837b4ef70db42952b6e7f013598b7e11fbdd0f6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PHDWAOY%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T090850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIF8NtIufC5vtJ025%2Fs1MCe%2BLssbKmms0QBGkwJg310TUAiEA02cL%2BGBue0yBWLkRd%2F78f0j7duPDL9mDG%2BQDqKcrU4kq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDOyPeYQdWdQwBApEmSrcA2W3a0d4WLopQX6Mt0ty01P0gkuBixiewScHxwC4nXcVJHF0bmHEcDR1RYTNVcng6fGsf65z4LDA%2BANs514J7xVrBriNSq9o5qw%2BiHnX1IRHXAw0bPOryFsnxLIHEOJn891Aa8R4YiktWgX5ZhznRmvFg7PbAm9gwxiRSYM5k18NPLUZRM46XMFK2o45RH4x8mjv6YJG3gbx%2BfsrolEk%2FTXrnFN%2B%2BbwveixoC1jNrAX0IqFzCTe4CSXLejCkySrHioIFEJ1hIAfcjLohuTvn%2By28a%2Bb5gJ0eE1Vva%2FsyoH%2BIBHv0wCPbi8ljretS1tv71hcrwvCp6uKvMCtADkePqC66%2B%2FlgxO0IiZrS81m%2FPJXR5%2BPnz9UOium2fAf3%2BgU6eTZtnWrQk9%2Bb7un6W64s5ojYJbuLVG6fpDzmUJv4T0N%2BZomxiv8BB0JifsST%2F59iIDha6xNU8Hx5JIAynJOAamhGHiI44iSdmQGOz0IdLUqVNbjXarOz5DIyk8W4v2kcSIgsf32bes%2F2LYRRYS6zK7%2BRZpYFzcIIj42UJ5YNiTvAsoOdcAoPwzK5hH%2BrfmJq90uVdbgWmgvM8be8DI7Tc0sJJ55YpLu1rVQzOIZzNcvtW8myZjOypiD2ZoRWMIGA%2B70GOqUBbocB4fu1yS9l%2B3GPCLkiEcX3zVRwDZO06Kluag8mJzfaZ87XgUrFB1t2LhdQdwaZ1KAsK8pphk2I4%2BzGJxC%2F8YNbZbGQ9ZWK55EiIolALnGLGju2CG1OiAdToyC%2FEB7YtpQD%2FfndV6Ae%2B7Ev5VgWwlvSp%2Fw3xC5CrbRSKsUfzi5sr4ZzPIz1pmZPdA1zAZE0%2BtHUDcdeAcjR55iNRW7ir9kpiUPj&X-Amz-Signature=fe74a59a5aa9f38b327fe368ee09d16e67adc1618ae722e2aeb9becd28e46079&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
