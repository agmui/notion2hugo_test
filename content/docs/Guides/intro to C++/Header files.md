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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635WE6JWD%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T181036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaZ8SPD1JlW4PeUGt%2B7318hBv0%2BT8bmzgWrTaLAgoHeAIhAIQvhUAlm8meIjSX0lZLoQ4laTA%2FJxfBKRZKV5Oflz8GKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4kPcCc5Gd5HT%2BQ3Uq3AO6b2nnPCv4hmWUCLex%2FTBpY%2F%2BbMujlQx9jtlC2pSCme6J5A2UKj0JVQtMbvZFP45mQWeSOQjBD4DaWgDwyhsqniyF%2FL36cfgocn5U5u4ftKsA24tjSjs9i0m%2BOTfuUCTfLI98eVqMB7S7HSQG6iVZ0g08Y9ySbfqfEYUu6x03Al8hetpGkkc263dgiWPbmE1%2FGziOOIJdHXEad40IbQYjIdeLxflYkRPCQHFMozo1K35z7%2B8K0VRSMaOfyD02PAlHwtq3Le4iFqPjtrifyWbnBxlqeKTW9i10LL730lIIR%2FvNMtyfAWCe4stPVgb0FJgX98mrtZpu2QIGlfIzQxgrtPdZ4dP8Yo677kx3Qiv0MrMvl1bbRpQ1VFEl49KoaOkyWw5AlPvkK0FZeEdh2ZNgg4uIb7ESS9cZhMDOZ5uVaUHorDxePP39l8w4t84MjwLfzdeEVSrvIr2L%2FQYKluPALbSvFevAaNyjbYw%2BA38FfAM%2B3JjzFTEOQ8uOdXX%2BRKmX8bWlkX0laSZXW%2FMyXdS4KdjO7xaXgM4GFarsOcJVrN823PFxdnzkNaFooNtQnVkMQa0OGTHknoubu7KwLqyJODJwaN6prvqy30uv3Tl6F4poau2at4wJWAuBi3zDTzYDDBjqkAfpwZu170p%2BRyUknMQHXP0P9AXabWQojPLC46HM7aQXTbNhdYDJKyi8esp0l5Db%2FHr67xxS%2F4tktOTPuK69RGXlnFcuoo3HX0PXl%2BzY0LgIYEaJrc1kYgDjnOa1%2B%2FM5nXy1Kw%2BpqfqNJfbISi6KzNyVUX%2BBmn3zCzRBGTje2NbP2OiEmNAICwA5Qzc7grgnHw29ZR1hIQ6JAxLtezKTZGGiBQwk3&X-Amz-Signature=c7e886c41212d2b62ea18a231f94fc2a09a85d23eb0e72b321bb48486b1021c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
