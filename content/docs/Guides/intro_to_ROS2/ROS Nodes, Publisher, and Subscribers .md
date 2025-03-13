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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=7390ad028ba32ff59bdfe59ec6bb1c75f7cb03036cfed9243153f0154c842e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=3a90e24f10424e830788082c0041517206815a1b6abb31eaed1d975a8d24e872&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=7a4d6e9cc4767632f7a07cd9fe1dafff22d6a085df4fab48a55ee50a1b488c81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=c477d0c1d634d6fb0dec93abc07b5c9169af997a37ff68eebe5e6578e572cf19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=e1f483f5fdaba1e82eb4497ae78d8a2e53ad1818dfe54a50ba0cab345bf1114b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=e8e6643f892c898499c73319c04f0ea2f506d66cefc802e539f0ba8797060c8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=413e000c17388feed903ece980cca0163116a5120521a7ffaf088dee5887a014&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E7XC46M%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T161001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiEd11c2Xxl45eIrWzAKINk94svnVHD3syx0hQs9xr5gIgJ1z5RHQdq78GF6BmXxp8Ydi6oo51lV8YPNPzS76LB28qiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B8NH2Q81zauerOWSrcA%2BeGWVUmwI3lv%2B8tmMH0y1bDMSo%2FVgqDThOq0T2DFVJ%2FYqMRXFDAkTme6hKcWeiLnYWbvsmQJge1oAtBnU6GSuJ%2B3tZi8RfJec56Gkkcj6hIfgUHkzRwJeVf1krFY0ttbiorPKuIy7ywBKR5SBkhVGMysUKaSjgXY%2FLUaLlIs6tvieNPFyYJimp%2Fy0vYZGn1AkYbaOdk63nBVJupXdOzeTu4prmH%2B97RmzPPtlyAKdjBkI5DdcKiBuD8Sd8Ybfe5qlt7SoYSOhDGffQUWiUe3o8yqw3G2x0kk8SPfVv7rl0QcB8odQqWoI1eUzCuZxCPDTSXe9ixX5O9924TRVh72Yc24k4cNiq6R8MRZ%2BTWkkyAHL83Gua77V%2B2RAnTLsYpww2SS3F3uFtvKchheJFYvobITDIefBtk%2FBuFzeynJn5tecZonRbjM8zbZFZkFxM19b5heLVf%2FnPdv7h85WZLyFOHUbmI6Wr2h13BbaOjZtG10T%2BVT2f3SgLNjEl6L7Ejo6m8KCKZfUk55tMBmDV9YvY5lgXBG3mEYrcjV2RKqjvyZPaJnquHSMFtz3owsCgpO%2BAO1mcbMDSoPiAz0vHhKlCt0N2m%2Bl0QeRnJDeL9lg0aRBEEFBZckc9BbzMAMIv3y74GOqUBHqYPXjCtZjKHXepWXAoMEq1kXMiMlEJdFoNtiwnK8TX14FuJHqpRzciYJHsqPAoK9WKrb7X3iNroN%2BPkSQRoLNmrVUOHIt%2BXqzAsSyXFYFWy5yXnUm7RB0QKtShL7HqmaR%2FxcbQd5eQ1wr2%2B7zKPWd%2FwrYJQe%2FtgJjkie279crB1hBtSqpqJs8Z3eKUwC5E0SSoSUYpHAsdlJutFRboj32i4cCfl&X-Amz-Signature=2ae3fcf2b401c8e71660a95157101b16131f5e1878b40e35d012c34a2aef4012&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
