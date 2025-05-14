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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=41c6599a185c3a0d1ecaef82cd8a4d3aa46dbc82231d97ec3e7901734c31633d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=72e5183c1aec45efcca22a247168586a48092d4c288b81f54af5fa8c10ad3ac3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=67a7c03c57621b92b12913bdb8dff20603925346aa309a262f30f6bd50f6e6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=8950fd065b2f54c9a731a1de58cecc1d8889448bf09d97936c250bfbeea1cf32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=1b9820b04bae4f110b8a3295d91b07e76498866de528ef3387843f5b37e455ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=931c36e5426abce42f8fa450596a5972f802ef10a06fc1f6d40647d54480d606&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=4c2c9ca51700efbccc9d1955c6a7aadbc9b375d7ac6f041e1fe800c95d007c1f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUURJEZY%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T132311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIA%2BzfmaFJbpNrHXPmouiD%2FIxmzXAEbjvOnBG4wIR4ABzAiEAhdPw0xWTFJubEZkxSk24dy8M3znQkBRSEbVJ7IGuSZQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDF1Nbqu4wOZpRZuhsircA5Dvsj0SUKoF7RiiG8e3EUp7eaW77vn3OYg990km67waOD72lPAPUtVtOoYiKe7cBi6XP2ezLKDnfn4F16X8vFN1uFTtkpcKG%2BIN9VrvaIVQGSg2Rp8RYU5QJ%2F2ZxvrkR5jgOg1VV98dfeVkpA29NORNoAiL6ce7vxK8z%2B46wiriPbTz%2BIOEqDVddao8Ojz73B0Htr59JYquKC2TUcjh2NsiqWSdH%2BZOk51%2FtXXMYq64eqMYbWimkYvaZNdK5NE%2BnkNhb1PJPShdoXV6GPtC6%2Bmp2tTb%2BHI51GcppWc4ZEbUOA8ohuBXuBj3GujkKYs%2F%2F%2F0Mu5BhmOQXZ3imwoAXv%2FuWvZxM8XnBjQfsQSokatHIKCzjcIEkamFLlXNyPt04DSQ5jxDqy7QWCdJ%2Ff8NV8gu6Bmq1v3w9554xP0xsMYMdjGrfkt9frpPn%2Bs0I9HPr2AEHppUafajC85YzdidFNLujZsbMcnnZJa5jWJMrrL8mcZJDJhxMsdGsj2M0MX331bC6h%2Fk%2FYyJua6Vk2IrlIW8zas4SmQokdZGtJYchoWH6DfUdoVPEx6GsfD3Fizgf4GrXRvv3ms2B5IJ%2FlDrMY1ik9OI4pXvboD9xyHwcJ0Mdx59Dtsr9FquhHsvGMLqhksEGOqUBi%2FkAJFW1L8fyr5pHY542h75xwnVf4MuU3MK1VhDXeG5Q%2FknR%2F0vsRkxPMtEfzdLVh9sue1bTdUM38azfdxvPLSl8tZJgdm4vbMIXGTToICpDPd6YKz0jY6UCk9Q5ZPpIYON4b8GsLvPrNpEuojzdGWMTbNtv3qdE6Mj9lYUcMoJYwQaPYus9Bc4kO%2BD6eMN%2F30RswoC51UTLs4cSuzaTdyABvc6j&X-Amz-Signature=f1861d6a3f3b06f80fb447a98f9e66ece5ec652bd185810a06854f30f0765d73&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
