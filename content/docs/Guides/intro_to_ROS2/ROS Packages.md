---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>
      <summary>What are ROS Packages?</summary>
      ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=1fa4520775d3e0afb9752976be034789f6c392a0320dbcb3a23bf5eb9b4cf49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>
      <summary>package types</summary>
      packages can be either `C++` or python.
  </details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=5f007edbbf2c95a00bb0ef9d68e401bf5a626704523433f6f5edd71aa8d396af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=6905cfba1c79b8e554146842fe9c224e0c5f3682d94f625e26bb541355c6b944&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=2a2c11c7e780132137920782f6dccc6f28499700cf9029447b9203b5aeb20f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=5630812ddc138e9a470d41ee9ab8c7f9b61ea4cea5de3ad02a4cd5b8ed10206a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=c63b1cf2af69f091cc8c3559dabf4d51871f569d115c2f31514cf7742df1d20e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX7QRIME%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCtOgEo0jAJT7xvOj%2BRTuBzsrU%2BQy4Iz1%2FmtSBhCAssGAIgdcDkvKshc3R1VoTR6O0nk%2BkriC%2FPjTjWXg3k8khEJlUq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDAviFljoFDWiQb0hSSrcAzih2%2BJTo2tDguk3bHvmAvO5I6UpBCrTc%2F%2FSkBvsfPFJn53UsvM4dJRp5QNGRliuZ6wd1%2FGZFHIa6vIxsuFfLEX%2BKVnWXiCgSGTm3wKxmCgsndS8pCfR8nT5MBDUiRb4BuFcNvM8QO8J00LtTQMBX0HcM5zczkKKUEhxuWWX5qSWkW9vxnavgGtYurTH8sxnN%2FXgc9xKcnQwGsjHmkYJsfLOT%2B7nVfBe1ig6gk9W%2BnAgAJzAWhS8WuWqxUjhnAl7vhby0Pa0gE6HefxV0R0spUNjZuSIh6Ce40Nq7UruUBWC%2BeoRUbg26lnzx5xvWNsJmjUL5tYAyEPftpL%2FViAijjDvDnDyb3gr8zeknWAIegg4Sfo2g%2BfQi1OgN0MWLjuWkaHPh8KrRcjSTGWCZJ3pDR412AENlNnge7YW592JEsepcmUpjLoLFHvpDhHVpI89EC57BVBiQjnip83XIUqRkkJ9b6gsKH46HjuzE3hQeVu39sCVgIu4fOZ3Z504BNE7Hr0nogsPuts0tcKtsVS%2BgK3AhVOUH5oAc1y2CBGKpD8lLtcAbGugMO3AooWaa1sLpc8jshG72XQhi9lLqRJ1avZvv3JE0uPNLg1wv5a0zUcTKw9wxOFbRLHIvQJDMNfj%2F8QGOqUByr43AHxTJrh9Gitqesv6p%2FforCq4j7%2FdWfGEmPUaZ2XcQ%2FToSaxgNcsK5G2B7IRDln42gtKo0FEoOcpTTaiKYYxEVkLFZJz7wtrzMpDM3KXre9Ew%2BhpO8ribP%2BLOf2MgmiZOMz%2FxU4SCdZKGPPQaZL%2Frc1aSy4cM5BQTk%2BQ1F0iIt%2FT4uSCqPLZsibOIjqoDLeJGdGBPvN8EIW6vQAKR65cCyzdO&X-Amz-Signature=355b196cd53bd46cc7c319ce5cd2d3dfa18807dff50a33fcc71775ab07711252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
