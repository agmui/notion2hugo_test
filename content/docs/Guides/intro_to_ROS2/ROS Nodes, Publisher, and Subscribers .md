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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=780405c910913098884ae2579db328702f264792e6ca9d6aa6e0a1aae4324d36&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=40122b9ad50ee9b1ab4854a887119ae13e3fc97398fb2c523c7a6b614e4b4b09&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=5f78c9ff26892b97a77710dfd91a3d355f479a8f72561164f5f65b4c61d01cfc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=b1450f9484981acc2d0825e5522e9bf7aa071508be3a94d6529ffcac98014d90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=88a6ef43ea639d1ccd074df90d64f6780db58ee0d69a60c4dff0f855fc1812df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=03a116760323e2dc97f8a7a077b76297dc97df3c82b2f1cf1535930950f8e75b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=371b361c300bec90f2559f45cf076bcdb90ab99e02d49ac084548956f134ca00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXMI5X3L%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCFRyVzIQ%2FNliZOlFZLQpq0xu1Yw0PGWng5ADI3tU%2FYxwIgUDEN%2F4qElFodUdnd7mbV6wT4Bg9VluY5bTHC74rAIogq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDM%2FpCHCDKFMbSaRmTyrcA0oguT7ru8biFAuF85nvHybSG3p259vEKovz2VdAwKrF8JfZJZU1T9hTlbHVLBCRQ%2BgtTEM4M2m433EbZReWudjBSVzDlvkDczKUuVLH9h5YDKMN1zBP7kqDJyTNuUTRkPD2vdN9fSzY92MaLXu405Su%2F3%2FNyZuw3Tc4wOx5%2BsV8q98tWZqUPta6oT%2F%2BlLDy4%2BnNlAoGyT3zMiGnSDhxYUBNaBHj%2BRyTBVtyfe9V%2Fl6CbTDDV%2BvwauAtwuf9ELd%2BMR3fzR1k3tsOhjFGXGLJy65k%2Fid4zR4RMQhq%2BVMg9sFZ332zixsbXOV6NJGVAuvJ9lU3vsEDhbppo3C0dirZAldEyZaXzG%2BsBtjKEeOmPdnNoQWeFCMsY5vbQs25sCSatR%2BsZhrb%2Fkw4nUIenlXNUBpkIeZEUOccyyKEbdUlOW%2BHhzZzhmHA7mHOd9tBU4T4s6ciATXtODdzHuxZ4e%2BJ7cl2oOxBKx7E9n%2B8GNCXkTa4z%2FIZF66nMJ0nFQGGI28gXawVyDb6H8eLo2mq2aDAcaTteK0boDbqIhoXiRf36A%2FZkHAeHBWyRKaUkpCEhexgCo4PNXxgDXhLthu%2FjVfusBhrJ0wQyVK0TqPtmlgjfU8R%2BnxsesLKfx%2BzviV1MLXZ7L4GOqUBIYnMbf3tMnC9VfyNiQZvCSKz%2F85g5seCRDfFSuRO5wb%2Bt6BTTynYAbhsrF%2Fwj4d3Bpla1gpYMgG0OqpcQo8JvQhn0a5pzBlN3Y6Iaz99%2FIzBp%2Fh6ZYCR5uSsbm98KYYAViOe9NTSTDwnwsXz4co2gf2N6xSkof6aZh7KXcD%2B9joqA2QMsT0EFajXQk4oWJbgH%2Faw0zC9Zt299S%2FxSdToNS0HO0Ri&X-Amz-Signature=47deab23a4bed93c28de4078aa66f6622e1bc867ea75c42c1425d30a1dbb4755&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
