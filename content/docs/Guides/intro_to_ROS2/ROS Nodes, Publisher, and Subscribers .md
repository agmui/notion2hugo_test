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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=276641bd8350c01e01150a74d3d08e702e9bbcba71afade0ec8b7d6d24c0da5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=47dcd54542e00d774b2dd71f95674486d564883a79f728ca746561ba39985109&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=73692238f70a479c05db22699a6da395841acf8a60e04fc424e5cf6afdcd04a6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=36f7de46f85cb18d837ec673ec48e5f09abc9d7fba704b0450a70eaff9996036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=26aa0e9a33f43637b4572efdd1497643444e5d9b7bab78c86661dfcf61e2edf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=de43d141bb3d5d93cbf5ad3bdc37b4ce077b13e02da9bbb5a193fd9d29bb18b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=bb7e63e881c130974b126aac2cb4e68a580a3836f7a7bdc5b57bcfa30590678b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMOCXRRB%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T004154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJIMEYCIQCbJxEdUxFMkvut0wTfk3lHFxmPdRbs1qNQiPxqrfo58AIhAJ%2B2kjJsQwR2xFe1r5DpZIYUobgKeJMe55NmHd7pCeZKKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ%2BdACLDb90eBBhAAq3AMjo%2B4hbG4TSnpA8DGfG%2BNIaAM7vt%2FyHlAMwqgd3puv5548%2Bm752yJ9Er%2BahTmcxvZUyEKHfvH5VRmvU7Uzu3y%2BMXMXkhlg%2BGy23m8hoCQS6kpx0w2lzAWufrRgAhKSyltgT3X0DPRn%2Fhfyx84trf3dKSVpCh3hzcUQMWNlkkZnYINNvJcu%2By3YdSCBQjF5AvJNtL6XxtpRvAA6o%2FK3PYwGEUGJ5BxEMtkbbbVTkSvYg4c0bxUBk0crNpOgUIqpEtne6vMSPB6RzvT7%2F5ZiIN6M3PAQupJfh5LnXW3o6NQHkRsgNmLibCicbMrH8v3acA6e3RNCwXTaJC7Oa17y3DGTrLWV6VZQA1KA91oNf1DW%2FRQnMhppEXL2XstWvUweAx8AyttxJU4Mrh7HZyH8oRXRay%2B%2BEu4ywOnMBzHWdj805zkmKNzQGfmpvkB4LoOecva9asBbKfJQrC2aabkOSYsQTG866CZt%2FoUHRtEpimMAPqkGyTH4M8jRayAkHlob%2F4HXNiS5sYoyiXZfodPRTfCOJk%2Flvq7loFKFDity5%2FXMWiiPwFF8radl4BosZ6qoDe2MnrfEfqbsFzJAAaC2jeW%2BlXgHh52D4fEySwg3Uz6VEAj4kfwkcQxLIzNb3DDRyr7BBjqkASuTRJn%2BpFcUlQH8YdSr%2BeAm8i%2BsWswRKVDIJwN3eZ19SrAunXLuC5oukTYdiYHZozkFK6xAJMOg6uTz8D7yB2ci2JMeTtCHYUnl52kWjMHTIFGFTrP2VTMyYtbkH1ehyke6HYt9TRnc%2BWgU7DAYq4TXWZsiulaTTN1ACfH%2FwFksOUF8HKzkPw2hJSam0Y6lWzuikiu2c1nNgv8jECqV6kFI1%2F3V&X-Amz-Signature=4fb6beea1e2868c3574e2dd597060a7faa1d3f3428b601372e42d15130db8d67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
