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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=a30a0c91750677f25a691dc06c023657394f642ce94b9dd49fcbbd2885d1a626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=7e4311b59fdee89b6233f35a507ac42217a3a20ba3007b87e639e71df14203e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=00cf0752d1fb1f69d3c06c5d01c774cf827aa5ed6be451e047279dcb2f41c49f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=011ead02c1325cf2963b649c0c8a3920ec3c897449ab92b40316048a1123b17d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=5d361feb5ac2e4170f5d922550396f1e6ae33d22929ed8f6b84550edc13483a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=715c0631e233a9ee5f58267c15251ebcc598c518886c693d85997743341b4c7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6N4TPC4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T041758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDq6BpiB9TtcS2WzyCNYldRJyKXbxhD%2Bq9VhDBNLlv4dAiAVY8JFz1JHsvq7i0Im%2FNupJWT8OUhiPpRiNfUaiB3kzSqIBAic%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVus0ajax12bDPozLKtwDiYcP0HrB%2FHeXeYHcG1Z82iFtqItAbgzZMDm%2FpbvenXXupFPlM069UwW%2Fblm5ke2Q2csXE3RgDytbbcCN%2BY%2BBNYAsXkcZv5oYqu28avX5pJ6XrEusHkfWnfaZyTObNsgZBGTo4fEy%2BzLDPfdfRR12y9C8djs%2B7bUN9mFnwbho7iCDnv49zJNeW9BmcGmETDLUPcObCZTwEgRm6IGKzz6gJV8iPgKohoJm%2BaK2E7zK76r%2FkNSijv25Wj4JoL3HnJMIPTg0iYnublkxCZP%2FOfjoICEIRd4CmNz21Y9loIZbx0%2ByabvhE%2BWfGPKJrpWC%2Bt3yzXFXnDxLqmUPWDiooQ4B4HQvgZOHrN3VmaCXYJvurAl5tl%2BPbkTtzqEJTDw4Kz24bWmf1wTe%2FfYfYoZxU1DIbqM1AhLT0aLts%2Bu3ikeKsWc4%2FMBRfo5IHqmC9VyD818WhbqrgrVM6LrRqOWr91S7ezFDMUWxtFaTMu4Upv8zFO%2BWHzHBIVY%2Bb8SNaA8RBOkXQp1CSjFyoGg9JZXdRcT%2FDHlrD14LHwmMmbyq8NXsopz0%2ByS%2FtyOA8QQljdyrP3KmZIhysldyo%2BxhzQ9931Vh7%2BwFTCskQIhXL%2FNy%2F4AWLsUFmbT7sR1aVJJ3PgAws4TOwgY6pgH4o9f0ZA4HnKri%2F6kK1qwqgt3GKCKhhX%2BUujTmf390V%2BxZsIMByrukBK4jAq9btQ56dtSWv4M1%2FbEzT52djhuX1EbNz5F6Z%2B4MrXdi97xtmjqNOsVxYlZs1T0kB2kmLRieSQd%2F7zzBqG3CTCpkVpiVCuRAvp6fUCjyhxEo50wt7%2B%2Fh2yybR23Dq%2F1ZmN9nBgvAKMoqKzS6EWGbFWObrLw2NCZR%2Bq1p&X-Amz-Signature=0425183aafff4f64df68da751452a0b3cf0098c9aa1ca33e474a3104b1eaa801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
