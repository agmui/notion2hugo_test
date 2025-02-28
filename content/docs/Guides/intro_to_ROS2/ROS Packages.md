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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=f8aa8a3e15a5cf74c89f69c579c41c6a5f2a7dc393ab33360abc35270e1208c9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=769bb8346e680279c8159504a9ea5abf13e05fd7b24070fad78c5d6cc760e237&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=970fce6c0aecb6b9edd0b30532d6a26d851f771106096564e94b23a72cd37cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=0a576bd94b2186318d661e79a6d102d89987766cd06c457946a23f8b00baf13f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=f124849502137807b23a9b0f46905b7084116fcebd530a0de6d74995b6b91820&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=9880cea42762010bcac33932f229563124760c7439e9fba1868c8b9e73e816d8&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAS5UB4V%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJGMEQCIC6KPeF7d1q1tsSXUrNQywJ4cK2TGGIU3eJr1leVJZcNAiBIJQ8WOpI%2Fp5l%2BiTHVaqaAUJBLD3e2OUSjAxLVWwMvTCqIBAiT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTwkGgjBueCJ%2BlreaKtwDy23RXLHpLAWJo7HC2n7MK9%2B4JO6OAuXtOcpk38EJe4PU%2FEZx3J6f%2FM1aI0z38e%2FBgjTkumcnVLGqS3aKK3CBE6EfCIA%2B9eNTiMA%2BYAQWm9CbZve%2BwQtUPwxSJ9VTHF9YUgDJkkKR5RqQzNvhGNIfKB4qfDhnYHUxe52hy4cJ2x8r11sgmfFpUOIbw9Y8dwHkzGaFTwNWtz04EGePAapPB%2B1K%2BuJxAKPW9ivKHx%2BZZQsRZP771PAadYE1LNBbTYcgixQeWubtRaqotqJncEb2asBweFnZfxYhEty6LLFtiziF2nPlAO62X%2BK8ZKSLPSuyQ1T8qmJqAgnNac9m01sBCAaPFmBqqZXBzU7Hf0l54YwvFaXEYf80CNi7DhZKAQaR%2B0s3jtjIx9jFVvGn5jon35kou5S5j6SvUBWCyzjz74OGGnUGYRADcwZJzhYO9rgLqeo%2F9gCDeXKkb%2FAASCaIyr%2BZ47O9Jj4pvZvzpVqT1gtfUKXO%2Fi11aWj85P4ql57uVkI4uxXT4ZMK%2BgkLonFp5B1yyRGP6WxtCiOv9JJjkIuyCAciyyXtkPVhPBZDI%2FkuFdeBd5xHioyluB11b1t%2Bgiw%2BOSvI0WP8gC1S7leU%2BYICaM6rWZ1YZyPdzwow%2B%2BuHvgY6pgEpoIJvIhKOhf1PE4xb3JcNi1IRGsiAuj%2FBrqGIbeeH4Sct%2F3h0ltYvbSo61irYV2wc28UkT5EnsjeHyBqfs5dAG%2Bg4e6tqSqckX2S2syb8H%2FVkssj2juZ1SSmRTAilX1zyzU3JnJP3XYGOYhGJcPXXd8s6SWASUF7vs8lFp70r9C00XXj%2BQDjViMgka0nyNEU%2BY4HV5VcmmQIcj6hFphtRQdy9PdOP&X-Amz-Signature=43314cf1e9346183d5d811884c27d48236869baf33e644fccddcec179cfe2220&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
