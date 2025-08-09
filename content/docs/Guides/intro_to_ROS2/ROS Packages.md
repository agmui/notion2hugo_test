---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=dada7f49b3016ff48398bfc9d7c9126d87af8feacb423a803aa86f1d3d721070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=5518b62fe207e197894c52389ae31feab62b86bb37b48d697a99486528d3770c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=195fc4b7588cb6c13d7a1ceb27ca31373fbbfd4373c28dd3cbb4d91256e25b5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=3723a9fa46c74d6f47af7cee68801a19c144b02ac994d6944298af88ad5eeede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=dfbdd9856aec7a8fd9369b37915affc0f2c2e48d6a7eb38f9ccd2dc026786c90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=6a52c904777ce796022f6c6321906ed9d312b4dd5de29d5f230e264e4fb31914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGTIK7%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFAMyTeywankgEcMGluHsIcHVoDh84cZ11aWdhSG3oOxAiBFmvOHenueEEanJDI72cUV87uywEzr5QTqzrXdY77soyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYKyVhySd0%2BEswiRGKtwD028m5OzGnHXsdqgcy5xw9rqC3cpghM1XxTt2wG26shgTamUtgRHNfBIqaA%2Fv9r%2F6ljpKaV2L5DsZ5vuAKiyUjp%2BSP3szWPtKaUg497zAErzG4PgbcAb4bYggXyKl1GI9khe1AwINN5Tu%2BePhCJTSLTqGfaS6Fm7Q4IWMuQiNDc%2FVuu6f2of2LGw8Wa2mPtqOAG6jpWmukuP4QjxTMcgTGI%2Ft%2B6COt9NG78Z44%2FQ%2BhEBjrnLImp0V2oax0mniAW03wddej7Dbh%2FhlpL%2FpZb%2BXS5nclNmaW8oHtPA1OsT0jkrS%2F%2FpaHBQYYo%2FYPTPG7ovr6GfgdoJH73%2FmU8WK56nSHvJZR2Bew0%2BnelqTfSNBTclbDnEeAHYQf4aDtmIM8rW7kkgYkg6Z67qL6vJnL%2BNabDlXWs%2FGU1VKLsYCNMBWOjydgRs4TQIqzt%2BWHKYQLhENTmu6JftS3M9IKur2%2FfGLtHUokxMwwSZ2yc38q82OlOcQA30T5d%2F9eaDoRvCwp8rNMbJV30kXt6ONCBCs%2BrSxCTO9VBuxTO5Sj06Xsg5JvAbo0%2FMl24MF2Zswwv3%2Fs4AvrmbP%2F%2BFdvmeX%2B8IejGk0idD9xr3zUdBPA7Bvc8mvAbRZ2uJOjh1q3HNolgUwn%2BXcxAY6pgE925wPFYJGQWPY%2FSRXUYEp3JActJ64nVvL70590IVattOPVFO17PvE6jUzyFw4345n5tjUBougLeF%2BCbZam8W%2F0syYCXVRmmA7ZXBnMORWmAciwsy1J8A3xGixw5Mr7lTjn86ha4v2eakUnZJFP1HSwmTLAy9LlgD6hhQ6HgzXLoGq51J4scWdh9Sa0%2BDXrmBXhiOtz87a77EvzcQ3d2pHCBHXKX%2BB&X-Amz-Signature=ce74b846fa8b6c37bc3fe8227422010de4fb8ec4ac90d38a39642ca40eb8805e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
