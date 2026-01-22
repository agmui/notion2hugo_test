---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=50991e45ac04853ba2d008305dc2d5f357797e4e72bb57d84b019b9f3b1884f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=ad33e7e93938cea188d7454e4d2ee6e3a2c44c3a491038a5becd861e675de37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=874263ed37ce851083925586824616623e25eace65154fc5f071eaef437e55c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=a30c0603f3f58a3b96fbe24179859e0d4db3871223d4799ab47660d18bcd13d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=6c35a5aa53ae9ae01e4c3c23dae38f3e0fa60c0c5a8dfe3273fa50d170bf3b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=b467acdd54343bc3affb0f23eccb469cf5f24a2bc794d08375ae2cfb8fd1bbbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SITRBRA7%2F20260122%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260122T015153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICBx8SecjB3vEr9mEpht5Xpuk05finw3n%2BjMelkW5ClsAiBDnqR%2FqJJtvy4YcOFF9oNUIVa%2BYHiuzp9peJ%2BioW9wCCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZGX0P9InBJSJDgXKtwDYHNfjfBcTovdXcS5UqJD%2BrbUw%2Fa4GLkPCG4uEHfEOjLXZWnIn0NfjGkPhN2s8q3s2yw3n7aGzGxQtTL3L83DFWRnst4rjVG1pfmmqvioqHhSLD41Fn28SycKdHVfloa%2BLPECQHfm3mSXS6MQm6Uc7gGf1mxf4atkNvbwt68LVVaaXtwkjX9FL%2Bi1uGVO3E96cYnrTUJckyeurdjaoBICavt8h5W%2BdvEN%2Fo8vJy8MArT%2FKpEDfewWmFyBy6P8YvuGx7moNCb5knmc6Lrfqz9RkxeekJe%2FnlASPjBPxscAFqdFed4CVaOEiKtjNBNdPl8FcgtgWw9lEjZTZhFg3CK%2B213Bs0i%2BTbhagE8BM3G1TK4Cpf%2FyVjdL3vOiLa62G0cJISyb2Net9N2iw3xpsxoDdRzmFJCJO8Tgo3yjpHfB9E1O65kylH%2B804HX0SZRtgq1xKzHPPRYOoyADTiHI6D8Tldju1Vangisa%2BC6C%2BQnBz%2BscHZDovltZmlI7vdobHBjaimFN83OKo1qf6h3uUb4e2PVP8j%2Bea4aW%2BJ3tradVfNlG72zA07Yg9%2F%2B15PQPYzowA4%2Bb2O1nyLQdQV1vamJtXEXzvbyBLLqcSmNRucwjowUhW8Wd%2BXRHlX3zEcw%2FNfFywY6pgGajlTmi3u3I%2FJ2eFhOfSe%2F8dwFx5OP4iha6SE0%2B%2BfUpVnWRviEbYH4wnb2TTZHocXLCqlmyrpPLwHg7lISGkGBnUxckAp%2FuWDjZaFwtGMvN7NxLgLzzOkbqhZ1fVPrmtxNimXLlXQMMfm4Tie5iYBX0rUKYkASTtGkGN7LPdp4XlaHqRcftHFUGSNogrfq0HxSEk5tDi%2F0PhSb4ZV8A3LYx24O%2Fi03&X-Amz-Signature=b15a8e88269611eded6e61ce22ca3961394e18b2ef541f3f960ad648162af65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
