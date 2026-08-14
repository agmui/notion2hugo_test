---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-08-14T09:45:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-08-14T09:45:00.000Z"
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
  <summary>{{< markdownify >}}What are ROS Packages?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=72559f6b71ee870a9473cd02d7004c4e6d9071f6f6703ef92c04f29d3f3ecc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
  <summary>{{< markdownify >}}package types{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=2d22f58e1044868734048acb15a8ab44e8ed1b727174bf0eac592d2188f289c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=c111e4af1184e67094bae644f70a15d22124f6fd543aaf29279691665353a945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=ec450b151e4a9541848864df2fb2a8491c21191dceda22e8a2300aa57f32bd44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=5ba2ddeb3581213f0dc8f1ec1291e1ce412e60b54fcd82807162c19c5c75935a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=9039063e34e4cd6b88422a17093498a8c5d3a65533d416a20725b98ccb33a926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRVVUNFU%2F20260814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260814T015557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDa2FaR%2FAVJRklBSBT8TrNdLSutqW2TK9h1615zj9D8cgIgds8x%2BxY8dUurlgXd79QOpp7ocn92y9g1ONQawQ2JrGAqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNV%2BjkeP%2BXpwtyTklCrcAyQr65xKIPguMkCZ7fsEo%2FHoSaxkYKLja68%2FQtdIpP5xeUUh0HAu2VSm%2BlU%2FaoM%2BIBwO1w9AlXVnZif57IttscS8jDlctqTBtk%2Bhn8hmJnmfyjmm98S5HSw%2FCL1F8hXNWFnb43sLIj%2Fe%2BibojvR9jF%2FyFcs%2Br%2FASfwuAkaLAYizJCTIHkepugUaT3hqg26kyas9t3ra6pfVQgaoyh3SEEDntvD8pkHQhrhiq84JqsSL5qVJSKhJ5JS%2BijlGhxcKXhMx6wOhmX9RDvC3yLm7tCMhz5kql4mPVJkGspQPGKTW0hJNTgX6P0xc%2BB6TS9hEuUiY4fOUxcHjc7M12FX7%2Fg9jSf6QlAMO1pUK5IVvWjcWe7NqQYRbimlK8a4ttNaz13GxyfAGRy5Z9WfozP68z3%2BTsIcfF6sr1sbEQb220s6PKDxMj%2BMUyUtwz1BI8%2FZbJ51wqD2L1E2S2oEtYZXLqiK7Ni7RbyoDcp%2FOaYJjwUiAvCST0%2BTGFMNYnEBRzRGe%2FKR9AsMRSUH0VQpN5%2BtQeZJmBPT42B7a%2FyD60xuTD7mvfh5kYstmNbNPQexqcXDt5rCdl%2Fjvd54XcW0sHmqGCHKes%2B%2BdeLRRspliIg5KVH0Cc0e39yx28axTabm7hMPG0%2BdMGOqUBWaEMV%2BMG%2FJJk%2BI6NDtgjTc%2BuywCO8o6y1q47NWORvG%2FzLbAra2S2WBVx2KnVPQRzRP7pOYp0SEYh6xprhb07cnqg%2FOoiPLCDtieK%2BPGctvxXqS6GkyQRC69axnNmrsKdRijkGty9tsu%2FmAMIH7MKD0FiFtB2hRK3e7vbP9XH74CJr%2FGAaTz%2BYCaqakykVV4eeude2YXmkgw6TIKQpTQ5JY%2B0JUA3&X-Amz-Signature=040be9c5dca7cf03bd627c0c5ff48756b5e00ed8fb20563b05cd9039423c91d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
