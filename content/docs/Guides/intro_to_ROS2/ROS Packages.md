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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=e943bbb3fddfe447269e3e347e92df12f5db9010925467a6aca924eb507c3b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=cdfcac817f943f2fd8a1f75bd1e77aace9540e33a956fba83687e0982627204d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=392c3c235eab0db8206fb79e9550bef268035926b4f068b5988c2b124c4ad2b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=d181af64febb527d245d62b6cfe11c27c2259da445776881eaf00f4c2e7774ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=14b0e618832ef0cdde5d8fbb45334f94425edd30841512b41eeac09f6b9589a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=23c1e3f9e899a6384a330fee3ce4aeb0182851e152df99869049b81dd8a427b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3MUZMT4%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T042017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIG6Rlop5x9L4r65MIV9AkTYmSyR5nXb%2FXjcbF6bM6wFeAiEA3b0LBp4tcp5bQ%2BD1j204uVSHamOHk1ux7VzIkNM9X6MqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7YAr9EZgo3HUOAzircAz%2Fi92ephhHGpIiNmIAZPuEkznRihmBtVpSs4Yqh%2FvtbQpIbXPxmSWZFwH0qow9IHtUdsvhk4HidkBCxMwuJA%2BPiJVhAv9htDJ1wFOUwTJDlbih0dYFDwFVl%2BaJ8gIJyURYai%2FCXfTuRGfvb2B3taHyG%2BdSpt01XFPvUVMdMPjgfaCyK9TlXfxLzvsYdrDT%2FPzVxHCPP8EFzwXFRrbG4cLSpywCpihmedBgu%2Fge9bAKw7pAye9Zoz%2BBPQNATyMB88N4AfGPuhPv6%2F0%2BOAjemBVlATp6sP34QRmcEDF4Boq%2BzFgRwgAzn6iORmqlFUnr4sryRSKXGBTymwzDnpczwpYe%2F%2BoYePGTXO2Orsg%2BW8vIGw4tDQuXNlqYi6d0bQhmsN1RWHceHGkEmINpH7YtUvi6McZWeRSOVak%2B8tOiDSosZeMKs2J5lY%2F0nKCFSZIDqFRCUe6VMYEYYma8GaY4fC02m5r10gatiUXLhNijaCkGgM%2FbnDSPDMRdI5Ya013EdThcuwQaHmX4OKLBuWKoJUVUB4GTveJNzgM76X%2BJxgeZjBtalpn5VX4Q1DSNnSOMa%2FmX1YlMF8PbftT%2BdTdjPehGDVPaRAHsraFliE6HX%2Fp9lf7KHLWSjywI7fp%2FQMN%2BEssMGOqUBXIsVW01fAylOdONo1GHsME%2F6y5Cau7ovCBtXUCqGwg%2FkG%2F38sYVnqD%2F2g6vtTxW8CsMVEx6EEa%2FJ%2BO%2FmEXFXbZoqJIybNcl2WtFW%2FV4q8nYbu%2BXqsX9HgwUnZYR9kWzeR%2FP2LjmYuBlmN3VocscylTcORsfm8gHRKLesfi%2FAMb3R%2B1r66RmotCBvgrmPFb5ajWaUN5fmuU6vS%2FEgqP9ZPAMIvm7e&X-Amz-Signature=a0189669fc16cfaf406bf1d79ad14b1099967d1ea0d2a04a7a9a8672d13499b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
