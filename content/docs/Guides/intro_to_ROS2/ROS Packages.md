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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=52268a53d30e4a0098272e3fae5ed58635319fbca63fd0f11d26e0f0f63df565&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=58919a2b8399afb8f2d87e1a288ef4a7063aafa9ba1baf2e59eaf7893113b549&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=b5f64f24222030df237e40d322d15340a5b03e96e84e2f31831f11bb51946ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=d2004d09a456e19d794d5b6d4fec629cd1491748e6978751fbc4859868015df3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=35766d61504c9d9af24fa907dec4440d58d120f8d03da12c84a1a69133944845&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=d98b25af509359f76b33c24f8b5031a42a5f8907617b5e8122748362fef2a42a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665SARR5Z%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T022934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIQDSR2b8KhLswoEWv8tH4b80E3gga%2FhbpBBW954JtfRbigIgPw8RGttzp%2BEByCFkxkkcSdNcwaCNhM%2Bfl5v4s%2B9w6SIqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6KgC3r%2F7xzkuTn%2BSrcA2X0TJHJ0oQf9dhRVNn8iCLv%2BO5cDiG%2FqBIRJyFV391zVhqjckHHBhOpnQKCl9Z2xhpzCdRuWK1s3kZK7LnMxoN8A3N0OMnL41XjRg6FGwVr5HEqYWUpAstm%2B1OiRL%2BvtITJ%2FCK6z6Z26oInUHgzolIjFw0M7VlyhicEAPNd%2BhVz%2BywjH9FyjyhM2hv%2BF2QbmJlk9lGUKcaXgw8UcIAo9iG1%2Fhx87r4LIZEMe4uwPC7IZCgtvLqReu8%2BknjSAn5gkNPeowrXwZsGa5g1I94SJmKrfKcALDssGUw56utxsEMpPov%2Fxs6rvWvj1DjlE4cw4pl7Vc6oPWDLB%2BwG918GBfGsXyyKH1olPL9uEfHjdHa8esEPLY%2BE7iwtodKs4tMiNLXAD%2FTSkg9W6joCIzAOpJIil8eqS4YlK7wT0htMaL2Ucaqjw3PL8BDMrNaQ11SaC4%2B5CecjoAW%2BK50KVB5E3Jde%2FUPtTw7CT2RX2z8oWhTyQk5MAl5VwM7DLjiNwUNX4QnO8QQtrYmzoGFhqIF5ndlxPX0p8QDbD659JcwQclB39iEoWXV05AjV7Z3uMVklbq4N6Knjwz5MNi8riDv1GId3%2Bs%2FhFvYNoj78CpyaVxFgTrwH39S9KFzBr42DMJH6uL4GOqUBywnXEcGBjzjmAi%2BaHiN1kT9QCB4ONPztoVK2UK4l433d3TgaZzlhXdYYEkih1UYxnZL18jFGjEuA0neJzCeVDelVdFbRhdfZ78M%2B3X59tYjREdWlzCOSk2LeWAgGeJ52WV9MwH7hLn0o7AxfKTmhmIGnWF9V5fHUh84vAny8N7F0rRqiqTvmPjLLEJWxk1NitR5XlyGRQF9cWytVwqBSfqj%2BvAsa&X-Amz-Signature=43e2f84fb194b0a0c8b243f6b2dde7df52c404339174b3efaf2044ff49262d24&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
