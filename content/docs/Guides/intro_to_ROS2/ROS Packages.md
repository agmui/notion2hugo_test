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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=8642ac2e9e102f5b650c471ca85db30bed0b640071fc189850c75b5e016b0132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=903e36957c1721605c6121dd4f164a36250411f9e47072ed3400c93ab78bf169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=c633042e8dedebbac3c26c42ea018bd11f694009928cec1c3c0f0c8773909fef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=9d92952c65ff7a191591f84728a4aafffae311f8985a165184962e6613f551c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=1bfd79d3714b0ba814b1eea34e9dcd3e2f39fb781e94132211696f390382d286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=2c3feecf538cca1333eb419c137678094807ca21d18c65543eb9668e04053184&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3MYHDJU%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T131935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQD8aEQ9vWwX6eZacMyqWOtxw63dW7b49uPzdGlEAmSBXAIgI71icosfrmN8PRiHEh%2FChj9Q8usX%2B2ZM%2FgdEDLvCjRoq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGdCmDv6zd7QAZceLircAy1AdoVAnyQp295wWH7biv78hRKCccnxqwwUCsYYWhKoashdf9ry5E8HeJJHcvwSJxVf7OdIvrQgPmET%2BBK3IxE6Rv4p0v2U0zE7tPPdx17AiWwBg1TrkW2LsvZ0xS20d5Oey3iw82CFVZhIt3vMwd2Nx%2BRGsOaXy10bFUtD672HRvjc8R0PC2AlxHUGFQk5dgwCmJlDg%2FjSsMAc3AtHtbBPSyzhPjc16uF5VBpUNxxVebUgfxe8QN4IEf4L2UvjNRiYyGUatgf4ErZ1Tj1IW8NbtF%2Fw3jTnnwzqISsDB9uFHR5KmOfZYPkMiX9V4nkvRaBU7orndI13YTgkyUh%2B%2FLpf%2BXqaR1QBkKMlQ%2F6Yl2ROVaD5RU32QoxHYqqzpQTS7q6lWEk%2BIAB%2Bw9W0Ye%2BH%2FA72h3wtW4sfPvyyyaEgDTF%2BX7rOeVTsosp0uZpifRAw5JEazg1VsDykVxk1PH%2FJAwGBfoYhANm78NaTeZY5WtJbstejHAMiYGhq3FgZ5Q%2BGWizXd4qWgAEcq3Nha6xNjiea9QYuRfUNYpqXf2bIpFeZNum6HVKUpkwf33Y7hFnWyHnfUbfA7sNaUgO42Ysn61UWt8NLyU8WzvqXEk7meEdyTFsue86aFx41KyINMPH3gMUGOqUBvzeYUSjx53TVHXB8fC3HIORLMFgFhCYx%2FzRvbXSi4ArOfjoUnvuL%2BTgOre3aOW33URFNnowH5Ox4Xt6z0CcddqBQW3h8CupevlajoMp%2FXWP%2FP%2BYumlvdqFNpAzzii%2FCoDzFSH61c8PHqGfUnERNZ59%2FptrbSLrCu25tV5AJxqusN%2FHDwX7DQ5N5ouT9b73Vmh0jMeEgR87FRwyXmgG4A9i1OMtBI&X-Amz-Signature=3896f569b9a9eb2a525d0f93c8d126bd7768efa7441216301f7932c822bb36db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
