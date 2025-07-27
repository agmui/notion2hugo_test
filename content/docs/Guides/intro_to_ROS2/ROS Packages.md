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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=d8a313ca17ddce7636a40575eb6d8e23b2e5cf5496beb40901fa2a99c05fe9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=fa155b080e95b24d0b45c595ac13e64555273778fb3652fc37b32724a76f18c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=4e40bd8bad5f65a00a77337648dba74357861434804f65c4ad341fbb34779b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=918c105a4dbace77a2e50f478f6a569aa3530d4aa36f98279d07eb8b847e8b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=01bdf6a101d13d330c75015e4d5bae4441c46974eaf5f10e18c934ac9d1f2bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=baee08065f4e4cff0db987e98db6fa3b5fe3bdc25b14573a449c63c7244fa45a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCGRWBH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICtwgxE1Dun9YKW2h7R4DlZe01rnpJPfz34UR8BIfjFJAiBieEV1FfnCKO9FcjsKFE2gNX62484SCX9R2V2iSfXRRir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMPpQS9slFU2soX%2FE%2BKtwDmCzwJocu00z2teByZqCedXOdghSfh%2BTLeLmtXYQI8wqERX%2BYyeRXViO6WarXyyA8zbbv13C5G2GXXqq6qQeCh8u5SrikMqYLRxfhZvvI2Ehq56Wo2efIeaxYGucdyklMAPISDJ%2BIbLKINlipcYRrJwt71K0f1BJlPGR8vb%2BMf2KtP0x8ge8hhRZeFyceC4XYV3pjcPnvHpBn5KFl0OlbyjxfFNm5vcmXgROhmsNMYovPYpyVtOD6GEVTFQwtjFjD7bEm58UDT1VHVgnFEPAW5Tum8NLjw9TuRGk7DXUspZJkrkJFjNRhb4eiGbxc9OtsnYWJk0BynXcFZ%2BHvGU7jb%2FkCo6lMFfMi3vEqWtMN1eR0uVQrVefk%2F%2Bb7PwybOPbxXQNmjYZHb2zsUmSazJtHj5Uv9faQ4SMhaPbxry6vyTany0P58ciKtSAFTYa1lvmV5hIGuYrApMeZ6V4jECZQIRZRHPdHFPUkdAYZEd33rTfhRtm5CnxYbHNNy%2Bs1WZdvzkhouLftwGKX6pR0e2byMU72rSSXie%2F%2Baukk74yY%2BkZp%2FlC%2Fdb%2BQH8eKxB0XUSHrfll3ueFoEdKD5Eszs0H3ypsTwi7dyzaNAKshzotxIGIk%2F3HRnFjC%2B1WhpqQwpaOaxAY6pgHNNlVz13m4YE2CyP10CGhMXdc2c4A8dltcD1%2BSSSWfPDsKJNkswhLfTH6VpXkyVtsr1LK3Tu8k8LzJdcAHG2NSQHXFUDQNkrJcsd%2BGzoI7BTsZ9diLXjQ%2FOi7C88HfY55mVHEkOYuAFmyXMEiBNaEaRYH%2BUwyQQXlOeRY98i%2FcTYrCP0M8LFi8SwRR11V8O1zHXtl8SaBagfcjEnej4%2FUByfkFT7MM&X-Amz-Signature=ada6fa3465ccd22fe350d3b9016548eda4243cdb5cdc44839d56f9376b01e6c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
