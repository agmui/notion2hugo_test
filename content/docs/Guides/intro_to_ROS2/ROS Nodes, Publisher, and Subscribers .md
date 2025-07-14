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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=a891e0ac12121bf21e5d67cd7fb1dbbb1b257241e013f60635783e8cca0c95e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=0f6ebe159279eebb8a4c9c60e0f8791ee3b5ee64a85c77e4838fcede2df68211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=1fdd5c6f40b3643b206a414ffbbe062bae287673a4665ccf99566ffea1c2f159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=b6aea209a8f53edfd2a137a68fa983b5d66fc7af82f80222e86085678da8e22e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=b5ab83d3e38322b072245450a80255d55dd1d7fadf480a94fdf983cac6654e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=effeca8d20f597696db7f55fbf9c7639b0c37de13105aa2b641677fc7788102e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=468ef7b748e7f23ac74487e4cf319e17559339f84a353b3c01e9f6564aa51a8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SJQTGSM%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T110842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIQDdGd6hFpKJNza7wGKzyVZgPiPHoroFHvrQEArkHdmVagIgNjT%2FaHt6%2FJbf%2B7%2FAWf3HCQaeAzfEl1d%2B5YtRvhsclO0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGicf7ldnl2jFXj%2F6CrcAzfq9Htm48atgQu9Ynbq0lG%2FWj7q37X1B9mNWa72krXfTQppEytQDMTjKMhVZwYJLgczO8jZ87Zxd%2Bm%2FeWtBXt3%2FVmea5iUNW9vq6%2F7P1%2FlPBxBQeY90C%2BTOu3nhV4RgkohMW365vs4iu%2FsUDw4Nf9Ei%2BmhuGrgS5vvbnW6SWY%2FEleqciU9L5%2F%2BAi3TWyPU%2FaWzinM58Eqj9dXbNGE%2BT3XBq%2FS53XO2M%2F6Pg%2BEwUeUNK%2Fj829C8vykcpl5FS0ziGfQ%2BH8a9E90LdyK2lAEoIs2b8h7%2Fd%2F32Mp6ZjGpp81rqvFg%2B8Qo329U5FDKdOfsqZtIdxweqbArswgXwCehP5Ltmep4BhVsmUcyprK1WapkfBrHfIcwUxxl%2F31P6chjJpDLrRXDhY1t9dFN8NdP98b0kAdldB95xh8x6jKpd9zIrF6eY7YT0UEmGFHLMXVSLQynaziAEIve%2Ff2PoB%2Fa6JPSyOKKzOAnkNS5qK6JAP6KU2GduH3beuTScFqbPTntKniZO1wVjKPsD01jtOPD6GJ7xfGKJuJ5dYVfntPSO7yCpGXGg9VSTdqPQP5yJTclf3L8GVC8BuCW3c3V1UuE1wLynxnwdIpTGeEivbGE9ZF0II4Mz1HiY1Mnv6sYYOMKuy08MGOqUBk%2Fpq3Z80V4w6TdSFk9q1oOZPdWWESaKubYCWYgkUiB8BO4J7eueJpRjbVJyk%2BV6DcPnM4vHKxyRjRdZRsThttbWBEcGoVxunuK51WiJ%2B2YTVW5HXVv6vKG6SWrcmZCzCQE6DpCl3dUkQpebt3z%2FfE6h3xmb%2BmihS%2FCAXpR%2FswgfRKrFzNALyMd1d5eiRFdUy2SBAXzfG27t7iyFIsY0Pocigk8sR&X-Amz-Signature=ee81efee14640e63a2b858a70fa4eca26ee9ec00fd0a9a295147920bcda7ff27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
