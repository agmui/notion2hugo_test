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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=9b122841a768151e453e09f4c4fe2431b0d86aae6cea41da7eaf6d3deb95047c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=43c9aafccd05ffd6c1d5ff4efb4da5c3805fe1555b1fdeacc2ab68f75a97bf19&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=67455ce14f4730194ca0f06f449ebb69ba4afecd285e58aaee49d0a22a6c2b7c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=f02da64d2a5f1a8bae01551d002e2a68c2de9057ba270a1394ca0e6ac80a2d1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=87b4b8bf5e7a5435799a17fc57b6428fab1a6591ef6ad0d8fe9a3de6d9b09bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=e2e98176bf77239d9c53f06ef54dbaf17c03b9705ed7ccabb9074598ba4df1a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=d9d719658a0bff055889727fde156ecbbdfbcd79f5207871246aa57d0830fb17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVKLQMWK%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIEoRoM8uFthpYkWwzvafBRokhPFZiWGutp3bezo1MSdLAiEA6UgvfEwR5QHfVuX8oY2XrFxcAvJnVCQCxUUrCec%2Bywcq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDB7U1O97wN5UW%2Bh3%2FircA0lczZ1%2FVqqfcLoFemKztvR2HEqRTD%2B1Mb2u4IV%2FMUN1zeeVM3%2BevE877C8xM59Iyugfz%2BlHMEX9ewg0wcLKCnr9f67lH92VZ%2B5aGAr88Hm3FMUUrxdj01G%2B4OZCRvNNAl9IpEOJhxfTsYvSYtXev5LjsgItoRPGEDnCyRgotEz3ZJ8pMww7GqzDVjLo%2BmrB3EvnFCEovYtnhVvZkNvgBGy5qe1vI9hIJJ1Jr4ZJgV0osn7azYIJjfVQ5BQglbuXVWB5fZri2Gl13zho2n4IJQM1%2B5HItUbO4eGy2PzhpVH7iCilDxr%2BPQnfxaLwaeisR1lQGXIfIJOXtrKj4ktja92UDkbhzmYJ7ij1F3A9Q7ZaKK2b1KwDgAVi0Xg1Uxgqme9tDUQUAmsrhzcz8AQumSVQBwMuBsG%2B4bSJLmRS9%2FAzxaEkrefcmNOgdFpW1PgFl%2FM87x3b24mzA%2BSRRqVd0rtuyVfuopmiM%2B4Rq68fC9A%2BKq%2ByNSMQy3Bb9LPEkETYEj2o5VekZEQDyqAzn9050BbFxib%2BEK%2FSO9l%2BU7CjVPL9Wy1J4%2FfsTEU4hGDr81hO3wZznkID1m5LqWszHK0k%2BTVFz%2BDtCd5%2FWoLgGKCNFxHlOuctKQ3PFIacHqRQMNbA1r8GOqUB1OERSdvYqGj4bCRib6tHhTAGEa4szjQtK5WkQZBWINfCHrv4L75f%2Bgg1SdLhIf3JfIzbRhwLhCmQ91U9b0lJgaArjKHcpruUXeJBRT1CHs2RQPaSilJGPdK1Xrw%2BONN%2B7lUuRLPeNraOOfCwSiIoQfIwaaMoX0%2B9Xtq39pKP8aeULn%2FNbsY%2BOS0vEmKRrshZ1VksExhm7R%2Bo5yMWassRommVR4Ie&X-Amz-Signature=3a74fbcaa71592d27cfaa43bcf398624b3b41629c72e45bc33df8b30db19d75a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
