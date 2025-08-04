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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=d4fe39b8555010ff996755cac32869c96546c74ebefb3d4c7561100830fb5061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=d6fcb4c5e7250933a79d31f3c44a06b49cf7ed616ffa9f9ddcc797e3c1761594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=450b6694ae3fd15b835321b476e28a6d18f74ba882ae9f295f05ad1d829248c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=34244375556729ad0c7bf5f52a96ee35584278a1456a487c3ca8629f8c00a5bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=7759b0777dfddf7251314f157323fd31a48a16222a6bc691dfa73afecbee5983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=c4a06c7d8682cc92733a6c7dc4df9974af0e2828b6d1f0950792a5a3d2c22f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CO5IRMX%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIA%2Bwdou9cKfQCIA54t%2FY1zmNtW4yzpvWSRpr3tRnBzenAiAprl6iOy9wFsvKAg%2BlI8WsoJKcBAD2mjVXv5fklQIycyr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMBx4BTHaoLIQ1SJbAKtwDnRz%2FclGw%2F%2F39KQiJb7wU7nZJCygcd8%2BEbLBR1jmTsWqfNmzBuFuruLTsEyKtf3pnS1tT1HNjYloJUHAOlvpzCaCkHI%2BxC40y9Xg%2BAlMibsLjQg0Jl0HnX%2BZrWvWrDagIKcVh0Ngo9PJsPYuddfjhGyKs%2B3f3LxpWTfSZ8dp6mWuNFp2ROwAwF4mpDkruWBjo1BvuJWfY%2BUkZG9TpxKbGnyzF%2F441g3tLPaCUjxpoPLJ19%2BjW0LBC6HShfnYCcT8fyuwgCicq4Xbd1BDQIJQVNo%2FbFmuuV%2F4Ahr0PvSr4MeWAJokaAVCIuML0MDzqG%2F16LARZoxt0GoTQ%2Fb25UVx3rwcT6vzUrq3HxqN0aJDhgGR9TLS3O6mVjSXUVvYwSAbgLI1zD3UyyUoiC52oewIOqQx%2FvOV2ibKHGZOTS3mXLswty5%2F2UwnBCqGQmHo0XDOk7SO459nKQoL%2BhOpq2q4OFzBaAFqMAHlLGw4CbqINBwi1RDlcmacU6qxiL0yj3ox6isBXxNZgV6z2MNxr4NeIHsYxlX67aFgajVVPNiMHo6fblCnvD9hNVxWhqM%2BoOh8fbwvwceMD%2FD9WD%2BXZHIoziWqUybFXhrypvA77THPjDa7UT3LaWiLuIb8Tkj8wrPTExAY6pgH53JbBwlOFtUxynbF9LLrdAMN1%2BCbYvMuG4eHunhc99gYvaB2e9o8yfd1Bj0UTFCVWEjFf%2FnWrsKrPP5F%2FjJbI7lEOEYFQyA2%2Blkn7Mu5PBI6R3E1VAWTyy98z5NEwPdmHphgsp%2F7lGzZMJmZD61HNfMZau%2BRUDJ0mb9iepbb6ZRdlB1gH11fRlBxdbBc88eJGzvy0He%2BD8EfaA037jV9AHvvcpvoT&X-Amz-Signature=ed5a38a41cd7e1131530d1ffed0d1eee772603c9d3d831087e5016a5f9df89e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
