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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=557dd523c5420326f48c276ea7ad2147db6c24118b6a410ec6f3fd1cd65ec2d9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=9d2fdca0af443c09ffe535824cefda2ed4392cbf83e46c44c37a90f1c22bd054&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=c4a9721cc89ea20f4aabca718f965fc4e17c612816ca255f59a7e19edb1b7bb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=f073170f3150c6191385febc4dd36564dd1146e1afa95123e54bc3faac099b2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=9dc4d0a3ea5bed4a28a2df85510eb728c87da257f8b841bc873148f5ebf9d2a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=d78901e5eeef89cc2371cb0e4ed07b003d7da85566a99e17a3b3fd4374e2a962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=fa70d9d5eac00cc241d9b4d6c0dde29afc48c7a86aeba9718118ff31313cf693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GH65IUK%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T200828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCpOllyK%2F7eTF6Ar%2BJRNc5LtEw8IVPFzOPFynao8jTkDgIgLBrmt8q%2FB%2BOQT1kT%2Ba%2BbD2CYsXPX9X0rlM14Kus8MrgqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLw58V48B%2B%2FntYjgFircAy3uD1%2FP1I09ScxGv89DUTn8Dv1S17%2BlxiWOD1HjUlq3MwkbJgw653LbWjU1ZHwqe6rr2emHziTDUD%2Fy2MsZsBU%2BoJvfqsxbLtSOOorxF5ttjjG%2FrMzSh6GdzESifbSeDij1OA659tTVx4JxXnGodcwh2R58UAnRM6egHVshR%2Fyll4OnUmBE%2FG70C8jqQ%2F9IQX%2BwryFz6bxpJezBfzpCnZrHLN%2Fm5a2NdYJdR0ec7nZ1VJEyHJCnWU3gDn7JzXgP2TJGk01HFBRb6dxmhCXspIzCIUC2ANoDAFsG0avRpY%2FiRmGhirtZ%2FMVxqXpaZy4lrga1LwwLwUXMIuuolNINoI2gGZRl906mywOO80wugMQWbsYq%2F6Tt847s0ks0ypVQcvmFkXB6zDO7KlaXyPLL%2F46uzn8UpwBj9IF0WZizYaAQeM1YkgX56xUtn0L1sjgfM0eDd%2FDgoYqFeValTX1lUGmTJnRDKROUYupbScgBLKQqMQmmdMeqWzkD%2B1S0Ddt7lxvnWgZ5hd5nHqJz11be6VenRf%2Bb8IBvV9lMmgfuLS4fX6%2BvORyy3GRn%2Fkk1ahx2zV9Bwnls2iflwaIKIQYTr%2Fn3cKVHtD%2Fec5dM27VVChJh3pPpJDwA5e8ckoOmMLegj8AGOqUB4iBLru%2FxycBmVi2oeFch5Z4q58eCdCoW4rITRYatpH5yNFwiV2pQIiy70QcUJXrDKJTZksGM7dti00BZYldkbYJ%2BWu33Q9Patp6hytI0v3v79o4Bot2%2Fp1AooXBooE0nXhP8OCyG7cCMnjpwk%2BRxHZfxtBda3k6V85lzVFkQEXSwyrwnrG2brWpDAu4DA3Gmeslkm89PQ0%2FirgTCRPPlnei3Y9py&X-Amz-Signature=15a15e0dd723253e133f7db099cb7621991d9bb84cccf10b044a761a14508ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
