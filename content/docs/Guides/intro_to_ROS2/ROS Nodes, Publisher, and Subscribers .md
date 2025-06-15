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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=99bdcfb61cde2abf5257d8271f9574be8de7cf68f6e91ddc2f4cb3cce0b39dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=7b5e35cdbb2e43f6723239e3f0affdb3fc67118dc516359418cc1c11a35285ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=53a6a0d268928ad77c05e3615e9219c53446ef923316fc6e9f99c38a63ab70bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=ebfb514fa5adcfe840af9d9de6ccc208981721f83ff054bf4c0adb4e55f68c42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=03c6b56b3ac4989d9a97c386281d83b0c8445fb8f88b7637b44009e541b5bd19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=f6ca0034710d49e1f66dc01a129eda61a445fe666f90a898ee5b93070b48b9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=ca536b2611e210fbc08d68bf867d202d67e92fe88fabc8ea340b093d57deffd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5D2SHIE%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIChl5bPE3j94SHcSom3ZzQ2asDmEJOhZGEMvzxrHv%2FolAiEAnHNFXyIITjtbuO9%2BxjKvyBUQtVtq6zQIEOvoL5jxM2Uq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDHFZhghJvkLswAB81yrcAxKl9GyendOVV8hMWCz6rIh9gQaBJVkIVTrTK7aHpYP7m075QRJBUaeraTHUwqDDTgawWbuphYhqVXlyeXclazAxBaKPXaOs2wlTrBDG0EbBlpuy57MIDNU4ffy2RrP3aZLhGvRTGH6tOUvbv2UMkbegPK9RwGvcbPqAxcb9Et7zwRYroyPpPOr%2FRPMK9nF8%2Bbov0b%2FSWPhDXSLur7jnUOYEFmsFdKhtjt%2FbJ4OuilHQiYxld%2BkqNch%2FpSkx2Z78wmRg3PeCa3w4Z%2FLWANIsboJvgYnFEIVdbkP8WrbLqnqGaPK2molQHWf%2B%2F4LnVHyoeUdM%2B3KMAyK9e6vgBE0eUSoQ5%2FGa5sTWeYU2nhq7HMiGPj%2FwOYG71rkVwpoQNueOfs%2BkkE24QMYepTvgvyzsiz8J9MVayee43DyfqXV10T%2FAK7KFtxjnMdv5pBrjLnFrg8daUoAoDS9sky%2BYbq64a9UW%2BrQf%2BJZWLvSZoMjBCn%2B9j3hsb9mMiU%2FZHY5XMK7zhJopASMOjxDjEJ13IgKhGXBOoKB4UbmTvij8cdLTutFKN8Ul1Q9j6%2BDjCvlllVvt7aoT3rhjKchLuhWAESAerBjIOE3YpnRcUa8nZwY6nFjwcGnlIsJj%2FYWOXQEoMPK3u8IGOqUBxGIN4QnoOeNQfAEwV9ZDtHy5WDzXX19dGljfx91kPd7g27jHegluM%2B7ddA7lQMPP1ird8fT0MzmGR8MRnVnE7SX5EDi%2FRNlG9d2OMY0O9MGfATKKNbbwJb9G4OII4aO9AUjP3hRi6rvRe197Gd0lf9eG8k56s9s1NQvcF2OeDXhLYKkgMqN0qjVbdZaRn6vadt3dHPiV%2FAFfrbZ5ZbmenO1XmpIe&X-Amz-Signature=e3bfe6679f14b11649cfb3b6961f569b3a592f194b871ecb35fdde52717137f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
