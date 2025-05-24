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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=fa97b4428d2540b8d10c8996304d49b8c2269c6c33a7d587d47c466ad3cfe9c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=9bc6609eb12d37036c1f464f77b072aa82daa7896ccebc8363337759103e105e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=657c761cfc4cd982d2e8902ccbed0e2f3ed2610bcdd634571076d5566c93b969&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=071349cc8cabf61144dd31fcd48f20c61f87a98f28a7d3d0dbc16345bbc64358&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=c831cc604eb20f4a5e70ab2c324e2043cfcdcd780b966152f802eb2cb9ae2080&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=096f803ca52c7eb28a849ff6a611bf16b84c3ab2c2fe9c7e540a62e125d8511e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=0c6658929d31620ed82667ee5847b648bc353a1f31402ad822cd6393c2b44494&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLQYVOR5%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T200836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIQCRaTfY5DeneHyxawlMPksT41gzJGnm0F%2BIo2nrmrwwiQIgZS4cj672igSQEYipDCydooN2PfjefM34Ywins22Fn%2Bsq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDHPX0%2FqBa144Y6Gn0yrcA9Mt4H%2FQOuw3LZt1CWIL1bU%2BiGF79hyPqVmq1Z7AWAhflZnktqBZxI%2Fih4hwCGN%2B4qjlJyxJzbDZnAa%2FHcqOeyvJGnUIGClBQ5IPeznu4lMiWStaDMoT%2B0ZOjSIPHOckK1CFeXuEoTR114TvqYzB6dU1EoQBSwCfXbpemqyCI8qD52YKDPezthKmL8J3ykMYbUS3dqyoO%2BTotRg%2Bxd%2FTAOpgRYBJKfFa0XvBvTdse7PUmtcJgXlu2puXgdkk9aKPIx2ECMPNbOYVQDLWpyB1cTKvPWG10SaZma2gYOJ%2BqQG3Ff4PJDxtHrTEAu%2FiyXcHjshS7JV1zuQikZr8jMS7k28UQwomPmyRtRvbBab3XZbId%2FKTIC1C95nITF8ECfEqXU%2B0crmz%2BkpEaUA9JXZMJcd8rBKA%2FrO7Q5eTHZ1dZpj12G4eHhJlOwR7DJUUXj32wpHrNqn1KwBYPzVjK4kQqIxz3Pvh7JpzwwxhD5hQEAO3ShmufEa6YQPij94u3fWg6VERdRjbWgwtbkVjplWOelKh%2Fh0LHVetdnq%2FF%2BieAZ30wgSH403Xg%2BlSm2r3dIEe8gn04NYD1w1ijJtQOzlDdPSP5yQlwlu5flW2uUM%2BJvok3ckfrZs2xvbm%2Bjt1MP%2BVyMEGOqUByDSdHK79A1mUOCvablgtlggdH%2Fh%2FrMqK1GkEn4KBleizl0UfCxhZLF4p5TeGD2QtxOcMRe6sXSYqLgtTVRl%2B2YH%2BMoDMhzoD%2FWizyGsSoAU2CTbdTjCwhrF0aOzE7Hswu1yP4rI2UzKTxw0twKo9DFrg2pIyizOumjmYC3k0gFckA6rJzxHE1UnfHqcFiwNSdjGioinKr8XDLKSLKOKA54WneSL3&X-Amz-Signature=7324a5e149661c50d8372b3636f69d06c49d9a8663697e60b4982bf1a127b85e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
