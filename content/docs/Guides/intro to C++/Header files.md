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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674R6EALJ%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T040928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrd%2FWrnfmFgqHhYKfxp1Q9nLszw2vZrUghH4BVOGk0JAiEAx71VzCI1jAWmTeJAR%2FPPdLAsWJI8rmOzFDJe8wL7hbgqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8aWbnOlyaCFAaPKCrcA1TY54hFnMpvJYMGXXWnjTJ3s%2B3SLD3k97iZDyTp1ZOZxBuRpg62hvA%2F%2BiOkaDR5N3PH5aW5bVnPk5FsqWE4Nh%2BPoWpoaoZ0yMiX%2FP2CoK4MZuVz3CouAqGNuZ6qfc8aIcG96HITGCC4vi8RJDebYru8N2rbczv8PBBauTy%2B19zjD1xTk9VS1yCeVXNdURVesPmTNW9R8TirlXnpxtaHVWEKCa6w4x8NHtWcNCagFh17muy9cDkzkpZtkMWOry4RGB4ax4KdkbgOfsVrOmf9c2cgZeAgCUMXaC7rdglkCoecA%2FWu8Fo3963%2BrMbZshNG%2BuVx72RHoZfjwINVbMdnSaNyEQKxxDjmUlL%2F04h7ZMRnWAQ1wYujZMKBxsk7IAqOcvKP176rCG%2BY9DdcpQvuWxfaCMuRxVOc5aUEVsZOVFStuEvKGUTmWoQQcfsyrL96QLhAneN6uKKDmlGogV4bEowamA5JtkfmHLLZNn4HZD9bjMdjGGgvQ7mGiEej53dPNjE%2FoXObNJrPaW3vf1flOVlh4oFJsdYoM7MYT3LfiokVFfRMX4jDkxmYWJclE8ceNu3PicuDPZ7k%2BZatH%2BbNaJbhtSNzN3CmcoWj9CH4pnOJSxBIg7kmAIRozBTSMLjS8LwGOqUBP%2FHkLKb0u3Odq8uZ2UEdtE%2BxNXCoradBNoQIaFcrO5ZnQU08sWisW1qkxTQ22VLgV3wLDhNwkCC0FqyC43TPjX%2FTa6PRW2xDTOKAGTpoZYSivLQjRlTXJg31BN9Ia4wc0VtoORVJ3FDPiQaMs6ARsejfqAtA1n06L0lAToumTHTx8mEskUJfNT%2BDVa5lYZLJwDvkNPHA9qO2RFvIkfcQrmPxoa%2Bn&X-Amz-Signature=d371f3cfc89813316fce42130d411689e7f75793980e13fedea367b151377818&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
