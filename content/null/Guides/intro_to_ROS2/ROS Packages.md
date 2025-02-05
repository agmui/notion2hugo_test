---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Packages.md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=93016bc8c10a7605a52577aa7edd233f2fa767a6cf527409eda53ddc7c7ca393&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=790e22a4a47e0185254cfb986b2f6ec61b95e6d7c25f80621232a69fbbeeddb3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=8b3e24c364995a9c7442e27f2b368e4d33f52f7358c3f4f06509dff5a16e527d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=32bae2134fd060d5364be9989e2fd541641e55e0a6a6118611e94d8c93e00027&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=1db2f853f1b004e34d7bcec241c869946da3608e18d5bfc4a6e94fd0847124e6&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=139520393a63f41e47183211518b854db5126a390114449d54d3f11a7d446dff&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBOAMXS%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T050815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDQIRgKZZXG8IDu4bdbCrPno6M2B6sZ6hYZUhG6vbfcqgIgfxcUVL252lU0kg0cqRIZK4%2B8YkBdJJzUN2VLODZ3IbYq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDHrBeBvvNUbPo5XG0yrcAwn9zCvcN5%2F%2F4BsaIU%2FU9t8WnIO6MsOwwqmsAigYn7G%2BE3s7vPMQhrh92KAZvqw4RPm%2FXtUuv8APAEh4GQaBDnbXCD3JXOrbQQS92Lv6Qygf%2FgZCdBSh9fIQgp90SMSp95awqroZ3juhDNhDXUiv3RQv1CqiykP%2BV9vdvwI1zwkoETueFwytsTZKsjTQbJjPWgvQEp24%2FWez4Htte%2F4WoYOgLFBqa8lmeJByMZs6d9Ua9OEbLvjoea%2F0%2FZQZ1bQnMMx0W9zifKnMD6EoFizfn0tQ5ByZpwSmqgjTm0%2B15Cuc5RtWyfDySzTX7c9xMh5R044FVMjP%2BrUTMc6pUeKyyCw7CaVrQUGbUVTW6XqpgVfine3STh9MwOnHI18X3HRIEcaarSP84PZ3QbRRrxf4LawvOtyiVoSWoTqJ8%2FO6SBDXuc25V22RxatHeytSyDbIu3zocDR46hW6dTEspf3ZhReNk3X0PI23CvwTqQ69UK9HuoySqROHeu%2FQLtYjeQi4kGY4KCJzGIOt327KyF81pN92Yp1OvCXpbWaFjF0L5DO5GwfAHFzUJJG6xXG%2BNs%2BGQPjoSOsNvqr8TpXOzu%2B3asIsLaczVVS7dZlzkP60EEmk9qN3cNopODDcD%2B2RMLDfi70GOqUBhomG%2FEP4pXodYRldYZpqXTf9GWb4YfJmPs5uXDeSPXyG44PNQM76xY%2BH1Rltpq5y2k46qUcCXA6Qb1CeVEAhxcL1bJ2LG32ksrObYTNFkADBzBRlVSJhlOCdrFGr99cxYeHWd4g47htyoF%2BN8yI%2F2%2BZsg2LewF0JxP5iA4%2Bgs7VK8RwfIvvjC4%2BCmlwNjYMdi1PJ6otyvchmoun8gAunB9Dbxnw%2B&X-Amz-Signature=2406820c9b8c3bcd6303cbfb5f5d615b5a445f396e2be394ee2e8855d4a213a5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
