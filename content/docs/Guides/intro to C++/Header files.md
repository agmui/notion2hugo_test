---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KVPCLSO%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDghlJjBFm550FJy6MJ6rKeLULXMjbqzQjOGIpM8c172gIhAKdU68kx9B9k3l4uggSuEt%2BS5q69GIz5tGGXXjOiM3PzKv8DCFMQABoMNjM3NDIzMTgzODA1IgyVHqVqWFcJgur%2Fl3oq3AOWg68ezKYUw42ErFzOTmI4A5zqJ%2FdNSqTlbQD797D75CdSR5z2uYS6iLb3j4Hx%2BVzgcffcoNU%2FgH30h2PqerpFS5XbeuJqAcKY%2FGErjKhNeLsYBswnxhDlE0T7VVLRxybDyThP8jNsiJCMiJUVRw5i%2BNFGOVjVGiHf2MZyzAduwV1ORt1QLOkU4Cs5B8VAdZm6Akx33e340EEJP71IUAObftFXShdWwDudXcQnF%2FIlTIZ1RZhwXLfgp%2BeRTgZzM6n1xS76uzQCM4b2gMy21bKqWlAkNd8Lmvn8ouLtQcW1ru5kPH0uenxQGgIJ%2FUX9AhLCY0KE%2Br8r969tvV%2BWe2wk5SDDsO9IVPdI7V%2FLqBtCuMkNzgvR9RkpRk6%2B6hU8u6rRYf6OSnOTjwZGvVKiYN18jUvAE1ubDWlDoeqZIsSwZjCKUcqeUnInX9UjzOlatZWz0P3xXZ%2Bb4Jzc6sKUzdxCqchmP2nz7XY2LdgWU9vNHkGpAtPJ4MM2bm9m1UNzcEkOuIWnJ%2FW%2Fp6YdgDPlhf%2Ff51Eo%2Fu8SUrwb5huniFTCQnJeHkNLqxU3Pwk3BkOWdEpkTZjrieKPK8R9hqgYTvHOQcLtf1RbrQoj4nFOlfq4UyGRjuTfJ3lyasPEXzC43J%2FBBjqkARy8qNYLfz5fJ8WCI20FdiK7EAhbGTIqp%2FRP2pBJUMcrBmhLN6VS0xAO2MuuhA4DeoeygjVLXM6jWgfSt3jmJNcvHcoVKRJDLq7fMnOn%2BKnzIa3cAzcNJLVIO6gZ%2Frn90LcNB8M1%2BdV8fcMTbcXRzW%2By3dplFyGtOCQiFzkRLeJ%2FApgUc2nqpDVM5Hb0FuRIbeHcVXrrHzblptjxD4bkzroXfz6W&X-Amz-Signature=ac8f2e6926dcbe1ff5e9de7d4bec1929cfe7568a6c3c61332dea6c8cdec4afef&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
