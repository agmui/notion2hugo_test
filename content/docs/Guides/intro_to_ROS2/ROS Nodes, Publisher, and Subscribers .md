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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=f17f6306b382eefc4b09b56b1fcdb4b7ef79e93545921c9fc54579663a86971d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=d3416dfba45b7b89808527cd3c89438efe376ec468a8cb2dfc0adb17599a3513&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=e260a6e830dcedae0bd194b5efaceae341e3789001121efe5c3c03c8ff9fa1f7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=e0e1f483d24cd021973018b49ddf8875c9ab36f3f17e939e8d44a63e2b04ba0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=81a4a26f22b12aed898cf5b23bf81e770c7816e36dc0317c7d1d9979f640d2c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=f289a4e1b92b2a2ad7ad0e8570ae2627f9c7f92ffcc06c24177ca05da6500cd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=d0fe2127ecd46e2f99e69514c8dbc26ee5c5270623ab122b9c87305461a64dae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZPOSGX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T230803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIDyjCzmePIRvI%2F0VVQg%2BrTyxkeFXqRKKqf9W37RF3ZMwAiEA28%2FogIRl8U9riYKW%2FRANgUUiAZpFEwaXa8md6Sw8YIwq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDKkB%2FY23rz9Gy3YZISrcA6UwXkk8%2BZgypRVYB7FJXSBMbOdt8hLlS3TIUMdFzO3dSjrHs44OTeVAmbZnyE8Dj4ZSBzd5wYIQuezGydOmTkRkI%2FBefwsWyiYlyvPl7jEQ4hy%2B165QGYEIbSZuf98QEYaCu7Fb%2B4Li8795yOCXSDGIGfqBkmf%2B9Kd9LaG5xHBHw1Ok%2BxuPeMJIUIB4ZPE6NIt4St7xHT8hsT1A6JoJhXxW8iT2YSMOcNLlHKKOqWWKn5zwgXRzJZ6Ll1r3EBgmBT5UWedOwJ3joT2PyY611Dmu1Y4PxCoZtjBikYwRaVxR95T5CCeJNgEdmfL4tjoeuBiFPnmxi%2FrLKInuLIFydS03TKCkviss5KmEZNHV%2F9CO1Ky4hjQiNb%2BtyOlSaEeMn4OL7hDbW8P5ohhZ178Gs6hlISidEZLGi4jE44ioKfPEtl5aaIh37XsDay0dLhLujYfxW5DAYRRvuaJWKOfvdo30nAyFwS120AchHWgxucOtLUIjEHN%2F90049%2F841veiPZv4MnjuPCMB%2BBEAvHBOksoUL6US%2BzamDj%2F23jVRcwLaVBsFrNUiRQioP9nYFx7ixsSYK8KF0K%2BH5TwMAefocJ18JBEiW7yvm2qnViOn7JwTB3pZ0SNIIO2XBsyOMP6VyMEGOqUBctGkrDUaqizrNgqSnpPmV%2BEZRGxpdu9pzPEKIweWGwpS293pxEYMjLw8gMhuM%2BGzqcfjWq7WBB5RmV%2FjXlFkUGXUWP9Uc41VXMuFfRp1WdUikuxhTsFvlCv0MBSfL0ZdNpUdI0cb81mqpQNpP7avBHV%2FpU6YQRtnGhM%2B9L%2BGM%2BKOt1GRlTMBJkpeUHzdlCt0VyQTcj8ea8Ek5fsLJyExdOFg4p6C&X-Amz-Signature=fbb9a568c9cfdb460c7f778b599e9b6c5de96815d511bd6ddca17b28b5ff40a9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
