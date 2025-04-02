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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=1a47da342195a36046dbe3062ccc438a4b1206ae78f409226b56c8cbc4477c2a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=f7fff769cc0f696ddb3b4a3d4d7dc38239139f4dfcbc514df8057f92c997bc47&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=96b29b5b5fb71bf28e913ee2360e03d9bca8d9f7da045e5ace8e405bfc20b4c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=d83e97c69793b2796082ca29aa425f6d0b75dcdc2b136cdc97c4cc99f8722b1f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=ca9a48ccb4c4ebc611689caf6c8545838a2be60d2084f89c6e98b6a8953459ad&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=2acc4a20b4301f812cf7b01c75829d2469a0126ed5370ee65ae0666e35c63db0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BUDMMMP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T200916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQC%2F755%2FJ%2B1DvccyCXMoNuagjue6EWKj2DrrbmqQ%2F2eRjAIhAKFcgbWqTbL5Sqxp%2Fc%2BrkitnyKjDd2rmYxss4eF%2B0qsjKogECN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxp361OeEj3Qe9QoFQq3AM%2FUBYPzl%2Bx2FSmqGUhN1f0PDz7IF7M%2BVGG5sgChZUvSl17gjcAuT2nLRoxGjAZm%2F2ekiUDiFDfX0y%2FOW69M%2Fgg2Wjk3etxYu8NS6a4%2F617QpMUSZt1OGwEeve3x%2Bfbs3gUUww4HTZ82AcoWm8BV2ctyDA7wsXy0OG%2FdXu1lZNB6f1VQB6ezg4D1mgn0G%2BQyCn%2Fb1mZjU8oSVnt2%2BJZXfquzes%2B7EJzqHsJQ8uwgc8VFFwMU4oiZb5JQNqcN6za6T4lw%2FLKPwwroH71D6i%2FjjClrY5oK5%2Blar3bAkyuCHCVhRW%2BNqKt57Hjn39GFj5uWxM6kiBEVDyh6YsjU6TIbuIhX0cetG92YtlUfzRYA5ao6fnXMtoAVU7HRyq9OCVeNOCwbYgDoHn8S6E0WSmWHPtVOxTcYdkNi4oLlaZlo8q7Q48%2BCScQimj9DDICO2EgUmL7VwQgOUcNtOLiBpXEiX3k%2BeBX1HYD8TRYU%2BOoyXeRvPymTvwgPpSGN4NhzQqxHqm9qca4RwSF%2B7sqDJaJSc64o6h0%2FbASmr8%2FAzDv4WX1Mh%2FVt6UwDhlRtXHprQhrR7y%2FnS4nItwyOtX3CT72s1lFsNHqG9EfhHvXAOGiqnePvNoOH1ZC3uh364oBFTCOpba%2FBjqkAXfSjuEcsFEaH1%2FNGxrJtbWeKjByEEdguA1Wjx4vOSE9CbawVRBtWd7Z%2FoGBI9Fm4o95dNuIXoG4pYQ3lHoOy8Q8F%2FaGI%2B4LROCSFz92HRtMCBo3jzcoawIP0J9EAsJzc69Ft7RkBMhCBUeD%2B3NGr4BGwPsEYT3l%2B08GoOpB3QRv4%2B13B3OzVUB%2BebX8YH8LbpAzHCwZt%2FO3otYS09ut%2Fgdm6EqN&X-Amz-Signature=8fa718db467578d1fe75f9f60683e311db8788421970d350dd09be9da44f16de&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
