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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=4580a541eddc8bf672d3abb2147242de110b2236adc8774c7b52af9c024119e4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=f335c20a082f83e59ad7c0247ee238d7c570c1b256f85c62485526f374f88b01&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=b7321f7bd457769f77af960c9c9f7c40343ebc9966fb9a96f5bca1f5622ed96c&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=1856a1a8588ec1516dd5d3ebe102b2672ec26670b84f5f72c057dd36bc2ee2f4&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=48fb1efa6598d8bcdbc5e12fcdf2e3018c05c3c7a612397a446e4d792b913619&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=cbea7c0f9a48ce5bd871185b8ad804883834cd46493fb6357f9a7c4f32b7ca99&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVQ7YJWY%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrcHtiuhqNOUviKPllfLKvenGRhiic158I5%2BeUuSiH8AiEAka4EaRs%2BlCULUdEUodjYfcCCp6xwQJ9rqulxpnneT6oqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGaTxIxnLOoWFvHnPCrcA%2FHOWF9xFcvPV7Lp9WaiOnh1%2BlLUcm3T3Z%2FsnlC%2FJX8L8YJD9ANC%2Bwc%2FJczgBC%2FbKpxqS%2By6%2FJe%2FFWDAwNiJl2NKlL63BO%2FdWONuaX4TrDfAuGHbwhppLcx%2BJkRpULGe9TIR5dg8MggJCsKtapnnpTMTKfmR0VhgRBkb670BbnlRW0cIvibi8nK%2BkC9eLWm3s8vEVh1zPPAcTMWz1Isft43aCtJ8FJ6%2FHHwamVdLHoRNS6Dhz3UG1PLKrqhh8LqRfJd2j3YpUYo1ZNfMOXxlx%2FH3X1m90QD3eqABV%2B7DX%2BD4lBJ1NP0YqTanw1F1Vx7KAFNZ8TLRZshhHe%2BZO3njX0cvTO4ye%2BHScbAMvSwFEpEv86BidLDCogl5%2Bm95CJ6NpCXhGm7UMkvdS%2BqbrlnsHCLmR5%2FBW8p7%2BmX%2BXh3EdRHbYsUqXJQ94LLYWW3vdcBPz3xS8dFSB2LdLfDMUBZYz8w0W4sibF9MMFKCHGn9V97N8fTkCWRp6dti%2BLgB%2BV3pVTL5f%2Bxe6wOpj0pws1kjF6b8x3XGbqfyMC9ExzamCzYgxwrrYvNcDsiWbdoO7evujO81VVIiUSdiGXVX4TDxIJrhdAjqlbrmsIFYyycA6Y0m6yQF2M356xVdj50BMPil6MEGOqUBhV54pTI6Mql%2FpHZ7MkIRefaqrcmkX7I0jwvbcazpRcnCqFHGaEddkRVJPmDe%2BeNK3reGT0NbSlEMb86V54EWG%2B9t02UqoqKd4J%2FpTwvSBtCEBTX8vNsmulO66ZdTsCv5fOGXKemAAjpRTIMsI2IfwlrNmrmzK4DhczlpUmfxT8BWVTLOokBSOWqTg%2BLTfTJTBqUehO9IPhaMtg5mwaYQdNUx5Gbd&X-Amz-Signature=92ced73dba94d9cc458ac353b39bf72800ccedf93e57e1443f3e22c26525858d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
