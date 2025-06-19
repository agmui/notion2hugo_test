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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=37dfda8da8f919483e767520a80d955befb3f9a7532373ec03775282d110941c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=9e715417cfacee1d0d3d45b631d81fe21dcae68790ad2378dac3bfef725518ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=54bf0189c28a4ec821f03ae860e2374f02814f03e8088ac0a26b96086e4fb074&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=eaa6e9cb9a1b4cf42e0dbf0f03ae0a7ff86acb0cddab34f25f0981dec172cf5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=3cdaf0b2356e340471d5fac1634dad94ba100cedff0abaef17216ce43e4041e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=209a4d998be7a2f41c7149e6f250a61111884cab7492275f9a5a60654b920d7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWXE2P4C%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T051029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClha8d3ppyN%2FTcsQx0DTzM6njBmXH2bi3W9DTuNTs15wIgDEXZJUijlSzzOpAGd9Ci1rNIqUcxIsHbL31NcKWhdj4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNkiESBEnmE%2B%2BsVUpCrcA2bKhVMyA6QteLpNQrXsBBbP2IgR%2FkKOu9Clm5SgXGEJfyHarcJl0TSgzCtfBBMVMvEp7Erb0wfaTXiVuh%2BN9uZb6PrUE8fR6dIqlrPVVHL0kdEmVsavSS8UKoKU43ErGmqqkm5j%2F5OkyqWvBbTY2txncr2w69j%2BRYM9tC3UG1fsQSC%2BmfyRLmaz07Xt5xGIiJbhLOek7dDAhz24gLrVos40uY1ofZ8X%2BSuQjUpseQvLxgNmPdG%2FBRRcyHCPeHgodVipiGFQdOCwqTfKNG1peNimsv5wdRP9XZjVpdyi86oJQQMwmYgslG545eAcrFPjv1tCblu%2BRzFK4wDZFLDT0nxNYLTFnbczX9qspxLSX3%2F6Ch1SyDhzLADagJMQXtMZboS%2Bbm0lRMwmCv1Ts7o9EPPP9PjrQQLkXngc66Y9AKeHbzZRwOQiDdxFsflr%2FTn4TZx%2F7FmEya1CakmtaOCdP8LhlBSEqQ7yzpPpxB%2Bk3aMkNWLZ5yDVe0yWaQuwRPnX%2BW%2BA9QPc2tZICfxs4hHxv0MfkKW3eW06MEBxe8a8MMGugMBWvfeBIlnEBQXVUsXad%2BJu11%2BDGy0qClmL8OAbdaGObgPuuThRoCqDPSNdbgoTGIN%2B7vNBeVUyd7SFMJu0zsIGOqUBD%2BROcB8K4Rh1CzS4Aki5eRV7FIcyoLyvq1438NMRa%2FPO3l5wy24DjkztLBNOafyZKOsuBZt1g0Yi75S3DSrCJ42yBfQg%2FY1AlY9juWpheV%2B4m91g1MWZWsTiFsH8U2axY5BfQDt2bWoX6DR1HBUtKsajPYvy2Ijb%2FO4vbdTA%2Bir%2FlJwnk2Vo1Pl5rFVOMuCUSIpgIWcFTOPhqrNAv3cxYqyhcRV%2B&X-Amz-Signature=3526e1b92e20b0a9bc7a67125efcff9c054b77101abb88a5fb495162620b9380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
