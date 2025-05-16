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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=21334d77bff701ada8f292e4e6f4740f02ec2451391e7ba74fca533475068e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=0e0ab59681710d94eceb717b31d7fdeef1bb1c2364b5074bc62b6957dc2842f1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=18ae3458b1207f1fbab77ddef870925d0ac54c2b694465a080e908dec256a3e5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=2936ec8f825bf4c12e3ba459bd50781abe671f860ac9fa5c9df6ed08a2bca3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=076cf16778423054cbebcdc6e0f13b96fe47118760d1856dea214a807264f586&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=f037101aefc34eaf357f8db9938ac2e337930867f7e65b12cde15fe5afd32af7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=52daf8b7d65dc43c3c538c06ab927b3291bfb9c70d40423bfe74c9c697993ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FFXUHQX%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T161019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDuAi0xqBNDzsfagW2203Rd9iWZXPuMGGRUftZ7Hb6TgAIgZvl6zcXPAPKZiH2QCWVDWoY%2Fh%2FcKwDgxW4ta2nwjY14q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDNIYbdzwn%2FJqaroQTircA7wRQDzQpRzRHi7qTT5tDMLIeTJfzGb%2Fm8Ko1iUxFbnzk4ciPTHEGEuaredIiHLPSewc3GThHjN%2FkgHvdOZkN0pJVVDidcBWTzkadKaq6AR2AYwMkNMadPc7oSfXCwibvEOjdyclXk9NLxC8PUDXWmV8yl%2BvOD60WFYrlvUVEsbcBMDD9MAOGjic0C7oXMPTFLDO7uQUk2ueuQ6ou4VVrkmJmr0OeLgBolUtgPONjOKQkb6h3SpUxzEw1OPkRPAar5233mqPlNgwm53Oa7ImtZngLyFDuvKLx2BU2rOtqQHFjGs3guhHyioEI5bxpYxl9oPvl%2B2f7s%2BO7wBqthTKMHpbRf8ugzks9ekxW0ZGxVEUv2QEjmg%2BYE8o4VF4TYzoYldqc9TwBoD8NhuLqCqf9JBud%2BAM%2F65kzNrCt4ntgmNuFba7kffGkSBKrswG5ygT0%2Bi9cMhLGCVxz9pv0l9ykKKNcX1PcZK7yj4E0h4HbOD8v6JO4I%2BxNK2J5ka6iu66V3aVik83yucCNcNrw%2FJFLNsSYlkgd9V%2Fyen4N4njj7SFtx5eU%2FeBkQx8c2whE1%2FbyBjfmuc7hvX0CJ%2FJbrckB%2BlXl7HKjR3KjODrOhwidOUBkX6I8pTfd7yXXiN7MO20ncEGOqUBtBhTs9RZH2VcYkHDqdhUipapzB4VFG%2B1Eo4O8oNgDKzmUiGa57PqIWEseoGc3CJMtE%2Fa%2Fm4y7ctsTinDjEcaCGunh7htJK%2FmKNWGrMisEQ97zD8%2B4uuPsCJYB0tDnYz%2BGj6rT2UWE1iQtFMcVS7NJGIAWIkRI3RQOJ6Ev546%2BB5ZobJW87OazcWR6wVzFldj3qenWKkjzJsc3RWbfPmCU4%2FVZaV5&X-Amz-Signature=36880677bd507f5f57e7ec0bd07ebcb25558e5629f152c19d1c9321bbc790a33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
