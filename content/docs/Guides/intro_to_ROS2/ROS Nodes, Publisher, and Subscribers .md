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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=2ac875a21ff521977303ae3545ee6417e91f57b4cea4b6557eb278741ee37b87&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=d8081accfb3876c00d4e158afa98a4d101f18b5b1238dc825c36e7428bf575e8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=26fb49baad432e0102598740826ba8d69af873ff68e974a75619199985826bba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=c4d992963dd2bc912898675f46135e73798ca742dcc1bfb966a3a8f8fc60a194&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=c273536bb36f27a43058e9dbc3028c03165e211ddd4fed0675946f2e37e70057&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=c1d33ace1a973dced5b64832435dbd55e764cbb69750b6413c4210d61d179bb4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=59e21ccf2e56492dbb9330621b44df93e9d853ffa9d9137c0752b6609e7a98b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O7WBBBY%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T090712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqM9ZE8FnvLpAD%2BHxFzRzPO1JYlo840Su06zDphVMxIgIgCcdQF07oq%2Fs%2FEk11q0TodeK3QV3T5svTKd5lTOb16Zoq%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDJ%2BODH%2Bj2Jgqe5K03SrcA63ondcC4xQJSObo8B7etqkMT5TqCvysS82u8zjnD5pdrruYPd%2B%2BDzOgaoCeY5v6eimdZHdO%2Fag4EXojEWVZCd1JTkSDpl5bYhZ0%2FOCfeoUfqNPhD8tYQ%2BDaEQLpFUZHjyRHBtDSJe3U9gy5MsefOEvz3HhBVfYxZrtFeiIw2GvKO3%2BHtFBNx7xdrPzwfU51k4uzwh%2FmicbdIkkRC%2F1dvWJ3vAAW5i9rBYAIEKFydjTVI3HsE2VBIxYUfHX32UwawcRuX7clmVgeoOFASm%2FErsBf%2BdsrGbUQEK1Gjez2UUznW0t82aNO8w%2Bla3vwhpMrpEOy9ePfq%2FcsyPCINZIX7e3RBTSfGNf5JopW%2BbKo75OB87Fdg9wVpmrSEKkWkwLk%2Fp%2BvtUH0AOXi31%2FKO76niN26gI506TtFYezKnAzH4HJkg7dyVvrbMSlhmUZHyrFQ7Q%2BEKbSUFXZ5oadkKyf5u%2Bc5ztDAuf935zTwFbHmVVUq2uyZJHjGa7vPaXkVb%2F7ucD6pKNvwBWyrz1uKguos5nN6ZqpPLFPfzh%2FJzaK%2FDT2wfFbrdjo%2FzHDwhLP8VtGlTVemtjapi3ONZJzm5HqAWLjC2S8MUnCgTX1I%2ByLsMBhA%2F7ka9E0wJkXS2IgcMLbk1L4GOqUB6OQphgmW2nUiJhSQqReruSka5fu%2FtIYFY%2BKxAep1wuJa%2BaAHnOGspxzu55qZGU4BTPA82r1cx3KNpjyNw0fghwraX2FId7mt4KbrSwyi3qzgnWt74XRAusfPSsoQS8aEgAcirSXAmmWnJvu6fNOo2SDuFJWXKuFauaCu7Zda8LdoiDHN%2BvZFRHl9ZTV9PSVPJuR%2BV5mVtI8jbzK9mz7rUv7%2BJkTS&X-Amz-Signature=af098ba661ee68af3dd9ec0c3e9a25525db336892dd9791df896a5940aa452b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
