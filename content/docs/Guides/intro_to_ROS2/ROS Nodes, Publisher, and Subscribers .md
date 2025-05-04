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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=217a80a56e3dba37449f29c66b08849302b755c1899ce119fc8910025658e9ab&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=6323e0183548b954f0e31aa3657ad51f68fc70140c9d9bfbff56cd0d0e2152d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=c873055cda59359a4b120854d6fbd7b78fc6402d445851c38dcb4aa852990108&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=b27b811d246eabd485494467d300e7d4adc7c0a6fdcc4bfd12d14c1c00010753&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=aae42060b4213e4d4dfb74c12326c0814f290e16cae9343f7bbbaa6506e644bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=7bf8df58392c23cc3c69e8c8c71d6f872b63f8648c68946e8a9479ed45f44d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=bf428f54c02c4513b5259455fc48222db1807abdc92777e18efeef930a9b54ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNEPS2SU%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIBvZBOEB3j%2FJx%2BCJ0poryImSe0Z0u%2FD24yuKuSQ2k3PKAiEApsoVxnkuwKHwUAJ%2FA2hUl06cz8n5VzWPCdhcsUAFr2sqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCNfVJymn10ryxVkaSrcA2HJuHg8bOtAAlVzhWTTcTosMHGIxybSM3rJ3PHal0soEfjAkB506l28vJybzXiAXmCtU6LQY9OZICgQ2bMsvdG5ro4yaNl0382a6xtOh6PTKG2AXvs03pZej%2FCTKlauZLcDQDgvu%2FhLBNjwQWbKb%2BB39AMWGqeqwiXSt0ZGECqfD7hcuIdvWUXktcWYf0S8t6Y1MCTpwaEL9XMGsI62ORw2h3k0lm9vw0G4Jkw%2BeOQfc%2Figf0d4iHO3hM3FWMDeLuoYeQC21NKPjUxozRZSDe4i%2FFBnkTPz4Q3AjQsKrylgCHm2HFokBLAtda9D30L8HOYEoGfywnMVNkCSW9KhQ%2FSRa9yGI1esylOFRZdjc1KCXyB1BIiGCBKIm%2Fc9wKzvwtFEKa98HHCDkPqeecrjYFeB4YcW86PN0NMeAAZbBP6bslALwaIftC%2Bj6ZmChjc%2BDklpDLbvqwefuHNXitE90g8ntcpk%2B4ouz8OA3FY84rBuYEB4VqUg7xXHjJG7xqDbiiozHQPDmbf4zqMRzjO9jsFea%2FynLsDvPHT9fkK6uXa77fnYVwu%2Bo8ewgIpNXP6VAAJF51YHTHa%2FGM4FuYcP4hzn%2FS7kkskK00teHdrUDfAMeP7ctDW85%2F8ofP9NMMLr28AGOqUBQ640JxMYU8gbfQP0p0pT6OXmhHw9J5EeOFYBgCz1Nq9KZi5fTopXOaBczRBN7p%2F1T8Ip794j%2B4SXZM5kdHSEK68aiILVc1RvYdyewP0chPAsCRQOb57P73zR4OaPeXsGYpnAI%2BDTrkLrteU1QT1j5YRuW5HOsTyX9%2F5W7Z5TLLu6RQ4QrziM6qp%2F3qQLFR0O%2F9MVNucW%2FO9kbhsxD%2FL5TlFzxl2d&X-Amz-Signature=affecfb5018fa4b4221c88b37acbcdb9ee9a62edc9dabb23111da875a102188f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
