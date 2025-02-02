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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=86c3548b8605803338cb051b6cdeca30b9df88ce01e0a01fa8fd67d95b1db9e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=943b789d8ab925b0fdb71adf486d85fdb36bf7557cf6e9ee92a28935e7396657&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=a69821b9cfb4a5f851de80bdc69126c4924c6be9957b228f1cfd73ee0f0a806b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=eb0b241f045b545c4cc91a2fd56e155f1fbf14aef1ccc85ac7aa70c0d6a09fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=99167a0d205727ac28ae3a468e66a03520c14d689aa3714402c8de4729600797&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=8248660423bb4af84d77585cd9b511b91927b1061022904c4846b138b0fe52de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=8f894e4ae8d13d817a62292819ecf2c66c01f8b4ad7ff91c7c976ab92d0c66e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNTVJX7Z%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T110139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBOl25pmgQUdLQG4FmKK0pb2PR990u2X5pXlUYaKImz8AiEA05QBCjYtOMhhkvaEoWivxbDfy%2BvhXEEX0dXiAOJ8GtcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIAdON%2BNWdcwo0CmvCrcA4gBa060%2BnuYg8KEoM%2FsUF6DpALx6MnkDXf9xqB07pXxsl4mEDjrT%2B2HmVZlJWmpYx5dIRsZfcpCws3mVtBRzigb%2Fhr2MTctDDIR2NomWUoo8vhWWsy%2FLAMHm4ioAsxaDKIPM8ZxZoImmm0P4O8RIUfNosVYT4Hihe1UbLi%2FXrBTfyET%2BfNAHi6q4KMNVLcRiK6j4Q26dJIW4OwpSLIp5OaHpxYGPkBmKkgZpA4r6drqyflxgwXNJ%2BR%2Bd0oPo1f5JqrIO%2BlMZlKTeZ6oVLYS0B%2BNXsJi%2Fk%2BK8xSCjwlXhJpF3ZwHVoaX0htH5S7ZxGeq74dDhNpPL7xssg6ywlBk3H35ZP%2BVlEKH4XNoj0BH9igeuhZfbxJuDQThl0jZURTxPex1EWUcogpn4%2BHIOwfNFchc6MBY%2F0IQfU8SVInM%2BiwnRYF0MsWWS0qL5V324Qt4zJEtrWV8O%2BJzVrHi05LS2j1RATwfL17CYStQdbgwryMF5CCahNTG%2FARK8V5czPsNGQOAZHB4C7d4H5NkCt%2Bjz7%2BE%2BwWnodSYOumJEXbDZZXzAj01SzyKExGU5YnvPs3rWkdnPbIcIhlwLxw0Q4S6GvMZLC%2FkuEGsF88uSH4KGgOeT4k%2FtTVd3A36tjl5MNWd%2FLwGOqUBLTeoCdqN2x9sXDervypVY43r3w9GfT5EoNBPSuARLoTrGFt%2BzYRYcW4D41jTHA44a%2BPyibI4CXKs%2BhfY%2FAuFgm1g6HFr84Xp4guzD1V0oAFQTWJXnQpbZiuo41CJzUsU%2Fu4GWAEJz0298Bk9AUcFCXPSWJYdyjFeKSzblkuXr2YhsLNUIrgLaYGFQeKIYVYwj1RSKp2db3pTV7WEGd%2FAfrKEbevf&X-Amz-Signature=7fce458cce815b38c6aa6f692f3c42a50fcc551e302bc73ee54348da5ea8a402&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
