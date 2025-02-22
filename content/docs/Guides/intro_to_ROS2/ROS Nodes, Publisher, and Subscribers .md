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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=6572d144949fc0aabf19d6af11cc932ff70163e3a15ddd529a4d893c92c9648b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=ba779e22201bf83a4f61c2b4cd80f7e0a31e165534360a03f02793453e82303d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=35d5b777319ec33a8ee77d30f0037f8f88df51f9ecc34d8ba8d5da25e853bf40&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=e8b7ba1d24c1f50c190449e0eb5dbdf0884bf96a234843f29655c6e14903fa15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=0004aeb673cae4aa32e047d58da91996036d6acfde9ba7318c4af7f8ecd5e666&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=bcfb0fdfe81da4c68176b87849cddf47f4a0d9a1a877bf636314dfb4f7bbce34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=69504643a2923e6196acad47e134f2fc97410edc03db6d7f0fece42e9190a5d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JYJ5HB%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T110128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCq7MZHr7Lk6ETyFmdWMrDjbjvG7h5D3JB%2BSPwFjwQPuQIgXqPKL0%2BnSHpzZdM2EYeCuTNxQBOhinkClBsfMw7lcZcqiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd4et4UjzeLrbSC1SrcA30LznPt13CEf1OfTO%2FEBirHirYm5RWJqxPK6tJTbellUSDAeSiWRlmTXluVMmnC7uyf5YU7kPj9CI1BvZXPHE3lfnnA0LFKUeX75pAmCc2WuQdVYmSY73MykTt5xJz9S8z%2FG3tDF%2B83hH1AquDTWJd7F1HkBH0Rbfeuae4u5a7cs0o57nOWapkZoMIc2Tth9cgTBZUDgYG4hA5GbyIcio%2BhBO%2BoRZ6OdXmxpu%2BfbGwg5lVsdNhWlMsNw%2FJaTUC5Lp70nd%2F0tu10AqvE0TwU3mISfkObLbQyw3RbHPiz19J3z%2BzLoZI0yw4wlW2yyAJ%2FUc8AGILt1%2FlwCs0J5hQrsb5nFM3KHUIKZKrV8pPXV03gFL%2BUh%2B5NHDcvTQKcpc6EU55nTQya6uGcpb06LMFIFJIjC6oPTVByIoyAcmTkkQGgZPm0wD80c9F086BdFI7gaxfN14h2fAFCUORcsEhZHPFrCfaRoUILGKDiT1G0ryM5dgvS4VQOtW2m9hyoudRIcGMOBoR%2F0xj2KcQnLD6eyGoN3ClCEWvqTSpGqgIncjd6x%2FWTe7XG0E4YoyKeg2GAMFKRJ2qIT0LkjGV5m4Synogq1LG5UF6oy0zRH0gMWqdUUJp67kwjys%2FYsalzMJvH5b0GOqUBREIbVX4yfdvWdGDRzj5vsFO1PZNyUkHOrxDvuaHJDv0onDwCvScWS1si%2FNuP%2FbxipAxAsTscC7Or6T5qff9gQ5%2B9NYN81N5%2BJoVZfflh%2BXGWEuL4sw8QW1A7u2qywYv8FlT1eQ%2BQ5ZMyhaFDeSChqLDj6vR%2F9b9WpwzMYlqIHqwoZ17wxHzsa62pIA%2BFfnVgnlQtQpDPVRCT1Cl4D4oBILioSgSb&X-Amz-Signature=479f40fd72f19f8a7d480a75109766f3baafed192541e69c1ea8f05125ba2316&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
