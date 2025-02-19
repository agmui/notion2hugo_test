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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=68c1d12723aeff638fce2e2cf165444999d4334e129f71c8e9096d5d37ca6bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=b73b34aaa8887e4d3d61bd03a77334d47d9cdcb75f594a9d1ba0130b65c55ecb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=cb1e43e0702f04fb73a4eec0bebdcc8c3ab6267c19e28a8da5d540d148b5d2fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=89a3f6c67fc4ecc83b1c3f9afc473ec27fa88c9a53a6df5321e824785e252d55&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=c9187de591e99c8f9f624f714df38212bfbbfea639996664bf901673fbf346d6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=c1562ce91990aa3f52110450755a8dc3a97e36350cc734592f1e91d25793f17c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPPMVQA%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T090825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQCND1EHyEfjS5G5yNWylt%2FF%2BHJArVFI%2FtpO3B5zBswG5gIgANYf3T1ZZvvJCd00nsdSYpWxFh%2B3aW4ba5yGIvP9UcgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAJ%2Bwy4zv8iVjN8WyrcA8h1WWDX6rYtO4qqYYMS2Aj7mUDpdUOGwyGuNjkrRZ3T9RRURqUc15J3WuGw9L%2BqZL%2FSq0rvl0%2B0UtWHf9lKcBqwsen878fcfs97SwfTgoWgiB1rDuUirgHAkfPBfHcF8SBhbg3i82E7CLcfGp%2BiTcIBTwA3OlUdG2iiB1ioJhbjbGoNh%2B9TBwHPCkm4sM5yYzvPjY9ayns%2BuMSW77ZbIDZj8Syzgx47inCjsWdttoVF6kkoCbfJXKNaokXUCECVECAe3zmyrh2lBcYmGsSYdOsSO%2FNlNfH%2FpaCzfFMPUkVxCSzn5g6q%2FsvMVDD2tqnfVysBtivPXJ5mYaqYUPVKkRqmuIf5NoP4%2B92Ph6AAa5nT4VdGNBzrLD%2BYIxvo%2B2MNx5wzeBGMJtw5MRebycnyazR2M2Lzs5NpoiB9G4UxhSmKdIBWyuSDoTU1AZA6ZdMegCgWJRt2pAZFoF%2B3ciNz%2F5EwIhGqmJe4l5VH07UX7YCPi5L%2Fm0auirRchgPWHGVRKrGyk04oG9KSvdC%2F%2FZpNab%2BqvT2L18AE%2F678eBhYFQ8PV32rJSOuCltUXkKE3yuIIrm6Zwfb7UbOXELNDEC11KsqvmyFm6BKkkGBux6KY%2F%2Bh%2BLYQLqbW0q0XXvKFMPy71r0GOqUB48T2hQxDHJ9tu8wEeyLbINtrrMXy10Wy13LLQ%2FGcKxKSjnuj3P1jtLMmI%2BgBPcQTiYI6K%2FQfFYd6oslVYp%2FT3U%2BLfR%2Fq0FwsAUlMA7Xco0ObkY6bnr5jLWjUGddNs0ARoOUzLZoHBIc2RUUmg7XalRfUx4RWMPjQjInPaG6v0yskXs2MIyuvnLxPNOx5iO33Br1uSWiaBbk%2FxKkUcgNpSnO0410I&X-Amz-Signature=85238c700af37b33b7d82d429d1054d584ba01fd7f248a57e661f5b02c07579f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
