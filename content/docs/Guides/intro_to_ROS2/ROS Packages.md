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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=65a81c63f28207b04b4e3f4c898817fcf2a88b3ba2d86d77598a11985066282b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=04319f4a5fa5d8380f4946d53ef5ed238faa0cf6407d5a542bf4bc281897e794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=bd6b05f2cbc353f16c1acc42769e2e7b53266e4ec0ee3bab321e002a35b817af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=5749873b7d6c0cb62aaea841021fbdf9ce21c0727f7abf8f49ef3cd01525cbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=bf02ca75062a5e62e78d61cdec8f7b2f0e223082b3296e2189d887e65b292f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=845a2a71b9337431dcbd5b52dc2dcd5d1f8078ae7c63d9c27e41c5019a33ab49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URFQA43N%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T101052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQCb4pg33n14rkTBZnf7D1GvzVWSR9Pj0V9UTrmOdQVaxwIgB3XTI1mX8p8SL24TGEDHgwKNqGUSz1Hq1UWc4yh2qZAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDPYwu97mtcUpg20KdCrcA%2BvMwiTyyvPltvW%2BgWKoLs4BT3gYYjYwyjYJVJGOwmpvzgYJJ1gvw1WuwghMzxvo%2FW6OtSNtromQngcmsdF9Quukf%2BtJBQjltwWOdAx6DZLU7V1zU1siW5NN6Ns0FOLBi0wPa%2FDFDD6Y8dQXkSi87lWgO1EfJqlHg%2FfsX7VhH%2FOYmqa%2FJ4iiEKXpZLlQ0TqWCMrwCkVpROJjoaupifeQd2Ujks5Vwc84KlNhZuaKFw71nVyTWx8pXfnDes%2B5NptBkUSdgeCNYG6oyDko%2Fhx69tkvsaWrTlTl%2FaSjKyKClI%2Fq4TiTRoVFCuBUT7HbGNOjDEObNgm5dHnvlmRayAlV5AHt%2FN1mh8kvUBQ5d6sWG%2Fb1ASj0wTV64138c2nSUOkSDJxddyW6SopNYFvNvuN5Zk24nvGsvaIlFo2FvEJCF%2FwdSzYMsw60d0ee09S2BekabFKxF7juis0oPNZsfyPj3SsQdZE%2FGid0ZqU%2F0VnQQRxVDzHAXzIX8vtdxtN5ZCl4wOB5vCipvG2Y2yb9gPMk66u3qp9FAj%2BKO3ja0XTvikBDEP2woPNyK7ptOR0byho%2FT%2F%2FfHOi8eShf0asK0hvin67ZKnJelRI4oUjQmpBq%2FJxmR2tl4ioSH%2BmH%2F20XMNqH08MGOqUBEKpJ4rjqLamDlXDB4t4DeQKBsw4uhMoKoWd%2Fvw9DkfmKbzFFNeC5TMMS9g26kFlZbDH7%2BG8OCrYb4IdwnTY5eVLpep1w1Gie4bYTjGw5eddhKc0Udb9FVWCHhZ%2FzVajZI9Fi8yW%2BSko3iYEddb%2FWL5r9VX9YuZjmhh%2BpO%2BifMFIblZ%2BXAd8BLuVu5RSi0vhvDLHIm%2BirzVB1H6ThoJJk%2B0NExa2A&X-Amz-Signature=6796e4ed427eb90c6d8aa634eb7276c0e174a421d524bf945e67454b310be2e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
