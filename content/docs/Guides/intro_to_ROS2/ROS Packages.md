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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=8d7701e87ac08306a551ee5498565911f193e65835ce0efec198467a2bae0b20&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=2275b8aae926f250d36a412b376a72763fc228a46a5359c430d99f000a468d10&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=81f032dbdb14899ef680c148e531a6a24982f2582715c93a149ad9df5719b7c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=07dc3c5351c6e52e0319b4724899b3aed8e8a7d7a84bdeb0f7c33c90f361a596&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=a933f649de060cb5f6a3af96a185acf5c2b65a826844cb1ce38adfe4f67d0488&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=5700c5ea8cf8b5b6b351b7d021866eb796b3014eee3cc1eb90d0a9120bcceffe&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQBHANCN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQDtBihE0SoEzJDhqmV9EJDZ4rM2RaycpoaTc82WKxa3lwIfJ2jfM1XCwHUI2r81yO1ZVMQHev%2BQiqc0IkItDIgEwSr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMQFlm0IFm%2B%2FXXfkQhKtwDulXwYNt7CIurX21GYG83%2BqAVD7ENtwoQ7eRtPHR5PcTBTRb8qp1CwkV2gK4WSQO19wvD6ldgz79X1EogGCDV0welNc3piW7xxy%2FXSSkhxJozRF1VXj3JGlZ5H3TgIfuBuKzzZXnbBQHJ1th4NDPaagzUurBN5EBEpSxjEk0GWN5VadMGowWKSFPgAjxBPpnfnkuxt7LcfOWOKu0F3PNJPcfC98OcjVNnhXMhNGhKRpp9IuFxZ8%2F41LNk4n%2B%2BXXC%2FRJzll0mM5z14Dh%2FttjZjyNAWmWkO6nAxvx5%2BTKYBUBxqVLgQESUaXEzE%2Fxh3AEznRpu1DWkdtvLZ3lo9juL3lAiyrl3qCeVwP5CEmtXQe%2FoAr5vMWSppPh2LySPFzmJ9%2FVi6qD09EBARKMDM34LwmoYt%2FndSNf%2BVU0VgrAVo%2FvG6I6dgidQFHmg%2Bpd%2BGCKbDYahNrY0XPQ%2Fc3VlRmvNg8B1YPKbh1dIndffu5dN2sQRVod9fwmYEqLz9e%2Flabe%2BiFNNm8TGMrSzVbmCNLhslyyiOZqBT88HgVeVs4ikWkJrLv7VaKY%2B5lMdZh9UmvUVHErg955%2B0oDmMjlQ3C3jvb7MNYeib07tIDs1xQUuTS3xaKYwFx%2FB1uamUsOAwvbnuwAY6pgEkkNWzPBqXP770MwjXrAJktwwc7JPW9XLj9kTDqIyyf0cHGm2BvNMCt5X3dobHmYecFmz1vGC4PVfKW8ptjdgJ7PyVoGSFhrtcW044WrY7u3clvXfSdhs%2BMLDU40ep7cadDcneseL2zb6Y%2FZIobhtF8wQ7aU%2FZHX6VAbsuaJIXI6LV6sSF8zMfDmJgbVvMana5KavF5ljkdqchhAcgi3BZexYMB1Hk&X-Amz-Signature=0e8b2c031e6e451bdbd4bf8218bda96bd34d4d080eec53022b1d61dd45beb5cc&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
