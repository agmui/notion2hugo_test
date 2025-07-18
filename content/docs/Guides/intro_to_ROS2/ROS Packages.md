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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=709f895f06f28183f82b2262b4ea7e779feb25ee8c06c3e157d236d64a1befe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=1cc09a719722f7692a5e920716310597561012c98376511094e1cc484e69ef55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=4afaa297e21200c6d7ecfd5279475ca4dbe933cc7e104c2a3ad31680cde19113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=7662d83d58bd1d3d6b910d71e42357dc43dc8e82085d8eb618fbe72746987db0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=a5cf267c5ff93eaaef946e0b638145a28f37d94b09f69289d40918be910f0244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=45984d2dbd3c52fa239af7ffd024ba10c71cf9ba2eaea2e381eaf122a945feb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULXFSLHR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T201029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBZo6FJKN7siIQpaGYYEyefRHrOuJZ4iC1pO0xTjylqoAiAgiGsBTH1IKMahFKgxpsBtk0DfO0A07An5OKwoCCAbRiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIw5q7C6G2PaUlklMKtwDEpDnaHOYJGyp3J1vpBozLhaKuAVOlLr5cN9oIJ7M0mRt8xWxrLzxaSeeJNy%2BkPNis9Rcj3RFJGQLhRcovafvtAHKGH8m%2FEn7YRoEJkt5TpO7wB2VCMlP16uarmDyRICOJMO4YXsFwaSMJ%2FQkpjIIetHuLbAumEEgUH%2FKhZvrPVP%2BowiIx4zCQkRMVZ9seT%2FFxTsMBGcnHDOfO6G86GTlLKOqObyeMNb6eLW6oa1cOwC3sp0t0Jrzy%2FilBG5tKHLJt8Yr0Nd%2BHFTOLrCOs5M6i99IjQBJkXMQvOR5zK3Nz9YEtOzoc8dBG03InIXZCQvpzB0gzGIVpoi36ytUY0Duf7vLcoDk0HD4aDy9JcEttgRG6puqZABQcpkM8an2DiNq%2FYx%2F1TpGb1ljU9J%2FnkHGfg0Hf26TtH1fRdn%2Bo55JuWfh8FcS4%2BgyXjymocflKuQdMpD1KLQ51FGtygfxoMG5dbkur%2FUqq%2B51zjAsrM0FLhvqD798Lb4thTMZessjsGfky7sxxXBTJs4sWY5YwS%2BoMbk%2F7GXLJF0NM%2FX89DKEOZt1Csf96IE%2FwFP5SE9ArR20M8cBAH9cx%2Fk89nq1UYtQWagkOj7oetK2ULoQCRih0C2jw7m7%2FYJZzvCo66owzb7qwwY6pgHGXHOQTAK306u0S1JK7PVm9O2sifuZucb23fl%2F16JV5fdT49WoJM%2BIQ0qbq%2FDPOj6ZHsLc5cDTEu6zwafyXW%2B3%2BuOB2xhLvXPZ%2FZpQsr0fjpHhm8%2F1BBi3nBtGHpbwiodjswmNAVEgGSs2T4foG77YMfHoIB1vjUS4z%2Bgpz69ej5z%2BxgYAsrEnjPBAVK0IbcXAm8XDwYyGgpMrP%2Bx7GSzIsFeGMBHR&X-Amz-Signature=02dd1110d60d9cbd86f1c2e0c709624b3594d7e6575ebcc905417408a619d407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
