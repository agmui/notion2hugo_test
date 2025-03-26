---
sys:
  pageId: "0a2b09f8-9331-46ac-b4b6-0945a556aa5e"
  createdTime: "2024-08-21T00:29:00.000Z"
  lastEditedTime: "2024-12-03T18:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/URDF.md"
title: "URDF"
date: "2024-12-03T18:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 148
toc: false
icon: ""
---

## Setup

clone this repo into an existing workspace:
`git clone https://github.com/joshnewans/my_bot.git`

build with:

`colcon build --symlink-install`

test the launch file with:

`ros2 launch my_bot rsp.launch.py`

> Note:  
> remember to run `colcon build --symlink-install`  
> when adding any new files

## Continue onto guide:

[https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf](https://articulatedrobotics.xyz/tutorials/mobile-robot/concept-design/concept-urdf)

## Note for debugging:

If in rviz you see there is an error in your `RobotModel` where you don’t see the wheels.

This is because the wheels are joints that need an input. 

We have to call `joint_state_publisher` or `joint_state_publisher_gui` to give the wheels a value.

### broken:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRXCCH5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1plwCkxYAPzQkLvucxDk7Ybp9F9omOug2dBm0EEd2sAiAsGKGNP0g7Rw1ouPSzrETQniYCVplaaX%2BtRag38N83Yyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMWSTbc6H8%2B7fNbPAhKtwDi%2BOvJleL%2FWx1CJkWYgZGGn7p5lebmBGeraR%2FEfJ4bJafqNHXW28OXpvQmNRejcmotA%2FiN5lyIB44IkEApNct8zWdVnQwzBTt7iLe0QIwvrYSMXrOnd%2Bd98MaeqSLiAhCd6xeFy140iw%2Fe2OaBMp03HZKiZLVtXjNCgd3gKUhicH2flw5fQuSXUai5iIZewprJvW%2BPT8GHKLAdd%2Ftq5le3iVupEa2eU2Ba%2F2Jj%2FwDEfw%2FxDIkj8LbnJDajCxaHOKB10dt18U7jkDhZZxqG%2BvqLJQm7g4gJ1nONcPHrqXB8GvyLg1p%2FAnkK4DSrflhBsvevbVGNreJEeJMfqpdqCtoFc1YrZw0Ajxr%2FzrMUC4QC0qpU245PSeXwnsgdKvXmp%2BACHQNFtKwBU%2Bt7IpG3uOVu9m2hC%2BtVQ9uJYt8rdXWG46zyNo%2B3ddEjA8QrgUdYGtzT5juGYE2VqFXA683RX3Qo9qN2pQZsCsHjG8KRKa7k7kq9%2BRTELXLkWjQidNs4LmIOpf5uIJa3MHgVwL%2FPc1pAMfX%2BSH7MUkz7cB%2BLXZozLKqP%2BSYTCo77zJy%2B3VgyFrIcyRVReGSz7tnJqItnhaHTx6%2BRBvbNNvi0yy2l%2FcN6SGVNgrJxS9crbztgyowr7SRvwY6pgHKnbf%2F8UMuYq9uQrndg13oDYvwzC2DAOU943xRK8S%2BnUcx66ATMruxZbs8Tv0u7y1VdZ33AQYz%2FU02dWy87e1CLpvh1ubI%2F%2BRzv1utgKenJ7NgfMWPvCuKjAyNqAPZzvlffhNRO7EKY0jk%2BWwDMymm1h0sh3VpFHu2e7XTIWlunYlFbIiY13GBjG6Fk8uID7YclJKcEtxp9KMVI6SniyPHG3hEt2wq&X-Amz-Signature=fe19d875035593ab841ec9a4aa394d8b537549968d171e6ece1815ce680a7d8d&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JRXCCH5%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T200925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1plwCkxYAPzQkLvucxDk7Ybp9F9omOug2dBm0EEd2sAiAsGKGNP0g7Rw1ouPSzrETQniYCVplaaX%2BtRag38N83Yyr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMWSTbc6H8%2B7fNbPAhKtwDi%2BOvJleL%2FWx1CJkWYgZGGn7p5lebmBGeraR%2FEfJ4bJafqNHXW28OXpvQmNRejcmotA%2FiN5lyIB44IkEApNct8zWdVnQwzBTt7iLe0QIwvrYSMXrOnd%2Bd98MaeqSLiAhCd6xeFy140iw%2Fe2OaBMp03HZKiZLVtXjNCgd3gKUhicH2flw5fQuSXUai5iIZewprJvW%2BPT8GHKLAdd%2Ftq5le3iVupEa2eU2Ba%2F2Jj%2FwDEfw%2FxDIkj8LbnJDajCxaHOKB10dt18U7jkDhZZxqG%2BvqLJQm7g4gJ1nONcPHrqXB8GvyLg1p%2FAnkK4DSrflhBsvevbVGNreJEeJMfqpdqCtoFc1YrZw0Ajxr%2FzrMUC4QC0qpU245PSeXwnsgdKvXmp%2BACHQNFtKwBU%2Bt7IpG3uOVu9m2hC%2BtVQ9uJYt8rdXWG46zyNo%2B3ddEjA8QrgUdYGtzT5juGYE2VqFXA683RX3Qo9qN2pQZsCsHjG8KRKa7k7kq9%2BRTELXLkWjQidNs4LmIOpf5uIJa3MHgVwL%2FPc1pAMfX%2BSH7MUkz7cB%2BLXZozLKqP%2BSYTCo77zJy%2B3VgyFrIcyRVReGSz7tnJqItnhaHTx6%2BRBvbNNvi0yy2l%2FcN6SGVNgrJxS9crbztgyowr7SRvwY6pgHKnbf%2F8UMuYq9uQrndg13oDYvwzC2DAOU943xRK8S%2BnUcx66ATMruxZbs8Tv0u7y1VdZ33AQYz%2FU02dWy87e1CLpvh1ubI%2F%2BRzv1utgKenJ7NgfMWPvCuKjAyNqAPZzvlffhNRO7EKY0jk%2BWwDMymm1h0sh3VpFHu2e7XTIWlunYlFbIiY13GBjG6Fk8uID7YclJKcEtxp9KMVI6SniyPHG3hEt2wq&X-Amz-Signature=5e7c42368c19106665360a9c903ae80f8ea41c1b124e65bd07047bf33299638a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
