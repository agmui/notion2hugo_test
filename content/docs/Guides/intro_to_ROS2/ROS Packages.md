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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=cd1c5d6355fd333f58b65e5baf011f9b5d0daa242502145c71c0dcc354c79f4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=95481681d14180e16f762844db7fadab4bfac4041913e018b1cd74c0fc478ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=f0aa9aa1184ff829c4d276fe041e7b7e2f98464dda2516eb7c9d44ecaa6c7958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=9edb0052b1a482326c4acdd4d426c8bf22fef0eb7e95971ad9f5fbc5c94ccd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=12652f45c5c275cdc7189d8e3551ff8e4ab8c50309fc0bcf15e8e70f7188cbfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=03e6807ba39833ba7ab1b36b04e16db536c7357710e7e09adf5ce0ee9a56a05a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RL2UF53I%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T181254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCICP5pE3HvsZ9CTqiekLXHpUliFAKhmdmZXapXodMfR3EAiEAnVhFXLs2bJUuqzHvWxRBZFsSqXzTanZR6SDwfXrwSKIqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0zr0LCrzEMwWYb0SrcA4J7nWSGPMMgdJ%2FxVvoxgouMJxWyEW%2Bh5ppPCO3nS3q45QXe8m9l10jHqk%2FA5b0al8QR9tIyWXiehrpP8gwyRhmX7kLUdJYOTG%2Fhx8080A8uEa1CNwFtrq2Lbvv4GE0Go07gir7W4krr4ID6jgVgdmRXG3WPzMa5KWkS%2BZqKYDhTs%2FVsADA6%2FOJzQZV5T8X7AbD6HzfLGPJYy0zEwgO00DIaVNoQFh9lQbARVNUUirDCscW0mClhuQzbZKKZNpvT3hED0I7C0Trun6Ja4Gqv4nVkxN%2B3wZqcMCWhxMu7pjn2FeaMiKUbtnZjDWhdgeUV2%2FQYD2Dled%2BAfpa2bQcVg%2FDKJh8SZLelHuPUK%2BnMop6KQ9QtAWLVPwNhsb3ZnmyDKFOZ%2BjFS93RSvzIsrYeABmoVeGupAKP%2F6fbwzbzO2%2BmBcv8wvXgtQ%2B%2FBNfYeuCn4nUrHrgGub5rWI%2BOVYMqbp3Y2lrdclCCctePCVisPfUcbp3Zar0BHZCbuskHB0GsslXBhegeq69Zx6Vgw7ICO0UKGb8jVkLTaeQstc0n9e7CfZqLirdjOsdpegZyKAMKqEXH9ntf6FV8wprgbNhyRScuqgvh1WvkI%2Bm8yjWpX%2BZlj3o%2Br28uJapv%2BigDVMNOZ6sMGOqUBm8nr76swlO%2FJOTxFXcVDsrBN46BHi2nCip%2B0wbWAIGmByOmyFzmQ04mqX3H34KmEy2lneIroi4QIJv7Eci6MEME%2BbHTfUbzVoZaQObNkw4V1EGChXIxTmUKjMpY1lHSzW0EKmGdP6oyKzYBZTyWAql%2BZh%2FaID%2FbR4k3WVklNflICXuqEWwYQ%2F4d1XEBGg%2BkId4v6NVZDe8jNjz0TG9ijlrQk29wu&X-Amz-Signature=4948fbf4a5f0a21a6403f18af1afc9e33c3134b7a27e94b022fc4ead437b66ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
