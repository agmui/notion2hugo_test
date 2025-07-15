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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=99d66418ef2a5cb702a4b51514f11cf5d6dc84bfff81b5b9cba06292df55f2fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=cccdda2e95f8ec3f0ed4a89785cdfe5c8e67a499cf8e0bd5bdb3aaf826a503a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=f474b15afd297c515cce3f5ab04354a9414714648cf27b5cc407e2c797576b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=dff5ec49aa6edc1ff4016719b3f7e22ec78035deec99acee8b4b85545f313524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=b65cde0ef843c631e37232ccf7ec7d3f8fb2e221d4bc2fa8df39b3814a799ff5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=07d6894809dd430aba48e6e44a738c982f8981c3989e3b8dea368f4d916d89e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q663V6Y7%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T091835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIBZci3bgVbMeU9k3%2FtlGnMdbuq6MHlXMCgTOttwp7lo2AiBYimOQsk9DK0S2HgoG0bksHca4Tf%2B%2F1b1BYEh4KIMMKir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIME168JktJRVhGQqWQKtwD%2FtJuVPegApr5X7AEPDu5GUWGOMBDco8Bn5Jn4NOQqjOxQrNFwQvBfUOi4ASQeI7alIFrKmRKZlIBzMa6cGx6SBonIfUoEoNChKjm%2BiKxLhZzak1nrtzxotxL3R8dtvyhnquIYgsv5AUDT2hnFnjH5VCy7j2vy4OlE8Pg6Qr%2FY3znxK5HbCbcVbT43716LC3YTs29bBewQag2ZMS66dOl%2FfUJ7RX74vN%2FjMaF4IplAiZzGFd15x3Zj1gne%2Fp0W1OLejcqCdUoukHZqU4aXiMSo7SCHOKvCcCT%2FjKp7wKUPwYEAOhtrU5Csmk16AfGSWul9HqtvAdBIOiJwHbYI4sKWWndJXamTD2l%2F0Hh68JUAOw4GtT3J2M1tSrpMY70LgvI9W%2Bua6arHf1LEShiPbmKeAuHNtyXES2%2BDUgAzozl8Oh3MD%2FXzPGwv2nobBW%2BA8C1bpUlvVhvjdQTRlMtFSOt3XDxoBDBtdffsQQAiL18fURzTgzzWrZUgj9ms97mv2zXAn85TbhkbWrywnU9mmsUnThzT3uB8y%2BWMeH2PCSaohJ7ufcBp02DLq%2BN%2FlO%2BTYBBJlXwlIWlVuNnRE9sS8T2gg3cSzfQ6HqVeNHUmIS%2BfdSf46fzrQrAb3p1d%2Bsw77HYwwY6pgEDC0cDQDCJQvfGXjxmGDs4%2BHUJSawpYjxI4brdCtYX9am0Rty3zX6amg4ZwvwKN2Hs2fVy7eWWpbM9NNYXUCV0At2srY%2B3d%2BPsRulgretBM9fmiduT4zgegaduOYmHg0IZfgZUCmQK9Ml4gYAgGMtT5YPd%2BBLlyoNEqUfAkCQ%2FQXtqIKMtHVOgVOhssP3Oj777UZ8MWjkvciwMN2dAxgdyunhzJGL5&X-Amz-Signature=1e4fc7bdf8197d8efec4daa39f898dbda851bf563e043df967390e63e128d439&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
