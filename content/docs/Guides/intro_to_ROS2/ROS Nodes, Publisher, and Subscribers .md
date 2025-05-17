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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=cccd5d2678681e3778d5abfc618a90c975074787ac4f96a48519364f44a83227&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=bfca8c57e3bc31554398c3fc885fcdec468d2295a88fbab69a8a22daab7f9356&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=02d5bbfdbb3c547fb27b958c599dbed9110dc371a9429d8c4ad35d707724d2cd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=970a074944dcc2ef607b37996dbd2bbfb6259f403149c638befb6dd178b3fda4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=f5aa417443685b8f170fc06410d6755416461b3429347227d98b25ebab675903&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=5bfa6e4c10abea254bee1035fae5be1bd08deac1a6a744d8f7bbe509f7d66d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=3fe42c95f6845d8f3816f27f059d45628b10bcc024f04706f988dd3c67bc8bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGBDYE4R%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T004044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxhvAPj03op1aQqf5j1%2Fa4zAViuOCW1GuK8QKCEOzKygIgRmenIfVlxGkh5XK8MKS2rCSkn7qC2BR4NhQiBQKdujEq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDN36ZUhd39GK1sps%2BCrcAxLvS8%2FljL8m7zbcT%2B%2FVtrMaXMjs1gNYk5Syn9ySN2V9zcTrhVXj%2BesMagoIF%2BOSCMskFA9YDlx1zjcObrr0%2FkMggArqKNZTxwu7J%2B%2BeG%2FHRvjASUmgW1s0flOSiKDTAQLxULRZlAYMa8%2BD%2FmIqSoSjGi4iSCJnkYZFa91KWM6e92C7gPQWCAMokbUk7hsRddyI2pGVOfRe5uMBNIBMD3Y777KOzPX%2BITnbZUUtUB3en%2FCtqQajojfQSAOKYskwLAn%2BcaE4EkGqWEmUqUi6vb%2F%2BJ4NaONn9QHmxImilcvlBTjpG5nw5IG9OKH0yULCRIPXiH5%2BqXqiFrexIF6aKvRE9ffc0sAh11U6IKBBwjtOt4o8piMoKqRw8cCl5BXQqCBjfz%2F%2FPaBkRs0DFq8DUcFBP%2B0UTafXXD02qlqMO%2Fm%2FXBFO2nzfgy8nJr2p89fCueyiYJvj1MeGAUCDyjUVPpBQvOznOSZVlVdckrhOLy5d9rPvvLtWz6qDpCccm6UTnWLqzf1bqQ3MtajIFjt1MpwNbJuG%2FPC67RPu1iVP2XBOr3gmOcOVG%2BDubnwptyK0V2XLe5bXylmYYuLazxVvu8PunUHojQRQYy6kTZjtT4zO81K9rhjEAVTMfsAK3aMMegn8EGOqUBgn4dIri8rQnqRSUfs6agXTOYeiek%2FBwmysKO4vZxuiEhRkdz%2FwxRdLdKHRbRnl%2FxtDlHXu6G%2BwLPKdxKOHVKW1bLKPsz26ddEJ8yjNSXPKiwwZ0MmovLCByYBK9trO67Mc%2ByV8dTDBnV77R6hd3l4cZUjhX1MAZ9dJtcH2ck3hKAOK%2B488AiM%2BdlKa4n8%2BDoWPiImdAuZXyHR3zy%2BKQt8aTApn2K&X-Amz-Signature=84f384650b00d66287b04a2ee4886eedaf85c650e0f0d2ea51748451e57a1f08&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
