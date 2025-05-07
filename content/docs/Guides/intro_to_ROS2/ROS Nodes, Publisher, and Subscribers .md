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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=9d158cafd339fbd285c85c1e275d5a1cd8180c6354159f5ffaef52937b88070d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=c2027bd0179325f20a38d2cb97c5eca37171e067ad0e5356f867d23904e6fa7c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=1f233e41d9e5cb692973e743a66222ff56b2060148e3644a3d548aed75f1fb35&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=681f437d9d1c933f49b142e710b2277423501aadc70fbc05cf1f40b1fb6459c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=32037461ffae88c469b279ccd718c006e8d9868cffc918b72a40173b47b1faa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=8cb78a6211e1d8675f0b07fe84399694770e35a9a0fc5fa288198a24c8381f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=b28666ed584477592e4fa7e081d38a436a231e4bcdc6d2d3058f7ae445018937&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKQ24S4D%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T050925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsugue9wJHcbQjE%2FvjbLnDLknOacTYwEEe8oJtvmrLlgIgBckMrFBILQzaaeQAlhWOcZYjJkDAQFyz0Zd2uF8g0Ccq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDJ3sUWtm5zmpNu0JnSrcAzzQEea0DWuPR5SF%2F68LTZRlvZD0pnKWzxtK2%2FzAzCyBkIE%2BBb1Dz%2F%2B5G79S%2F3bJP%2BaYUy%2B6EScm7isgx4C6s8ox%2FAZO0Uf3hRSEz8QcXrIGU2N%2Bc8tVLswX2z3eiAM9%2BG1nCXbd0KXdxunDGvjx6GGV5IeR1c22rc8ILy4WfZOFvgJDQQ6AMTYgvXJaCBynyk1l75TTKTfDa6vN1P61fhVmHTDJooWk5DNtY00DUXMNLl6mMhGQhG3rMhw3oeR2U48Fwusp3CYi5boKIXudh1Zds9hstmd1mEhMkB8aro681p8i4r3Lm6Q3AkhIR8krs8ocWsHJWOXRdZrbppVm47F32WqsRBq7k2K37J%2BmPbBnC5DcDmlT%2FKuZxvMbAuRgI577fs7szNRge5j5UraEElE8jtEf5273XgsLj3dOuRNrGrMygyT1udYDOVufHRhPDrvd6t1BTilD5c3T0aEwQFqMqMNgIz7Q3OOU1bXildf9ve0tlVNExj1JCwIqxUtmnZkEbyGw6k4AVew3sQvoGUnr%2F0BIdDQxnNcE9IrlB3QsKqLG%2BVtKyFt%2FGYrEtpzehleT2Ztr3foHBr4z7UgSKqmjAfr9HVEjw1kKND%2BQ22eHw1IPip3BTFWCYqvLMJ2S68AGOqUBu2Pj5e4oNziInc3ZKKrC46rsc%2BuGcxalKisBIqwro609MNlHIRHcTTPUb1RaHTX%2Fc%2BbjYqC25eUF%2ByT4E0usk5DDPiLiJNYWtdfIBVcusIV45h2UmiX3b31t6nfHkXEXKWPE%2B9D1MN2aRWoPdfNDVZKblFB7DrQ515wq9b3gRgcCx6AaAZR8rkzWpjFnupCykTMtIG6ams84QpXoeFj66O1U3Q8X&X-Amz-Signature=429b85769afecea21879feeccdd8b5c4a3c2cabe96269d380399d1d20bbc632c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
