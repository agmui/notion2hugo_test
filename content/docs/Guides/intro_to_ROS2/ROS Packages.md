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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=70d8fd7a9c5f98775a53af6eac5357dd14dda25c5a6f7761b907b6809c97c441&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=c4b2bcd66e559ea52b849799e152dcdbe86aa582478e5af9c98440eeff34b259&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=98149458a5dcc8b39deb3c05afc14f9e494985a69cf1fd8fa35718a5e585cc46&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=6ddc75c27a602fb9db88951a027fa8729db38363d22772dc683411d203812cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=f4c2130891c78004d70164c0e2b9dc1c2fc5056d1426245579cb35e684ac5b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=63683571c7ac4acd530d276eb36af1517f37ad0246ad7fefc95bc48012214d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642K4PIKA%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T230732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGdR%2F4U%2Fp2bLoHh%2BNYDP8YVZqHcuuYijK4HnhPzLSkCtAiEA3xCbSzzIgBo7Tg3BnaeYnjVXB3FwrWwkbZk%2BSIFNySUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzdWEEJLy9%2Fh22ziCrcA80%2FyjazoGaPYZa9K%2FPB88z8oYhgoOdIMXNYmBTVxufAMydeQhpQsTmB3p8u6XyvPd7DfQrPNNdG3UEuawn00R0b00BXY9ow7NaSCTjpHoC1TKo8wHVqiIwhwOv0CeVUH5QWqgidCLytXFq1TL06FHfdTGZmqoTp3v1b4XoohdFWO%2Fpudh40SNuAmwI9ace3wOhtUsx%2F8gxxpAlBQzC06v5TDeicmCHWJMHSfUKzDgudTwXUtMvQdb4N4Xbbxc35r2CcZn88rmxI73UdCfHbsfclRw3taV1M063YqaT9wyFmsE7fZhqIOxMoUQhVAARHUZTn2HZc1f5MnW%2FjQINCEUBRAoAyM7Y3A%2BCl6ild3HxA4vpuQZ1wgctjhsSlVCIDTs1lhr3uDLfG1soU2iBwcybxJjnMTVcGSpTAAvlnu8CUBC1yYJUa%2FFt%2FIPpxU5jI9BZh2Ja7l7ADdiYZrEBEEQBeMoTj7e9kIrMbKqIrcUruIDfVJTdgFkY0k5HchoegnLKJsN323bthKCanfomKavJROaCFTtFdgEWLZVU4vGReZaWxe0xvisS6vcP5HSG3gR94vfeQ7rdUIILaaRDBn26Yh%2FhUQBip%2FLrFy5iGFh1fltUlAUHtF2e9JqDcMO%2FG6rwGOqUBSqezphqS33dNieIEPPT5c%2BgNPaWVwdkhDK86xIUTyFKFZSJDP6LOPovcIIV%2BG%2F2%2F0UbgnRbgVHrXcDglALay%2BBuF3oNHUzqoehX0%2BR5FO5Yt%2FtBq5Jm3pebiFrE9sbfiNQnPPDgfNkOxFynZcwknb7KJ3hKBRvNVWQecJhUFhaRtAdDrMSq6E%2BRcN%2BzPnYNvgi6hQC6%2FUwNISXfGQnhhJkcSBXXW&X-Amz-Signature=64f1913523991f2e7fa33b4d065645345dcb78a5065ab128b49bded93ca275c2&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
