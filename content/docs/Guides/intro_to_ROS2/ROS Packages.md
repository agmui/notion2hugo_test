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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=6607a2b6ec0c27f993ae0fdae81c7230474c04fc7e53deccb30951699f50e3f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=408102e3c4fb637b2e5b2816312aee87a48c4cb9ab54889f7193e7a0ef9cdc6f&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=1e610dff0cef2cac08a9e4839512daa57adbb8d5d8642ff51d2cd36d62dec7ae&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=0566ec1ce376426621e5545fc67bcba94771159f68018bf1e918995475caecfe&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=22a62e86fe58488f34c7037c01bf00ad9da0ce69451453e336344550a25ed4c9&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=a6694b438a63a4208417c1331efdbb280d229a2e407c33fb6eb5c95b345085ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632QSWS5B%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T210207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIFOlQuVk%2BV6ZiRLjTXQsC53V1muc%2BmWnCN7QrMjtLU1yAiEA00DRWQcP2SqgARy5WQgoy97kdVvdTCQshgF41ldautkq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDBnDmP11UoC%2Fs04OSSrcAzWa%2BTeSIzLYlKaZwe5NV0JDQMUPP8ZE1CGgLCNSOyt9N4TrjwVKZgcTpcHWGmRQ4fNe6AaRoVt%2FWuPYg4w5pAoDqXKr0KN9SMGFIv%2BMhldzwYimIJsOJbBPdQz8gpKfli9u%2FXrBxAqA4kHqnTnNbC16vcog6S8JR07yvJTj2F7fdbXDqVbEBkuqXEFJutXo5UM%2FHISYL5EtfBK2ORc3Pm7iV%2B%2Bm%2BHB5T4QFCxKvZuO6HneiNDr33w4N0mSB8AblskAh7H486oXvWDwXa0k27defSjQilUMZ7yysI6y37bzSDKs9ZmNhFXqM63EPFpdsK6HFgZtBcaNVS6PCgZH8sy27hODy0kQF5NpMpPTBMzibv2i02M4H6Lz1ohUEnLIzLmy1hkMh0KGKq20VF4u35s10IaZQnd4NucSRUN1XVa2Wo%2FLWInbN0ZGKuCCk1we%2B0ZNXQ7ZdFMpDxex5u2mhc8ghyxR0p73I306Jdew7189D3ET%2BpwZF88PfpR64oYt8X%2BOoovKMcFr1ls4mpMJmbSH88LSRU6BU3QEPvc69DupH7Txzqsyx0SzBLNb43GgcGQXxmk6eR9%2FBKub7FH1DfpalxkcOjBpGnh37uZzMoSDK0fWOUoTmYfZfLUT3MMz1w70GOqUBePsLPKuCnRXkeukmCJ6At4efoTGltnjJf2Y9jFlPe8UXGEcVxdwoXuAAnMcnHr0BdqmgrvcHWc2hPR6rk6tTfiMpBOrWFmYbSS4hGVXqBgJ7y94h6AK3HIaonOqdGGM5RxNpesYVGC1nIMYDv3McV9weU7IhpqY0F3HTIXHnKjDM9dk5KN0CQws3sNqhsd92adEAwPhnDAIv2i8QFdiaiv8JpPDY&X-Amz-Signature=a0ec2225268dfdfc078cad03639b60259b1b8f5e8e4233a050436dab0d461f96&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
