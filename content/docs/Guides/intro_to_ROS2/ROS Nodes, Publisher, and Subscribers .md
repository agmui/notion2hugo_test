---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=073c3b82be3384cb6c42866cd593e53122098286bce0205497e953f7a8e078fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=7ddf32e7dcca67233bba729253bcc9de8c6580acbaca39f1a4f7a47de2df6ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=14fa255cfdd83bec02bde0ffb57e4ab51a6b8f2b00855b49220d238ca50f3cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=c8f61ff04139913d3a4ce3880862e3f29b8931c2bf4a754dac3db926ef409b0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=9187b4d5dcab5d5aecac7c87e38b39daafbb98ef37b64c19d16db9380a02ebbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=981cea0b5b96f555d6cc603466c98e48a7b2b355cb1ff927e8894cac6592df7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=50de063e89462f173035c529a80a38df106b2a152aaab5c9e1dbf51667977c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q6PZTDF%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIGZL9Se0VBg%2Bs%2FAmfr7ITbxmvO%2FdW9DOUOflH7CuFEaLAiEA9Ru8dBe9r1l5mbmK%2Fvi5VVn3WY9hOlYavTtOlHbJBJAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDLtOYr132U9bhy%2BhoSrcA%2BNmbRxImQ3VRE2ZLnV0woIqm8R8pd3zXcQJqImNM2um8ETdkQwP14UvvqXQadlWcymRUZHi6oH7OTFAmXXYIkw4NP44HQPJ09wTGVzssfH1RdbOqfixaKD5loWGo%2ByE7CNFG8prORPlF5LJNBZeHWyPuVXDYV4PKalQXAOjLEjZL0%2B9MKGZ027T6nzbOlu3D7ybivEd2lHqiQvjvUSv3HmU2krMlO1URFnKu9s5VBHEtAR4k6d9vlnuFV8omQ%2F1tulCyc7CDmcfIms92D4x3eJM0gtd1dx%2FK2QJ%2BkXEqN2hc0y1N6tOcq%2FoMuMyxKUj9fxBnTdkOe753NTYqwInJiL81ljpGGyPobdglCzzLcFoILAMZn5nP7wvaaq7MSjGWIdCIKZDUnWtc04gA44ms%2FUOWQHplxaSGGQcdeUpmmMJgnNPG7g5TjBmOtkJZwUzVDBnZo4WypPKRZ76%2Bi7Fh7uzv1vN%2BJvNySe08LptsFUIEnImHQV1RvMuECSJj8pJiMvRViQhXCrzemIgFKI4cWvIiADE8MdWWk8%2FbYhmDcQHBm1ZQ0G%2FKlOF3GraHQ2g5HSrHq53bwGfnJ7ig%2BdZ3oHTCGo7p%2FJPB1xVHGkv5xdt0waUATADaEWUCG3lMICz%2BcQGOqUBvdT%2FQBx0Tmt8PqKvK8gvY1ubk2yA1EoQ1%2FpOCJgoVaGhqD8xXS5t1w8bQQjTn00Mv34U%2F889f4mowk1c30fBUKQ33mzBXfZrvOpD0Pe3agP8HGRfb38OUXO2Nvcy8SMKeIdz5pR40qJIulLHi7AaozPKOsVH8WP6%2B%2FIEZLDqsDA0u0nEk6B7R5RzMu8SMA5wWGAMEbrwj9oT66mW7gAJKEHCzNCk&X-Amz-Signature=2cbb8810d78d70bc0545e79536d0fc35bfa9b3aa7b87a408ff12586085776a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
