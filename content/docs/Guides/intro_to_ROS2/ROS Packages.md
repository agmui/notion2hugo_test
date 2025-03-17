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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=ceb0a411e67d79d77804108c15be36c3fb2532b3a6bfec2df5ef5328eb5e7c96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=7ee4d0a815993425997fe95fb5301ce943c7d05ba25ce08dd853afb29ba7350a&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=057fbfa8a11b1a2d677c0050aac164341adfe59eb6d55044d8d93f0502e27950&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=572b9635833bafcefabec0c22699f4f9dbecdb003f6e98ce71f9150ee0dddf11&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=43942a57ac4c8e03df27e95ade9ad8a49475b7666dd0425b17f1b57304c4d376&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=899a1be7dc1eccd68a9ab059fafed712f63fb763a55cbb90e10bc0d520100535&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UX6AGJ5%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T091004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYODET%2B4lnrDbGy3oqyCc7aNMdyruYsHJUj47nw507BAiAdN4kGPVqYse4NZ2VEaU3N8M56%2FtC5xXuNPv05QUBuwCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMhZGkII7eNP7b46sZKtwDrIgfD5fVah6qLZujvEC4eLlaZ8V6zmxHtyogH4ftcTVW2f%2BWo52knpVkk2unbDGaETobVNo9g0g0%2FoK0vDOybZeruolS2EfmLIc5Wf2jtdqIPRlREhZLNVXPrQ8h74iP015I8kdS%2Fc20SdSqvfzuFkCf1uZRqVVamDNOMYc1V0H3VNCIpeM8E7C7o9S0sQjVrHDmrkrfRwO4p9pKaCcltiXFaNY%2FvrdLtMLTUCxNM4Zg06lFOp59FTCyXX9QFBYPLstBQF1rlt5tc5CBcv%2FTUCfsnUHsTzf7eDCICyK4QMyJBRrfxt6CWAj%2BNpA2MfS7VVvr5g0eCEXNqGUaMHPCQy8qE5KuOgDxizop9G4w6qrnaf4F3Obsr4MWqRZQ0Oxzok6RPCczxK9YBoqBaY0tplGhI77IQ7LV4bK7%2Bya0MENkgdwfpIz2mcaI4NZhQ1qq9T2fONT84KC2mkBMks5DVrhlmVMLx1OIv8lRPqBy9uRbLlOd61QuBVgdyKmkDwyr%2B0ZqdoQPPNRlIWHSV8CKgVG%2BULHvAVDeNaqKy71CCeDNODnThDFYGI6ttEcDMJSb9XoCGAg5YHknvwoKittDf4yu3%2FHY61echvhyA6IVgFEBjuknZzNXossrhS0wgK%2FfvgY6pgFj9ygwbv0sy3Ht2dX4San4SldTvNGkRuzHb5DE%2F%2BIGY4o2hMCLNmmduTy7QV6Mpk2vJ%2BMh2%2Bn7VaDjPpxl0VlTQD2e4QXOttwnBJncCFXETmmyHGkSxGur%2FGJ5pJeKUUL74sG8xSxQdzYifRjZifO3MteDzMQOZaXizfc%2F7HKlnfY%2BKF5yIJC1YHrPKef4r8oB69obO5rclHrJv7Gjsv2ejsUtqkzW&X-Amz-Signature=9e1f599caff067892b6d04185db54b9fa75e6b0126cf2c2a234279378e1e592d&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
