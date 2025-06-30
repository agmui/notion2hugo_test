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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=f3359e45f15e20d33d25321e4871b5a4f07f5b8c57a95f2026b788e5f966e2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=b08bc34a61b3b523ef6786f526204164c5ab0efb458bb0f936836adf071aab92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=8aeb89b07e2a9d4a8a1cf3b8e0b140c5376bfe7350009ce209ad19fdaa2a07c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=780fc493e8eb8df2b394811bddf508b6716912f40ef95cbb5c64d22b7240324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=1838d785b07b3e30fe92ac3ced8be0f56980fc3bb48dc7a5545c3441e3ddc0f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=104ebb97a48b4808bbae61d8ef2803e645d487483ad332dc4dcc9358ce45d06c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HDHLHUW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T081346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2Bg6ZFtIOx8bBIbZxQHmX4mhNJDdzEhHyoz8ki9udnJAIgckNEOjgEMjkhqXZ1PNPCI5pAwpjxrmfF5j0VPMaJ9owqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUxbZN%2BYDVhPD6ErircA90%2FgIETXEBQmDceELnD7YwYoDW%2FComjW0A1%2BQsawi8KTxuCdGVLnmp1P%2FbOh2qASma9p6vtJ6g52Soh0fW7NE7tFxcqBuKJ3PH6AT23v3jo8cO8RXk5CF9gyHW3584gS3j6xZwf%2BRDlK7nrYawu3aai4iZMHnwBO1bzN0vkENACOVhcnmiaz%2FTdpL6l7XxishqJrocghK3tWO58s50EJsv7%2FZtlhy2jgULtDEZr1Qy7%2FM2KMh7ZgetJ%2FeWppuWof38s%2FlzWpfqjpUTTwXrfKYnl9khidFLnouI8CjwdQBkd%2FXY5he7sf2%2BDnQajCf2CNuibptR%2F9aHULX8sBzxdIVI8W9OOMc8y7QnZkfJgvZR6EcuAIpgrXempVhJQHqv6BaPoas5%2ByJHbiiV%2BDzaXfim7QW8CLfKbziSGd%2B3c4eDXEfPma%2F5nnLrus7Yj9IbZCl3T34MqoRsyVtVpemFbbP4az5WC2U7xKRVLzCzWA3q7NuCnkB%2BREUZ%2FloCy69MP%2FN%2BumCkNS%2BppchqrZaFjjIaAdGrT3CEQDAQ3NS7Dmld0Wu2r0x5qLNLsl%2FCtMxKBzip%2BioGZ42C1hlvP5ui%2FNh5jOCp2fSIF6Yldgk9V43bC0LfEnvak%2BtD3Tfl%2BMJPziMMGOqUBCmJp5zm4903V36pDsl6Lc1M7lHwxkjKD1Az0xhYqqUgb2io%2FTvdLIztfRjQsVp2z6Y959g%2BTiwyVReX79f2nxezeGZlrFbXMGUxAyebHAm5V9G%2BtmOnqAYkNmylLofpfJ994kwlVpUvKWn5gmZ8Fvq0fjzYBUKJTF2kCksQ1X4vsbRLCiM03pJfCQVVQLcr7HtSZrUQEwFKsB9CFagSDB1PiQD3l&X-Amz-Signature=506a99e8c24e3f7b8f4bc641778de902e00bed0672e9cad0a522e503435338bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
