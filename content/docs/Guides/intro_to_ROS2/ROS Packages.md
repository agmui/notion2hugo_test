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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=ac62cd6b43a9e2e74a7fecf861e0e3fe4c0a75feb309c1dff0e89ad0c6d472de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=dd8b4119782aa6625179f8317f89599647ca274ea49fa0a6d27e9069be72a598&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=cbcc647da200a96502a7a29c38db84b644c3bd2837cb996057c3ed31b0877deb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=a1abd88cf9ab5a4b5bb743a901901c7f53d4cf3bc3634b141b09607922b5d7bf&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=65b96a084090b9e3a2901a50e6cf0b9b995bf5e6253cb4bc8dbc95fc39738e92&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=6fb7eda3b11e7f975b05a321b4eb6f65abbaf29f9d64f314cb91365f798fac51&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAZFMNIK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T150719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgFk%2BIA8wcAAJkM120hPrFHmKpQzgXo8JaptIi9jFllgIgcq2hCeWnMJ14DeshsnUzCqVN8sD77n%2FxDbx8VJ%2F%2F%2FgAq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDOdrs59p6Xc1%2BfNYqyrcA3ZlzXeF9U4BoonWdU0jZMczVfx5uKQYqv%2BtinWDov1Yw47CLYOaB%2B3PDlrqhyxmfqJXl77ocykIuapQ8G4VRxvSfgXPv2Gi7ms4IF1KNZIW%2FkI7phS7gErk5j4WziBIDLD%2FwUVycPi5H8GTDETV8AUtSLwEjMwinDRyfmf3pesY5BawzQdu5e5VWnkZcLyIpUKjXp%2B%2BjZ52W4tkOvehyViiiFmqcokBLqGbrEHc83naYItvdYVfddSGyNxeu52Hm8rq5F1Og9e9rK8D1G8XXq%2FHLjGuNKnU9xtJYxXYxvQia2hrwDA0CYRBjCL45WsdEgUsett50hYe%2B8McXLlbojM%2BkaV9205A7WEaLw8UudBC1CTDGMItIDkAkfgk4GqP9wOoAHXdEXnYI%2F8k7jYm5E92qMIctZzFo2DBCNMdbEcpHD6x4sm7ZHDhcoTj5bP8N38Ze0n%2Fe19JG0ytchDiM%2F20DX5Awnz7LfOTLnLEBQr1VdU8bVsM9xIBWSENqt%2FiH8TXT0HbMpXWfQWcZjVhPJOEPn1AS%2FPD1AeLTTVHnNtS20tuUuEHhe0hf91ol4jt4I91XDzFx1Ncwu6qbkD%2FA88IFyksTpa8mjVVYc9aaMVg%2Fs3Qlc2dUH3UTFJLMOmpp8EGOqUBiNhC2gCa71glWBQ%2B0HLFvJGY6NIUxLNdJPOHK9%2BBGho%2FiUgqJRAl0sVpsV7RQNoF%2BFT%2FEhAjrfmskpCY4PlNwzM6aXfuiaOcroeU%2FEg29aLhedu15EWWSvlyZkM7VOhAYP5HGOsRPHZMyDAQ%2Fp%2FSVx12us3mJxYloEIPndDbHvDqYyjLC%2FWbJ4skn4Gp53IB2NDjEUyn2nnL7uYdFMpNelW3xWSk&X-Amz-Signature=e1e85bdefb06bfafb73f3da7d413750f63a7a43e18f008d000ce8ce923abdb58&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
