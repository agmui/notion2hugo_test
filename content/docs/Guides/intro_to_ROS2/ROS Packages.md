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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=1ecd990bdaeb48ff401c29cdf63b19e871bd6eee9c43b1ce9c310d4ea3ba27f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=b72e345f1534420f54465027f343c559874ce0c68fe2ef2dffa2c8229fb496a0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=e4cd6e68d38c155aee416fac44f75275d96314d8bf3a6f91064524b33a688a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=2007c748e5a15f6a2a62201ff2a866ad96d7afd29dd08fa34c66174c661ab9a8&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=cfc652e00e0a4514fde21982c0daf57e7fe56a6fb9e23909611cb5667db66939&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=1ab2cd40be92097bc4c24482a3583dcdcd7fb39c3a62b76117bbeff6662982db&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466722L7DQG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvbdlwETqHcHTixQ1%2B8lAm2N9c7Gh6UszrAVKIZC9%2BAiEAn7%2FLe6JMEDPyhL6%2FmVs4Z1qU%2B3dP%2FqT%2B8zwKsLxuBGsq%2FwMIHxAAGgw2Mzc0MjMxODM4MDUiDNaHe4P8tQcoyEQ8yCrcA6l2cS3kwItOhWea43i3P2HsBgbPcA%2FNcq2hrKZp3bV%2BZxJP7m0wUf3Fm1UQ4qpE7xIPEsYYqFdGbKdBG9VTh3jjK1OCivuuyld%2FTAUVt864LU1rQd3%2FBKgiAXzjGqVJCfEruyzGu3YI7sqmjfq4nhN20zuT4iHM4Lo9YgznGr2HHfvXakEDw1R0oduU7yN%2FsiAqHeIauxN6Mjxrp3SRlJapbby%2FsL%2BCfoA3LFZZShNSfIxIf8Gsxb44FJVlb1zea5LFvcBNyraNMXispuvgF38kOZVJCXwRnm1L3Kq7z0SAI7KCCDown1zJmpuxd6vGJ6eaORJy2XJzxyM5lzLrvOllJTAGYsi90weQtcwdVmNaqa4Me6jQ1zXR4Hc%2FMIq5%2BadV15%2FrdUmwHe8XKZPilEV%2BKMpqZPkUCxS6gsDDMyb8AdCgyODynPjvYHfj9QzowvcxRmTzRoNZeaRa%2BfgELK64vtQJui0xeq1qInb36iyhE0r%2FZ5chEyEUoQkGALzaT9GnRReqfsvXo41eLtUy9IBuWA%2F4Sc%2BVefZQd67CzGQQaTaxvmOmuLhAImZronpDbGRrU7Qx5h1zHry425fZrQl9hs7mOjluDHRjMK264Ben0KZImDLV6eOgqLnmMOLaqsAGOqUB2K29FVq3BN3na7kmjvMtoxo5NdyOu0VjUZ0HzxIs5l5PycSgPHMbUXAY06s3csRYRsd68Npnf2JBIYve4Kdex696FlaB%2B62ueOeIfeDsXWE48oYUHwgZuaJN2qW%2FkwHLSciNUo3YFxwZ5cIyJ7a4re0hHwvfRxb2ecbW4V3z6QzIpls%2BtZYv04kNK7wNFz5od%2BPMz%2Bbrj922408TgvSq8XQ0SEPu&X-Amz-Signature=758f0beacd541452e9fdf6ff17246f9a2dae0e9f1e182cbe8a74f2c99d9f0ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
