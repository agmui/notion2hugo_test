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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AOETRIP%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T220838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwdlg8RN%2F1l%2Bqz0Wz%2FH4VfyWxR9MvJ7K8j0BKWRHG8JAiAVL9574OsD8MIRV8IenvCHua5RWFpU8XM1h2QVPWhSsCqIBAjb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2BNwOPelpFJfbZXEKtwDN0dfl77pGACwPWXn2Ug763haIP6WqShAQF5iRX6bVtBJ8G6JzY1dFH0Fa0hvQsYmUk31BtyccZnk2UkO3kRCAWooW8Mli%2BfajjptakzdOqEzQtcpJ0GV%2F7mPR1Sq05CGJ2IMwBGDQfyxY5okUHRf%2BFMpyBXAUxDfsuRU0hfxNKelKUq4pdra7NZP4%2F1qTNnT4AkQzUcwu7vkOMDjd1%2Bn7nVfBrJAEfCNmKwFSp8rWCACVML72uiz7K8fGWvrWdB1Oc%2B4wTZkTXzjtzmy4TuAoKjXoJORLQUqr9yPBrhfn6lHV1FKpIKNMPT6k8Zq1yN6yxslTc2bLuO%2BuoiOUKLG31Sggx1QxKloot%2BanNdfnMc%2BOY06mM0ekMyf9C%2FVRGIgwMn7hV0jQy34g029C5%2BJUwUNHsHte7rQpES0fWsT6%2Bd1x1h%2BzwEdfPnpTu9M4DYwAUjM5%2FCUPlEtM1ZdFXZi1wsb%2FlLTU5hmXT1K0QnFfjfMetrRk7sLR126XdTqf%2FMYDtAnnowmTNdqeDkZqkGfV804jrJ7xGKLiVGZrBkARIiT80gDg9pVMXnGThw%2B1nhrWG%2FO5y8TcRogworveaOMWLDgLzAqeNfxTTuBQVzcvCZMCvVcGkGIN81fVjww1LrjxAY6pgGhDsxpJu7TJHymMTskZLAg8wTBv%2F6Odao40TZhL5H%2BYDswwewwAVmdeNNmlLEHDEcZNAKQzjOGaNmiJPrR3gczxiTw0%2F8H303EPddrvKGbE0R06uvFPiHMawWc1WspZpshRSxTRNaxX76zt2FUeGUIhm2AkbcNN4nhF0Ci29alls%2B6%2BV%2B1HdL0N17y3l0mEtOw72xtxxQyiwORAuTd5iegMXfxbt8W&X-Amz-Signature=4380236ab845313ea1da65fce5bb1e9ce25fbf9ec274bc9e0859ebfc136e56aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
