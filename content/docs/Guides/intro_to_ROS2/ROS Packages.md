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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=4f1472e926a4ae88e429efdc51d6f6ce5a0ccfc967252d24e4c2feb7e85185ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=17db919b886a8ee2a42c001f3d4ef74c12db474a071b87ba664b2b3539e4ade2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=b0928dd5b241b241fef5481701fe5538f68ab227059369cd7a1ab92ef9adfc1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=0c448de6c33b89847835c27018e24001bda6094d6f82ac53f259cdec4512eeb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=73e1ae2008a3422ab95a9edb386d8dbf83bba12da91eb4da4cb95d4670024d0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=8e8bfadc7bc11eda3de1845e5e161a0c1ee0efa39758e37eb9b16618d64a858d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WR4VPNRU%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T050950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQDVjUhrqaHaVKhA6KNup4RLoEISrUksrXBKTIACZzyz%2FAIgOo4hxPKuqqRJqOOJLdWQHhZ6K%2FZWLT5qkjLgVHTPQbEqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO1aecIdSobmUz2o2ircA8lfra8JKWqLXfGTynByLD6RYsQMmVek9UtpRmBaub%2F2%2BVGo9uvNHcCJ5pH9%2BvE4SIBsWT03oWZWa77pjz3ju2PrchXuh7F6IGW%2B%2BOza7%2FKcsk8N0ZKIuok1GsSETQR6yLjBoZw4aNIDbaLl4IpkJOsmDA%2BhVs977ZNJrNRN9f2fHyBN7QxOFVovy1p8rpFmsF55OZyWpQTaSnxIYSCUiFMZp1%2BfS8iEW91M8khiU%2FLtiNauakxmAR9WMDtBdL%2Fk5cHJT3zNPl9R8GQa7JifD7zPu5i7xlcFzZaF9vjv47D2nICZK47kqNonSE%2B5vDh2Ycyu%2BOQsW4UgXa8X71JbldpGf5Q27jo51%2BNHWHcAsZhnxm7TAUup%2BkiyyJtFDOGS42Cq%2BYxybSKw6Uzcl6TvWCcTMfCHgNSdZI1tFc4q3RDCdsXITt99U2PQ81lc2u7NDDuMJnu0pMDo5FSFIOcpXL1tQwx3Lwl62BR1vtHaOJ8vLyd%2FZNhNnFDSWzzlen1jpPwduYSlzzMUiLmu2ECubQWPPl9E6GA4LmoH61%2BGzThC0t37jyzi6XHK1HL%2BeCDnSk2R4en0rP09%2B4bUgxW%2BeGdKTOCDRWYe6lCRTCFRrvMUxNr3WsVNeM88p3FzMOHLrsIGOqUBbMVV5%2BAC%2Bt4705MkXHFILq9hK8xjyLxz5JK11WyvPqJF73fIvHhzzSYVs1NMkNO5%2FL3YGOmLoES1z3%2FSdJo69GfVrf%2FPGwTk%2F4Yx5Ndc5gax8FVPNy5UwenVcWefpXdOvpAg1H8ONUQMmKFJfBDP9nVg7kERWfIvJnr5sTlI3grGXGEzPgqBWEePhuR0L7H%2Bw61A%2B6E4zXAhNTF8WDqAzt4VdkIe&X-Amz-Signature=13e1fa09fa8f1901899466d52742ad10814c8c61cc1af0357877a0b0af71e543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
