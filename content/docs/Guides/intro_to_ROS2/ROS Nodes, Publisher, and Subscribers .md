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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=2a23152a6a5f1159cc886cc184644af60333ebbb809875ce5e078fff7d5caf85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=a267898b17ff223ad0d5d022d2d4d60351f1391ca94eeac1c217af74ebca9be8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=6a8c32ef2e620e2513fd646ab4fbec4f7d097ac1c368ea0c01703acb97e83c57&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=4731e0bb0da428e5ed023527fbce8c16e30ffea50e36125073543342b5d79532&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=156e8b605c0ba2034d689f74125b96adf2c11f48e75a53782965c7581b397aa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=b5f73805991374404c6ae52c6139a2da5382f1cde233f3fbaf6f58ae571bbf91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=e3a69eb96a69f2fefed9952b0490be283427809b2e2c77336c140d2ddc4c2d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CMOJSQR%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBmjAsYGDHNrkUoSUKO0XvTEeQSXeTl71tUmDl4OsUNDAiBgndO43EuTld3HgHJzyhPWF2EpIe%2FmJL%2Fe2n6lVM256iqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbaRBRFfoTsg8CCDNKtwDEBg0cUldBtymqh8G5P6Nk7mtb6pZYKugS2Aml2LcyLAIPrBp8JyusLazUSwck3V8aMn%2B7vnanBrAOv%2BLFFkgk7grpQKjTr9La5NDAq4eMk2nMxw6NuKBwiDysEWdBer1B5A56ntTjz9h6umm1eFmMrFl7wVG3birVYUdT69FO00NwQGyXB%2FXAxTm91MRoYk7oeli2lWVRCkC0vt1rxP66gFzW74U2BW732OWOdzc1HDoxRxTwl9r2lw6fBFd1Oh%2BmscBw8S6IlfoWB9MQg17S1BCHdRSt%2BKGXsFWgA%2FCzlu8N0ap9vUSWNB3Cm03KwlGxtEX9PqJz0CDAlH2iHX8HqMRKzbxECzENWoR69k%2BZvZ9Zx9hO99gjv14y9EPwNhtrSCsz3MzE2x5LlC2ny%2FGmb0YJ6nBScMQbuMf%2BHoTlO2rXLXAKZZBDskiJ8cZt5yhUtWlfIm3ftEOFz7oFW6JiLT5f1NgiZFdt1Qm2yLeZnDdMGMtskXHaDMVwumHHbf3J55VzORRF3bH8qtwU7QZcwfb3lRBZvTC8YyybrNGHKndtEtXyAQhlN%2BkndfzynLD08ZerHMJY7eKg1tvBromRXU6o%2FdIY8uxx1yZo3g5qGKX6A4GDVaZJvJFIM8wwKyBvwY6pgE168Neh7gIZrNtsDhPaKCMMp4LMLByyAx%2BM7z7Q9CCy45C%2B%2BWtMAchgKxM9bmfi0%2FDxSf7vg70kKLRy%2Bvj4RQi9nbs85%2F%2FxP415sE2yij9wBpNzSkHGKhMDXyfusaY5MUygrog07Z3P80wv6Le3tP4QE1QNtZh64HC5cgVtQFoqIVGnivqeT4AtVlqDLmB3i%2F0Qks0MAWtZzlCWmKNta45YbhP3xt%2B&X-Amz-Signature=1bbf4dd2b91e76cd7adb4a451d7fa75d6909410cbc6726226621f5aac3c34e55&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
