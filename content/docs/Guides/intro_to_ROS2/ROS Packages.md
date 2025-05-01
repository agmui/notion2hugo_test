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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=9d071cbdadb7d8b735c9ccf5d08a1cfec5867be2f10feda6afb337102e93a97a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=cb445a0f4b3e84cbabbb6d376de78377aa46dfc026ee9acc281b8b2d6f10700c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=af2eb00e1a2bf8dadc9664ac160d81bb28e26add945ae8a6277f425c21cf84a8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=e41f62837649b9e8cef0d34f00beac694adc9a5082f2fc1d761b12b4d5628edd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=5f99fa2eb13ccc8d8d4546c3d7aa88d82c18db562ba7443c9a5d3539d40dd810&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=c68879a4bce06ceaea5a7239b2813d9fb0cc9c7a8fe36d72d77ea4bb362df084&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTJMQKXA%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHvl0kLYpRDBUNJ65zjFZw%2FJmM6p0QB%2FW80fEpFEf511AiAvnmfiKohwaWxAL0sKyDlW%2B%2BIor0YfC3qyih1GY1feMiqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM09dBCkGs3jGjZb6nKtwDTgrDph11Y6PFSNJGsud%2FrkhznDiRc9PoJE6zvVVxYB0vcyssl8fU1zUaY1mo4YAfqCq3MakMgZwysASRiAXP0QWXBisfzHW7b9ZBmBZBF7f6BauGn%2Bkxc5S7yWui92cugK3xU5ar5YSGv2hz7NXpc%2FvxWynCzsgFZ%2BPCj2IE2SwwEZ%2B%2F8R5%2BxkH4mOG7K%2BMGJ38RM8K%2FPejrZhcQWs%2BVphJiJyTjL1cAzHRpgGHyszjW%2B62hmccEHPhYFcyiVXBcZHe%2BoeRIRt5gi4%2Fr1%2ByMS8%2BLsnxzEPObBGMl3FTUA18B5Vh09gXXs1psY9Mp882Wo53PJKpxRnz3peoZRHBHgo90vGhv1Rfu4WUXgOtP9u7jf6lcZ288OjX8NdpAHEVK6BpDTGF4gVWxv3cI6hfd0DPqs5cGnpuH4G7j5wLDcozHm8mU%2Fo46%2FUdkev64ZPfiy%2B7zN%2BoQ%2Bl47cFi1NoCQHZw04NnX3fZ6N%2BmMrgwCb9DVQL53bdr7g2gLYllWjM7bb60VAmHURp9BSQmee5i6jXysCp77P92KgRwjPW5Mvb60NciPMXJkhdGC9wdiboF%2BDi0VT2IqPmOGvqKRPdkgm7e6J7CC1RqGvbuDCcPxdTaO7kZu81xTbrTF1n4w%2B%2BnMwAY6pgHHypHpyqX3qurv2XgkE9ulCzVDzZPbAnNsJu2rpFvT7S45UuEHHuWhQ2eO8F2vuOiNRKAtvFhWPJXUxTZamXbZ7k8ZBsAu0KcNhCD7i7hG%2Br4dWHzK4La9cRGk%2BCIfntva2%2F4vaRS9%2FRnvNBgoh143UUfmJ5zhEL0l1WePvXpjOsNgbuAjVwsFVf83KE6y%2F0joYeQgoCyIL3C%2FzEwh1EwbHRTJ5KP5&X-Amz-Signature=f97c4e47dc444d83af575a21608581cf9a617bfc2ffea9a1edcc6e9ca61bdd39&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
