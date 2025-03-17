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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=2c1e58a8eef05ae9d89804cfceb6e279e26696b0b6009fa526e43791c4d4288e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=9aa8a455b937e5e542a529ee049d0e523dcbdd394bd11b86f865edea5c6cd9d9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=5d928646cf6afd499966d1ee89c1e20dc09048734232762cfea86d4b364502ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=ceb63248e671227c0092256bd0ca995b93a6c4420447ea4362d0606b1c86a364&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=237e27161a63cc8ce040067f3d75bf247e7c4daf3214d358f215107f621030cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=9f1dcc940ad9a8db6ef20cc4ed748b1633af6467d43179b55bd0eab5c7c214a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=31644d726d8ede001c861ef6d38d7e630bc2d0415215a62ca124fc301fbde472&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBW4PAA%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaLJ1k7AGYzz72LxYd1ZvA3ZrPR6SNxT1xluJpEddFggIhAOGxqkRc93vRvcidCBXrRCo%2BMwtS87l3v79tBKJCq%2BbJKv8DCEcQABoMNjM3NDIzMTgzODA1IgzPO6dcCJYPhCxK%2BUsq3AML58VXWJI07zcJMVgSJUT4O8wbvdpCYuCBpROonLybzBe0378DD6ixgLy8T5%2FKxGmxkYKrYIq3nPc6eDyjADBF%2BGZpmQO%2FFGh76%2BaG7els0%2FygRlt7fL2kUkW0%2BRM%2FfbvQDggskQ5UcS0AQokONDZKjYib9DbKexgFP8N1vRn%2BMPZs8mse7I2e7VIyw6z2O99HL3QTFudTsTSkY%2BX0p6Cht6N4%2FMT5xEPBGMh5x50F3l%2FUUVkniGyyVP%2BQ7G2AyGUDc%2BPlqluv86F1BFoRvxeFAktbdXNg9Wja76fXA23P2eR5zm%2FWD5RbzKOzwvEienlhKVHFIrUZ7LErmIkCypKfU8%2BrhvpyiuM2r83qdXCZUQ64rzST1pnPQwjRgz4wN%2BpmRkvSiLMlK2Nw1WzIZdOBFyCMmXP6PRSoKAcUpTkftS5JkjkYLUC2jCnWlqHvxIl33HVFR1an%2FiT%2BYS9msY7oq%2FyQePkyPy7x7OpgBstXco2KWGWb5%2B70Ig84SuuEflOccuPb5h5CHAB5RVMhXh%2FwAmprINHTwhW%2FaAbuxzxw5EkyBCq9GwY94JILsWXrQXkJAZtvdIUGpLCjtqMeGcGq0rilwlP0g9iOVNWGkXAZOUMGZZCXDUQQMEzKMDCOyuC%2BBjqkAQNp35e9JWo%2B%2F9kH2ZthHfuAQG2Ltedm0%2B8jJeQKCUAjK9iaH19jgTCfarMPkvJKmC9MmXk0blqNZnVMc2BvUTXauIjkahtcaLZbLT%2Fui%2BKjj1CTik3BREpPjotkY6OUy0EwW20Fat06cRM9Am7yIMG%2FDlAB2xERl%2B%2BPQmI71JRK81A9dYCrkn8%2BoZFgFiN%2Bv6vd4uVVSoA9xqb7xk7cjXYI%2FjRe&X-Amz-Signature=0c6c6539041fb4eb885c16b18d1ec774990bef45cedba0d9140f519afdbc58aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
