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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=eec5a9e92167733e1d28e664e1e4d7c9f96ebf2111975e4994e670ba4269b59d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=8fc8b72c0a1fab68ef6d980318fbc41accf9f8e89f5677c31b76dcaef9831a24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=40d633d7d9ec4e56a6408cf2f4bd5b0e76f682daa1aa426cec2c51e853e8c92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=bb197981bbe30c63cdfde01ae8d874d3e39524b1ab36246668a3120211b13208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=64c46c18210e1aea0097afd87846ceb034c73658f7a61085d4b9df103bdff8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=e261b7476dc03d6d964c58f0057eedd56a3aac92ef91a4c67b30cd338e7090cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHF6VI7A%2F20250917%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250917T012255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCHdkm%2B9WObsSd9z9XR9%2Bl4UeuvGHz3c7RSQyNKilL%2F2AIhAO4ut9LlizMzLn9ib4EWxdhuTN3hjNR%2Bv1hCAnGZBLXUKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUSxtgWwf751XxcSIq3AMFu%2F9k6mxXMzejHP%2BPS5jFK%2FWdM5EVB%2FTbFhcm0yBvpPQ0SncU4s9Hb881NFAvtkwnLsh57Zvwoleawt2RGw4%2FMJ5qn%2FfPUHswG%2BlgaWButTiDZfKi%2FWwhI2Fl4aMQOGnBv0pZT5ZwGvDF%2F%2F7ukz7jRIAfZIpLGnEsalPQk450DJ6JTqk8OGjYNB0mbEtGWbeFVwq6MZsLT8BGI4TmaWEqGpGUoQXhP2allcRGk44UebPSkItaZpPsGz8nPeWtjqaLH1Ae9yQIdPxnLSqP7eI70Ys9vwcrneEurjp5OuSUqDFYx8C2iAq9PT0Z2xxPeFUzltdauYTA3nDmAQK2AztcRkPyfEC6CHyi0hyeUc6B1pz1HMeA%2BxMJ625fW1W5%2Byy3Oc%2F4xXL%2BP4AGA3TpIJek252YpsIGOJjzw8RSw2Vw8Azxw72E1O7KRgtnUhOoUHdXvujz9aITmCH%2FA5a1vEKpQDSFRJksqZ6Y0Uo%2FKrliD%2BegsH5P880KzcdXqqTo11bn2M9D%2FpYnRVT%2Fa%2FfMhxmc8GHAvtv%2BkRMPL9Tj6ZNxyUzUj2GeT244FnqG4WyvCyF6ZrOu%2BWXup41I1c7jb1oQcI4aclr8kbcrTkHNRNEKv6h%2BDv%2FbD3JsONcpiTCS8KfGBjqkARQbYQWD%2FpMuajEfqTpD2aYYBxw19Ovxp8GrOxtisk5A0Q3NVcI5%2Fhr07vIzZHy5hiVrVl%2BvlHFWvkz6vo1%2BLiDvmp%2B6rOwjM0AQjha3BnZOFI4Hq0CclD0twdQ8lQ14h6QQt%2FDMerdlaKA8WQZ%2FsYFXpcR0Dyfntjz5Smd2jXaxUR3KxMDrxRl5FNEC38flu4EtMljdm5KcfYZCKM2JpXfqjB60&X-Amz-Signature=0fb06962dda13d3c4df5ddd6781bcd49e7536264ed45a231c219e4d528d58e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
