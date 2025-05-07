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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=9597b25cfd07c548de664b64a7803cf31af13803194d1bdb76f079d45cd336c4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=fb7d43962444a13f9266ec66542712567291b278d77095ec16ee17c11ae36acf&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=a377354e6a28b7c6529158b5387202a6962c8fac2e99eddafa0d32de7f4c0ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=4c2664af861c468d3de65c13d03a0506d1e7778e27e791f095482d2e85e890fc&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=cd38af5cb5705fd2871057b8d83982430d72ecf485dd9e64743384f597103ad4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=0c679393d06d7e1745ba1ab2bbfc520b005f8839e64ed9849491e49d1b86ec78&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXEITI2G%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T100942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCfQBX85TYyNBlrgGCYh6o%2FqoIR0sJsbTS186V7zCYEwIhAMCuX79Ew9RLHxOgYNgYT%2Byc4kWJez%2BvBjXtUWrSIxflKv8DCFkQABoMNjM3NDIzMTgzODA1Igy6gngpKcDl2E87nzcq3APNBsal%2FJKggSq%2By5Xc3U1R56SZAnm75cNtOJi6DUEOPTjjOQZRi9CW0%2BVYEPcm2LlaMS%2BnOkGS9pBuRKd7xdl8VSp9B6QYUS1%2BUSLcj%2FOO6akuwCJbCn%2FnD8pXV%2BvSj5Fb7dPBNi5ZiyTRsvt7sS%2B3%2FIWxv1SMXiOjf%2B%2BDFo4QiCfBCANLW%2BbQLWIB%2B3JpbTASzbj7CBuDEcqMQKBKgSKUSj0t7jyeFeolW4gNss4pp4uCRPlJ5xHR3lOUrBmcnt5VPutKz%2Fw4AtidUCIY5m4eJ%2BmNFm1tGBz7YO1mq5bmE686m3MhsaW5tcDiUi%2F0Jx02zC%2FKr4vqb96lXGX2Z682%2Bbh7%2FGAxD%2Bt9rf8xnGZ%2BSTgvseMEfxmogKC8eLm6PQ78tJHVXPlJR7V3efJ3U7YRbx47BpLCuH9t0p91ME7zYsu5RRr1my3jU5n%2FgMl18qxQEDQANtHIxw2uxoT%2BJ2WWEQzyfpixVBYM4ACXqziVF3m8jtqHKUhzWif1g9g0NuRvlYN22NTdfvlF7XOEAO4atOF4KeZtUo%2FWXaDNC9qg59rT%2Bn4Yacn0OtjIRvcgj5uFt81S0ywswg7mI6otXlik0xipw3Hf1RsWzhcZ4y6Us05sQruzrmQiz%2F782zDisOzABjqkAeuCX6cUp%2FFzdHKhMqVsCac2qjKglTVRRWCzJnNCx76NZY6ZjgBVKgM5L6u9BsG2kWFKYTGv3Eaquglw%2BdP0O6kc%2FDLp6Fx9MDShMotFFK%2FtjxWGmXAaPb%2BNW3D25Ms6VpTOpB8S6Gs2C5zRP%2BSS4M2EnJVd8H7M4C1G8xCWVV%2BhIXAzC7SPIxt9wb6wEmxpxKSu4FzkPlY%2F%2FYTMVQcx79%2F36hy8&X-Amz-Signature=4406a619cc3f313f4036c49d2e9310a75a75814a1a54f6fc07c583cdc3d10de5&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
