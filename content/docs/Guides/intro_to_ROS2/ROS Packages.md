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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=57c1e00d74313de3d6435e6dd48ecf3899ff238ae03106b47fea08c4a49ad475&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=f017be0c89bb922f4d33f9b0c0383265db553a07c01af331dd0b7459f5e32751&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=338e12656b257f8a929046002354003789412f3b5dcf67521b3ecc0a0f391d21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=a70964e5609b6fcdf87553d7d8725a69260a117f9fe06e492b62aff123ee75ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=161520cd6ca885bdacbd0cfc8411866477a9cd05a601e8d80b66a4038ac757d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=42628e9da9a59027339c7803dfabc5a01124fc7b05bc4ad04bb1175262799a07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRHLCAVK%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T061254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGAX3iOlwyfWl3CUxEwaE1IHPFB%2BCb7Le4eHuKRv%2FokAiEAqp5Qw3If2eoXDJUGxx4dt3rjw571ZuoUnT1rGTtU18AqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBcHofclpUyhSe5DsircAw1bgua81wAvYFInDk3X4%2BGqjydhcbpoRTD4rsjjj6jeSi03FxvDVwSDL1v443MA5x3Zk0bUxwpMwA%2FRQfIo3qlZ%2BbuZvb75WJqS3tNsZ3tAwRjP6UR7XM1FUz9ODGbL5DPnK9ABxtBDe4OSyRdCtjdgafuMg5N9pYPzwEtZ9sJUf0FoxQjgcVRN27tx4dGOfvSl739NJ8ahQxcq9iuBxZCgMw987EIELaiGUAsNe5SyCaQ8Yhul8Der1QTCWec3rONNj1YXaBW9hSOo74cgOGPMcnjk64wwQy6h0PfY%2Fk9vPd4wRwJOOXB0mOoxh3p4Gfxz5n2Dwzhgwo4eHatuhAtiMuXNoxkE9fngldsgoOCZr1bBIA4%2BPlhVYeTK6R0fP8ADr80lyZfWwozBxxrbqDEIen7meTJkE4C7BsdPFmJ5ri1nK8tGUndfjPtf5cd4L7%2FyCCeQhRaLgPAMcqqzbl8QvlW4dwP3FKvtRQJypC4%2FGjXj%2BSBD15Mtyj4t2JSD1rkUS7qN93V9rIJR1DNT%2FCubUbiNzYHtSZ56z3lEOE3Dzgi1VBU0U7lnqGhmPGq5gXR5kGtWoTx70WDBJb%2F%2BeG2VT26nt3QePryH3gm31aXwNfph1ThhPkq0cnFQMM%2FKtsQGOqUBhhzQh9lWnwJipRXB%2FxJ3LSXSR9KVk%2Bps1UxZfmwoIDaiWuIvwJGoFLya%2FQKeXoYn4mvCTRJDW1i%2F6eK7ICt%2BdcUs1CkBu8F5DRWG9unpTFDEnJsZdYCB4knYLcF2lBGNgXNab7BNsxw1CEu1lDLhtITD9DkoCox8goW0waCwnlVulD6vxObPUNsWVQl8WKpQMh%2B%2BfMpWFttw2q%2F0%2BPWtsL1dYBH%2B&X-Amz-Signature=ed1b50782f666f88d3ab5d878dba3f70e079a1ce33685c73e07b265de7ef0198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
