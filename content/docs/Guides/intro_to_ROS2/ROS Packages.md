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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=d275523c9af8b615b68d2560181a536fd6b48e28396242ba48bcac39e60bad50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=677318b1b18f0512d48d70617f969c2a9196687dd6e5d1708273f6231e42f20d&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=3a1816adb7184b7fb4e55fedc509b670ee2c154b9854aa7f480748974bb3322a&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=d0ea1d4fdc0ddcc51112a04db5bd1b94b62102000c703f11e6944d7267417b73&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=f95b03b7202572e67736732892c82d25b76f8f48569d51c2eb31e37b4486c5fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=5758f8fe9d4a4ff02a7d00d39011eafd60aba2c088cba6c3e8c2874abdc16253&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437E457D%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T121557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6MUXJGvjhNGTXz9%2F0i6eYZa6jowZWn4D8j0pYTVm0gQIhAOuO5vLSzb5v0RJcQKyEkLNY5Aovf7gOzllMEsjt9whBKv8DCHQQABoMNjM3NDIzMTgzODA1IgynWzfvH7i3lRVNXMEq3APvgi8ZWCHMNj8O09QaJiOovnIEcpMEnHCdL%2FcC3Sx%2B4WrQsQgIZ3uC%2FOCF2e5o5YDzg9VuN8Q9zkzBjwx5r2y0CdjzMjaisBEwCgVqvu8C4aOP4l7Fpix7FECx7ihGzPklXRoxVG63ZUNhZQ4puj70HHacHHAkPolmh4Xcz86rVy%2F7bpPmGom314vh0pvYazhvzO4tcXonqxQP0MHD6rmrWXe9y6YTLNVwCB1hriUYsxVt5xd1lqv1uXw%2FPwQTRlyQl5ZlNG%2BwKLxLCPyZqTo4dtdFIwBmEHOOuhFJvO5vWnhE%2BXO60TbQvdpDs1jOGx4gEw9qDZRfV9u2rrp9RV919PZwhM5I6b%2BfRoVqG%2FGpvla0nNyKAnFVfcOIHriT4xpvGE092LAxvM4DIk%2B4FcscPMqAQ%2FBZQDeFqp7D3z%2Bl8904AwZ6YpWI83HOFAgQrJK44%2Ba%2FtVdgo%2FqnR9ILiwB%2BVyuo3d6mJS%2FdqTyXARXd9wvmSN51PQCSKKfr2VA3bGrazEgf42fzK5plUvMwDXvrdb0u4VW6joSJV0gICsA1ZAyBvJAuosJW0PjCZ4RV4IdEKyZkrdMTtEgLv3y37L0zxLZzwDmLNroBCVts9h1j7WL%2BIBDRd22ZgeVlnDDlyL3ABjqkAbxwHwWKwW1fVg9X48%2BB5KRK5pFNm8AARaf1ULen9K4sunBn%2FVTS3dtx1Ds0wxgmk8e1i2JcG3dF6lENfKBaGQ9Gu0rL0u%2BML0Imt%2BKUWGFLcFbYadYlIjgccJ50jz6BMQz6wz7IB50s78n3B3wvFhVG%2Ft9spLqbxOVUJUILcBHRZpcil5D2R9he20vN2EWNMQE91v3Up5m%2Fg7X86l1IyI3fODpw&X-Amz-Signature=a1e5e884c36f98956104b00dd08640ed91e7f3aeeba5ebd01830b5690c49f571&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
