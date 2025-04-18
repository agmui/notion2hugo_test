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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=3fe9917704145a089881be5177295e36f8331c4aa84569c0e28e05bb10a2cada&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=c40b85422f6b9d18da19a22e427471904eaf76100c5579ea1321a655c0f113b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=e227e792ccfe3d9f7cd6eee2670d5eb5b8e04152c12080bf477d1d4f8ed95f34&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=f974eaf13fca19666eba5d70eb28ba912c9165ee21e8901a981254f42aecc47e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=bef67d9f772c270a48b19ba58dec712a1acdfa4a88181764be216c2062c9dd64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=903e8edbc7166b469fa7b1e601f01099f9bb309f4e8c9f56cad85cf530b6c09f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=fe846a097fb175610e597ac85bd1bc8255b437900897b4a585f720b5044d24a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLXOFDPJ%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T110717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNeFD5es%2BtV6G1yExI2eds%2BM0%2BgTGSxVozPo4aaCwyXAIgCebdnhWbSbjaTZ31SptVTx4zQhPGEXVzOd8xDPVx79Yq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKbDWcFF3QC4BbGifyrcAxXmgusTJSiG8vyVXdAXTqkpj83xRRYEXddsczUKP4y9KAOKtjgKkCDRxpdlCbl3RNJ8P93jSJipLvJ6EYtt%2FFOCV3zzdCGeNCBy6kPK2LBkngF3BLN3YtZKPVUBkmxS8ZLp5YYmElARjjqMBJKkG%2FjOjtuQKAnjlnTQiUv%2FN2GDVm976pfPKEP1UAHBWM8GYWjO%2B%2F73LfPFtK0bVdSsVjwHf6uF7%2BsXq0HQBqKlCjmLocfkrE1OJLAxbuDEMoliW%2BTMMjfM4PvdOQ%2FSR8SREQLVCd%2FzjELD5bbN9gAj81qUrEfjr93CsUs5uDcpyntaRaH4Ba%2B1vElc9GRv9QLmB9Ygz9veEZ6OHktfzUkPCuiTjJcDVEePP%2BSuqBDHMG%2FQlmG4cnZDeZpwL4U3%2FqGFbn5doyWsnwYlhFaCJFzhliBhwYtSHNc4xk5fmQDuEz3mTbOIGA1MCLPBPZnXD9lZ13luk4KvK%2Ffp2G%2FQhzJb0HM1%2Fy%2FOo7cX%2B07zjsC%2BwZRRV7J2ppSSA9B8bEXAKK8wShWsSPG38Niph8gkF6H4zgc8xiUC%2BQPi9ir0jwgJggAhjaWp%2FgxMsv17J7Ah7PNGh54y2o9suq%2BxdSUilphlg4IV9P8Kpmywe7H9XHSSMOGsiMAGOqUB%2BMyZ2X4b45sNFiuugoyz%2Btv83Fam%2BGgkeQb64%2FvtOyXW4IXaCp232arcANbvpvra%2BY1pL9L89eEgF7I0b0zACMb2PZVLVR5jIDC3GchoecpWGYxZhE5vBfLN0WmSA03NJMtNnEzNnbZOgheGAif7AbYV9Ff3icEh%2BeRLXqcHoc5Jl9MCu7SRgtZ0rK7iPqcWCjlNsO1qJvRuphCKRqtRzJVKBtSW&X-Amz-Signature=ac54dd68402ed934b5937e3b890d7b82b67fbbee50e4c2a5c95df30ae4f3c93a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
