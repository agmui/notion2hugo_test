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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=49afc7eff309d931bc05841005c82e19700427e4d65ecaf3b563e33ee717b362&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=0259a9cb198eeedf67e6dea9a14d9c1adecc3a6af3b6efd1e54a540fedc00cb6&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=210be5cbbff97177d45edc10dd7ac5bcf90a99b17cd5d27319b5c065eeeeba56&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=3dddd4a5e95c76e2f7f51271d5777015c0ac46c0069dc6879c7d97177c0d302d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=1b2d0b0265c3eaa454e8885e4590cd925f59a1cb8a24b5acdacd4b8b7b58542f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=5cfd42a01d69ae1cf43587ae42dff22719da368c126e41e17c783d67a6cbf5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z7VH3EE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCz5DbpFI1%2F0ecaeDL%2FFWc%2BizanteY7ShpF72hoxXHNIAIgCombI4u6jVXQ1nzPZlxc1Ab%2BKJLbTEc6fqPALe5t6xQqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2FQ9TGEk1DZhYb36ircA8AHGeZdH%2BrsbEOfpDpg0A8XjCrsPh5ONBngVFe9%2FAePV15Z%2BjWNcyhCTRGPXt6tZRkd3dXYWTfSi4a5VGnnae9T20%2FyunFtzAgGnAFV2d0UXIRhL1HUeYU1BeWgO6B%2Fpm6i426h%2BbQ4wTy6bmq02bblkjtCRXHFsXBYyMNhzAzt6AKy1o70OMLgTCJ4wB4BuG3JlG0esFC0OlpwRa%2Bt174h3E0ZM99A%2BlKV%2Bvq%2Fw3JdphJRxTwDSAbBD5qTIvKVkIFM9HquQFCTyne%2Ff5vBYeLk3zfCsoOIVikyaSpjDKn9futgh765O4Vq7N9dCNA6BVkRTNFF8yx0K%2FHqXziU4VUB%2BDKhqQ6hULFUzq7qKMlC4CLMVWWrNjhdg2bPQxxi5UvfLYyn3W%2Bz1kb9iGJsJWPVyA%2B1XwZMLoDf2gA260UKd6NG6C2Hnb3KQZx15MFfTvPruUNEnmkXLlwV0nQoVJdLQ%2FNbnKHFoAkOwUmhrzndKzkf1riyd20KdbmYeiMsRD2pclcSblLy1TEeIPGpnXgUebIsQ%2Br1thGNpB%2FGkBw%2BN6WwfDMarCgO9NRzTjWPFbgOB1YHkZYLQyDM2ppcutTE%2B7Rta7V8Rd%2BdTtxkYSFfcBd0%2BMdL6mx%2FqRFYMNHY%2F74GOqUBWxabpem9GZ9zd9919v8DmETTazHmowfOJ9rBnmMpWcAyLZ8PhfG2EO2U2LfvDdRx7zpJMnqt%2F7U%2FyPnYqqw9KVDf4Nt5IVmT0n2MhGTTEUi9nejO9CH7ZJyBOQS%2BsZ8VpO42L7TmTlZ68487Y5TwuxsKspo3oETRu7OFZKaYJMs%2FuaYHtx%2BauLC%2BMJqlmeNltLKJ3ORVetWt%2FxAkMEoGStIMgeiz&X-Amz-Signature=752bda908bcedb2e12f786a34bc6bee41415c97b573e49fc4d67d564e33c2b44&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
