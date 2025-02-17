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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=0258fd18658fffd408dcafa9d1ce577d6ce5fa27b1f76b2aa9fdd5981b2ec290&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=58391bab7886dd83a8997ef093178d811c22d5f972fd1ccc19226beac0df0dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=a2b478ea44e5f5cfa11b7257537ca575e78998d9f99d9d037e3053c0dc4a1ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=a46ef9e1e5ac2c8e91b403ca93b1d946c3e2734449695d620e6dca6340c1f102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=e8bf07e826242b577d9a6bfbf89d8e9f4a2a88edd5a37830b37daae2c3d48b19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=13de917c68c0b323067a818bd76ea06207c260d8e70b3ead46f625ef9d1aa50e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=3d7e54393af6a004ace221fe64ca33db48985e0c9197985799f0fbb5c6199aca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6LOSHWD%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T021223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCesGAc32dW6SiB92JDCDF3Nnqgts0bblfaZxRJofo7hQIgBS5HzT6A0R2ZYQyVII1i7nwQ5ndybgVSlET%2BU%2Bu8Y04q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO4Dw2mV8iy5sEEnQSrcA3XSlaobGciGDc0I4QfZvpO4IBkSn8zjC0pEvzfR0xpOcS99ZlULf9z74VAKVrgn4IA6oXT2pvh5rXQd333jujvovELPJ7VyVyAXuATXHz2MEj%2BL4pvfrJwSa8I6vPIvwsk0e%2BJ%2FuTyG39fDwFTplxTEQKf3BOFTaptVCoY9kRJRUwN0x5EfJv2XjbkNxrjTupB%2FST9CB8k4X%2BUqsRmOUTrCZMSb4s4qh1g7CubHFpAzmwwM5GuS33ZPbI%2BKaTImwxdt6XQeX76%2BpQ4npgZRJa21XBhfLOvcmFamGQRF6Ma9JyhIkwXdey2eUsACk4f%2BZ20RDmyVtVjN63l7acKMRAdZ7GzcbV44SPHZdh5Vq7rXYojhDynbPAC4iwqbu%2FsLJcIb9H3MLdlrOPcMjh35SGdsDrPGz9pa1V9OI34%2BZCa9C90l7IEVPLglm6im%2B%2Ba17ts6iEdvP%2FyGjaU9y4dHU73nL46mB9GwfYOAjf1unBKTfhzR3W7S6TN51Ko0AKH3%2Bs7BgcBAdNL93qrSmgTFPEIC6gbIAlJxiBjsYEBvzFJaPK5Sh%2Bo%2FdIm%2Fd2I7i1cyoJ9IRgajyeIjmV3nKqgJ5HUXP7w%2F9EiS8iK2wZvAqunnTVqkgSUjjud39XyIMJ6byr0GOqUBm9E8sQrRMTCyhwvKK7%2FRfjdX2b%2BrP%2FDyWiVDS2uKd1eIO%2BLh0%2FHmZ72Sv%2BSyFPmMnvODFReMH26caazMNWmdUYYoRjEM6cVOv18TbQUK8jamBob5%2Fg7ZfCWWfP%2FCsBIxceqsmbhgg%2B2t1QqwKuuujKBQ%2BFSdTcITnZBKr5rkuJCYWhc%2F2nYvOxCiAFGoFzmJQO%2F75z40sHd17%2BAyiwJKd8NTY%2Fhu&X-Amz-Signature=0645e4a56551d866461efc203db890632ba3726d72ddacee8735a2c52317f065&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
