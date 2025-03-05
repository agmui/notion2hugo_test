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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=cee91d927ba3e5382d248b64ac44bf3068d21c4a90457069f3e0d456c026f863&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=eb17eb57e1f3eca733c0d8f23dc5125c645afdf5fdebc2d3f4a5493aa9a589c5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=9409744e8cca7b1c4a6cf10544cf803fcb483f56edc21ed7fd638b9747b8da28&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=80cf9c41c758419062dd2da9cc8aaaef3d2b35074a83e804f69b4f70193361cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=0f82dc8225eb9ce2afe4c8f959f2fd3e3cb188c7ae053072fd32c3e8b6e0ed7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=67c40d5a2b253ac63b6f728d399d7fae56667651b84b86b3a9c24f5de8e2e84d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=d6d9ee7aecedaab911206bee37aad3654b5416a2de145f0478108e653ab29970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHGKMUFJ%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T161255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC701LaKEVvdoR8GMBE7YagJHs6nkb2m3taww7ocgnFDAiEAgUkOMcNMib6O9XE18AUI5PfLCb0kU2WdaeHoxVlj7l8q%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDEKZErXZMP7oiw45GircA2care74T0%2B71ej7YEAxe1%2FWdePgG0%2FPigdR%2F3hKhpveRyyAGyD87u1jO0BtEX2b7a%2B4Gzav6oma2VFBgw7qyS3EDDsFAxTC50blNKeLpJr17T61%2Bn%2BjRK55ewBS24zJT2p6cxJWEU6K16eO1hpBjFpX7spVZExTW1P%2FynuUIbmlrBRzZ20yPgVZWy02jc7eRRipx3wxPGxxe%2F3QzXkigMDqouhJ%2BqQBV7FXOb%2Fd4bhRDhurpth9AMY9RJt7N74evwpIRm0g%2Fe3Sq6OQ0RNMxZ2odQ8Rgh97QFZ9UCF95IYknkUB%2BJbWanFMewO74DZE5Wfyd090dgj%2BzAdD%2FEsSWQVxJg9rQQgpiPGYXx9AZSY%2BvbwEfHLXjjeWY35j%2Bw4IswKLlBn4Ixn3hPg4PvrP7ZkISkIBmc5skCRWgGM9WzGZ7P%2FyXVW00%2BWP8ZXvQB6i08VR2kYFmuGbbuV34CKmbepAnLGsyGnRZVGMOA89FgybFg%2B5XI%2B9iwxB5rB8gV60lc5ukZEHolwcPOO1vSOyjeEJ5%2B44gZDhdpu%2FSwWw%2B%2Bymr3HUww%2FoUVwUkrA353dUKZdXPxw%2F8H%2BSpVdI8PPDCZVWK0aV50oS8SUenXYar2aKf73zy31BZBMbFXwXMLO3ob4GOqUBZFINnakAevLLl6LKH7hFEji1jjPcWSHxIySzayWIt0zgm0ckKy%2FNvFCnzCEhSkME%2BA%2FuIgrZoIj36X09UPSwkhBK4tbmkg7AgGhpCW93W4Cpk6NhnID%2BF%2BFEsWw%2B8ZAQoTxfHSOwGDCR4lX3wB7esAJv4dD%2BLb%2FVr2rDOuiE%2BvOKeR9Gx5sdptrQFfvd6BNtlLSSX3eugKv8u9r8NHxuGXGbkx9M&X-Amz-Signature=05bfae2f5689a799cf2babf0f4204c12f21822fff523b2710d51722d8048c510&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
