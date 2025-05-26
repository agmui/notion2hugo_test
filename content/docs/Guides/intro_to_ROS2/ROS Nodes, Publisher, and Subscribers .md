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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=59dde449d0f2708d4c09c53ff5aa5b89737a4857115457ab4302d7ff9ce59a6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=fc3194b518ff847f73662322095a96f9a639779e4a7db3074a80bae7783d15c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=3af389e6526eebe64062b9f87fee255799469fe50690b7883a703db48c0e1a40&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=c49bc514d0c6431d38f3a196fd7fd1c92b7fcc08b7e6dae6afe66faebe601c60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=8c69a19cf203bffed54bedbd1cd2a7b811c84e507cdf32dc91770a2fc742fc67&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=b090c096ec379286774f24f4dac41996040b42f55a8951944ef5573629d6386d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=436dba07becf842d4e7ec4a44c8db433300d2eb9ea2b4f9d0249ac05d5917f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW36ZD4S%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T093709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIGruKQ9K3o5pGhpIHaMFUKd92YIHy%2FzK9PcimsiknYp%2BAiBnRQ5%2FB60JfypKPtQ8s%2BYM%2Fw9w%2FzHMsBq9U9ztnq98RSr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMaQlNXoHQ1KUPxMpLKtwDItmP1Ob4Gvo37pESGbh81eE%2FxCDkh%2FGxfFEOwDU0Hl9mlc9bEozQaIAchbtT08Ti%2F%2FMBu%2BQn6RJ%2Begl3OuqyRqZAMuF8WIF3KcZWs7xrsU8tfrj2UJiXL0yewYgc8sHODgufnGMpL6jML5YbL7%2Bhhem5V9g5NZoyJMZ5ABd%2FMwImqGyfwOk%2BVBLqRYjxuesPWWA2u8OFtBa47jrn6iZom56VU1MiPf5FFUBrvzrGHVKifDm9N012OciqPyMTgU6RsLjYKOO7hCbMZ5aM4yqSkUSLEVfTUYeqf%2B7eHc8e28KWYpsJfm0LtIFtJMDj%2Bmrk1iEzRvarrD2bVBlXtSBm2wWffi3lV2aecJfmQIohHnI1GmCD9wK1qc5WkFEDRn3HfNR0ay0es35FMvxttVF%2BHtgCaLwR6BJiZZrVYRs2uLRf8guda%2FByOMkTh737UK3oUFD7OrCjkMV7jA9D91g%2FDRH2uP75SDclVu3NqJ11vu%2FLOP%2FTaJIEfn%2FCD%2FUc4XE0KwdDioMwTVs4nw7fDE6Li106SuuKHkjD5H02MPZWDDDME%2BxShCv06x1E8I7fMkMGvqslqSa%2Fi9KRiKg6%2F5eY91WE0qDGnQkJ5lOwMTvlYem07mWGL11UycIdMLww1tbQwQY6pgHVA2IV%2FmVCXb3oA7E9aLSsEaqrVMmnMRQm973d1JRPkegpnPnisjX4aBuqEZkbdNAYau7%2FFw%2FulcbuqobtmA7IM%2Fvdlwd452Y6LUDeh%2B3upXGE58yYOBNu42U57al0%2B%2FINgl80YcYHQj54n8EDnlisv3skPS7UJaYHwK3hTKJetxqQNokb9wvUcL3BwwjiGFojYYrxMgxs%2FW%2B7QvI8hpLnAPWTsnGG&X-Amz-Signature=659cb249640760efe630db1a25b874bb902222677d78e3cfa8f8cbb109b7a382&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
