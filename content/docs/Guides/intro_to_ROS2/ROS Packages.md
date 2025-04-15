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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=5de83e43e96c3241b5c743936128fd7fd57f49b35b94673dd1da78b615cf6c6a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=ed287a1f4d3aa7c3493e3c6a874dd92a5e9c91dfef97d70e4465fb6e41e13fdb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=4d680a743a60c0f95445fc953a6030a108076288879569a91241d54beb8756fd&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=2a5831ca05e21c4b5ec2889393d49aa1b6eb9be4df33c3296ebb55837d140387&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=fd38cf65011e7fbd0c456afe65fe52ad9c7174a0eb2e2ac1cfa412c39dedc1b1&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=bfe352d2f11c75cc7ecafa6a97c9633d92dad7418e74fbb1997f6b5cb566971d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWL2XP4P%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIConteIiRMLUrCe06YqmHaR6ZsKubTxh8JCq3tQsmRN%2BAiEAh4HhFCTp8D6jfpH%2FHFrPgge3CjAFPpE4qq3HJMoZQuAq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDL%2FpZRqkBd3qQcwb3SrcA3c57nuP9n4BbFC4q%2BGOb2msWQ95uTuZdhmfaKkXwi9Geoc83NusTmdTpnE6Xcn23FQC9lq1baazUUUDDSeOssLrqigzxyfF%2BhwOcONXOROHGkZIrs6HqBN60u0IHW0xEhzJAAc58hOpzaqZRA%2BdE6PhD6Pgybgru%2Bcx4bikckHpydqtCA%2BjufBdCC5k6yH%2BUhwrpUT7LQS0IU53i2WNyZm3Ta6oAC2dXj7ooKpPEIpvPsvtScrHfV3Q6vvGp9WQxQJRUhtCpBNrmmMPxHje18Bfp71t0DmSR3C73v92kK2adTG0gHH%2FDI56OGQkOJ%2F6%2FUnOAnJX%2FqF2wFlXJRMbXqNFjjTuSsOHcHcbCrBcg5LKBzFFva9ZkvNHVHWN0RGmnkLiyTC4LZnVLx%2FSfUWnWXELTBk%2FLRHg9MmlEcCOtPLKzfxXGEAJwQaPtKiusyr7pkMems8DGI%2FcCRd1wSAfmPlr6Vio9KRWHmVlgi%2FvV4NZuRc0YkX2YztHOlJHpJHOA6kOgr5Q76wUUVwzUOpsaRQ03AGGb%2FDuYFAhmblQs4u1EcvW9u2XF6Z59yHif0jhPX%2BI2u7pHbO252sIKnIqQvRNuMEbLZ2x%2Fl30eLjDF4SIZh8WeRRoF6EB1fNoMPXQ978GOqUBKCU0oPClfzZpW9RRdieY0pkflC3KqfD9mBGYviktw0us0d85m2kkHcmSinCyaGjJgCHUTRFdfPGbBi52Xy3yN7Cqlp9b9JcmokZ4NGJO25NucHI3OJdioPcU0pLB8f10X0wPeU%2BFwXbPW06KbNVfTu61%2FA8WMbfTaPMU5GF900t5CoVP6MZCy2IW1D3n0q3I01rCIovyv0KzeIWsbR6PgaziFCCj&X-Amz-Signature=f27a12befd17f1d1b35dabba9e572ef9dc8127771d93f47b3d1cfcdba22dc902&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
