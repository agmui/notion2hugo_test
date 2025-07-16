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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=336a2cac69f2af63e328b209f4e6d0c9a651e782c7a7684797f0731a90e56ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=6152a62b226ae41bce48ff8cbc2a9f57c62d22d16359730477cbac6d5eac8119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=522950174ca26f4348660ceaa52618adcf82876851d1812ca5d480d89c5de3aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=0bf17e1ef950e571a92f677826e921710096256f70ab3757d5e0a3fb5c9e1f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=49439a72bcba633183e31eef799fafd72aeb0a1f67d0c75006c68da09124143f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=407bc0d3f8e20a0c7567a86aca86c087a49bc60a585c222664de684a361f4257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZO5TXHV%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T042829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJIMEYCIQCYU20%2FyD2HTYPZn3GR5gnRlALUrH2UGG3OtThMIBsqRwIhALS69foUsYPeNx44NuS%2F4rFleK%2FAomdmriQ5l6VjgQ9TKv8DCFQQABoMNjM3NDIzMTgzODA1IgwggUEh8DKt78WaeoQq3AP9ds0Se5Uv%2FojyeiPm3Pxjxebega3uJQTaK6YUIN3g1oN%2BrywefZKKtbWRGLZKHFF7sE6bkPpW7YQ9aqKPeaBY3GUhqpvf51wcDJ5XOS4SdEfXdyf4v93lM8nkVbjsYkMORZ6v7v3HobXn3l9iDY1EHn3qMfnLPo6T4xZpSmbHpRWADxEn23a%2FWUqoTGP1CbMGrf1G0CM0Wip6MVlLXiMP3K3KLpiTD1o9EUks2PFaN0Q9jHsyRBnE0DD2hASMX2wPaBJPxGj6gHNUXfdAyXfuazZ1iFvGi%2F%2BnhrhIc9ZL%2Buq3cpbeVOof%2BQwDhWWxhd8XdGwCgsuqAcemFZ9upR%2FZWihZVkE%2B9wtO1o9gw33VLEFkgQm2lKcQQ3fsknat%2Fdcq8EEX94PWunfPR%2BpzZzAWVuVKwchuMr6M9qdBGuSqrmQPPySsR1mPh%2Br2Oa7aZkI0TEHAJlaEz7v1lLWnigx5lUR7ctRlN35k5YttSeoTfHDzx%2BEsIREMTLS17uGYgUWwO3BRitA8GEzdTd3Ni0UZW0AHRuXOMnoLxYbn4J50UP952S8qdKLfqUWpZmskEOIhQZTubSZ%2FSm3kVHHDuPDmpO2R8p86thzgyBGXa5JTSWJffqmWXseKrY9q0zCJr9zDBjqkAa3IffQQtyU9t0iOYzU4E2w2VkkAYaumkMWq%2FkpVO7BjfjDjDHbKQT%2FbBjnnkjW%2FtPMOcpbaso38abMWXg0FqGhs4bD9wpI9FyKDVRh3hJ9mKg%2FrVJGjZW2SetOuyMfarRShCh8wRkSW4j2XpmjZze8LEsohX4cA0CS5TSpdgNTdF2it1pfVMWmCTsBz1zo9jLr7NaI1Tdkxxs4DoRsvCMfQklcD&X-Amz-Signature=09cf16766bffa176077af34af58951e80fc1616d5025b59f2b3e09ba28d223ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
