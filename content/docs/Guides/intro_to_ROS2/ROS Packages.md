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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=d402db574a3f10dd243a37ff699d7e56e995b800321dbc9101b04c15a7256b48&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=568dc4b132b21d4f306c2f5787d981fe34b02fb56e07e5e344a09ba384384290&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=5869b751ec1abeda36750544433432fbdb39b929caab20a01dfc733532e0b316&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=d4b9105474395b03998e5d5dbf9baa57791954a829bcc46ace5145cab034904f&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=d0782712746e2fa689c93e13e6ee5fbe1e48e5aae5194a427893ef0810a5ff70&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=c3a037ebaab666d5638bef805f1c8bb7adc3f892f1af3e244817d84a89610ab7&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UZNOLN%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIA1RFX4xK%2BQcAJhFu6fqH47zTelCV%2BuQXsg8BOOxWD59AiEA%2F6ibSmAPC9RLmEd2cr%2B991gX111Fq6Hdby%2F3IKODm5IqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCDVb3vcYzCDp1TUOSrcA4ahv0RW5Fb%2FEYm4XDoHCyydVyVs1KTSRfzIiHx794eQwmx66wAPJdSgBEbsfMFTQEoAyKtM713T4zEa%2BAHC69toi%2FmodZ8yObbQo0kZviGbasSWGbROPnCO%2FrE57nkor17Jb3WQNp1pQLlskaLQwWhtkphRi%2BsIfiQ6oSsIvMGQDxlzzRB15ICFuT1jqdQWyz3WGqy6U6mGzH4kQGVU73RW5j6gMsDFTDVAxJrm2v6tH5mBDeRFzZwLY8MKvy56506T%2BhcUlzK29oocjg7MXqQ3Kfl7857N7oQWmTp3Kv271GZlFtxzNeIM5cenkutpGQeKo8YYbFw3tkLcSFW9ZdTfRp%2FgEb1L4FmHTe6PRDTTGnSo45tW9tsC3Oae7yG3lMgSq9gx1R4EkhVlFLEx%2Be6BxEHJ6qT7jnMNSiiK9BFtuuFpH5C0QfPtpoT%2Fse1PtXSw3Sk1AoKf2qRUVEl6rwsjyy%2Bm9G3R4V%2FWfDE0cauY8ZEx1DSUmeTUbMmtuxYQ666XZa6FrbtPzk5vkiCEJFiZTzf0xzhcKvycSccuyMSMoW8V1RvVPUg8%2BIdjMovVPaJWp2Phtkb9kzwdwgyGZ1BKHLbRzmTh7f8exnU%2FObeciEsC93Yj1L0g2P8UMOfGpcAGOqUB47V%2FmD1biqtBXbiCfgldL38vlVKOXVHFzCYeDeuKiEQKl5b0hT3ByJQzWSktcU46iX12UOYWEnljXgOkJBrM%2FOXa04wuuxjd2I4YK3TeyQqD64vLpynSDm%2FIJsKPD8EIgzD9fUnaAsNXwD3kqMM5eZbcqRPyVTKkojs7cmf%2FOI67YZX3WPRWRIv9s5WJp2JdLH5ndXR21ljoM4JSaLKUU1%2FSWTkd&X-Amz-Signature=c11d3b5b63ac3b7eaec0f8b8e57721f1679b56cab6b1ec4e7cb67b4a916c2daf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
