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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=98b70c5f42621ea3c5db13b83a4fc19739575a9ce9fc9f025c0cf9eeb120353d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=4a17a9266f97105aa471f810cb7463a6bedb34d5c987f6e15b066eeb591ed5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=2a5d9f7e0f0312770890db5547136bbd9189d167bed05bd967814be48a6711a7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=572b46d17d37f612f19cb67f1e69ac43800d4ee5e56d546af867600db02e919f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=5b15d525c61be1c5dbfcb62c88624a5654a98e60ea5ead9fea458500234d0831&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=6627631a4d86f22e24bc87d1b1d59edb2b1d574e41cfb57590da59657003862c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=315763a66261a216652488d8196c6759dac1e5c55c37885661bf671b0d7d0bd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VQRM4WL%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIH4j7YPwAHYrtE0Ea52EG%2FqtySk7MRprwFWOhyvwk7VaAiEAiqkLeHzs7Xyig8UC8SiNQfW2WTCWrW9XDK7X3ikqRBIqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5a3oejFKva0SEIGircA9e3LAcQn6TcysFWGVYdbi1wNw5oPIBqzxsmDdEj5jY01uYnfrkpnmDbQlN2Z5JGbuF595CeHWwSEunVAN1hymjz33WRzkGa1Io9l%2BFygM6dL%2Fm86zVd9Kdh7V4XBoPLQoYVoBsHP%2Bd82hwvfp8pHFrjWG0lJZQS584iCGe6GiRrdcqUKmTXIxe%2BtAdVe2HJznFekP31SId2ZXimwJmXyslCwxe78oqwKK6%2ByENHqNttlLVa5stGH8iqDNfJSK2Hj5UsFAcZSCumVy3PGVQdpdnmw83uaz1n1VoS%2Bd%2F8sQrqONDTFIGA%2F4lsDFtrFP%2FsEcHtASPPKgKkQUt920nDsjVCNcYXLI0tMeTfFAGcrnsRqU8eR8GywOzjjkDNLAin1wvVN9sG0PPQqBNciGMcIgyT%2BwamOTvYyzenCRVb95qrqso1PRmoLWU3%2FGX81oIdsFH%2BimTi8bEp3Y%2FU7%2BFQENoKtivMnUOBw8%2FA978Qet8Odok5pYcE%2BWDql58j0tkU6ojwAhntKmnUvyKnT6nBLYn%2FtfFfzEmnpCEMi5Shf5vRY3bwfJy968FMpM050UUPWJbLIzqIUwHth3hMXEQJpKJKc3Z7vzE9EpB5MebUF8m0KDpdKh1U%2FGKophKPMMKS4r8GOqUBrQWdW3z8LSX79ur9PZDMUmvc6b%2B9FiQM4fnO8XMeEYwpn%2FZD%2FiSH04vJds89Vxni%2BgQHpqAYsu7xkc6wURvaVRBBfhBWVOj4fHbPIrBfZHDgZ0xN5OGShz1kNcHjJJID%2FVAUQU4QbKaMtW5TGetmbQ6zrNu1NH1qFC9hpIR4%2F%2Bn7EzfWA1AMVFzYEzF%2B9bCPvbWmIU5DDyk488vq10kTHrsMQplS&X-Amz-Signature=6f39c19cf41dc2e5903dc545ceece18e8897e3f0e647ada7f6c510f0bd7cfb9d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
