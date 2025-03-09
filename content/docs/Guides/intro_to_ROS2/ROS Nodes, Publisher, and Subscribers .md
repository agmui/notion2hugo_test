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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=52677a6dc454c29d5b6404ada374c2022aa52a3d1f97f26b49c97123db641241&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=66b53dd87ebf445ed952d83d449c83c368b9ba57cb9c15d1e6b8fabcf233d4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=4bdf6fd7c4c360016f6775203c9f444cd9f26b88e3d54e4f5ad665e2b784ee74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=04b648751a13a148c165f64572a950ce472284e1037ad34f0dc88c1f7c759a2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=66bdbb18360043473febe67d657ac76a2b9db89b936ed49a07f77cf1980537e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=3e861fffc6c20088ac5bb5b5118b21cfce725098c5be10aea2cd75690df58461&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=e89e71a1a51c46557873e00174cd5c38e05028030bc5733167735e5842dc7b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VH6WDPB%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBSFH4gm4%2B7UqLcz6oPEJnKmZTXdCIN2DvmJ%2BJz0pti7AiBxfT65VLoEG12FHNIDYyT9yVJLh5XlO8bQf1tyQV3pLSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsr%2BfZiQ8NcOLzSPbKtwDzNf%2Fg0k5i4rjaiS19uZwI4UNaVIJImbFumXiaJfvJIHMo0bRZo89rr7lq70kLwTkRUUs8GQmbev%2BEm%2FzA5Wpx0yDWJCMwm0PR%2BULvWovAv3P3oocJUXm08OrkppZn5DkrXil61BHMRTnkBOnBuTcbj8vXvcwXo1d6g3kp3oq5M%2F9fcfWSwe96qWq4ubo8FYke3sTSrVRtlPegTJBr%2BpaJJhungmIoD2ZSYrxLJXy5Iq7CuoihjQY1bRKJ4J9b6Hcqx82p%2BqOzsmYzRnGvDQW0Hzm5Lku7u2%2F5ONa3DK%2BIJXSx2BWwvP8D8rsjmzgMwKERiAnOwOA9AhSXZwgCqOm8N4gXizZuRl8hU4kwyp6Xjyym3MU9s%2FklRVN1nn%2F6isah4622IhCcxEFhu2TEE%2BeY3VhfR3D6OxM83BZuV2TAkMkAQfDOeq7RWJ3aV9kCiCsBliq6bqPFSTi5JHBX%2B4RP2iSDq723mdDCiEoGBOeIXzFsDw%2F2r11H%2BSEIn9Mk8V2qXI%2F%2B9eystHZ0a1m14NSEjekGejWSPjDmYce3uFhKY2tVoT4c4VcNnievDr5jlW4Zm3BcDWG2ucA%2FQwilTuQBYeaZyXSh86R6l77fnziUG0%2B5x76Sgb%2BaSNt4K0wh5C2vgY6pgHuFPyfHQnAXlkptMs9iVw70Xcpr0Q4sF8YjtuBi3XfU26iuRyf30LdyLIJUNdAkm5uMfJqZcKDGBH5foC%2FF9JLucw6820s5dQdfkIXK29iBkf2RxVQE%2B%2B1LhJPfpgG1Tvnegz1pxgC%2BDAsEeDghC7aJyVS00xHqxns2ieDIbEqhTVsUg8YqbvERMVGZweRTnBTslFUD8vt3OFRYfHS6DWM%2FqYuIScf&X-Amz-Signature=d0cdf47bbc781adda1aabf735ae0919c09727e5292c4cb323fc7ded94452eaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
