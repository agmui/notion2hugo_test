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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=5ed03d1324288300e11576132d5c266a3f53e3dfaea05db294b678d6a2fcea79&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=5dc78df08739d9cb9dd038d59204cfced480b94d09590a3a26bdc0168a4c703e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=c0e1cfd432f7a224a7920583595dbbc0ce3e7238678708dbec666ba4e1767260&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=2f76f3a502848d163a241f5cfbb634b5564cfefce2a81a223b303a0c999cb947&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=c7dbc42b7696da5866ee8ecee1fdf655098c02ffd6bd010ceaa61ddeffced64e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=647fc27954b5eaedab0c3dc81b2f19fd7998e674a8ae975b4cd5cf15604cfa19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=ed82ed9ad6cac377936af3879dcba2b883977bb4e92d6effc55eaf814172295a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHGQVA72%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZG9FY4MBLB2%2FSnvnWD7wo%2Fs%2FMDW5zSgTT7mavqXbC4AIgZ947CiIBb7ZDzfd4IA%2FjMigfDMX7EQosbaxuIyODrDMq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDAXj4tzXN6XSNuzvgyrcA9dAFX3EFsk5yU1qi55S%2FZA2Fm%2Fk68MoT%2BIaKyc%2FCSMjXM6XTyDl06AcwrCmRzkPMrnBlimMtbAvGptRSUNr3hRBvI45gn7SmZxDJocEmtlpCWO7BN8y0i5VR5pLI5B8dr9jWW7wzFuVYMiQTl077V19%2FcHiqB6PQSeyXYyQ2L9H9u0lc78gqnflnna4UfUVchayOcAvNp7o6CNYomeguH1FIRHBNFFtkLaDrif7X%2B6Xv8%2BlNg25DRrNCFkNkdZqKELBI2AMPrSTjj6UTrNv59LggQYeL1iLLwgyyJ64EZLdpsli06kvIs4%2FFRqfOaKfa5Tb9eizy1Y7%2FTob6gE7ZwNHTQ1JeFQcgOYtsNr%2B0h%2FNTvYZOr%2FKvjk%2FhDodCJ2UV%2FdSq0VU9sEZF%2BIatKK%2BciCHcXGn27yTSKZaPTX2TjtDPrNVRsIbvJilHdQip%2BJwefvtsiF8TT2ZRLF9W69VDddqt3S2EaD5zXmggaDA7tWkw%2F2JqrlhzcoUYpT%2FtDN8PMuw9DDA0a6vDWZ04fSaI1SLJSZuLUnoYHNhR4QNEXDJomJT3Sdk6405pLBr6KTDJxAuk8GYnZ7tIRse917%2Bhq%2FkDRj2sIBK8WaPi50ShXrRVREaTrUxkn9gmD1RMJKGlL8GOqUBb60U2vhF%2B1eIZorP4dBZUJte2wbiI9zomQNWZdmw02FRSfM62GnnudF1Y%2FIUoqMmT8u%2BEVGOgW8iZKAS8%2B7SdE7FpO3lgkcKfT0O5%2B7ChUsrusidaLmzkEB430Ll%2B%2BZ%2BRKh16Bw3237d0wuMWE8uLhLdmYImaiXZetKzwZ4KFReIpvqeGMa9i6%2Bqkpqclx%2FSEBOIufzlZ3BKMoJowcBU0OyzYea8&X-Amz-Signature=a4840e7c204287fdea5cdd7d418ef725a1528f5a70ab7956e3d7d6c08d90710a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
