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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=a2bbc42e36bce8f457a3fca2062f2721bba7206e5d8efeeb7a821cbbff4ad44c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=e2cf171096f01f03832d3249cdd262b0c85c9a2284a2198d1063f930e9468863&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=4e2aaeec485a4ad5b7a8808ae9e0aa971b78460e9e4f31e1226e38e9532fd3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=344f013d4f09c63200ce2b45e8eac8614f4cc74960ceb12d5c90973526e74c93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=5edcb2e9d0ad500cd7f9b1f8d9151a90b3127caba52068d1d71a362d137ab3f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=6fccf9ef031b9bc4f37e66757480d0275a94a4b8c79e5e7ad177b1b59c0613b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=922570fa52ebc6c6a2d2e09a7d136592584930e24b96077f5e4e5f69c6e350b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QD52T7Q%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC02QD1yFrnQHimfYWx3HhJGu5pwcPcmSMevA8p%2FlPJEwIhAJ3chPLTXMQJa47dPxJuu9LL%2FmG3n%2FSfIFvInR4Vf6aeKv8DCEAQABoMNjM3NDIzMTgzODA1Igw2s0cMlFTHGyMaAX0q3AMFfaHDD64jJcgvurtGxnmftrVeHhnUTLgWqMX0fZwfs9J2TNbkcckuUc%2BGdbbZWmxansDjG3RIf54Q%2BEXUXsky029YrtT80GCaY6g2xrQTWHX4Frfwu9%2F3OZcPFwasgbrRlX09dzUffDYcgmI7H5uy%2BblwL7D%2F3vJtpifDkxN1Ftxjq5ccBIBM7DLLiO8KpH1TcqYp0qDBeXvvxdvUaP8H%2BS25F3MTB9iL%2BBUhkuJAo4BWdfFHInH%2BJvGhkBr2aoWB%2F%2BHv%2B7omUf9%2F1Hy9h6O6J%2FSQ1WaK7OBjdaG2f86ybYqoW29BE3u%2FqMlx1s22732FRYlvZJNzl2M%2FSArIBjqaM6O54vrJ8DQuK2SqC4cJGpXcdvgfvdr88BBVDKJngHSc7mbh1kM9jj5ZKvdjlbCjnD6w4yxR8t6mIu95ECTY0l0GKf8WaBs7pEilRUcHoTtYCoOlVjIA5o3Q9hMCx7D56v946Uonu4ro7tVY2Xy7pA1opCxOkaT4YhwoE7b74ChYyEMElHT85Ykx76g6hNRdBivCGuJd0WT%2BN2BSieUnUfir8goatD1ukdE5DPo2qhr%2BbBmAfElLYJdZMgk2Ccr37tTxFdVZtwmM%2BXvhLzcxlfhWVIbx57Ipcs%2BILjCv6JO%2FBjqkASeEsGHrqKV5Y3O%2FtqdavFJVHt%2BcyIlZh2jwUD4xBBK%2F2bm2xTS09jOfVcNOmMB9QeDfV0AYceCKIOx1jYNoRnme1fmGqxR4fLzuCxG4v4q4uJEvar8LQHToUM4XPpvE7AHe6it2suVWxwZtizpyeEdHaqV%2B2WPKZI3asPZbltvtI7RnMFftVeaays%2FxmoodVN6aFOpyQ%2FirTHhqgU2LKJYETWvm&X-Amz-Signature=58d678a14d2e600443503288f2696e8f655dea5b58a8cff940bf693ca8219ca3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
