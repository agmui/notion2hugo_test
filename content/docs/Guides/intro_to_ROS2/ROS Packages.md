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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=b700810d0996e188cf790205b38b2031e8b3c004beae23b4cb0afc26fa8f3919&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=28012419d6cb07ee3243bd5ff413a59075e6218eb1a554c4edca5ce82b6912b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=4855b858967130cd472dbdeec943a84ebb0c94408fedd97dfaad4f6a0a2ed3a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=082cd1f38fe6848a8964d5803fe28ec9ab2b6f4dead79a4a47338290aa799f38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=6092df8bd89dd6aeedafa87ab8703499078f7ea17c87230d0c07d6394fa22afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=54b03b9ebf342d02fff4a68a8bc272a8e0e82811d8c7552da7aaf01b5a6a6400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYUE6H2M%2F20260607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260607T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEzu%2BDuY4ewzVY6alOL8ARl3AlDqJGbdnS9WJQI6%2BLFAiAq2OOvV2cuKkIau2m88sNpm%2FWr7z%2FNjtrQ97Ox7wjcGSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzRMMBiK9WqLtiYRQKtwDUnIRfe%2F7SpZxGqMZCNk0KujTOeHK%2F%2FCjm662FlvFRmiLkqNRFpg9k9QOxa01THiwdimZz03L7yVLibhMucENZS7VopWSR4%2BdVUc9aXqfHMC7GHvYH1DHFC9LGpg25eiZTRHJiqU%2F6MFGv3VMkful%2B%2FoGHlGOz8LsRQiZO%2BwPTR3QzqKdGRg6Q6ZtSiW14LWw%2BMDzwWiS59jPjkCAeQaf9whBwVx3Yd1uVbc54h3Qoi7qhMtKhZnv%2BP2rSALUZ1swdObzluQbxHSBxRnkvNNjZel6%2BltdjCMPftKf1orES270Ul30wTovxzJzcVVAd4gHm1QkmxPMslWOn1WxHijcyn%2B8818LcJCexzPcz8xjJufULN5%2FfA7g1QOibFEmHD%2FP%2BGLIU76rJX%2B97Pis%2BB5nMdOGF798bOXT6vYkGlqYTmUxSsMI2foGrrNpBZNpltx9gE1zEzz87KGUNeRCiiM5qtW0Z%2B2fFfb%2B96aQXTevvPDf5bVbl3e%2FpjPrvjZZA0FGMuJy5sB7F7ANsizTxH6ZijxYFdPXKCNaTGYJ%2BH3DwnRC%2BocVi0miJtupYbuVmimORT%2FeYA5WprmCTHrDsG93L%2FbI5wnGIfjT6kg2c9hjJ4sqRnJ0cZHFX%2BtX8qgw%2BtCT0QY6pgGWyoaTrg2VesQ3YEmwMQ44xtZwaMVEAh45%2BpieWGajxnv1aGdv609utWEV84yhRN65p9BgrFRTBZfD1PKrNiPbEz%2B4oChq%2Bq6ZJTEBmK8ljhOxaSIuTW9KqaegPy4z5wXguwhIQcmuy7%2B8eBkhT%2FqJN7yd7tqA94%2B0qotxFrKaN6PLW5zjnkj20OVbClyy2gjlulx%2FgTjMn2wawwJA36JQxIAN9ufd&X-Amz-Signature=93c89933d1f4ef8f933ef807c13603951419c96ea4986bb920ff3f88880c118e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
