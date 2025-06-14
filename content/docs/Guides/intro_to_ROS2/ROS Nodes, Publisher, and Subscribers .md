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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=277d26939d5953c207540afe9b1cb5d4976bf1a515fd76b9c2aa245ef8b866da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=dea75123a31114a7435ac6cab00f070c9475a67fea044c6c583fb4c1d3dc1464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=72e5070acd647b7397cf748789607d9f0049d3339d0c4bd53f146efc52b4a8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=ed187adc5809404b0218951d6c7c6bdab3d09eed3b01894c910d30975e7ac50a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=3b0dd8ac8c029a64bf293b80e9dfcd38578faa91d503261339e5c4e8499dcd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=92525e17acb01d53d1e71b18438ae78f24c1b934d77ef7659e92a1b20ff77e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=5b5c465bd6561089804a6132504e1edb872572b8f4a8d091fc117821c3640de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673MPBOWK%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIEc1o8IDvGl1B3JtkXwW7MLmlJ0tj6MDAMyTv7OEFaDqAiAZ6yTNZyEu4Ku3jYYkjG%2BNH46BAPsOEvwE3gjbGjpuJir%2FAwgtEAAaDDYzNzQyMzE4MzgwNSIMCuwDJ9PL6b6otIP0KtwDsBVMm0K2Ztby9xdlKSxmEOAcP5e10rr4FJqPVWXpVbHvmed%2BxhbD68Qebi27tii2%2F4LoTwiEw7DvwqdHYbIz2e4PxgpGHCpzid6ZdKFLnr0jdoqKupAGxpfn6bmbHBGiQImLq1nGPJKjtLW6HU%2Bi9LwkSXk92c96qR%2FOfq5G0KY3d3ciVX%2FVhWGaVkYtkJY1A%2ByIfF%2FYmQ9QmE5CYcTVgnXh%2BW7u04WGsTt78k3WyTI2xetGqwCbvxwyr52EPKJFbYvd149QCXiQjaJTktWSjnGD6frN9kpesNEFZsoyOXQNy%2BTIoYOkzJ8EOfC7NsW%2B8qgGn0P5ZT2LKKm93%2FsgAUKu3GHSoU%2F7YcavS0zs0PS%2BZl7bf%2BcO0fJAhSldByHZcw1LSowV7tmytLXXeNvFlGZ9%2F49FFsPn8ggb6PfpHEvxZCkPVjkHEphwRCmvtsAMXBFd8iymAODANV9yX6bMw9Ufubqz03D9J1q4mhwTxH0l9HUAsuP%2Fr4RSvDya5A80pIh55Wt%2Bg0sIXTL6sq726V9ZqegeYIvKIIpWPi2BynCpq24CjO22ZgE9CK9ssMJA%2BDQuE1J8R66Ytb7kWWip4CiOgVgwyS7dpq6NKEIE8%2BZ639%2BJ1SVfBJ7k6cwwn8G1wgY6pgFcygT%2BkXbYAT7mkFNba%2Bvl39ZpYG8LRBPrHnUqMAu6Rv2vojhmQEzoNEMqSrVYqwdEw6z9v0QQnXKpz3Rl82CXZYyYYGaEjXL4liwxRkuOY4HEgqrjQONK606MLyK0vrZOxLrTCKJ3CgvvZOudV%2B%2FDsmHfOVHOlv%2B8IWs7J83aIgf69QCD%2BmdQnXPU2r8cmXLZMIUPo9A7vzOka3h8ej22I3lNN%2FZ4&X-Amz-Signature=0567de1308cfd7b54baa68c5d360713fff45c2f891a81f12988099453546ed28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
