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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=7972f7e19fd38f2bdf079610e30ef379b00db7626e8f8faa40c476ef47d24a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=f750ce60dbb3d3effcbc348f5c667d49704818d4603616b11afdaf1fd4f0f4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=732b72bada499dc3da65f5b9bde7142f56264230a49a5150c5b019e1fa65598c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=0aa64a056bc20456518d1825f411778ed530564a474071ce0460671f7885c8b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=9a3297b3a525dc1e2835e69eb91d8e3aed880c506a1a0ae2c115e0cd4784df36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=ad73abedd9a6b05172798c0833cf7272f5699165cf7d18eb0ceed88901aeca48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA2SZFAJ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCICgp6sgfQd5BszSZt8dur45tjLDk4P5p6uRHEM3NieQSAiBNpDbI45tND%2Bgcy8J%2F52KAS5R0HKhsInRJivJdvhAaair%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDgSwYLwVY%2BgwkA0dKtwDLmY7fC2DA4UZIevSR5Tp9pIBpqMd3%2Bz5mKF%2B9j8mJhmpQ%2FVzUqwI%2FG77q7Ts8elUi8d4NsVfPGBLlLY0C%2BGT2E5d0RZa5VkS8Dk4rVrU8M0EaF%2BKdn4pl8zM%2FcDWdp3H1A9hmFcdSTspIJJjnvQ%2BaLKyZlpr1V%2BpeQ8s5gjkIgi48iy%2Fhl9pHJ7sqLUtPEG7fHexZ9tA31G12C%2FFzyrl382aRYnG2z6fJ0wDBEerv%2B7HJhwNBNf3S8B7itqFKuaQl934tKz24QRejdkHs8FJsR2g9qws6wfVf3KUfbL8MFWvTDkOef92X6dM9FyqiT8%2FJ%2FmBNy8IFjMLTbCgy3BMMGlUM0pSEyOOdEDL%2FdRx%2FuKWOoeRNRNRxvrTsVBSC2Oz0e9jCb6wHejgONWmM3ku0rFBlEsuZ6Y2JnJIfu1EKhrwZWHBGV9bFbk%2BeQkU6Q4DOTCVfy96iD3joQud%2F4V4toWoc0MXPQ%2F0uIpcAmE99XI8uqTKBFEgD5Ghr5rt2NudYOU5BVylBsm1SLYfbRPrEjzALQjwGAAbWHng%2BamM3K7NHmKTCs8nf%2FT%2BpKR2pBEPvu%2BqXJ17TvgfJsFQ8FVeCgYnr%2Fd1HdZgnVKfgTnO5vlr40L2EwpmtZq%2FM7wwyfnDxAY6pgGmYUJLHYXvUrJZHroXvi3tUzL0ZolCJ%2FvN8yHoNyG%2BKDKo%2Fblrx2YYpUWeagjvnaA6BpcYP5WuAtjmdx%2FU18ZOD16M6eCYigM%2FEYk4Qx%2Fv%2Ft6SGZfUsFwRg4gS1CoehyPXEDng6W37yFK7YjiVcvz4yuCvJb%2FHDNZQisY%2FiQgvx%2BkNwVLZL18YYFt7hiKpqXolLbh7yeq%2BrYwhNeNgqPGW5kjjnMC3&X-Amz-Signature=7fdb8cf802260fd2194a34e39b4c274ff7042d1b44f4ce50ef59f5f3947c695b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
