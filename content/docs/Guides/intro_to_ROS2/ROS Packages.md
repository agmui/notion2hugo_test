---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=58d16a0dd7ef3a9d5588785d75ccfac7e45f68335907ecea8f652c98ac60a4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=063a0fa38ee96261c1c4f44f6dd2d7ae0d6c37e8c9e486bbb8587a8c6511c90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=bff1f7f633f635d652660490a2d2cf41327ce017cb881192d018ff284edfcd20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=03e559371afda46bd82aee81101a0d43697216faa8ecaeae8b5cc4d56dc2731f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=2ea2320deca97d71c557ed939866a3f0d93897df19e0e773c3980ea949c7f960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=02fde5fba1d7fb5bc731548fe8506d110943c681eda809b8959b5f106ea43e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LJ7RQ3G%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T161018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD3VrjsVx6Q1HkzGQeIvO4HAvUwWp1HPguhq1xVFc3tugIgB5gdes0VKLQHDEe31kBgrfebNPEeWrcnmd08Hd6SLU8q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAUnSrZhk4%2B1aO0tYyrcA2pzP%2FwCm%2FWJ4tZcJg4Z8NZhiC%2FWhHuz3vrkSr%2BV57bh3WrF1CuDi6NQGurBAAqvhmaq2EknO94SxPmwy6dIgcsMrz2aqP%2FP8ai5Z4aEigJP1hxHK7cryLe1EQvts0gpNznLNWmNYOU3eyHId4RdVKeqtTgs3waPw0MVgCSjN5eSgb7BfaHyOiOH%2BkQC7rheu8%2BDkYNVihBbsW3%2FMhsSM7gcveSTtA4pN4UQ5smQHpJuqE0hQcQqMqUBfCTPUIOSKQrH6tebgjD7Uv9YQ6t%2BC6sn88KE6D2A0fX69pDVmUNGQG1Dv1C2ANg357PlqJbQyNVkbSYCsHsozBQ4ZqgCUgBe6OI3sOrgiI6Tucl13OKeLWgYuCQeju5DovckVtZZd6O66OF7X1kb6YBqRJPcng7eWkjVuIVhETF2k2%2BQ1NT57pIU1%2FVOCTG2ea8a8iyDMAaRuMD0i3hRDlfhIxHYhlxRPs1U2o3SCT1zVnvN4BFdQfyDyS6L%2BCvxovvDA5a6PltbxRd%2BkGOSH6jJMCwmtS4m9rfxJmNammEhbT5HJtrdnO7t46U9cgMoOg6OD2wx4XMpA2xg3iP5jb6a%2F8%2BsNVg5K27oBbR517c7BE9PuwRXv1GTeS6g9aDuRZu1MNnMyMQGOqUBnKjqOoa8JVj1DE5g4TL99MzDAr5kbZXMPhzjRgR1k%2BL3UO6bX6t6ZY6e4GwkyFzEge%2FZULy1yJdZMdl80kHcG3XUdsbACYC3tbd8vv7LxwpM%2BtBDzT%2FYbq0XFCmpKHcVtprKgPtlUTXxAKeWzkIJPlOzsAKFACT89WdoDHkcqhz28nupHW3Z3GTkmurCmhPATOM91S%2BA8yEPZfKH7kolr5SipK0q&X-Amz-Signature=00f2e5f139bb42fa39f9bc39057c546d603529a0652ecc045075c0fd210a5304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
