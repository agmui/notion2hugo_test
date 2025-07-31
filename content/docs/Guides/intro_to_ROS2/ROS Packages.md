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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=11f52a40a9c4bcb6a707a2a9db7f557779f1b9f30487b621dc609378cb398a16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=63900ccbb10b0d325074414a07c92da3aa2468253aee047d8350085d70a852f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=5a5dedd3c03fe7d8c2ca3e686e2fa6b0abefd89c1eaec52f8779d300b233599e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=589a1bab50f66d8f03287afd3407965eb8fb4979bab057ec410c53c71dd7a34e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=5027ca697f314e6c9c87b3270786c00181a195633a1179ce1283b92065d9177e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=660ba9a696a093c432d208c2d9eb613e3d4409f985e188a888052fb95681259f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y43SF2YN%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T191140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2ByrGy7TpBLqy7z4p%2BDYCgKvBcN1QC561ZQ9e3UeiKAAiEAsa96vBdyEbysP7jqlhtmrQ1pD%2BbgVeA2P1TvOhVx1a4qiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLpwD5MHHPE%2FOFfs6ircA3fGFPgtrjOsCWrw4LEXZZB3KkFWoeDoNOdcOIceFsZeR2QZQ%2ByAS%2FLsfRRAYf6qgH1fD4gSQHvlsFRW5OGTBz4yaSYCYsMbiag%2BET7KVHAHnpKS96hyLmGdFVOLnKdJmIvxwYCEMczBad07ymxvXc1C2ASuiAU7Av7GjrhYcjO634Hc8Lb99gp%2FBYQC4GiQV5K4eGzJV%2B6nBf3tFWLsDIxBOFV%2Br526CHLRqURlJxT8N%2BnucJFwfmdu9yuEYwSjl2jDF9WvQt3m3TXCGFXG2PB5IjeEs6DkK663JkQlo0X3tFGAWCZLES%2BkYRgGYYHbg7pjMP%2BnkUHYsvZm4UrSp0an4mL4zQfjbDtKVoFjmL6PolrnlOBt9%2B0xoHJwfi7BokCYTTd735NhNU2gT4WTlaCs3cG8ly07AgbSe3Ot7baPTv4RlmykUFVQ76Dkvfj7tE66nFc%2FmsGa%2FvNxvRJkHYIHS9xuvFNXSJWEsQGvYK9mGqwCWlrQyIKPMoswaZoEVYwBxyGNG6tg5iY00qoT5N89amh4vj6BgAgIaFe8PqjzsqsRIo8GzQb42hbq2rVJnfKud1dl9%2BYVO2kRdS6%2FHXUyjJTWvdxidVTQpm9QrJ0zWoI1Y1FO9KDZXTQaMKHcrsQGOqUBnElRhTFP1YpTTl73zjQMBBv41YplcXIglGiCy18E8lct4SaFdwyp2%2FsJmHeZQzNYwIt%2FWqp0OB81Vg1KsTppXQ7PXhTsr6KSelCRpMaq01%2BuJPdpmp1AhFunjtpcd%2BnPW6fq74pI3WjhSMZsmpiyBJU4za0W3fstWs3yfL4zwyw7jhZL3FMtLS0KrMHDtf0c5ERQFHS7fxKxzVCSDbnw%2Fotl0m3M&X-Amz-Signature=c429ea2bb70e6bc38cdb99280260e4bbbcb446e3646c70b0f32a63f2ea8c9cb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
