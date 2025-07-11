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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=04418fa7ee84b49c14277075201879d230162de10f2a082d1b38b5ce307fe8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=c36c2deab95ad9fa3863d10bf0a85e22555a7ee23f54e1e2c64616552ab7b318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=ce223e9a5c875720ab477d5360544dc953b5db9c0cbf9109f12720dd026780dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=9e75d8e055aa56a87c4a23be5c33cf43f904ede44cd9e64da894892b295eea62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=2e03561454e541a5408e0653dfbdfbd9ea524c38e0e21b583be9cc8ecb95a5c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=c30abc145d2bd351978697190c495ce55f1fcee7906702ed5775e4149020582d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXW6EUYZ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7x2nw%2BOmhUjpMT8ySmkAmUMM4zOszAlIoiMb6bvkY%2FQIgZIZvKkJR9LjVR1MAvp%2BpP%2Bzt5igK%2FbojbikDsdp4%2BxkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn2qo7ldOoBnCDf1ircA6D%2BLPj4MuePHSJLvuYDNYhwp5JTxcO1%2FXwEiTozjV5KakrkTixZDF1ixmrcrHEVNytyuwI4srl34rYYDlZ%2FLT%2FijjuUifUkjIoEAHCMsdRLhv8NBsGv9XqveE%2FyYDZcc%2FK5yApSzbDMkxdIj9Dl9Gvtx5Cson8xYToB0dvd2PhYtUgNFDCbeF5kauMSw2MOqKhROibjOuLsdnJKOuoy46PZDZiywQ%2FyLngvp35LQi%2B%2B1K3K57wfMHpsg%2Fuu3VJ3hM4TVNSaraqBaiFxARpYsRvFNhUA99fKByayP1efC%2BcEBxdNGtj3sy6kdLO3ZK3YZYYw1E0yyJGwUmoVcLczS5mX0HFmDbL%2FUIvWMtSm0sPYricwn9yM%2FzqUz7BWJCEyzE9Ki%2B9QkmmxKODQom4WiNYZBsMJzgM%2FRGYYXB8yeuEyjien3zFioKd1S%2Ff01szTJ3WebstfH7F6QoI6YQvBhl8rNMXGR7vq82mk7jVx2BUr0vHl3ejfFT8w%2B8ROrkKGTtjHq5Pp6sVvlgWsgmUKkQxArjvGxrf%2FbE98T8ddmqVMbviZOw60dJuxmxt1ICELweQXw79BeaY04XYnhg47kK9hH3lTxbZ%2FLlIxvA9dbtMDh4LBtrOtrmUD1RaOMLLSwsMGOqUBd%2FSdWbGkLu23EXe0M7c8ZWbKoVQ7rXHTz9UDEeKC3HPRCRHxXrGb5brFu5GQioBGTKvhVN3P66z2ei%2BSzfpbm2bDN%2FOlhWvgIKTFkCvtlnuk4YIFMzqLNNkE76El5jrhnW1hXrJzWYFkx2l1RBaZ4LUH%2BgJWVPgjtn02YDvuWOCWMsw5a7PvlLqyR7o0x9giqPgHqTvDfPIbGMZNV93aLsqry7q8&X-Amz-Signature=296a68dbe6ced29866494386a475e8cafa308a9b09794e7459b61f902a27edb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
