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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=7bc4da1af2875f7f5a043cb03103bd8ec0062a2e58ef747982320f8609b0454b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=939dd3b549e23bea11909ac92d528bcb7f693de82a5fd49637993d6b9da7ac63&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=c4ef65252255973b0e5449f1e103ba2f73e79e6a698e5bb8b9b6888ad59e20cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=3a8bfe3ba8ceb59f0c606edfc776c4be1e481a564187170bc9a6243088deda94&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=1d30d8539c3b5b5be7cda230653d0807afc0ef45815a9fc804fdf109bc7000c0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=8700c0a874846712cae02f4ef14196c05dfc80d6de61106cce6888425d222570&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TI52KJ2N%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BRadWWHaXGj%2F7EyEORKhssutdVvujUh3dAWKY48GUnAIgGs%2ByDEoNPeeYnCivsEbZ4kboBX8n03D0j7o1sQ19wpAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFye6UPc8fJa5Z6mOCrcA2RfjttFt9aH404eZ3trQfa9KXEm%2FS%2F%2BGlpdrcIdlXWX3sMNd4cdvkks00vZoysQSc6%2Bdkz8ZZ2%2B87vZWQ3%2FOvwE0QbGDsikEWrpMb8bLuX3xBGI%2FYH5t7mi3J6RMrcr4RnfRnOJ0O84k%2FbxI5FuonZ1hsCW7tmDFAM7E%2FwLrKMo%2FmojKx1P5TQtFGognZ3Cp6cYojJF%2Beql4%2BFw42zUADE6EcfKtTJ6bQSxM7P2Xl3o1cOpGUMF16OJUf7gJkJCDT4BnRE64TYUvkxnMzz5ri6jI%2Brwm%2BapfIKyCMUeby8x8EllytUzUBAL150IGpmZV1y5OWs5lnpduTHmQY8f9M1XcBdV7dydsUTi%2FA90cHB2Sr0IQ8Tgwfo2gW4x%2B7khWmf466epqSnJgGbgNvrX2DuE051LgXK8%2FbRHb66iFFX1gbApE7hs%2FdJEu2SYWJZ%2B5AHd71BUVV01DfwYurJlp6SMtds3k0DyNyVSti1JEYaA9XmLMbacJbvQNVd01VGu8UED3du3E%2BpC98a%2BvDXPRQrq72R9MsH24KW1Idpd5OmukHjFxOAksHOBM5gcsNUFfwGtz8MlsQdE3v9V%2FNEQkm2p07hzruo9jlQWkvLIm5hefjR2XYjX6k%2F92gHFMIX8jMAGOqUBlPmtjPXR8wfyqbMtyzNkkWt%2B6gYaNxUEhkonmmu2W8IdXDVLxnfyg2%2FxCbyo8FULGyADSbn4vBa1Zg90QE7pZRrWKMMhNPR2fvUVhIgvEN70AEPeoV1BAR9vo9XO9FLwpjBO4HpPlCJeg3%2FBBDeJg4axsUfFrFAn1lF0p24PwLfKhB8yWO24W44hUmuEH7FtkkiWkD%2B2mdryCyKuPhKtGNojMGUZ&X-Amz-Signature=3cdf559e7e131f3cfdd97091e42f7d002f0aafd2f355f9103046e995a6379f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
