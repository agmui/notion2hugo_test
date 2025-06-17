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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4V7JYI5%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T081316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAulsiEhOBCllal5GXYPEsPkb0jZNrDj7y%2FbrcWVrPrIAiEA7Cefl8vcqu53mTF%2BSkYRDwV2knAi8w2mc1iApuj3558q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDOim7NTbBXpR7kVmmircAw0h1nOglNOW9bZOffPUqKPzI1o7NmHvxYjZW9lsOHjyA9jwqN2miQXoivmyDsuF6u4isfivj3vsa31ISq7gpo10ofl0CfVAC07AceJwvZwfsY0EoflcERGMufrus8M%2F7A0wN6XD1K0ubgUfRL%2BhGcrPZIr%2Fx5so38BYox0YCVCXhQeztmzrlPoLpoGV2lG%2FGs9Ac5Gb8Rw91jvi8fZ7RA8YgFJ2vxeWkhdcW72Fm6cgtN3OrWfEd74BAOm6Wh7ijsl0SmGa94J%2Bi8cbjUuD9kdkTru7Ir4uL9GhPQst2DNyAtLVJD1zI2d76oZ%2BmyxYYBSezUrKINhW1HShlXnHqKTR76T3t9SIGb95ehIyWcGh37syTljQB4Zvnhi%2F0Ft3oOvdCyFU26uW3MZmK0PEx8AhvWTNZQtfysGgbuC4cYtJa3ft4ISYhO092eboXMHgfPQrwNQaSXyH3%2Bkwfb8QnMnIs6MooJg8n8xASgEQWbI4DYo6gCLu5oT%2FBw2tqsAaDKuguLzJBAhMVFQgYrniUVhb%2BigZ62%2BaSVdMtKQDJ%2FWOBfcSehG%2Fza%2FqcnumU8ZPjQjAlmwEWLSei8m%2B7nPOO16FFeP%2BakCNyyyj6n8jn%2BEMIfoHapSTGcvlkw4JMK6%2FxMIGOqUBBhTuCMqK%2Fzylj%2B7XwAavCymzG03szz0%2FARaZGWOAIxPrmzk25tJvVN90wEbN%2By%2BLcvgdCMLoz5oR0q9g6735XJw2XADzcPze2UE9YxAMeKkbvyy7xplmej%2BpxEIw8FavuhnhQEOCXUKZeINkLU6NX03orHf5lxpxKP3M3Lhi4ugkfPNedyC9ZU7VvDevxGn%2FQokCmxkaO6yGeQRe602UkkIsFgt1&X-Amz-Signature=d89eed2320232114ff4b364240b9a9256af5de6a10d137058b161daa1ed235f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
