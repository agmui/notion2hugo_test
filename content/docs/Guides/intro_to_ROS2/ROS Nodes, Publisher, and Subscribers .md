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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=8a356ba040afc7d41f0a0863f84a6242f9502739f27bca60d1b33729a965edca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=f34c34408dc91b6bb993549c2a849809c133695b1781e001d9342df17d1f35fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=f306415988ef8928ba319fddffa33c2625487a48f4a60b710df930c2e225011b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=d7bd93065ab8bb915bd2a7588a5f96806bf7fe3f9e48f01968c561cf49d09e3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=2b9af992ffbfeb8b78f36bef1fac62a2fc4e7546683e66afbfc9df3472490017&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=37d69ef0cee2b29b28f5d78efbd14f871bb380e2c145affcacc71c47b641dc3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=caf4301da7a3750b931b5857a22161a8fc479b592452555cea9d8343156bbaee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJIIRU5%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIAvPJNYBV5XoqQVWN7aHpgJvBqfpfxX6t35TbM1HGTxaAiAyn3tllgr%2F3pi22CZIZ2NN3caxM9OsWO64O5aWkaGk%2BCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8nkonnvTq6cPCaRPKtwDSRJvK6w0hnwb4BdKzqqP%2FeCY5RAlzyMGAzxiovFidHDTvrg%2FjswI3D7bLruGBSe2MGJmtURP7SxiEdAxhj9%2FgEMUHtYJWreN2NVb6DI4%2BbKljE2nZBDcBLG1yV6Gq7yQA6h1pIo8tzHI8ZV9rAlhVThrwX0%2F2pUHDTysD8TypfpP%2BvTbAOrhmYdReyVkZ8%2BKdrCXsJZGm8h9xgGPXRKlRcVsDcBmwgveDE%2BTOmIFB8SPdzW5Lfj3fHEBFYQeI4eNrsq1dkmU9bWPre1nQEse293ZDsT9TZeIAsri2Wnu4g5jdyZeCKIB5yBrItNLyBC%2BPAVjTD9KIkbhJgu%2FvtKduUccjYRPLhFTrD7eDnHHqeZl67J6TRqq5VHzikLnxV619vUPgRzFJBqx4zpURGFDrVwDK9MPsBtFBU%2BY1jytGq5%2FmfgSA22Xd2KVNC9e7FeFOvaAYhTLxMcQu9YZ6gyPlSB284mifLek8VFfMWTE68eQ3xPCAOagS1ZFaLTC%2Bx4t9EWqCza3FQPiwYRUYfyQWsEjembz2raZJDZl3%2FnvQP6AIvwX%2F0jz4Xqe5%2F33mI6SXgsFG3qjgzSbtB1%2BOKCOTArAMmVVNLtWTB7xlNMJ7xmLhEVTUKv7tFp1taIwm8q%2BwQY6pgE9tnBy23jZC3imvKW5b7hH5GS%2FTAeM3UfPI7PfV6R6IZU2vp0zZZXBk%2FlvYgEOMSC4QbxLSvRZWHaWEkVWfozgIKYWJFpc9B0DKhNGQVOO9SODu5Z73ZTAwZLkdNCfbMGPfUpGML3cQlNbFA8aTd2Qm6QPxGAP7W%2FpIIH98yZjnC%2BnflYL%2FQnCIoXGA1iX%2FIKGDBdFS4d%2BViceY5rFVmrjrxPm4llv&X-Amz-Signature=953c18a2d3341eb7df74fb8942e1ce5325156835ad09760b38a605dde8fdd779&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
