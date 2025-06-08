---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
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

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=2779fd952fbf1ea09d0af034c5f61dc337f7e6b3008bbb6a8fda4156c4cddea5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

the intern file structure is different for each but for this guide we will stick to creating python packages

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=1f32ffe67786992b6ccca701cb93a27c442bf6e3048c6ae6e09f0af78557130b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=35561662921f812c48f2715a4ede989ac5dc347e2054eb644d06bfd760e052d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=841d2bc6976d75cf467a43eeecd9a9965648bb6e674eda7429faff3b55752cce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=9b5b86e4e641715623eb5e67d85d7de14df4a658d03b06c70660e975328fb18c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=125a8afbed2b380341dc9d0414331914079e8504f5e311cc1868a819cc2bc906&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SPKBFLW%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T131822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQJlfhWCQ43Up%2FnzMxSOUpIs1YjIUbv2g1timxyPSQVQIgAlvCa9FT6QGQZwFJtsB9xiVJmw9mAZ4sUXHwS%2FuwLnoqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA%2BREykYALoOrMi6pSrcA7PmzF%2BPFBO7i%2F9YuwLtl%2BaACzXlCAxqrvMymMHXz9V8LfaC5ZRnPAEEiGkee3q3ZyIH0mXigU3rBDhNxfxF39%2B%2BPf%2Fzl6hyO1y7CjKQNfJM5fqp7BgGf%2BlnZBU493dQm4YNRexDEGDdoMFxKKVrkFk06Pu9gcFRwQ1H23WkxrXyaOOH9ZMqkfBn2IZLzw%2BcIMAMwBFeHZv%2BRUUqkikzQjG%2FBIdxU15%2FwBzsfpOoNvMrkllY3PRE900qcAjEh%2BMPEmlLUNwqUl2EBKqZjXl7jVXo2Bz1Rm0ll7DFPwQym2PpgPGNMoMnjR6YPOIECfc7QGp1ZPBrp5cfEeaWE9CZpXdcsn0ZQu%2BwEiFOfpd8gS3bMjfVPPH65j%2FRTsdcOYgJ2hx5I52FsPBaKeEEK7qC6XHp259WAJCMmBX3vl%2BAhocAL7ipzWPeHyIu3WfHQi6pZw%2FbjafR1r7xIPjiW6uIyjZKHxqkQKG%2Br83np69%2FO3%2Ft%2FbcML1jE51pu2KtgX6k5QOuBnVQ1C4FOCRDLGL%2BY1yM1Lo9Ussqhtdj6G0u4EE7ihZ0s%2BE3maAsP7%2FAEo%2F8Vc%2Bb1gBT%2FuYzpUPKWO3u5KmQgckX0TJoNJDYcjQpTjdW1KVj6m7NvmaHXilWTMKmmlcIGOqUBt%2BC2ACsIpyCMIpSZY5NmwfkUJV3QHkecAhGo0dfd%2BODZuatKpbVbwnURmhwtkoss7zCCQsdLU7eUn2y%2Bh7NTP81EWXF1zOtoFkPVtXPbbBeeXgBAk6TWWJ63nVvW7yFdS7SQtu8dcRjwZiuIkAbNxRqUY175ya%2Boc%2FuEQ9aPnR%2BHw%2BwzheYKeKGDEKx4H5FwApV%2BD18S6DYjaQLaye%2BIjlDMUrEY&X-Amz-Signature=e5925537bec017ea1b8c23bea2cb801f3efd3588fc5a47abb8e911d32a6c274a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
