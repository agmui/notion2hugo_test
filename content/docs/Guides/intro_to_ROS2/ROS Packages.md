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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=0f87b52db930d9d3efffa0a604fd7d6d57596cafdf7c257d14ce7a99cad62b16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=2f675dcd304655b55a3c97eb11f104ed7f18aa2ff7db0b1b8b4d209ee72ff343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=c09fd8b36e129d9c58355b98701e07fa8493c6574c1de697d0c86ef0b1ebb41e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=67632d012a20f04400fb656e3c6975554b8d2917aa63551d4fb2aa212423a7c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=76741a806ea7f60b4466ba655a8fe4e602942a621c108f71e5d7af60fc219325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=78cd59e0a37b8918c685819f2df1547f50a3c2a583bdba58f77dbde88c36ee3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE3TYARS%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC6wg%2Bk%2F0DnFjflQ5iQ%2FCtM4PfaN49DgjQ1isT4Luk%2FBQIgFsX340ZL%2BpTWNRmcKVc3qELZizTnUmC2fyox7MWy53oqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN859i3ELvQSY8dtSrcA00T5QxA9ac%2FbT4eTR%2BUbYF8fgT8IMVM%2BWy5QL7D%2Fv1QdYW9rrXLQ%2F%2FLkFt68OM19bpRO%2FZhmWo%2B9pQfN58SAJwRqMN%2Fhly3etHwoUVAeIqtexAOIgc9ysDwsmtl0caOMdHw8HA9RTFmmYbxI4VgOvjfD2kGsfGZqeiPDAkcocdoDmc8v9a%2BSWRlavZz0swjJTNg9GrTnN2c%2FwZLTaSSBXh56H%2FamzffXjK6K%2FX7v7l2MlfFE%2Bb24C6XhFFXyOxK2JjKL%2Bu11VJRHewgW2eHngb0aSntEVBnu71mEIMuxvQWiaeVZcE6HRcIog9olAtquIthFyjxqcPmj1MCfHdHeG07DnUSZPI2%2FNGnUGQqUTKwOMm5c%2B8bLlZiMvR6%2F9Y8OHhIR8Jv7L8FQw3BDo%2BrvWC4ej5tWrp5gjYYYwso0QHBVyHbHUszGubgt5Pka9%2B3MJzC0A5V89t6uegz64172WKpuZy9Wdc%2B6%2FpAm2JUfRtqh8v2JOpITUBPYMhHdg6Nft4upyckY2AD6a8tQDQ%2BXmhcJvw6WH3e1B9XcBiK7ADZzZZMgf3wtv44DQxcRd3Zxrfa5eJA%2B8xtmQVBA6OVJHAZvh%2FRLZq4v6xT6d9Q2O2Grt0oOdwSzDg%2BAUg7ML%2Br5sQGOqUB1xKiPdz0hlelXyhjk%2BlypV6neu6D8C0qI7sp2v1NF4Cv91ezVcwrXgMt5UjX2UX%2BuxIBH5lw9SxfOSiUFEK6tBPgwPa94fKdQJP98p%2BZQ4vRY0biYvs%2FQxTIF%2FDKbrfnSVR6Aumtd020fjD4D1%2FzwGIJFCbu2eNce50yVVhHJ7c1WCB9kR4MeeWVM5ymej%2B3piQsQ9HD1RK9VXQSpDetRABdwwCh&X-Amz-Signature=edeb4ade025b150ef7de8ec28d1fff93b5596045ca816541cf1facb0473fe52d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
