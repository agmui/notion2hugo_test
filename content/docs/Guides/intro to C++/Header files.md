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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UH2NO5U%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWApxi9dUKLW4bDrYP0GP9WG7Rq35wQIKZPS9pPZ2VaAIhAPm7dlIF18KSEjQO1TtzYF9Kk%2BBlAAavZ9AN2JtHf7%2FRKv8DCBAQABoMNjM3NDIzMTgzODA1IgwXWqoBs5z2VS%2BjwGcq3APqQoshVy09sSSEVTLOyLsjmRbhTDR9jiLJUhYCWZHgprgxIflxghmmtmgDDWdMcjee8YuEeJfqQ1R1zxQzTPdcFrhGN1EqtdbzxsFQM8WX7%2FeLQ8xIl3FEcU1ak93estwMqy6rth5Qz6W1%2FvD7DL8N%2BWn5we1NBGwdUblH%2BDpTpMay%2BuixZy2y8hSLsPbPwyw1A18mFqPSjnEAlglMZpmaEd2X%2FUM%2FNFgTpcMnYjxwGuQA8Au5f8eJXcfUB2n7Gljdwxq%2FwA7184PAUEsXuqObrQij0HbUQvOElkLNJfUrlr%2BzKExTiD2NgQXZdRGEjKJzecE%2FD8zytBJ05j6uTgDl8xYZot%2B1fTksXiuaOeVCs1VnWrS%2FajCmZaGk4xElfOnRwmi8p0PbcosxuEAwpKG0c1sC9iLiF7YaF%2BPW3fh%2B%2F0en2w5joqO04AolWDMoooQ7N%2FENQ%2BVqU3CoVncChsbgcnB4DDD8CE9czTDRkwNkvx0UJ%2FCYOW6gyOkneHxXct7K37sxlDeqZpF46moberuLMr1bvDJZQKiK%2BBpQ9In2HeQrPM81akeqryKQqtuEODspBGI0eUtsMA3jhH8cSsz%2FW%2BicFHp3Oz7vaxUXbWw16C6RB2Gs856Ik8R8HDCH8LbEBjqkARS8FsHamhEEb8naSdFX132KOOKF9ACaaD7d%2Bd73%2FLmu8yM6ZLgcJ3zkm4FDp4cULuVod%2FSWJzUZtPd1u78qKSuYZicu8mjmXzuRgshAse8f%2FE5xTYHyWgoDB%2F8uwmlKg9gytftzImR2SOvjvEy7ITA6OuMBuJ0m4Lu0E%2BtXFXzHLMCirZASjw8v1SJO3Bl3gQ6%2BycdxkukSWP%2FLjkrOGFrhWbog&X-Amz-Signature=6f3ed67ccf0d19b50dbf9607463803479b2decd3e1cabcbacca4d1fb93575cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
