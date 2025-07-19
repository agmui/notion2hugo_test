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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=b4011aafaf3e08b786a85652aa8aedd4375657719cf676b7c506ae8e16567172&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=f4aaca443d4217d0706136c64a9a78825e3f9e81a715808eb6451e37505ec6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=1a700b05bb8e20d8f8c204a52f05f526ac7d1be09dfa456dde998108844c90ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=42f7bdc7aecadf9c043b71772c51f4b9c1ebf756b5e6f9d1faf4dc8cfe9015e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=84030aca22f138e159cb9d39e1e1959717117edcf1187b66f568c5feed0b2c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=ee0fe6f39e11414117f564b3e1caf562eb231b22424321e41b06dfcc1ffeaec0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RK2UYMU%2F20250719%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250719T230853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICXBrGnspDfBSAUNP5ONCi0jdqgqM81uXKksKLr7gfZIAiEAy%2FvYwZjp97gGDVDOByZCrs7BeoMgNeVwsAXipVSCC68qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwE5FuxVhLWZyI46yrcA2t6cjNcAsxYc%2Flx7pbTBrvCm8zEuCUapOPlsoC9G1SxKeilkmiiufhcKepYacOmphU8eVe0%2FE0%2F0bGRf0i59Zp95BxPrdHcK8nu%2BNJdvAfUFuOWQSo%2Fn%2BnTHUvRsPpGIv5J1x5Y%2B0ejkjCQ9vJTJAgDsNtvtSzFzYX4UeguQqhVauK8ZSCck2JaSx0rVuQBex%2B6hGvoHG%2F6IdotnGKtJWXn2HVnOH1fXCSn8kh3nRtje%2FowBxjrPAt3Igz8ETRIKW9GA8%2BcudcSx5m7yAJh9c4BydVOcucoyhUgNGbBMXoXwiY8Al4aL9VIvQ8cAznq66KL5iqfUH1piiQOA5j%2FAqF0jSGivDu4lYgnkxuFX9oZIrUSmurn4SXp2YMm9mKLab3KXAANQSfRogkKYRFWjIlq5%2FdkTJSt0Q1hzLWQ8E8SGb7wAkNO0p5Dyh8KobGRedtSOXUst45ZUOrIBIRkEsYXH0XEnRsLgbRZQy%2BzBFbGMRir5wT3KZ2%2Fs8Zsv6vkuJJc71IGarntzbjyJgYfYOJOD31h65JfKKUnq3WlDDPWv7%2B2muMGXWjOUkW%2F2aUGjGwD3cIJFU%2Bbt0UurCLMc2E%2BDlBpUYlqoSj%2Bnjk01iNLSMvQURYdvuS0FeMAMIT278MGOqUB29Pdq9hiwVKJqtwedgVJ%2BOdXnAFP0d6bPw0N1qUMsbtwzz%2Fj4I6gDPx4s%2BVBpMK6Ut0wLDfYOaYQxOknYgU19w%2BpIxnlSdLzwrS2Qm6e5HI7cQGsPhsLoz4Asgp9IHySRYLWWv0irYt1BI85r3rvaNjhjZ1KPXBRUORXhokCac5RUCFglvaXscXDXLerZHpb%2BKoVcBYg6x5FG3nbBBqrhsKVUe6A&X-Amz-Signature=8d84a57e0c27ef2c08c984cf840beb10f015479cfc2bbd0d21354e6dd539065d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
