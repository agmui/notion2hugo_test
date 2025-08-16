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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=3579a6ce369da2c1faebcad3b0ac8b7c6a8f055037f09f3cb442610ef01864fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=3cfde6987596bf33de6e3e2dbf6de4e2d09058830c50b129da7bdb1054e65cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=dfcae4a8293d0118209c378bd9ca63f3ab6d51a57395718a84c78b7be103b81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=9cfe0b900f768bdae1ece59686bf4ddd231aee145b898c88f969fd8b20060750&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=d948bbabce1c3068583d859cd20b120441c77a4f3c034328154ba9ca139ec5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=327668b1221d4394aa6dce4be49ac51fac89cdb68f9dd18fdf6255d015d6dcc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=80e879cc0fe3ab39f32e8857bb3a29cb72b817637bf7daa2c492a98d2d0c0bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THRHL4SH%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T041445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQC6%2FrLU8E5%2BAo0f88v3w174o0xKh%2BUIsD9zbAPQ9DPsoAIgStrpqrWpGRl5JhLNAUHR0SBSxVWg5fqwrhdFLFUZ4bQq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDyV6li0n5J2XhRe%2ByrcA%2B2lEo6nhTCVo8A9YkFG0LPMvDjx9IJrXpczCO7yCqWP0PQOK1f8t1Z8npDcgJn1dh2U9C2272n7hDBLriIuJsqSE8bmSMlwvY899qb%2BPHkES7zS8GEY%2BCRzEcJSX8LLYfR%2BzdlYRRvqIoXjjOXXYEc7UTMvQozdSCes%2FHDSA2tafF2tyZkrp4UagV5rikYkNfimB82hJgJg4CfaxkVypcmv7Is6pUVtKYULqgN0ZUFK8V3MSSp3YVzwkPPS%2BjqEFHj2aN0UwBUE7R20MZ05nNQ99e5Y6ozlz6rzBr7%2BvAxUzxzgWCYglm%2Fn%2Ba5fUm8E6Bak%2F%2F9yvbwQDl2wwx9HHYYnh4Jblg9mjCsJwGKzyy0elgPVmlq52Ua%2F6sVKqk1I5a4EjLrEzj1nkAvAhqZhxiJ3aEpHVfICsBIMeFGVQIfqrYaps0l5YsjKgpYkX2O1q8mDfd40kE0FyhwGepMMOpTsmaSHQtCITJ4owiCy5ihkx6uBRopd48kleSQ%2BGbAApNqh0h2e%2Bkh01XcIwHFUXyqaoA1vUQT9pSncSAsrPpMNYEStZY8w1g0H38nhfDvMnhxga98YgEC9JzHv3wDNXL2qz9Ue7AX95Hn%2FEciMr%2FJEN%2Fbp%2FCLOULx1%2Fcm7MMPj%2F8QGOqUBC%2FUaH28kw0a48rKHdGjUBIRJG0Vg3dXvqpueAUp%2F%2Fx%2BJzQAJpOF08uEQHjqRFxgURcqyrHZXZqJ%2FV3GN%2FzIZQhpZeYE4sLMxdgIATVn6U88wMS%2Fsx7gYYpLo101H5KflF16YzzXlK1hmivGrPAKsCtK72DGQV1%2B%2B4Xz0tP%2FV7pKJTVQgsJg1Sq4LzA4ap59glBiA4IAFP4nINZZQykg2%2BBAkaV1x&X-Amz-Signature=1fad426908030cd999f19e8b16b60d12c821d0681516b38b4778f48655f41674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
