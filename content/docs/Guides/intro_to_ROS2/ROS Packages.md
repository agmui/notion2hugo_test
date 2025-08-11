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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=cd18ff076febe7ae899ffc3564a381b7d05877aedffa4df8932a57126b9e6c05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=1257e25c0a062dfdf9ca5c7c9d7ac7d143b10e3bed45dfdce1312b0b1d5255ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=7e4e84aaaa3aabfef84c3d1c2d49ccaab70a5af058f80c9ccb440538f3ce1b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=32b3bbe0550c8eebf8acc6b3dcaf614233ceb0b11f720dc660bc55227642476f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=27b563d7b97ad2e8195d89c32730013e4ec6fac692a084fd515e42a303c9e874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=c9db50b62f126a3404afdbade8fe50a084883e3962ef6d2bbc0c76744929e931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637N67CPI%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T071600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqXlPEfQXdRH9LYvJ%2BpPM2PKkxfI65VwlqEs%2FOIoe9AAiEA1CuWoDzyieL%2F1bSKUzcwGGH0JA90%2BxwcsPVI6Vrc10sqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB9Y7zak7qrsYO1fBSrcA9yi3q4bUSliJ2uZ9ZB4It7B3BB7%2F4DgzFctvoJVdD9vbSgTV4YLL1gAGZuTdyhkrmkMmTvtv09u5gonbrcQthrWVwcsmmr%2Fy9m5wJP4BcpRNGC70x5RPyMa%2F%2FkVsfQ8SJ5HXGcqSmxZxDoZXkbBKrinsC2Lw8XiF28ezHtnt9vEdAuAUCaRLdBchp4G6I0%2BmZwUBMglJ2zCHuGsrHR0b8wFYTLDaTi117PLPpDaDeHHx12vaHAs%2BbkY1mhAMCJnuE1J8foCkk0jjcCohjhcffz20z0xXAmcIgGDuhVd6i6iZo0gokJKKKHdfb7qq%2FdAzibg1hc5xo%2FtnVTFwyI4tnq1nxfMgQfFTPFqtfS1u4pbEVIgr7kulRbCHokG3FZYq9%2FtNeLspi8laIjvrWxKFporLIlbRF7%2FKMWmdv3WE8BtK0na%2BKvTXpib1CuCo0X%2BKqgMH2UwKIpiuJvXi8RpqanVvoh6NEZfhlYNreRTSfDYVoZKEfswOE4MQ5IC%2Fr9%2BuMUtaa3qa%2BUzksTn0qXKODz9vltSeJZq5kRdHb5utXRv50E%2B8lxXqSoDmctABNFDm6Mafw%2BOUs79Y11iM2WH6zz4UJcbt4htINe4MUIxZum6d7m1IqZe6HGFyVStMLmr5sQGOqUBkv4dk%2BdJIF801gopY9LYGsNwXm2m8ExKDrrhshN1g1R%2FLKTKLf%2B2PLnSuutLk0kFJQIn%2BKF7HWx0PXVbQ3hzj%2FCNx8dTGqz9y1KiIS1mu9xvQ9XfkHpvShb%2BGM2l4YvCMhG5PjNdOzPiNAb3SS1Al9zn9OuRsmFo%2F%2F07uecAi5hqXoX%2FfjQT8lcesPwwQvwx5eSTBc9MkX6PZhnSEi1RG4Vwn%2B44&X-Amz-Signature=42d0866ed4cbcee8ba55adbfdf6c27597e02e1f1705ffece2f518d943ce981bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
