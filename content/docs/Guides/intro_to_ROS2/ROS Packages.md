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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=ddb62fea4c00074ead82efc543df9ff76f4358108a765220ef82f1da06290011&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=1c02467af0b352c2f90d48f1c5a93f12d90edd789fcd3291722c676f12957cde&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=f5219c1d132caa861f98938355b23e4947b09cb9596d0a3b93a163186b99c214&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=d3e8a70e247c41a0e15aefaabd4e41fbb06a0af233843fed2e26155c355e672b&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=4d6311e971588e255f14d0d64d005ac38ff2aa7406cdb4e5e3888fa509baa7c1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=55cde8ebb4872db67b1e92cc5439ab892be9e42308a1b8f9c200a88034ef7e92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVFPKIS%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T004214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF1vlha2EA6pUTp9Sp7mP4BkqNlanZPrFv4mKMtNbLR9AiEAwv81ld0W%2FxNNEwVwyFOrO9IeNOh3Xy8wXH1eQH5FxEcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDDDimORR6U%2Bd3u9DCircA%2FZeK7pdNqWPTYliVDh22EFiU60mLi7Bc8dDyjXZxB2g2B%2FuZbHFAcxTObGXQbFhRhH6SPLQRMB%2BZPMdvE%2F6JYhbPxtk6q9qgDVo3KMXWIrPmhw2FTnvEApzqofUteFL2KOsNQukGkrBkoZptwMGIK6%2FdK58bWKy5Ph9haa%2FY5ozz41RJxjrI9XG2hN1jjs%2FA83%2BiHOTwrf%2FfAnU8MTTG%2BVnB8I32aZDuwfcpjfkHHFpXTS1Jt9X6CJPz6UZReqlLvOPFpKbvBDzU2aGBdh6qFfirKJ9%2FAgLQMmBIWkFF52GX9O90uu72DeT52BqpUkcFDN22kRAADaJSVIiJ0YeH8iY%2FS2V5JZ5Kd8Taqm5coOxwkYJk7YUrttLwX0TWoE%2BDGhFTrQ%2BEgaaG5SiCalYT6tnTXU7RLtcfBxR2jSCrtldCINUaQKOZh7uTLF0y31RAfhY6WNEpiMdi2XY%2Fr3JsTHinKEj83rDuDWeP3fDGfuZFfEHzfUXbjgEKyAbqrIFxLaTPsesz26Assda5WPC5DKbj9nZ3cl9osBWI5RpKBIfG%2BwoDCe3%2FNzW9LWM3OG6zOUOdsSSV%2BalkO6%2FCO7JkCudgNkElzsk%2FQCSzVYRlD5AUeVnfZ63GiWkybIqMNj9mcEGOqUBeoyLqgZE22dhk2X7T38PIY4QuVvlx7ZKvoJXN2SUWipE%2FI9v4IpGwAjeOtDV18BHTvaCO2G7G%2B%2F8dBg2yx20eopm%2B0P9EJo1wUmAgGhmx8GElzCsFT%2BnJz8iQfH8tOT6WBdJVOTAyZ4g07cCdtBD1m8%2BFJIwfTgNnpktJUrak6qoHZKPiK4IhLTR5S81uN02Kg0jiMMzkHgQp8NNGEPdGmL2%2F2uT&X-Amz-Signature=4acbca783861225dd02b7d09a1bb9c05b51c3b79f626905f373fef1fea43888f&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
