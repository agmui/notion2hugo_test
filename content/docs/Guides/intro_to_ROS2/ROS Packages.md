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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=09eb6b3b1644355843610557e4a43af19e63228d7389c49e7df9af803d80760c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=8b9d366c6f751b05dc2393322f3b91b3e689f57dd2dc8fea77969bae12378594&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=aad97d5cce429582b313f09852b36dd829283e956b26ea46e9298f3f6d999ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=22fd0495c17be826d656a077c6810b201ff36a9890d81c9a11f867203307ee39&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=6c282ad6cdb9080dd9029b5d0ff0c43aedb05366ac968519e07150e760901511&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=afe831a23b2a9654c2ae6086ca05a8e35ce9c981d99d444e30865bc744392926&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLSSDYVQ%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T041730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQDeWo7kWVmYyzwMBynhrXbyrPRkMhhAH6bnrKYmUfnZAQIgbw6bqkA%2FF8qOgymrj6OgU8HY%2FbthmSVA5rhjGZiByJcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDO4WyJclzO0YqZi5SrcAwu5EPtwQKKx7U6f9wQuMDyXNmhYsVLqE4ShdFzJGqiV1YCLHT9ey2medB%2Fgeroze0EPKtsnuUPcUkG%2FNaVbqM8T9B6P8vxbWkddWI%2Bo%2BVvkutvMaonJbj4%2BDrCbuXlLEkiNz7kEfiOfD5dBdcKMB7tMr4FheB6mC%2BP90MPOcMbe%2FUcDO%2FjHevnH%2BvQwVCnpNG2T8a0euw6lH93OVX41QBfMmIsg9hRoUoGUVUjMGWP4j%2FjDVGa9%2FBoo%2BnIKZfDSIQDjBN8firct8T06y2x9geSUxwbz9u28CfPSUHWPY%2BLIzQ8XA3OdBX3AY9wr8fyp9AHbN7Nxgdn4HMD5Vovlwzj2MKGAPc83zqv8yHjjlGwDfbfE94qbyG%2FjONCfkoi8pt%2Brugq%2FSg%2Bid0%2FQgLd4R9smZ4sUWjbhARAmFftNRKcVx9%2F4oORcQjhU9sDVk0d5rlAwLkObQEdNZLE8OAuJLbDrJWOEU%2BDRMiGWWK3WcPX3qumgeAhUAVAKh%2FwTTXNh6KpzUtUEecImzWp%2BDo70gScaurhWjMljTpt%2BecHL33uwMFBs%2F4blqBQB%2BgYJwipNW98mqpaFsc0KDvLa82feo%2FiahpBKTjV0vYZR0ZiNffWFFueJAml0CYLmnYxOMPSmhMIGOqUBLIf8DAT5mgEnfmoyr7HxH9JJnlddulMAqKE8SOnY%2Badt62zlg0tLLPK2%2B5KZDvs940o7zu1gk3LNoPa90R%2B7COYzM73Hw9Jzkynd3j7FxX5nU8hE6eFpKEaS0UctxQjIA5QbpH4KicWL429OehxVG8U282DUBLkIKeHE0OqQng2TNENAPV8TUgtBN2B2n4n%2F7NxzpXSeQYWMT48xxHQqIXiCoR9P&X-Amz-Signature=d4d8ffdc0412f7fb68bcbbd160b17af1b206de1ebe07f25a018d0f538680b06d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
