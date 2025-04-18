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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=54bc57a5a0247e3b528df0fd71e68c5ed4bf994d4342670931186497f36d1b88&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=f057a1ea0ccba328eb26487032704e84b8f738bd62c4df96a4fef48253151134&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=1c4c48b48bfc0c800232626240acf32e1082922a94f34f8e94b9c162c0b91560&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=9ab3a2aeabdbd90adc4b33294fec28cad61e5eaf7b06c1a5aafc4089f2ef4ea7&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=a6607625f45fb052a833b9af7a714a10e3e00484a0643d9fbe266973b4ed51e2&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=027c118efe4202022e49ac01caba56fb89a933fd84ec4dc6585cf5e01551644c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YWUUUUK%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEXR7go7JOpgzFECXTg4z%2B53CgwbB2HVyFmsE8kUOUSuAiEA9lHXxR8CYuMpDfaEa3keGTQ27i4iBS0%2BXp6JEtdKNFwq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDEQWmJrc8TGkQw6CCircA8jRZ8nauwVC2I%2B8C%2BRPwnAhq6%2Bt2K9Y9cTedFOrO8XOwTF9Y7CY39xH57LzqrDVB4MlePi6547CEs922Leqc7RhIfz8fgyll%2FAhiGxaO4oogMWBBxwMBtxK7DC%2F0UpzbwBnSfifXzesIXf1WBUHWjB6XBPtZfrLnAOBjCht80Yq0SN4qX3uOmvU5qoK2h8%2Fw8uEXQHrs2AFza9hK64xClpHxIC%2Fvilo4gpX2ic9G5W7I%2F%2BZR78ikB773LyaoLf5FrGEz8CpipmQ2xYhq4e8c%2F5t5Vheb4DfhZ2fJll0TsewJ2hYDsBo%2Bt%2F%2BgZdlDzD%2Bv%2FZyTarUUsAKuY29lUmwRel0L6rcqHJ4uvTlKevv6kwpOXa3HGGIFUmi1T6butf6C%2BlGCghvS2whQ141%2Bw5xxbLod6QSr0AQ2TeuCVXGk38ZNSrs910GhW7lbaBxKEufUlaHNfONP4YnGmWqs23SRpdYgLfJnEhS3qrOi%2Fu0j%2BBf9DlR%2BN3Zee8ghquSIFivtUlYDeOGT3kv6nGhPlwT4w0Tm267%2BNdqT8sJarmgOoNUS4TKdcpoObHoRk2NWIAR6gc88c4a6Oe2dQnYhIFVSUNyi1MDbJ7hcW4hVKlfGolVG7UudgzvaKh5ecc3MPfJisAGOqUBvpdDLXBrozHNaLaPu%2BzZodYvnLrS7dv%2Fb8kUV4fjaNpzYyJyiqOQgkGB75QGOMsKWq0GnVs%2BucRzha2HVah%2F63ip%2BxNxSM6t%2Bdz7hE47aPDYEPyk1X9z30MytEbtdQv%2Bnqgn3lpsxsZaHGcMQ65Xwm%2FTXJSsb0T6zlSTUsmIp7SZivvIA8tRBdP4Uz4s5F1CXzczKIhumgSPEP6ViZP%2FI2Pcip7V&X-Amz-Signature=9e89c6bf2666c48dd41d3b121539d2719db7b99b55ebfd5ff464aed58e074b06&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
