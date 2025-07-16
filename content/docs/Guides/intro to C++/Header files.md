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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBRRED5H%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T081323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGre4haRPDK5Iu0Y3pofe9TZccSdwfAZmXV%2FrRR6DVZtAiEA471NrZHPktPUxH%2BsJt2A3IDZh%2BL%2BItrdmUilOci8Cgkq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDNHEAaL1LUS3xNQoeSrcA28lEN0Zq8dVndJnbnPQG%2Btz3YpwamBRTccrCBIrXwFfYTa4x1AgsLn1tAlFIOP7qEGdsCn%2B%2BC%2Fi7mU%2BUb%2BakUbi%2F1REPI5f2ourdPoXAvGNkFkX%2FVjPkgFVADZT2xX49TR33TfQDqqXxmDwOy4ii2xTKzUDh3nHWEiZjO988Bzw%2BwHvJFYWUaBUYI2%2FnxVHRsbh5rnsqzJKa%2FOY8tZELrP%2F0QDiHwe0OA8tgpHXB2wtWL8tBj90P3LEUiIEAGjtgxY%2Fafpt8WohzjVCKfE1Qrsgrx5iohipAaDIcON0VpxcmROS4FadbxFRo%2FIsr4IZKHNXdOsvZsj3zvpkR7N46VAhJDHa%2BKOe2h4X%2FvkAfuv%2FsxCmWmfFQVtHUkzhl8asBowovpD2%2FsgpYKebKfkrTn4N6aVk5qzcu1pueaP7%2FNwQg5icu%2Frr8wOLHiKnjHPtYxd0lWiQ0NIdRCLpgKJr45Raad%2BXlh%2FkLomhQt%2BjEUpO4av0QnBdQpYFcKMhwFGQBJrTC3KT1wT0MGJnAsrWSNwTgJZpILevKOpgmYWZJhcEGIX0YbVd31vix32EuVuFbyeoCpqW5k%2BjHkQZGXsiFK7TGS5iUbPKaKfxK0fc2BhwZvx1wfpwzPnPMhQCMOyQ3cMGOqUB3fUJtCNHcgl1fWHEDMoAjjLCXk2rv%2BPQ43DfIBJGP1VJpU72OlRAdNe3jW22zZVOdEYS7bMcY4g0Qdjc2cXLMHq%2BQKApElr8qwtXsoPuy8r1O9lCu5TIJSNib%2FtwnlhLhVeARvqSVK%2F%2Fi%2F1Y5b7cSi6eBvlROrsrD%2FIw1QWjfbhJw3AHjppypP2hJwBWRb3xmCSvkYuB07pJb%2Ffy2OsbmYoOSmJh&X-Amz-Signature=b45f89376563137bfa0b5214d02b11f4eb5eded6d0aabb6e908ac56b84bbc1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
