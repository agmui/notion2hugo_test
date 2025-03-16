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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=a12346d0a1f7c98ef66a5c037d795a4b9c098dffa9790c2c7c23554f41d25cf5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=5783a25373c583913ca9f7f3b6f5a6e35befd3cfcc570368884b82d33d6061a0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=d199fef0de3cab405fea8d86c439101ab4a5e3de7c9f93718678cf042c219d5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=910ed1bd2f59d0985dc21a391fcbde4dfe7c30d76bc7d25876e18824ea408d27&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=8c3f1e81b81f77eddf611b49493f841e38894920931a3755a30db407158daf97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=4f8dc097b19b7ef2fcba96453a823f0873b3063d9d7c980c3346f98e6ace31ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=8b979a7737e1ad751e576f8e9e71cc14fbd88122a9341187435e3a0b51765d09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GSLXIFK%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T200757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2F3JYm4KX0L3UCSIat8obyVV73jOoaO5bwTfIRBeaLpAiEAjTRIFH48dLdeqBOfWUbB9etJQns4ChMWl1QokCibxiIq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDGoRLhwNXc0DJfqZrircA3fkglM62JCYRqv3TmdBp0NEiJJn3CMa%2FLjf4ZoU8hH3Zcnlwyi1GCs%2BVS8Sh7aG3q0WDIWzxSgmv8afKPtwgPLIPRCnwwaJESn24qvij%2B4FNCkaY%2Brh%2Buj4Xr0gwQbykFPTUTMwXlRNhfNWHq%2FAxSxq6Ho7a1HnHg%2Bs%2FIr39SkWs9ZAQkqou1qJpCIqQOG14sBs%2FzFPY5WnT51jzpYjXlorpPCa5EiuBJ%2FAQI06cT4WwPsYz%2Fxc1EU6uPcHh8LMpQkLWkvwsxv7w7SFdlcC03FLK9z6MKjlqaBpnL98fG9wlo1U%2FiynJRicqwCuK1rn3XadAzAVM0FnAUO33NDGBjJSzkcb8ZFd%2FfGZCh1pgC7xK2vxZhemD2mIUNZ6rfE0FVD2aWHrJk%2FZPEY0kES4mFazpaHOzJ%2FVLo2PAE9qPT9ipNe3NOei4uw965J%2BoG3LlbgyJSQPeboIBEl5JiOzuQMm6mIX8VNThFy9oH4yvXu8QVyvU8rjE89Dk35LepA0wXKCeEJLUuiwEFziDELesQ%2FiNLcDsTHzt8Z%2FyhkN%2Fkqn8q0POO33SyvLVBJ67ohCBpw0LivBwKIr4P1%2FPdh%2BmkG1QOkyoKBMfRppO3EJ6FD6TAsVdxPhjly%2FDHfTMILc3L4GOqUBecCcvPFDlObLyxt2kkYJVfaGEttFx5guJn42o3DqfkOzErn0CtEkFTMalXZMwiuIrFElHYOjdSVG3v3zuMMzQdshMx5fCMNMu2BgoVE%2FwdKCzBlvBB71ivks6PsjoW%2FrX%2BsZA5VIYzWVOIbwYVOCqYqKl5ysPPDjgycueorMVJzDpQsP4l5tUvYcAcwBc0oeEvQAn9K00ES10EFPEN3MmOXwwEl6&X-Amz-Signature=46cc3b05f09e75bc588b234ad9bb57db4172f742d1166832fa454b4e0635fa8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
