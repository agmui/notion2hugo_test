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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=4978e67bc5a24faa8fe9fe3470ee39af0489cb66b6bfa2c13034ddc21946de42&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=70c874a310789faeb7f534265b8339f37b6b8aea13ead4066a849d59f33f1741&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=e012cf087d163b783fabb5779a1bec96ef34231fd86da957aa2a90059402a249&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=561c7f2b09e0ccbe40a92f6a9de2616c88e7cbcd8258ef1f669b3d10062fd9ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=84b7f9f9dda0282911267db06eb58b18ad3c93a08b8e5efce79a48d32a327ae0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=8da4fb8696c12ae992693277566e656141a492b2d07df208220ec6077153c5f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=ca27b124e6ff5d3cbe4ec089a82ee3792aa00a91ec1eca7d041d4243b53939b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIYAVDO5%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHIaRg0evKLyQHR5NCMcgeOYcC19%2Fn8%2FWDILPfwMpn4LAiBJJFqcUUj%2FAtyV9nz0YY%2BZ3wHqX9fpJ7ZjpKIdngK8ZCr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaCUADhLlRPtKYVEtKtwDXJLALnrcV0X21sb0plglWFeGHGgUIPvsOOIdnVZXGyAFlMCdTDJxGIWsPemkSelOcpE0cokJZXfYoIPCbXYSI3L%2FFIgtcgNCvpQ6WN0plIXDwmA0DOKITcw3QK7P5o4EMnxnV5FemArBbIKy6%2B3PCRoxNhUWaSjbQLwBDHkKkHz8IJKg4KqVCTZ4IL%2BH%2Fty4l9YRObQANwvz%2BdnyPpTvjoBiYG7ec1U50gR956gd1nabrqKwyRyg8WCWdxmSErss9lw9ryCAT3EFVrQwfURMZHhplFh1uAXXFaA1ET4Qao75bSAYzACDnlF2bJiyhTby%2FxmnKGv%2FyFjNOPNAhVmePLOY91%2FMQ6WEcJIoEGp7u%2FbXHYxiJlwCtLI4om%2B%2FfhTnINCd5Hjsc88gNieqwbx2s%2FSbEgrtQKIcT34faVE3M%2FJFTR88DQ2k8u5YdHdrp1AEpOwBeYwdAyaf6mf6SkfaWIU%2FkgNC5nGENA7hLcpHX20pi%2B4AzSmNFh9UN0%2FTX3h9pjOZuRoYmaCudnpzqZyh6b22aorbv4NrwoWYDDoA%2Bp8lW1PG23lRfM8s7bVJbxbwppez3hnrSc1zXqsVhMqarGCv%2B3sLVoV3fnViWac3IjNZ1gMyKxzuE9PCZ3Mw%2BM%2FSwQY6pgGUsQ3C4q12wYvbAJaqEk611zbwmj7OzseSHXoNrAxNQYOQbF7W0T2NAjQfYgOLNF97Dz8c8MlEULw9nbeD0cQD2CB6pRTXadFvPNloZ7jzIGC6kI6nXOkjexQBXqC8niHo3nF6zgq%2BtBoBzvAe%2B4%2F4U8HBQiNHYwVJnM%2F2SWHQpS0YjjJUe13WZC%2FkyOofc8MvRs%2FFFddn7rZDjh%2BDQn22SDqrc8lv&X-Amz-Signature=3d5e76c3c7a9355dd4562d54486a2df6518d075789de29523d0fec5eea21c294&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
