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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=9dbfd37b96d08491b38dbffddbc546eb2cd24cb1520eb18cf42ece94c5ddaea4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=f9d81ff94c9a91dc22f2907451f43422cf3b6ab5df1b5e7b6145cd62c60a4f74&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=967ad63a4dc27d2a9a1e98d12c482a5d9d608ba3abe2f05c023b84712f398456&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=65eb9cd0e9181cb212ef66839e6643f22a7c4df6c1988c134a5ad7a50c1acee4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=ecf453d6f540e14ff537a9572030ad91a1b7ed09c5444ce610ed4c697c460852&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=e8e188d7fe5eb7b2ea3599a6650e41e99692414eef415152da4ff3fe33c3a43c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=75a076ddc9baef715b96093e935a0dcaae6c517caddbfe31a51f87fef83f71a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBBSBY%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T210706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyIC4%2FgIaKpe%2BELdCcVOBv%2FRT95Ax6JLhjyGjBUXbVXAiEAqp%2F1DiMbFfYBzaABtLXcUBWW5V1Io7KccWNA2mli0CEq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDMGTU8vW4NaIz56hSircA5xRN5t9l3AzMO8jU%2FeJQIrHgmlrEZM02MVj3z9oYOv%2F9qpzf3dL32bme1Sylwci2BR4k1pq0vGQwanT69rY57eu57Uo9GrdpnWnqkaHOk%2Bn7DElDpd9JOuQj0DPekPhXhwOP62x41hS%2FB%2FJKlIrc1QsKaFiaTgYPOTFICaHy3tRffFcZONIQtSv1QIRc8kwxFvbqZQzy%2BfadH5tbKKO9Dc%2BXAA5RezgXjcuOubNYh8H4tUo712MCFxQCH0pnktGBzniqEktSiUpxKWzyvSKJ0nmrB9hJxI14NqaFL04XrCf%2B5oKEzXctWc2AWXiHFElpymnkMlLgxDgAp9n%2B1ZvHGhksVstc4XLG7k1TL%2F7%2BKw38GfHGPE6e7Ek%2FBDJTYvbIwQE5V%2BdfwYet8GYRkfjBfoLkQS7eIdfoASvkbQxmOAvMj8%2FtZkkZYJ5omLxLIdv%2BV9hJIpsTdD%2FLWIKV564J7LQDikz3LPsngDnO5dY8hMEfQF9RKIm88AKNyH0e64mCFR4QsDmdRnKgkhBw6q3DaVac104SUdhatNuspXXuxAM%2BWYmmqpAUkM7o3ADCf4qD6A%2Byjkv%2B3lpPgp9UVePx4zti%2BN5Rn24CJCaQMCI5oE9BvVx1VqmKYexJvTwMOTSksIGOqUB3bSrh3I%2BSU7xhRhaHx0SKBQiJ%2BaZ%2B1iH7UsI27sp00ogUVbsTbdkZkgcvOt%2FP8HunsegV0bdMngaU5z%2BRG8P%2BbAlB46IM87osRZhM09%2BWLdHzRcXqLWqmm%2Fu%2B1FVhMcpz4QbClZAlUXY7lyd7pPyfjWzzdEcvaxMp7%2FAVRdoYGFJOYUGFJwVDND2mfhY6DOe1o0SAXk2%2B%2FG1jWlk2Z%2FSL1r10W5m&X-Amz-Signature=a495c74a413f87b98e3a124e42f307fa073d81f7e2694ef5ffbaf347bd38a195&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
