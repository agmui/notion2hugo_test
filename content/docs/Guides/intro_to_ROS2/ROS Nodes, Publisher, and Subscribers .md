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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=20e071e10029631bd5b0553ee2b0c16fc3c097777d1ad86123184265d59c3255&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=99ee7a6d978089fb3249b56176a4caeaf2c00bd431bced44ddafe19d590dd5db&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=68844413b46b87db00f845f83d2604745a5fc49ec33c7a69dc14d75cf51593c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=e30228485d27a0eb2da91c46bb063d0a1817153448f44d77fa6175ef06ffef75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=95c5ae27836ca92a2eb2903bbfd55bab6e99eec1c0a4672e4fabb4917fd8eed3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=4267ff9829104fc20cf600e6b29673791f5ce7ce69c262f6098022c58cd8526b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=536457073c033b814357bc72f6655803df7a69a0945b21833efbfc516e91883d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVMDOAS2%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIH3GmHas%2B5b7nhp1M5eAEsJCr8vnHbEI1W%2FBeucSqXLGAiEAjp4wocOqNLby26Cz2z32TsWKyDNPjnVri9UN3O8Wypoq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDIXyLuF4dkj48cjc7ircA6TjfTanopuY2GSvGXGEeAeec9S2xH9NiZ5aFIN4n4do1gOn%2F41yrNedpG1zkyLoO45VSzgFWtpSE54K3NOzw7BLsL5p6PiiC9bvqF0J%2B4vFMz84dHrUxhqAHjMeJYN3a%2B%2FhlNCOlOUUcNumEpgII1vgpa0Efrx%2Fl9796olkminm3UHR3md5kq9eZ9%2BuOfz5nxCOvejg9RDebJh3ieor%2BRLuqbyB6gJ7p07ea5V40T8aCiDUdhXZjYc99qXSirVC%2FeJzuwv51oLjpOIrnYDx1JGbh5lsU1u7iDq62ag27oKmPveA81aILwJJQ2ZTHvYsQg8hKqhk9EVmrxRQev%2FdDnM6%2FCmjaOkuFKaCNrMT5b8ydueiQidaa%2FZvji90NKXbv8GsRKlea8Puv4QUs3oWHJBeEGDqgM0y14oc9mvEd2OOt%2Fj5Q91DxKm2DSV%2F4yBMq9ZcLte5cOqb5hC4Fn%2F5MW3siotPrgt1she3h1fcXpaUfwfPw%2FKyXfsFv%2BBatt9aQCaisUAy%2FGj9sxteR%2BFdYRHM%2FroXO2c1YIIquKNxcox1mp%2Bk5v7LGiucA3lgIi%2BRuGzLIDXYQnmDSIpbizZdF49znykxbeHWxySJvrVMHsMrNAm%2Ft8nCoaZA9%2BcBMLuP9b0GOqUBVfns98K91e5Z0bQdDUhjRYmnhHbdFNkXa12%2FW9YUxEwrHbW7YbfIa9MpN5iv0kMNF%2F%2FPQDkw39mXX%2FD%2F60CLqa3gUzfI6O4chqnjVQVWc7qBR2ev0XIr9qwQ8m7r1uIWJRJX2n8nujHfH0RloqShFTSYJ9npdxGaLHTrs1NZRj%2FSsclCFmbQgCFt%2Fsn0RJR0Zw7e%2FS1S3u9AmLIov03v7m4WaGcx&X-Amz-Signature=fc6d7930347998782cf63ec907446641d47777f219eb5489bf3856208c34ce0a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
