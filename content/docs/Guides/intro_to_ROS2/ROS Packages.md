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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=7c08f2ca695917e259c9cecf378f571713c29b5e5b2e894270625ac9b22e8d71&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=907f6220c09e1f986a99ee85102be3f759cc2d5bca675fc9c3675e661274eac3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=49ab8975f7687b14680d18c6ec6806fe8bfd92e4b8b9ccee93c4060b6b607c01&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=3328b3024e5b9e29dcc1c165958bdd7932c5fedb35dae6fd0ae3a4aba8ff6407&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=d00aa2935041669392fcc44f7c89eae99c203bce143a978968bf8cbacb8a6e46&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=75f1400e0f1e76a4ab36d17eb57984f9ebec3c2ee11898b97451623e9f32cc78&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK3T57TY%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCICM8GTruhc%2FHUpXXdWwLBBMbNiZW01LSR7qPSSavARYHAiEAnJIakuyf%2BCYulfYWcXEUaQ%2BmrgbMlAszUu9TmzdP%2FCIqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO3%2BvVSqIjVQeJ6%2FNircAyMzA2okc7o0VSMni%2BHBDD5%2B4D9flisLyhBbtDhB6mouOeCNNqZZCUc1ovLqpzYXHRU1zHxhAs%2F19ghA4Ax60v51dMNLmgWAuRYzPVtC%2FsY620Z0we0F5iDPQbyaRtnCik2OYPMOCp3rZCKNzIDiJtBbwHysLqTL6sE2Gufo1x6FVpZpE3zmm88Eyiey82ZYPHKaXwCKQTukX5CGhZF8MFF03weAh%2BxhTGOU1c2PElD%2B7dAI62hdOXTUdUbW62BVNvlJLEGHhMUMV%2BMcJ1fMjF7dNPCer%2BPgKs%2BJkEXPO7vCF2lYtMM6JLq%2FCbfgqVAApXX%2BLOTyzH%2B2G5a%2F8zdNUoPLpkk1b0GTa1akEDne9Qu4PmzzdkAQdhgaWRfTo3rhJRU7fWLQFFkYM3noXSAWOoOf6SrigyIfjoilLdA6SOKX7RyVKQFTfNWz%2F0S%2BMnL33aXGflnL7liIdPRiubU86%2BovXfY1moZxj4E6cNrEzhWgkEL7vqh2KAQ62XUSkdvK4AzJ37XdAN2SmjIOeheIWuLe7GcU0%2FURUpEZidGf3EdPzXLD3bM8NP0VukATFJUI7xnKYTRl%2BiXbNCSAYt1TnRy7qiDU30vPO7Gqs1oK%2BM%2Fa0anUtCfBx%2FsFGxdGMNbHk8AGOqUBKbuf5HnTPgRclRBXvDxcvqrJGV0pMEZifMtl4Aqp2%2BLmmbOa%2BG1ftyAp6WvycBItnbm8xVzvoLbO2cOTUdO%2BLsSpXV6N3OZD4%2BwyNMwgW0AA9qOr8bqyFCx7YpV1mYg3csUZISvrA9bOy9laLMHKd0T0EWeKBxQvB7aYqs%2FK354XdgNNb6HfHmhkGID3TrLMbjm1ZLl93lhZ4K5A6ShHHPnjteGc&X-Amz-Signature=75981a6ee6d5340bc94339192a83011ce1b5a92a91300f66ee359b197a379a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
