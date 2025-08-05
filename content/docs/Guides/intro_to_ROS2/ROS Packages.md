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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=4fa7742257a8559b8fbb6e7d440e9543eca561b0c26462c2fb0fa83fc74a247b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=e490b7d934d919b7d81f608ed95c26a4cbe1b399291d4980fe4e2f0388a4ce9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=55cce9fa869f27f3a0864e75227e1ca831dc589b267beb27a27b8268902965a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=80cca9730ca71b84d0db486d31edc6cc61cdd7103e53488f6d4ecacc225afca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=8386bf551f9b59566eaba87152d5d2406c7552a717a91e3e3880e46acaa64994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=76edcc01c8480300651eb6adfa33ac3c2340a5456797de6986d76dc2b3fde02e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654DDJ3LU%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T081424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIBh5SWZQjL%2BMkPSiqEN91g4wjKI661UKxC5HKcsICy48AiEAgfnsSYMkjJGvfsCJrJdwmQetmZNMRCH8EEcuPRWa01Mq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDICvgt%2Fb%2FgezIHVyvCrcAxH2QScROV%2BM94dabC3PXmFhI6TY6sO3b12IeWsv%2BMqmkCFyV8gjb%2BQkvOBgWxW7ngiaW9E9rx1DlYOY%2FBPxhoRX00C2je%2BlYEek%2BbmwPGc3%2BReo0LXQ7Nb6dTcqctbTh%2FrtukKwv4ez%2BTQl3G%2FwDdDCUkdj97xdR9hYAwgpMbTOT99cS1YaDjpinalamg6La98llJ%2B1pzScGf3nzvGxZLhGOq5O%2BT42cZRUYgF1UNvV7T0BPmpzNqKDrmvK0d2IIiaLdhDxdroQbVnOZ3U0iTRtiLsoGOFoA1Dzw0DzxgBcv37dGI3fxm6CyUtTgECjWK2CYUb297YwaDr3eZq8teJBrtdy%2FiBnlFF5%2BXwNeqrj1xSBCwvMN7TeEviYGDWvNZSYwGnSe8qBVHClqUto2gjt2tk1tMwj8gdIcX6yEUI5DbYtRcNtc4rLKMzocpZRONh1faTy2T51DOA3xeOebCffFPxqpeQKAxcg2T41cIqFEl69hL27I7GXjTGiXWlIzvYZOyPTOlKQR4E578PEV%2BwVH7dpK%2F7zXFwbF9ReUH6AgqAIrOcLua7NjdjzpwmDnYS7eMXzplsrrCuQlJzPUpBL38%2BjEQOPXkqMTmG07duoDsuKDgqIpv87exPRMJ7axsQGOqUBSmMEShQU1xMhqzhq%2FKaW1PS15l19Z2A8CZHvQEhAbHruaOaD9naPJj2BCPYJ%2BNxfOfZcIjKXqgiCWLF4gv67oy3U2YO%2B4QBNMUAsNtga8JxvArQVzH75bVnRL1C6CbICQ9%2BlzLC3zZzIrJ7kPR7Ow9eLhKHjcTdLVHjVOOhtAc4D0RL%2FGDX8yY3oBVTRh0mNk2d1vSd1nzq1R0C6ZOuBQmh%2FQ%2FQj&X-Amz-Signature=cf856dd0e4da96fdc3693a26de4e5bf453ee1d0c15235fcfa5228892efbdf97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
