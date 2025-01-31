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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=7bc2bbe717879c17a241b520dab7b4d524d5242bf794c0dfca87dedf0032ba37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=cd3f825acc4ba280fce3922573699d407b5ff48904be2afdb831fe799ce054a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=52dc0589f6d92ce7c9a7e033599ee597c74d150b08c45a4fce2dc4e41e57a950&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=072a2c93c18e30c319685eb2dc68094b368f35f6789ceb1acbfed98affb695ab&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=3af08611756821727c069cb950dcfb14eb860320745ef38e6d50c2fb984db811&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=16a41aab54cee236738d92e0400287ec6fedb871d6693a7e6fd8412a11b5b9e5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UCZVBN5%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T180954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoAFDlDvwCLQNsKAtI%2Bw%2BXEQJNCpupdV67TxIEkmNRJAIgW%2FZaLHi1TEHluX4QDOkeej0zzEVoZYm8MEhyrnW5xUsqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCRl%2Fq7dI31mjtoU7yrcA793HFEPONENhrsB2n%2B7gY2EmGXJ%2BaZXy6Z6aphykWFDS%2BfA094VhZkg%2BrU0TgQJR9FePr9tdhf9j5yVm6qDBuMsIFqaVb7E3%2BrS7af2Yd9btE66dmePxJz%2B9ay0GefNTROuYXJ9Dk6374fjluqr%2BbHzvTZ0vZOEMxUYDEcEMDHcwwb5nCpxI0%2FeCovP1YRESFCHDp9ypQ7%2BnSc%2FJPhSZ%2FK%2BIoCRx3L1NhgCbfEBtDQVmiwNjwow99m3QvvLnbafjj9eqE5%2Fu8%2BHY6uxg1onTSYW9J3M3Ugz1bQo%2BVVyMZBBThOv%2BWJu1lQKRdAlZyw1lhT4V%2BvEmLlllpz3hMMxxYq2LKnNahI7tRCz3iwrhLb77MZXYSSzkd33C67nh8wrPdv3EfVWGZER67pGO2YxfkrS3rr5Sb77QnMydxysqC4NiNWTBYOJula9ee8Fi4gCorxAk6%2B7Jm7vo3sIWc4ARcsmzMd8DzKpnQ181fENr3rpBm74vX3Au%2BPge%2BwX9GnMz%2Fc90x7WXPJKCAEdCuyS1Dl%2Bd2KCkWQHuJiJUp5mqeTrj%2Fnk%2FkMMLyWw92oWn%2BBA5GxOzHS2iOJO8IqQCKG4smhBb4lU2xfupalfpyxaf70G624cChED9gq%2Brq2XMO2I9LwGOqUByM7MpieqBGYUVaS6v2WE%2BfiW5a%2BO3gjnfZKut3BfvqsdFeLijRF3xYo1vk8qf6jH9HotFbeESMTRfFzlpSCT0PNALLLufilvCPFtRMu5Sdd6nMaV96lOAaomgF5Srn06yvIN%2Bn30s8j9QqY5oWc0enGgVmrmMMrRwc6W%2B6XoTyKdl3%2FxfTS3xvZz5aPG%2Bx6woQh7abAHGaDWaPW%2FygWn6qBeKwIv&X-Amz-Signature=ddad33656e9260fbc6c364b574d84e81936663ffab1ebf74bee916b0fb7b8602&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
