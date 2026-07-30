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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=52ca2240b3d3085f5330d1894ea8b6603ed63fdc90f4df602ac96a2d8ce334da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=bb78f9f5f9b7d02ddae58961ea6ffe71acafec02d9e4782affc775ee7335a5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=82a22d1ebffcbf910b9688ca6d4f2e4ab991f5591632a7658971731e0cd28cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=2e0690bf2ee4fdcf35ea11e5561ca1a241de1523611f06175da1ae396724c5c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=61d75d706c6df9efae8a9cb7b7c0f6f9fb52514a941d4030772cef22234575d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=73d5de43e63207276d9c4e6457e6fc61413da445539f6a70a66c3bd33306a6c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OLZR5PJ%2F20260730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260730T022456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeoGlQ0AZ2ftNUE2CCKaUurCfpYQlAlLF6Jnh%2BK4cX2QIgM5af4hP2EFfY%2B92FwArPT6qD%2FpTEZj4pbQ%2BifhVG4zUqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBT9MfnP25ONcWqI4CrcA9gjYmuYlQdi9o3km0c9zyolGqxb4Jfrbtdrxg2nELgotjn42XholVpHAfBmeCryaubvkDtv7RjNG%2FHJL8uGsigVtdxq7b%2BvbhtIJiBmVDOrRYUQjuDv7NabCLWvjyJi8V7j0WXMn3C2zrdIJxP04vegz2ImqlvLwGkn01N5wNhKs85jGiiai4VBE3ba6%2ByHy3RqTbf3PqVUi5mIYN9Ce47HvUqZkcjmIaHxKwKTnofyakqxkpKDY7lXZzUKQGTh8Izs%2FESI6HGbxqBhn6AR%2FZc21r14%2FlZ1e6ofoK6F96eQi0DxnvnGw%2FU7EQxketgNtiV6%2F5YAdaFREYX%2BhiavPGOE7wsZlbxma%2F%2BHDN0ziPMgugT66IuvZpOJFbr5ks9P37V%2FEFjbY6kNT%2FDDAtp6ztaNANjmY4La9woR7SdYFz5UJgk24RvTHw2cCbCPV6hSzoGqPYLdXZNi77sPw%2FpI9V%2Fnpl25XtpNS0LDywHxDypNPyZ1wr7UqWqygStmoNfHI%2BA9jFBkeLdPggkv1bZW9qJl2PalRKhy8sJfioWbOi65ywkAr1KnkwwbFRR%2BhTJdqKnK%2BtUZI1xg9iet8qtnNVov0dQAVTuLEJTHcLqI0C8Kt3USefU4jm9P2s%2FQMNDfqtMGOqUBsFtzLxlAgv0haf0g5Vkj8cWxDHXBJvQG72qsT2a%2F3NyIf101A7zN2p0eLpOxJm118gS5yjwaAZI%2B16rCwil0eUzaCy%2BXfqtAyN0dZFw%2B7lVeA%2FHoDuWjcBs8B1RodPhLPFtWRm6usCimELeqxU2Yq%2FeY1bg7ZLBEkWqSJscVW%2Bl61kKeizWt4pSIL%2FJuoRJLoQVEku8GfaFX2Hw1%2FfFGp8X5vzjp&X-Amz-Signature=2956c080bd54345405446af4f88b01fc291dea79c40cd71ac817ba9f7a935b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
