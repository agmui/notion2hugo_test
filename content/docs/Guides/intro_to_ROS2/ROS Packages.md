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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=2a2eea6e712964fdaeaf7cf7bcaa4606bf31c7614b0a7275279ac11f6d74120c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=a9a52a4033251736375294d6f37e24623af4b0c6fb7b2b4a9671ca340952e718&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=98a0884120622c86c52ad928a4b29a6855b69c517d960c7a1f4498d88b2273d3&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=10567425cb1a3ac64933eb3eeb9ba349393b77a6c526a80d92dbc393828618f0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=0fdca0498a6296e0fcd0b4dc448b494c3215382b24a25cb961cd0dde96ce09fe&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=b2396a07b47ca74cd0de0a0d1937ce6956d1d70f049d261dcbde21fd393bdb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675Q4XDYE%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T181110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDpLeIW2%2FBFcIjE8SaNzBmoGO%2FzHQN%2BSnKu3rpECpEogIhAI3rCzjmlr4N3m8zZ3rE8kCUM4bh89yCQAJjqVXQE0IdKv8DCGMQABoMNjM3NDIzMTgzODA1IgzIwrUfn5LdOOu7LsYq3APClQk8aqjwgX%2FWWcrXYhroBu9Pdk8Xm0OEZq2WVqQVLfvHrgYM0kpbRqelUlwCBt0UMz7hSd5dpFMkIuO53iQc8WEwF9yOucOiQZSadFcdfneS4R%2B%2FdECFMdpfJ3k2PoZkNJDnpJ1bRSOitWiV4qomPA1RY29qZztXMOTr%2F9TiHczIrwelMuSRPq0R2Pm8L88iJBbuCf12o21dBThsgzydOeKfFVBbhrOJVyb1YidjPLKtRIWPOwX8b7R2CVGWGqodbmqsYh6x56u7CWUTk3%2FhCOx4RCpAz0DVpkfc4RXCXvRmXbimXeCqA6L9IDsnuAo6Yj28GWgLFy%2FtVSBH3U3hsomy9rkhoJb5BWQtoTrh3mxabrOBl70IouMfoU9FCCMHE10RWeHvzvmLrM9B%2BS3mNfd6207lE76RwCgZaVjZvtWsRB8%2BO3UlnyfvJAeaspBbCy1uQ1tEau5sYVjRAQhldll3SKmfsnp9KWHtLgrJKJhZDDE4xISSfT2JICc3%2B1bXX%2FpnqYfgAyGNvxejCcLY9nxAKlSLPJ6EJest4rf5yjGeaNDihEopeAtLEHxxAVuPprWmAmE7EtlE%2FYXcc54VQ59gdV%2Bfaw3yiS08Qp8reSY2JGfoE6xTw3I2ljDHo9C%2FBjqkAS%2F92HIgl1cu%2FchRY2lnfYH9u8ho4dqFMXjnG9y8jiGzQI6bL6WioC1r%2BEzhhRsXp29VWi%2BDxZ%2BCRMtMzJdT4%2B2EjwVVucvjcVPVTq1nxSKhVyJFs0BMZN%2FhWv2HqKQAR0KXAUDb4DzP48L%2FRf3NGdkOQz%2FOCqFu8hwSSQCQfo0ZVLr1zCTRPmzsT%2B8zNfwkn5hRiSrXCAFsjrivXEWs2gIQ5Jzx&X-Amz-Signature=9b3d342d7d2db329740773f88d695e7f7375ca59c1920cd10bfae7f8011395c4&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
