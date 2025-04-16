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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=3eeef5727d73a671cdc33e1db8004a56c034f50a4884c45088c44918069e4370&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=813efde7624f8585c5ae3ea635ecab9246559b32747921778d39bac19455ae43&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=3975bc0792eeb67b9321ed5ec259487dc7b21a9be69ad2381f84cbdffdcce5cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=bc6d2f0dcbf57f7426cdd7d8970ec34156557b14aaf16b07596cf8f4bb028909&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=747fbe6f2ef32a9538763eed2c1624fcd21caca6e3934d05002ddc3ef8283a02&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=f9d48eeda8f50bf0346b81d48a4f997beb2a8935e4506da7a1640c4b97848617&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466254KMFVA%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBAEMSSWjpiIp%2BKAsE1nFfwZE9vO8dhk%2BumroTw6VVreAiEAwwtOw4QUCznvs5UnkHebmaenpiKexngDS6zcFQYDXBYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDO%2Bj6obm0E86tbD6vCrcA816uyIexlEqOhFcUcdZes1KPi%2F0WUOoNzmlPrLBRyQFhRKFVEe%2FvGjiaechD2bMTwVVCKJMoDlvl9lP7BJx4TAU%2B7Jm%2FDibcsRxTLRBb8rF8huHoZ1KLYw3a2xDmdVcQk4gjQ5nj6IObSRpH78ENPeGSgiL9Eek4cNOvGjguZT73cj44bWaYuKx5ixyMOiUSZg3CpUFFgrmoHlXvxW%2BcCd3EQciKkEP2itSP7eDqQggUlGL3Xw5n5uBZ6ZnU5Ky6O0c3UJTdtkgT%2BgsFUrnn0tu%2BrrfQ2vl6uxDHGjzjehJSpjbtvIWRKYNv2A0irEqN2A69v%2Bs%2FSPjifgqqaux2incxfXnJaI3FLX0Q77JNYDl8ztExnkwTguDVo1A60UUKAtFPOkvj3hbch7693QJasNpnaWK3%2FH7%2BwLhhwmFh1QbYc1CUOztYXY7prPiEK8vqkseRD%2FtDgQCL4XpooqHYK2yg6yKS7P8l65OBj%2Bezvq%2BKa2%2BBPY%2BFbNF4JlKJdhpE1LGrsH6SxkWQvzb7aLzx0bVS2oZwr469bQOsh8j7Dj8Og%2FbxK9zuTP70cLSQH8s4tiUzkg6SGMzyzLFg%2BTlimUo2rwyAsigcPa%2FBCTYBOeGoySg15%2FqMsKR44b5MJ2j%2Fb8GOqUBfAMH%2FTQiI%2FuhvZ3Yjmvsyd9Sv%2FVXUPifuq6ah6NqnyNeLb%2FHKvdCYoOAD42bE56tKwr7wF7RmMz0cQNHjz1cIsqI07yF5%2FYvo0WDU6hjgrelFTvIGMceX3sWeKodM5LHfcyW8cKiZGs%2F1r6KczVUFrZPqUN3%2BsyiNiFqe%2BceidLc252Pls1GQV%2FA97ymo3oOxO0SCviFidastjqSnDpde1opDStr&X-Amz-Signature=1aec69382636bdebf684b9e8406bd4616e5746ebfe5798ff63aa8f7533b17cab&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
