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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=b9cfce6279dd5eef84bb85127950c942bface191dfd7fef102ef12c79c1a63a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=575c84e325d5530939cf1ef83b1b7b216d507d1d72e71f6ccaf7d158c852304c&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=8ed4facdddf796b828fa2803a854874c6f11901ed33e6f45166c9716bf49f01b&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=a8faa1f3b40468007eb011dc952f965c1c975206a2391bb078421ca4bb26ecf2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=a625c15953128f6baa383fb8a3617362ce03e0c1cdb5e661e79bf9f17aca24f7&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=50f9b03835ade91cfd23ccb7ca72d8494ced56f29c146ec0ce807234edb2f7a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635DJCJSL%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T050830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBafSMuruJO5htUF3r2JSbvYQ%2BXCXhPduOaClBZ7%2BZHfAiAwqdYzauXKVXVxCQNpbS%2Bg7qYSTPAtqc5gBwcicqwQTCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMivgnCJRZjglwtCGcKtwDZWzlwCuXFUu94XRr2K567sookiN6F6bVSi1FKi4Xi7H6yw%2FsszbZGTmfNa65hjUA%2F1%2FOPu%2Bed%2Fg0MvllO2pRmRg8zXJ4YhCBmFJwyzoNar294rI3k3t5BLpU%2BPzMnnmPNmBJdF%2F%2FUzIvUpGDREApAnUImWci8sXjyZYrHT8FMpDoaJOlcVzc8zvladiiRhgPP12VgGNiRiqMbdbQu428GcrrggLlTgmEDTPFrwim%2BJlVTmI6Fsg1FEtb9Bw1FkSo632LfC5rf%2Bb44RIg64%2FtlTdo7kSo7%2FRIq0uDqdlvFYeYxVSvbn0EaCqmvcHT%2BlYBpv9wA%2FXugIdKP3FTqOKEwypcD09gFnOvuK4Fu2UCjv9rp1jKNhS2YPasH8mMF2LTOUZXepTav3k4MdGVUYfNKZk%2Bgu5784zJBwITrPT%2BgNws9Uxm6TJuwb5isRm0J5KUBAhW2r73DTEsd6r3WRo0fou8Si3uSQlBy9NDM%2BiFJOfA23LOiz6Mjlp1lmhSAeqGr1acv5V7XI0a4fZoAzxbYoNarRvJrihbDRQ%2BQRopQL0gCi%2BM9LSvaOkgNZXl243%2BvXqOITIP1%2B9La6Am75OyMeTXXOmxkOD1p%2Fa48L9DRxDuuPSfeJ0MQk%2BiOL0w6evOvgY6pgHY6rVuTLxrkubmLV1xJvZG14pYUIPyAOKVgxzW74hnWgJV3qjHSrwRxk7WtaEbu3DHvI45Uvwrs76pZzQwS3WEis100AeF7lZee5a6Zk2Esy0w5LSA6u%2F%2F31YcnP0WrA%2FJI5SZ3IX%2FGucYzT5RxDDskmr8RO46yRQIOJcNQXeh7406mzV711TVz2%2FZzN1z5cdsJdHDDJy4AGp7zyqIktCsXGD1dbw0&X-Amz-Signature=ebd7a24b93464ab0e3957cc9dc1906545044db20714ca03c6948cd1bcede7add&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
