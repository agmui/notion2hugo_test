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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=6c6b234a81896e6b20019e644e913a91a03f6d7a4b0ec8ee10d2ef979ad462d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=267b03573a8b3738baab7304c3ed1747d0c9d6cf8ec95cd53e359758961808af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=6e63c2449eb64a9ff1f50d9fdd8323c592756017bb3186147f62ba86c97dce5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=54a757db152edefa5cd01b8e75291c6c3349697c52d190941bbd4fb470dd9121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=abc4070d2a8b8d3575c914301d33384d4a04ad82605524b47ddbc9f2253c69aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=90a92e1c79ab367a496abbda116e0886a1c8ba4507b91754279e459f1b738927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXMTNAZU%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T170856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDiiOGtnXS0PXZqsIsq9YAMItKZBI7D9130ki1iXu56lAIgPOsjAi7rixjx2aEGGYbCofR4dvKb%2BToRi3EoEk6H4agq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDJ5wYbJQdPkKCICNkyrcA4%2B40T45XF%2FQT7piIB5594SpUdXlAyAiOomql%2BCkARZ%2Bh097%2B2hNkjWediA%2FA2u5TK2B3wQG8THNSevgz1Hvf523Uh2Z4ZQWgzXEYbJTPA%2FNJcwYcRAg93%2BzdHA9Bd%2FezjPv%2BKK0%2F%2F6Jl4ZuEIn9poq5xM8wp81z846NFh6tjo1FI7VSzMjH23D2qIr%2BQTzBSbB38h%2Fqx4zC%2F%2BKbqtCFw%2BzxH6SL9ytSlwQV9bjGq4eWq1iNpbBPAdsRrvfU%2Bfc%2FwhSNiKMzKaNx1Akz2eYuK4WyfVFyVwaqfs5wZrwVPVaziHgD0SqwgPRPS2j5XAKVdCNMUx8O0%2BdPEIZsRRa%2FXzi3An%2F6ShLQRW%2B5VfP03wLS7AH%2F5zEkqLqq0X%2FsNnEmgpfzC8GfPhYO6KnnE2K06%2FvOB6S3WkZkMF%2Bgj5ht%2BBGJ2tjvjQ0JzSLwHnq1COY6VFlRyHa7Hu%2FcrXQ6ybzls5HvRVgqtAPRzvYP14LhWQbQu9GJNoz7qMUvK4mTmI%2FD2QEklB5g0DDV8Zj7yo%2Fgelbnrs3%2Fq%2F9%2FTFDzeYohA3LH8wFgpNGPcHH%2FKl4JG%2FBqXYAsXRHID%2FoR1m57aRhPzy%2BxCjMNOvazjJEfQNy5x7aaQVZidIA7uCspU6o%2BMNLhwMIGOqUBkwOD%2BRfVlapjZYE7gg%2B5tP68tafyqVHSP1tPHWWVSlulATy0OPWGc%2BvzR%2Bp0HFKZtFrEx0eNoHJk5Rv3%2BU4sIVeUyJKNTw6dwK7Aq241VMFtbNBkPVQaCJvb2ERaghLDi5UsE9MInfLDlvH9gV4ewK3tA66zJS%2FwOkuZnR%2B949ceBUblIl29Mbov%2BwFJeHGZoKRucLLSuPWD5nVdZ88J05uX3byJ&X-Amz-Signature=6aa0e47c9577d8bd64e19904a34fc3cb42ddc1f123f90c31cf32e7b2b8dc9e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
