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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=ddf0d510d898f4a411aff483742e815743f7110999d942c4898d62cb36d0d055&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=d0001ba9d289a2437b44c17f3ca62a07dd1c1c6baef0ae64a9cdd1dc51b9e2b5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=320dd51d63c50b235137a3833a76afab3df158d6c49880e2605689b52b07fe24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=f84fb927bbc3c0bed106dfb80a0922d4ad5e962475a8d5a4bf32e75091cf14aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=faad89c0e662e5888b3ee19d8960f37d0c995c23cc01bc600a9da568be3c6f78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=7718f5ecb08318d961e0b2f1dcb494c0c29f7cc252d2d3474c6ab97de85ba6f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=fe43a1af4e15b6e5dd315dda5051bdca9c82f633bd20d66a277ddc20cbfd6dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMTBH57X%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T100127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIH%2BSbjJw1bTNblIO%2BwGMtRid5iCBnVp8T8m8oB4jjleqAiAZzCkkVvTM%2FlcXztXlSh0j%2FZWv0wKXndg6BA7jCMJj6yr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM0YrbawXf4jkQfEnMKtwD%2B4mm9zrcfJy%2Fr9oVjCL7J1fQ73Vo2yFUwRrRzKl1PzIxtSPvTDOfsS8ikHjVm3aw50ap9ENFs%2FcpgcpJzLvDkD5kiIGN3j1Eyk4ezuLejnAh2%2BiLP18MoVm34oTl6pn33NsvGEFKwhtMMxSXkl3VdZBq9CFzZLz4ixskyzW9m1PuCiBo88I84rvF9IJ9xNb3%2BV0rXED1gNrYgxWotVfrgz2EH02I3X%2B9d2Pl2T2JPFeqp%2FSS%2BO1lFA9vGO2k50yYTeq443ZAfNJtGzq5bZqIfxBJWIry2%2FY6wnL8PCEFLAtQjFzypZlfOxxVco6GCeiuZh8yoWHRKVQ8xlpcPmoZMCka495vTC7qqbNcYLP3%2FmlRs7KRRd9k%2B444xPl63NCT36ho9YXHe7dsV3EIEBlMy09FScOTgs4FZX5%2BTtpf32fFlIi0GZ7ZXgOGaypbzRCN4r31o5%2BDQcjZQlzMZ7T%2FgkNeU%2F1ofUgNt75l91UAzXLgmX0sc1RjqaH0LyOBthO4bvIoHvIDlLErUX%2FpVv9hIcV3w3GzXBYmcZW%2F8Z1fq8KfU%2BcrkhNLxn6yEs%2B9JcNchx%2BcT7DPQDwy77prQz3iwNWA8HQ4plMwxSjhOZ7l2jmMmrP1%2B3C5NglYrEgw%2BIGwvgY6pgGhIt98%2BZTu2OxhyuNdfUqjW6LNMT6%2FsRWnuKkPcP99FrTvRiXl36q1yzcEWA%2Blnzi20jZ7ZNUqjpRB%2F%2FBY2kIw8qBrkHM5eTXRQ83RD1kCKwluuwqyd%2F6pwJpWPt48W0QQrqoiWORtBROh%2FCw%2FQmY1cia6Zq14fBINwLfu%2Ft9un50gVdohZ5DK%2Fc4%2F%2FgpNEq2Wv5tpl1ruVMW33OD7EAZM7IfTUYPy&X-Amz-Signature=797cbce46e2bb1a1475f8af86b52dc43232e1eb52aa86fd98087e934a495da7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
