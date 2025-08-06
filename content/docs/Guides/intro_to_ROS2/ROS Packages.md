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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=1675b3889f66c202641ea46bcf3630d2daa403c463a6c5f397a741b27a40226d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=fd150468db53d8c8c26c6eb1c97ed4aaae2325c46d37f7e918b3d0018e0f4364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=d98bbe85c9d3d047ed7c4bc349f08536d73d582046f65765fbcb7537f58d538b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=2f050790fe8f1dce77ff715d8dfd38894828c3d5be6f5a49850bd0595338c506&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=cfb21cad972e8ae1b6fcb1f51ba4daa6398cd60f8caec7caf303f335b60de958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=ba80f9c72b7a26a61384df65d2cd0f112429872f53b1883d25ed993ee0de1b65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYNA5RLJ%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T110927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCFhAzH3O3OZlRpNhU0eXsGHILOfF%2BVuIj4AvxDBviAcwIgJ7KlsTWzBSr27L9YJ%2F8Ymgs0hws5b9GlZLXRW6%2FSIHEq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNdJPIYwwmfm5PsJgSrcA95lhnMN4x9aEiUfquWt%2BFAwnS53QC6PTRPwYFLnSYO2vJaBGn%2BMNaM1di5tIhq%2BjbCzq67Ew%2BtOR9evbHpa%2Bxh0Woy5HfihUY9WmgHH7%2F45IVzC0AHz95EPmWrqWlMNpp8g2p2EkN3gS3ZijJd2PRRXQjepH4fpwi%2B3oXmgIV4og4kHv%2BNIQA4oiIOuBBAncwisLOta0tQ4bd5%2BICaP2zgH8ikX7GZ5jmbQydGra4MIVGAMs8i49kTbpLSlKksyM2aVF%2FFYyuJP6z3JF1Tz9GIo5pzpdv2dLIqJZSbdHKzjxkLICXASrQSATidAU2NlAmNwsfV2lTmfczlfjrFRSkOOET4dy1IAWx%2F%2BQFQsv2jdNZylT7zjmgqyKbcEv0oo%2FCgYu7hcWMPsO%2BNixuhPwUZm7WgI6bM%2Fi%2Bde5mQYI89Xh%2F2SYLOZiQ1pLBuF53W65FmxnbgTjr%2BbL4T%2BFbXn79cqZ%2FmgELMVNEoW4FoNnUOc1AlbT9SBuOcs7zkPJ8k%2BIKdlyMqcyXjn%2BtF2gQAegP2tBrVnZocBhNbicXp6B8HzZiMo4bJ8yQ1kzmZcDmbsN493jG9yBif4YXz8%2Fb8vCWRlwEH8D7z4pQv0%2FGpjlnjQPSNqeHoVNxEC2eUIMLLQzMQGOqUBArtmKxxfF%2FKfI7aagnaVCg%2FRB2BuRSoVzmgpXZSS4GGz17DkuXiezS5VPkn0zPY2V38hLwc%2FUb5s3Q48eOon3AoyCpL5JauAK%2B6pV7uAY5W8ikx%2FRxrTevzjM%2BWyOIdpD6CHdUqkIh7dXaJQrwrZFx1D4OIu4BpV%2FuQ8z9QSbjBuW%2FU1u77nyqSaYFZaNwRLfMiYo8rsUDbs%2F3IURUDjCWl9ekzF&X-Amz-Signature=cf5037afb5acf4b4de5f1f872719b6a0227ea40fe33b68fae66177e6a02930fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
