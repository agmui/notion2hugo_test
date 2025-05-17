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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646FNAN7T%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T090800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZXOjoicIXKT6Em4TZGDIjaWdgh6Dfg9OsAr5nYZ27UAiAyYyuyJtibcHvv%2B72vf3AjjOr3iMpw0VjxEKFGPF9xfSr%2FAwhYEAAaDDYzNzQyMzE4MzgwNSIMjojJIqTum6JPTohWKtwDzZPlQbunPalUrloE6I6UKTOY9cp4YkmNzInROLBRFUZfEluAZMjdTEsNz7Q0gFMW%2BTtZ58LpkIdbXo6iYfIl8QN2BeC56YWBJ5%2BAsdjWknjXjx1jmSIbaoYmoVWyJ8A%2FM8Mtc2LtqJNqk%2Bi2kJOkR3E5ABixvTnmTu%2FnJc7RQnpMjfLkY0aEC4L%2F7lQCD6j4o0shEnJiTKSWEH5laFIP1LKtXIKmjyo6FVW2kHWD%2Bv5D1PxW%2Fs7bUjT4ml5%2FdobQ65CFpMtj8sGGVtKY8pSn%2Bdg0470FpQtIuk1W2hAYd9Tt%2BTHJrWOWZKO9pu9HHarj3U3tohkYC81ZyEhnUrV0vtmKmN2L6Fe66fcoIvXwTSd4Lgtz36F4JJIvwPYvaks4A656UK7A3f%2F4TkVR2km4IBCi00ACtbOidL2TUDfZjT1SbNVOnR6dJM%2FXrfieT3mZ735XWFKOknAgDFdEP5OZsza74%2F99rsB1NpTd6f6JFTrPnKbx%2FB6EaT81ZKW%2BJMgpej7JDS0EH%2BSJbHqU%2FPffEyjWVhXGCdJzp8sSB7LVUintrq0UM9GxAv2DUrxXSpvON8Emdd2R2%2FU0bsDJTVYFTImajK9wkLzPRaWMPPT9z27lw0ZbXy3pwF%2FBvGcw8eCgwQY6pgF0QuXoCi3a%2BhasTER3orKyQwa1FtO3XkpBctIbITixcT7sGl70gnXCPot5SOho2TpudBW5iPwcPfUmmzL3piUij0zIlNObeY8Tf5P7KlKHxSUqj9aTd%2B3kA7Ei5vj6oyct5Kbf5nHsciehoKTUTnBHxy40FxvrvFys%2BddpvDugxX%2FwKnEEqcQLIPkoPiSoVMUKH0HQ9dqLL06ljcy%2By5CxydY4cY1o&X-Amz-Signature=a4aacec41c35ff5de69971c93f28357a54d91196fc562ca9b7fa3c8dd78a7280&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
