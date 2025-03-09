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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=150112031bebec9bf723d26a1137d5787bc7a2dee0a70ac05c490fa239d930fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=40c8a3d0cd5595613fab787fd002a9091eb6f67b4d0253e1e929b3b7ddbdecfb&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=8837bfe82346360c8c928eb99523a13f763b17963b0f5ce2177d42b4bc76d058&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=045b5c169c287734bf277a814bf04abe7c212486c48b558037c6af89275fc743&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=faa9d8d946a82ef493fbbd01cbaff222c1d8ae42938b765036b1e6b318fcfba4&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=7b2b68eaa02f30ea72eb3a5a8cd9e35c3d71b9b2d0ec3e79cccdca16677771ce&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVUEKX5F%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQCv2SkLgE4nbnuTCo7GL7%2BmIIfzKbqa1ICeJsoGUgh3fQIgQXObJpPyFV2Gj4QkP%2BP8lJxN7nvcEQjL5HCNS1EtgHcq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDFtCYLje3aZe8RtrvCrcA9IFmCfGOYyqFIAQlT5CZmFGtb2IW2F2zNFRKGfGn23z07EKeihmhLmCzZULe3ZbatWBo9%2Frh1mCnKPV5y%2FjdKr4zHRuliYt0vz0sKXh0vAcC057v0WUmphEBqbGroieO5Mj8J%2FhlBufF8fJchfqKlgLaNic2Fa6mXtfMUkvbf35uO0v%2BL3MgYF2cCoNBGWTWdlkuxm5Z4Lf3RzH%2Bpm%2BguCZKPnDFdmjnluYeBAE9xftKph59WrKCAoJ25mjkM7NPjsi02BaKX8hbIu7Nqj4b503tLh%2BHWxzjNS%2B5el6wHDpXQomHS15u2Mkc%2ByFtLxybgyNPjgIvkUMuZyfkJ5BrH7%2Ff%2BwmFzSrhzty1Or42cKj%2FOxe8Xe2brGY3emINDzSVT6kIRFzP9XO5B0WSHPkI8zEAQLToAeACyP5Uu4Rv4XXGyucbJiO8zWOnRwDtDRLBAdv4MuY6CMW7F795eTA1mcI4wcSZnCLiZqpULYyvAU1HWycCg6pP8Ptpz9WqhtskONQ9pbilUO7OiSGzSwi56KM1QouMjcT03W0N8vx2CmbEMAFF5vhHagTkSnUofmCQykvqLZzdOxIm0ufVR2bU6sl%2BPRHRAJjxtFZ3SJimrSDG9bpSM2%2FVrCxEej0MPbht74GOqUBITLqlqg5uZQ6wZDxg%2Bdx7o4NO0EPbkYbW4R7SNFxkkTRlw58Ca%2BEWhPDo6Tbf2wZfaunXeGDzo%2BQaw1N2o6jqYt3Vt3aJjWjKnFE7et%2FJwx4irEQzyEZKw6%2FlP3A5AYm55EHHIyaIoWiECtGvVE15XUEs1dTvuHEZoa2lSkwLPN7x7kNrPZx9joPaTdqFxQoM15yrulf9A0zLN3YQ9LbspBVTZaW&X-Amz-Signature=7ac6872ef664fe140e0b93792a9a08a4b1609e93333b23d6c5faf249873b7638&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
