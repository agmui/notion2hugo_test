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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/96a1d089-1f17-4dbf-8563-f2aef56a4d37/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTVO6HD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlX2fljpfsDlhljlbhl314W1vdsm8yBi9WpgVTBi1F1AiEAv1sfhoul188KJhg3U0s8khnI%2By82phSlV6es7HuffNoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCAJRoOE8ZOxDyT6OCrcA%2FrpF7nuuON2QP%2Ff9H7LuGjECvl3197i5UDcwzUcTmCf%2Fw7q2WR2Xo%2Br4pRcs5vM%2FpElDBRhdjE3XuFIksNkM2mZhIuddkNDa0rOMLdMH8HhbpTy9egQY%2FoZXihvViCbcMLtf9tHxYZUmxS4Zg8choFca0TkV3sILdzs140SW9vVvtE79tghKiIP3u4jQZ4gw33xXcwH8c9mcDqO58M6uEN%2F4lc9OTmWUHgQY7wzCovhXVDF%2Bdo6oUohUS3PqOQlOino%2F9cOwQAzu%2FvjaJvK05FSElqHlVXuFqQj64Jrv72X%2FZ1B5tmIL%2FygQTwjwFIDs%2BYldBn1JmGXUcO6WVTeEY%2FXJ7hb6zkpytM%2BpEuir%2B1CqFXKG1fU5QXRt8Ia1zYXcC5hoYo3KvdY8e8hYHt53v%2F5w0tBX4MUBCghBkgUXNzjxZdJWL8ZVIGqhD7t%2BaWVsi%2FyMCfqy5xfg7Hifz9c7xM%2FEHrCPWZXgmfxM84W7E5vtKiQAy6Q4q7Gmn7tMAo%2F7d6eTF%2F34QO0gC%2BazrTJciJs8bkDmlfAMjSP6Eo9q7Sg1PLJDNya4N6ELs6ZUy6kgkEOUSysMTnUYWwZV52uEGLdmrMUyZC6mGnm2CI813XxVhSDIW4AEmdifxm9MISfosEGOqUBQzOU3X6%2F%2F6gM0oI5%2BC2uwk45WfX8B8LF%2BbSOGpz1Nwh4muJNqPEvPCB9NiVNHgrFm5hjWsubWzfOeAAOM7vrDcPO1arlQDW%2FSvlBSu5tnUmaiYmqHn2w8%2Bkg5iotAqE%2FnJ79GpZBhRMGhJS25U5sysDsxOvr%2BHTUX6o5m6eHNiYD%2BoLhfFZXqcwuG%2Fa5zzKMn98BA2yCx%2BjxkrLmUjjy5iRv62E1&X-Amz-Signature=0eb04f0f0cf2e3dcf8598bfbaea78925630d7e20b11c3fc17bc349f8c6de13e6&X-Amz-SignedHeaders=host&x-id=GetObject)

### After running `joint_state_publisher` or `joint_state_publisher_gui`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/130c99c7-1b0b-4031-9953-844fc3950ff4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVTVO6HD%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAlX2fljpfsDlhljlbhl314W1vdsm8yBi9WpgVTBi1F1AiEAv1sfhoul188KJhg3U0s8khnI%2By82phSlV6es7HuffNoq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCAJRoOE8ZOxDyT6OCrcA%2FrpF7nuuON2QP%2Ff9H7LuGjECvl3197i5UDcwzUcTmCf%2Fw7q2WR2Xo%2Br4pRcs5vM%2FpElDBRhdjE3XuFIksNkM2mZhIuddkNDa0rOMLdMH8HhbpTy9egQY%2FoZXihvViCbcMLtf9tHxYZUmxS4Zg8choFca0TkV3sILdzs140SW9vVvtE79tghKiIP3u4jQZ4gw33xXcwH8c9mcDqO58M6uEN%2F4lc9OTmWUHgQY7wzCovhXVDF%2Bdo6oUohUS3PqOQlOino%2F9cOwQAzu%2FvjaJvK05FSElqHlVXuFqQj64Jrv72X%2FZ1B5tmIL%2FygQTwjwFIDs%2BYldBn1JmGXUcO6WVTeEY%2FXJ7hb6zkpytM%2BpEuir%2B1CqFXKG1fU5QXRt8Ia1zYXcC5hoYo3KvdY8e8hYHt53v%2F5w0tBX4MUBCghBkgUXNzjxZdJWL8ZVIGqhD7t%2BaWVsi%2FyMCfqy5xfg7Hifz9c7xM%2FEHrCPWZXgmfxM84W7E5vtKiQAy6Q4q7Gmn7tMAo%2F7d6eTF%2F34QO0gC%2BazrTJciJs8bkDmlfAMjSP6Eo9q7Sg1PLJDNya4N6ELs6ZUy6kgkEOUSysMTnUYWwZV52uEGLdmrMUyZC6mGnm2CI813XxVhSDIW4AEmdifxm9MISfosEGOqUBQzOU3X6%2F%2F6gM0oI5%2BC2uwk45WfX8B8LF%2BbSOGpz1Nwh4muJNqPEvPCB9NiVNHgrFm5hjWsubWzfOeAAOM7vrDcPO1arlQDW%2FSvlBSu5tnUmaiYmqHn2w8%2Bkg5iotAqE%2FnJ79GpZBhRMGhJS25U5sysDsxOvr%2BHTUX6o5m6eHNiYD%2BoLhfFZXqcwuG%2Fa5zzKMn98BA2yCx%2BjxkrLmUjjy5iRv62E1&X-Amz-Signature=1a3fa003c20f522b583e88db048397873feb76b237edd8c095b26787d7a9ff11&X-Amz-SignedHeaders=host&x-id=GetObject)

## Da return of Exercises!!

make `joint state publisher + joint state gui + rviz` in to a launch file
